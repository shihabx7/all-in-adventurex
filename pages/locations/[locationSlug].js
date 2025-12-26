import { useState } from "react";
import Script from "next/script";
import { getLocationSlugUrl } from "../api/Locations/getLocationSlugUrls";
import { getLocationHomePageData } from "../api/Locations/getLocationHomePageData";
//=========================================================== page section ui

// import PageBread from "../../comps/util/PageBread";
// import LocationHero from "../../comps/locationsPage/LocationHero";
// import PageVideo from "../../comps/homepagecomps/PageVideo";
// import EscaeGameSlider from "../../comps/homepagecomps/EscaeGameSlider";
// import OtherGameSlider from "../../comps/homepagecomps/OtherGameSlider";
// import UnlimitedEscapeRoomHome from "../../comps/unlimitedEscapeRoom/UnlimitedEscapeRoomHome";
// import GiftCards from "../../comps/homepagecomps/GiftCards";
// import TestimonialSlider from "../../comps/homepagecomps/TestimonialSlider";
// import MobileEscapeGameHomeSection from "../../comps/mobileEscapeGames/MobileEscapeGameHomeSection";

import PageBreedLoc from "../../comps/util/PageBreedLoc";
import PageSeo from "../../comps/util/PageSeo";
import LocationNav from "../../comps/locationsPage/LocationNav";

import EventSlider from "../../comps/homepagecomps/EventSlider";
import GiftCardHomePageSection from "../../comps/giftCardPageComps/GiftCardHomePageSection";
import WhatIsEscape from "../../comps/homepagecomps/WhatIsEscape";
import WhoCanplay from "../../comps/homepagecomps/WhoCanPlay";
import TestimonialLocSlider from "../../comps/homepagecomps/TestimonialLocSlider";
import LocationDetails from "../../comps/locationsPage/LocationDetails";
import LocationFooter from "../../comps/locationsPage/LocationFooter";
import MobileMysteryOtherPageSection from "../../comps/mobileEscapeGames/section/MobileMysteryOtherPageSection";
import UnlimitedEscapeGameMenu from "../../comps/unlimitedEscapeRoom/UnlimitedEscapeGameMenu";
import UnlockYourBundleSection from "../../comps/bundle/UnlockYourBundleSection";

//==============================================================================================================v2
import HomePageHeroVideoBgSection from "../../comps/v2/homePageComps/sections/HomePageHeroVideoBgSection";
// ==========================+++import HomeAboutSection from "../../comps/v2/homePageComps/sections/HomeAboutSection";
import HomePageGameListBg from "../../comps/v2/sharedComs/HomePageGameListBg";
import EscapeGamesListSection from "../../comps/v2/homePageComps/sections/EscapeGamesListSection";
import OtherGameSection from "../../comps/v2/homePageComps/sections/OtherGameSection";
import MobileMysteryCardSection from "../../comps/v2/homePageComps/sections/MobileMysteryCardSection";
import GiftCardSection from "../../comps/v2/homePageComps/sections/GiftCardSection";

