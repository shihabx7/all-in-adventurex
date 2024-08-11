import { apiUrl } from "../apiSettings";
export const locationSlugListQuery =
  apiUrl + "locations?populate[locationInfo]=*&sort[0]=priority:asc";

export const allActivitiesSluglistQuery =
  apiUrl + "activities?populate[activityInfo]=*&sort[0]=priority:asc";

export const allEventsSluglistQuery = apiUrl + "events?sort[0]=priority:asc";
