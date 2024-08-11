const mediaURL = process.env.APP_API_MEDIA_URL;
const mapApiKey = process.env.MAP_API_KEY;
const mapApiUrl = process.env.MAP_API_URL;
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

const giftGalleryList = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let retObj = {
        id: i + 1,
        hasImage: true,
        url: mediaURL + listArr[i].attributes.url,
        alt: (listArr[i].attributes.alternativeText = !null
          ? listArr[i].attributes.alternativeText
          : getImgAlt(listArr[i].attributes.name)),
        width: listArr[i].attributes.width,
        height: listArr[i].attributes.height,
      };
      retArr.push(retObj);
    }
  }
  return retArr;
};
//  Page meta

export const getPageMeta = (seoData, ftImg, LocationName, locationSlug) => {
  let meataData = {
    title:
      seoData.metaTitle != null
        ? seoData.metaTitle
        : "Store Contact - All In Adventures (Formerly Mystery Room)" +
          LocationName,
    description:
      seoData.metaDescription != null
        ? seoData.metaDescription
        : "Store Contact - All In Adventures (Formerly Mystery Room)" +
          LocationName,
    keywords:
      seoData.keywords != null
        ? seoData.keywords
        : " Escape room contact, Escape game contact,Allinadventure Escape room contact,Allinadventure Escape game contact, Mystery Escape gamecontact",
    url: "/" + locationSlug + "/contact-store",
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL:
      seoData.canonicalURL != null
        ? seoData.canonicalURL
        : "/locations/" + locationSlug,
    metaindex: true,
    metaimg: mediaURL + ftImg,

    twitterMeta: {
      title: seoData.socialNetworkTitle,
      description: seoData.socialNetworkDescription,
      hashTags: false,
      imageUrl: mediaURL + ftImg,
    },
  };

  return meataData;
};
export const getCorPageMeta = (seoData, ftImg) => {
  let meataData = {
    title:
      seoData.metaTitle != null
        ? seoData.metaTitle
        : "Store Contact - All In Adventures (Formerly Mystery Room)",

    description:
      seoData.metaDescription != null
        ? seoData.metaDescription
        : "Store Contact - All In Adventures (Formerly Mystery Room)",

    keywords:
      seoData.keywords != null
        ? seoData.keywords
        : " Escape room contact, Escape game contact,Allinadventure Escape room contact,Allinadventure Escape game contact, Mystery Escape gamecontact",
    url: "/corporate-contact",
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL: seoData.canonicalURL != null ? seoData.canonicalURL : "/",
    metaindex: true,
    metaimg:
      seoData.metaImage != null
        ? mediaURL + seoData.metaImage.data.attributes
        : mediaURL + ftImg,

    twitterMeta: getSocialMeta(seoData.metaSocial),
  };

  return meataData;
};
export const getRootGiftPageMeta = (seoData) => {
  let meataData = {
    title:
      seoData.metaTitle != null
        ? seoData.metaTitle
        : "Escape Room Gift Cards - All In Adventures" + LocationName,
    description:
      seoData.metaDescription != null
        ? seoData.metaDescription
        : "Store Contact - All In Adventures (Formerly Mystery Room)" +
          LocationName,
    keywords:
      seoData.keywords != null
        ? seoData.keywords
        : "Whether it's someone's birthday, anniversary or a holiday such as Christmas - an All In Adventures Gift Card is a perfect present for any occasion.",
    url: "/gift-cards",
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL: seoData.canonicalURL != null ? seoData.canonicalURL : "/",
    metaindex: true,
    metaimg:
      seoData.metaImage != null
        ? mediaURL + seoData.metaImage.data.attributes
        : mediaURL + ftImg,

    twitterMeta: getSocialMeta(seoData.metaSocial),
  };

  return meataData;
};
//  Page HeroData

export const getPageData = (pageHeroData, locationInfo) => {
  let pageData = {
    pageTitle: pageHeroData.pageTitle,
    pageSubtitle: pageHeroData.pageSubTitle,
    pageHeroDesktop: getImageData(pageHeroData.pageHeroDesktop),
    pageHeroMobile: getImageData(pageHeroData.pageHeroMobile),
    mall: locationInfo.mall,
  };
  return pageData;
};
export const getCorPageData = (pageHeroData) => {
  let pageData = {
    pageTitle: pageHeroData.pageTitle,
    pageSubtitle: pageHeroData.pageSubTitle,
    pageHeroDesktop: getImageData(pageHeroData.pageHeroDesktop),
    pageHeroMobile: getImageData(pageHeroData.pageHeroMobile),
  };
  return pageData;
};

// booking info

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
// location gift page data formation
export const getGiftGallery = (obj) => {
  let retObj = {
    sectionTitle: obj.sectionTitle,
    sectionSubTitle: obj.sectionSubTitle,
    galleryImageList: giftGalleryList(obj.galleryImages.data),
  };
  return retObj;
};

export const getGiftReedem = (listArr) => {
  let retArr = [];
  for (let i = 0; i < listArr.length; i++) {
    let obj = {
      id: i + 1,
      activityName: listArr[i].activity.data.attributes.activityName,
      sliderText: listArr[i].activity.data.attributes.activitySlider.sliderText,
      sliderImage: getImageData(
        listArr[i].activity.data.attributes.activitySlider.sliderBgImage
      ),
    };
    retArr.push(obj);
  }
  return retArr;
};
export const getGiftRootReedem = (listArr) => {
  let retArr = [];
  for (let i = 0; i < listArr.length; i++) {
    let obj = {
      id: i + 1,
      activityName: listArr[i].attributes.activityName,
      sliderText: listArr[i].attributes.activitySlider.sliderText,
      sliderImage: getImageData(
        listArr[i].attributes.activitySlider.sliderBgImage
      ),
    };
    retArr.push(obj);
  }
  return retArr;
};

// corporate contact page
export const getCorContactData = (data) => {
  let obj = {
    formSectionTitle:
      data.formSectionTitle != null
        ? data.formSectionTitle
        : "SUBMIT CORPORATE INQUIRIES ONLY",
    formSectionSubTitle:
      data.formSectionSubTitle != null
        ? data.formSectionSubTitle
        : "Fill out the form below and our corporate team will be in touch shortly.",
    franchiseEmail:
      data.franchiseEmail != null
        ? data.franchiseEmail
        : "franchise@allinadventures.com",
    phone: data.phone != null ? data.phone : "+1 844-502-5546",
    salesEmail:
      data.salesEmail != null ? data.salesEmail : "sales@allinadventures.com",
    supportEmail:
      data.supportEmail != null
        ? data.supportEmail
        : "support@allinadventures.com",
    operationEmail:
      data.operationEmail != null
        ? data.operationEmail
        : "ops@allinadventures.com",
    careersEmail:
      data.careersEmail != null
        ? data.careersEmail
        : "careers@allinadventures.com",
    billingEmail:
      data.billingEmail != null
        ? data.billingEmail
        : "billing@allinadventures.com",
  };
  return obj;
};
