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
    retObj.height = imgObj.data.attributes.width;
  }
  return retObj;
};

const getGameList = (listArr, cat) => {
  let retArr = [];

  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].attributes.activityInfo.category == cat) {
      let obj = {
        id: i + 1,
        isPublish: listArr[i].attributes.isPublish,
        activityName: listArr[i].attributes.activityName,
        activitySlug: listArr[i].attributes.activitySlug,
        activityCategory: listArr[i].attributes.activityInfo.category,
        ageRange: listArr[i].attributes.activityInfo.age,
        duration: listArr[i].attributes.activityInfo.duration,
        teamSize: listArr[i].attributes.activityInfo.teamSize,
        successRate:
          listArr[i].attributes.activityInfo.successRate != null
            ? listArr[i].attributes.activityInfo.successRate
            : false,
        teamSizeLabel: listArr[i].attributes.activityInfo.teamSizeLabel,
        price: listArr[i].attributes.activityInfo.price,
        description: listArr[i].attributes.activitySlider.sliderText,
        carouselImage: getImageData(
          listArr[i].attributes.activitySlider.sliderBgImage
        ),
      };
      retArr.push(obj);
    }
  }

  return retArr;
};
const testimonialList = (testArr) => {
  let retArr = [];
  for (let i = 0; i < testArr.length; i++) {
    let arrObj = {
      id: i + 1,
      title: testArr[i].title,
      revText: testArr[i].revText,
      starRating: testArr[i].starRating,
      revAuthor: testArr[i].revAuthor,
      revAuthorAddress: testArr[i].revAuthorAddress,
      revImage: getImageData(testArr[i].revImage),
    };
    retArr.push(arrObj);
  }

  return retArr;
};
const eventList = (listArr) => {
  let retArr = [];
  for (let i = 0; i < listArr.length; i++) {
    let obj = {
      id: i + 1,
      isPublish: listArr[i].attributes.isPublished,
      eventName: listArr[i].attributes.eventName,
      eventSlug: listArr[i].attributes.eventSlug,
      isPublished: listArr[i].attributes.isPublished,
      description: listArr[i].attributes.eventSlider.sliderText,
      eventCarousel: getImageData(
        listArr[i].attributes.eventSlider.sliderImage
      ),
    };
    retArr.push(obj);
  }
  return retArr;
};
// Home Page meta

export const getPageMeta = (
  seoData,
  ftImg,
  pageSubTitle,
  totalLocations,
  urlSlug
) => {
  let metaData = {
    title:
      "All In Adventures | " +
      totalLocations +
      " Escape Room Venues in the U.S.",
    description:
      seoData.metaDescription !== null
        ? seoData.metaDescription
        : metaDesc(pageSubTitle),
    keywords:
      seoData.keywords !== null
        ? seoData.keywords
        : " Escape room, Escape game,Allinadventure Escape room,Allinadventure Escape game, Mystery Escape game",
    url: urlSlug ? siteUrl + "/" + urlSlug : siteUrl,
    metaRobot: seoData.metaRobots !== null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL:
      seoData.canonicalURL !== null
        ? seoData.canonicalURL
        : "https://allinadventures.com",

    metaimg:
      seoData.metaImage.data !== null
        ? mediaURL + seoData.metaImage.data.attributes.url
        : mediaURL + ftImg,

    twitterMeta: getSocialMeta(seoData.metaSocial, ftImg),
  };

  return metaData;
};
// Home Page HeroData

export const getPageData = (
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

    pageSubTitle: pageSubtitle,
    pageHeroDesktop: getImageData(pageHeroDesktop),
    pageHeroMobile: getImageData(pageHeroMobile),
    themeImage: getImageData(pageInfo.themeImage),
    ageRange: pageInfo.ageRange,
    raveReviews: pageInfo.raveReviews ? pageInfo.raveReviews : "25K+",
    privateEvents: pageInfo.privateEvents ? pageInfo.privateEvents : "YES",
    guestsServed: pageInfo.guestsServed != null ? pageInfo.guestsServed : "1M+",
    totalLocations: LocationNumber,
    totalUniqueGames: totalActivities,
  };
  return pageData;
};
// Home Page activity Detail Data

// Home Page  video Data
export const getPageVideo = (videoObj) => {
  let retObj = {
    title: videoObj.sectionTitle,
    subTitle: videoObj.subTitle,
    youtubeVideoId: videoObj.youTubeVideoId,
    thumbnail:
      videoObj.thumbnail.data != null
        ? getImageData(videoObj.thumbnail)
        : false,
  };

  return retObj;
};

export const getEscapeGameList = (listArr, sectionData) => {
  let actList = getGameList(listArr, "Escape Games");
  let retObj = {
    hasGames: actList.length > 0 ? true : false,
    title: sectionData.escapeGameTitle,
    subTitle:
      sectionData.escapeGameSubTitle != null
        ? sectionData.escapeGameSubTitle
        : "Team up with your friends, family, kids (age 6+), or co-workers for an adrenaline filled 60 minute in-person interactive and engaging escape game experience!",
    gameList: actList,
  };
  return retObj;
};
export const getOtherGameList = (listArr, sectionData) => {
  let actList = getGameList(listArr, "Others");
  let retObj = {
    hasGames: actList.length > 0 ? true : false,
    title: sectionData.otherGameTitle,
    subTitle:
      sectionData.otherGameSubTitle != null
        ? sectionData.otherGameSubTitle
        : "More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!",
    gameList: actList,
  };
  return retObj;
};
export const getEventList = (listArr, sectionData) => {
  let retObj = {
    title: sectionData.eventTitle,
    subTitle:
      sectionData.eventSubTitle != null
        ? sectionData.eventSubTitle
        : "All In Adventures is famous for hosting most memorable parties and events. We can accommodate large private and corporate groups with our multiple-room settings and are happy to customize an event to suit your needs.",
    eventList: eventList(listArr),
  };
  return retObj;
};
export const getTestimonials = (testiArr, sectionData) => {
  let testDataObj = {
    title: sectionData.testimonialTitle,
    subTitle:
      sectionData.testimonialSubTitle != null
        ? sectionData.testimonialSubTitle
        : "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
    testimonialList: testimonialList(testiArr),
  };

  return testDataObj;
};
