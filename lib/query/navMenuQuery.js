import { apiUrl } from "../apiSettings";
export const locationSlugListQuery =
  apiUrl +
  "locations?populate[locationInfo]=*&populate[bookingInfo]=*&sort[0]=priority:asc";
//const bookingInfo = "&populate[bookingInfo]=*";

export const allActivitiesSluglistQuery =
  apiUrl + "activities?populate[activityInfo]=*&sort[0]=priority:asc";

export const allEventsSluglistQuery = apiUrl + "events?sort[0]=priority:asc";
