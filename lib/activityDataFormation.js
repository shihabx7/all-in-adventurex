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
const getGalleyImageArr = (imgObjArr) => {
  let retArr = [];

  for (let i = 0; i < imgObjArr.length; i++) {
    let obj = {
      id: i + 1,
      url: mediaURL + imgObjArr[i].attributes.url,
      alt:
        imgObjArr[i].attributes.alternativeText != null
          ? imgObjArr[i].attributes.alternativeText
          : getImgAlt(imgObjArr[i].attributes.name),
      width: imgObjArr[i].attributes.width,
      height: imgObjArr[i].attributes.height,
    };
    retArr.push(obj);
  }
  return retArr;
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
        listImage: getImageData(
          listArr[i].attributes.activitySlider.activityListImage
        ),
      };
      retArr.push(obj);
    }
  }

  return retArr;
};
// activity Page meta
export const getPageMeta = (
  seoData,
  ftImg,
  activityName,
  pageSubTitle,
  activitySlug
) => {
  let meataData = {
    title:
      seoData.metaTitle != null
        ? seoData.metaTitle
        : activityName + " Escape Room - All in Adventures",
    description:
      seoData.metaDescription != null
        ? seoData.metaDescription
        : metaDesc(pageSubTitle),
    keywords:
      seoData.keywords != null
        ? seoData.keywords
        : activityName +
          " Escape room," +
          activityName +
          " Escape game,Allinadventure Escape room,Allinadventure Escape game, Mystery Escape game",
    url: "https://allinadventures.com/activities/" + activitySlug,
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL:
      seoData.canonicalURL != null ? seoData.canonicalURL : "/activities",
    metaindex: true,
    metaimg:
      seoData.metaImage.data != null
        ? mediaURL + seoData.metaImage.data.attributes.url
        : mediaURL + ftImg,

    twitterMeta: getSocialMeta(seoData.metaSocial, ftImg, activityName),
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
  activityName,
  activityInfo,
  pageHeroData,
  LocationNumber,
  totalActivities
) => {
  let pageData = {
    pageTitle: pageHeroData.pageTitle,
    themeImage: getImageData(activityInfo.activityThemeImage), // image data object
    pageSubtitle: pageHeroData.pageSubTitle,
    pageHeroDesktop: getImageData(pageHeroData.pageHeroDesktop),
    pageHeroMobile: getImageData(pageHeroData.pageHeroMobile),
    totalLocations: LocationNumber,
    totalUniqueGames: totalActivities,
    price: activityInfo.price, // price data arry
    duration: activityInfo.duration, // count as minutes
    teamSize: activityInfo.teamSize,
    teamSizeLabel: activityInfo.teamSizeLabel
      ? activityInfo.teamSizeLabel
      : "Team Size",
    age: activityInfo.age,
    successRate: activityInfo.successRate ? activityInfo.successRate : "56",
    privateEvents: activityInfo.privateEvents
      ? activityInfo.privateEvents
      : "YES",
    activityname: activityName,
    pageNotice:
      pageHeroData.pageNotice != null ? pageHeroData.pageNotice : false,
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
    raveReviews: pageInfo.raveReviews ? pageInfo.raveReviews : "25K+",
    privateEvents: pageInfo.privateEvents ? pageInfo.privateEvents : "YES",
    guestsServed: pageInfo.guestsServed != null ? pageInfo.guestsServed : "1M+",
  };
  return pageData;
};
// activity Page activity Detail Data
export const activityDetailData = (storyLine, plot, mission, activityName) => {
  let retObj = {
    activityName: activityName,
    storyLineText: storyLine.storyLineText,
    storyLineLabel:
      storyLine.storyLineLabel != null
        ? storyLine.storyLineLabel
        : "THE STORYLINE",
    storyLineImage:
      storyLine.storyLineImage.data != null
        ? getImageData(storyLine.storyLineImage)
        : false,
    storyLineBgImage:
      storyLine.storyLineBgImage.data != null
        ? getImageData(storyLine.storyLineBgImage)
        : false,

    plotText: plot.plotText,
    plotLabel: plot.plotLabel != null ? plot.plotLabel : "THE PLOT",

    plotImage:
      plot.plotImage.data != null ? getImageData(plot.plotImage) : false,
    plotBgImage:
      plot.plotBgImage.data != null ? getImageData(plot.plotBgImage) : false,
    missionText: mission.missionText,
    missionLabel:
      mission.missionLabel != null ? mission.missionLabel : "YOUR MISSION",

    missionImage:
      mission.missionImage.data != null
        ? getImageData(mission.missionImage)
        : false,
    missionBgImage:
      mission.missionBgImage.data != null
        ? getImageData(storyLine.missionBgImage)
        : false,
  };

  return retObj;
};
// activity Page activity video Data
export const activityVideoData = (videoObj) => {
  let retObj = {
    videoTrailerTitle:
      videoObj.videoTrailerTitle != null
        ? videoObj.videoTrailerTitle
        : "Game Trailer",
    videoTrailerSubTitle: videoObj.videoTrailerSubTitle,
    youtubeVideoId: videoObj.youtubeVideoId,
    thumbnail:
      videoObj.thumbnail.data != null
        ? getImageData(videoObj.thumbnail)
        : false,
  };

  return retObj;
};

export const activityGalleryData = (galleryObj) => {
  let retObj = {
    galleryTitle: galleryObj.galleryTitle,
    gallerySubTitle: galleryObj.gallerySubTitle,
    galleryImages: getGalleyImageArr(galleryObj.galleryImages.data), // get an arry of object
  };

  return retObj;
};

export const activityListData = (
  listArr,
  esTitle,
  esSub,
  otherTitle,
  otherSub
) => {
  let retObj = {
    escapeGames: {
      title: esTitle,
      subtitle:
        esSub != null
          ? esSub
          : "2 - 10 participants will enter an escape room and they will have 60 minute to escape. Hidden riddles and clues throughout the room provide the necessary tools to meet this objective. Can you stay calm as the clock ticks down and the pressure mounts? Can you ESCAPE before time runs out?",
      activityList: getGameList(listArr, "Escape Games"),
    },
    otherGames: {
      hasOherGames: false,
      title: otherTitle,
      subtitle:
        otherSub != null
          ? otherSub
          : "We offer additional fun activities that can double up your adventure experience. Simply come with the desire to play more!",
      activityList: getGameList(listArr, "Others"),
    },
  };
  return retObj;
};
export const otherGameListData = (
  listArr,
  esTitle,
  esSub,
  otherTitle,
  otherSub
) => {
  let retObj = {
    hasOherGames: false,
    title: otherTitle,
    subtitle:
      otherSub != null
        ? otherSub
        : "We offer additional fun activities that can double up your adventure experience. Simply come with the desire to play more!",
  };
  return retObj;
};
