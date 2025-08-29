import {
  eventTempData,
  eventListPageTempData,
  allPartyPackages,
} from "../data/eventTempData";
import { escapeGameRootPageData } from "../data/escapeGameTempData";
import { eventFormBookingLinks } from "../../tempData/eventFormBookingLinks";

import { formatImage } from "./formateUtil";

const locationPartypackageBookingInfo = (
  locBookingInfo,
  escapeGamePartyList
) => {
  let newPartyData = allPartyPackages.reduce((accumulator, currentObject) => {
    let objKey = currentObject.packageName
      .trim()
      .toLowerCase()
      .split(" ")
      .join("-");
    accumulator[objKey] = currentObject; // Using 'id' as the key
    return accumulator;
  }, {});
  let retArr = [];
  for (let i = 0; i < escapeGamePartyList.length; i++) {
    let givenObjKey = escapeGamePartyList[i].partyName
      .trim()
      .toLowerCase()
      .split(" ")
      .join("-");
    if (newPartyData[givenObjKey]) {
      let retObj = {
        id: i + 1,
        packageName: newPartyData[givenObjKey].packageName,
        packageImage: newPartyData[givenObjKey].packageImage,
        packageIncluds: newPartyData[givenObjKey].packageIncluds,
        partyPackageBookingInfo: {
          shortName: locBookingInfo.shortName,
          flow:
            escapeGamePartyList[i].bookingFlow != null
              ? escapeGamePartyList[i].bookingFlow
              : "no",
          itemNo:
            escapeGamePartyList[i].bookingItemNo != null
              ? escapeGamePartyList[i].bookingItemNo
              : escapeGamePartyList[i].partyPackageItemNo,
        },
      };
      retArr.push(retObj);
    }
  }
  return retArr;
};

