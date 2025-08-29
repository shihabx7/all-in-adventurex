import { apiSetting, apiUrl } from "../../../../lib/apiSettings";
import { activityPageQuery } from "../../../../lib/query/activityQuery";
import { locationDynamicPageQuery } from "../../../../lib/query/HomePageQuery";
import { locationSlugListQuery } from "../../../../lib/query/navMenuQuery";
import { LocationHomePageQuery } from "../../../../lib/query/HomePageQuery";
import { mobileEscapePageQuery } from "../../../../lib/query/mobileEscapeQuery";
import { newUpdateData } from "../../../../lib/tempData/mobileEscapeTempData";
import { toyMakerPageData } from "../../../../lib/tempData/toymakerWorkStationTempData";

import { getLocEscapeGameCarouselSectionData } from "../../../../lib/locationHomePageDataFormation";

import {
  getLocationSlugList,
  getEscapeGameSlugList,
  getOtherGameSlugList,
  getEventSlugList,
} from "../../../../lib/menuDataFormation";
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
} from "../../../../lib/locationActivityPagaDataFormation";
import { getGiftBooking } from "../../../../lib/dynamicLocationPageFormation";
import {
  checkActiveMobileEscape,
  merPageMeta,
  merPageData,
} from "../../../../lib/dataFormation/mobileEscapeDataFormation";
import { escapeGamePageDataFormater } from "../../../../lib/v2/formate/activityPageDataFormater";
//===================== helper func

const selectPageUi = (activitySlug, activityCategory) => {
  if (activitySlug == "mobile-escape-room") {
    return "mobile-escape-game";
  }
  if (activitySlug == "toymakers-workshop") {
    return "toymakers-workstation";
  }
  if (activityCategory && activityCategory == "Others") {
    return "others-game";
  }
  return "escape-game";
};

