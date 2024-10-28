import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { allCatBlogs, allBlogCategories } from "../../../lib/blogFormation";
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

const getSocialMeta = (socialNetworkName, metaArr, ftImg, metaTitle) => {
  let retObj = {
    title: "Blog | All In Adventures | Formerly Mystery Room",
    description:
      "We're incredibly passionate about placing great people in their dream roles",
    hashTags: "#allinAdventures_blog",
    imageUrl: "/assets/blogs/blog-bg-l.jpg",
  };
  for (let i = 0; i < metaArr.length; i++) {
    if (metaArr[i].socialNetwork == socialNetworkName) {
      retObj.title = metaArr[i].title != null ? metaArr[i].title : metaTitle;
      retObj.description =
        metaArr[i].description != null ? metaArr[i].description : false;
      retObj.hashTags =
        metaArr[i].hashTags != null ? metaArr[i].hashTags : false;
      retObj.imageUrl =
        metaArr[i].image.data != null
          ? process.env.APP_API_MEDIA_URL + metaArr[i].image.data.attributes.url
          : "/assets/blogs/blog-bg-l.jpg";
    }
  }
  return retObj;
};

const getPageMeta = (seoData, catName, slug) => {
  let seoObj = {
    title: "Blog | All In Adventures | Formerly Mystery Room",
    description:
      "We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. Join us.",
    keywords:
      "escape room blog, all in adventures blog, mystery room blog, escape room news, all in adventures news, mystery room articles,",
    url: "/blog/category/" + slug,
    metaindex: true,
    metaimg: "/assets/blogs/blog-bg-l.jpg",
    metaRobot: "all",
    structuredData: false,
    canonicalURL: "/blog",
    twitterMeta: {
      title: "Blog | All In Adventures | Formerly Mystery Room",
      description:
        "We're incredibly passionate about placing great people in their dream roles",
      hashTags: "#allinAdventures_blog",
      imageUrl: process.env.APP_API_MEDIA_URL + "/assets/blogs/blog-bg-l.jpg",
    },
  };
  if (seoData != null) {
    seoObj.title =
      seoData.metaTitle != null
        ? seoData.metaTitle
        : "Blog | All In Adventures | Formerly Mystery Room";
    seoObj.description =
      seoData.metaDescription != null
        ? seoData.metaDescription
        : "We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. Join us.";
    seoObj.keywords =
      seoData.keywords != null
        ? seoData.keywords
        : "escape room blog, all in adventures blog, mystery room blog, escape room news, all in adventures news, mystery room articles";
    seoObj.metaimg =
      seoData.metaImage != null
        ? process.env.APP_API_MEDIA_URL + seoData.metaImage.data.attributes.url
        : "/assets/blogs/blog-bg-l.jpg";
    seoObj.metaRobot = seoData.metaRobots != null ? seoData.metaRobots : "all";
    seoObj.structuredData =
      seoData.structuredData != null ? seoData.structuredData : false;
    seoObj.canonicalURL =
      seoData.canonicalURL != null ? seoData.canonicalURL : "/blog";
    seoObj.facebookMeta = getSocialMeta(
      "Facebook",
      seoData.metaSocial,
      seoData.metaImage.data.attributes.url,
      seoData.metaTitle
    );
    seoObj.twitterMeta = getSocialMeta(
      "Twitter",
      seoData.metaSocial,
      seoData.metaImage.data.attributes.url,
      seoData.metaTitle
    );
  }
  return seoObj;
};

export const getBlogCategoryData = async (catSlug) => {
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
  const apifilter = "filters[blogCategories][categorySlug][$eq]=" + catSlug;
  const reqPg =
    "&pagination[start]=0&pagination[limit]=8&sort[1]=publishDate:desc";

  const reqFields =
    "&fields[0]=title&fields[1]=slug&fields[2]=excerpt&fields[3]=publishDate";
  const ftImagePop =
    "&populate[featuredImage][fields][0]=name&populate[featuredImage][fields][1]=alternativeText&populate[featuredImage][fields][2]=url&populate[featuredImage][fields][3]=width&populate[featuredImage][fields][4]=height";

  const authorPop =
    "&populate[blog_author][fields][0]=name&populate[blog_author][populate][blogAuthorImage][fields][0]=name&populate[blog_author][populate][blogAuthorImage][fields][1]=alternativeText&populate[blog_author][populate][blogAuthorImage][fields][2]=url&populate[blog_author][populate][blogAuthorImage][fields][3]=width&populate[blog_author][populate][blogAuthorImage][fields][4]=height";
  const reqCatPop =
    "&populate[blogCategories][fields][0]=categoryName&populate[blogCategories][fields][1]=categorySlug";

  const catBlogReqUrl =
    apiUrl +
    "blogs?" +
    apifilter +
    reqFields +
    ftImagePop +
    authorPop +
    reqCatPop +
    reqPg;

  const blogpostReq = await fetch(catBlogReqUrl, apiSetting);
  const Posts = await blogpostReq.json();

  const catReq = apiUrl + "blog-categories?populate=*&sort[1]=publishedAt:asc";
  const PostsCats = await fetch(catReq, apiSetting);
  const allCats = await PostsCats.json();

  const catInfoReq =
    apiUrl +
    "blog-categories?filters[categorySlug][$eq]=" +
    catSlug +
    "&populate[catSeo][populate][metaImage][fields][0]=name&populate[catSeo][populate][metaImage][fields][1]=url&populate[catSeo][populate][metaSocial][fields][0]=socialNetwork&populate[catSeo][populate][metaSocial][fields][1]=title&populate[catSeo][populate][metaSocial][fields][2]=description&populate[catSeo][populate][metaSocial][fields][3]=hashTags&populate[catSeo][populate][metaSocial][populate][image][fields][0]=url";
  const catInfoRes = await fetch(catInfoReq, apiSetting);
  const catInfo = await catInfoRes.json();
  const catInfoSeo = catInfo.data[0].attributes.catSeo;

  const blogHomePageData = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,

    pagemeta: getPageMeta(catInfoSeo, catInfo.data[0].attributes.categoryName),

    pagedata: {
      pagetitle: "ALL IN ADVENTURES " + catInfo.data[0].attributes.categoryName,
      pagesubtitle:
        "Passion led us here! We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. We love our awesome team! Join us.",
      coverimageL: "/assets/blogs/blog-bg-l.jpg",
      coverimageM: "/assets/blogs/blog-bg-m.jpg",
      totalLocations: totalLocations,
    },
    categorySlug: catSlug,
    categoryName: catInfo.data[0].attributes.categoryName,
    allblogs: allCatBlogs(Posts.data),
    ismoreblog: Posts.data.length > 4 ? true : false,
    blogcat: allBlogCategories(allCats.data),
  };

  return blogHomePageData;
};
