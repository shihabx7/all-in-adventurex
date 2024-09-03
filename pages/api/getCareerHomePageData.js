import { apiSetting, apiUrl } from "../../lib/apiSettings";
import {
  locationSlugListQuery,
  allActivitiesSluglistQuery,
  allEventsSluglistQuery,
} from "../../lib/query/navMenuQuery";
import { careerPageQuery } from "../../lib/query/singlePageQury";
import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../lib/menuDataFormation";
import {
  getSinglePageMeta,
  getSinglePageData,
} from "../../lib/singlePageDataFormation";
export const getCareerHomePageData = async () => {
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

  // fetch page data

  const pegeRes = await fetch(careerPageQuery, apiSetting);
  const pegeResObj = await pegeRes.json();
  const pageResData = pegeResObj.data.attributes;

  const seoData = pageResData.seo;
  const ftImage = pageResData.pageHeroMobile.data.attributes.url;
  // fetch page data end
  const data = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,
    pageMeta: getSinglePageMeta(seoData, ftImage, "careers"),

    pageData: getSinglePageData(pageResData, totalLocations),
    jobs: [
      {
        id: 1,
        job_slug: "associate",
        job_title: "ASSOCIATE",
        short_desc:
          "The Associate is the guest experience specialist, who is each guest's first and last impression of All In Adventures! This position serves as the vitally important liaison between our guests and our team. The ideal candidate will greet new guests as they arrive and inquire about the experience after the game.",
      },
      {
        id: 2,
        job_slug: "store-lead",
        job_title: "STORE LEAD",
        short_desc:
          "Our Store Lead positions exist to inspire, serve, and empower their team to uphold our outstanding services and hospitality standards. They are ultimately responsible for the success or failure of the store. The ideal candidate is eager to be flexible and creative in a fast-paced, high-stress environment.",
      },
      {
        id: 3,
        job_slug: "assistant-manager",
        job_title: "ASSISTANT MANAGER",
        short_desc:
          "Our Assistant Manager assists the Store Manager in encouraging the team to achieve success by ensuring our guests' overall satisfaction. The ideal candidates need positive attitude, willingness to provide outstanding guest service, and a desire to succeed. They must utilize their communication skills.",
      },
      {
        id: 4,
        job_slug: "store-manager",
        job_title: "STORE MANAGER",
        short_desc:
          "The Store Manager position inspires your team to achieve success by ensuring the overall satisfaction of our guests. This position requires managing the store's day-to-day operations and financial success, including growing sales through local store marketing efforts.",
      },
    ],
  };

  return data;
};
