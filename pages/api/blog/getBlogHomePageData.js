import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import {
  recentBlogQuery,
  popularBlogQuery,
  blogCategoryListQuery,
} from "../../../lib/query/blogQuery";
import {
  recentBlogs,
  allBlogs,
  popularBlogs,
  allBlogCategories,
} from "../../../lib/blogFormation";
import {
  locationSlugListQuery,
  allActivitiesSluglistQuery,
  allEventsSluglistQuery,
} from "../../../lib/query/navMenuQuery";
import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../../lib/menuDataFormation";

export const getBlogHomePageData = async () => {
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

  //fetch latest 6 blogs
  const recentBlogUrl = apiUrl + recentBlogQuery;
  const recentBlogRes = await fetch(recentBlogUrl, apiSetting);
  const recentBlogResObj = await recentBlogRes.json();
  // fetch popular blog
  const popularBlogUrl = apiUrl + popularBlogQuery;
  const popularBlogRes = await fetch(popularBlogUrl, apiSetting);
  const popularBlogResObj = await popularBlogRes.json();

  // fetch blog Catagories
  const catReqUrl = apiUrl + blogCategoryListQuery;
  const blogCaregoryRes = await fetch(catReqUrl, apiSetting);
  const blogCaregoryResObj = await blogCaregoryRes.json();

  //console.log(allCats);

  const blogHomePageData = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,

    pagemeta: {
      title: "Blog | All In Adventures | Formerly Mystery Room",
      description:
        "We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. Join us.",
      keywords:
        "escape room blog, all in adventures blog, mystery room blog, escape room news, all in adventures news, mystery room articles,",
      url: "/blog",
      metaindex: true,
      metaimg: "/assets/blogs/blog-bg-l.jpg",
      metaRobot: "all",
      structuredData: false,
      canonicalURL: "/blog",

      twitterMeta: {
        title: "Blog | All In Adventures | Formerly Mystery Room",
        description:
          "We're incredibly passionate about placing great people in their dream roles",
        hashTags: "allinAdventures_blog",
        imageUrl: "/assets/blogs/blog-bg-l.jpg",
      },
    },

    pagedata: {
      pagetitle: "ALL IN ADVENTURES BLOG",
      pagesubtitle:
        "Passion led us here! We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. We love our awesome team! Join us.",
      coverimageL: "/assets/blogs/blog-bg-l.jpg",
      coverimageM: "/assets/blogs/blog-bg-m.jpg",
      totalLocations: totalLocations,
    },

    recentblogs: recentBlogs(recentBlogResObj.data),

    popularblogs: popularBlogs(popularBlogResObj.data),

    allblogs: allBlogs(recentBlogResObj.data),
    blogcat: allBlogCategories(blogCaregoryResObj.data),
  };

  return blogHomePageData;
};
