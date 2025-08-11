// pages/[locationSlug]/contact-store.js
import { getLocationSlugUrl } from "../api/Locations/getLocationSlugUrls";
import { getLocationGiftPageData } from "../api/DynamicLocations/getLocationGiftPageData";

import Script from "next/script";
import PageSeo from "../../comps/util/PageSeo";
import LocationFooter from "../../comps/locationsPage/LocationFooter";
import LocationNav from "../../comps/locationsPage/LocationNav";
import DynamicPageBread from "../../comps/util/DynamicPageBread";
import GiftHeroBaner from "../../comps/giftCardPageComps/GiftHeroBaner";
import GiftSpotOn from "../../comps/giftCardPageComps/GiftSpotOn";
import GiftVenGram from "../../comps/giftCardPageComps/GiftVenGram";
import HowGiftCardsWork from "../../comps/giftCardPageComps/HowGiftCardsWork";
import GiftRedeem from "../../comps/giftCardPageComps/GiftRedeem";
import GiftPerfectFor from "../../comps/giftCardPageComps/GiftPerfectFor";
import GiftEffect from "../../comps/giftCardPageComps/GiftEffect";
import GiftGallery from "../../comps/giftCardPageComps/GiftGallery";
import GiftFaq from "../../comps/giftCardPageComps/GiftFaq";

const LocationGiftCards = (props) => {
  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      <PageSeo meta={props.pageMeta} />
      <LocationNav
        isPublished={props.isPublished}
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
        locationName={props.locationName}
        locationSlug={props.locationSlug}
        giftBooking={props.giftBooking}
        isGiftPage={true}
        hasMobileEscapeRoom={props.hasMobileEscapeRoom}
      />
      <div id="mainContent" className="main-content">
        {/* =======header content and breadcum======== */}
        <DynamicPageBread
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          activeSlug={"gift-cards"}
          activeLabel="Gift Cards"
        />
        <GiftHeroBaner
          giftBooking={props.giftBooking ? props.giftBooking : false}
        />
        <GiftSpotOn
          giftBooking={props.giftBooking ? props.giftBooking : false}
        />
        <GiftVenGram
          giftBooking={props.giftBooking ? props.giftBooking : false}
        />
        <HowGiftCardsWork
          giftBooking={props.giftBooking ? props.giftBooking : false}
        />
        <GiftRedeem
          giftReedem={props.giftReedem}
          giftBooking={props.giftBooking ? props.giftBooking : false}
        />
        <GiftPerfectFor
          giftBooking={props.giftBooking ? props.giftBooking : false}
        />
        <GiftGallery
          giftGallery={props.giftGallery ? props.giftGallery : false}
          giftBooking={props.giftBooking ? props.giftBooking : false}
        />
        <GiftEffect
          giftBooking={props.giftBooking ? props.giftBooking : false}
        />

        <GiftFaq
          giftFaqs={props.giftFaqs}
          giftBooking={props.giftBooking ? props.giftBooking : false}
        />
        {/* =======header content and breadcum======== end */}
        {/* ===========Page Content here=========*/}
      </div>

      <LocationFooter
        locationName={props.locationName}
        locationSlug={props.locationSlug}
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

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
  //const singleBlogData = await getSingleBlogData(context.params.activitiesSlug);
  // console.log(context.params.activitiesSlug);
  //console.log("Location: " + context.params.locationSlug);
  const DATA = await getLocationGiftPageData(context.params.locationSlug);
  // console.log(DATA);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      hasMobileEscapeRoom: DATA.hasMobileEscapeRoom,
      locationName: DATA.locationName,
      locationSlug: DATA.locationSlug,
      isPublished: DATA.isPublished,
      totalLocations: DATA.totalLocations,
      locationInfo: DATA.locationInfo,
      pageMeta: DATA.pageMeta,
      // pageData: DATA.pageData,
      //allBooking: DATA.allBooking,
      // eventBooking: DATA.eventBooking,
      giftBooking: DATA.giftBooking,
      giftReedem: DATA.giftReedem,
      giftFaqs: DATA.giftFaqs,
      giftGallery: DATA.giftGallery,
    },
    revalidate: 12,
  };
};

export default LocationGiftCards;
