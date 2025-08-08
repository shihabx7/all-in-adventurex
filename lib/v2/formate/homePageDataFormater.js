import { homePageTempData } from "../data/homePageTempData";
import { locationHomePageTempData } from "../data/locationHomePageTempData";
import { formatImage } from "./formateUtil";
import {
  escapeGameData,
  escapeGameThemeList,
  escapeGameRecommendList,
} from "../data/escapeGameTempData";
import { otherGameData } from "../data/otherGameTempData";
import { eventTempData } from "../data/eventTempData";
import { testimonialVideoList } from "../data/tetimonialVideoCarouselTempData";
///////////// internal function

const fomatEscapeGameList = (escapeGameList) => {
  let retArr = [];

  for (let i = 0; i < escapeGameList.length; i++) {
    let aSlug = escapeGameList[i].attributes.activitySlug;

    if (
      escapeGameList[i].attributes.activityInfo.category == "Escape Games" &&
      escapeGameData[aSlug] &&
      escapeGameData[aSlug].activeAll
    ) {
      let fromPrice =
        escapeGameList[i].attributes.activityInfo.price.length > 0
          ? escapeGameList[i].attributes.activityInfo.price.length - 1
          : 0;
      let obj = {
        id: i,
        isPublish: escapeGameList[i].attributes.isPublish,
        gameType: escapeGameList[i].attributes.activityInfo.category
          ? escapeGameList[i].attributes.activityInfo.category
          : escapeGameData[aSlug].gameType,
        gameName: escapeGameList[i].attributes.activityName
          ? escapeGameList[i].attributes.activityName
          : escapeGameData[aSlug].gameName,
        slug: escapeGameList[i].attributes.activitySlug
          ? escapeGameList[i].attributes.activitySlug
          : escapeGameData[aSlug].slug,
        gameCardData: escapeGameData[aSlug].gameCardData,
        videoData: {
          url: escapeGameData[aSlug].gameCardData.video.url
            ? escapeGameData[aSlug].gameCardData.video.url
            : "/assets/escape-game/videos/escape-from-alcatraz.mp4",
          thumbnail: escapeGameData[aSlug].gameCardData.poster.url
            ? escapeGameData[aSlug].gameCardData.poster.url
            : "/assets/escape-game/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        },
        listCardBgImage: escapeGameData[aSlug].gameCardData.cardBgImage
          ? escapeGameData[aSlug].gameCardData.cardBgImage
          : {
              url: "/assets/escape-game/card-bg/all-in-adventures-escape-from-alcatraz-card-bg.png",
              alt: "all in adventures ESCAPE FROM ALCATRAZ",
              width: "",
              height: "",
            },
        gameInfo: {
          gameTitle: escapeGameList[i].attributes.activityName
            ? escapeGameList[i].attributes.activityName
            : escapeGameData[aSlug].gameName,
          slug: escapeGameList[i].attributes.activitySlug
            ? escapeGameList[i].attributes.activitySlug
            : escapeGameData[aSlug].slug,
          shortDescription: escapeGameList[i].attributes.activitySlider
            .sliderText
            ? escapeGameList[i].attributes.activitySlider.sliderText
            : escapeGameData[aSlug].gameCardData.text,
          price:
            escapeGameList[i].attributes.activityInfo.price.length > 0
              ? escapeGameList[i].attributes.activityInfo.price[fromPrice].Price
              : escapeGameData[aSlug].gameInfo.price,
          age: escapeGameList[i].attributes.activityInfo.age
            ? escapeGameList[i].attributes.activityInfo.age
            : escapeGameData[aSlug].gameInfo.age,
          duration: escapeGameList[i].attributes.activityInfo.duration
            ? escapeGameList[i].attributes.activityInfo.duration
            : escapeGameData[aSlug].gameInfo.duration,
          successRate: escapeGameList[i].attributes.activityInfo.successRate
            ? escapeGameList[i].attributes.activityInfo.successRate
            : escapeGameData[aSlug].gameInfo.successRate,
          timeSize: escapeGameList[i].attributes.activityInfo.teamSize
            ? escapeGameList[i].attributes.activityInfo.teamSize
            : escapeGameData[aSlug].gameInfo.teamSize,
          timeSizeLabel: escapeGameList[i].attributes.activityInfo.teamSizeLabel
            ? escapeGameList[i].attributes.activityInfo.teamSizeLabel
            : escapeGameData[aSlug].gameInfo.teamSizeLabel,
          gameTheme: escapeGameData[aSlug].gameInfo.gameTheme,
          recommendFor: escapeGameData[aSlug].gameInfo.recommendFor,
        },
      };
      retArr.push(obj);
    }
  }

  return retArr;
};
const otherGameList = (escapeGameList) => {
  let retArr = [];

  for (let i = 0; i < escapeGameList.length; i++) {
    let aSlug = escapeGameList[i].attributes.activitySlug;

    if (
      escapeGameList[i].attributes.activityInfo.category == "Others" &&
      otherGameData[aSlug] &&
      otherGameData[aSlug].activeAll
    ) {
      let fromPrice = 0;
      let fromPricex =
        escapeGameList[i].attributes.activityInfo.price.length > 0
          ? escapeGameList[i].attributes.activityInfo.price.length - 1
          : 0;
      let obj = {
        id: i,
        isPublish: escapeGameList[i].attributes.isPublish,
        gameType: escapeGameList[i].attributes.activityInfo.category
          ? escapeGameList[i].attributes.activityInfo.category
          : otherGameData[aSlug].gameType,
        gameName: escapeGameList[i].attributes.activityName
          ? escapeGameList[i].attributes.activityName
          : otherGameData[aSlug].gameName,
        slug: escapeGameList[i].attributes.activitySlug
          ? escapeGameList[i].attributes.activitySlug
          : otherGameData[aSlug].slug,
        gameCardData: otherGameData[aSlug].gameCardData,
        videoData: {
          url: otherGameData[aSlug].gameCardData.video.url
            ? otherGameData[aSlug].gameCardData.video.url
            : "/assets/escape-game/videos/escape-from-alcatraz.mp4",
          thumbnail: otherGameData[aSlug].gameCardData.poster.url
            ? otherGameData[aSlug].gameCardData.poster.url
            : "/assets/escape-game/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        },
        listCardBgImage:
          escapeGameList[i].attributes.activitySlider.activityListImage !== null
            ? formatImage(
                escapeGameList[i].attributes.activitySlider.activityListImage
              )
            : otherGameData[aSlug].gameCardData.cardBgImage,
        gameInfo: {
          gameTitle: escapeGameList[i].attributes.activityName
            ? escapeGameList[i].attributes.activityName
            : otherGameData[aSlug].gameTitle,
          slug: escapeGameList[i].attributes.activitySlug
            ? escapeGameList[i].attributes.activitySlug
            : otherGameData[aSlug].slug,
          shortDescription: escapeGameList[i].attributes.activitySlider
            .sliderText
            ? escapeGameList[i].attributes.activitySlider.sliderText
            : otherGameData[aSlug].gameCardData.text,
          price:
            escapeGameList[i].attributes.activityInfo.price.length > 0
              ? escapeGameList[i].attributes.activityInfo.price[fromPrice].Price
              : otherGameData[aSlug].gameInfo.price,
          age: escapeGameList[i].attributes.activityInfo.age
            ? escapeGameList[i].attributes.activityInfo.age
            : otherGameData[aSlug].gameInfo.age,
          duration: escapeGameList[i].attributes.activityInfo.duration
            ? escapeGameList[i].attributes.activityInfo.duration
            : otherGameData[aSlug].gameInfo.duration,
          successRate: escapeGameList[i].attributes.activityInfo.successRate
            ? escapeGameList[i].attributes.activityInfo.successRate
            : otherGameData[aSlug].gameInfo.successRate,
          timeSize: escapeGameList[i].attributes.activityInfo.teamSize
            ? escapeGameList[i].attributes.activityInfo.teamSize
            : otherGameData[aSlug].gameInfo.teamSize,
          timeSizeLabel: escapeGameList[i].attributes.activityInfo.teamSizeLabel
            ? escapeGameList[i].attributes.activityInfo.teamSizeLabel
            : otherGameData[aSlug].gameInfo.teamSizeLabel,
          gameTheme: otherGameData[aSlug].gameInfo.gameTheme,
          recommendFor: otherGameData[aSlug].gameInfo.recommendFor,
        },
      };
      retArr.push(obj);
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
      eventName: eventTempData[i].eventType,
      slug: eventTempData[i].slug,
      carouselImage: eventTempData[i].homePageCarouselData.carouselImage,
      carouselText: eventTempData[i].homePageCarouselData.carouselText,
    };
    retArr.push(carObj);
  }
  return retArr;
};
//===========location data format
const fomatLocEscapeGameList = ({ escapeGameList, bookingInfo }) => {
  let retArr = [];

  for (let i = 0; i < escapeGameList.length; i++) {
    let aSlug = escapeGameList[i].activity.data.attributes.activitySlug;

    if (
      escapeGameList[i].activity.data.attributes.activityInfo.category ==
        "Escape Games" &&
      escapeGameData[aSlug] &&
      escapeGameData[aSlug].activeAll
    ) {
      let resPrice =
        escapeGameList[i].activityPrice.length > 0
          ? escapeGameList[i].activityPrice
          : escapeGameList[i].activity.data.attributes.activityInfo.price;
      let plen = resPrice.length - 1;
      let fromPrice = resPrice[plen].Price;

      let fTeamSize =
        escapeGameList[i].teamSize != null
          ? escapeGameList[i].teamSize
          : escapeGameList[i].activity.data.attributes.activityInfo.teamSize;

      let fTeamSizeLabel =
        escapeGameList[i].teamSizeLabel != null
          ? escapeGameList[i].teamSizeLabel
          : escapeGameList[i].activity.data.attributes.activityInfo
              .teamSizeLabel;
      //// obj//////////////
      let obj = {
        id: i,
        isActive:
          escapeGameList[i].isActive != null
            ? escapeGameList[i].isActive
            : true,
        gameType: escapeGameList[i].activity.data.attributes.activityInfo
          .category
          ? escapeGameList[i].activity.data.attributes.activityInfo.category
          : escapeGameData[aSlug].gameType,
        gameName: escapeGameList[i].activity.data.attributes.activityName
          ? escapeGameList[i].activity.data.attributes.activityName
          : escapeGameData[aSlug].gameName,
        slug: escapeGameList[i].activity.data.attributes.activitySlug
          ? escapeGameList[i].activity.data.attributes.activitySlug
          : escapeGameData[aSlug].slug,
        gameCardData: escapeGameData[aSlug].gameCardData,
        videoData: {
          url: escapeGameData[aSlug].gameCardData.video.url
            ? escapeGameData[aSlug].gameCardData.video.url
            : "/assets/escape-games/videos/escape-from-alcatraz.mp4",
          thumbnail: escapeGameData[aSlug].gameCardData.poster.url
            ? escapeGameData[aSlug].gameCardData.poster.url
            : "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        },
        listCardBgImage: escapeGameData[aSlug].gameCardData.cardBgImage
          ? escapeGameData[aSlug].gameCardData.cardBgImage
          : {
              url: "/assets/escape-games/card-bg/all-in-adventures-escape-from-alcatraz-card-bg.png",
              alt: "all in adventures ESCAPE FROM ALCATRAZ",
              width: "",
              height: "",
            },
        gameInfo: {
          gameTitle: escapeGameList[i].activity.data.attributes.activityName
            ? escapeGameList[i].activity.data.attributes.activityName
            : escapeGameData[aSlug].gameName,
          slug: escapeGameList[i].activity.data.attributes.activitySlug
            ? escapeGameList[i].activity.data.attributes.activitySlug
            : escapeGameData[aSlug].slug,
          shortDescription: escapeGameList[i].activity.data.attributes
            .activitySlider.sliderText
            ? escapeGameList[i].activity.data.attributes.activitySlider
                .sliderText
            : escapeGameData[aSlug].gameCardData.text,
          price: fromPrice,
          age: escapeGameList[i].activity.data.attributes.activityInfo.age
            ? escapeGameList[i].activity.data.attributes.activityInfo.age
            : escapeGameData[aSlug].gameInfo.age,
          duration:
            escapeGameList[i].activity.data.attributes.activityInfo.duration !==
            null
              ? escapeGameList[i].activity.data.attributes.activityInfo.duration
              : escapeGameData[aSlug].gameInfo.duration,
          successRate:
            escapeGameList[i].activity.data.attributes.activityInfo
              .successRate !== null
              ? escapeGameList[i].activity.data.attributes.activityInfo
                  .successRate
              : escapeGameData[aSlug].gameInfo.successRate,
          timeSize: fTeamSize
            ? fTeamSize
            : escapeGameData[aSlug].gameInfo.teamSize,
          timeSizeLabel: fTeamSizeLabel
            ? fTeamSizeLabel
            : escapeGameData[aSlug].gameInfo.teamSizeLabel,
          gameTheme: escapeGameData[aSlug].gameInfo.gameTheme,
          recommendFor: escapeGameData[aSlug].gameInfo.recommendFor,
        },
        bookingInfo: bookingInfo
          ? {
              shortName: bookingInfo.shortName,
              flow: bookingInfo.flow,
              itemNo:
                escapeGameList[i].bookingItemNo != null
                  ? escapeGameList[i].bookingItemNo
                  : false,
            }
          : null,
      };
      retArr.push(obj);
    }
  }

  return retArr;
};
const otherLocGameList = ({ escapeGameList, bookingInfo }) => {
  let retArr = [];

  for (let i = 0; i < escapeGameList.length; i++) {
    let aSlug = escapeGameList[i].activity.data.attributes.activitySlug;

    if (
      escapeGameList[i].activity.data.attributes.activityInfo.category ==
        "Others" &&
      otherGameData[aSlug] &&
      otherGameData[aSlug].activeAll
    ) {
      let resPrice =
        escapeGameList[i].activityPrice.length > 0
          ? escapeGameList[i].activityPrice
          : escapeGameList[i].activity.data.attributes.activityInfo.price;
      let plen = resPrice.length - 1;
      let fromPrice = resPrice[plen].Price;

      let fTeamSize =
        escapeGameList[i].teamSize != null
          ? escapeGameList[i].teamSize
          : escapeGameList[i].activity.data.attributes.activityInfo.teamSize;
      let fTeamSizeLabel =
        escapeGameList[i].teamSizeLabel != null
          ? escapeGameList[i].teamSizeLabel
          : escapeGameList[i].activity.data.attributes.activityInfo
              .teamSizeLabel;
      //// obj//////////////
      let obj = {
        id: i,
        isActive:
          escapeGameList[i].isActive != null
            ? escapeGameList[i].isActive
            : true,
        gameType: escapeGameList[i].activity.data.attributes.activityInfo
          .category
          ? escapeGameList[i].activity.data.attributes.activityInfo.category
          : otherGameData[aSlug].gameType,
        gameName: escapeGameList[i].activity.data.attributes.activityName
          ? escapeGameList[i].activity.data.attributes.activityName
          : otherGameData[aSlug].gameName,
        slug: escapeGameList[i].activity.data.attributes.activitySlug
          ? escapeGameList[i].activity.data.attributes.activitySlug
          : otherGameData[aSlug].slug,
        gameCardData: otherGameData[aSlug].gameCardData,
        videoData: {
          url: otherGameData[aSlug].gameCardData.video.url
            ? otherGameData[aSlug].gameCardData.video.url
            : "/assets/escape-games/videos/escape-from-alcatraz.mp4",
          thumbnail: otherGameData[aSlug].gameCardData.poster.url
            ? otherGameData[aSlug].gameCardData.poster.url
            : "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        },
        listCardBgImage: otherGameData[aSlug].gameCardData.cardBgImage
          ? otherGameData[aSlug].gameCardData.cardBgImage
          : {
              url: "/assets/escape-games/card-bg/all-in-adventures-escape-from-alcatraz-card-bg.png",
              alt: "all in adventures ESCAPE FROM ALCATRAZ",
              width: "",
              height: "",
            },
        gameInfo: {
          gameTitle: escapeGameList[i].activity.data.attributes.activityName
            ? escapeGameList[i].activity.data.attributes.activityName
            : otherGameData[aSlug].gameTitle,
          slug: escapeGameList[i].activity.data.attributes.activitySlug
            ? escapeGameList[i].activity.data.attributes.activitySlug
            : otherGameData[aSlug].slug,
          shortDescription: escapeGameList[i].activity.data.attributes
            .activitySlider.sliderText
            ? escapeGameList[i].activity.data.attributes.activitySlider
                .sliderText
            : otherGameData[aSlug].gameCardData.text,
          price: fromPrice,
          age: escapeGameList[i].activity.data.attributes.activityInfo.age
            ? escapeGameList[i].activity.data.attributes.activityInfo.age
            : otherGameData[aSlug].gameInfo.age,
          duration:
            escapeGameList[i].activity.data.attributes.activityInfo.duration !==
            null
              ? escapeGameList[i].activity.data.attributes.activityInfo.duration
              : otherGameData[aSlug].gameInfo.duration,
          successRate:
            escapeGameList[i].activity.data.attributes.activityInfo
              .successRate !== null
              ? escapeGameList[i].activity.data.attributes.activityInfo
                  .successRate
              : otherGameData[aSlug].gameInfo.successRate,
          timeSize: fTeamSize
            ? fTeamSize
            : otherGameData[aSlug].gameInfo.teamSize,
          timeSizeLabel: fTeamSizeLabel
            ? fTeamSizeLabel
            : otherGameData[aSlug].gameInfo.teamSizeLabel,
          gameTheme: otherGameData[aSlug].gameInfo.gameTheme,
          recommendFor: otherGameData[aSlug].gameInfo.recommendFor,
        },

        bookingInfo: bookingInfo
          ? {
              shortName: bookingInfo.shortName,
              flow: bookingInfo.flow,
              itemNo:
                escapeGameList[i].bookingItemNo != null
                  ? escapeGameList[i].bookingItemNo
                  : false,
            }
          : null,
      };
      retArr.push(obj);
    }
  }

  return retArr;
};
const fomatLocEventList = (eventList) => {
  let retArr = [];
  return retArr;
};
/////////////////////// output function
export const homePageDataFormater = {
  pageHeroDataFormat: function (data) {
    let fTitle = data.totalLocation + " ESCAPE ROOMS VENUES IN THE U.S.";
    if (data.locationSlug) {
      fTitle = data.pageHeroData.pageTitle;
    }
    return {
      pageTitle: fTitle,
      pageSubTitle: data.pageHeroData.pageSubTitle
        ? data.pageHeroData.pageSubTitle
        : homePageTempData.pageHeroData.pageSubTitle,
      heroBgVideo: homePageTempData.pageHeroData.heroBgVideo,
      // videoScreen: homePageData.pageHeroData.videoScreen,
      heroInfo: {
        escapeRooms: data.totalActivities,
        age: data.info.ageRange
          ? data.info.ageRange
          : homePageTempData.pageHeroData.heroInfo.age,
        // age: homePageData.pageHeroData.heroInfo.age,
        review: data.info.raveReviews
          ? data.info.raveReviews
          : homePageTempData.pageHeroData.heroInfo.review,
        geustServed: data.info.guestsServed
          ? data.info.guestsServed
          : homePageTempData.pageHeroData.heroInfo.geustServed,
      },
      allBookingInfo: data.bookingInfo ? data.bookingInfo : false,
    };
  },
  aboutSectionDataFormat: function (data) {
    if (data && data.locationSlug) {
      let retObj = locationHomePageTempData["default"].aboutSectionData;
      if (
        locationHomePageTempData[data.locationSlug] &&
        locationHomePageTempData[data.locationSlug].aboutSectionData
      ) {
        retObj = locationHomePageTempData[data.locationSlug].aboutSectionData;
      }

      return retObj;
    }
    return homePageTempData.aboutSectionData;
  },
  escapeGameListSectionDataFormat: function (data) {
    let retData = {
      // sectionTitle: data.sectionData.escapeGameTitle  ? data.sectionData.escapeGameTitle : homePageTempData.escapeGameListSectionData.sectionTitle,
      //sectionSubTitle: data.sectionData.escapeGameSubTitle  ? data.sectionData.escapeGameSubTitle : homePageTempData.escapeGameListSectionData.sectionSubTitle,
      sectionTitle: homePageTempData.escapeGameListSectionData.sectionTitle,
      sectionSubTitle:
        homePageTempData.escapeGameListSectionData.sectionSubTitle,
      gameThemeList: escapeGameThemeList,
      recommendList: escapeGameRecommendList,
      escapeGameList: data.bookingInfo
        ? fomatLocEscapeGameList({
            escapeGameList: data.fetchGameList,
            bookingInfo: data.bookingInfo,
          })
        : fomatEscapeGameList(data.fetchGameList),
    };
    return retData;
  },
  otherGameListSectionDataFormat: function (data) {
    let otArr = data.bookingInfo
      ? otherLocGameList({
          escapeGameList: data.fetchGameList,
          bookingInfo: data.bookingInfo,
        })
      : otherGameList(data.fetchGameList);
    let retData = {
      hasGames: otArr.length > 0 ? true : false,
      // sectionTitle:  data.sectionData.otherGameTitle !== null  ? data.sectionData.otherGameTitle  : homePageTempData.otherGameListSectionData.sectionTitle,
      // sectionSubTitle:data.sectionData.otherGameSubTitle !== null ? data.sectionData.otherGameSubTitle: homePageTempData.otherGameListSectionData.sectionSubTitle,
      sectionTitle: homePageTempData.otherGameListSectionData.sectionTitle,
      sectionSubTitle:
        homePageTempData.otherGameListSectionData.sectionSubTitle,
      otherGameList: otArr,
    };
    return retData;
  },
  eventCarouselSectionDataFormat: function () {
    let retData = {
      sectionTitle: homePageTempData.eventCarouselSectionData.sectionTitle,
      sectionSubTitle:
        homePageTempData.eventCarouselSectionData.sectionSubTitle,
      eventCarouselList: getEventCarouselList(),
    };
    return retData;
  },
  testimonialVideoCarouselSectionDataFormat: function () {
    let retData = {
      sectionTitle:
        homePageTempData.testimonialVideoCarouselSectionData.sectionTitle,
      sectionSubTitle:
        homePageTempData.testimonialVideoCarouselSectionData.sectionSubTitle,
      testimonialVideoList: testimonialVideoList,
    };
    return retData;
  },
};
