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
export const getFranchisePageData = async () => {
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
      title: "Become an Escape Room Franchise Owner | All In Adventures",
      description:
        "Starting an escape room business can be challenging, but our partnership can surely help you avoid costly mistakes. Inquire Now",
      keywords:
        "escape room franchise, all in adventures franchise, mystery room franchise, become an escape room franchise owner, escape room business, escape room franchise, escape room franchise cost, the escape game franchise, escape room franchise opportunities, escape franchise, mystery room franchise, paniq room franchise, best escape room franchise, panic room franchise, buy an escape room franchise, breakout games franchise, escapology franchise, escape room business model,",
      url: "/franchise",
      metaindex: true,
      metaimg: "/assets/gn-mobile-hero/allinadventures-franchise-hero.jpg",
    },

    pageData: {
      pagetitle: "BECOME AN ESCAPE ROOM FRANCHISE OWNER",
      pagesubtitle:
        "Starting an escape room business can be challenging, but our partnership can surely help you avoid costly mistakes. Since 2014 All In Adventures escape room centers have been hyper-profitable and already working on every level, from venue development to game setup to branding to operation to advertising.",

      totalLocations: totalLocations,
      coverimageL: "/assets/gn-desktop-hero/allinadventures-franchise-hero.jpg",
      coverimageM: "/assets/gn-mobile-hero/allinadventures-franchise-hero.jpg",
    },
  };

  return data;
};
