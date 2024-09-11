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
// private function
const getGameList = (listArr, bookingInfo, cat) => {
  let retArr = [];

  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].activity.data.attributes.activityInfo.category == cat) {
      let obj = {
        id: i + 1,
        isActive: listArr[i].isActive != null ? listArr[i].isActive : true,
        bookingInfo: {
          shortName: bookingInfo.shortName,
          flow: bookingInfo.flow,
          itemNo:
            listArr[i].bookingItemNo != null ? listArr[i].bookingItemNo : false,
        },

        activityName: listArr[i].activity.data.attributes.activityName,
        activitySlug: listArr[i].activity.data.attributes.activitySlug,
        activityCategory:
          listArr[i].activity.data.attributes.activityInfo.category,
        teamSize:
          listArr[i].teamSize != null
            ? listArr[i].teamSize
            : listArr[i].activity.data.attributes.activityInfo.teamSize,
        teamSizeLabel:
          listArr[i].teamSizeLabel != null
            ? listArr[i].teamSizeLabel
            : listArr[i].activity.data.attributes.activityInfo.teamSizeLabel,
        ageRange: listArr[i].activity.data.attributes.activityInfo.age,
        successRate:
          listArr[i].activity.data.attributes.activityInfo.successRate != null
            ? listArr[i].activity.data.attributes.activityInfo.successRate
            : false,
        duration: listArr[i].activity.data.attributes.activityInfo.duration,
        price: listArr[i].activity.data.attributes.activityInfo.price,
        description:
          listArr[i].activity.data.attributes.activitySlider.sliderText,
        carouselImage: getImageData(
          listArr[i].activity.data.attributes.activitySlider.sliderBgImage
        ),
      };
      retArr.push(obj);
    }
  }

  return retArr;
};
const otherGameList = (listArr, bookingInfo, cat, escapeGamePartyArr) => {
  let retArr = [];
  let exLength = escapeGamePartyArr.length;

  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].activity.data.attributes.activityInfo.category == cat) {
      let obj = {
        id: i + 1,
        isActive: listArr[i].isActive != null ? listArr[i].isActive : true,
        bookingInfo: {
          shortName: bookingInfo.shortName,
          flow: bookingInfo.flow,
          itemNo:
            listArr[i].bookingItemNo != null ? listArr[i].bookingItemNo : false,
        },

        activityName: listArr[i].activity.data.attributes.activityName,
        activitySlug: listArr[i].activity.data.attributes.activitySlug,
        activityCategory:
          listArr[i].activity.data.attributes.activityInfo.category,
        teamSize:
          listArr[i].teamSize != null
            ? listArr[i].teamSize
            : listArr[i].activity.data.attributes.activityInfo.teamSize,
        teamSizeLabel:
          listArr[i].teamSizeLabel != null
            ? listArr[i].teamSizeLabel
            : listArr[i].activity.data.attributes.activityInfo.teamSizeLabel,
        ageRange: listArr[i].activity.data.attributes.activityInfo.age,
        duration: listArr[i].activity.data.attributes.activityInfo.duration,
        successRate:
          listArr[i].activity.data.attributes.activityInfo.successRate != null
            ? listArr[i].activity.data.attributes.activityInfo.successRate
            : false,

        price: listArr[i].activity.data.attributes.activityInfo.price,
        description:
          listArr[i].activity.data.attributes.activitySlider.sliderText,
        carouselImage: getImageData(
          listArr[i].activity.data.attributes.activitySlider.sliderBgImage
        ),
      };

      retArr.push(obj);
    }
  }

  if (exLength > 0) {
    for (let j = 0; j < exLength; j++) {
      if (
        escapeGamePartyArr[j].isActiveList != null &&
        escapeGamePartyArr[j].isActiveList == true
      ) {
        let exIndex =
          escapeGamePartyArr[j].priority != null
            ? escapeGamePartyArr[j].priority
            : "2";
        let exObj = {
          id: j + 1,
          isActive:
            escapeGamePartyArr[j] != null
              ? escapeGamePartyArr[j].isActive
              : true,
          bookingInfo: {
            shortName: bookingInfo.shortName,
            flow: escapeGamePartyArr[j].bookingFlow,
            itemNo: escapeGamePartyArr[j].bookingItemNo,
          },

          activityName: escapeGamePartyArr[j].partyName,
          activitySlug:
            escapeGamePartyArr[j].linkedActivity.data != null
              ? escapeGamePartyArr[j].linkedActivity.data.attributes
                  .activitySlug
              : "",
          activityCategory: "Party",
          teamSize:
            escapeGamePartyArr[j].teamSize != null
              ? escapeGamePartyArr[j].teamSize
              : false,
          teamSizeLabel:
            escapeGamePartyArr[j].teamSizeLabel != null
              ? escapeGamePartyArr[j].teamSizeLabel
              : "Team Size",
          ageRange:
            escapeGamePartyArr[j].ageRange != null
              ? escapeGamePartyArr[j].ageRange
              : "6-99",
          successRate:
            escapeGamePartyArr[j].successRate != null
              ? escapeGamePartyArr[j].successRate
              : false,

          price: escapeGamePartyArr[j].price,
          description:
            escapeGamePartyArr[j].sliderText != null
              ? escapeGamePartyArr[j].sliderText
              : "",
          carouselImage: getImageData(escapeGamePartyArr[j].sliderImage),
        };
        retArr.splice(exIndex - 1, 0, exObj);
      }
    }
  }

  return retArr;
};
const testimonialList = (testiArr) => {
  let retArr = [];
  for (let i = 0; i < testiArr.length; i++) {
    let arrObj = {
      id: i + 1,
      title: testiArr[i].title,
      revText: testiArr[i].revText,
      starRating: testiArr[i].starRating,
      revAuthor: testiArr[i].revAuthor,
      revAuthorAddress: testiArr[i].revAuthorAddress,
      revImage: getImageData(testiArr[i].revImage),
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
      isActive: listArr[i].isActive != null ? listArr[i].isActive : true,
      gameBooking:
        listArr[i].gameBooking != null ? listArr[i].gameBooking : false,
      eventName: listArr[i].event.data.attributes.eventName,
      eventSlug: listArr[i].event.data.attributes.eventSlug,
      isPublished: listArr[i].event.data.attributes.isPublished,
      description: listArr[i].event.data.attributes.eventSlider.sliderText,
      eventCarousel: getImageData(
        listArr[i].event.data.attributes.eventSlider.sliderImage
      ),
    };
    retArr.push(obj);
  }
  return retArr;
};