const Locations = (props) => {
  /* customizing breadcum */
  const [showUerBookingList, setShowUerBookingList] = useState(false);

  return (
    <>
      {showUerBookingList && (
        <div className="uermenu">
          <UnlimitedEscapeGameMenu
            locationSlugList={props.locationSlugList}
            setShowUerBookingList={setShowUerBookingList}
          />
        </div>
      )}
      <PageSeo meta={props.pageMeta} />
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      {/* =======header content and breadcum======== */}
      <LocationNav
        isPublished={props.isPublished}
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
        locationName={props.locationName}
        locationSlug={props.locationSlug}
        allBooking={props.allBooking}
        hasMobileEscapeRoom={props.hasMobileEscapeRoom}
        giftBooking={props.giftBooking}
      />
      {/* =======header content and breadcum======== end */}
      <div id="mainContent" className="main-content">
        <PageBreedLoc
          locationName={props.locationName}
          locationSlug={props.locationSlug}
        />
        {/*
        <LocationHero
          pageData={props.pageData}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          isPublished={props.isPublished}
        />
        <PageVideo
          pageVideo={props.pageVideo}
          allBooking={props.allBooking}
          isPublished={props.isPublished}
        />
        <EscaeGameSlider
          escapeGameList={props.escapeGameList}
          locationSlug={props.locationSlug}
          isPublished={props.isPublished}
        />
        {props.otherGameList.hasGames &&
          <OtherGameSlider
            otherGameList={props.otherGameList}
            locationSlug={props.locationSlug}
            isPublished={props.isPublished}
          />}
          <UnlimitedEscapeRoomHome
          setShowUerBookingList={setShowUerBookingList}
          locationSlug={props.locationSlug}
        />
        */}
        {/*==============================================================================================v2===*/}

        <HomePageHeroVideoBgSection
          pageHeroData={props.pageHeroData}
          allBooking={props.allBooking}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
          locationName={props.locationName}
          locationSlug={props.locationSlug}
        />

        <HomePageGameListBg>
          <EscapeGamesListSection
            escapeGameListSectionData={props.escapeGameListSectionData}
            locationSlug={props.locationSlug}
          />
          {props.otherGameListSectionData.hasGames && (
            <OtherGameSection
              otherGameSectionData={props.otherGameListSectionData}
              locationSlug={props.locationSlug}
            />
          )}
          <MobileMysteryCardSection locationSlug={props.locationSlug} />
          <GiftCardSection
            locationSlug={props.locationSlug}
            giftBooking={props.giftBooking}
          />
        </HomePageGameListBg>

        {/*==========================================================================================v2 end===*/}
        <EventSlider
          eventList={props.eventList}
          locationSlug={props.locationSlug}
          isPublished={props.isPublished}
        />
        <UnlockYourBundleSection locationSlug={props.locationSlug} />

        {/*=========================================================================================
        {props.hasMobileEscapeRoom ? (
          <MobileMysteryOtherPageSection
            locationSlug={props.locationSlug}
            mobileEscapeRoomData={props.mobileEscapeRoomData}
          />
        ) : (
          <></>
        )}
        <GiftCardHomePageSection
          isPublished={props.isPublished}
          locationSlug={props.locationSlug}
          locationSlugList={props.locationSlugList}
          giftBooking={props.giftBooking}
        
        />
         <WhatIsEscape />
        <WhoCanplay />
        ===*/}

        <TestimonialLocSlider testimonialList={props.testimonialList} />
        <LocationDetails
          mapInfo={props.mapInfo}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
          locationName={props.locationName}
          locationSlug={props.locationSlug}
        />

        <LocationFooter
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          locationSlugList={props.locationSlugList}
          totalLocations={props.totalLocations}
        />
      </div>
    </>
  );
};

export default Locations;

export const getStaticPaths = async () => {
  const res = await getLocationSlugUrl();

  const paths = res.map((slug) => {
    return {
      params: { locationSlug: slug.locationSlug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  /*
  try {
    res = await getLocationHomePageData(context.params.locationSlug);
  } catch (error) {
    console.log("Reponse err. page not found");
    errFlag = false;
  }
  if (!errFlag) {
    return {
      redirect: {
        permanent: false, // or true
        destination: "/404",
      },
    };
  } 
  */
  const DATA = await getLocationHomePageData(context.params.locationSlug);
  // const DATA = await getLocationHomePageData(context.params.locationSlug);
  //console.log("v2 data for " + DATA.locationSlug + " location");
  //console.log("page hero ");
  //console.log(JSON.stringify(DATA.pageHeroData, null, 2));
  //console.log("escape game ");
  //console.log(JSON.stringify(DATA.escapeGameListSectionData, null, 2));
  //console.log("other game");
  //console.log(JSON.stringify(DATA.otherGameListSectionData, null, 2));

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,

      locationName: DATA.locationName,
      locationSlug: DATA.locationSlug,
      isPublished: DATA.isPublished,
      totalLocations: DATA.totalLocations,
      locationInfo: DATA.locationInfo,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      escapeGameList: DATA.escapeGameList,
      otherGameList: DATA.otherGameList,
      eventList: DATA.eventList,
      testimonialList: DATA.testimonialList,
      pageVideo: DATA.pageVideo,
      allBooking: DATA.allBooking,
      eventBooking: DATA.eventBooking,
      giftBooking: DATA.giftBooking,
      businessHours: DATA.businessHours,
      holidayHours: DATA.holidayHours,
      mapInfo: DATA.mapInfo,
      hasMobileEscapeRoom: DATA.hasMobileEscapeRoom,
      mobileEscapeRoomData: DATA.mobileEscapeRoomData,
      // toyMakerPageData: DATA.toyMakerPageData,
      //===================v2
      pageHeroData: DATA.pageHeroData,
      // aboutSectionData: DATA.aboutSectionData,
      escapeGameListSectionData: DATA.escapeGameListSectionData,
      otherGameListSectionData: DATA.otherGameListSectionData,
    },
    revalidate: 60,
  };
};
