const mediaURL = process.env.APP_API_MEDIA_URL;
const siteUrl = process.env.SITE_URL || "https://allinadventures.com";
const metaDesc = (htmlstr) => {
  let str = htmlstr
    .replace(/(?:\r\n|\r|\n|\t)/g, " ")
    .replace(/(<([^>]+)>)/gi, "");

  if (str.length > 160) {
    str.substr(str.length - 160);
  }

  return str.trim();
};
const getSocialMeta = (socialMetaObj, ftImg) => {
  let retObj = {
    title: false,
    description: false,
    hashTags: false,
    imageUrl: false,
  };
  if (socialMetaObj !== null) {
    retObj.title =
      socialMetaObj.title !== null
        ? socialMetaObj.title
        : "All in Adventures Escape Rooms";
    retObj.description =
      socialMetaObj.description !== null ? socialMetaObj.description : false;
    retObj.hashTags =
      socialMetaObj.hashTags !== null
        ? socialMetaObj.hashTags
        : "Allinadventures_escape_room";
    retObj.imageUrl =
      socialMetaObj.image.data !== null
        ? mediaURL + socialMetaObj.image.data.attributes.url
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
export const getPageMeta = (seoData, ftImg, totalLocations, urlSlug) => {
  let meataData = {
    title:
      seoData.metaTitle !== null
        ? seoData.metaTitle
        : "Find Your Photo | Allinadventures Escape Room",
    description:
      seoData.metaDescription !== null
        ? seoData.metaDescription
        : "Relive your adventure with All In Adventures! Easily find and download your group photo by selecting your location and date. Explore memories from" +
          totalLocations +
          "locations.",
    keywords:
      seoData.keywords !== null
        ? seoData.keywords
        : " escape game photo, escape room team photo",
    url: urlSlug ? siteUrl + "/" + urlSlug : siteUrl,
    metaRobot: seoData.metaRobots !== null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL:
      seoData.canonicalURL !== null
        ? seoData.canonicalURL
        : "https://allinadventures.com/find-your-photo",

    metaimg:
      seoData.metaImage.data !== null
        ? mediaURL + seoData.metaImage.data.attributes.url
        : mediaURL + ftImg,

    twitterMeta: getSocialMeta(seoData.metaSocial, ftImg),
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