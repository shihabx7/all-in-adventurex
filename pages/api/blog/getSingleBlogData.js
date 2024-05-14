import { getTotal } from "../AllDataList/getTotal";
import {
  getPublishDate,
  htmlescape,
  getAuthorsData,
  getBlogCat,
} from "../../../lib/blogFormation";
import { apiSetting, apiUrl, mediaUrl } from "../../../lib/apiSettings";

const getPlaintext = (htmlStr) => {
  return htmlStr
    .replace(/(?:\r\n|\r|\n|\t)/g, " ")
    .replace(/(<([^>]+)>)/gi, "");
};
const getImgAlt = (imgName) => {
  let imgString = imgName.substr(imgName.length - 4);

  let imgAltLow = imgString[0].split("-").join(" ");

  const strArr = imgAltLow[0].split("-").map((word) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  });
  return strArr.join(" ");
};
const getBlogInfo = (authData, catArr, publishDate) => {
  let blogInfoObj = {
    authimg: mediaUrl + authData.attributes.blogAuthorImage.data.attributes.url,
    authimgAlt:
      authData.attributes.blogAuthorImage.data.attributes.alternativeText !=
      null
        ? authData.attributes.blogAuthorImage.data.attributes.alternativeText
        : "Escape Room Content Writer",
    authimgWidth: authData.attributes.blogAuthorImage.data.attributes.width,
    authimgHeight: authData.attributes.blogAuthorImage.data.attributes.height,
    authname: authData.attributes.name,
    // popular: false,
    blogcategory: getBlogCat(catArr),

    lastupdate: getPublishDate(publishDate),
  };
  return blogInfoObj;
};

