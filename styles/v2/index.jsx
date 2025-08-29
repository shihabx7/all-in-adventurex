import { useState } from "react";
import Script from "next/script";
import { rootHomePageData } from "../api/v2/root/rootHomePageData";

//import SinglePageSeo from "../comps/util/SinglePageSeo";
import DarkBgKeyPatternBgSection from "../../comps/v2/sharedComs/DarkBgKeyPatternBgSection";
import SinglePageSeo from "../../comps/util/SinglePageSeo";
import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";

import HomePageHeroVideoBgSection from "../../comps/v2/homePageComps/sections/HomePageHeroVideoBgSection";
import HomeAboutSection from "../../comps/v2/homePageComps/sections/HomeAboutSection";
import EscapeGamesListSection from "../../comps/v2/homePageComps/sections/EscapeGamesListSection";
import OtherGameSection from "../../comps/v2/homePageComps/sections/OtherGameSection";
import EventCarouselSection from "../../comps/v2/homePageComps/sections/EventCarouselSection";

import MobileEscapeGameRootHomeSection from "../../comps/mobileEscapeGames/MobileEscapeGameRootHomeSection";
import GiftCardHomePageSection from "../../comps/giftCardPageComps/GiftCardHomePageSection";

import TestimonialVideoCarouselSection from "../../comps/v2/testimonialPageComps/TestimonialVideoCarouselSection";
import HomePageVideoTestimonialSection from "../../comps/v2/homePageComps/sections/HomePageVideoTestimonialSection";
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
        <DarkBgKeyPatternBgSection>
          <EscapeGamesListSection
            escapeGameListSectionData={props.escapeGameListSectionData}
          />
          {props.otherGameListSectionData.hasGames && (
            <OtherGameSection
              otherGameSectionData={props.otherGameListSectionData}
            />
          )}
        </DarkBgKeyPatternBgSection>
        <EventCarouselSection
          eventCarouselSectionData={props.eventCarouselSectionData}
        />
        <MobileEscapeGameRootHomeSection
          setShowMobileEecapeMenu={setShowMobileEecapeMenu}
          setGoMobileEecapeForm={setGoMobileEecapeForm}
          goMobileEecapeForm={goMobileEecapeForm}
        />
        <GiftCardHomePageSection
          setShowGiftBookingList={setShowGiftBookingList}
          locationSlugList={props.locationSlugList}
        />
        <HomePageVideoTestimonialSection
          sectionData={props.testimonialVideoCarouselSectionData}
        />
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
  //  console.log(DATA.eventCarouselSectionData);

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
      eventCarouselSectionData: DATA.eventCarouselSectionData,
      testimonialVideoCarouselSectionData:
        DATA.testimonialVideoCarouselSectionData,

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
