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

export const getLocationEventPageData = async (locslug, eventSlug) => {
  const eventDataReq =
    apiUrl + "events?filters[eventSlug][$eq]=" + eventSlug + eventPageQuery;

  const pageRes = await fetch(eventDataReq, apiSetting);
  const resObj = await pageRes.json();
  const pageResData = resObj.data[0].attributes;
  // const actSeo = pageResData.seo;
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
  //console.log(locationResData);
  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;
  //console.log(locationListData);
  const totalActivities = locationResData.locationActivities.length;
  const totalLocations = locationListData.length;
  const locEventData = getLocationEventData(
    locationResData.locationEvents,
    eventSlug
  );

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
    eventName: pageResData.eventName,
    eventSlug: pageResData.eventSlug,
    activeGameBooking: locEventData.activeGameBooking,
    pageMeta: getPageMeta(
      pageResData.seo,
      locEventData,
      locationResData.locationName,
      locationResData.slug
    ),
    pageData: getPageData(
      pageResData.pageHeroData,
      locEventData,
      locationResData.locationInfo,
      locationResData.locationName,
      locationResData.slug,
      totalActivities
    ),
    locationInfo: locationResData.locationInfo,
    eventBooking: getEventBooking(locationResData.bookingInfo),
    partyBooking: getPartyBooking(
      locationResData.bookingInfo,
      locationResData.escapeGameParty
    ),
    allBooking: getAllBooking(locationResData.bookingInfo),
    businessHours: getBusinessHours(locationResData.businessHours),
    holidayHours: locationResData.holidayHours,
    mapInfo: getMapInfo(locationResData.mapInfo),
    eventDetaliData: getEventDetailData(
      pageResData.whyAllinAdventures,
      pageResData.makeItMemorable,
      pageResData.whatToExpect,
      pageResData.eventName
    ),

    eventTestimonialData: getEventTestimonialData(
      pageResData.eventTestimonials
    ),
  };

  return pageDATA;
};
