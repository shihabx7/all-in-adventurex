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
export const getCovidPageData = async () => {
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
      title: "Covid-19 | All In Adventures | Formerly Mystery Room",
      description:
        "We are taking a very careful and thoughtful approach to reopening and have made many changes to our operations to ensure everyone feels safe and comfortable.",
      keywords: "covid 19 all in adventures, covid 19 mystery room",
      url: "/covid-19",
      metaindex: false,
      metaimg: "/assets/home-hero.jpg",
    },

    pageData: {
      pagetitle: "TERMS OF SERVICE",
      pagesubtitle:
        "#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
      totalLocation: "28",
      coverimageL: "/assets/home-benar-bg.jpg",
      coverimageM: "/assets/home-hero.jpg",
      totalLocations: totalLocations,
      videoid: "b_Kjdwdg0_o",
    },
  };

  return data;
};
