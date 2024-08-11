import { apiSetting, apiUrl, mediaUrl } from "../../../lib/apiSettings";
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
  fyppageQuery,
  allphotoQuery,
} from "../../../lib/query/findPhotosQuery";
import {
  getPageMeta,
  getPageData,
  getPhotoList,
  getLocationList,
} from "../../../lib/findPhotoDataformation";

export const getCustomersPhotos = async (slug) => {
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
  // fetch fyp page data data
  const pageReq = apiUrl + fyppageQuery;
  const pageRes = await fetch(pageReq, apiSetting);
  const pageObj = await pageRes.json();
  const pageResData = pageObj.data;

  // fetch initial photolist
  const photoReq = apiUrl + allphotoQuery;
  const photoRes = await fetch(photoReq, apiSetting);
  const photoObj = await photoRes.json();
  const photoesData = photoObj.data;
  //console.log(photoesData);
  const photoData = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,

    pageMeta: getPageMeta(pageResData),
    pageData: getPageData(pageResData),
    photoList: getPhotoList(photoesData),
  };
  // console.log(getSingleBlog);
  return photoData;
};
