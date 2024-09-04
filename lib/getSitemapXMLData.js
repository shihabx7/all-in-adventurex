import { apiSetting, apiUrl } from "./apiSettings";
import { eventListQuery } from "./query/eventQuery";
import { activityListQuery } from "./query/activityQuery";
import { jobPositionSlugQuery } from "./query/singlePageQury";

import {
  siteMapLocationQuery,
  siteMapBlogQuery,
  siteMapBlogCategoryQuery,
} from "./query/siteMapQuery";

import {
  getLocationXmlList,
  getAllActivityXmlList,
  getAllEventsXmlList,
  getBlogCatXmlList,
  getBlogXmlList,
  getJobXmlList,
} from "./siteMapDataFormation";

const siteUrl = process.env.SITE_URL || "https://allinadventures.com";
export const getSitemapXMLData = async () => {
  //const pageReqUrl = apiUrl + homePageQuery;
  const activitylistReqUrl = apiUrl + activityListQuery;
  const eventlistReqUrl = apiUrl + eventListQuery;

  // fetch all activities (escape room + other games) list as an array
  const activityListRes = await fetch(activitylistReqUrl, apiSetting);
  const activityListResObj = await activityListRes.json();
  const actctivityListResData = activityListResObj.data;
  // fetch all event List an array
  const eventListRes = await fetch(eventlistReqUrl, apiSetting);
  const eventListResObj = await eventListRes.json();
  const eventListResData = eventListResObj.data;

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
  //joblink
  const jobLinkRes = await fetch(jobPositionSlugQuery, apiSetting);
  const jobLinkResObj = await jobLinkRes.json();
  const jobLinkResObjDataArr = jobLinkResObj.data;

  // static page link
  const leftStaticArr = [
    {
      loc: siteUrl,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.9,
    },
    {
      loc: siteUrl + "/gift-cards",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    },
    {
      loc: siteUrl + "/find-your-photo",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.8,
    },
  ];
  const rightTopStaticArr = [
    {
      loc: siteUrl + "/testimonials",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    },
    {
      loc: siteUrl + "/gallery",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    },
    {
      loc: siteUrl + "/pricing",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    },
    {
      loc: siteUrl + "/deals-coupons",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    },
  ];
  const rightMidStaticArr = [
    {
      loc: siteUrl + "/faqs",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.6,
    },
    {
      loc: siteUrl + "/about",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    },
    {
      loc: siteUrl + "/what-is-an-escape-room",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.6,
    },
    {
      loc: siteUrl + "/answers",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.6,
    },
  ];
  const rightBottomStaticArr = [
    {
      loc: siteUrl + "/volunteering",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.6,
    },
    {
      loc: siteUrl + "/franchise",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.6,
    },
    {
      loc: siteUrl + "/franchise-contact",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.6,
    },
    {
      loc: siteUrl + "/privacy-policy",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.5,
    },
    {
      loc: siteUrl + "/terms-of-services",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.5,
    },
  ];
  // dynamic link
  const activityListArr = getAllActivityXmlList(actctivityListResData);
  const eventListArr = getAllEventsXmlList(eventListResData);
  const locListArr = getLocationXmlList(locLinkResDataArr);
  const blogCatListArr = getBlogCatXmlList(blogCatLinkResDataArr);
  const blogListArr = getBlogXmlList(blogLinkResDataArr);
  const careerListArr = getJobXmlList(jobLinkResObjDataArr);

  // merge all link
  const FIELDS = [
    ...leftStaticArr,
    ...activityListArr,
    ...eventListArr,
    ...locListArr,
    ...rightTopStaticArr,
    ...blogCatListArr,
    ...blogListArr,
    ...rightMidStaticArr,
    ...careerListArr,
    ...rightBottomStaticArr,
  ];
  // console.log(blogListArr);
  //const DATA = fields;
  return FIELDS;
};
