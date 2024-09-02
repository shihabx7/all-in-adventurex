import { eventListQuery } from "../../lib/query/eventQuery";
import { activityListQuery } from "../../lib/query/activityQuery";
import { locationSlugListQuery } from "../../lib/query/navMenuQuery";
import { apiSetting, apiUrl } from "../../lib/apiSettings";
import {
  siteMapLocationQuery,
  siteMapBlogQuery,
  siteMapBlogCategoryQuery,
} from "../../lib/query/singlePageQury";

import { getSitemapLocationsLinkList } from "../../lib/singlePageDataFormation";

import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../lib/menuDataFormation";

export const getSitemapData = async () => {
  // declare api request url
  //const pageReqUrl = apiUrl + homePageQuery;
  const activitylistReqUrl = apiUrl + activityListQuery;
  const eventlistReqUrl = apiUrl + eventListQuery;
  const locationListReqUrl = locationSlugListQuery;
  // fetch all location list as an array
  const locationListRes = await fetch(locationListReqUrl, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;

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

  // fetch location link
  const locLinkRes = await fetch(siteMapLocationQuery, apiSetting);
  const locLinkResObj = await locLinkRes.json();
  const locLinkResDataArr = locLinkResObj.data;

  // fetch blog link
  const blogLinkRes = await fetch(siteMapBlogQuery, apiSetting);
  const blogLinkResObj = await blogLinkRes.json();
  const blogLinkResDataArr = blogLinkResObj.data;

  // fetch blog categories link
  const blogCatLinkRes = await fetch(siteMapBlogCategoryQuery, apiSetting);
  const blogCatLinkResObj = await blogCatLinkRes.json();
  const blogCatLinkResDataArr = blogCatLinkResObj.data;
  //console.log(blogLinkResDataArr);

  const careersLinkList = [
    {
      id: 1,
      jobName: "Associate",
      jobSlug: "associate",
    },
    {
      id: 2,
      jobName: "Store Lead",
      jobSlug: "store-lead",
    },
    {
      id: 3,
      jobName: "Assistant Manager",
      jobSlug: "assistant-manager",
    },
    {
      id: 4,
      jobName: "Store Manager",
      jobSlug: "store-manager",
    },
  ];

  const DATA = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,
    siteMapLocationsList: getSitemapLocationsLinkList(locLinkResDataArr),
    blogLinkList: blogLinkResDataArr,
    blogCategoryList: blogCatLinkResDataArr,
    careersLinkList: careersLinkList,
  };
  return DATA;
};
