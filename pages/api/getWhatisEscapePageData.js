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
export const getWhatisEscapePageData = async () => {
  const getYear = () => {
    const d = new Date();
    const year = d.getFullYear();

    return year;
  };
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
      title:
        "What is an Escape Room | Everything You Need To Know in " + getYear(),
      description:
        'An escape room is an exciting and adventurous (live) game in which participants are "locked" into a themed room with their team to solve puzzles.',
      keywords:
        "what is an escape room, about escape room, escape room definition, what you need to know about escape room, everything you need to know about escape room, escape room what is it, what is a virtual escape room, what is escape room about, what is this escape room, what are escape rooms like, what happens in escape room, what is virtual escape room, what is an online escape room, what is an escape game, escape room what to expect, what does an escape room look like, what do you do in escape rooms, what to expect in an escape room, what is a panic room game, what do escape rooms look like, escape rooms what are they, what is an escape room game, what is an escape, what do you do in an escape room, what to wear to an escape room,",
      url: "/franchise",
      metaindex: true,
      metaimg:
        "/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg",
    },

    pageData: {
      pagetitle: "ESCAPE ROOMS: EVERYTHING YOU NEED TO KNOW IN " + getYear(),
      pagesubtitle: "",

      totalLocations: totalLocations,
      coverimageL:
        "/assets/gn-desktop-hero/All-In-Adventures-Generic-Hero-Image-Desktop.jpg",
      coverimageM:
        "/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg",
    },
  };

  return data;
};
