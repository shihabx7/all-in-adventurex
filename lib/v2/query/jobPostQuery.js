import { apiUrl } from "../../apiSettings";
//job-position-opening
export const jobPostQuery =
  apiUrl +
  "job-position-openings?populate[positionName]=*&populate[job_regions]=*&populate[jobLocations][populate][location][populate][locationInfo]=*&populate=*&sort[0]=id:desc&pagination[pageSize]=8";
export const jobPostSearchQuery =
  "populate[positionName]=*&populate[job_regions]=*&populate[jobLocations][populate][location][populate][locationInfo]=*&populate=*&sort[0]=id:desc";
export const jobPositonListQuery = apiUrl + "job-position-lists?s&populate=*";
