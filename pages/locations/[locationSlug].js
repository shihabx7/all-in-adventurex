import { getLocationSlugUrl } from "../api/Locations/getLocationSlugUrls";
import UnlimitedEscapeRoomHome from "../../comps/unlimitedEscapeRoom/UnlimitedEscapeRoomHome";

import { getLocationHomePageData } from "../api/Locations/getLocationHomePageData";
import Script from "next/script";

import PageBread from "../../comps/util/PageBread";
import PageBreedLoc from "../../comps/util/PageBreedLoc";
import PageSeo from "../../comps/util/PageSeo";
import LocationNav from "../../comps/locationsPage/LocationNav";
import LocationHero from "../../comps/locationsPage/LocationHero";
import PageVideo from "../../comps/homepagecomps/PageVideo";
import EscaeGameSlider from "../../comps/homepagecomps/EscaeGameSlider";
import OtherGameSlider from "../../comps/homepagecomps/OtherGameSlider";
import EventSlider from "../../comps/homepagecomps/EventSlider";
import GiftCards from "../../comps/homepagecomps/GiftCards";
import GiftCardHomePageSection from "../../comps/giftCardPageComps/GiftCardHomePageSection";
import WhatIsEscape from "../../comps/homepagecomps/WhatIsEscape";
import WhoCanplay from "../../comps/homepagecomps/WhoCanPlay";
import TestimonialSlider from "../../comps/homepagecomps/TestimonialSlider";
import TestimonialLocSlider from "../../comps/homepagecomps/TestimonialLocSlider";
import LocationDetails from "../../comps/locationsPage/LocationDetails";
import LocationFooter from "../../comps/locationsPage/LocationFooter";
import MobileEscapeGameHomeSection from "../../comps/mobileEscapeGames/MobileEscapeGameHomeSection";
import { useState } from "react";
import UnlimitedEscapeGameMenu from "../../comps/unlimitedEscapeRoom/UnlimitedEscapeGameMenu";

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
        {props.otherGameList.hasGames ? (
          <OtherGameSlider
            otherGameList={props.otherGameList}
            locationSlug={props.locationSlug}
            isPublished={props.isPublished}
          />
        ) : (
          <></>
        )}
      </div>
      {/* <UnlimitedEscapeRoomHome
          setShowUerBookingList={setShowUerBookingList}
          locationSlug={props.locationSlug}
        />*/}
      <EventSlider
        eventList={props.eventList}
        locationSlug={props.locationSlug}
        isPublished={props.isPublished}
      />
      {props.hasMobileEscapeRoom ? (
        <MobileEscapeGameHomeSection
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
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  let res = null;
  let errFlag = true;

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
  const DATA = res;
  // const DATA = await getLocationHomePageData(context.params.locationSlug);
  //console.log(DATA);
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
    },
    revalidate: 12,
  };
};
