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
const getSocialMeta = (metaArr, ftImg, activityName) => {
  let retObj = {
    title: false,
    description: false,
    hashTags: false,
    imageUrl: false,
  };
  if (metaArr != null && metaArr.length > 0) {
    retObj.title =
      metaArr[0].title != null
        ? metaArr[0].title
        : activityName + "Escape Room - All in Adventures";
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
const getListSocialMeta = (metaArr, ftImg) => {
  let retObj = {
    title: false,
    description: false,
    hashTags: false,
    imageUrl: false,
  };
  if (metaArr != null && metaArr.length > 0) {
    retObj.title =
      metaArr[0].title != null
        ? metaArr[0].title
        : "All Escape Rooms - All in Adventures";
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
    retObj.height = imgObj.data.attributes.width;
  }
  return retObj;
};
const getEventList = (listArr) => {
  let retArr = [];
  for (let i = 0; i < listArr.length; i++) {
    let obj = {
      id: i + 1,
      isPublish: listArr[i].attributes.isPublished,
      eventName: listArr[i].attributes.eventName,
      eventSlug: listArr[i].attributes.eventSlug,
      isPublished: listArr[i].attributes.isPublished,
      description: listArr[i].attributes.eventSlider.sliderText,
      eventListImage: getImageData(
        listArr[i].attributes.eventSlider.eventListImage
      ),
    };
    retArr.push(obj);
  }
  return retArr;
};
// activity Page meta
export const getPageMeta = (
  seoData,
  ftImg,
  eventName,
  pageSubTitle,
  eventSlug
) => {
  let meataData = {
    title:
      seoData.metaTitle != null
        ? seoData.metaTitle
        : "Escape Room " + eventName + " - All in Adventures",
    description:
      seoData.metaDescription != null
        ? seoData.metaDescription
        : metaDesc(pageSubTitle),
    keywords:
      seoData.keywords != null
        ? seoData.keywords
        : eventName +
          " Escape room event," +
          eventName +
          " Escape game event, Allinadventure Escape room event,Allinadventure Escape game event, Mystery Escape game event",
    url: "https://allinadventures.com/" + eventSlug,
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL: seoData.canonicalURL != null ? seoData.canonicalURL : "/blog",
    metaindex: true,
    metaimg:
      seoData.metaImage.data != null
        ? mediaURL + seoData.metaImage.data.attributes.url
        : mediaURL + ftImg,

    twitterMeta: getSocialMeta(seoData.metaSocial, ftImg, eventName),
  };

  return meataData;
};
export const getListPageMeta = (
  seoData,
  ftImg,

  pageSubTitle
) => {
  let meataData = {
    title:
      seoData.metaTitle != null
        ? seoData.metaTitle
        : "All Escape Rooms - All In Adventures (Formerly Mystery Room)",
    description:
      seoData.metaDescription != null
        ? seoData.metaDescription
        : metaDesc(pageSubTitle),
    keywords:
      seoData.keywords != null
        ? seoData.keywords
        : " Escape room, Escape game,Allinadventure Escape room,Allinadventure Escape game, Mystery Escape game",
    url: "https://allinadventures.com/activities",
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL: seoData.canonicalURL != null ? seoData.canonicalURL : "/blog",
    metaindex: true,
    metaimg:
      seoData.metaImage.data != null
        ? mediaURL + seoData.metaImage.data.attributes.url
        : mediaURL + ftImg,

    twitterMeta: getListSocialMeta(seoData.metaSocial, ftImg),
  };

  return meataData;
};
// activity Page HeroData
export const getPageData = (
  eventName,
  eventInfo,
  pageHeroData,
  LocationNumber,
  totalActivities
) => {
  let pageData = {
    pageTitle: pageHeroData.pageTitle,

    pageSubtitle: pageHeroData.pageSubTitle,
    pageHeroDesktop: getImageData(pageHeroData.pageHeroDesktop),
    pageHeroMobile: getImageData(pageHeroData.pageHeroMobile),
    totalLocations: LocationNumber,
    totalUniqueGames: totalActivities,
    eventName: eventName,
    ageRange: eventInfo.age,
    catering: eventInfo.catering,
    guestCapacity: eventInfo.guestCapacity,
    guestServed: eventInfo.guestServed != null ? eventInfo.guestServed : "1M+",
  };
  return pageData;
};
export const getListPageData = (
  pageInfo,
  pageHeroDesktop,
  pageHeroMobile,
  pageTitle,
  pageSubtitle,
  LocationNumber,
  totalActivities
) => {
  let pageData = {
    pageTitle: pageTitle,

    pageSubtitle: pageSubtitle,
    pageHeroDesktop: getImageData(pageHeroDesktop),
    pageHeroMobile: getImageData(pageHeroMobile),
    totalLocations: LocationNumber,
    totalUniqueGames: totalActivities,

    ageRange: pageInfo.ageRange,
    guestServed: pageInfo.guestsServed != null ? pageInfo.guestsServed : "1M+",
    privateEvents:
      pageInfo.privateEvents != null ? pageInfo.privateEvents : "YES",
    guestCapacity:
      pageInfo.guestCapacity != null ? pageInfo.guestsServed : "1M+",
    catering: pageInfo.catering != null ? pageInfo.catering : "YES+",
  };
  return pageData;
};
// activity Page activity Detail Data
export const eventDetailData = (
  whyAllinAdventures,
  makeItMemorable,
  whatToExpect,
  eventName
) => {
  let retObj = {
    eventName: eventName,

    whyAllinAdventuresTitle: whyAllinAdventures.title,
    whyAllinAdventuresSubTitle:
      whyAllinAdventures.subTitle != null
        ? whyAllinAdventures.subTitle
        : eventName,
    whyAllinAdventuresDesc: whyAllinAdventures.description,
    whyAllinAdventuresImg: getImageData(whyAllinAdventures.sectionImage),

    makeItMemorableTitle: makeItMemorable.title,
    makeItMemorableSubTitle:
      makeItMemorable.subTitle != null
        ? whyAllinAdventures.subTitle
        : eventName,
    makeItMemorableDesc: makeItMemorable.description,
    makeItMemorableImg: getImageData(makeItMemorable.sectionImage),

    whatToExpectTitle: whatToExpect.title,
    whatToExpectSubTitle:
      whatToExpect.subTitle != null ? whyAllinAdventures.subTitle : eventName,
    whatToExpectDesc: whatToExpect.description,
    whatToExpectImg: getImageData(whatToExpect.sectionImage),
  };

  return retObj;
};
// activity Page activity video Data

export const eventTestimonialData = (testiObj) => {
  let retArr = [];
  for (let i = 0; i < testiObj.length; i++) {
    let arrObj = {
      id: i + 1,
      title: testiObj[i].title,
      revText: testiObj[i].revText,
      starRating: testiObj[i].starRating,
      revAuthor: testiObj[i].revAuthor,
      revAuthorAddress: testiObj[i].revAuthorAddress,
      revImage: getImageData(testiObj[i].revImage),
    };
    retArr.push(arrObj);
  }

  return retArr;
};

export const eventListData = (listArr, evTitle, evsubTitle) => {
  let retObj = {
    title: evTitle,
    subTitle:
      evsubTitle != null
        ? evsubTitle
        : "Host a new-age party like never before! Choose a game room based on the theme, group size and occasion. Our friendly game host will guide you throughout the experience. While playing, you and your team must work together to find clues and solve mysteries that help you move forward in the exciting adventure.",
    eventList: getEventList(listArr),
  };
  return retObj;
};
