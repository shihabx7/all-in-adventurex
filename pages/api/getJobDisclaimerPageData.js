import { apiSetting, apiUrl } from "../../lib/apiSettings";
import {
  locationSlugListQuery,
  allActivitiesSluglistQuery,
  allEventsSluglistQuery,
} from "../../lib/query/navMenuQuery";
import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../lib/menuDataFormation";
export const getJobDisclaimerPageData = async () => {
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

  const data = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,
    pageMeta: {
      title: "Job Application Disclaimer Policy | All In Adventures ",
      description:
        "Employment at All in Adventures is contingent upon a background check, which is required for all staff members. If the background check reveals a conviction or misconduct relevant to the position, or if an individual refuses to give consent for a background check, the individual may be disqualified from holding the position.",
      keywords:
        "escape room job, escape room job application, escape game job escape room job application",
      url: "/job-application-disclaimer-policy",
      metaindex: false,
      metaimg:
        "/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg",
    },

    pageData: {
      pagetitle: "job application disclaimer policy",
      pagesubtitle: "",

      coverimageL:
        "/assets/gn-desktop-hero/All-In-Adventures-Generic-Hero-Image-Desktop.jpg",
      coverimageM:
        "/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg",
      totalLocations: totalLocations,
    },
  };

  return data;
};
