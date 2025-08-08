import { apiSetting, apiUrl } from "../../../../lib/apiSettings";
import {
  eventListPageQuery,
  eventListQuery,
} from "../../../../lib/query/eventQuery";
import {
  locationSlugListQuery,
  allActivitiesSluglistQuery,
  allEventsSluglistQuery,
} from "../../../../lib/query/navMenuQuery";
import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../../../lib/menuDataFormation";
import {
  getListPageData,
  getListPageMeta,
  eventListData,
} from "../../../../lib/eventDataFormation";
export const getRootEventListPageData = async () => {
  const pageReqUrl = apiUrl + eventListPageQuery;
  const eventListReqUrl = apiUrl + eventListQuery;

  const pageResponse = await fetch(pageReqUrl, apiSetting);
  const pageResArr = await pageResponse.json();
  const pageResData = pageResArr.data.attributes;
  const seoData = pageResData.seo;

  // fetch all event list as an array
  const eventListRes = await fetch(eventListReqUrl, apiSetting);
  const eventListResObj = await eventListRes.json();
  const eventListResData = eventListResObj.data;

  // fetch all activity list as an array
  const activityListRes = await fetch(allActivitiesSluglistQuery, apiSetting);
  const activityListObj = await activityListRes.json();
  const actctivityListResData = activityListObj.data;

  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;

  const totalActivities = actctivityListResData.length;
  const totalLocations = locationListData.length;

  const eventList = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,

    pageMeta: getListPageMeta(
      seoData,
      pageResData.pageHeroDesktop.data.attributes.url
    ),

    pageData: getListPageData(
      pageResData.pageInfo,
      pageResData.pageHeroDesktop,
      pageResData.pageHeroMobile,
      pageResData.pageTitle,
      pageResData.pageSubTitle,
      totalLocations,
      totalActivities
    ),

    eventListData: eventListData(
      eventListResData,
      pageResData.eventListTitle,
      pageResData.eventListSubTitle
    ),
  };

  return eventList;
};
