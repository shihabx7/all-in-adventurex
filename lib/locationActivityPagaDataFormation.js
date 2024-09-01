const mediaURL = process.env.APP_API_MEDIA_URL;
const mapApiKey = process.env.MAP_API_KEY;
const mapApiUrl = process.env.MAP_API_URL;
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const getLocName = (ln) => {
  let ret = ln.split(", ").join(" ");
  return ret;
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
const getSocialMeta = (metaArr, ftImg) => {
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
    retObj.height = imgObj.data.attributes.height;
  }
  return retObj;
};
const getPageNotice = (pageNotice) => {
  if (pageNotice != null) {
    return pageNotice;
  }
  return false;
};
const getGameParty = (listArr, activitySlug) => {
  let retObj = {
    hasParty: false,
    bookingItemNo: false,
    bookingFlow: false,
    isActive: false,
  };
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      if (listArr[i].isActiveList != null && listArr[i].isActiveList == true) {
        if (
          listArr[i].linkedActivity.data.attributes.activitySlug == activitySlug
        ) {
          retObj.hasParty = true;
          retObj.bookingItemNo = listArr[i].bookingItemNo;
          retObj.bookingFlow = listArr[i].bookingFlow;
          retObj.isActive = listArr[i].isActive;
        }
      }
    }
  }
  return retObj;
};
// location activity escape games list
const escapeGameList = (listArr, bookingInfo) => {
  let retArr = [];
  for (let i = 0; i < listArr.length; i++) {
    if (
      listArr[i].activity.data.attributes.activityInfo.category ==
      "Escape Games"
    ) {
      let obj = {
        id: i + 1,
        isPublish: listArr[i].activity.data.attributes.isPublish,
        gameBooking: {
          shortName: bookingInfo.shortName,
          flow: bookingInfo.flow,
          itemNo: listArr[i].bookingItemNo,
          isActive: listArr[i].isActive,
        },
        activityName: listArr[i].activity.data.attributes.activityName,
        activitySlug: listArr[i].activity.data.attributes.activitySlug,
        activityCategory:
          listArr[i].activity.data.attributes.activityInfo.category,
        ageRange: listArr[i].activity.data.attributes.activityInfo.age,
        duration: listArr[i].activity.data.attributes.activityInfo.duration,
        teamSize:
          listArr[i].teamSize != null
            ? listArr[i].teamSize
            : listArr[i].activity.data.attributes.activityInfo.teamSize,
        teamSizeLabel:
          listArr[i].teamSizeLabel != null
            ? listArr[i].teamSizeLabel
            : listArr[i].activity.data.attributes.activityInfo.teamSizeLabel,
        successRate:
          listArr[i].activity.data.attributes.activityInfo.successRate != null
            ? listArr[i].activity.data.attributes.activityInfo.successRate
            : false,

        price: listArr[i].activity.data.attributes.activityInfo.price,
        description:
          listArr[i].activity.data.attributes.activitySlider.sliderText,
        listImage: getImageData(
          listArr[i].activity.data.attributes.activitySlider.activityListImage
        ),
      };
      retArr.push(obj);
    }
  }

  return retArr;
};
// location activity Other games+ party list
const otherGameList = (listArr, bookingInfo, escapeGamePartyArr) => {
  let retArr = [];

  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].activity.data.attributes.activityInfo.category == "Others") {
      let obj = {
        id: i + 1,
        isPublish: listArr[i].activity.data.attributes.isPublish,
        gameBooking: {
          shortName: bookingInfo.shortName,
          flow: bookingInfo.flow,
          itemNo: listArr[i].bookingItemNo,
          isActive: listArr[i].isActive,
        },
        activityName: listArr[i].activity.data.attributes.activityName,
        activitySlug: listArr[i].activity.data.attributes.activitySlug,
        activityCategory:
          listArr[i].activity.data.attributes.activityInfo.category,
        ageRange: listArr[i].activity.data.attributes.activityInfo.age,
        duration: listArr[i].activity.data.attributes.activityInfo.duration,
        teamSize:
          listArr[i].teamSize != null
            ? listArr[i].teamSize
            : listArr[i].activity.data.attributes.activityInfo.teamSize,
        teamSizeLabel:
          listArr[i].teamSizeLabel != null
            ? listArr[i].teamSizeLabel
            : listArr[i].activity.data.attributes.activityInfo.teamSizeLabel,
        successRate:
          listArr[i].activity.data.attributes.activityInfo.successRate != null
            ? listArr[i].activity.data.attributes.activityInfo.successRate
            : false,

        price: listArr[i].activity.data.attributes.activityInfo.price,
        description:
          listArr[i].activity.data.attributes.activitySlider.sliderText,
        listImage: getImageData(
          listArr[i].activity.data.attributes.activitySlider.activityListImage
        ),
      };
      retArr.push(obj);
    }
  }

  if (escapeGamePartyArr.length > 0) {
    for (let j = 0; j < escapeGamePartyArr.length; j++) {
      if (
        escapeGamePartyArr[j].isActiveList != null &&
        escapeGamePartyArr[j].isActiveList === true
      ) {
        let exIndex = escapeGamePartyArr[j].priority;
        let exObj = {
          id: j + 1,
          isPublish:
            escapeGamePartyArr[j].linkedActivity.data.attributes.isPublish,
          gameBooking: {
            shortName: bookingInfo.shortName,
            flow:
              escapeGamePartyArr[j].bookingFlow != null
                ? escapeGamePartyArr[j].bookingFlow
                : bookingInfo.flow,
            itemNo: escapeGamePartyArr[j].bookingItemNo,
            isActive: escapeGamePartyArr[j].isActive,
          },
          activityName: escapeGamePartyArr[j].partyName,
          activitySlug:
            escapeGamePartyArr[j].linkedActivity.data != null
              ? escapeGamePartyArr[j].linkedActivity.data.attributes
                  .activitySlug
              : "",
          activityCategory: "Party",
          ageRange:
            listArr[j].ageRange != null
              ? escapeGamePartyArr[j].ageRange
              : escapeGamePartyArr[j].linkedActivity.data.attributes
                  .activityInfo.age,
          duration:
            escapeGamePartyArr[j].duration != null
              ? escapeGamePartyArr[j].duration
              : escapeGamePartyArr[j].linkedActivity.data.attributes
                  .activityInfo.duration,
          teamSize:
            listArr[j].teamSize != null
              ? escapeGamePartyArr[j].teamSize
              : escapeGamePartyArr[j].linkedActivity.data.attributes
                  .activityInfo.teamSize,
          teamSizeLabel:
            escapeGamePartyArr[j].teamSizeLabel != null
              ? escapeGamePartyArr[j].teamSizeLabel
              : escapeGamePartyArr[j].linkedActivity.data.attributes
                  .activityInfo.teamSizeLabel,
          successRate:
            escapeGamePartyArr[j].linkedActivity.data.attributes.activityInfo
              .successRate != null
              ? escapeGamePartyArr[j].linkedActivity.data.attributes
                  .activityInfo.successRate
              : false,

          price: escapeGamePartyArr[j].price,
          description:
            escapeGamePartyArr[j].sliderText != null
              ? escapeGamePartyArr[j].sliderText
              : "",
          listImage: getImageData(escapeGamePartyArr[j].activityListImage),
        };
        retArr.splice(exIndex - 1, 0, exObj);
      }
    }
  }

  return retArr;
};
export const getLocationActivityData = (
  listArr,
  activitySlug,
  escapeGamePartyArr
) => {
  let retObj;
  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].activity.data.attributes.activitySlug == activitySlug) {
      retObj = {
        id: listArr[i].id,
        activityName: listArr[i].activity.data.attributes.activityName,
        activitySlug: listArr[i].activity.data.attributes.activitySlug,
        isActive: listArr[i].isActive,
        bookingItemNo: listArr[i].bookingItemNo,
        teamSize: listArr[i].teamSize != null ? listArr[i].teamSize : false,
        teamSizeLabel:
          listArr[i].teamSizeLabel != null ? listArr[i].teamSizeLabel : false,
        pageTitle: listArr[i].pageTitle != null ? listArr[i].pageTitle : false,
        pageSubTitle:
          listArr[i].pageSubTitle != null ? listArr[i].pageSubTitle : false,
        pageNotice:
          listArr[i].pageNotice != null ? listArr[i].pageNotice : false,
        activityInfo: listArr[i].activity.data.attributes.activityInfo,
        seo: listArr[i].seo,
        noticeImage:
          listArr[i].noticeImage.data != null
            ? getImageData(listArr[i].noticeImage)
            : false,
        escapeGameParty: getGameParty(escapeGamePartyArr, activitySlug),
        locActivityDetails: {
          storyLineLabel:
            listArr[i].storyLineLabel != null
              ? listArr[i].storyLineLabel
              : false,
          storyLineText:
            listArr[i].storyLineText != null ? listArr[i].storyLineText : false,
          plotLabel:
            listArr[i].plotLabel != null ? listArr[i].plotLabel : false,
          plotText: listArr[i].plotText != null ? listArr[i].plotText : false,
          missionLabel:
            listArr[i].missionLabel != null ? listArr[i].missionLabel : false,
          missionText:
            listArr[i].missionText != null ? listArr[i].missionText : false,
        },
      };
    }
  }
  return retObj;
};
//  Page single activity page seo

