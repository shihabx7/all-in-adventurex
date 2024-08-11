import { homePageQuery } from "../../lib/query/HomePageQuery";
import { eventListQuery } from "../../lib/query/eventQuery";
import { activityListQuery } from "../../lib/query/activityQuery";
import { locationSlugListQuery } from "../../lib/query/navMenuQuery";
import { apiSetting, apiUrl } from "../../lib/apiSettings";

import {
  getPageMeta,
  getPageData,
  getEscapeGameList,
  getOtherGameList,
  getEventList,
  getTestimonials,
  getPageVideo,
} from "../../lib/homePageDataFormation";
import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../lib/menuDataFormation";

export const getHomePageData = async () => {
  // declare api request url
  const pageReqUrl = apiUrl + homePageQuery;
  const activitylistReqUrl = apiUrl + activityListQuery;
  const eventlistReqUrl = apiUrl + eventListQuery;
  const locationListReqUrl = locationSlugListQuery;
  // fetch all location list as an array
  const locationListRes = await fetch(locationListReqUrl, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;
  // fetch page data  and seo data object
  const pageResponse = await fetch(pageReqUrl, apiSetting);
  const pageResArr = await pageResponse.json();
  const pageResData = pageResArr.data.attributes;
  const seoData = pageResData.seo;
  // fetch all activities (escape room + other games) list as an array
  const activityListRes = await fetch(activitylistReqUrl, apiSetting);
  const activityListResObj = await activityListRes.json();
  const actctivityListResData = activityListResObj.data;
  // fetch all event List an array
  const eventListRes = await fetch(eventlistReqUrl, apiSetting);
  const eventListResObj = await eventListRes.json();
  const eventListResData = eventListResObj.data;

  const totalActivities = actctivityListResData.length;
  const totalLocations = locationListData.length;

  const DATA = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,
    pageMeta: getPageMeta(
      seoData,
      pageResData.pageHeroMobile.data.attributes.url,
      pageResData.pageSubTitle,
      totalLocations
    ),
    pageData: getPageData(
      pageResData.pageInfo,
      pageResData.pageHeroDesktop,
      pageResData.pageHeroMobile,
      pageResData.pageTitle,
      pageResData.pageSubTitle,
      totalLocations,
      totalActivities
    ),
    escapeGameList: getEscapeGameList(
      actctivityListResData,
      pageResData.carouselSectionData
    ),
    otherGameList: getOtherGameList(
      actctivityListResData,
      pageResData.carouselSectionData
    ),

    eventList: getEventList(eventListResData, pageResData.carouselSectionData),
    pageVideo: getPageVideo(pageResData.pageVideo),
    testimonialList: getTestimonials(
      pageResData.testimonials,
      pageResData.carouselSectionData
    ),
  };
  return DATA;
};
