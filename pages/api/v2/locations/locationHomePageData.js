import { apiSetting, apiUrl } from "../../../../lib/apiSettings";
import { locationSlugListQuery } from "../../../../lib/query/navMenuQuery";
import {
  LocationHomePageQuery,
  homePageTestimonialQuery,
} from "../../../../lib/query/HomePageQuery";

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
} from "../../../../lib/locationHomePageDataFormation";

import { homePageDataFormater } from "../../../../lib/v2/formate/homePageDataFormater";

import {
  getLocationSlugList,
  getEscapeGameSlugList,
  getOtherGameSlugList,
  getEventSlugList,
} from "../../../../lib/menuDataFormation";
import { toyMakerPageData } from "../../../../lib/tempData/toymakerWorkStationTempData";
import { checkActiveMobileEscape } from "../../../../lib/dataFormation/mobileEscapeDataFormation";

import { homePageMobileEscapeRoomSectionData } from "../../../../lib/dataFormation/mobileEscapeDataFormation";

export const locationHomePageData = async (slug) => {
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
  const totalLocations = locationListArr.length;
  //const tm = homePageMobileEscapeRoomSectionData(mobileEscapeRoom);
  //console.log("mobileEscapeRoomData" + JSON.stringify(tm.infoList));
  //console.log("Meta : " + JSON.stringify(getLocationSlugList(locationListArr)));
  const DATA = {
    locationSlugList: getLocationSlugList(locationListArr),

    escapeGameSlugList: getEscapeGameSlugList(pageResData.locationActivities),
    otherGameSlugList: getOtherGameSlugList(pageResData.locationActivities),
    eventSlugList: getEventSlugList(pageResData.locationEvents),
    locationName: pageResData.locationName,
    locationSlug: pageResData.slug,
    isPublished: pageResData.isPublished,
    totalLocations: locationListArr.length,

    locationInfo: pageResData.locationInfo,
    mapInfo: getMapInfo(pageResData.mapInfo),
    allBooking: getAllBooking(pageResData.bookingInfo),
    eventBooking: getEventBooking(pageResData.bookingInfo),
    giftBooking: getGiftBooking(pageResData.bookingInfo),
    businessHours: getBusinessHours(pageResData.businessHours),
    holidayHours: pageResData.holidayHours,

    hasMobileEscapeRoom: isActiveMobileEscape,
    mobileEscapeRoomData: homePageMobileEscapeRoomSectionData(mobileEscapeRoom),
    toyMakerPageData: toyMakerPageData[slug] ? toyMakerPageData[slug] : false,

    pageMeta: getPageMeta(
      seoData,
      pageResData.pageHeroData.pageHeroMobile.data.attributes.url,
      pageResData.pageHeroData.pageSubTitle
    ),
    //=============== v2 data

    pageHeroData: homePageDataFormater.pageHeroDataFormat({
      locationSlug: pageResData.slug,
      info: pageResData.locationInfo,
      bookingInfo: pageResData.bookingInfo,
      pageHeroData: pageResData.pageHeroData,
      totalLocation: totalLocations,
      totalActivities: pageResData.locationActivities.length,
    }),
    aboutSectionData: homePageDataFormater.aboutSectionDataFormat({
      locationSlug: pageResData.slug,
    }),
    escapeGameListSectionData:
      homePageDataFormater.escapeGameListSectionDataFormat({
        locationSlug: pageResData.slug,
        fetchGameList: pageResData.locationActivities,
        sectionData: pageResData.carouselSectionData,
        bookingInfo: pageResData.bookingInfo,
      }),

    otherGameListSectionData:
      homePageDataFormater.otherGameListSectionDataFormat({
        locationSlug: pageResData.slug,
        fetchGameList: pageResData.locationActivities,
        sectionData: pageResData.carouselSectionData,
        bookingInfo: pageResData.bookingInfo,
      }),
    eventCarouselSectionData:
      homePageDataFormater.eventCarouselSectionDataFormat(),
    testimonialVideoCarouselSectionData:
      homePageDataFormater.testimonialVideoCarouselSectionDataFormat(),

    //================ v1 data
  };
  return DATA;
};
