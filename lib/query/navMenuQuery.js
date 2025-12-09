import { apiUrl } from "../apiSettings";

const locationActivities ="&populate[locationActivities][populate][activity][populate][activityInfo]=*"

export const locationSlugListQuery =
  apiUrl +
  "locations?populate[locationInfo]=*&populate[bookingInfo]=*"+locationActivities+"&sort[0]=priority:asc";
//const bookingInfo = "&populate[bookingInfo]=*";

export const allActivitiesSluglistQuery =
  apiUrl + "activities?populate[activityInfo]=*&sort[0]=priority:asc";

export const allEventsSluglistQuery = apiUrl + "events?sort[0]=priority:asc";
