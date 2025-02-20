import { mediaUrl } from "./apiSettings";

export const htmlescape = (htmlStr) => {
  let str = htmlStr.trim().replace(/(<([^>]+)>)/gi, "");

  return str.replace(/(?:\r\n|\r|\n|\t)/g, " ");
};
export const blogExp = (excerpt) => {
  let ret = excerpt.trim();
  if (ret.length > 165) {
    ret = "<p>" + ret.substr(0, 164) + "...</p>";
  }
  return ret;
};
export const getImgAlt = (imgName) => {
  let imgString = imgName.substr(imgName.length - 4);

  let imgAltLow = imgString[0].split("-").join(" ");

  const strArr = imgAltLow[0].split("-").map((word) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  });
  return strArr.join(" ");
};
export const getBlogCat = (catArr) => {
  let newCatArr = [];
  for (let i = 0; i < catArr.length; i++) {
    let catObj = {
      id: catArr[i].id,
      name: catArr[i].attributes.categoryName,
      slug: catArr[i].attributes.categorySlug,
    };
    newCatArr.push(catObj);
  }
  return newCatArr;
};
export const getPublishDate = (datestr) => {
  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "Septemer",
    10: "October",
    11: "November",
    12: "December",
  };
  const dtArr = datestr.split("-");

  const year = dtArr[0];
  const month = dtArr[1];
  const day = dtArr[2];

  return day + " " + month + ", " + year;
};
export const getAuthorsData = (authData) => {
  return {
    name: authData.attributes.name,
    url: authData.attributes.blogAuthorImage.data.attributes.url,
    imgAlt:
      authData.attributes.blogAuthorImage.data.attributes.alternativeText !=
      null
        ? authData.attributes.blogAuthorImage.data.attributes.alternativeText
        : "Escape room blog author",
    imgWidth: authData.attributes.blogAuthorImage.data.attributes.width,
    imgHeight: authData.attributes.blogAuthorImage.data.attributes.height,
  };
};

export const recentBlogs = (posts) => {
  let rblogArr = [];

  for (let i = 0; i < 2; i++) {
    let rblogobj = {
      id: posts[i].id,
      title: posts[i].attributes.title,
      slug: posts[i].attributes.slug,
      ftimg: mediaUrl + posts[i].attributes.featuredImage.data.attributes.url,
      ftimgName: posts[i].attributes.featuredImage.data.attributes.name,
      ftimgAlt:
        posts[i].attributes.featuredImage.data.attributes.alternativeText !=
        null
          ? posts[i].attributes.featuredImage.data.attributes.alternativeText
          : getImgAlt(posts[i].attributes.featuredImage.data.attributes.name),
      ftimgWidth: posts[i].attributes.featuredImage.data.attributes.width,
      ftimgHeight: posts[i].attributes.featuredImage.data.attributes.height,

      blogdesc: blogExp(htmlescape(posts[i].attributes.excerpt)),
      authimg:
        mediaUrl + getAuthorsData(posts[i].attributes.blog_author.data).url,
      authimgAlt: getAuthorsData(posts[i].attributes.blog_author.data).imgAlt,
      authimgWidth: getAuthorsData(posts[i].attributes.blog_author.data)
        .imgWidth,
      authimgHeight: getAuthorsData(posts[i].attributes.blog_author.data)
        .imgHeight,
      authname: getAuthorsData(posts[i].attributes.blog_author.data).name,
      blogcategory: getBlogCat(posts[i].attributes.blogCategories.data),
      lastupdate: getPublishDate(posts[i].attributes.publishDate),
    };
    rblogArr.push(rblogobj);
  }

  return rblogArr;
};
export const allBlogs = (posts) => {
  let rblogArr = [];

  for (let i = 2; i < posts.length; i++) {
    let rblogobj = {
      id: posts[i].id,
      title: posts[i].attributes.title,
      slug: posts[i].attributes.slug,
      ftimg: mediaUrl + posts[i].attributes.featuredImage.data.attributes.url,
      ftimgName: posts[i].attributes.featuredImage.data.attributes.name,
      ftimgAlt:
        posts[i].attributes.featuredImage.data.attributes.alternativeText !=
        null
          ? posts[i].attributes.featuredImage.data.attributes.alternativeText
          : getImgAlt(posts[i].attributes.featuredImage.data.attributes.name),
      ftimgWidth: posts[i].attributes.featuredImage.data.attributes.width,
      ftimgHeight: posts[i].attributes.featuredImage.data.attributes.height,

      blogdesc: blogExp(htmlescape(posts[i].attributes.excerpt)),
      authimg:
        mediaUrl + getAuthorsData(posts[i].attributes.blog_author.data).url,
      authimgAlt: getAuthorsData(posts[i].attributes.blog_author.data).imgAlt,
      authimgWidth: getAuthorsData(posts[i].attributes.blog_author.data)
        .imgWidth,
      authimgHeight: getAuthorsData(posts[i].attributes.blog_author.data)
        .imgHeight,
      authname: getAuthorsData(posts[i].attributes.blog_author.data).name,
      blogcategory: getBlogCat(posts[i].attributes.blogCategories.data),
      lastupdate: getPublishDate(posts[i].attributes.publishDate),
    };
    rblogArr.push(rblogobj);
  }

  return rblogArr;
};

