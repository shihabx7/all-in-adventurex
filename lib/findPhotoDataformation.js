const mediaURL = process.env.APP_API_MEDIA_URL;
const metaDesc = (htmlstr) => {
  let str = htmlstr
    .replace(/(?:\r\n|\r|\n|\t)/g, " ")
    .replace(/(<([^>]+)>)/gi, "");

  if (str.length > 160) {
    str.substr(str.length - 160);
  }

  return str.trim();
};
const getSocialMeta = (metaArr, ftImg, pgTitle) => {
  let retObj = {
    title: false,
    description: false,
    hashTags: false,
    imageUrl: false,
  };
  if (metaArr != null && metaArr.length > 0) {
    retObj.title = metaArr[0].title != null ? metaArr[0].title : pgTitle;
    retObj.description =
      metaArr[0].description != null ? metaArr[0].description : false;
    retObj.hashTags = metaArr[0].hashTags != null ? metaArr[0].hashTags : false;
    retObj.imageUrl =
      metaArr[0].image.data != null
        ? mediaURL + metaArr[0].image.data.attributes.url
        : mediaURL + ftImg;
  }
  return retObj;
};

const getImgAlt = (imgName) => {
  let imgString = imgName.substr(imgName.length - 4);

  let imgAltLow = imgString[0].split("-").join(" ");

  const strArr = imgAltLow[0].split("-").map((word) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  });
  return strArr.join(" ");
};
const getImageData = (imgObj) => {
  let retObj = {
    hasImage: false,
    url: false,
    alt: false,
    width: 0,
    height: 0,
  };
  if (imgObj.data != null) {
    retObj.hasImage = true;
    retObj.url = mediaURL + imgObj.data.attributes.url;
    retObj.alt =
      imgObj.data.attributes.alternativeText != null
        ? imgObj.data.attributes.alternativeText
        : getImgAlt(imgObj.data.attributes.name);
    retObj.width = imgObj.data.attributes.width;
    retObj.height = imgObj.data.attributes.height;
  }
  return retObj;
};

const getListImgData = (imgObj, lid) => {
  let reObj = {
    id: lid,
    url: mediaURL + imgObj.url,
    alt:
      imgObj.alternativeText != null
        ? imgObj.alternativeText
        : getImgAlt(imgObj.name),
    width: imgObj.width,
    height: imgObj.height,
  };
  return reObj;
};
export const getPageMeta = (pageData) => {
  const seoData = pageData.attributes.seo;
  let meataData = {
    title: seoData.metaTitle,
    description:
      seoData.metaDescription != null
        ? seoData.metaDescription
        : metaDesc(pageData.attributes.pageSubTitle),
    keywords:
      seoData.keywords != null
        ? seoData.keywords
        : " Escape room team photo, Escape room players photo",
    url: "https://allinadventures.com/find-your-photo/",
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL:
      seoData.canonicalURL != null ? seoData.canonicalURL : "/activities",
    metaindex: true,
    metaimg:
      seoData.metaImage.data != null
        ? mediaURL + seoData.metaImage.data.attributes.url
        : mediaURL + pageData.attributes.pageHeroMobile.data.attributes.url,

    twitterMeta: getSocialMeta(
      seoData.metaSocial,
      pageData.attributes.pageHeroMobile.data.attributes.url,
      pageData.attributes.pageTitle
    ),
  };

  return meataData;
};

export const getPageData = (pageData) => {
  let pgData = {
    pageTitle: pageData.attributes.pageTitle,

    pageSubtitle: pageData.attributes.pageSubTitle,
    pageHeroDesktop: getImageData(pageData.attributes.pageHeroDesktop),
    pageHeroMobile: getImageData(pageData.attributes.pageHeroMobile),
  };
  return pgData;
};

export const getPhotoList = (pArr) => {
  let retArr = [];
  let listArr = pArr;

  let more = false;
  if (listArr.length > 8) {
    more = true;
    listArr.pop();
  }

  for (let i = 0; i < listArr.length; i++) {
    for (let j = 0; j < listArr[i].attributes.photos.data.length; j++) {
      let photoObj = getListImgData(
        listArr[i].attributes.photos.data[j].attributes,
        listArr[i].attributes.photos.data[j].id
      );
      retArr.push(photoObj);
    }
  }

  let retobj = { hasMore: more, list: retArr };
  return retobj;
};

export const getSrcPhotoList = (listArr) => {
  let retArr = [];

  for (let i = 0; i < listArr.length; i++) {
    let photoObj = getListImgData(listArr[i].attributes, listArr[i].id);
    retArr.push(photoObj);
  }

  return retArr;
};
