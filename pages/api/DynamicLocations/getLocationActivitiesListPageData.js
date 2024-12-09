import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { activityListPageQuery } from "../../../lib/query/activityQuery";
import { locationDynamicListPageQuery } from "../../../lib/query/HomePageQuery";

import { locationSlugListQuery } from "../../../lib/query/navMenuQuery";

import {
  getLocationSlugList,
  getEscapeGameSlugList,
  getOtherGameSlugList,
  getEventSlugList,
} from "../../../lib/menuDataFormation";
import {
  getBusinessHours,
  getAllBooking,
  getActivityListPageMeta,
  getActivityListPageData,
  getActivityListData,
} from "../../../lib/locationActivityPagaDataFormation";
import { getGiftBooking } from "../../../lib/dynamicLocationPageFormation";
import { checkActiveMobileEscape } from "../../../lib/dataFormation/mobileEscapeDataFormation";
export const getLocationActivitiesListPageData = async (locslug) => {
  const activityDataReq = apiUrl + activityListPageQuery;

  const pageRes = await fetch(activityDataReq, apiSetting);
  const resObj = await pageRes.json();
  const pageResData = resObj.data.attributes;
  const seoData = pageResData.seo;
  //console.log(pageResData);
  //fetch location info
  const locDataReq =
    apiUrl +
    "locations?filters[slug][$eq]=" +
    locslug +
    locationDynamicListPageQuery;

  const locationRes = await fetch(locDataReq, apiSetting);
  const locationObj = await locationRes.json();

  const locationResData = locationObj.data[0].attributes;
  const mobileEscapeRoom = locationResData.mobileEscapeRoom;
  let isActiveMobileEscape = false;
  if (mobileEscapeRoom.length > 0) {
    isActiveMobileEscape = checkActiveMobileEscape(mobileEscapeRoom);
  }
  //console.log(locationResData.mobileEscapeRoom.length);
  //console.log(locationResData);
  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;

  const totalActivities = locationResData.locationActivities.length;
  const totalLocations = locationListData.length;

  const pageDATA = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getEscapeGameSlugList(
      locationResData.locationActivities
    ),
    otherGameSlugList: getOtherGameSlugList(locationResData.locationActivities),
    eventSlugList: getEventSlugList(locationResData.locationEvents),
    totalLocations: totalLocations,
    isPublished: locationResData.isPublished,
    locationSlug: locationResData.slug,
    locationName: locationResData.locationName,
    hasMobileEscapeRoom: isActiveMobileEscape,
    pageMeta: getActivityListPageMeta(
      seoData,
      locationResData.activityListPage.seo,
      locationResData.locationInfo,
      locationResData.locationName,
      locationResData.slug
    ),
    pageData: getActivityListPageData(
      pageResData,
      locationResData.activityListPage,
      locationResData.locationInfo,
      locationResData.locationName,
      locationResData.slug,
      totalActivities
    ),
    locationInfo: locationResData.locationInfo,

    allBooking: getAllBooking(locationResData.bookingInfo),
    businessHours: getBusinessHours(locationResData.businessHours),
    holidayHours: locationResData.holidayHours,
    giftBooking: getGiftBooking(locationResData.bookingInfo),
    activityListData: getActivityListData(
      pageResData,
      locationResData.locationActivities,
      locationResData.bookingInfo,
      locationResData.escapeGameParty
    ),
  };

  return pageDATA;
};