export const popularBlogs = (posts) => {
  let rblogArr = [];

  for (let i = 0; i < posts.length; i++) {
    let rblogobj = {
      id: posts[i].id,
      title: posts[i].attributes.title,
      slug: posts[i].attributes.slug,
      ftimg: mediaUrl + posts[i].attributes.featuredImage.data.attributes.url,
      ftimgName: posts[i].attributes.featuredImage.data.attributes.name,
      ftimgAlt:
        posts[i].attributes.featuredImage.data.attributes.alternativeText,
      ftimgAlt:
        posts[i].attributes.featuredImage.data.attributes.alternativeText !=
        null
          ? posts[i].attributes.featuredImage.data.attributes.alternativeText
          : getImgAlt(posts[i].attributes.featuredImage.data.attributes.name),
      ftimgWidth: posts[i].attributes.featuredImage.data.attributes.width,
      ftimgHeight: posts[i].attributes.featuredImage.data.attributes.height,

      blogdesc: blogExp(htmlescape(posts[i].attributes.excerpt)),
      authimg:
        mediaUrl + getAuthorsData(posts[i].attributes.blog_author.data).url,
      authname: getAuthorsData(posts[i].attributes.blog_author.data).name,
      authimgAlt: getAuthorsData(posts[i].attributes.blog_author.data).imgAlt,
      authimgWidth: getAuthorsData(posts[i].attributes.blog_author.data)
        .imgWidth,
      authimgHeight: getAuthorsData(posts[i].attributes.blog_author.data)
        .imgHeight,
      blogcategory: getBlogCat(posts[i].attributes.blogCategories.data),
      lastupdate: getPublishDate(posts[i].attributes.publishDate),
    };
    rblogArr.push(rblogobj);
  }

  return rblogArr;
};
// get blog categories
export const allBlogCategories = (catsArr) => {
  let catArr = [];
  for (let i = 0; i < catsArr.length; i++) {
    let catObj = {
      id: catsArr[i].id,
      cat: catsArr[i].attributes.categoryName,
      slug: catsArr[i].attributes.categorySlug,
    };
    catArr.push(catObj);
  }
  return catArr;
};

// for loading previous blogs
export const prevBlogs = (posts) => {
  let rblogArr = [];

  for (let i = 0; i < posts.length; i++) {
    if (i < 4) {
      let rblogobj = {
        id: posts[i].id,
        title: posts[i].attributes.title,
        slug: posts[i].attributes.slug,
        ftimg: mediaUrl + posts[i].attributes.featuredImage.data.attributes.url,
        ftimgName: posts[i].attributes.featuredImage.data.attributes.name,
        ftimgAlt:
          posts[i].attributes.featuredImage.data.attributes.alternativeText !=
          null
            ? posts[i].attributes.featuredImage.data.attributes.alternativeText
            : getImgAlt(posts[i].attributes.featuredImage.data.attributes.name),
        ftimgWidth: posts[i].attributes.featuredImage.data.attributes.width,
        ftimgHeight: posts[i].attributes.featuredImage.data.attributes.height,

        blogdesc: blogExp(htmlescape(posts[i].attributes.excerpt)),
        authimg:
          mediaUrl + getAuthorsData(posts[i].attributes.blog_author.data).url,
        authimgAlt: getAuthorsData(posts[i].attributes.blog_author.data).imgAlt,
        authimgWidth: getAuthorsData(posts[i].attributes.blog_author.data)
          .imgWidth,
        authimgHeight: getAuthorsData(posts[i].attributes.blog_author.data)
          .imgHeight,
        authname: getAuthorsData(posts[i].attributes.blog_author.data).name,
        blogcategory: getBlogCat(posts[i].attributes.blogCategories.data),
        lastupdate: getPublishDate(posts[i].attributes.publishDate),
      };

      rblogArr.push(rblogobj);
    }
  }

  return rblogArr;
};
// all category blog
export const allCatBlogs = (posts) => {
  let rblogArr = [];

  for (let i = 0; i < posts.length; i++) {
    if (i < 4) {
      let rblogobj = {
        id: posts[i].id,
        title: posts[i].attributes.title,
        slug: posts[i].attributes.slug,
        ftimg: mediaUrl + posts[i].attributes.featuredImage.data.attributes.url,
        ftimgName: posts[i].attributes.featuredImage.data.attributes.name,
        ftimgAlt:
          posts[i].attributes.featuredImage.data.attributes.alternativeText !=
          null
            ? posts[i].attributes.featuredImage.data.attributes.alternativeText
            : getImgAlt(posts[i].attributes.featuredImage.data.attributes.name),
        ftimgWidth: posts[i].attributes.featuredImage.data.attributes.width,
        ftimgHeight: posts[i].attributes.featuredImage.data.attributes.height,

        blogdesc: blogExp(htmlescape(posts[i].attributes.excerpt)),
        authimg:
          mediaUrl + getAuthorsData(posts[i].attributes.blog_author.data).url,
        authimgAlt: getAuthorsData(posts[i].attributes.blog_author.data).imgAlt,
        authimgWidth: getAuthorsData(posts[i].attributes.blog_author.data)
          .imgWidth,
        authimgHeight: getAuthorsData(posts[i].attributes.blog_author.data)
          .imgHeight,
        authname: getAuthorsData(posts[i].attributes.blog_author.data).name,
        blogcategory: getBlogCat(posts[i].attributes.blogCategories.data),
        lastupdate: getPublishDate(posts[i].attributes.publishDate),
      };
      rblogArr.push(rblogobj);
    }
  }

  return rblogArr;
};
