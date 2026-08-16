import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { activityPageQuery } from "../../../lib/query/activityQuery";
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
  getPageMeta,
  getPageData,
  activityDetailData,
  activityVideoData,
  activityGalleryData,
} from "../../../lib/activityDataFormation";
//========================================v2 data formation
import { activityPageDataFormaterV2 } from "../../../lib/v2/formate/activityPageDataFormaterV2";
export const getActivitiyPageData = async (activitySlug) => {
  const activGameSlug = activitySlug;
  const filters = "filters[activitySlug][$eq]=" + activGameSlug;
  const reqUrl = apiUrl + "activities?" + filters + activityPageQuery;
  const response = await fetch(reqUrl, apiSetting);
  const resArr = await response.json();
  const activityResData = resArr.data[0].attributes;
  const seoData = activityResData.seo;

  // =====================fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;
  //================= fetch all activity list as an array
  const activityListRes = await fetch(allActivitiesSluglistQuery, apiSetting);
  const activityListObj = await activityListRes.json();
  const activityListResData = activityListObj.data;
  // ===============fetch all event list as an array
  const eventListRes = await fetch(allEventsSluglistQuery, apiSetting);
  const eventListResObj = await eventListRes.json();
  const eventListResData = eventListResObj.data;
  // ====================site info
  // activity gameSlug
  console.log(JSON.stringify(activityResData.activityInfo));

  const totalActivities = activityListResData.length;
  const totalLocations = locationListData.length;
  // return page data object
  const activityPageData = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(activityListResData),
    otherGameSlugList: getAllOtherGameSlugList(activityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    currentActivitySlug: activGameSlug,
    activityType:activityResData.activityInfo.category? activityResData.activityInfo.category:"Escape Games",
    totalLocations: totalLocations,
    pageMeta: getPageMeta(
      seoData,
      activityResData.pageHeroData.pageHeroMobile.data.attributes.url,
      activityResData.activityName,
      activityResData.pageHeroData.pageSubTitle,
      activityResData.activitySlug,
    ),

    pageData: getPageData(
      activityResData.activityName,
      activityResData.activityInfo,
      activityResData.pageHeroData,
      totalLocations,
      totalActivities,
    ),
    activityData: activityDetailData(
      activityResData.storyLine,
      activityResData.plot,
      activityResData.mission,
      activityResData.activityName,
    ),
    videoData: activityVideoData(
      activityResData.activityVideo,
      activityResData.activityName,
    ),
    activityGallery: activityGalleryData(activityResData.activityGallery),
    //==========================================================================v2 data
    pageHeroData: activityPageDataFormaterV2.pageHeroData({
      activitySlug: activityResData.activitySlug,
      activityName: activityResData.activityName,
      pageHeroData: activityResData.pageHeroData,
    }),
    gameStatData: activityPageDataFormaterV2.gameStatData({
      activitySlug: activityResData.activitySlug,
      activityName: activityResData.activityName,
      activityInfo: activityResData.activityInfo,
    }),
    storyLineSectionData: activityPageDataFormaterV2.storyLineSectionData({
      activitySlug: activityResData.activitySlug,
      activityName: activityResData.activityName,
      storyLine: activityResData.storyLine,
    }),
    gallerySectionDataData: activityPageDataFormaterV2.gallerySectionDataData({
      activitySlug: activityResData.activitySlug,
      activityName: activityResData.activityName,
    }),
    mooreEscapeGameCarouselSectionData:
      activityPageDataFormaterV2.mooreEscapeGameCarouselSectionData({
        activitySlug: activityResData.activitySlug,
        activityName: activityResData.activityName,
      }),
  };

  return activityPageData;
};
