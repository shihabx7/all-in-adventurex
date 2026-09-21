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
//===================================v2
import {
  jobPostQuery,
  jobPositonListQuery,
} from "../../lib/v2/query/jobPostQuery";

import {
  jobPositionList,
  jobPositionCardList,
  jobSearchLocationList,
} from "../../lib/v2/formate/jobPostformater";

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
  const jobOpeningsRes = await fetch(jobPostQuery, apiSetting);
  const jobOpeningsResObj = await jobOpeningsRes.json();
  const jobOpeningsResData = jobOpeningsResObj.data;

  //console.log("job Openings Data : ", JSON.stringify(jobOpeningsResData));
  const jobCardList = await jobPositionCardList(jobOpeningsResData);
  //.log("||||||");
  // console.log("job Openings Data after format : ", JSON.stringify(jobCardList));

  const jobPositionListRes = await fetch(jobPositonListQuery, apiSetting);
  const jobPositionListObj = await jobPositionListRes.json();
  const jobPositionListData = jobPositionListObj.data;

  const jobPosList = jobPositionList(jobPositionListData);
  const jobLocList = jobSearchLocationList(locationListData);
  // console.log("locationList : ", JSON.stringify(jobLocList));
  //console.log("job Position List Data : ", JSON.stringify(jobPositionListData));
  // console.log("||||||");
  //  console.log("job Position List Data after format : ", JSON.stringify(jobPosList), );
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
    //=================================================v2
    jobPositionList: jobPosList, //jobPositionList(jobPositionListData),
    jobPositionCardList: jobCardList,
    jobSearchLocationList: jobLocList, //obPositionCardList(jobOpeningsResData),
  };

  return data;
};
