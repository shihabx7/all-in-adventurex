//import { getLocationSlugUrl } from "../api/Locations/getLocationSlugUrls";
import { useState } from "react";
import Script from "next/script";

import { getLocationSlugUrl } from "../../api/Locations/getLocationSlugUrls";
import { locationHomePageData } from "../../api/v2/locations/locationHomePageData";

import PageSeo from "../../../comps/util/PageSeo";
import LocationNav from "../../../comps/locationsPage/LocationNav";
import LocationFooter from "../../../comps/locationsPage/LocationFooter";
import PageBreedLoc from "../../../comps/util/PageBreedLoc";
import UnlimitedEscapeGameMenu from "../../../comps/unlimitedEscapeRoom/UnlimitedEscapeGameMenu";
import HomeAboutSection from "../../../comps/v2/homePageComps/sections/HomeAboutSection";
import HomePageGameListBg from "../../../comps/v2/sharedComs/HomePageGameListBg";
import HomePageHeroVideoBgSection from "../../../comps/v2/homePageComps/sections/HomePageHeroVideoBgSection";
import EscapeGamesListSection from "../../../comps/v2/homePageComps/sections/EscapeGamesListSection";
import OtherGameSection from "../../../comps/v2/homePageComps/sections/OtherGameSection";
import EventCardListSection from "../../../comps/v2/homePageComps/sections/EventCardListSection";
import HomePageVideoTestimonialSection from "../../../comps/v2/homePageComps/sections/HomePageVideoTestimonialSection";
import ToyMakerHomeSection from "../../../comps/toyMakerWorkStation/section/ToyMakerHomeSection";
import MobileEscapeRoomHomeSection2 from "../../../comps/mobileEscapeGames/MobileEscapeRoomHomeSection2";
import GiftCardHomePageSection from "../../../comps/giftCardPageComps/GiftCardHomePageSection";
import GiftCardHomePageSection2 from "../../../comps/giftCardPageComps/GiftCardHomePageSection2";
import UnlockYourBundleSection from "../../../comps/bundle/UnlockYourBundleSection";
export default function LocationsHomePage(props) {
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
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      <PageSeo meta={props.pageMeta} />

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
        <HomePageHeroVideoBgSection
          pageHeroData={props.pageHeroData}
          allBooking={props.allBooking}
        />
        <HomeAboutSection
          sectionData={props.aboutSectionData}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
          locationName={props.locationName}
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
        </HomePageGameListBg>
        <UnlockYourBundleSection locationSlug={props.locationSlug} />
        <EventCardListSection
          sectionData={props.eventCardListSectionData}
          locationSlug={props.locationSlug}
        />
        {props.toyMakerPageData && (
          <ToyMakerHomeSection
            sectionData={props.toyMakerPageData.homePageSectionData}
            bookingData={props.toyMakerPageData.bookingData}
            locationSlug={props.locationSlug}
          />
        )}
        {props.hasMobileEscapeRoom ? (
          <MobileEscapeRoomHomeSection2
            locationSlug={props.locationSlug}
            mobileEscapeRoomData={props.mobileEscapeRoomData}
          />
        ) : (
          <></>
        )}
        <GiftCardHomePageSection2
          isPublished={props.isPublished}
          locationSlug={props.locationSlug}
          locationSlugList={props.locationSlugList}
          giftBooking={props.giftBooking}
        />
        <HomePageVideoTestimonialSection
          sectionData={props.testimonialVideoCarouselSectionData}
        />
      </div>
      <LocationFooter
        locationName={props.locationName}
        locationSlug={props.locationSlug}
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
}

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
  const DATA = await locationHomePageData(context.params.locationSlug);
  // const DATA = await getLocationHomePageData(context.params.locationSlug);
  //  console.log(DATA);
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
      mapInfo: DATA.mapInfo,
      businessHours: DATA.businessHours,
      holidayHours: DATA.holidayHours,
      allBooking: DATA.allBooking,
      eventBooking: DATA.eventBooking,
      giftBooking: DATA.giftBooking,

      pageMeta: DATA.pageMeta,
      toyMakerPageData: DATA.toyMakerPageData,
      hasMobileEscapeRoom: DATA.hasMobileEscapeRoom,
      mobileEscapeRoomData: DATA.mobileEscapeRoomData,
      //===================v2
      pageHeroData: DATA.pageHeroData,
      aboutSectionData: DATA.aboutSectionData,
      escapeGameListSectionData: DATA.escapeGameListSectionData,
      otherGameListSectionData: DATA.otherGameListSectionData,
      eventCardListSectionData: DATA.eventCardListSectionData,

      testimonialVideoCarouselSectionData:
        DATA.testimonialVideoCarouselSectionData,
      // ============================v1
      //  pageData: DATA.pageData,
      //  escapeGameList: DATA.escapeGameList,
      //  otherGameList: DATA.otherGameList,
      //   eventList: DATA.eventList,
      //  testimonialList: DATA.testimonialList,
      //  pageVideo: DATA.pageVideo,
    },
    revalidate: 30,
  };
};
