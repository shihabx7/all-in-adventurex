import { apiSetting, apiUrl } from "../../lib/apiSettings";
import {
  locationSlugListQuery,
  allActivitiesSluglistQuery,
  allEventsSluglistQuery,
} from "../../lib/query/navMenuQuery";
import {
  careerPageQuery,
  jobPositionSlugQuery,
  jobOpeningsQuery,
} from "../../lib/query/singlePageQury";
import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../lib/menuDataFormation";
import {
  getSinglePageMeta,
  getSinglePageData,
  getJobCardList,
} from "../../lib/singlePageDataFormation";

export const getCareerHomePageDataV2 = async () => {
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
  // fatch job position data

  const jobPosRes = await fetch(jobPositionSlugQuery, apiSetting);
  const jobPosResObj = await jobPosRes.json();
  const jobPosResData = jobPosResObj.data;

  //================================v2
  const jobOpeningsRes = await fetch(jobOpeningsQuery, apiSetting);
  const jobOpeningsResObj = await jobOpeningsRes.json();
  const jobOpeningsResData = jobOpeningsResObj.data;

  console.log("jobOpeningsResData", JSON.stringify(jobOpeningsResData));
  //================================v2 end

  const data = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,
    pageMeta: getSinglePageMeta(seoData, ftImage, "careers"),

    pageData: getSinglePageData(pageResData, totalLocations),
    jobCardList: getJobCardList(jobPosResData),
    jobOpeningsList: jobOpeningsResData,
  };

  return data;
};

const smdt = [{"id":2,"attributes":{"title":"Store Lead","isActive":true,"expireDate":"2026-11-23","schedule":"Full Time","workplace":"Onsite","description":"<p>The Store Manager position inspires your team to achieve success by ensuring the overall satisfaction of our guests. This position requires managing the store's day-to-day operations and financial success, including growing sales through local store marketing efforts.</p>","createdAt":"2026-09-10T09:33:50.609Z","updatedAt":"2026-09-10T09:35:46.016Z","publishedAt":"2026-09-10T09:35:46.007Z","openingCount":6,"locations":{"data":[{"id":2,"attributes":{"createdAt":"2024-01-24T13:43:51.080Z","updatedAt":"2026-08-31T15:44:51.952Z","publishedAt":"2024-01-24T14:51:28.412Z","locationName":"Albany, NY","slug":"albany-ny","priority":1,"isPublished":true}},{"id":13,"attributes":{"createdAt":"2024-01-24T13:43:51.080Z","updatedAt":"2026-08-31T16:11:53.262Z","publishedAt":"2024-08-04T23:49:14.570Z","locationName":"Holyoke, MA","slug":"holyoke-ma","priority":22,"isPublished":true}},{"id":20,"attributes":{"createdAt":"2024-01-24T13:43:51.080Z","updatedAt":"2026-08-31T16:18:41.774Z","publishedAt":"2024-08-04T23:50:45.528Z","locationName":"Bowie, MD","slug":"bowie-md","priority":51,"isPublished":true}}]},"job_positon_list":{"data":{"id":4,"attributes":{"positionName":"Store Manager","isActive":true,"slug":null,"createdAt":"2026-09-10T09:26:47.895Z","updatedAt":"2026-09-10T09:26:50.422Z","publishedAt":"2026-09-10T09:26:50.418Z"}}},"jobRoles":[{"id":5,"role":"Manage the day-to-day operations and nancial success of the store including growing sales through local store marketing efforts"},{"id":6,"role":"You and your team will greet new guests as they arrive for their scheduled appointments, or simply stop in to inquire about the experience"},{"id":7,"role":"After guests exit their selected rooms and desire to share their experiences, you will be there to support, encourage and affirm their game strategy, plus invite them back in the future"},{"id":8,"role":"Lead your team through the process of arranging furniture, backdrops, props or window displays, as outlined by company standards"}]}},{"id":1,"attributes":{"title":"Store Manager","isActive":true,"expireDate":"2026-09-30","schedule":"Full Time","workplace":"Onsite","description":"<p>The Store Manager position inspires your team to achieve success by ensuring the overall satisfaction of our guests. This position requires managing the store's day-to-day operations and financial success, including growing sales through local store marketing efforts.</p>","createdAt":"2026-09-10T09:33:50.609Z","updatedAt":"2026-09-10T09:35:53.425Z","publishedAt":"2026-09-10T09:35:53.420Z","openingCount":1,"locations":{"data":[{"id":2,"attributes":{"createdAt":"2024-01-24T13:43:51.080Z","updatedAt":"2026-08-31T15:44:51.952Z","publishedAt":"2024-01-24T14:51:28.412Z","locationName":"Albany, NY","slug":"albany-ny","priority":1,"isPublished":true}}]},"job_positon_list":{"data":{"id":3,"attributes":{"positionName":"Management","isActive":true,"slug":null,"createdAt":"2026-09-10T09:26:24.744Z","updatedAt":"2026-09-10T09:27:44.533Z","publishedAt":"2026-09-10T09:26:31.783Z"}}},"jobRoles":[{"id":1,"role":"Manage the day-to-day operations and nancial success of the store including growing sales through local store marketing efforts"},{"id":2,"role":"You and your team will greet new guests as they arrive for their scheduled appointments, or simply stop in to inquire about the experience"},{"id":3,"role":"After guests exit their selected rooms and desire to share their experiences, you will be there to support, encourage and affirm their game strategy, plus invite them back in the future"},{"id":4,"role":"Lead your team through the process of arranging furniture, backdrops, props or window displays, as outlined by company standards"}]}}];