const getRelatedBlogs = async (catArr, postSlug, qString) => {
  const blogCatArr = getBlogCat(catArr);
  let reqFilter = "blogs?filters[slug][$ne]=" + postSlug;

  if (blogCatArr.length < 2) {
    reqFilter =
      reqFilter + "&filters[blogCategories][id][$eq]=" + blogCatArr[0].id;
  } else {
    for (let i = 0; i < blogCatArr.length; i++) {
      reqFilter =
        reqFilter +
        "&filters[$or][" +
        i +
        "][blogCategories][id][$eq]=" +
        blogCatArr[i].id;
    }
  }
  const reqPg = "&pagination[page]=1&pagination[pageSize]=8&publishDate:desc";

  const reqUrl = apiUrl + reqFilter + qString + reqPg;
  const getrelatedPostData = await fetch(reqUrl, apiSetting);
  const relatedPosts = await getrelatedPostData.json();
  const relatedPostArr = relatedPosts.data;

  let retPostArr = [];

  if (relatedPostArr.length > 0) {
    let randomSelect = Math.floor(Math.random() * (relatedPostArr.length - 1));
    let relatedPostObj = {
      id: relatedPostArr[randomSelect].id,
      title: relatedPostArr[randomSelect].attributes.title,
      slug: relatedPostArr[randomSelect].attributes.slug,
      ftimg:
        mediaUrl +
        relatedPostArr[randomSelect].attributes.featuredImage.data.attributes
          .url,
      ftimgName:
        relatedPostArr[randomSelect].attributes.featuredImage.data.attributes
          .name,
      ftimgAlt:
        relatedPostArr[randomSelect].attributes.featuredImage.data.attributes
          .alternativeText != null
          ? relatedPostArr[randomSelect].attributes.featuredImage.data
              .attributes.alternativeText
          : getImgAlt(
              relatedPostArr[randomSelect].attributes.featuredImage.data
                .attributes.name
            ),
      ftimgWidth:
        relatedPostArr[randomSelect].attributes.featuredImage.data.attributes
          .width,
      ftimgHeight:
        relatedPostArr[randomSelect].attributes.featuredImage.data.attributes
          .height,

      blogdesc: htmlescape(relatedPostArr[randomSelect].attributes.excerpt),
      authimg:
        mediaUrl +
        getAuthorsData(relatedPostArr[randomSelect].attributes.blog_author.data)
          .url,
      authimgAlt: getAuthorsData(
        relatedPostArr[randomSelect].attributes.blog_author.data
      ).imgAlt,
      authimgWidth: getAuthorsData(
        relatedPostArr[randomSelect].attributes.blog_author.data
      ).imgWidth,
      authimgHeight: getAuthorsData(
        relatedPostArr[randomSelect].attributes.blog_author.data
      ).imgHeight,
      authname: getAuthorsData(
        relatedPostArr[randomSelect].attributes.blog_author.data
      ).name,

      blogcategory: getBlogCat(
        relatedPostArr[randomSelect].attributes.blogCategories.data
      ),
      lastupdate: getPublishDate(
        relatedPostArr[randomSelect].attributes.publishDate
      ),
    };
    retPostArr.push(relatedPostObj);
    if (relatedPostArr.length > 1) {
      let randomSelect2 = Math.floor(
        Math.random() * (relatedPostArr.length - 1)
      );
      let relatedPostObj = {
        id: relatedPostArr[randomSelect2].id,
        title: relatedPostArr[randomSelect2].attributes.title,
        slug: relatedPostArr[randomSelect2].attributes.slug,
        ftimg:
          mediaUrl +
          relatedPostArr[randomSelect2].attributes.featuredImage.data.attributes
            .url,
        ftimgName:
          relatedPostArr[randomSelect2].attributes.featuredImage.data.attributes
            .name,
        ftimgAlt:
          relatedPostArr[randomSelect2].attributes.featuredImage.data.attributes
            .alternativeText != null
            ? relatedPostArr[randomSelect2].attributes.featuredImage.data
                .attributes.alternativeText
            : getImgAlt(
                relatedPostArr[randomSelect2].attributes.featuredImage.data
                  .attributes.name
              ),
        ftimgWidth:
          relatedPostArr[randomSelect2].attributes.featuredImage.data.attributes
            .width,
        ftimgHeight:
          relatedPostArr[randomSelect2].attributes.featuredImage.data.attributes
            .height,

        blogdesc: htmlescape(relatedPostArr[randomSelect2].attributes.excerpt),
        authimg:
          mediaUrl +
          getAuthorsData(
            relatedPostArr[randomSelect2].attributes.blog_author.data
          ).url,
        authimgAlt: getAuthorsData(
          relatedPostArr[randomSelect2].attributes.blog_author.data
        ).imgAlt,
        authimgWidth: getAuthorsData(
          relatedPostArr[randomSelect2].attributes.blog_author.data
        ).imgWidth,
        authimgHeight: getAuthorsData(
          relatedPostArr[randomSelect2].attributes.blog_author.data
        ).imgHeight,
        authname: getAuthorsData(
          relatedPostArr[randomSelect2].attributes.blog_author.data
        ).name,

        blogcategory: getBlogCat(
          relatedPostArr[randomSelect2].attributes.blogCategories.data
        ),
        lastupdate: getPublishDate(
          relatedPostArr[randomSelect2].attributes.publishDate
        ),
      };
      retPostArr.push(relatedPostObj);
    }
  } else {
    let newFilter =
      "blogs?filters[slug][$ne]=" +
      postSlug +
      "&filters[blogCategories][categorySlug][$eq]=escape-room";
    let newreqUrl = newFilter + qString + reqPg;
    const newgetrelatedPostData = await fetch(newreqUrl, apiSetting);
    const newrelatedPosts = await newgetrelatedPostData.json();
    const newrelatedPostArr = newrelatedPosts.data;

    for (let i = 0; i < newrelatedPostArr.length; i++) {
      if (i < 2) {
        let newrelatedPostObj = {
          id: newrelatedPostArr[i].id,
          title: newrelatedPostArr[i].attributes.title,
          slug: newrelatedPostArr[i].attributes.slug,
          ftimg:
            mediaUrl +
            newrelatedPostArr[i].attributes.featuredImage.data.attributes.url,
          ftimgName:
            newrelatedPostArr[i].attributes.featuredImage.data.attributes.name,
          ftimgAlt:
            newrelatedPostArr[i].attributes.featuredImage.data.attributes
              .alternativeText,

          blogdesc: htmlescape(newrelatedPostArr[i].attributes.excerpt),

          authimg:
            mediaUrl +
            getAuthorsData(newrelatedPostArr[i].attributes.blog_author.data)
              .url,
          authimgAlt: getAuthorsData(
            newrelatedPostArr[i].attributes.blog_author.data
          ).imgAlt,
          authimgWidth: getAuthorsData(
            newrelatedPostArr[i].attributes.blog_author.data
          ).imgWidth,
          authimgHeight: getAuthorsData(
            newrelatedPostArr[i].attributes.blog_author.data
          ).imgHeight,
          authname: getAuthorsData(
            newrelatedPostArr[i].attributes.blog_author.data
          ).name,

          blogcategory: getBlogCat(
            newrelatedPostArr[i].attributes.blogCategories.data
          ),
          lastupdate: getPublishDate(
            newrelatedPostArr[i].attributes.publishDate
          ),
        };
        retPostArr.push(newrelatedPostObj);
      }
    }
  }

  return retPostArr;
};

