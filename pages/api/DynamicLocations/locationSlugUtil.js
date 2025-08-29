import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { checkActiveMobileEscape } from "../../../lib/dataFormation/mobileEscapeDataFormation";
import { toyMakerPageData } from "../../../lib/tempData/toymakerWorkStationTempData";
export async function fetchLocationActivities(locationSlug) {
  const reqUrl =
    apiUrl +
    "locations?filters[slug][$eq]=" +
    locationSlug +
    "&populate[locationActivities][populate][activity][populate][activityInfo]=*&populate[mobileEscapeRoom][populate]=*";
  const res = await fetch(reqUrl, apiSetting);
  const activities = await res.json();
  const activityList = activities.data[0].attributes.locationActivities;
  const mobileEscapeRoom = activities.data[0].attributes.mobileEscapeRoom;
  // console.log("slug util :" + activityList);

  let retArr = [];
  for (let i = 0; i < activityList.length; i++) {
    let obj = {
      id: i + 1,
      activitySlug: activityList[i].activity.data.attributes.activitySlug,
      //  activityType: activityList[i].activity.data.attributes.activityInfo.category,
      //  activityName: activityList[i].activity.data.attributes.activityName,
    };

    retArr.push(obj);
  }
  if (mobileEscapeRoom.length > 0) {
    if (checkActiveMobileEscape(mobileEscapeRoom)) {
      let mObj = {
        id: activityList.length + 1,
        activitySlug: "mobile-escape-room",
        //activityType: "Mobile Escape Games",
        // activityName: "Mobile Escape Room",
      };
      retArr.push(mObj);
    }
  }
  //  if (locationSlug == "raleigh-nc") {
  if (toyMakerPageData[locationSlug]) {
    let mObj = {
      id: activityList.length + 2,
      activitySlug: "toymakers-workshop",
      // activityType: "Toymaker",
      // activityName: "Toymakers Workshop",
    };
    retArr.push(mObj);
  }
  //console.log(retArr);
  return retArr;
}

// Function to fetch events for a given location
export async function fetchLocationEvents(locationSlug) {
  const reqUrl =
    apiUrl +
    "locations?filters[slug][$eq]=" +
    locationSlug +
    "&populate[locationEvents][populate][event][populate][eventInfo]=*";
  const res = await fetch(reqUrl, apiSetting);
  const events = await res.json();
  const eventList = events.data[0].attributes.locationEvents;
  let retArr = [];
  for (let i = 0; i < eventList.length; i++) {
    let obj = {
      id: i + 1,
      eventSlug: eventList[i].event.data.attributes.eventSlug,
    };
    retArr.push(obj);
  }
  return retArr;
}

// Function to generate paths for activities
/*
export async function getActivityPaths() {
  const locationSlugList = apiUrl + "locations?sort[0]=priority:asc";
  const resLocations = await fetch(locationSlugList, apiSetting);
  const locationsObj = await resLocations.json();
  const locations = locationsObj.data;

  let paths = [];

  for (const location of locations) {
    const activities = await fetchActivities(location.attributes.slug);
    const activityPaths = activities.map((activity) => ({
      params: {
        locationSlug: location.slug,
        activitiesSlug: activity.activitySlug,
      },
    }));
    paths = paths.concat(activityPaths);
  }

  return paths;
}

// Function to generate paths for events
export async function getEventPaths() {
  const locationSlugList = apiUrl + "locations?sort[0]=priority:asc";
  const resLocations = await fetch(locationSlugList, apiSetting);
  const locationsObj = await resLocations.json();
  const locations = locationsObj.data;

  let paths = [];

  for (const location of locations) {
    const events = await fetchEvents(location.attributes.slug);
    const eventPaths = events.map((event) => ({
      params: {
        locationSlug: location.slug,
        eventsSlug: event.eventSlug,
      },
    }));
    paths = paths.concat(eventPaths);
  }

  return paths;
}
*/
const gtt =
  "reel of fortune escape room in roanoke va, reel of fortune escape room roanoke va, reel of fortune escape room, reel of fortune mystery room roanoke va, all in adventure reel of fortune roanoke va, reel of fortune theme escape room roanoke va, reel of fortune celebrity escape room, reel of fortune mystery room, reel of fortune mystery escape room roanoke va, reel of fortune escape room near me, reel of fortune escape room near me roanoke va, reel of fortune theme escape room near me, reel of fortune celebrity escape room near me roanoke va, reel of fortune mystery room near me, reel of fortune mystery escape room near me";
