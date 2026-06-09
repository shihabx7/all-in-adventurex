//import { eventPageQuery } from "../../../lib/query/eventQuery";
import { apiSetting, apiUrl } from "../../../lib/apiSettings";
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
/*import {
  getPageMeta,
  getPageData,
  eventDetailData,
  eventTestimonialData,
} from "../../../lib/eventDataFormation";
 */
//====================================================================v2
import { eventPageDataFormater } from "../../../lib/v2/formate/eventPageDataFormater";
import {
  eventMenuSlugListV2,
  eventPagMeta,
  eventPageData,
  eventPartyPackageList,
} from "../../../lib/v2/formate/eventPageDataFormaterV2";
import {
  eventDatav2,
  partyPackageListV2,
  eventFaqListDefaultV2,
} from "../../../lib/v2/data/eventDataV2";

export const getEventPageDataV2 = async (eventSlug) => {
  // const filters = "filters[eventSlug][$eq]=" + eventSlug;
  // const reqUrl = apiUrl + "events?" + filters + eventPageQuery;

  // const response = await fetch(reqUrl, apiSetting);
  //const resArr = await response.json();
  //  const eventResData = resArr.data[0].attributes;
  // const seoData = eventResData.seo;

  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;
  //const locationResData = locationObj.data[0].attributes;
  // console.log("Root Parties obj: " + JSON.stringify(locationListData[0]));
  // fetch all activity list as an array
  const activityListRes = await fetch(allActivitiesSluglistQuery, apiSetting);
  const activityListObj = await activityListRes.json();
  const actctivityListResData = activityListObj.data;
  // fetch all event list as an array
  //const eventListRes = await fetch(allEventsSluglistQuery, apiSetting);
  //const eventListResObj = await eventListRes.json();
  //const eventListResData = eventListResObj.data;

  const totalActivities = actctivityListResData.length;
  const totalLocations = locationListData.length;

  const eventData = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    // eventSlugList: getAllEventSlugList(eventListResData),
    eventSlugList: eventMenuSlugListV2(),
    totalLocations: totalLocations,
    eventName: eventDatav2[eventSlug].eventName,
    menuLabel: eventDatav2[eventSlug].menuLabel,
    eventSlug:eventSlug,
    //============================================================v2
    pageMeta: eventPagMeta(eventSlug),
    pageData: eventPageData(eventSlug),

    //============================================================v1
    escapeRoomCarouselSectionData:
      eventPageDataFormater.escapeRoomCarouselSectionData({
        fetchEscapeGameList: actctivityListResData,
        eventSlug: eventSlug,
      }),
    partyPackageList: eventPartyPackageList(),
    eventFaqList: eventFaqListDefaultV2,
    /*
    
    pageMetaOld: getPageMeta(
      seoData,
      eventResData.pageHeroData.pageHeroMobile.data.attributes.url,
      eventResData.eventName,
      eventResData.pageHeroData.pageSubTitle,
      eventSlug,
    ),
    pageDataOld: getPageData(
      eventResData.eventName,
      eventResData.eventInfo,
      eventResData.pageHeroData,
      totalLocations,
      totalActivities,
    ),
    escapeRoomCarouselSectionData:
      eventPageDataFormater.escapescapeRoomCarouselSectionData({
        fetchEscapeGameList: actctivityListResData,
        eventSlug: eventSlug,
      }),
    eventDetaliData: eventDetailData(
      eventResData.whyAllinAdventures,
      eventResData.makeItMemorable,
      eventResData.whatToExpect,
      eventResData.eventName,
    ),

    eventTestimonialData: eventTestimonialData(eventResData.eventTestimonials),
    */
  };

  return eventData;
};
