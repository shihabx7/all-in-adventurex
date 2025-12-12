import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { activityPageQuery } from "../../../lib/query/activityQuery";
import { locationDynamicPageQuery } from "../../../lib/query/HomePageQuery";
import { locationSlugListQuery } from "../../../lib/query/navMenuQuery";
import { LocationHomePageQuery } from "../../../lib/query/HomePageQuery";
import { mobileEscapePageQuery } from "../../../lib/query/mobileEscapeQuery";
import { newUpdateData } from "../../../lib/tempData/mobileEscapeTempData";
import { toyMakerPageData } from "../../../lib/tempData/toymakerWorkStationTempData";

import { getLocEscapeGameCarouselSectionData } from "../../../lib/locationHomePageDataFormation";

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
import { getGiftBooking } from "../../../lib/dynamicLocationPageFormation";
import {
  checkActiveMobileEscape,
  merPageMeta,
  merPageData,
} from "../../../lib/dataFormation/mobileEscapeDataFormation";
// util func

const selectPageUi = (activitySlug) => {
  if (activitySlug == "mobile-escape-room") {
    return "mobile-escape";
  }
 
  return "escape-room";
};

const fetchPageData = async (locslug, actSlug) => {
 
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
  if (actSlug != "mobile-escape-room") {
    return false;
  }
  let sectionData = "";
  if (actSlug == "mobile-escape-room") {
    sectionData = newUpdateData.escapeGameCarouselSectionData;
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

export const getLocationsActivityPageData = async (locslug, actSlug) => {
  const pageResData = await fetchPageData(locslug, actSlug);
  // console.log(pageResData.mobileEscapeRoom);
  //const actSeo = pageResData.seo;
  // console.log(pageResData.mobileEscapeRoom.length);
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
  let isActiveMobileEscape = checkActiveMobileEscape(mobileEscapeRoom);

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

  const selectSeo = () => {
    if (actSlug == "mobile-escape-room") {
      return merPageMeta(
        pageResData.mobileEscapeRoom,
        locationResData.locationName,
        locationResData.slug
      );
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
    pageUi: selectPageUi(actSlug),
    activityName:
      actSlug == "mobile-escape-room"
        ? "Mobile Escape Room"
        : pageResData.activityName,
    activitySlug: actSlug,
    pageMeta: selectSeo(),

    pageData:
      actSlug == "mobile-escape-room"
        ? false
        : getPageData(
            pageResData.pageHeroData,
            pageResData.activityInfo,
            locActivityData,
            locationResData.locationName,
            locationResData.slug
          ),
    locationInfo: locationResData.locationInfo,
    gameBooking: selectGameBooking(),
    partyBooking:
      actSlug == "mobile-escape-room"
        ? false
        : getPartyBooking(
            locationResData.bookingInfo,
            locActivityData.escapeGameParty
          ),
    allBooking: getAllBooking(locationResData.bookingInfo),
    businessHours: getBusinessHours(locationResData.businessHours),
    giftBooking: getGiftBooking(locationResData.bookingInfo),
    holidayHours: locationResData.holidayHours,
    mapInfo: getMapInfo(locationResData.mapInfo),
    activityData:
      actSlug == "mobile-escape-room"
        ? false
        : activityDetailData(
            pageResData.storyLine,
            pageResData.plot,
            pageResData.mission,
            pageResData.activityName,
            locActivityData.locActivityDetails
          ),
    activityGallery:
      actSlug == "mobile-escape-room"
        ? false
        : activityGalleryData(pageResData.activityGallery),
    videoData:
      actSlug == "mobile-escape-room"
        ? false
        : activityVideoData(pageResData.activityVideo),
    mobileEscapeRoomPageData:
      actSlug == "mobile-escape-room"
        ? merPageData(
            pageResData.mobileEscapeRoom,
            locationResData.locationName,
            locationResData.slug
          )
        : false,
    escapeGameCarouselSectionData: escapeGameCarouselData,
    toymakersPageData: actSlug == "toymakers-workshop" ? pageResData : false,
    hasToymakers: actSlug == "toymakers-workshop" ? true : false,
  };

  return pageDATA;
};
