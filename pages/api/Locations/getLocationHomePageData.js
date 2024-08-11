import { apiSetting, apiUrl } from "../../../lib/apiSettings";

import {
  LocationHomePageQuery,
  homePageTestimonialQuery,
} from "../../../lib/query/HomePageQuery";
import { locationSlugListQuery } from "../../../lib/query/navMenuQuery";
import {
  getPageMeta,
  getPageData,
  getPageVideo,
  getEscapeGameList,
  getOtherGameList,
  getEventList,
  getAllBooking,
  getEventBooking,
  getGiftBooking,
  getBusinessHours,
  getTestimonials,
  getMapInfo,
} from "../../../lib/locationHomePageDataFormation";
import {
  getLocationSlugList,
  getEscapeGameSlugList,
  getOtherGameSlugList,
  getEventSlugList,
} from "../../../lib/menuDataFormation";
export const getLocationHomePageData = async (slug) => {
  const filters = "locations?filters[slug][$eq]=" + slug;
  const pageReqUrl = apiUrl + filters + LocationHomePageQuery;
  const testUrl = apiUrl + homePageTestimonialQuery;
  const pageResponse = await fetch(pageReqUrl, apiSetting);
  const pageResArr = await pageResponse.json();
  const pageResData = pageResArr.data[0].attributes;
  const seoData = pageResData.seo;

  const testiResponse = await fetch(testUrl, apiSetting);
  const testiResArr = await testiResponse.json();
  const testiResData = testiResArr.data.attributes;

  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListobj = await locationListRes.json();
  const locationListArr = locationListobj.data;
  const totalLocations = 22;

  const DATA = {
    locationSlugList: getLocationSlugList(locationListArr),

    escapeGameSlugList: getEscapeGameSlugList(pageResData.locationActivities),
    otherGameSlugList: getOtherGameSlugList(pageResData.locationActivities),
    eventSlugList: getEventSlugList(pageResData.locationEvents),
    locationName: pageResData.locationName,
    locationSlug: pageResData.slug,
    isPublished: pageResData.isPublished,
    totalLocations: locationListArr.length,

    pageMeta: getPageMeta(
      seoData,
      pageResData.pageHeroData.pageHeroMobile.data.attributes.url,
      pageResData.pageHeroData.pageSubTitle
    ),
    pageData: getPageData(
      pageResData.pageHeroData,
      pageResData.locationInfo,
      testiResData.pageInfo.themeImage,
      pageResData.locationActivities
    ),
    locationInfo: pageResData.locationInfo,
    pageVideo: getPageVideo(pageResData.pageVideo),
    escapeGameList: getEscapeGameList(
      pageResData.locationActivities,
      pageResData.bookingInfo,
      pageResData.carouselSectionData
    ),
    otherGameList: getOtherGameList(
      pageResData.locationActivities,
      pageResData.bookingInfo,
      pageResData.carouselSectionData,
      pageResData.escapeGameParty
    ),

    eventList: getEventList(
      pageResData.locationEvents,
      pageResData.carouselSectionData
    ),

    mapInfo: getMapInfo(pageResData.mapInfo),
    allBooking: getAllBooking(pageResData.bookingInfo),
    eventBooking: getEventBooking(pageResData.bookingInfo),
    giftBooking: getGiftBooking(pageResData.bookingInfo),
    businessHours: getBusinessHours(pageResData.businessHours),
    holidayHours: pageResData.holidayHours,
    testimonialList: getTestimonials(
      testiResData.testimonials,
      pageResData.carouselSectionData
    ),
  };
  return DATA;
};
