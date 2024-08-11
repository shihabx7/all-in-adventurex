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
  return retObj;
};
// location event escape  list
const eventList = (listArr) => {
  let retArr = [];
  for (let i = 0; i < listArr.length; i++) {
    let obj = {
      id: i + 1,
      isActiveGameBooking: listArr[i].gameBooking,
      isActive: listArr[i].isActive,
      eventName: listArr[i].event.data.attributes.eventName,
      eventSlug: listArr[i].event.data.attributes.eventSlug,

      description: listArr[i].event.data.attributes.eventSlider.sliderText,
      eventListImage: getImageData(
        listArr[i].event.data.attributes.eventSlider.eventListImage
      ),
    };
    retArr.push(obj);
  }
  return retArr;
};

// location event  list

export const getLocationEventData = (listArr, eventSlug) => {
  let retObj;
  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].event.data.attributes.eventSlug == eventSlug) {
      retObj = {
        id: listArr[i].id,
        eventName: listArr[i].event.data.attributes.activityName,
        eventSlug: listArr[i].event.data.attributes.activitySlug,
        isActive: listArr[i].isActive,
        activeGameBooking: listArr[i].gameBooking,
        guestCapacity: listArr[i].guestCapacity,
        pageTitle: listArr[i].pageTitle != null ? listArr[i].pageTitle : false,
        pageSubTitle:
          listArr[i].pageSubTitle != null ? listArr[i].pageSubTitle : false,

        seo: listArr[i].seo,
      };
    }
  }
  return retObj;
};
//  Page single event page seo

