import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { toyMakerPageData } from "../../../lib/tempData/toymakerWorkStationTempData";
import { homePageDataFormater } from "../../../lib/v2/formate/homePageDataFormater";
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
import { checkActiveMobileEscape } from "../../../lib/dataFormation/mobileEscapeDataFormation";
import { homePageMobileEscapeRoomSectionData } from "../../../lib/dataFormation/mobileEscapeDataFormation";
export const getLocationHomePageData = async (slug) => {
  const filters = "locations?filters[slug][$eq]=" + slug;
  const pageReqUrl = apiUrl + filters + LocationHomePageQuery;
  const testimonialReqUrl = apiUrl + homePageTestimonialQuery;

  const pageResponse = await fetch(pageReqUrl, apiSetting);
  const pageResArr = await pageResponse.json();
  const pageResData = pageResArr.data[0].attributes;
  const seoData = pageResData.seo;

  const mobileEscapeRoom = pageResData.mobileEscapeRoom;
  let isActiveMobileEscape = false;
  if (mobileEscapeRoom.length > 0) {
    isActiveMobileEscape = checkActiveMobileEscape(mobileEscapeRoom);
  }

  const testiResponse = await fetch(testimonialReqUrl, apiSetting);
  const testiResArr = await testiResponse.json();
  const testiResData = testiResArr.data.attributes;

  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListobj = await locationListRes.json();
  const locationListArr = locationListobj.data;
  const totalLocations = 20;

  const activitisForLoc=getEscapeGameSlugList(pageResData.locationActivities)
  //const tm = homePageMobileEscapeRoomSectionData(mobileEscapeRoom);
  //console.log("mobileEscapeRoomData" + JSON.stringify(tm.infoList));
  //console.log("Meta : " + JSON.stringify(getLocationSlugList(locationListArr)));
  const DATA = {
    locationSlugList: getLocationSlugList(locationListArr),

    escapeGameSlugList: activitisForLoc, //getEscapeGameSlugList(pageResData.locationActivities),
    otherGameSlugList: getOtherGameSlugList(pageResData.locationActivities),
    eventSlugList: getEventSlugList(pageResData.locationEvents),
    locationName: pageResData.locationName,
    locationSlug: pageResData.slug,
    isPublished: pageResData.isPublished,
    totalLocations: locationListArr.length,
    hasMobileEscapeRoom: isActiveMobileEscape,
    mobileEscapeRoomData: homePageMobileEscapeRoomSectionData(mobileEscapeRoom),

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
    // ==========================================vv2
    pageHeroData: homePageDataFormater.pageHeroData({
      locationSlug: pageResData.slug,
      info: pageResData.locationInfo,
      bookingInfo: pageResData.bookingInfo,
      pageHeroData: pageResData.pageHeroData,
      totalLocation: totalLocations,
      totalActivities: activitisForLoc.length,
    }),
    aboutSectionData: homePageDataFormater.aboutSectionData({
      locationSlug: pageResData.slug,
    }),
    escapeGameListSectionData: homePageDataFormater.escapeGameListSectionData({
      locationSlug: pageResData.slug,
      fetchGameList: pageResData.locationActivities,
      sectionData: pageResData.carouselSectionData,
      bookingInfo: pageResData.bookingInfo,
    }),

    otherGameListSectionData: homePageDataFormater.otherGameListSectionData({
      locationSlug: pageResData.slug,
      fetchGameList: pageResData.locationActivities,
      sectionData: pageResData.carouselSectionData,
      bookingInfo: pageResData.bookingInfo,
    }),
    // =========================================v2
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
    toyMakerPageData: toyMakerPageData[slug] ? toyMakerPageData[slug] : false,
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
