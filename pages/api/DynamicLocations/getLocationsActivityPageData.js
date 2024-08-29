import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { activityPageQuery } from "../../../lib/query/activityQuery";
import { locationDynamicPageQuery } from "../../../lib/query/HomePageQuery";
import { locationSlugListQuery } from "../../../lib/query/navMenuQuery";

import {
  getLocationSlugList,
  getEscapeGameSlugList,
  getOtherGameSlugList,
  getEventSlugList,
} from "../../../lib/menuDataFormation";
import {
  getLocationActivityData,
  getPageData,
  getPageMeta,
  getGameBooking,
  getPartyBooking,
  getBusinessHours,
  getMapInfo,
  activityDetailData,
  activityVideoData,
  activityGalleryData,
  getAllBooking,
} from "../../../lib/locationActivityPagaDataFormation";

export const getLocationsActivityPageData = async (locslug, actSlug) => {
  const activityDataReq =
    apiUrl +
    "activities?filters[activitySlug][$eq]=" +
    actSlug +
    activityPageQuery;

  const pageRes = await fetch(activityDataReq, apiSetting);
  const resObj = await pageRes.json();
  const pageResData = resObj.data[0].attributes;
  const actSeo = pageResData.seo;
  //console.log(pageResData);
  //fetch location info
  const locDataReq =
    apiUrl +
    "locations?filters[slug][$eq]=" +
    locslug +
    locationDynamicPageQuery;

  const locationRes = await fetch(locDataReq, apiSetting);
  const locationObj = await locationRes.json();
  const locationResData = locationObj.data[0].attributes;
  // console.log(locationResData.locationActivities);
  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;

  const totalActivities = locationResData.locationActivities.length;
  const totalLocations = locationListData.length;
  const locActivityData = getLocationActivityData(
    locationResData.locationActivities,
    actSlug,
    locationResData.escapeGameParty
  );
  //console.log(locActivityData.locActivityDetails);

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
    activityName: pageResData.activityName,
    activitySlug: pageResData.activitySlug,
    pageMeta: getPageMeta(
      pageResData.seo,
      locActivityData,
      locationResData.locationName,
      locationResData.slug
    ),
    pageData: getPageData(
      pageResData.pageHeroData,
      pageResData.activityInfo,
      locActivityData,
      locationResData.locationName,
      locationResData.slug
    ),
    locationInfo: locationResData.locationInfo,
    gameBooking: getGameBooking(
      locationResData.bookingInfo,
      locActivityData.bookingItemNo,
      locActivityData.isActive
    ),
    partyBooking: getPartyBooking(
      locationResData.bookingInfo,
      locActivityData.escapeGameParty
    ),
    allBooking: getAllBooking(locationResData.bookingInfo),
    businessHours: getBusinessHours(locationResData.businessHours),
    holidayHours: locationResData.holidayHours,
    mapInfo: getMapInfo(locationResData.mapInfo),
    activityData: activityDetailData(
      pageResData.storyLine,
      pageResData.plot,
      pageResData.mission,
      pageResData.activityName,
      locActivityData.locActivityDetails
    ),
    activityGallery: activityGalleryData(pageResData.activityGallery),
    videoData: activityVideoData(pageResData.activityVideo),
  };

  return pageDATA;
};