export const getPageMeta = (
  seoData,
  locActivityData,
  locationName,
  locationSlug
) => {
  let meataData = {
    title:
      locActivityData.seo.metaTitle != null
        ? locActivityData.seo.metaTitle
        : locActivityData.activityName +
          "Escape Room in" +
          locationName +
          " - All In Adventures",
    description:
      locActivityData.seo.metaDescription != null
        ? locActivityData.seo.metaDescription
        : seoData.metaDescription,
    keywords: locActivityData.seo.keywords,
    url: "/" + locationSlug + "/activities/" + locActivityData.activitySlug,
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL: "/" + locationSlug + "/activities",
    metaindex: true,
    metaimg: mediaURL + seoData.metaImage.data.attributes.url,

    twitterMeta: {
      title:
        locActivityData.seo.metaTitle != null
          ? locActivityData.seo.metaTitle
          : locActivityData.activityName +
            "Escape Room in" +
            locationName +
            " - All In Adventures",
      description:
        locActivityData.seo.metaDescription != null
          ? locActivityData.seo.metaDescription
          : seoData.metaDescription,
      hashTags:
        seoData.metaSocial.hashTags != null
          ? seoData.metaSocial.hashTags
          : false,
      imageUrl: mediaURL + seoData.metaImage.data.attributes.url,
    },
  };

  return meataData;
};
// location activities page seo
export const getActivityListPageMeta = (
  seoData,
  locationListSeo,
  locationName,
  locationInfo,
  locationSlug
) => {
  let meataData = {
    title:
      locationListSeo.metaTitle != null
        ? locationListSeo.metaTitle
        : "All Escape Rooms in" +
          locationName +
          " - All In Adventures at " +
          locationInfo.mall,
    description:
      locationListSeo.metaDescription != null
        ? locationListSeo.metaDescription
        : "All In Adventures, formerly Mystery Room, run live escape rooms and other games in" +
          locationName +
          ". Choose from many escape rooms at " +
          locationInfo.mall +
          " location.",
    keywords:
      locationListSeo.keywords != null
        ? locationListSeo.keywords
        : "escape rooms and other games in " +
          locationName +
          ",escape rooms in " +
          locationName,
    url: "/" + locationSlug + "/activities",
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL: "/" + locationSlug,
    metaindex: true,
    metaimg: mediaURL + seoData.metaImage.data.attributes.url,

    twitterMeta: {
      title:
        locationListSeo.socialNetworkTitle != null
          ? locationListSeo.socialNetworkTitle
          : "Escape Room in" +
            locationName +
            " - All In Adventures" +
            locationInfo.mall,
      description:
        locationListSeo.socialNetworkDescription != null
          ? locationListSeo.socialNetworkDescription
          : "All In Adventures, formerly Mystery Room, run live escape rooms and other games in" +
            locationName +
            ". Choose from many escape rooms at " +
            locationInfo.mall +
            " location.",
      hashTags:
        seoData.metaSocial.hashTags != null
          ? seoData.metaSocial.hashTags
          : false,
      imageUrl: mediaURL + seoData.metaImage.data.attributes.url,
    },
  };

  return meataData;
};
//  Page HeroData
// location's activity page hero data
export const getPageData = (
  pageHeroData,
  activityInfo,
  locActivityData,
  locationName,
  locationSlug
) => {
  let pageData = {
    pageTitle: locActivityData.pageTitle,
    pageSubtitle: locActivityData.pageSubTitle,
    pageNotice: locActivityData.pageNotice
      ? locActivityData.pageNotice
      : getPageNotice(pageHeroData.pageNotice),
    noticeImage: locActivityData.noticeImage
      ? locActivityData.noticeImage
      : false,
    themeImage:
      activityInfo.activityThemeImage.data != null
        ? getImageData(activityInfo.activityThemeImage)
        : false,
    pageHeroDesktop: getImageData(pageHeroData.pageHeroDesktop),
    pageHeroMobile: getImageData(pageHeroData.pageHeroMobile),

    locationName: locationName,
    locationSlug: locationSlug,
    duration: locActivityData.activityInfo.duration,
    age: locActivityData.activityInfo.age,
    successRate:
      locActivityData.activityInfo.successRate != null
        ? locActivityData.activityInfo.successRate
        : false,
    teamSizeLabel: locActivityData.teamSizeLabel
      ? locActivityData.teamSizeLabel
      : locActivityData.activityInfo.teamSizeLabel,
    privateEvents: locActivityData.activityInfo.privateEvents,
    teamSize: locActivityData.teamSize
      ? locActivityData.teamSize
      : locActivityData.activityInfo.teamSize,
  };
  return pageData;
};
// location activities page hero data
export const getActivityListPageData = (
  pageHeroData,
  activityListPage,
  locationInfo,
  locationName,
  locationSlug,
  totalActivities
) => {
  let pageData = {
    pageTitle:
      activityListPage.pageTitle != null
        ? activityListPage.pageTitle
        : "ALL ESCAPE ROOMS AND ADVENTURE ACTIVITIES IN " + locationName,
    pageSubtitle:
      activityListPage.pageSubtitle != null
        ? activityListPage.pageSubtitle
        : pageHeroData.pageSubtitle,

    pageHeroDesktop: getImageData(pageHeroData.pageHeroDesktop),
    pageHeroMobile: getImageData(pageHeroData.pageHeroMobile),

    locationName: locationName,
    locationSlug: locationSlug,
    themedGames: totalActivities,
    ageRange: locationInfo.ageRange,

    privateEvents: locationInfo.privateEvents,
    guestServed: locationInfo.guestServed,
    raveReviews: locationInfo.raveReviews,
  };
  return pageData;
};

