import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { checkActiveMobileEscape } from "../../../lib/dataFormation/mobileEscapeDataFormation";
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

  let retArr = [];
  for (let i = 0; i < activityList.length; i++) {
    let obj = {
      id: i + 1,
      activitySlug: activityList[i].activity.data.attributes.activitySlug,
    };

    retArr.push(obj);
  }
  if (mobileEscapeRoom.length > 0) {
    if (checkActiveMobileEscape(mobileEscapeRoom)) {
      let mObj = {
        id: activityList.length + 1,
        activitySlug: "mobile-escape-room",
      };
      retArr.push(mObj);
    }
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
  "hollywood premiere escape room in hadley ma, hollywood premiere escape room hadley ma, hollywood escape room, hollywood premiere mystery room hadley ma, all in adventure hollywood premiere hadley ma, hollywood theme escape room hadley ma, hollywood celebrity escape room, hollywood premiere mystery room, hollywood mystery escape room hadley ma, hollywood premiere escape room near me, hollywood escape room near me hadley ma, hollywood theme escape room near me, hollywood celebrity escape room near me hadley ma, hollywood premiere mystery room near me, hollywood mystery escape room near me";
