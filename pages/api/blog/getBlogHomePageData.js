import { getTotal } from "../AllDataList/getTotal";
import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import {
  recentBlogs,
  allBlogs,
  popularBlogs,
  allBlogCategories,
} from "../../../lib/blogFormation";

export const getBlogHomePageData = async () => {
  const apifilter = "filters[isPopular][$eq]=false";
  const reqPg =
    "&pagination[page]=1&pagination[pageSize]=6&sort[1]=publishDate:desc";

  const reqFields =
    "&fields[0]=title&fields[1]=slug&fields[2]=excerpt&fields[3]=publishDate";
  const ftImagePop =
    "&populate[featuredImage][fields][0]=name&populate[featuredImage][fields][1]=alternativeText&populate[featuredImage][fields][2]=url&populate[featuredImage][fields][3]=width&populate[featuredImage][fields][4]=height";

  const authorPop =
    "&populate[blog_author][fields][0]=name&populate[blog_author][populate][blogAuthorImage][fields][0]=name&populate[blog_author][populate][blogAuthorImage][fields][1]=alternativeText&populate[blog_author][populate][blogAuthorImage][fields][2]=url&populate[blog_author][populate][blogAuthorImage][fields][3]=width&populate[blog_author][populate][blogAuthorImage][fields][4]=height";
  const reqCatPop =
    "&populate[blogCategories][fields][0]=categoryName&populate[blogCategories][fields][1]=categorySlug";

  const recentReqUrl =
    apiUrl +
    "blogs?" +
    apifilter +
    reqFields +
    ftImagePop +
    authorPop +
    reqCatPop +
    reqPg;

  const blogpostReq = await fetch(recentReqUrl, apiSetting);
  const Posts = await blogpostReq.json();

  //console.log(Posts.data);

  const popularReqUrl =
    apiUrl +
    "blogs?filters[isPopular][$eq]=true" +
    reqFields +
    ftImagePop +
    authorPop +
    reqCatPop +
    "&pagination[page]=1&pagination[pageSize]=4&sort[1]=publishDate:desc";

  const popularPostReq = await fetch(popularReqUrl, apiSetting);
  const PopularPosts = await popularPostReq.json();
  //console.log(PopularPosts);

  const catReq = apiUrl + "blog-categories?populate=*&sort[1]=publishedAt:asc";

  const PostsCats = await fetch(catReq, apiSetting);
  const allCats = await PostsCats.json();

  //console.log(allCats);

  const blogHomePageData = {
    locationlist: getTotal().locationlist,
    activitylistSlug: getTotal().activitylistSlug,
    eventlistSlug: getTotal().eventlistSlug,

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
      totalLocations: getTotal().totalLocations,
    },

    recentblogs: recentBlogs(Posts.data),

    popularblogs: popularBlogs(PopularPosts.data),

    allblogs: allBlogs(Posts.data),
    blogcat: allBlogCategories(allCats.data),
  };

  return blogHomePageData;
};
