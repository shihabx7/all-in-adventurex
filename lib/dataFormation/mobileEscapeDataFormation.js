const mediaURL = process.env.APP_API_MEDIA_URL;
const siteUrl = process.env.SITE_URL || "https://allinadventures.com";

const formn={up:1,tg:2}
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
  if (imgObj.data !== null) {
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
const getIconList = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let obj = {
        id: i + 1,
        text: listArr[i].text,
        icon: getImageData(listArr[i].icon),
      };
      retArr.push(obj);
    }
  }
  return retArr;
};

const pageHero = (obj) => {
  let retObj = {
    pageTitle:
      obj.pageTitle !== null
        ? obj.pageTitle
        : "BRING THE THRILL OF AN ESCAPE ROOM TO YOU!",
    pageSubTitle: obj.pageSubTitle !== null ? obj.pageSubTitle : "",
    iconList: getIconList(obj.iconList),
    pageHeroImage:
      obj.pageHeroImage.data !== null
        ? getImageData(obj.pageHeroImage)
        : "/assets/mobile-escape-room/allin-adventures-mobile-escape-room-hero.png",
  };
  return retObj;
};
const getescapeGameList = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let gobj = {
        id: i + 1,
        gameTitle:
          listArr[i].gameTitle !== null
            ? listArr[i].gameTitle
            : "ESCAPE FROM ALCATRAZ",
        shortDescription:
          listArr[i].shortDescription !== null
            ? listArr[i].shortDescription
            : "You are trapped in a lab lockdown with a growing zombie horde and need to find your way out before it is too late!",
        price: listArr[i].price !== null ? listArr[i].price : "19.99",
        ageRange: listArr[i].ageRange !== null ? listArr[i].ageRange : "6-99",
        duration: listArr[i].duration !== null ? listArr[i].duration : "120",
        teamSize: listArr[i].teamSize !== null ? listArr[i].teamSize : "20-30",
        gameImageDesktop: getImageData(listArr[i].gameImageDesktop),
        gameImageMobile: getImageData(listArr[i].gameImageMobile),
      };
      retArr.push(gobj);
    }
  }
  return retArr;
};
const gameCarouselSectionData = (obj) => {
  let retObj = {
    sectionTitle:
      obj.sectionTitle !== null
        ? obj.sectionTitle
        : "CHOOSE YOUR MOBILE ESCAPE ROOM ADVENTURE",
    sectionSubTitle:
      obj.sectionSubTitle !== null
        ? obj.sectionSubTitle
        : "Select from a variety of thrilling themes and challenges, each designed to engage your group and create an unforgettable experience, right at your location.",
    escapeGameList: getescapeGameList(obj.escapeGameList),
  };
  return retObj;
};
const getEventList = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let gobj = {
        id: i + 1,
        eventTitle:
          listArr[i].title !== null ? listArr[i].title : "Workplace Event",
        description:
          listArr[i].description !== null
            ? listArr[i].description
            : "Bring excitement to your next office gathering with our mobile escape room. It transforms your workplace into a fun, interactive challenge, perfect for energizing your team and boosting collaboration.",

        image: getImageData(listArr[i].image),
      };
      retArr.push(gobj);
    }
  }
  return retArr;
};
const eventSectionData = (obj) => {
  let retObj = {
    sectionTitle:
      obj.sectionTitle !== null
        ? obj.sectionTitle
        : "MOBILE ESCAPE ROOM EVENT FOR ALL",
    sectionSubTitle:
      obj.sectionSubTitle !== null
        ? obj.sectionSubTitle
        : "Our mobile escape room delivers fun and immersive experiences for all ages and group sizes, making it perfect for corporate events, school activities, or family gatherings and more.",
    eventList: getEventList(obj.eventList),
  };
  return retObj;
};
const getOfferList = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let gobj = {
        id: i + 1,
        offerTitle:
          listArr[i].title !== null
            ? listArr[i].title
            : "Convenient Mobile Experience",
        description:
          listArr[i].description !== null
            ? listArr[i].description
            : "We bring the escape room directly to your location, providing a hassle-free experience without the need to travel. Our mobile setup allows you to enjoy thrilling adventures right at your office, classroom, or outdoor venue, saving you time and effort.",

        icon: getImageData(listArr[i].icon),
      };
      retArr.push(gobj);
    }
  }
  return retArr;
};
const offerSectionData = (obj) => {
  let retObj = {
    sectionTitle:
      obj.sectionTitle !== null
        ? obj.sectionTitle
        : "WHY CHOOSE OUR MOBILE ESCAPE ROOMS",
    sectionSubTitle:
      obj.sectionSubTitle !== null
        ? obj.sectionSubTitle
        : "Our mobile escape rooms offer convenience, immersive gameplay, and customizable experiences, making any event unforgettable.",
    offerList: getOfferList(obj.offerList),
  };
  return retObj;
};
const experienceSectionData = (obj) => {
  let retObj = {
    titleOne:
      obj.titleOne !== null ? obj.titleOne : "EXPERIENCE THE THRILL ANYWHERE!",
    descriptionOne:
      obj.descriptionOne !== null
        ? obj.descriptionOne
        : "<p>Our mobile escape room game brings the adventure directly to you. Simply use your own device to connect to our platform and immerse yourself in a world of puzzles and challenges. No downloads or installations required. Solve intricate riddles, crack codes, and decipher clues to unlock the secrets of mysterious worlds. With stunning visuals and engaging gameplay, our escape room game offers tons of fun and excitement! Try it today and see if you have what it takes to escape!</p>",
    imageOne: getImageData(obj.imageOne),

  };
  return retObj;
};

