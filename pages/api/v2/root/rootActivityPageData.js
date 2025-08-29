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
import { escapeGamePageDataFormater } from "../../../../lib/v2/formate/activityPageDataFormater";

const getPageUI = (cat) => {
  let disCat = cat.trim().toLowerCase();
  if (disCat === "escape games" || disCat === "escape game") {
    return "escapeGame";
  }
  if (disCat === "others" || disCat === "other") {
    return "otherGame";
  }
  if (disCat === "toymakers" || disCat === "toymaker") {
    return "toymaker";
  }
  return "default";
};

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
  const activityPageUI = getPageUI(activityResData.activityInfo.category);
  const activityPageData = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(activityListResData),
    otherGameSlugList: getAllOtherGameSlugList(activityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,
    pageUI: activityPageUI,
    pageMeta: getPageMeta(
      seoData,
      activityResData.pageHeroData.pageHeroMobile.data.attributes.url,
      activityResData.activityName,
      activityResData.pageHeroData.pageSubTitle,
      activityResData.activitySlug
    ),
    //////////////=================v2

    // activityResData.activityInfo.category.toLowerCase()==="escape games" || activityResData.activityInfo.category.toLowerCase()==="escape game"
    pageHeroData:
      activityPageUI == "escapeGame"
        ? escapeGamePageDataFormater.pageHeroData({
            activitySlug: activityResData.activitySlug,
            activityName: activityResData.activityName,
            pageHeroData: activityResData.pageHeroData,
            pageUICat: activityPageUI,
          })
        : false,
    storyLineSectionData:
      activityPageUI == "escapeGame"
        ? escapeGamePageDataFormater.storyLineSectionData({
            activitySlug: activityResData.activitySlug,
            activityName: activityResData.activityName,
            activityInfo: activityResData.activityInfo,
          })
        : false,
    gallerySectionDataData:
      activityPageUI == "escapeGame"
        ? escapeGamePageDataFormater.gallerySectionDataData({
            activitySlug: activityResData.activitySlug,
            activityName: activityResData.activityName,
          })
        : false,
    mooreEscapeGameCarouselSection:
      activityPageUI == "escapeGame"
        ? escapeGamePageDataFormater.mooreEscapeGameCarouselSection({
            activitySlug: activityResData.activitySlug,
            activityName: activityResData.activityName,
          })
        : false,
    //////////////=================old v1
    // !activityResData.activityInfo.category.toLowerCase()==="others" || activityResData.activityInfo.category.toLowerCase()==="other"
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