export const getPageMeta = (
  seoData,
  locEventData,
  locationName,
  locationSlug
) => {
  let meataData = {
    title:
      locEventData.seo.metaTitle != null
        ? locEventData.seo.metaTitle
        : "Escape Room " +
          locEventData.eventName +
          " in" +
          locationName +
          " - All In Adventures",
    description:
      locEventData.seo.metaDescription != null
        ? locEventData.seo.metaDescription
        : seoData.metaDescription,
    keywords: locEventData.seo.keywords,
    url: "/" + locationSlug + "/events/" + locEventData.eventSlug,
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      locEventData.seo.structuredData != null
        ? locEventData.seo.structuredData
        : false,
    canonicalURL: "/" + locationSlug + "/events",
    metaindex: true,
    metaimg: mediaURL + seoData.metaImage.data.attributes.url,

    twitterMeta: {
      title:
        locEventData.seo.socialNetworkTitle != null
          ? locEventData.seo.socialNetworkTitle
          : locEventData.event +
            "Escape Room in" +
            locationName +
            " - All In Adventures",
      description:
        locEventData.seo.socialNetworkDescription != null
          ? locEventData.seo.socialNetworkDescription
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
// location events page seo
export const getEventListPageMeta = (
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
        : "All Events and Parties in " +
          locationName +
          " - All In Adventures at " +
          locationInfo.mall,
    description:
      locationListSeo.metaDescription != null
        ? locationListSeo.metaDescription
        : "Escape room party in " +
          locationName +
          ", formerly Mystery Room, run live escape rooms and other games in" +
          locationName +
          ". Choose from many escape rooms at " +
          locationInfo.mall +
          " location.",
    keywords:
      locationListSeo.keywords != null
        ? locationListSeo.keywords
        : "escape rooms party and events in " +
          locationName +
          ",escape rooms in " +
          locationName,
    url: "/" + locationSlug + "/events",
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
          : "Escape Room party and events in " +
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
// location's event page hero data
export const getPageData = (
  pageHeroData,
  locEventData,
  locationInfo,
  locationName,
  locationSlug,
  totalActivities
) => {
  let pageData = {
    pageTitle: locEventData.pageTitle,
    pageSubtitle: locEventData.pageSubTitle,

    pageHeroDesktop: getImageData(pageHeroData.pageHeroDesktop),
    pageHeroMobile: getImageData(pageHeroData.pageHeroMobile),

    locationName: locationName,
    locationSlug: locationSlug,

    ageRange: locationInfo.ageRange,
    guestCapacity: locationInfo.guestCapacity,
    catering: locationInfo.catering,
    guestServed: locationInfo.guestServed,

    themedGames: totalActivities,
  };
  return pageData;
};
// location events page hero data
export const getEventListPageData = (
  pageHeroData,
  eventListPage,
  locationInfo,
  locationName,
  locationSlug,
  totalActivities
) => {
  let pageData = {
    pageTitle:
      eventListPage.pageTitle != null
        ? eventListPage.pageTitle
        : "PARTIES, EVENTS AND SPECIAL OCCASIONS IN " + locationName,
    pageSubtitle:
      eventListPage.pageSubTitle != null
        ? eventListPage.pageSubTitle
        : pageHeroData.pageSubTitle,

    pageHeroDesktop: getImageData(pageHeroData.pageHeroDesktop),
    pageHeroMobile: getImageData(pageHeroData.pageHeroMobile),

    locationName: locationName,
    locationSlug: locationSlug,
    themedGames: totalActivities,
    ageRange: locationInfo.ageRange,
    guestCapacity: locationInfo.guestCapacity,
    guestServed: locationInfo.guestServed,
    catering: locationInfo.catering,
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
export const getEventBooking = (bookingInfo) => {
  return {
    shortName: bookingInfo.shortName,
    flow: bookingInfo.partyPackageFlow,
    itemNo: bookingInfo.partyPackageItemNo,
    isActive: bookingInfo.activePartyPackage,
  };
};
export const getPartyBooking = (bookingInfo, escapeGameParty) => {
  let retArr = [];

  if (escapeGameParty.length > 0) {
    for (let i = 0; i < escapeGameParty.length; i++) {
      let retObj = {
        id: i + 1,
        partyName: escapeGameParty[i].partyName,
        teamSize:
          escapeGameParty[i].teamSize != null
            ? escapeGameParty[i].teamSize
            : "10",
        teamSizeLabel:
          escapeGameParty[i].teamSizeLabel != null
            ? escapeGameParty[i].teamSizeLabel
            : "Team Size",
        isActive:
          escapeGameParty[i].isActive != null
            ? escapeGameParty[i].isActive
            : false,
        isActiveList:
          escapeGameParty[i].isActiveList != null
            ? escapeGameParty[i].isActiveList
            : false,
        duration:
          escapeGameParty[i].duration != null
            ? escapeGameParty[i].duration
            : "60",
        sliderText:
          escapeGameParty[i].sliderText != null
            ? escapeGameParty[i].sliderText
            : "--",
        ageRange:
          escapeGameParty[i].ageRange != null
            ? escapeGameParty[i].ageRange
            : "6-99",
        priority:
          escapeGameParty[i].priority != null
            ? escapeGameParty[i].priority
            : false,
        sliderText:
          escapeGameParty[i].sliderText != null
            ? escapeGameParty[i].sliderText
            : false,
        partyCardText:
          escapeGameParty[i].partyCardText != null
            ? escapeGameParty[i].partyCardText
            : false,

        bookingData: {
          shortName: bookingInfo.shortName,
          flow:
            escapeGameParty[i].bookingFlow != null
              ? escapeGameParty[i].bookingFlow
              : "no",
          itemNo:
            escapeGameParty[i].bookingItemNo != null
              ? escapeGameParty[i].bookingItemNo
              : bookingInfo.partyPackageItemNo,
        },
        bookingBtnText:
          escapeGameParty[i].bookingButtonText != null
            ? escapeGameParty[i].bookingButtonText
            : "BOOK NOW",
        // sliderImage: getImageData(escapeGameParty[i].sliderImage),
        //activityListImage: getImageData(escapeGameParty[i].activityListImage),
        partyCardImage: getImageData(escapeGameParty[i].partyCardImage),
        // priceList: escapeGameParty[i].price,
      };
      retArr.push(retObj);
    }
  }
  return retArr;
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
export const getEventDetailData = (
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

export const getEventTestimonialData = (testiObj) => {
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

export const getEventListData = (listArr, pageResData) => {
  let obj = {
    title: pageResData.eventListTitle,
    subTitle: pageResData.eventListSubTitle,
    eventList: eventList(listArr),
  };
  return obj;
};
