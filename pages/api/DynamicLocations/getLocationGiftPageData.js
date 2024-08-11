import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import {
  locationDataQuery,
  locationGiftPageQuery,
} from "../../../lib/query/dynamicLocationQuery";
import { locationSlugListQuery } from "../../../lib/query/navMenuQuery";
import {
  getPageMeta,
  getAllBooking,
  getEventBooking,
  getGiftBooking,
  getGiftGallery,
  getGiftReedem,
} from "../../../lib/dynamicLocationPageFormation";
import {
  getLocationSlugList,
  getEscapeGameSlugList,
  getOtherGameSlugList,
  getEventSlugList,
} from "../../../lib/menuDataFormation";

export const getLocationGiftPageData = async (locslug) => {
  const pageReq = apiUrl + locationGiftPageQuery;

  const pageRes = await fetch(pageReq, apiSetting);
  const resObj = await pageRes.json();
  const pageResData = resObj.data.attributes;
  // console.log(resObj.data);
  //fetch location info
  const locDataReq =
    apiUrl + "locations?filters[slug][$eq]=" + locslug + locationDataQuery;

  const locationRes = await fetch(locDataReq, apiSetting);
  const locationObj = await locationRes.json();
  const locationResData = locationObj.data[0].attributes;
  const seoData = locationResData.giftcardsPage.seo;

  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;

  const totalActivities = locationResData.locationActivities.length;
  const totalLocations = locationListData.length;

  const Data = {
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
    pageMeta: getPageMeta(
      seoData,
      pageResData.seo.metaImage.data.attributes.url,
      locationResData.locationName,
      locationResData.slug
    ),
    giftFaqs: pageResData.giftFaqs,
    giftGallery: getGiftGallery(pageResData.gallery),
    locationInfo: locationResData.locationInfo,
    allBooking: getAllBooking(locationResData.bookingInfo),
    eventBooking: getEventBooking(locationResData.bookingInfo),
    giftBooking: getGiftBooking(locationResData.bookingInfo),
    giftReedem: getGiftReedem(locationResData.locationActivities),
  };

  return Data;
};
