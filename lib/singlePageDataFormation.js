const mediaURL = process.env.APP_API_MEDIA_URL;
const mapApiKey = process.env.MAP_API_KEY;
const mapApiUrl = process.env.MAP_API_URL;

// private function
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const metaDesc = (htmlstr) => {
  let str = htmlstr
    .replace(/(?:\r\n|\r|\n|\t)/g, " ")
    .replace(/(<([^>]+)>)/gi, "");

  if (str.length > 160) {
    str.substr(str.length - 160);
  }

  return str.trim();
};

const getSocialMeta = (metaArr, ftImg) => {
  let retObj = {
    title: false,
    description: false,
    hashTags: false,
    imageUrl: false,
  };
  // const ar = [1, 1, 1, 2];
  // const arrtype = typeof ar;
  //console.log(arrtype);
  if (metaArr != null) {
    retObj.title =
      metaArr.title != null
        ? metaArr.title
        : "All Escape Rooms - All in Adventures";
    retObj.description =
      metaArr.description != null
        ? metaArr.description
        : "All In Adventures (formerly Mystery Room) is now more than an escape room place. Come join us to experience more entertaining activities.";
    retObj.hashTags =
      metaArr.hashTags != null
        ? metaArr.hashTags
        : "Allinadventures_escape_room";
    retObj.imageUrl =
      metaArr.image.data != null
        ? mediaURL + metaArr.image.data.attributes.url
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
// private function
//  Page meta

export const getSinglePageMeta = (seoData, ftImg, urlSlug) => {
  let meataData = {
    title:
      seoData.metaTitle != null
        ? seoData.metaTitle
        : "All Escape Rooms - All In Adventures (Formerly Mystery Room)",
    description:
      seoData.metaDescription != null
        ? seoData.metaDescription
        : "All In Adventures (formerly Mystery Room) is now more than an escape room place. Come join us to experience more entertaining activities.",
    keywords:
      seoData.keywords != null
        ? seoData.keywords
        : " Escape room, Escape game,Allinadventure Escape room,Allinadventure Escape game, Mystery Escape game",
    url: urlSlug
      ? "https://allinadventures.com/" + urlSlug
      : "https://allinadventures.com",
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL: seoData.canonicalURL != null ? seoData.canonicalURL : "/blog",

    metaimg:
      seoData.metaImage.data != null
        ? mediaURL + seoData.metaImage.data.attributes.url
        : mediaURL + ftImg,

    twitterMeta: getSocialMeta(seoData.metaSocial, ftImg),
  };

  return meataData;
};
//  Page HeroData

export const getSinglePageData = (pageResData, totalLocations) => {
  let pageData = {
    pageTitle: pageResData.pageTitle,
    pageSubTitle:
      pageResData.pageSubTitle != null ? pageResData.pageSubTitle : "",
    pageHeroDesktop: getImageData(pageResData.pageHeroDesktop),
    pageHeroMobile: getImageData(pageResData.pageHeroMobile),
    totalLocations: totalLocations,
  };
  return pageData;
};

// about page data
//teammemberList
export const getTeamMemberList = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let obj = {
        id: i + 1,
        name: listArr[i].name,
        designation: listArr[i].designation,
        photo: getImageData(listArr[i].photo),
      };
      retArr.push(obj);
    }
  }

  return retArr;
};
//teammemberList
export const getPartnerMediaList = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let obj = {
        id: i + 1,
        publishDate: listArr[i].publishDate,
        linkUrl: listArr[i].linkUrl,
        partnerLogo: getImageData(listArr[i].partnerLogo),
      };
      retArr.push(obj);
    }
  }

  return retArr;
};