const fetchPageData = async (locslug, actSlug) => {
  if (actSlug == "toymakers-workshop") {
    return toyMakerPageData[locslug];
  }
  let activityQ = "";
  if (actSlug == "mobile-escape-room") {
    activityQ =
      apiUrl +
      "locations?filters[slug][$eq]=" +
      locslug +
      mobileEscapePageQuery;
  } else {
    activityQ =
      apiUrl +
      "activities?filters[activitySlug][$eq]=" +
      actSlug +
      activityPageQuery;
  }
  //console.log(activityQ);
  const pageRes = await fetch(activityQ, apiSetting);
  const resObj = await pageRes.json();
  const retdata = resObj.data[0].attributes;
  return retdata;
};
const fetchLocationEscapeGameData = async (locSlug, actSlug) => {
  if (actSlug != "mobile-escape-room" && actSlug != "toymakers-workshop") {
    return false;
  }
  let sectionData = "";
  if (actSlug == "mobile-escape-room") {
    sectionData = newUpdateData.escapeGameCarouselSectionData;
  }
  if (actSlug == "toymakers-workshop") {
    sectionData = toyMakerPageData[locSlug].escapeGameCarouselSectionData;
  }
  const filters = "locations?filters[slug][$eq]=" + locSlug;
  const pageReqUrl = apiUrl + filters + LocationHomePageQuery;
  const pageResponse = await fetch(pageReqUrl, apiSetting);
  const pageResArr = await pageResponse.json();
  const pageResData = pageResArr.data[0].attributes;

  return getLocEscapeGameCarouselSectionData(
    pageResData.locationActivities,
    pageResData.bookingInfo,
    sectionData
  );
};
// =======================================main func
export const locationsActivityPageData = async (locslug, actSlug) => {
  const pageResData = await fetchPageData(locslug, actSlug);

  const locDataReq =
    apiUrl +
    "locations?filters[slug][$eq]=" +
    locslug +
    locationDynamicPageQuery;

  const locationRes = await fetch(locDataReq, apiSetting);
  const locationObj = await locationRes.json();
  const locationResData = locationObj.data[0].attributes;

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
  //mobile escape game
  const mobileEscapeRoom = locationResData.mobileEscapeRoom;
  let isActiveMobileEscape = checkActiveMobileEscape(mobileEscapeRoom);
  const activityNameSelected =
    actSlug == "mobile-escape-room"
      ? "Mobile Escape Room"
      : pageResData.activityName;
  const activityPageUi =
    pageResData.activityInfo && pageResData.activityInfo.category
      ? selectPageUi(actSlug, pageResData.activityInfo.category)
      : selectPageUi(actSlug, false);

  const selectSeo = () => {
    if (actSlug == "mobile-escape-room") {
      return merPageMeta(
        pageResData.mobileEscapeRoom,
        locationResData.locationName,
        locationResData.slug
      );
    }
    if (actSlug == "toymakers-workshop") {
      return pageResData.seoData;
    }
    return getPageMeta(
      pageResData.seo,
      locActivityData,
      locationResData.locationName,
      locationResData.slug
    );
  };

  const selectGameBooking = () => {
    if (actSlug == "mobile-escape-room") {
      return false;
    }
    if (actSlug == "toymakers-workshop") {
      return pageResData.bookingData;
    }
    return getGameBooking(
      locationResData.bookingInfo,
      locActivityData.bookingItemNo,
      locActivityData.isActive
    );
  };
  const escapeGameCarouselData = await fetchLocationEscapeGameData(
    locslug,
    actSlug
  );
  const locEscapeGameSlugList = getEscapeGameSlugList(
    locationResData.locationActivities
  );
  const pageDATA = {
    // ===================sluglist for menu

    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: locEscapeGameSlugList,
    otherGameSlugList: getOtherGameSlugList(locationResData.locationActivities),
    eventSlugList: getEventSlugList(locationResData.locationEvents),
    // location info
    isPublished: locationResData.isPublished,
    totalLocations: totalLocations,
    locationSlug: locationResData.slug,
    locationName: locationResData.locationName,
    locationInfo: locationResData.locationInfo,
    hasMobileEscapeRoom: isActiveMobileEscape,
    allBooking: getAllBooking(locationResData.bookingInfo),
    businessHours: getBusinessHours(locationResData.businessHours),
    giftBooking: getGiftBooking(locationResData.bookingInfo),
    holidayHours: locationResData.holidayHours,
    mapInfo: getMapInfo(locationResData.mapInfo),
    //location activity info,
    activityName: activityNameSelected,
    activitySlug: actSlug,
    gameBooking: selectGameBooking(),
    pageUi: activityPageUi,
    pageMeta: selectSeo(),
    //======================v2
    pageHeroData:
      activityPageUi === "escape-game"
        ? escapeGamePageDataFormater.pageHeroData({
            activitySlug: actSlug,
            gameName: activityNameSelected,
            pageHeroData: pageResData.pageHeroData,
            locActivityData: locActivityData,
          })
        : false,
    storyLineSectionData:
      activityPageUi === "escape-game"
        ? escapeGamePageDataFormater.storyLineSectionData({
            activitySlug: actSlug,
            gameName: activityNameSelected,
            locActivityData: locActivityData,
          })
        : false,
    gallerySectionDataData:
      activityPageUi === "escape-game"
        ? escapeGamePageDataFormater.gallerySectionDataData({
            activitySlug: actSlug,
            gameName: activityNameSelected,
          })
        : false,
    mooreEscapeGameCarouselSection:
      activityPageUi === "escape-game"
        ? escapeGamePageDataFormater.mooreEscapeGameCarouselSection({
            activitySlug: actSlug,
            gameName: activityNameSelected,
            locEscapeGameList: locationResData.locationActivities,
            locBookingInfo: locationResData.bookingInfo,
          })
        : false,
    //==============================v1
    pageData:
      activityPageUi === "mobile-escape-game" ||
      activityPageUi === "toymakers-workstation" ||
      activityPageUi === "escape-game"
        ? false
        : getPageData(
            pageResData.pageHeroData,
            pageResData.activityInfo,
            locActivityData,
            locationResData.locationName,
            locationResData.slug
          ),

    partyBooking:
      activityPageUi === "mobile-escape-game" ||
      activityPageUi === "toymakers-workstation" ||
      activityPageUi === "escape-game"
        ? false
        : getPartyBooking(
            locationResData.bookingInfo,
            locActivityData.escapeGameParty
          ),

    activityData:
      activityPageUi === "mobile-escape-game" ||
      activityPageUi === "toymakers-workstation" ||
      activityPageUi === "escape-game"
        ? false
        : activityDetailData(
            pageResData.storyLine,
            pageResData.plot,
            pageResData.mission,
            pageResData.activityName,
            locActivityData.locActivityDetails
          ),
    activityGallery:
      activityPageUi === "mobile-escape-game" ||
      activityPageUi === "toymakers-workstation" ||
      activityPageUi === "escape-game"
        ? false
        : activityGalleryData(pageResData.activityGallery),
    videoData:
      activityPageUi === "mobile-escape-game" ||
      activityPageUi === "toymakers-workstation" ||
      activityPageUi === "escape-game"
        ? false
        : activityVideoData(pageResData.activityVideo),

    mobileEscapeRoomPageData:
      activityPageUi === "mobile-escape-game"
        ? merPageData(
            pageResData.mobileEscapeRoom,
            locationResData.locationName,
            locationResData.slug
          )
        : false,
    escapeGameCarouselSectionData: escapeGameCarouselData,
    toymakersPageData:
      activityPageUi === "toymakers-workstation" ? pageResData : false,
    hasToymakers: activityPageUi === "toymakers-workstation" ? true : false,
  };

  return pageDATA;
};
