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

const locationWithMail = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let obj = {
        locationSlug: listArr[i].attributes.slug,
        locationName: listArr[i].attributes.locationName,
        storeEmail: listArr[i].attributes.locationInfo.storeEmail,
        managerEmail: listArr[i].attributes.locationInfo.managerEmail,
      };
      retArr.push(obj);
    }
  }
  return retArr;
};
export const getVolunteeringPageData = async () => {
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
      title: "Volunteering | All In Together | All In Adventures",
      description:
        "At All In Adventures, we believe volunteering is a two-way street that benefits both the organization and the volunteer.",
      keywords:
        "escape room volunteering, all in adventures volunteering, mystery room volunteering",
      url: "/volunteering",
      metaindex: true,
      metaimg: "/assets/gn-mobile-hero/allinadventures-volunteering-hero.jpg",
    },
    pageData: {
      pagetitle: "VOLUNTEERING: ALL IN TOGETHER",
      pagesubtitle:
        "At All In Adventures, we believe volunteering is a two-way street that benefits both the organization and the volunteer. It is an instrumental force in promoting positive and sustainable growth within our communities.",

      totalLocations: totalLocations,
      coverimageL:
        "/assets/gn-desktop-hero/allinadventures-volunteering-hero.jpg",
      coverimageM:
        "/assets/gn-mobile-hero/allinadventures-volunteering-hero.jpg",
    },
    //locationMailData: getLocationWithMail(),
    locationMailData: locationWithMail(locationListData),
  };

  return data;
};