//location card list arr
const formateLocationArr = (arr) => {
  const stateMap = new Map(); // Map to store state information

  // Iterate through the original array
  for (const item of arr) {
    const {
      id,
      stateName,
      stateCode,
      locationName,
      locationSlug,
      isPublished,
      address,
      cityName,
      zip,
      mall,
      storeEmail,
      phone,
      avgReview,
      raveReviews,
      cardImage,
    } = item;

    // If the state is not in the map, add it
    if (!stateMap.has(stateCode)) {
      stateMap.set(stateCode, {
        id: stateMap.size + 1,
        stateName,
        stateCode,
        locationList: [],
      });
    }

    // Add the location to the corresponding state
    stateMap.get(stateCode).locationList.push({
      id,
      locationName,
      locationSlug,
      isPublished,
      address,
      cityName,
      zip,
      mall,
      storeEmail,
      phone,
      avgReview,
      raveReviews,
      cardImage,
    });
  }

  // Convert the map values to an array
  const outArr = Array.from(stateMap.values());

  return outArr;
};

const getLocCardList = (arr) => {
  let locArr = [];

  for (let i = 0; i < arr.length; i++) {
    let st = arr[i].attributes.locationInfo.state.split(",");
    let obj = {
      id: i + 1,
      stateName: st[0].toString().trim(),
      stateCode: st[1].toString().trim(),
      locationName: arr[i].attributes.locationName,
      locationSlug: arr[i].attributes.slug,
      isPublished: arr[i].attributes.isPublished,
      address: arr[i].attributes.locationInfo.address,
      cityName: arr[i].attributes.locationInfo.cityName,
      zip: arr[i].attributes.locationInfo.zip,
      mall: arr[i].attributes.locationInfo.mall,
      storeEmail: arr[i].attributes.locationInfo.storeEmail,
      phone: arr[i].attributes.locationInfo.phone,
      avgReview: arr[i].attributes.locationInfo.avgReview,
      raveReviews: arr[i].attributes.locationInfo.raveReviews,
      cardImage: getImageData(arr[i].attributes.pageHeroData.cardImage),
    };
    locArr.push(obj);
  }
  return formateLocationArr(locArr);
};
// Home Page meta

