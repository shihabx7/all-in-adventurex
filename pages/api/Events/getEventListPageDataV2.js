import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import {
  eventListPageQuery,
  eventListQuery,
} from "../../../lib/query/eventQuery";
import {
  locationSlugListQuery,
  allActivitiesSluglistQuery,
  allEventsSluglistQuery,
} from "../../../lib/query/navMenuQuery";
import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../../lib/menuDataFormation";
import {
  getListPageData,
  getListPageMeta,
  eventListData,
} from "../../../lib/eventDataFormation";
//===============================v2
import { eventPageDataFormater } from "../../../lib/v2/formate/eventPageDataFormater";

import {
  eventListPageData,
  eventMenuSlugListV2,
  eventPartyPackageList,
} from "../../../lib/v2/formate/eventPageDataFormaterV2";

import {
  eventDatav2,
  partyPackageListV2,
  eventFaqListDefaultV2,
} from "../../../lib/v2/data/eventDataV2";

export const getEventListPageDataV2 = async () => {
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
    eventSlugList: eventMenuSlugListV2(),
    totalLocations: totalLocations,

    pageMeta: getListPageMeta(
      seoData,
      pageResData.pageHeroDesktop.data.attributes.url,
    ),
    pageHeroData: getListPageData(
      pageResData.pageInfo,
      pageResData.pageHeroDesktop,
      pageResData.pageHeroMobile,
      pageResData.pageTitle,
      pageResData.pageSubTitle,
      totalLocations,
      totalActivities,
    ),

    eventListData: eventListData(
      eventListResData,
      pageResData.eventListTitle,
      pageResData.eventListSubTitle,
    ),
    //===============================v2
    pageData: eventListPageData(),
    partyPackageList: eventPartyPackageList(),
    escapeRoomCarouselSectionData:
      eventPageDataFormater.escapeRoomCarouselSectionData({
        fetchEscapeGameList: actctivityListResData,
        eventSlug: "birthday-party",
      }),

    eventFaqList: eventFaqListDefaultV2,
  };

  return eventList;
};
