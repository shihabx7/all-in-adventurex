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
export const getJobApplicationPageData = async () => {
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
      title: "Apply for job | All In Adventures | Formerly Mystery Room",
      description:
        "We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. Join us.",
      keywords:
        "escape room careers, all in adventures careers, mystery room careers, escape room jobs, all in adventures jobs, mystery room jobs,",
      url: "/careers/apply",
      metaindex: true,
      metaimg: "/assets/gn-mobile-hero/allinadventures-career-hero.jpg",
    },

    pageData: {
      pagetitle: "Employment Application",
      pagesubtitle:
        "Interested in joining our super engaged, guest-centric team of associates?",

      totalLocations: totalLocations,
      coverimageL: "/assets/gn-desktop-hero/allinadventures-career-hero.jpg",
      coverimageM: "/assets/gn-mobile-hero/allinadventures-career-hero.jpg",
    },
  };

  return data;
};
