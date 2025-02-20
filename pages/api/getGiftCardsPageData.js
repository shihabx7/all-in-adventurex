import { apiSetting, apiUrl } from "../../lib/apiSettings";
import {
  giftCardsPageQuery,
  giftReedemQuery,
} from "../../lib/query/giftNContactQuery";
import {
  locationSlugListQuery,
  allEventsSluglistQuery,
} from "../../lib/query/navMenuQuery";
import {
  getGiftGallery,
  getGiftRootReedem,
} from "../../lib/dynamicLocationPageFormation";
import { getRootGiftPageMeta } from "../../lib/singlePageDataFormation";

import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../lib/menuDataFormation";

export const getGiftCardsPageData = async () => {
  const pageReq = apiUrl + giftCardsPageQuery;

  const pageRes = await fetch(pageReq, apiSetting);
  const resObj = await pageRes.json();
  const pageResData = resObj.data.attributes;
  const seoData = pageResData.seo;

  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;
  //console.log("list b" + JSON.stringify(locationListData[0]));
  // fetch all activity list as an array
  const reedemReq = apiUrl + giftReedemQuery;
  const activityListRes = await fetch(reedemReq, apiSetting);
  const activityListObj = await activityListRes.json();
  const actctivityListResData = activityListObj.data;
  // fetch all event list as an array
  const eventListRes = await fetch(allEventsSluglistQuery, apiSetting);
  const eventListResObj = await eventListRes.json();
  const eventListResData = eventListResObj.data;

  const totalActivities = actctivityListResData.length;
  const totalLocations = locationListData.length;

  const Data = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,
    pageMeta: getRootGiftPageMeta(seoData, "gift-cards"),
    giftReedem: getGiftRootReedem(actctivityListResData),
    giftFaqs: pageResData.giftFaqs,
    giftGallery: getGiftGallery(pageResData.gallery),
  };

  return Data;
};
