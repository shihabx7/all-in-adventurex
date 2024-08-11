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
export const getFranchiseContactPageData = async () => {
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
      title: "Franchise Contact | All In Adventures",
      description:
        "All In Adventures will save you time and money by avoiding common mistakes and helping set up thriving venues. Need more information? Fill out the required fields below.",
      keywords:
        "all in adventures franchise contact, mystery room franchise contact,",
      url: "/franchise-contact",
      metaindex: true,
      metaimg:
        "/assets/gn-mobile-hero/allinadventures-corporate-contact-hero.jpg",
    },

    pageData: {
      pagetitle: "FRANCHISE CONTACT",
      pagesubtitle:
        "All In Adventures will save you time and money by avoiding common mistakes and helping set up thriving venues, systems, and processes. Need more information? Simply fill out the required fields below.",
      totalLocation: "28",
      totalLocations: totalLocations,
      coverimageL:
        "/assets/gn-desktop-hero/allinadventures-corporate-contact-hero.jpg",
      coverimageM:
        "/assets/gn-mobile-hero/allinadventures-corporate-contact-hero.jpg",
    },
  };

  return data;
};
