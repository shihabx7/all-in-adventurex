import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import {
  allActivitiesSluglistQuery,
  allEventsSluglistQuery,
} from "../../../lib/query/navMenuQuery";
import {
  LocationListPageListQuery,
  locationListPageQuery,
} from "../../../lib/query/HomePageQuery";
import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../../lib/menuDataFormation";
import {
  getLocationListPageMeta,
  getLocListPageData,
  getlocationListData,
} from "../../../lib/locationHomePageDataFormation";

export const getLocationListPageData = async () => {
  const pageReqUrl = apiUrl + locationListPageQuery;
  const locationListReqUrl = apiUrl + LocationListPageListQuery;

  const pageResponse = await fetch(pageReqUrl, apiSetting);
  const pageResArr = await pageResponse.json();
  const pageResData = pageResArr.data.attributes;
  const seoData = pageResData.seo;

  // fetch all location list as an array
  const locationListRes = await fetch(locationListReqUrl, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;

  //console.log(JSON.stringify(locationListData));

  // fetch all activity list as an array
  const activityListRes = await fetch(allActivitiesSluglistQuery, apiSetting);
  const activityListObj = await activityListRes.json();
  const actctivityListResData = activityListObj.data;
  // fetch all event list as an array
  const eventListRes = await fetch(allEventsSluglistQuery, apiSetting);
  const eventListResObj = await eventListRes.json();
  const eventListResData = eventListResObj.data;

  const totalLocations = locationListData.length;

  const locationListPageData = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,

    pageMeta: getLocationListPageMeta(seoData),

    pageData: getLocListPageData(pageResData, totalLocations),

    locationListData: getlocationListData(pageResData, locationListData),
  };

  return locationListPageData;
};
