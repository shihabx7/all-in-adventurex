import { apiSetting, apiUrl } from "../../../../lib/apiSettings";
import { eventListPageQuery } from "../../../../lib/query/eventQuery";

import { locationDynamicListPageQuery } from "../../../../lib/query/HomePageQuery";

import { locationSlugListQuery } from "../../../../lib/query/navMenuQuery";

import {
  getLocationSlugList,
  getEscapeGameSlugList,
  getOtherGameSlugList,
  getEventSlugList,
} from "../../../../lib/menuDataFormation";
import {
  getBusinessHours,
  getAllBooking,
  getEventListPageMeta,
  getEventListPageData,
  getEventListData,
  getPartyBooking,
  getEventBooking,
} from "../../../../lib/locationEventPageDataFormation";
import { getGiftBooking } from "../../../../lib/dynamicLocationPageFormation";
import { checkActiveMobileEscape } from "../../../../lib/dataFormation/mobileEscapeDataFormation";
import { eventListPageDataFormater } from "../../../../lib/v2/formate/eventPageDataFormater";

export const locationEvenstListPageData = async (locslug) => {
  const eventDataReq = apiUrl + eventListPageQuery;

  const pageRes = await fetch(eventDataReq, apiSetting);
  const resObj = await pageRes.json();
  const pageResData = resObj.data.attributes;
  const seoData = pageResData.seo;
  console.log("Loc " + pageResData);
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
      locationResData.locationActivities
    ),
    otherGameSlugList: getOtherGameSlugList(locationResData.locationActivities),
    eventSlugList: getEventSlugList(locationResData.locationEvents),
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
      locationResData.slug
    ),
    //================v2
    pageHeroData: eventListPageDataFormater.pageHeroData({
      locationSlug: locslug,
      locationName: locationResData.locationName,
      pageHeroData: locationResData.eventListPage,
    }),
    eventListSectionData: eventListPageDataFormater.eventListSectionData({
      locationSlug: locslug,
      locationName: locationResData.locationName,
    }),
    escapeRoomCarouselSectionData:
      eventListPageDataFormater.escapescapeRoomCarouselSectionData({
        locationSlug: locslug,
        locationName: locationResData.locationName,
        fetchEscapeGameList: locationResData.locationActivities,
        locationBookingInfo: locationResData.bookingInfo,
      }),
    gallerySectionData: eventListPageDataFormater.gallerySectionData({
      locationSlug: locslug,
    }),
    testimonialSectionData: eventListPageDataFormater.testimonialSectionData({
      locationSlug: locslug,
    }),
    faqSectionData: eventListPageDataFormater.faqSectionData({
      locationSlug: locslug,
    }),
    //===============v1
    pageData: getEventListPageData(
      pageResData,
      locationResData.eventListPage,
      locationResData.locationInfo,
      locationResData.locationName,
      locationResData.slug,
      totalActivities
    ),
    locationInfo: locationResData.locationInfo,
    partyBooking: getPartyBooking(
      locationResData.bookingInfo,
      locationResData.escapeGameParty
    ),
    eventBooking: getEventBooking(locationResData.bookingInfo),
    allBooking: getAllBooking(locationResData.bookingInfo),
    giftBooking: getGiftBooking(locationResData.bookingInfo),
    businessHours: getBusinessHours(locationResData.businessHours),
    holidayHours: locationResData.holidayHours,

    eventListData: getEventListData(
      locationResData.locationEvents,
      pageResData
    ),
  };

  return pageDATA;
};
