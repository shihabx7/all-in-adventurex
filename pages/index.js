import { useState } from "react";
import { getHomePageData } from "./api/getHomePageData";
import SinglePageSeo from "../comps/util/SinglePageSeo";
import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";

//import PageSeo from "../comps/util/PageSeo";
//import HomeHero from "../comps/homepagecomps/HomeHero";
//import HomeHeroNew from "../comps/homepagecomps/HomeHeroNew";
//import PageVideoHome from "../comps/homepagecomps/PageVideoHome";
//import EscaeGameSlider from "../comps/homepagecomps/EscaeGameSlider";
//import OtherGameSlider from "../comps/homepagecomps/OtherGameSlider";
//import UnlimitedEscapeRoomHome from "../comps/unlimitedEscapeRoom/UnlimitedEscapeRoomHome";
//import GiftCards from "../comps/homepagecomps/GiftCards";

import EventSlider from "../comps/homepagecomps/EventSlider";
import GiftCardHomePageSection from "../comps/giftCardPageComps/GiftCardHomePageSection";
import WhatIsEscape from "../comps/homepagecomps/WhatIsEscape";
import WhoCanplay from "../comps/homepagecomps/WhoCanPlay";
import TestimonialSlider from "../comps/homepagecomps/TestimonialSlider";
import UnlimitedEscapeGameMenu from "../comps/unlimitedEscapeRoom/UnlimitedEscapeGameMenu";
import GiftCardBookingMenu from "../comps/giftCardPageComps/GiftCardBookingMenu";
import MobileMysteryOtherPageSection from "../comps/mobileEscapeGames/section/MobileMysteryOtherPageSection";
import MobileEscapeRootMenu from "../comps/mobileEscapeGames/MobileEscapeRootMenu";
import UnlockYourBundleSection from "../comps/bundle/UnlockYourBundleSection";
//======================= v2-----------------
import HomePageGameListBg from "../comps/v2/sharedComs/HomePageGameListBg";
import HomePageHeroVideoBgSection from "../comps/v2/homePageComps/sections/HomePageHeroVideoBgSection";
//------+ import HomeAboutSection from "../comps/v2/homePageComps/sections/HomeAboutSection"----------++ ;
import EscapeGamesListSection from "../comps/v2/homePageComps/sections/EscapeGamesListSection";
import OtherGameSection from "../comps/v2/homePageComps/sections/OtherGameSection";

export default function Home(props) {
  const [showUerBookingList, setShowUerBookingList] = useState(false);
  const [showGiftBookingList, setShowGiftBookingList] = useState(false);
  const [showMobileEecapeMenu, setShowMobileEecapeMenu] = useState(false);
  const [goMobileEecapeForm, setGoMobileEecapeForm] = useState(false);
  return (
    <>
      {showMobileEecapeMenu && (
        <MobileEscapeRootMenu
          locationSlugList={props.locationSlugList}
          setShowMobileEecapeMenu={setShowMobileEecapeMenu}
          setGoMobileEecapeForm={setGoMobileEecapeForm}
          goMobileEecapeForm={goMobileEecapeForm}
        />
      )}
      {showGiftBookingList && (
        <div className="gftmenu">
          <GiftCardBookingMenu
            locationSlugList={props.locationSlugList}
            setShowGiftBookingList={setShowGiftBookingList}
          />
        </div>
      )}
      {showUerBookingList && (
        <div className="uermenu">
          <UnlimitedEscapeGameMenu
            locationSlugList={props.locationSlugList}
            setShowUerBookingList={setShowUerBookingList}
          />
        </div>
      )}

      <SinglePageSeo meta={props.pageMeta} />
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
      />
      {/*console.log(props.locationSlugList)*/}
      <div id="mainContent" className="main-content">
        {/*
        <HomeHeroNew pageData={props.pageData} />
        <PageVideoHome pageVideo={props.pageVideo} />
        <EscaeGameSlider escapeGameList={props.escapeGameList} />
        <OtherGameSlider otherGameList={props.otherGameList} />
         <UnlimitedEscapeRoomHome setShowUerBookingList={setShowUerBookingList} />
         */}
        {/*==================v2==================================================================================== v2 ============= */}
        <HomePageHeroVideoBgSection pageHeroData={props.pageHeroData} />
        <HomePageGameListBg>
          <EscapeGamesListSection
            escapeGameListSectionData={props.escapeGameListSectionData}
          />
          {props.otherGameListSectionData.hasGames && (
            <OtherGameSection
              otherGameSectionData={props.otherGameListSectionData}
            />
          )}
        </HomePageGameListBg>
        {/*======================================================================================================== v2 ================ */}
        <UnlockYourBundleSection />
        <EventSlider eventList={props.eventList} />
        <MobileMysteryOtherPageSection
          setShowMobileEecapeMenu={setShowMobileEecapeMenu}
          setGoMobileEecapeForm={setGoMobileEecapeForm}
        />
        <GiftCardHomePageSection
          setShowGiftBookingList={setShowGiftBookingList}
          locationSlugList={props.locationSlugList}
        />
        <WhatIsEscape />
        <WhoCanplay />
        <TestimonialSlider testimonialList={props.testimonialList} />
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const DATA = await getHomePageData();
  // console.log("updated location slug list");
  // console.log(DATA.locationSlugList);
  return {
    props: {
      // locationlist: DATA.locationlist,
      // eventlistSlug: DATA.eventlistSlug,
      // activitylistSlug: DATA.activitylistSlug,
      totalLocations: DATA.totalLocations,
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      pageVideo: DATA.pageVideo,
      escapeGameList: DATA.escapeGameList,
      otherGameList: DATA.otherGameList,
      eventList: DATA.eventList,
      testimonialList: DATA.testimonialList,
      // ======================v2
      pageHeroData: DATA.pageHeroData,
      aboutSectionData: DATA.aboutSectionData,
      escapeGameListSectionData: DATA.escapeGameListSectionData,
      otherGameListSectionData: DATA.otherGameListSectionData,
    },
    // - At most once every 10 seconds
    revalidate: 60,
  };
};