const getSocialMeta = (socialNetworkName, metaArr, ftImg, metaTitle) => {
  let retObj = {
    title: false,
    description: false,
    hashTags: false,
    imageUrl: false,
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
          : process.env.APP_API_MEDIA_URL + ftImg;
    }
  }
  return retObj;
};
export const getSingleBlogData = async (slug) => {
  const filter = "filters[slug]=" + slug;
  const fields =
    "&fields[0]=title&fields[1]=slug&fields[2]=publishDate&fields[3]=excerpt&fields[4]=title&fields[5]=content";
  const featureImagePop =
    "&populate[featuredImage][fields][0]=name&populate[featuredImage][fields][1]=alternativeText&populate[featuredImage][fields][2]=url&populate[featuredImage][fields][3]=width&populate[featuredImage][fields][4]=height";
  const authorPop =
    "&populate[blog_author][fields][0]=name&populate[blog_author][populate][blogAuthorImage][fields][0]=name&populate[blog_author][populate][blogAuthorImage][fields][1]=alternativeText&populate[blog_author][populate][blogAuthorImage][fields][2]=url&populate[blog_author][populate][blogAuthorImage][fields][3]=width&populate[blog_author][populate][blogAuthorImage][fields][4]=height";
  const catPop =
    "&populate[blogCategories][fields][0]=categoryName&populate[blogCategories][fields][1]=categorySlug";
  const seoPop =
    "&populate[seo][populate][metaImage][fields][0]=name&populate[seo][populate][metaImage][fields][1]=url&populate[seo][populate][metaSocial][fields][0]=socialNetwork&populate[seo][populate][metaSocial][fields][1]=title&populate[seo][populate][metaSocial][fields][2]=description&populate[seo][populate][metaSocial][fields][3]=hashTags&populate[seo][populate][metaSocial][populate][image][fields][0]=url";
  const blogReqUrl =
    apiUrl +
    "blogs?" +
    filter +
    fields +
    featureImagePop +
    authorPop +
    catPop +
    seoPop;

  const response = await fetch(blogReqUrl, apiSetting);
  const blogPostArr = await response.json();
  const blogPost = blogPostArr.data[0];
  const seoData = blogPost.attributes.seo;

  const getSingleBlog = {
    locationlist: getTotal().locationlist,
    activitylistSlug: getTotal().activitylistSlug,
    eventlistSlug: getTotal().eventlistSlug,

    pagemeta: {
      title:
        seoData.metaTitle != null
          ? seoData.metaTitle
          : blogPost.attributes.title,
      description:
        seoData.metaDescription != null
          ? seoData.metaDescription
          : getPlaintext(blogPost.attributes.excerpt),
      keywords:
        seoData.keywords != null
          ? seoData.keywords
          : "Escape room blog,Escape game blog,Allinadventure blog,Escape game blog, Mystery room blog",
      url: "/blog/" + blogPost.attributes.slug,
      metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
      structuredData:
        seoData.structuredData != null ? seoData.structuredData : false,
      canonicalURL:
        seoData.canonicalURL != null ? seoData.canonicalURL : "/blog",
      metaindex: true,
      metaimg:
        seoData.metaImage.data.attributes.url != null
          ? process.env.APP_API_MEDIA_URL +
            seoData.metaImage.data.attributes.url
          : process.env.APP_API_MEDIA_URL +
            blogPost.attributes.featuredImage.data.attributes.url,
      facebookMeta: getSocialMeta(
        "Facebook",
        seoData.metaSocial,
        blogPost.attributes.featuredImage.data.attributes.url,
        blogPost.attributes.title
      ),
      twitterMeta: getSocialMeta(
        "Twitter",
        seoData.metaSocial,
        blogPost.attributes.featuredImage.data.attributes.url,
        blogPost.attributes.title
      ),
    },
    pagedata: {
      pagetitle: blogPost.attributes.title,
      ftimg:
        process.env.APP_API_MEDIA_URL +
        blogPost.attributes.featuredImage.data.attributes.url,
      ftimgAlt: blogPost.attributes.featuredImage.data.attributes
        .alternativeText
        ? blogPost.attributes.featuredImage.data.attributes.alternativeText
        : getImgAlt(blogPost.attributes.featuredImage.data.attributes.name),
      ftimgWidth: blogPost.attributes.featuredImage.data.attributes.width,
      ftimgHeight: blogPost.attributes.featuredImage.data.attributes.height,
      description: getPlaintext(blogPost.attributes.excerpt),
      totalLocations: getTotal().totalLocations,
      shareurl: "/blog/" + blogPost.attributes.slug,
    },
    bloginfo: getBlogInfo(
      blogPost.attributes.blog_author.data,
      blogPost.attributes.blogCategories.data,
      blogPost.attributes.publishDate
    ),
    blogdesc: blogPost.attributes.content,
    relatedblogdata: await getRelatedBlogs(
      blogPost.attributes.blogCategories.data,
      blogPost.attributes.slug,
      fields + featureImagePop + authorPop + catPop
    ),
  };
  // console.log(getSingleBlog);
  return getSingleBlog;
};
