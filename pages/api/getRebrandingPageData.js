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
export const getRebrandingPageData = async () => {
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
      title: "Mystery Room is Now All In Adventures | Rebranding",
      description:
        "We're changing our name from Mystery Room to All In Adventures. Your favorite fun activity center is now more than an escape room place.",
      keywords:
        "mystery room is now all in adventures, mystery room rebranding, all in adventures rebranding",
      url: "/mystery-room-rebranding",
      metaindex: true,
      metaimg:
        "/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg",
    },

    pageData: {
      pagetitle: "MYSTERY ROOM IS NOW ALL IN ADVENTURES",
      pagesubtitle:
        "We're changing our name from Mystery Room to All In Adventures. Your favorite fun activity center is now more than an escape room place. Come join us to experience more fun activities, including Escape Rooms, Game Show Rooms, Beat the Seat and Axe Throwing with locations throughout the U.S.",

      totalLocations: totalLocations,
      coverimageL:
        "/assets/gn-desktop-hero/allinadventures-volunteering-hero.jpg",
      coverimageM:
        "/assets/gn-mobile-hero/allinadventures-volunteering-hero.jpg",
    },
  };

  return data;
};
