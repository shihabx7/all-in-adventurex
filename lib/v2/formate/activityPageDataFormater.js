import { formatImage } from "./formateUtil";
import {
  escapeGameData,
  escapeGameThemeList,
  escapeGameRecommendList,
} from "../data/escapeGameTempData";
import { otherGameData } from "../data/otherGameTempData";

export const escapeGamePageDataFormater = {
  pageHeroData: function (data) {
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
  storyLineSectionData: function (data) {
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
  gallerySectionDataData: function (data) {
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
  escapeGameCarouselSection: function (data) {
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
};
