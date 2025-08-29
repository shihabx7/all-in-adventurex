import { eventPageQuery } from "../../../../lib/query/eventQuery";

import { apiSetting, apiUrl } from "../../../../lib/apiSettings";
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
  getPageMeta,
  getPageData,
  eventDetailData,
  eventTestimonialData,
} from "../../../../lib/eventDataFormation";

import { eventPageDataFormater } from "../../../../lib/v2/formate/eventPageDataFormater";
export const getRootEventPagetData = async (eventSlug) => {
  const filters = "filters[eventSlug][$eq]=" + eventSlug;
  const reqUrl = apiUrl + "events?" + filters + eventPageQuery;

  const response = await fetch(reqUrl, apiSetting);
  const resArr = await response.json();
  const eventResData = resArr.data[0].attributes;
  const seoData = eventResData.seo;

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

  const eventData = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,

    pageMeta: getPageMeta(
      seoData,
      eventResData.pageHeroData.pageHeroMobile.data.attributes.url,
      eventResData.eventName,
      eventResData.pageHeroData.pageSubTitle,
      eventSlug
    ),

    pageData: getPageData(
      eventResData.eventName,
      eventResData.eventInfo,
      eventResData.pageHeroData,
      totalLocations,
      totalActivities
    ),
    //================v2
    pageHeroData: eventPageDataFormater.pageHeroData({ eventSlug: eventSlug }),
    eventDetailSectionData: eventPageDataFormater.eventDetailSectionData({
      eventSlug: eventSlug,
    }),
    partyPackageSectionData: eventPageDataFormater.partyPackageSectionData({
      eventSlug: eventSlug,
    }),
    escapescapeRoomCarouselSectionData:
      eventPageDataFormater.escapescapeRoomCarouselSectionData({
        fetchEscapeGameList: actctivityListResData,
        eventSlug: eventSlug,
      }),
    gallerySectionData: eventPageDataFormater.gallerySectionData({
      eventSlug: eventSlug,
    }),
    testimonialSectionData: eventPageDataFormater.testimonialSectionData({
      eventSlug: eventSlug,
    }),
    faqSectionData: eventPageDataFormater.faqSectionData({
      eventSlug: eventSlug,
    }),
    //============= v1
    eventDetaliData: eventDetailData(
      eventResData.whyAllinAdventures,
      eventResData.makeItMemorable,
      eventResData.whatToExpect,
      eventResData.eventName
    ),

    eventTestimonialData: eventTestimonialData(eventResData.eventTestimonials),
  };

  return eventData;
};
