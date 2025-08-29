import { apiSetting, apiUrl } from "../../../../lib/apiSettings";
import {
  activityListPageQuery,
  activityListQuery,
} from "../../../../lib/query/activityQuery";
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
  getListPageMeta,
  getListPageData,
  activityListData,
} from "../../../../lib/activityDataFormation";
import { activityListPageDataFormeter } from "../../../../lib/v2/formate/activityPageDataFormater";
import(activityListPageDataFormeter);
export const getRootActivityListPageData = async () => {
  const pageReqUrl = apiUrl + activityListPageQuery;
  const activityListReqUrl = apiUrl + activityListQuery;

  const pageResponse = await fetch(pageReqUrl, apiSetting);
  const pageResArr = await pageResponse.json();
  const pageResData = pageResArr.data.attributes;
  const seoData = pageResData.seo;
  // fetch all activity list as an array
  const activityListRes = await fetch(activityListReqUrl, apiSetting);
  const activityListObj = await activityListRes.json();
  const actctivityListResData = activityListObj.data;

  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;

  // fetch all event list as an array
  const eventListRes = await fetch(allEventsSluglistQuery, apiSetting);
  const eventListResObj = await eventListRes.json();
  const eventListResData = eventListResObj.data;

  const totalActivities = actctivityListResData.length;
  const totalLocations = locationListData.length;

  const activityListPageData = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,

    pageMeta: getListPageMeta(
      seoData,
      pageResData.pageHeroDesktop.data.attributes.url
    ),
    //========================v2
    pageHeroData: activityListPageDataFormeter.pageHeroData({
      pageResData: pageResData,
      totalLocations: totalLocations,
      totalActivities: totalActivities,
    }),
    escapeGameListSectionData:
      activityListPageDataFormeter.escapeGameListSectionData({
        pageResData: pageResData,
        fetchGameList: actctivityListResData,
      }),
    otherGameListSectionData:
      activityListPageDataFormeter.otherGameListSectionData({
        pageResData: pageResData,
        fetchGameList: actctivityListResData,
      }),
    eventCarouselSectionData:
      activityListPageDataFormeter.eventCarouselSectionData(),
    faqSectionData: activityListPageDataFormeter.faqSectionData(),
    //========================v1
    /*  pageData: getListPageData(
      pageResData.pageInfo,
      pageResData.pageHeroDesktop,
      pageResData.pageHeroMobile,
      pageResData.pageTitle,
      pageResData.pageSubtitle,
      totalLocations,
      totalActivities
    ),
*/
    /* activityListData: activityListData(
      actctivityListResData,
      pageResData.escapeGameListTitle,
      pageResData.escapeGameListSubtitle,
      pageResData.otherGameListTitle,
      pageResData.otherGameListSubtitle
    ),*/
  };

  return activityListPageData;
};