// booking info

export const getAllBooking = (bookingInfo) => {
  return { shortName: bookingInfo.shortName, flow: bookingInfo.flow };
};
export const getGameBooking = (bookingInfo, itemNo, isActive) => {
  return {
    shortName: bookingInfo.shortName,
    flow: bookingInfo.flow,
    itemNo: itemNo,
    isActive: isActive,
  };
};

export const getPartyBooking = (bookingInfo, escapeGameParty) => {
  let obj = {
    hasParty: escapeGameParty.hasParty,
    shortName: bookingInfo.shortName,
    flow: escapeGameParty.bookingFlow,
    itemNo: escapeGameParty.bookingItemNo,
    isActive: escapeGameParty.isActive,
  };
  return obj;
};
export const getBusinessHours = (businessHours) => {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const result = [];

  for (const day of days) {
    if (businessHours[day]) {
      let retObj = {
        id: businessHours[day].id,
        day: capitalizeFirstLetter(day),
        isClosed: businessHours[day].closed,
        openHour: businessHours[day].openHour,
        closeHour: businessHours[day].closeHour,
      };
      result.push(retObj);
    }
  }
  return result;
};
export const getMapInfo = (mapInfo) => {
  let mapObj = {
    googlePlaceId: mapInfo.googlePlaceId,
    latitude: mapInfo.latitude,
    longitude: mapInfo.longitude,
    apiKey: mapApiKey,
    apiUrl: mapApiUrl,
  };
  return mapObj;
};

