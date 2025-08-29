import { formatImage } from "./formateUtil";
import { eventTempData } from "../data/eventTempData";
import { locationHomePageTempData } from "../data/locationHomePageTempData";

import {
  escapeGameData,
  escapeGameRootPageData,
  escapeGameThemeList,
  escapeGameRecommendList,
  escapeGameRootListPageData,
} from "../data/escapeGameTempData";
import { otherGameData, OtherGameListData } from "../data/otherGameTempData";

const otherEscapeGameList = (paramObj) => {
  let retArr = [];
  for (let i = 0; i < escapeGameRootPageData.length; i++) {
    if (escapeGameRootPageData[i].slug != paramObj.activitySlug) {
      let retObj = {
        id: i,
        poster: escapeGameRootPageData[i].gameCardData.poster,
        slug: escapeGameRootPageData[i].slug,
      };
      retArr.push(retObj);
    }
  }
  return retArr;
};
const otherLocEscapeGameList = (
  activitySlug,
  locEscapeGameList,
  locBookingInfo
) => {
  let newGameData = escapeGameRootPageData.reduce(
    (accumulator, currentObject) => {
      accumulator[currentObject.slug] = currentObject; // Using 'id' as the key
      return accumulator;
    },
    {}
  );

  let retArr = [];
  for (let i = 0; i < locEscapeGameList.length; i++) {
    if (
      locEscapeGameList[i].activity.data.attributes.activitySlug !=
        activitySlug &&
      locEscapeGameList[i].activity.data.attributes.activityInfo.category ==
        "Escape Games"
    ) {
      let gameSlug = locEscapeGameList[i].activity.data.attributes.activitySlug;

      //  console.log("loc act " + gameSlug);
      let retObj = {
        id: i,
        poster: newGameData[gameSlug].gameCardData.poster,
        slug: gameSlug,
        bookingInfo: {
          shortName: locBookingInfo.shortName,
          flow: locBookingInfo.flow,
          itemNo: locEscapeGameList[i].bookingItemNo,
          isActive: locEscapeGameList[i].isActive,
        },
      };
      retArr.push(retObj);
    }
  }
  return retArr;
};
// get all escape game list
const fomatEscapeGameList = (escapeGameList) => {
  const escapeGameObj = escapeGameRootPageData.reduce(
    (escapeGameList, item) => {
      escapeGameList[item.slug] = item; // Using 'id' property as key
      return escapeGameList;
    },
    {}
  );
  let retArr = [];

  for (let i = 0; i < escapeGameList.length; i++) {
    let aSlug = escapeGameList[i].attributes.activitySlug;

    if (
      escapeGameList[i].attributes.activityInfo.category == "Escape Games" &&
      escapeGameObj[aSlug] &&
      escapeGameObj[aSlug].activeAll
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
          : escapeGameObj[aSlug].gameType,
        gameName: escapeGameList[i].attributes.activityName
          ? escapeGameList[i].attributes.activityName
          : escapeGameObj[aSlug].gameName,
        slug: escapeGameList[i].attributes.activitySlug
          ? escapeGameList[i].attributes.activitySlug
          : escapeGameObj[aSlug].slug,
        gameCardData: escapeGameObj[aSlug].gameCardData,
        videoData: {
          url: escapeGameObj[aSlug].gameCardData.video.url
            ? escapeGameObj[aSlug].gameCardData.video.url
            : "/assets/escape-game/videos/escape-from-alcatraz.mp4",
          thumbnail: escapeGameObj[aSlug].gameCardData.poster.url
            ? escapeGameData[aSlug].gameCardData.poster.url
            : "/assets/escape-game/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        },
        listCardBgImage: escapeGameObj[aSlug].gameCardData.cardBgImage
          ? escapeGameObj[aSlug].gameCardData.cardBgImage
          : {
              url: "/assets/escape-game/card-bg/all-in-adventures-escape-from-alcatraz-card-bg.png",
              alt: "all in adventures ESCAPE FROM ALCATRAZ",
              width: "",
              height: "",
            },
        gameInfo: {
          gameTitle: escapeGameList[i].attributes.activityName
            ? escapeGameList[i].attributes.activityName
            : escapeGameObj[aSlug].gameName,
          slug: escapeGameList[i].attributes.activitySlug
            ? escapeGameList[i].attributes.activitySlug
            : escapeGameObj[aSlug].slug,
          shortDescription: escapeGameList[i].attributes.activitySlider
            .sliderText
            ? escapeGameList[i].attributes.activitySlider.sliderText
            : escapeGameObj[aSlug].gameCardData.text,
          price:
            escapeGameList[i].attributes.activityInfo.price.length > 0
              ? escapeGameList[i].attributes.activityInfo.price[fromPrice].Price
              : escapeGameObj[aSlug].gameInfo.price,
          age: escapeGameList[i].attributes.activityInfo.age
            ? escapeGameList[i].attributes.activityInfo.age
            : escapeGameObj[aSlug].gameInfo.age,
          duration: escapeGameList[i].attributes.activityInfo.duration
            ? escapeGameList[i].attributes.activityInfo.duration
            : escapeGameObj[aSlug].gameInfo.duration,
          successRate: escapeGameList[i].attributes.activityInfo.successRate
            ? escapeGameList[i].attributes.activityInfo.successRate
            : escapeGameObj[aSlug].gameInfo.successRate,
          teamSize: escapeGameList[i].attributes.activityInfo.teamSize
            ? escapeGameList[i].attributes.activityInfo.teamSize
            : escapeGameObj[aSlug].gameInfo.teamSize,
          teamSizeLabel: escapeGameList[i].attributes.activityInfo.teamSizeLabel
            ? escapeGameList[i].attributes.activityInfo.teamSizeLabel
            : escapeGameObj[aSlug].gameInfo.teamSizeLabel,
          gameTheme: escapeGameObj[aSlug].gameInfo.gameTheme,
          recommendFor: escapeGameObj[aSlug].gameInfo.recommendFor,
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
          teamSize: escapeGameList[i].attributes.activityInfo.teamSize
            ? escapeGameList[i].attributes.activityInfo.teamSize
            : otherGameData[aSlug].gameInfo.teamSize,
          teamSizeLabel: escapeGameList[i].attributes.activityInfo.teamSizeLabel
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

//===========location data format
const fomatLocEscapeGameList = ({ escapeGameList, bookingInfo }) => {
  let retArr = [];
  let newGameData = escapeGameRootPageData.reduce(
    (accumulator, currentObject) => {
      accumulator[currentObject.slug] = currentObject; // Using 'id' as the key
      return accumulator;
    },
    {}
  );

  for (let i = 0; i < escapeGameList.length; i++) {
    let aSlug = escapeGameList[i].activity.data.attributes.activitySlug;

    if (
      escapeGameList[i].activity.data.attributes.activityInfo.category ==
        "Escape Games" &&
      newGameData[aSlug].activeAll
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
          : newGameData[aSlug].gameType,
        gameName: escapeGameList[i].activity.data.attributes.activityName
          ? escapeGameList[i].activity.data.attributes.activityName
          : newGameData[aSlug].gameName,
        slug: escapeGameList[i].activity.data.attributes.activitySlug
          ? escapeGameList[i].activity.data.attributes.activitySlug
          : newGameData[aSlug].slug,
        gameCardData: newGameData[aSlug].gameCardData,
        videoData: {
          url: newGameData[aSlug].gameCardData.video.url
            ? newGameData[aSlug].gameCardData.video.url
            : "/assets/escape-games/videos/escape-from-alcatraz.mp4",
          thumbnail: newGameData[aSlug].gameCardData.poster.url
            ? newGameData[aSlug].gameCardData.poster.url
            : "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        },
        listCardBgImage: newGameData[aSlug].gameCardData.cardBgImage
          ? newGameData[aSlug].gameCardData.cardBgImage
          : {
              url: "/assets/escape-games/card-bg/all-in-adventures-escape-from-alcatraz-card-bg.png",
              alt: "all in adventures ESCAPE FROM ALCATRAZ",
              width: "",
              height: "",
            },
        gameInfo: {
          gameTitle: escapeGameList[i].activity.data.attributes.activityName
            ? escapeGameList[i].activity.data.attributes.activityName
            : newGameData[aSlug].gameName,
          slug: escapeGameList[i].activity.data.attributes.activitySlug
            ? escapeGameList[i].activity.data.attributes.activitySlug
            : newGameData[aSlug].slug,
          shortDescription: escapeGameList[i].activity.data.attributes
            .activitySlider.sliderText
            ? escapeGameList[i].activity.data.attributes.activitySlider
                .sliderText
            : newGameData[aSlug].gameCardData.text,
          price: fromPrice,
          age: escapeGameList[i].activity.data.attributes.activityInfo.age
            ? escapeGameList[i].activity.data.attributes.activityInfo.age
            : newGameData[aSlug].gameInfo.age,
          duration:
            escapeGameList[i].activity.data.attributes.activityInfo.duration !==
            null
              ? escapeGameList[i].activity.data.attributes.activityInfo.duration
              : newGameData[aSlug].gameInfo.duration,
          successRate:
            escapeGameList[i].activity.data.attributes.activityInfo
              .successRate !== null
              ? escapeGameList[i].activity.data.attributes.activityInfo
                  .successRate
              : newGameData[aSlug].gameInfo.successRate,
          teamSize: fTeamSize
            ? fTeamSize
            : newGameData[aSlug].gameInfo.teamSize,
          teamSizeLabel: fTeamSizeLabel
            ? fTeamSizeLabel
            : newGameData[aSlug].gameInfo.teamSizeLabel,
          gameTheme: newGameData[aSlug].gameInfo.gameTheme,
          recommendFor: newGameData[aSlug].gameInfo.recommendFor,
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
  let newGameData = OtherGameListData.reduce((accumulator, currentObject) => {
    accumulator[currentObject.slug] = currentObject; // Using 'id' as the key
    return accumulator;
  }, {});
  for (let i = 0; i < escapeGameList.length; i++) {
    let aSlug = escapeGameList[i].activity.data.attributes.activitySlug;

    if (
      escapeGameList[i].activity.data.attributes.activityInfo.category ==
        "Others" &&
      newGameData[aSlug].activeAll
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
          : newGameData[aSlug].gameType,
        gameName: escapeGameList[i].activity.data.attributes.activityName
          ? escapeGameList[i].activity.data.attributes.activityName
          : newGameData[aSlug].gameName,
        slug: escapeGameList[i].activity.data.attributes.activitySlug
          ? escapeGameList[i].activity.data.attributes.activitySlug
          : newGameData[aSlug].slug,
        gameCardData: newGameData[aSlug].gameCardData,
        videoData: {
          url: newGameData[aSlug].gameCardData.video.url
            ? newGameData[aSlug].gameCardData.video.url
            : "/assets/escape-games/videos/escape-from-alcatraz.mp4",
          thumbnail: newGameData[aSlug].gameCardData.poster.url
            ? newGameData[aSlug].gameCardData.poster.url
            : "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        },
        listCardBgImage: newGameData[aSlug].gameCardData.cardBgImage
          ? newGameData[aSlug].gameCardData.cardBgImage
          : {
              url: "/assets/escape-games/card-bg/all-in-adventures-escape-from-alcatraz-card-bg.png",
              alt: "all in adventures ESCAPE FROM ALCATRAZ",
              width: "",
              height: "",
            },
        gameInfo: {
          gameTitle: escapeGameList[i].activity.data.attributes.activityName
            ? escapeGameList[i].activity.data.attributes.activityName
            : newGameData[aSlug].gameTitle,
          slug: escapeGameList[i].activity.data.attributes.activitySlug
            ? escapeGameList[i].activity.data.attributes.activitySlug
            : newGameData[aSlug].slug,
          shortDescription: escapeGameList[i].activity.data.attributes
            .activitySlider.sliderText
            ? escapeGameList[i].activity.data.attributes.activitySlider
                .sliderText
            : newGameData[aSlug].gameCardData.text,
          price: fromPrice,
          age: escapeGameList[i].activity.data.attributes.activityInfo.age
            ? escapeGameList[i].activity.data.attributes.activityInfo.age
            : newGameData[aSlug].gameInfo.age,
          duration:
            escapeGameList[i].activity.data.attributes.activityInfo.duration !==
            null
              ? escapeGameList[i].activity.data.attributes.activityInfo.duration
              : newGameData[aSlug].gameInfo.duration,
          successRate:
            escapeGameList[i].activity.data.attributes.activityInfo
              .successRate !== null
              ? escapeGameList[i].activity.data.attributes.activityInfo
                  .successRate
              : newGameData[aSlug].gameInfo.successRate,
          teamSize: fTeamSize
            ? fTeamSize
            : newGameData[aSlug].gameInfo.teamSize,
          teamSizeLabel: fTeamSizeLabel
            ? fTeamSizeLabel
            : newGameData[aSlug].gameInfo.teamSizeLabel,
          gameTheme: newGameData[aSlug].gameInfo.gameTheme,
          recommendFor: newGameData[aSlug].gameInfo.recommendFor,
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
//===========escape game page data format
export const escapeGamePageDataFormater = {
  pageHeroData: function (data) {
    let newData = escapeGameRootPageData.find(
      (obj) => obj.slug === data.activitySlug
    );
    return {
      pageTitle: data.pageHeroData.pageTitle
        ? data.pageHeroData.pageTitle
        : data.gameName + " ESCAPE ROOM",
      pageSubTitle: data.pageHeroData.pageSubTitle
        ? data.pageHeroData.pageSubTitle
        : newData.pageHeroData.pageSubTitle,
      heroBgVideo: newData.pageHeroData.heroBgVideo,
      // videoScreen: newData.pageHeroData.videoScreen,
      themeImage: newData.pageHeroData.themeImage,
      // videoScreen: homePageData.pageHeroData.videoScreen,
    };
  },
  storyLineSectionData: function (data) {
    let newData = escapeGameRootPageData.find(
      (obj) => obj.slug === data.activitySlug
    );

    if (data.locActivityData) {
      let stObj = {
        teamSize: data.locActivityData.teamSize
          ? data.locActivityData.teamSize
          : newData.gameInfo.teamSize,
        // teamSizeLabel: activityInfo.teamSizeLabel  ? activityInfo.teamSizeLabel : newData.gameInfo.teamSizeLabel,
        teamSizeLabel: newData.gameInfo.teamSizeLabel,
        age: data.locActivityData.activityInfo.age
          ? data.locActivityData.activityInfo.age
          : newData.gameInfo.age,
        duration: data.locActivityData.activityInfo.duration
          ? data.locActivityData.activityInfo.duration
          : newData.gameInfo.duration,
        successRate: data.locActivityData.activityInfo.successRate
          ? data.locActivityData.activityInfo.successRate
          : newData.gameInfo.successRate,

        //  price:data.activityInfo.price.length > 0? data.activityInfo.price[data.activityInfo.price.length - 1]: newData.gameInfo.successRate.price, // price data arry "26.99",
        gameTheme: newData.gameInfo.gameTheme,
        recommendFor: newData.gameInfo.recommendFor,
        storyLineTitle: newData.gameInfo.storyLineTitle,
        storyLine: newData.gameInfo.storyLine,
        storyLineBgImage: newData.gameInfo.storyLineBgImage,
      };
      return stObj;
    }
    let retObj = {
      teamSize: data.activityInfo.teamSize
        ? data.activityInfo.teamSize
        : newData.gameInfo.teamSize,
      // teamSizeLabel: activityInfo.teamSizeLabel  ? activityInfo.teamSizeLabel : newData.gameInfo.teamSizeLabel,
      teamSizeLabel: newData.gameInfo.teamSizeLabel,
      age: data.activityInfo.age ? data.activityInfo.age : newData.gameInfo.age,
      duration: data.activityInfo.duration
        ? data.activityInfo.age
        : newData.gameInfo.duration,
      successRate: data.activityInfo.successRate
        ? data.activityInfo.successRate
        : newData.gameInfo.successRate,

      //  price:data.activityInfo.price.length > 0? data.activityInfo.price[data.activityInfo.price.length - 1]: newData.gameInfo.successRate.price, // price data arry "26.99",
      gameTheme: newData.gameInfo.gameTheme,
      recommendFor: newData.gameInfo.recommendFor,
      storyLineTitle: newData.gameInfo.storyLineTitle,
      storyLine: newData.gameInfo.storyLine,
      storyLineBgImage: newData.gameInfo.storyLineBgImage,
    };
    return retObj;
  },
  gallerySectionDataData: function (data) {
    let newData = escapeGameRootPageData.find(
      (obj) => obj.slug === data.activitySlug
    );
    const defGvideo = {
      url: "/assets/mobile-escape-room/gallery/Mobile-escape-room-gallery.mp4",
      videoScreen: {
        id: 1,
        url: "/assets/mobile-escape-room/hero/Mobile-Escape-Room-thumbnail.png",
        alt: "All in adventure escape toymaker's workshop youtube video",
        name: "Mobile-Escape-Room-thumbnail.png",
        width: "1872",
        height: "1035",
      },
    };
    let retData = {
      //sectionTitle: data.gallerySectionData.galleryTitle? data.gallerySectionData.galleryTitle: newData.gallerySectionData.sectionTitle,
      //sectionSubTitle:  data.gallerySectionData.gallerySubTitle? data.gallerySectionData.galleryTitle: newData.gallerySectionData.sectionSubTitle,
      sectionTitle: newData.gallerySectionData.sectionTitle
        ? newData.gallerySectionData.sectionTitle
        : "ESCAPE ROOM " + data.activityName.toUpperCase() + " GALLERY",
      sectionSubTitle: newData.gallerySectionData.sectionSubTitle
        ? newData.gallerySectionData.sectionSubTitle
        : "Discover the excitement and smiles from birthday parties at All In Adventures! Check out real moments of fun, teamwork, and celebration that make every party unforgettable.",
      galleryImages: newData.gallerySectionData.galleryImages,
      galleryVideo: newData.gallerySectionData.galleryVideo
        ? newData.gallerySectionData.galleryVideo
        : defGvideo,
    };
    return retData;
  },
  mooreEscapeGameCarouselSection: function (data) {
    let newData = escapeGameRootPageData.find(
      (obj) => obj.slug === data.activitySlug
    );
    let otherEscapeGamePosterList = () => {
      arrayOfObjects.map((obj) => obj.name);
    };

    if (data.locEscapeGameList) {
      let locRetData = {
        sectionTitle: newData.moreEscapeRoomCarouselSectionData.sectionTitle,
        sectionSubTitle:
          newData.moreEscapeRoomCarouselSectionData.sectionSubTitle,
        moreEscapeGameList: otherLocEscapeGameList(
          data.activitySlug,
          data.locEscapeGameList,
          data.locBookingInfo
        ),
      };
      return locRetData;
    }

    let retData = {
      sectionTitle: newData.moreEscapeRoomCarouselSectionData.sectionTitle,
      sectionSubTitle:
        newData.moreEscapeRoomCarouselSectionData.sectionSubTitle,
      moreEscapeGameList: otherEscapeGameList({
        activitySlug: data.activitySlug,
      }),
    };

    return retData;
  },
};
//===========activity list page data format
export const activityListPageDataFormeter = {
  pageHeroData: function (data) {
    if (data.locationSlug) {
      let loRetObj = {
        // pageTitle: data.locPageResData.pageTitle? data.locPageResData.pageTitle : "Top Family-friendly ESCAPE ROOMS near you IN "+locationName,
        pageTitle:
          "Top Family-friendly ESCAPE ROOMS near you IN " + data.locationName,
        pageSubTitle: data.locPageResData.pageSubtitle
          ? data.locPageResData.pageSubtitle
          : escapeGameRootListPageData.pageHeroData.pageSubTitle,
        // pageSubTitle: escapeGameRootListPageData.pageHeroData.pageSubTitle,
        heroBgVideo: escapeGameRootListPageData.pageHeroData.heroBgVideo,
        // videoScreen: homePageData.pageHeroData.videoScreen,
        heroInfo: {
          escapeRooms: data.totalActivities,
          age: "6+",
          // age: homePageData.pageHeroData.heroInfo.age,
          review: data.locationInfo.raveReviews
            ? data.locationInfo.raveReviews
            : escapeGameRootListPageData.pageHeroData.heroInfo.review,
          geustServed: data.locationInfo.guestsServed
            ? data.locationInfo.guestsServed
            : escapeGameRootListPageData.pageHeroData.heroInfo.geustServed,
        },
      };
      return loRetObj;
    }

    return {
      pageTitle: data.pageResData.pageTitle
        ? data.pageResData.pageTitle
        : escapeGameRootListPageData.pageHeroData.pageTitle,
      pageSubTitle: data.pageResData.pageSubtitle
        ? data.pageResData.pageSubtitle
        : escapeGameRootListPageData.pageHeroData.pageSubTitle,
      // pageSubTitle: escapeGameRootListPageData.pageHeroData.pageSubTitle,
      heroBgVideo: escapeGameRootListPageData.pageHeroData.heroBgVideo,
      // videoScreen: homePageData.pageHeroData.videoScreen,
      heroInfo: {
        escapeRooms: data.totalActivities,
        age: "6+",
        // age: homePageData.pageHeroData.heroInfo.age,
        review: data.pageResData.pageInfo.raveReviews
          ? data.pageResData.pageInfo.raveReviews
          : escapeGameRootListPageData.pageHeroData.heroInfo.review,
        geustServed: data.pageResData.pageInfo.guestsServed
          ? data.pageResData.pageInfo.guestsServed
          : escapeGameRootListPageData.pageHeroData.heroInfo.geustServed,
      },
    };
  },
  storeAreaMapSectionData: function (locationSlug) {
    if (
      locationHomePageTempData[locationSlug] &&
      locationHomePageTempData[locationSlug].storeAreaMapSectionData
    ) {
      return locationHomePageTempData[locationSlug].storeAreaMapSectionData;
    }
    return locationHomePageTempData["default"].storeAreaMapSectionData;
  },
  escapeGameListSectionData: function (data) {
    if (data.locationSlug) {
      let locRetObj = {
        sectionTitle: data.pageResData.escapeGameListTitle
          ? data.pageResData.escapeGameListTitle
          : escapeGameRootListPageData.escapeGameListSectionData.sectionTitle,
        // sectionSubTitle: data.pageResData.escapeGameListSubtitle ? data.pageResData.escapeGameListSubtitle : escapeGameRootListPageData.escapeGameListSectionData.sectionSubTitle,
        sectionSubTitle:
          escapeGameRootListPageData.escapeGameListSectionData.sectionSubTitle,
        gameThemeList: escapeGameThemeList,
        recommendList: escapeGameRecommendList,
        escapeGameList: fomatLocEscapeGameList({
          escapeGameList: data.fetchGameList,
          bookingInfo: data.bookingInfo,
        }),
      };
      return locRetObj;
    }
    let retData = {
      sectionTitle: data.pageResData.escapeGameListTitle
        ? data.pageResData.escapeGameListTitle
        : escapeGameRootListPageData.escapeGameListSectionData.sectionTitle,
      // sectionSubTitle: data.pageResData.escapeGameListSubtitle ? data.pageResData.escapeGameListSubtitle : escapeGameRootListPageData.escapeGameListSectionData.sectionSubTitle,

      sectionSubTitle:
        escapeGameRootListPageData.escapeGameListSectionData.sectionSubTitle,

      gameThemeList: escapeGameThemeList,
      recommendList: escapeGameRecommendList,
      escapeGameList: fomatEscapeGameList(data.fetchGameList),
    };
    return retData;
  },
  otherGameListSectionData: function (data) {
    if (data.locationSlug) {
      let locOtGameArr = otherLocGameList({
        escapeGameList: data.fetchGameList,
        bookingInfo: data.bookingInfo,
      });
      let locRetObj = {
        hasGames: locOtGameArr.length > 0 ? true : false,
        // sectionTitle:  data.sectionData.otherGameTitle !== null  ? data.sectionData.otherGameTitle  : homePageTempData.otherGameListSectionData.sectionTitle,
        // sectionSubTitle:data.sectionData.otherGameSubTitle !== null ? data.sectionData.otherGameSubTitle: homePageTempData.otherGameListSectionData.sectionSubTitle,
        sectionTitle: data.pageResData.otherGameListTitle
          ? data.pageResData.otherGameListTitle
          : escapeGameRootListPageData.otherGameListSectionData.sectionTitle,
        //    pageResData.otherGameListSubtitle;,

        //    pageResData.otherGameListSubtitle;
        sectionSubTitle: data.pageResData.otherGameListTitle
          ? data.pageResData.otherGameListSubtitle
          : escapeGameRootListPageData.otherGameListSectionData.sectionSubTitle,
        otherGameList: locOtGameArr,
      };
      return locRetObj;
    }
    //===============for root page
    let otArr = otherGameList(data.fetchGameList);
    let retData = {
      hasGames: otArr.length > 0 ? true : false,
      // sectionTitle:  data.sectionData.otherGameTitle !== null  ? data.sectionData.otherGameTitle  : homePageTempData.otherGameListSectionData.sectionTitle,
      // sectionSubTitle:data.sectionData.otherGameSubTitle !== null ? data.sectionData.otherGameSubTitle: homePageTempData.otherGameListSectionData.sectionSubTitle,
      sectionTitle: data.pageResData.otherGameListTitle
        ? data.pageResData.otherGameListTitle
        : escapeGameRootListPageData.otherGameListSectionData.sectionTitle,
      //    pageResData.otherGameListSubtitle;,

      //    pageResData.otherGameListSubtitle;
      sectionSubTitle: data.pageResData.otherGameListTitle
        ? data.pageResData.otherGameListSubtitle
        : escapeGameRootListPageData.otherGameListSectionData.sectionSubTitle,
      otherGameList: otArr,
    };
    return retData;
  },
  eventCarouselSectionData: function () {
    let retData = {
      sectionTitle:
        escapeGameRootListPageData.eventCarouselSectionData.sectionTitle,
      sectionSubTitle:
        escapeGameRootListPageData.eventCarouselSectionData.sectionSubTitle,
      eventCarouselList: getEventCarouselList(),
    };
    return retData;
  },
  faqSectionData: function () {
    let retData = {
      sectionTitle: escapeGameRootListPageData.faqSectionData.sectionTitle,
      sectionSubTitle:
        escapeGameRootListPageData.faqSectionData.sectionSubTitle,
      faqList: escapeGameRootListPageData.faqSectionData.faqList,
    };

    return retData;
  },
};
