import { formatImage } from "./formateUtil";
import {
  escapeGameData,
  escapeGameRootPageData,
  escapeGameThemeList,
  escapeGameRecommendList,
} from "../data/escapeGameTempData";
import { otherGameData } from "../data/otherGameTempData";

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
      heroBgVideo: newData.pageHeroData.pageHeroData.heroBgVideo,
      videoScreen: newData.pageHeroData.pageHeroData.videoScreen,
      themeImage: newData.pageHeroData.themeImage,
      // videoScreen: homePageData.pageHeroData.videoScreen,

      bookingInfo: data.bookingInfo ? data.bookingInfo : false,
    };
  },
  storyLineSectionData: function (data) {
    let newData = escapeGameRootPageData.find(
      (obj) => obj.slug === data.activitySlug
    );
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
