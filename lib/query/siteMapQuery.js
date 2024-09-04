import { apiUrl } from "../apiSettings";

export const siteMapLocationQuery =
  apiUrl +
  "locations?populate[locationActivities][populate][activity][populate][activityInfo]=*" +
  "&populate[locationEvents][populate][event]=*&sort[0]=priority:asc";
export const siteMapBlogQuery =
  apiUrl +
  "blogs?[fields][0]=title&[fields][1]=slug&[fields][2]=updatedAt&sort[1]=publishDate:desc";
export const siteMapBlogCategoryQuery =
  apiUrl + "blog-categories?sort[1]=publishedAt:asc";
