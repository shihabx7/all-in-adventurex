import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { eventListPageQuery } from "../../../lib/query/eventQuery";

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
  getEventListPageMeta,
  getEventListPageData,
  getEventListData,
  getPartyBooking,
  getEventBooking,
  getMapInfo,
} from "../../../lib/locationEventPageDataFormation";
import { getGiftBooking } from "../../../lib/dynamicLocationPageFormation";
import { checkActiveMobileEscape } from "../../../lib/dataFormation/mobileEscapeDataFormation";

//========================================v2
import { eventPageDataFormater } from "../../../lib/v2/formate/eventPageDataFormater";
import {
  eventDatav2,
  eventFaqListDefaultV2,
} from "../../../lib/v2/data/eventDataV2";

import {
  eventMenuSlugListV2,
  eventPagMeta,
  eventLocListPageData,
} from "../../../lib/v2/formate/eventPageDataFormaterV2";

export const getLocationEvenstListPageDataV2 = async (locslug) => {
  const eventDataReq = apiUrl + eventListPageQuery;

  const pageRes = await fetch(eventDataReq, apiSetting);
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
  //console.log(locationResData);
  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;
  const mobileEscapeRoom = locationResData.mobileEscapeRoom;
  let isActiveMobileEscape = false;
  if (mobileEscapeRoom.length > 0) {
    isActiveMobileEscape = checkActiveMobileEscape(mobileEscapeRoom);
  }

  const totalActivities = locationResData.locationActivities.length;
  const totalLocations = locationListData.length;

 
  const pageDATA = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getEscapeGameSlugList(
      locationResData.locationActivities,
    ),
    otherGameSlugList: getOtherGameSlugList(locationResData.locationActivities),
    eventSlugList: eventMenuSlugListV2(),
    totalLocations: totalLocations,
    isPublished: locationResData.isPublished,
    locationSlug: locationResData.slug,
    locationName: locationResData.locationName,
    hasMobileEscapeRoom: isActiveMobileEscape,
    pageMeta: getEventListPageMeta(
      seoData,
      locationResData.eventListPage.seo,
      locationResData.locationInfo,
      locationResData.locationName,
      locationResData.slug,
    ),
    pageHeroData: getEventListPageData(
      pageResData,
      locationResData.eventListPage,
      locationResData.locationInfo,
      locationResData.locationName,
      locationResData.slug,
      totalActivities,
    ),
    locationInfo: locationResData.locationInfo,

    eventBooking: getEventBooking(locationResData.bookingInfo),
    allBooking: getAllBooking(locationResData.bookingInfo),
    giftBooking: getGiftBooking(locationResData.bookingInfo),
    businessHours: getBusinessHours(locationResData.businessHours),
    holidayHours: locationResData.holidayHours,
    mapInfo: getMapInfo(locationResData.mapInfo),
    eventListData: getEventListData(
      locationResData.locationEvents,
      pageResData,
    ),
    //===========================================v2 pageData
    pageData: eventLocListPageData(locslug),
    partyPackageList: getPartyBooking(
      locationResData.bookingInfo,
      locationResData.escapeGameParty,
    ),
    escapeRoomCarouselSectionData:
      eventPageDataFormater.escapeRoomCarouselSectionData({
        fetchEscapeGameList: locationResData.locationActivities,
        locationBookingInfo: locationResData.bookingInfo,
        locationSlug: locslug,
        eventSlug: "birthday-party",
      }),
    eventFaqList: eventFaqListDefaultV2,
  };

  return pageDATA;
};
