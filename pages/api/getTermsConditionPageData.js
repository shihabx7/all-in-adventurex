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
export const getTermsConditionPageData = async () => {
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
      title: "Terms of Services | All In Adventures | Formerly Mystery Room",
      description:
        "Our Terms of Services sets out the general terms and conditions on your use of our Games (including our online virtual experience) and websites.",
      keywords:
        "escape room terms of services, all in adventures terms of services, mystery room terms of services,",
      url: "/terms-of-services",
      metaindex: false,
      metaimg:
        "/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg",
    },

    pageData: {
      pagetitle: "TERMS OF SERVICES",
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
