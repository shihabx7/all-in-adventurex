import { useState } from "react";
import Script from "next/script";
import { rootHomePageData } from "../api/v2/root/rootHomePageData";

//import SinglePageSeo from "../comps/util/SinglePageSeo";
import HomePageGameListBg from "../../comps/v2/sharedComs/HomePageGameListBg";
import SinglePageSeo from "../../comps/util/SinglePageSeo";
import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";

import HomePageHeroVideoBgSection from "../../comps/v2/homePageComps/sections/HomePageHeroVideoBgSection";
import HomeAboutSection from "../../comps/v2/homePageComps/sections/HomeAboutSection";
import EscapeGamesListSection from "../../comps/v2/homePageComps/sections/EscapeGamesListSection";
import OtherGameSection from "../../comps/v2/homePageComps/sections/OtherGameSection";
import EventCardListSection from "../../comps/v2/homePageComps/sections/EventCardListSection";

import MobileEscapeRoomHomeSection2 from "../../comps/mobileEscapeGames/MobileEscapeRoomHomeSection2";
import GiftCardHomePageSection2 from "../../comps/giftCardPageComps/GiftCardHomePageSection2";
import LightBrownBgSection from "../../comps/v2/sharedComs/LightBrownBgSection";
import TestimonialCarouselSection from "../../comps/v2/testimonialPageComps/sections/TestimonialCarouselSection";
import UnlockYourBundleSection from "../../comps/bundle/UnlockYourBundleSection";
import UnlimitedEscapeGameMenu from "../../comps/unlimitedEscapeRoom/UnlimitedEscapeGameMenu";
import GiftCardBookingMenu from "../../comps/giftCardPageComps/GiftCardBookingMenu";

import MobileEscapeRootMenu from "../../comps/mobileEscapeGames/MobileEscapeRootMenu";
export default function Home(props) {
  const [showUerBookingList, setShowUerBookingList] = useState(false);
  const [showGiftBookingList, setShowGiftBookingList] = useState(false);
  const [showMobileEecapeMenu, setShowMobileEecapeMenu] = useState(false);
  const [goMobileEecapeForm, setGoMobileEecapeForm] = useState(false);
  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
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

      <div id="mainContent" className="main-content min-h-screen bg-slate-100">
        <HomePageHeroVideoBgSection pageHeroData={props.pageHeroData} />
        <HomeAboutSection sectionData={props.aboutSectionData} />
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
        <UnlockYourBundleSection />
        <EventCardListSection sectionData={props.eventCardListSectionData} />
        <MobileEscapeRoomHomeSection2
          setShowMobileEecapeMenu={setShowMobileEecapeMenu}
          setGoMobileEecapeForm={setGoMobileEecapeForm}
          goMobileEecapeForm={goMobileEecapeForm}
        />
        <GiftCardHomePageSection2
          setShowGiftBookingList={setShowGiftBookingList}
          locationSlugList={props.locationSlugList}
        />
        <LightBrownBgSection>
          <TestimonialCarouselSection
            sectionData={props.testimonialCarouselSectionData}
          />
        </LightBrownBgSection>
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const DATA = await rootHomePageData();
  //  console.log(DATA.pageHeroData);

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
      pageHeroData: DATA.pageHeroData,
      aboutSectionData: DATA.aboutSectionData,
      escapeGameListSectionData: DATA.escapeGameListSectionData,
      otherGameListSectionData: DATA.otherGameListSectionData,
      eventCardListSectionData: DATA.eventCardListSectionData,
      testimonialVideoSectionData: DATA.testimonialVideoSectionData,
      testimonialCarouselSectionData: DATA.testimonialCarouselSectionData,

      //pageData: DATA.pageData,
      //pageVideo: DATA.pageVideo,
      // escapeGameList: DATA.escapeGameList,
      //  otherGameList: DATA.otherGameList,
      //  eventList: DATA.eventList,
      //  testimonialList: DATA.testimonialList,
    },

    // - At most once every 30 seconds
    revalidate: 30,
  };
};
