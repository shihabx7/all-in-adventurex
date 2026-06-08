import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { eventPageQuery } from "../../../lib/query/eventQuery";
import { locationDynamicPageQuery } from "../../../lib/query/HomePageQuery";
import { locationSlugListQuery } from "../../../lib/query/navMenuQuery";

import {
  getLocationSlugList,
  getEscapeGameSlugList,
  getOtherGameSlugList,
  getEventSlugList,
} from "../../../lib/menuDataFormation";
import {
  getLocationEventData,
  getPageData,
  getPageMeta,
  getEventBooking,
  getPartyBooking,
  getBusinessHours,
  getMapInfo,
  getAllBooking,
  getEventDetailData,
  getEventTestimonialData,
} from "../../../lib/locationEventPageDataFormation";
import { getGiftBooking } from "../../../lib/dynamicLocationPageFormation";
import { checkActiveMobileEscape } from "../../../lib/dataFormation/mobileEscapeDataFormation";

//====================================v2
import {
  eventDatav2,
  eventFaqListDefaultV2,
} from "../../../lib/v2/data/eventDataV2";
import { eventPageDataFormater } from "../../../lib/v2/formate/eventPageDataFormater";
import {
  eventMenuSlugListV2,
  eventPagMeta,
  eventPageData,
} from "../../../lib/v2/formate/eventPageDataFormaterV2";
export const getLocationEventPageDataV2 = async (locslug, eventSlug) => {
  const eventDataReq =
    apiUrl + "events?filters[eventSlug][$eq]=" + eventSlug + eventPageQuery;
  const pageRes = await fetch(eventDataReq, apiSetting);
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
  const mobileEscapeRoom = locationResData.mobileEscapeRoom;

  let isActiveMobileEscape = false;
  if (mobileEscapeRoom.length > 0) {
    isActiveMobileEscape = checkActiveMobileEscape(mobileEscapeRoom);
  }

  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;
  //console.log("Location Parties:"+locationResData.escapeGameParty);
  const totalActivities = locationResData.locationActivities.length;
  const totalLocations = locationListData.length;
  const locEventData = getLocationEventData(
    locationResData.locationEvents,
    eventSlug,
  );

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
    eventName: eventDatav2[eventSlug].eventName,
    eventSlug: eventSlug,
    activeGameBooking: true,
    hasMobileEscapeRoom: isActiveMobileEscape,

    locationInfo: locationResData.locationInfo,
    eventBooking: getEventBooking(locationResData.bookingInfo),
    partyBooking: getPartyBooking(
      locationResData.bookingInfo,
      locationResData.escapeGameParty,
    ),
    giftBooking: getGiftBooking(locationResData.bookingInfo),
    allBooking: getAllBooking(locationResData.bookingInfo),
    businessHours: getBusinessHours(locationResData.businessHours),
    holidayHours: locationResData.holidayHours,
    mapInfo: getMapInfo(locationResData.mapInfo),
    //==============================================v2
    pageMeta: getPageMeta(
      pageResData.seo,
      locEventData,
      locationResData.locationName,
      locationResData.slug,
    ), //eventPagMeta(eventSlug),
    pageData: eventPageData(eventSlug),
    escapeRoomCarouselSectionData:
      eventPageDataFormater.escapeRoomCarouselSectionData({
        fetchEscapeGameList: locationResData.locationActivities,
        locationBookingInfo: locationResData.bookingInfo,
        locationSlug: locslug,
        eventSlug: eventSlug,
      }),
    eventFaqList: eventFaqListDefaultV2,
    //===========================================v2
    /*
      pageMetaOld: getPageMeta(
      pageResData.seo,
      locEventData,
      locationResData.locationName,
      locationResData.slug,
    ),
    pageDataOld: getPageData(
      pageResData.pageHeroData,
      locEventData,
      locationResData.locationInfo,
      locationResData.locationName,
      locationResData.slug,
      totalActivities,
    ),
    eventDetaliData: getEventDetailData(
      pageResData.whyAllinAdventures,
      pageResData.makeItMemorable,
      pageResData.whatToExpect,
      pageResData.eventName,
    ),

    eventTestimonialData: getEventTestimonialData(
      pageResData.eventTestimonials,
    ),
    */
  };

  return pageDATA;
};
