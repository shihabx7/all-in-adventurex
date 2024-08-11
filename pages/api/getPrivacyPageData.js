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
export const getPrivacyPageData = async () => {
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
      title: "Privacy Policy | All In Adventures | Formerly Mystery Room",
      description:
        "Our Privacy Policy explains how we handle Personal Information provided to us through our Games (including our online virtual experience) and websites.",
      keywords:
        "escape room privacy policy, all in adventures privacy policy, mystery room privacy policy,",
      url: "/privacy-policy",
      metaindex: false,
      metaimg:
        "/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg",
    },

    pageData: {
      pagetitle: "PRIVACY POLICY",
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