const pricingSectionData = (obj) => {
  let retObj = {
    sectionTitle:
      obj.sectionTitle !== null
        ? obj.sectionTitle
        : "PRICING / AVAILABILITY / BOOKING",
    sectionSubTitle:
      obj.sectionSubTitle !== null
        ? obj.sectionSubTitle
        : "Discover flexible pricing options, availability details, and easy booking processes to secure your mobile escape room adventure today!",
    pricingList:
      obj.pricinCardInfoList.length > 0 ? obj.pricinCardInfoList : false,
  };
  return retObj;
};
const getGalleryImageList = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let galImgObj = {
        id: i + 1,
        url: mediaURL + listArr[i].attributes.url,
        alt:
          listArr[i].attributes.alternativeText !== null
            ? listArr[i].attributes.alternativeText
            : "Allinadventures Mobile Escape Room Gallery photo" + i + 1,
        width: listArr[i].attributes.width,
        height: listArr[i].attributes.height,
      };
      retArr.push(galImgObj);
    }
  }
  return retArr;
};
const gallerySectionData = (obj) => {
  let retObj = {
    sectionTitle:
      obj.sectionTitle !== null
        ? obj.sectionTitle
        : "MOBILE ESCAPE ROOM GALLERY",
    sectionSubTitle:
      obj.sectionSubTitle !== null
        ? obj.sectionSubTitle
        : "<p>Explore our vibrant gallery showcasing the fun, immersive experiences and exciting themes of our mobile escape rooms!</p>",
    galleryImageList:
      obj.galleryImages.data.length > 0
        ? getGalleryImageList(obj.galleryImages.data)
        : false,
  };
  return retObj;
};
const getTestimonialList = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let testObj = {
        id: i + 1,
        title:
          listArr[i].title !== null
            ? listArr[i].title
            : "UNFORGETTABLE TEAM-BUILDING EXPERIENCE",
        text:
          listArr[i].text !== null
            ? listArr[i].text
            : '"Our team had an amazing time with the mobile escape room! It brought everyone together and strengthened our bonds. The puzzles were challenging yet fun, and we\'re still talking about it weeks later!"',
        author: listArr[i].author ? listArr[i].author : "Sarah J",
        designation: listArr[i].designation
          ? listArr[i].designation
          : "Corporate Event Organizer",
        testimonialImage: getImageData(listArr[i].testimonialImage),

        authorAvatar: getImageData(listArr[i].authorAvatar),
      };
      retArr.push(testObj);
    }
  }
  return retArr;
};
const testimonialSectionData = (obj) => {
  // console.log(obj.testimonialList);
  let retObj = {
    sectionTitle:
      obj.sectionTitle !== null
        ? obj.sectionTitle
        : "WHAT OUR MOBILE ESCAPE ROOM PLAYERS ARE SAYING",
    sectionSubTitle: obj.sectionSubTitle !== null ? obj.sectionSubTitle : "",
    testimonialList:
      obj.testimonialList.length > 0
        ? getTestimonialList(obj.testimonialList)
        : false,
  };
  return retObj;
};
const faqSectionData = (obj) => {
  let retObj = {
    sectionTitle:
      obj.sectionTitle !== null
        ? obj.sectionTitle
        : "FREQUENTLY ASKED QUESTIONS",
    sectionSubTitle:
      obj.sectionSubTitle !== null
        ? obj.sectionSubTitle
        : "Find answers to common inquiries about our mobile escape room, including pricing, booking, and game details to help plan your unforgettable adventure!",
    faqList: obj.faqList.length > 0 ? obj.faqList : false,
  };
  return retObj;
};
const contactSectionData = (obj) => {
  let retObj = {
    sectionTitle:
      obj.sectionTitle !== null ? obj.sectionTitle : "MOBILE MYSTERY INQUIRY",
    sectionSubTitle:
      obj.sectionSubTitle !== null
        ? obj.sectionSubTitle
        : "Let us know more about your event! We will be in contact within 24 hours to book your event.",
    note:
      obj.note !== null
        ? obj.note
        : "<p><strong>Please note:</strong> All Mobile Mystery events require the use of one (1) mobile device per game provided to your group by your organization plus a local Wi-Fi / Internet connection.While two devices are a minimum requirement, you may find that up to six devices are needed for a single event (depending on how many games are selected).</p><p>These devices are used to access the electronic portion of the game. If you are unable to provide this, we encourage you to take advantage of our in-store experiences!</p>",
  };
  return retObj;
};
export const checkActiveMobileEscape = (listArr) => {
  let ret = false;
  for (let i = 0; i < listArr.length; i++) {
    if (
      listArr[i].__component == "mobile-escape-room.home-page-section-data" &&
      listArr[i].isActive === true
    ) {
      ret = true;
    }
  }
  return ret;
};
export const homePageMobileEscapeRoomSectionData = (resData) => {
  let retObj = {
    sectionTitle: null,
    sectionSubTitle: null,
    sectionImage: null,
    iconList: [],
    infoList: [],
  };
  if (resData.length > 0) {
    (retObj.sectionTitle =
      resData[0].sectionTitle !== null
        ? resData[0].sectionTitle
        : "EXPERIENCE OUR MOBILE ESCAPE ROOMS"),
      (retObj.sectionSubTitle =
        resData[0].sectionSubTitle !== null
          ? resData[0].sectionSubTitle
          : "Our mobile escape room is an excellent choice for groups who want to enjoy a fun and interactive activity without having to leave their own location."),
      (retObj.sectionImage = getImageData(resData[0].sectionImage));
    (retObj.iconList =
      resData[0].iconList.length > 0 ? getIconList(resData[0].iconList) : []),
      (retObj.infoList =
        resData[1].pricinCardInfoList.length > 0
          ? resData[1].pricinCardInfoList
          : []);
  }
  return retObj;
};