const partypackageBookingInfo = () => {
  let retArr = [];
  for (let i = 0; i < allPartyPackages.length; i++) {
    if (allPartyPackages[i].showRootPage) {
      let retObj = {
        id: i + 1,
        packageName: allPartyPackages[i].packageName,
        packageImage: allPartyPackages[i].packageImage,
        packageIncluds: allPartyPackages[i].packageIncluds,
      };
      retArr.push(retObj);
    }
  }
  return retArr;
};
const allEscapeGameList = () => {
  let newGameData = escapeGameRootPageData.reduce(
    (accumulator, currentObject) => {
      accumulator[currentObject.slug] = currentObject; // Using 'id' as the key
      return accumulator;
    },
    {}
  );
  let retArr = [];
  for (let i = 0; i < escapeGameRootPageData.length; i++) {
    let retObj = {
      id: i,
      poster: escapeGameRootPageData[i].gameCardData.poster,
      slug: escapeGameRootPageData[i].slug,
    };
    retArr.push(retObj);
  }
  return retArr;
};
const locEscapeGameList = (fetchGameList, locBookingInfo) => {
  let newGameData = escapeGameRootPageData.reduce(
    (accumulator, currentObject) => {
      accumulator[currentObject.slug] = currentObject; // Using 'id' as the key
      return accumulator;
    },
    {}
  );
  let retArr = [];
  for (let i = 0; i < fetchGameList.length; i++) {
    let fSlug = fetchGameList[i].activity.data.attributes.activitySlug;
    if (
      fetchGameList[i].activity.data.attributes.activityInfo.category ==
        "Escape Games" &&
      newGameData[fSlug]
    ) {
      let retObj = {
        id: i + 1,
        poster: newGameData[fSlug].gameCardData.poster,
        slug: fSlug,
        bookingInfo: {
          shortName: locBookingInfo.shortName,
          flow: locBookingInfo.flow,
          itemNo: fetchGameList[i].bookingItemNo,
          isActive: fetchGameList[i].isActive,
        },
      };
      retArr.push(retObj);
    }
  }
  return retArr;
};
const getEventCarouselList = () => {
  let retArr = [];
  for (let i = 0; i < eventTempData.length; i++) {
    let carObj = {
      id: i + 1,
      eventType: eventTempData[i].eventType,
      eventName: eventTempData[i].eventName,
      slug: eventTempData[i].slug,
      carouselImage: eventTempData[i].homePageCarouselData.carouselImage,
      carouselTitle: eventTempData[i].homePageCarouselData.carouselTitle,
      carouselText: eventTempData[i].homePageCarouselData.carouselText,
    };
    retArr.push(carObj);
  }
  return retArr;
};
export const eventPageDataFormater = {
  pageHeroData: function (data) {
    let newEventData = eventTempData.find((obj) => obj.slug === data.eventSlug);
    return {
      pageTitle: newEventData.pageHeroData.pageTitle
        ? newEventData.pageHeroData.pageTitle
        : " ESCAPE ROOM " + newEventData.eventName,
      pageSubTitle: newEventData.pageHeroData.pageSubTitle
        ? newEventData.pageHeroData.pageSubTitle
        : "All In Adventures is famous for hosting the most memorable party in the town. We offer fun-filled escape room experiences and a event party venue for all ages and skill levels. Both kids and adults love it!",

      pageHeroBgImage: newEventData.pageHeroData.pageHeroBgImage,
      heroInfo: newEventData.pageHeroData.heroInfo,
      inquiryFormBookingInfo: data.locationSlug
        ? eventFormBookingLinks[data.locationSlug]
        : false,
    };
  },

  eventDetailSectionData: function (data) {
    let newEventData = eventTempData.find((obj) => obj.slug === data.eventSlug);
    let retObj = {
      sectionTitle: newEventData.eventDetailSectionData.sectionTitle,
      sectionImage: newEventData.eventDetailSectionData.sectionImage,
      eventDescription: newEventData.eventDetailSectionData.eventDescription,
    };
    return retObj;
  },
  partyPackageSectionData: function (data) {
    let newEventData = eventTempData.find((obj) => obj.slug === data.eventSlug);

    let retData = {
      sectionTitle: newEventData.partyPackageSectionData.sectionTitle,
      sectionSubTitle: newEventData.partyPackageSectionData.sectionSubTitle,
      partyPackageList: data.locationSlug
        ? locationPartypackageBookingInfo(
            data.locationBookingInfo,
            data.escapeGamePartyList
          )
        : partypackageBookingInfo(),
    };
    return retData;
  },
  escapescapeRoomCarouselSectionData: function (data) {
    let newEventData = eventTempData.find((obj) => obj.slug === data.eventSlug);

    let retData = {
      sectionTitle: newEventData.escapeGameCarouselSectionData.sectionTitle,
      sectionSubTitle:
        newEventData.escapeGameCarouselSectionData.sectionSubTitle,
      escapeGameList: data.locationSlug
        ? locEscapeGameList(data.fetchEscapeGameList, data.locationBookingInfo)
        : allEscapeGameList(),
    };

    return retData;
  },
  gallerySectionData: function (data) {
    let newEventData = eventTempData.find((obj) => obj.slug === data.eventSlug);

    let retData = {
      sectionTitle: newEventData.gallerySectionData.sectionTitle,
      sectionSubTitle: newEventData.gallerySectionData.sectionSubTitle
        ? newEventData.gallerySectionData.sectionSubTitle
        : "Get a glimpse of real corporate teams in action! Our gallery captures moments of collaboration, problem-solving, and celebration from unforgettable corporate events.",
      galleryImages: newEventData.gallerySectionData.galleryImages,
      galleryVideo: newEventData.gallerySectionData.galleryVideo,
    };

    return retData;
  },
  testimonialSectionData: function (data) {
    let newEventData = eventTempData.find((obj) => obj.slug === data.eventSlug);
    let retData = {
      sectionTitle: newEventData.testimonialSectionData.sectionTitle,
      sectionSubTitle: newEventData.testimonialSectionData.sectionSubTitle
        ? newEventData.testimonialSectionData.sectionSubTitle
        : "Authentic stories from real teams who leveled up collaboration and had a blast at All In Adventures!",
      testimonialList: newEventData.testimonialSectionData.testimonialList,
    };

    return retData;
  },

  faqSectionData: function (data) {
    let newEventData = eventTempData.find((obj) => obj.slug === data.eventSlug);
    let retData = {
      sectionTitle: newEventData.faqSectionData.sectionTitle,
      sectionSubTitle: newEventData.faqSectionData.sectionSubTitle,
      eventFaqList: newEventData.faqSectionData.eventFaqList,
    };

    return retData;
  },
  ourFacilitiesSectionData: function (data) {
    let newEventData = eventTempData.find((obj) => obj.slug === data.eventSlug);
    let retData = {
      //sectionTitle: newEventData.testimonialSectionData.sectionTitle ? newEventData.testimonialSectionData.sectionTitle: "OUR FACILITIES",
      sectionTitle: "OUR FACILITIES",
      //sectionSubTitle: newEventData.testimonialSectionData.sectionSubTitle ? newEventData.testimonialSectionData.sectionSubTitle : "All escape rooms are completely private - for your players only! We provide an entire party with the opportunity to celebrate in a fun and unique way. Come join us to create exciting memories with your group.",
      sectionSubTitle:
        "All escape rooms are completely private - for your players only! We provide an entire party with the opportunity to celebrate in a fun and unique way. Come join us to create exciting memories with your group.",
    };

    return retData;
  },
  // for list page exclusive
};

