import { apiSetting, apiUrl } from "../../../../lib/apiSettings";
import { activityPageQuery } from "../../../../lib/query/activityQuery";
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
  activityDetailData,
  activityVideoData,
  activityGalleryData,
} from "../../../../lib/activityDataFormation";

export const getRootActivitiyPageData = async (activitySlug) => {
  const filters = "filters[activitySlug][$eq]=" + activitySlug;

  const reqUrl = apiUrl + "activities?" + filters + activityPageQuery;

  const response = await fetch(reqUrl, apiSetting);
  const resArr = await response.json();
  const activityResData = resArr.data[0].attributes;
  const seoData = activityResData.seo;

  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;
  // fetch all activity list as an array
  const activityListRes = await fetch(allActivitiesSluglistQuery, apiSetting);
  const activityListObj = await activityListRes.json();
  const activityListResData = activityListObj.data;
  // fetch all event list as an array
  const eventListRes = await fetch(allEventsSluglistQuery, apiSetting);
  const eventListResObj = await eventListRes.json();
  const eventListResData = eventListResObj.data;

  const totalActivities = activityListResData.length;
  const totalLocations = locationListData.length;

  const activityPageData = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(activityListResData),
    otherGameSlugList: getAllOtherGameSlugList(activityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,
    pageMeta: getPageMeta(
      seoData,
      activityResData.pageHeroData.pageHeroMobile.data.attributes.url,
      activityResData.activityName,
      activityResData.pageHeroData.pageSubTitle,
      activityResData.activitySlug
    ),

    pageData: getPageData(
      activityResData.activityName,
      activityResData.activityInfo,
      activityResData.pageHeroData,
      totalLocations,
      totalActivities
    ),
    activityData: activityDetailData(
      activityResData.storyLine,
      activityResData.plot,
      activityResData.mission,
      activityResData.activityName
    ),
    videoData: activityVideoData(
      activityResData.activityVideo,
      activityResData.activityName
    ),
    activityGallery: activityGalleryData(activityResData.activityGallery),
  };

  return activityPageData;
};