export const merPageMeta = (listArr, locationName, locationSlug) => {
  let retData = {
    title: "Mobile Escape Room" + locationName + " | All In Adventures",

    description:
      "Experience the thrill of Mobile Escape Room in " + locationName + "!",
    keywords:
      "mobile escape Room " +
      locationName +
      ", all in adventures mobile escape room " +
      locationName +
      ", mystery room mobile escape " +
      locationName,
    url: siteUrl + "/" + locationSlug + "/activities/mobile-escape-room",
    metaRobot: "all",
    structuredData: false,
    canonicalURL:
      siteUrl + "/" + locationSlug + "/activities/mobile-escape-room",

    metaimg:
      mediaURL +
      "/assets/mobile-escape-room/allin-adventures-mobile-escape-room-hero.png",

    twitterMeta: {
      title: "Mobile Escape Room" + locationName + " | All In Adventures",
      description:
        "Experience the thrill of Mobile Escape Room in " + locationName + "!",

      imageUrl:
        mediaURL +
        "/assets/mobile-escape-room/allin-adventures-mobile-escape-room-hero.png",
    },
  };
  //console.log(listArr);
  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].__component == "shared.seo") {
      let metaData = {
        title:
          listArr[i].metaTitle !== null
            ? listArr[i].metaTitle
            : "Mobile Escape Room" + locationName + " | All In Adventures",

        description:
          listArr[i].metaDescription !== null
            ? listArr[i].metaDescription
            : "Experience the thrill of Mobile Escape Room in " +
            locationName +
            "!",
        keywords:
          listArr[i].keywords !== null
            ? listArr[i].keywords
            : "mobile escape Room " +
            locationName +
            ", all in adventures mobile escape room " +
            locationName +
            ", mystery room mobile escape " +
            locationName,
        url: siteUrl + "/" + locationSlug + "/activities/mobile-escape-room",
        metaRobot:
          listArr[i].metaRobots !== null ? listArr[i].metaRobots : "all",
        structuredData:
          listArr[i].structuredData !== null
            ? listArr[i].structuredData
            : false,
        canonicalURL:
          listArr[i].canonicalURL !== null
            ? listArr[i].canonicalURL
            : siteUrl + "/" + locationSlug + "/activities/mobile-escape-room",

        metaimg:
          listArr[i].metaImage.data !== null
            ? mediaURL + listArr[i].metaImage.data.attributes.url
            : mediaURL +
            "/assets/mobile-escape-room/allin-adventures-mobile-escape-room-hero.png",

        twitterMeta: {
          title:
            listArr[i].metaSocial.title !== null
              ? listArr[i].metaSocial.title
              : "Mobile Escape Room" + locationName + " | All In Adventures",
          description:
            listArr[i].metaSocial.description !== null
              ? listArr[i].metaSocial.description
              : "Experience the thrill of Mobile Escape Room in " +
              locationName +
              "!",

          imageUrl:
            listArr[i].metaSocial.image.data !== null
              ? mediaURL + listArr[i].metaSocial.image.data.attributes.url
              : mediaURL +
              "/assets/mobile-escape-room/allin-adventures-mobile-escape-room-hero.png",
        },
      };
      retData = metaData;
    }
  }
  return retData;
};
export const merPageData = (merArr, locationName, locationSlug) => {
  let retObj = {
    pageHero: null,
    gameCarouselSectionData: null,

    experienceSectionData: null,
    pricingSectionData: null,

    testimonialSectionData: null,
    faqSectionData: null,
    contactSectionData: null,
  };
  // offerSectionData: null,
  //eventSectionData: null,
  // gallerySectionData: null,
  for (let i = 0; i < merArr.length; i++) {
    if (merArr[i].__component == "mobile-escape-room.page-hero") {
      retObj.pageHero = pageHero(merArr[i]);
    }
    if (merArr[i].__component == "mobile-escape-room.game-list-section") {
      retObj.gameCarouselSectionData = gameCarouselSectionData(merArr[i]);
    }
    /*
    if (merArr[i].__component == "mobile-escape-room.event-section") {
      retObj.eventSectionData = eventSectionData(merArr[i]);
    }*/
    /*
    if (merArr[i].__component == "mobile-escape-room.offer-section") {
      retObj.offerSectionData = offerSectionData(merArr[i]);
    }*/
    if (merArr[i].__component == "mobile-escape-room.experience-section") {
      retObj.experienceSectionData = experienceSectionData(merArr[i]);
    }
    if (merArr[i].__component == "mobile-escape-room.pricing-card-section") {
      retObj.pricingSectionData = pricingSectionData(merArr[i]);
    }
    /*
    if (merArr[i].__component == "mobile-escape-room.gallery-section") {
      retObj.gallerySectionData = gallerySectionData(merArr[i]);
    }*/
    if (merArr[i].__component == "mobile-escape-room.testimonial-section") {
      retObj.testimonialSectionData = testimonialSectionData(merArr[i]);
    }
    if (merArr[i].__component == "mobile-escape-room.faq-section") {
      retObj.faqSectionData = faqSectionData(merArr[i]);
    }
    if (
      merArr[i].__component == "mobile-escape-room.mobile-escape-room-contact"
    ) {
      retObj.contactSectionData = contactSectionData(merArr[i]);
    }
  }
  return retObj;
};
