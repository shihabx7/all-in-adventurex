import { apiSetting, apiUrl } from "../../lib/apiSettings";
import { corporateContactPageQuery } from "../../lib/query/giftNContactQuery";
import {
  locationSlugListQuery,
  allActivitiesSluglistQuery,
  allEventsSluglistQuery,
} from "../../lib/query/navMenuQuery";
import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../lib/menuDataFormation";

import {
  getCorPageData,
  getCorPageMeta,
  getCorContactData,
} from "../../lib/dynamicLocationPageFormation";

import {
  getSinglePageMeta,
  getSinglePageData,
} from "../../lib/singlePageDataFormation";

export const getCorporateContactPageData = async () => {
  const pageReq = apiUrl + corporateContactPageQuery;

  const pageRes = await fetch(pageReq, apiSetting);
  const resObj = await pageRes.json();
  const pageResData = resObj.data.attributes;
  const seoData = pageResData.seoCorporate;
  const corPageData = pageResData.corporateContact;
  const ftImage = corPageData.pageHeroMobile.data.attributes.url;

  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;
  // fetch all activity list as an array
  const activityListRes = await fetch(allActivitiesSluglistQuery, apiSetting);
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
    pageMeta: getSinglePageMeta(seoData, ftImage, "corporate-contact"),

    pageData: getSinglePageData(corPageData, totalLocations),
    contactData: getCorContactData(pageResData.corporateContact),
  };

  return Data;
};