// activity Page activity Detail Data
export const activityDetailData = (
  storyLine,
  plot,
  mission,
  activityName,
  locActivitydata
) => {
  let retObj = {
    activityName: activityName,
    storyLineText: locActivitydata.storyLineText
      ? locActivitydata.storyLineText
      : storyLine.storyLineText,
    storyLineLabel: locActivitydata.storyLineLabel
      ? locActivitydata.storyLineLabel
      : storyLine.storyLineLabel,
    storyLineImage:
      storyLine.storyLineImage.data != null
        ? getImageData(storyLine.storyLineImage)
        : false,
    storyLineBgImage:
      storyLine.storyLineBgImage.data != null
        ? getImageData(storyLine.storyLineBgImage)
        : false,

    plotText: locActivitydata.plotText
      ? locActivitydata.plotText
      : plot.plotText,
    plotLabel: locActivitydata.plotLabel
      ? locActivitydata.plotLabel
      : plot.plotLabel,

    plotImage:
      plot.plotImage.data != null ? getImageData(plot.plotImage) : false,
    plotBgImage:
      plot.plotBgImage.data != null ? getImageData(plot.plotBgImage) : false,
    missionText: locActivitydata.missionText
      ? locActivitydata.missionText
      : mission.missionText,
    missionLabel: locActivitydata.missionLabel
      ? locActivitydata.missionLabel
      : mission.missionLabel,

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

export const getActivityListData = (
  pageResData,
  listArr,
  bookingInfo,
  extraPartyArr
) => {
  let retObj = {
    escapeGames: {
      title:
        pageResData.escapeGameListTitle != null
          ? pageResData.escapeGameListTitle
          : "REAL LIFE ESCAPE ROOM GAMES",
      subtitle:
        pageResData.escapeGameListSubtitle != null
          ? pageResData.escapeGameListSubtitle
          : "Team up with your friends, family, kids (age 6+) or co-workers for an adrenaline filled 60 minute real life interactive and engaging escape game experience!",
      activityList: escapeGameList(listArr, bookingInfo),
    },
    otherGames: {
      title:
        pageResData.otherGameListTitle != null
          ? pageResData.otherGameListTitle
          : "OTHER GAMES",
      subtitle:
        pageResData.otherGameListSubtitle != null
          ? pageResData.otherGameListSubtitle
          : "We offer additional fun activities that can double up your adventure experience. Simply come with the desire to play more!",
      activityList: otherGameList(listArr, bookingInfo, extraPartyArr),
    },
  };
  return retObj;
};
