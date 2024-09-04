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

const getGiftSocialMeta = (metaArr) => {
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
        : "/assets/gift-images/hero/All-In-Adventures-Gift-Card-hero.png";
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

export const getRootGiftPageMeta = (seoData, urlSlug) => {
  let meataData = {
    title:
      seoData.metaTitle != null
        ? seoData.metaTitle
        : "Escape Room Gift Cards - All In Adventures",
    description:
      seoData.metaDescription != null
        ? seoData.metaDescription
        : "Whether it's someone's birthday, anniversary or a holiday such as Christmas - an All In Adventures Gift Card is a perfect present for any occasion.",
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
    canonicalURL:
      seoData.canonicalURL != null ? seoData.canonicalURL : "/gift-cards",

    metaimg:
      seoData.metaImage.data != null
        ? mediaURL + seoData.metaImage.data.attributes.url
        : mediaURL + ftImg,

    twitterMeta: getGiftSocialMeta(seoData.metaSocial),
  };

  return meataData;
};

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
    canonicalURL: seoData.canonicalURL != null ? seoData.canonicalURL : "/",

    metaimg:
      seoData.metaImage.data != null
        ? mediaURL + seoData.metaImage.data.attributes.url
        : mediaURL + ftImg,

    twitterMeta: getSocialMeta(seoData.metaSocial, ftImg),
  };

  return meataData;
};

export const getThankYouPageMeta = (seoData, urlSlug) => {
  let meataData = {
    title:
      seoData.metaTitle != null
        ? seoData.metaTitle
        : "Thank You - All In Adventures",
    description:
      seoData.metaDescription != null
        ? seoData.metaDescription
        : "Thank You. Your submission has been received. We will get in touch with you shortly.",
    keywords:
      seoData.keywords != null
        ? seoData.keywords
        : " Escape room thank you , Escape game thank you ,Allinadventure Escape room,Allinadventure Escape game, Mystery Escape game",
    url: urlSlug
      ? "https://allinadventures.com/" + urlSlug
      : "https://allinadventures.com",
    metaRobot: seoData.metaRobots != null ? seoData.metaRobots : "all",
    structuredData:
      seoData.structuredData != null ? seoData.structuredData : false,
    canonicalURL:
      seoData.canonicalURL != null ? seoData.canonicalURL : "/thank-you",

    metaimg:
      seoData.metaImage.data != null
        ? mediaURL + seoData.metaImage.data.attributes.url
        : mediaURL + ftImg,

    twitterMeta: getGiftSocialMeta(seoData.metaSocial),
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
export const getThankYouPageData = (pageResData, totalLocations) => {
  let pageData = {
    pageTitle: pageResData.pageTitle,
    pageSubTitle:
      pageResData.pageSubTitle != null ? pageResData.pageSubTitle : "",
    escapeRoomCardImage: getImageData(pageResData.escapeRoomCardImage),
    eventCardImage: getImageData(pageResData.eventCardImage),
    phone: pageResData.phone ? pageResData.phone : "+1 844-502-5546",
    email: pageResData.email
      ? pageResData.email
      : "custsvc@allinadventures.com",
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
const galleryImageFromate = (list) => {
  let glArr = [];
  for (let i = 0; i < list.length; i++) {
    let glObj = {
      id: i + 1,
      name: list[i].attributes.name,
      url: mediaURL + list[i].attributes.url,
      alt:
        list[i].attributes.alternativeText != null
          ? list[i].attributes.alternativeText
          : getImgAlt(list[i].attributes.name),
      width: list[i].attributes.width,
      height: list[i].attributes.height,
    };
    glArr.push(glObj);
  }
  return glArr;
};

export const getGalleryGroup = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let obj = {
        id: i + 1,
        groupTitle: listArr[i].groupTitle,
        groupSubTitle: listArr[i].groupSubTitle,
        linkUrl: listArr[i].linkUrl,
        linkLabelText: listArr[i].linkLabelText,
        galleryImages: galleryImageFromate(listArr[i].galleryImages.data),
      };
      retArr.push(obj);
    }
  }

  return retArr;
};

//testimonials page

const getTestimonialsList = (list) => {
  let retArr = [];
  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      let obj = {
        id: i + 1,
        title: list[i].title,
        author: list[i].author,
        authorLocation:
          list[i].authorLocation != null ? list[i].authorLocation : false,
        description: list[i].description,
        starRating: list[i].starRating,
        testimonialImage: getImageData(list[i].testimonialImage),
      };
      retArr.push(obj);
    }
  }
  return retArr;
};
export const getTestimonialsGroup = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let retObj = {
        id: i + 1,
        groupTitle: listArr[i].groupTitle,
        groupSubtitle: listArr[i].groupSubtitle,
        groupLink: listArr[i].groupLink,
        groupLinkLabel: listArr[i].groupLinkLabel,
        testimonialsList: getTestimonialsList(listArr[i].testimonials),
      };
      retArr.push(retObj);
    }
  }
  return retArr;
};

// careers an job position pages
export const getJobCardList = (list) => {
  let retArr = [];

  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].attributes.isActive) {
        let obj = {
          id: i + 1,
          jobName: list[i].attributes.jobName,
          jobSlug: list[i].attributes.slug,
          cardText: list[i].attributes.cardText,
        };

        retArr.push(obj);
      }
    }
  }
  return retArr;
};
export const formateJobSlug = (arr) => {
  let retArr = [];
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      let obj = {
        id: i + 1,
        jobName: arr[i].attributes.jobName,
        jobSlug: arr[i].attributes.slug,
      };
      if (arr[i].attributes.isActive === true) {
        retArr.push(obj);
      }
    }
  }

  return retArr;
};
// site map data formation
const getEventLinks = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let retObj = {
        id: i + 1,
        eventName: listArr[i].event.data.attributes.eventName,
        eventSlug: listArr[i].event.data.attributes.eventSlug,
      };
      retArr.push(retObj);
    }
  }
  return retArr;
};
const getGameLinks = (listArr, cat) => {
  let retLinkArr = [];
  let hasGames = false;

  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      if (listArr[i].activity.data.attributes.activityInfo.category == cat) {
        let retLinkObj = {
          id: i + 1,
          activityName: listArr[i].activity.data.attributes.activityName,
          activitySlug: listArr[i].activity.data.attributes.activitySlug,
        };
        retLinkArr.push(retLinkObj);
      }
    }
  }
  if (retLinkArr.length > 0) {
    hasGames = true;
  }
  let retObj = {
    hasGames: hasGames,
    gameList: retLinkArr,
  };
  return retObj;
};

export const getSitemapLocationsLinkList = (locArr) => {
  let retArr = [];
  if (locArr.length > 0) {
    for (let i = 0; i < locArr.length; i++) {
      let retObj = {
        locationName: locArr[i].attributes.locationName,
        locationSlug: locArr[i].attributes.slug,
        escapeGameSlugList: getGameLinks(
          locArr[i].attributes.locationActivities,
          "Escape Games"
        ),

        otherGameSlugList: getGameLinks(
          locArr[i].attributes.locationActivities,
          "Others"
        ),
        eventSlugList: getEventLinks(locArr[i].attributes.locationEvents),
      };
      retArr.push(retObj);
    }
  }
  return retArr;
};