export const getPageMeta = (seoData, ftImg, pageSubTitle) => {
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
    url: "https://allinadventures.com",
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL: seoData.canonicalURL != null ? seoData.canonicalURL : "/blog",
    metaindex: true,
    metaimg:
      seoData.metaImage.data != null
        ? mediaURL + seoData.metaImage.data.attributes.url
        : mediaURL + ftImg,

    twitterMeta: getSocialMeta(seoData.metaSocial, ftImg),
  };

  return meataData;
};
// Home Page HeroData

export const getPageData = (
  pageHeroData,
  locationInfo,
  themeImage,
  locationActivities
) => {
  let pageData = {
    pageTitle: pageHeroData.pageTitle,
    pageSubtitle: pageHeroData.pageSubTitle,
    pageHeroDesktop: getImageData(pageHeroData.pageHeroDesktop),
    pageHeroMobile: getImageData(pageHeroData.pageHeroMobile),
    themeImage: getImageData(themeImage),
    mall: locationInfo.mall,

    themedGames: locationActivities.length,
    ageRange: locationInfo.ageRange != null ? locationInfo.ageRange : "25K+",
    raveReviews:
      locationInfo.raveReviews != null ? locationInfo.raveReviews : "25K+",
    privateEvents:
      locationInfo.privateEvents != null ? locationInfo.privateEvents : "YES",
    guestsServed:
      locationInfo.guestServed != null ? locationInfo.guestServed : "1M+",
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

export const getEscapeGameList = (listArr, bookingInfo, sectionData) => {
  let actList = getGameList(listArr, bookingInfo, "Escape Games");
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
export const getOtherGameList = (
  listArr,
  bookingInfo,
  sectionData,
  escapeGameParty
) => {
  let actList = otherGameList(listArr, bookingInfo, "Others", escapeGameParty);
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
export const getAllBooking = (bookingInfo) => {
  return { shortName: bookingInfo.shortName, flow: bookingInfo.flow };
};
export const getEventBooking = (bookingInfo) => {
  return {
    shortName: bookingInfo.shortName,
    flow: bookingInfo.partyPackageFlow,
    itemNo: bookingInfo.partyPackageItemNo,
    isActive: bookingInfo.activePartyPackage,
  };
};
export const getGiftBooking = (bookingInfo) => {
  return {
    shortName: bookingInfo.shortName,
    flow: bookingInfo.giftFlow,
    itemNo: bookingInfo.giftCardItemNo,
    isActive: bookingInfo.activeGiftCard,
  };
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
// location list page data formation
export const getLocationListPageMeta = (seoData) => {
  let meataData = {
    title:
      seoData.metaTitle != null
        ? seoData.metaTitle
        : "All Escape Rooms - All In Adventures (Formerly Mystery Room)",
    description:
      seoData.metaDescription != null
        ? seoData.metaDescription
        : "Browse all our escape room locations across the United States. Grab your team and head over to any of our locations to experience interactive fun activities.",
    keywords:
      seoData.keywords != null
        ? seoData.keywords
        : "escape room venue, escape room venues, escape room location, escape room locations, escape room center, escape room centers, all in adventures venue, all in adventures venues, all in adventures location, all in adventures locations, all in adventures center, all in adventures centers, mystery room venue, mystery room venues, mystery room location, mystery room locations, mystery room center, mystery room centers, escape game venue, escape game venues, escape game location, escape game locations, escape game center, escape game centers,",
    url: "https://allinadventures.com/locations",
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL: seoData.canonicalURL != null ? seoData.canonicalURL : "/",
    metaindex: true,
    metaimg: mediaURL + seoData.metaImage.data.attributes.url,

    twitterMeta: getSocialMeta(seoData.metaSocial, "/"),
  };

  return meataData;
};
export const getLocListPageData = (pageResData, totalLocations) => {
  let pageData = {
    pageTitle: pageResData.pageTitle,
    pageSubtitle: pageResData.pageSubTitle,
    totalLocations: totalLocations,
  };
  return pageData;
};
export const getlocationListData = (pageResData, listArr) => {
  let retObj = {
    sectionTitle: pageResData.listSectionTitle,
    sectionSubTitle: pageResData.listSectionSubTitle,
    locationList: getLocCardList(listArr),
  };
  return retObj;
};