export const eventListPageDataFormater = {
  pageHeroData: function (data) {
    if (data && data.locationSlug && data.locationName) {
      return {
        pageTitle: data.pageHeroData.pageTitle
          ? data.pageHeroData.pageTitle
          : "PARTIES, EVENTS AND SPECIAL OCCASIONS IN " + data.locationName,
        pageSubTitle: data.pageHeroData.pageSubTitle
          ? data.pageHeroData.pageSubTitle
          : "Celebrate any special event at All In Adventures escape rooms in " +
            data.locationName +
            "! Team up with your family, friends, kids, co-workers, and anybody and everybody for an incredible memory to last forever. Whether they are 6 or 99, we have something for everyone.",

        pageHeroBgImage: eventListPageTempData.pageHeroData.pageHeroBgImage,
        heroInfo: eventListPageTempData.pageHeroData.heroInfo,
        inquiryFormBookingInfo: eventFormBookingLinks[data.locationSlug]
          ? eventFormBookingLinks[data.locationSlug]
          : false,
      };
    }
    return {
      pageTitle: eventListPageTempData.pageHeroData.pageTitle
        ? eventListPageTempData.pageHeroData.pageTitle
        : " ESCAPE ROOM EVENTS AND PARTIES",
      pageSubTitle: eventListPageTempData.pageHeroData.pageSubTitle
        ? eventListPageTempData.pageHeroData.pageSubTitle
        : "All In Adventures is famous for hosting the most memorable party in the town. We offer fun-filled escape room experiences and a event party venue for all ages and skill levels. Both kids and adults love it!",

      pageHeroBgImage: eventListPageTempData.pageHeroData.pageHeroBgImage,
      heroInfo: eventListPageTempData.pageHeroData.heroInfo,
      inquiryFormBookingInfo:
        data && data.locationSlug
          ? eventFormBookingLinks[data.locationSlug]
          : false,
    };
  },
  eventListSectionData: function (data) {
    return {
      sectionTitle: eventListPageTempData.eventListSectionData.sectionTitle
        ? eventListPageTempData.eventListSectionData.sectionTitle
        : " AN INCREDIBLE ESCAPE ROOM PARTY VENUE",
      sectionSubTitle: eventListPageTempData.eventListSectionData
        .sectionSubTitle
        ? eventListPageTempData.eventListSectionData.sectionSubTitle
        : "All In Adventures is famous for hosting the most memorable party in the town. We offer fun-filled escape room experiences and a event party venue for all ages and skill levels. Both kids and adults love it!",

      eventList: getEventCarouselList(),
    };
  },
  escapescapeRoomCarouselSectionData: function (data) {
    // let newEventData = eventTempData.find((obj) => obj.slug === data.eventSlug);

    let retData = {
      sectionTitle:
        eventListPageTempData.escapeGameCarouselSectionData.sectionTitle,
      sectionSubTitle:
        eventListPageTempData.escapeGameCarouselSectionData.sectionSubTitle,
      escapeGameList:
        data && data.locationSlug
          ? locEscapeGameList(
              data.fetchEscapeGameList,
              data.locationBookingInfo
            )
          : allEscapeGameList(),
    };

    return retData;
  },
  gallerySectionData: function (data) {
    // let newEventData = eventTempData.find((obj) => obj.slug === data.eventSlug);

    let retData = {
      sectionTitle: eventListPageTempData.gallerySectionData.sectionTitle,
      sectionSubTitle: eventListPageTempData.gallerySectionData.sectionSubTitle
        ? eventListPageTempData.gallerySectionData.sectionSubTitle
        : "Get a glimpse of real corporate teams in action! Our gallery captures moments of collaboration, problem-solving, and celebration from unforgettable corporate events.",
      galleryImages: eventListPageTempData.gallerySectionData.galleryImages,
      galleryVideo: eventListPageTempData.gallerySectionData.galleryVideo,
    };

    return retData;
  },
  testimonialSectionData: function (data) {
    //let newEventData = eventTempData.find((obj) => obj.slug === data.eventSlug);
    let retData = {
      sectionTitle: eventListPageTempData.testimonialSectionData.sectionTitle,
      sectionSubTitle: eventListPageTempData.testimonialSectionData
        .sectionSubTitle
        ? eventListPageTempData.testimonialSectionData.sectionSubTitle
        : "Authentic stories from real teams who leveled up collaboration and had a blast at All In Adventures!",
      testimonialList:
        eventListPageTempData.testimonialSectionData.testimonialList,
    };

    return retData;
  },

  faqSectionData: function (data) {
    // let newEventData = eventTempData.find((obj) => obj.slug === data.eventSlug);
    let retData = {
      sectionTitle: eventListPageTempData.faqSectionData.sectionTitle,
      sectionSubTitle: eventListPageTempData.faqSectionData.sectionSubTitle,
      eventFaqList: eventListPageTempData.faqSectionData.eventFaqList,
    };

    return retData;
  },
  ourFacilitiesSectionData: function (data) {
    // let newEventData = eventTempData.find((obj) => obj.slug === data.eventSlug);
    let retData = {
      //sectionTitle: newEventData.testimonialSectionData.sectionTitle ? newEventData.testimonialSectionData.sectionTitle: "OUR FACILITIES",
      sectionTitle: "OUR FACILITIES",
      //sectionSubTitle: newEventData.testimonialSectionData.sectionSubTitle ? newEventData.testimonialSectionData.sectionSubTitle : "All escape rooms are completely private - for your players only! We provide an entire party with the opportunity to celebrate in a fun and unique way. Come join us to create exciting memories with your group.",
      sectionSubTitle:
        "All escape rooms are completely private - for your players only! We provide an entire party with the opportunity to celebrate in a fun and unique way. Come join us to create exciting memories with your group.",
    };

    return retData;
  },
};
