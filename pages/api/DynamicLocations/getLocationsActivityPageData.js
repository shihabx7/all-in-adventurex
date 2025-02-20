import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { activityPageQuery } from "../../../lib/query/activityQuery";
import { locationDynamicPageQuery } from "../../../lib/query/HomePageQuery";
import { locationSlugListQuery } from "../../../lib/query/navMenuQuery";
import { mobileEscapePageQuery } from "../../../lib/query/mobileEscapeQuery";

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

export const getLocationsActivityPageData = async (locslug, actSlug) => {
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
  const pageResData = resObj.data[0].attributes;
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
    activityName:
      actSlug == "mobile-escape-room"
        ? "Mobile Escape Room"
        : pageResData.activityName,
    activitySlug:
      actSlug == "mobile-escape-room"
        ? "mobile-escape-room"
        : pageResData.activitySlug,
    hasMobileEscapeRoom: isActiveMobileEscape,

    pageMeta:
      actSlug == "mobile-escape-room"
        ? merPageMeta(
            pageResData.mobileEscapeRoom,
            locationResData.locationName,
            locationResData.slug
          )
        : getPageMeta(
            pageResData.seo,
            locActivityData,
            locationResData.locationName,
            locationResData.slug
          ),
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
    gameBooking:
      actSlug == "mobile-escape-room"
        ? false
        : getGameBooking(
            locationResData.bookingInfo,
            locActivityData.bookingItemNo,
            locActivityData.isActive
          ),
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
  };

  return pageDATA;
};
