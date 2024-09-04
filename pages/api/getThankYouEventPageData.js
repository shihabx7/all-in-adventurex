import { apiSetting, apiUrl } from "../../lib/apiSettings";
import {
  locationSlugListQuery,
  allActivitiesSluglistQuery,
  allEventsSluglistQuery,
} from "../../lib/query/navMenuQuery";
import {
  thanYouPagesQuery,
  thankYouSeoQueryBuilder,
} from "../../lib/query/singlePageQury";
import {
  getThankYouPageMeta,
  getThankYouPageData,
} from "../../lib/singlePageDataFormation";
import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../lib/menuDataFormation";
export const getThankYouEventPageData = async () => {
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
  // fetch page data
  const reqUrl =
    thanYouPagesQuery + thankYouSeoQueryBuilder("eventThankYouSeo");

  const pegeRes = await fetch(reqUrl, apiSetting);
  const pegeResObj = await pegeRes.json();
  const pageResData = pegeResObj.data.attributes;

  const seoData = pageResData.eventThankYouSeo;

  // fetch page data end
  const data = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,
    pageMeta: getThankYouPageMeta(seoData, "thank-you-event"),

    pageData: getThankYouPageData(pageResData, totalLocations),
  };

  return data;
};
