import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { activityPageQuery } from "../../../lib/query/activityQuery";
import { locationDynamicPageQuery } from "../../../lib/query/HomePageQuery";
import { locationSlugListQuery } from "../../../lib/query/navMenuQuery";
import { mobileEscapePageQuery } from "../../../lib/query/mobileEscapeQuery";

import { toyMakerPageData } from "../../../lib/tempData/toymakerWorkStationTempData";

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
  if (activitySlug == "toymakers-workshop") {
    return "toymakers-workstation";
  }
  return "escape-room";
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
const pageSeo = () => {};
export const getLocationsActivityPageData = async (locslug, actSlug) => {
  /* let activityQ = "";
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
  }*/
  //console.log(activityQ);
  // const pageRes = await fetch(activityQ, apiSetting);
  //const resObj = await pageRes.json();
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
  //  if (isActiveMobileEscape && actSlug == "mobile-escape-room") {
  //console.log(activityQ);
  // console.log("========================");
  // console.log("========================");
  //console.log(pageResData.mobileEscapeRoom);
  // }

  //console.log(locationResData.mobileEscapeRoom.length);
  //console.log(locationResData);
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
  //cl.log(locActivityData.locActivityDetails);

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
      actSlug == "mobile-escape-room" || actSlug == "toymakers-workshop"
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
      actSlug == "mobile-escape-room" || actSlug == "toymakers-workshop"
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
      actSlug == "mobile-escape-room" || actSlug == "toymakers-workshop"
        ? false
        : activityDetailData(
            pageResData.storyLine,
            pageResData.plot,
            pageResData.mission,
            pageResData.activityName,
            locActivityData.locActivityDetails
          ),
    activityGallery:
      actSlug == "mobile-escape-room" || actSlug == "toymakers-workshop"
        ? false
        : activityGalleryData(pageResData.activityGallery),
    videoData:
      actSlug == "mobile-escape-room" || actSlug == "toymakers-workshop"
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
    toymakersPageData: actSlug == "toymakers-workshop" ? pageResData : false,
    hasToymakers: actSlug == "toymakers-workshop" ? true : false,
  };

  return pageDATA;
};
