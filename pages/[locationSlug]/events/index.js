// pages/[locationSlug]/contact-store.js

import { getLocationSlugUrl } from "../../api/Locations/getLocationSlugUrls";
import { getLocationEvenstListPageData } from "../../api/DynamicLocations/getLocationEvenstListPageData";
import { getLocationEvenstListPageDataV2 } from "../../api/DynamicLocations/getLocationEvenstListPageDataV2";

import Script from "next/script";
import LocationNav from "../../../comps/locationsPage/LocationNav";
import LocationFooter from "../../../comps/locationsPage/LocationFooter";
import PageSeo from "../../../comps/util/PageSeo";
import DynamicPageBread from "../../../comps/util/DynamicPageBread";
import EventLocListHero from "../../../comps/eventPageComps/EventLocListHero";
import EventLocList from "../../../comps/eventPageComps/EventLocList";
import EventBookingSection from "../../../comps/eventPageComps/EventBookingSection";
import EventBookingPartySection from "../../../comps/eventPageComps/EventBookingPartySection";
import EventContact from "../../../comps/eventPageComps/EventContact";

// =========================================================v2
import EventsListPageHero from "../../../comps/v2/eventPageV2/EventsListPageHero";
import HomePageEventLisSection from "../../../comps/v2/eventPageV2/HomePageEventLisSection";

import CheckOutPartyPackages from "../../../comps/v2/eventPageV2/CheckOutPartyPackages";
import EventPageEscapeRoomCarousel from "../../../comps/v2/eventPageV2/EventPageEscapeRoomCarousel";
import MobileMysteryEventSection from "../../../comps/v2/eventPageV2/MobileMysteryEventSection";
import EventPageGallery from "../../../comps/v2/eventPageV2/EventPageGallery";
import CustomerLoveTestimonialCarousel from "../../../comps/v2/eventPageV2/CustomerLoveTestimonialCarousel";
import EventPageFaqs from "../../../comps/v2/eventPageV2/EventPageFaqs";
import LocationDetails from "../../../comps/locationsPage/LocationDetails";

const LocationEvents = (props) => {
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
        allBooking={props.allBooking}
        hasMobileEscapeRoom={props.hasMobileEscapeRoom}
        giftBooking={props.giftBooking}
        hideMenuBookBtn={true}
      />
      <div id="mainContent" className="main-content">
        <DynamicPageBread
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          activeSlug="events"
          activeLabel="Events"
        />
        <EventsListPageHero
          pageHeroData={props.pageHeroData}
          isPublished={props.isPublished}
          locationInfo={props.locationInfo}
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          // businessHours={props.businessHours}
          // holidayHours={props.holidayHours}
        />
        <HomePageEventLisSection
          extraSpace={true}
          locationSlug={props.locationSlug}
          locationName={props.locationName}
          pageType="all"
          title={"TURN ANY OCCASION INTO AN ADVENTURE"}
        />

        {/* =============== ============================================v2============================================v2*/}

        <CheckOutPartyPackages
          sectionData={props.pageData.CheckOutPartyPackagesData}
          partyPackageList={props.partyPackageList}
          locationSlug={props.locationSlug}
          locationInfo={props.locationInfo}
        />
        <EventPageEscapeRoomCarousel
          sectionData={props.escapeRoomCarouselSectionData}
          sectionHeadData={props.pageData.EventPageEscapeRoomCarouselData}
        />

        {props.pageData.MobileMysterySectionData.showCardSection && (
          <MobileMysteryEventSection
            sectionData={props.pageData.MobileMysterySectionData}
            locationSlug={props.locationSlug}
          />
        )}
        <EventPageGallery sectionData={props.pageData.EventPageGalleryData} />
        <CustomerLoveTestimonialCarousel
          sectionData={props.pageData.CustomerLoveTestimonialCarouselData}
        />
        <EventPageFaqs
          sectionData={props.pageData.EventPageFaqsData}
          eventFaqList={props.eventFaqList}
          locationSlug={props.locationSlug}
          locationInfo={props.locationInfo}
        />
        <LocationDetails
          mapInfo={props.mapInfo}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
          locationName={props.locationName}
          locationSlug={props.locationSlug}
        />

        {/*=============================================
        <EventLocList
          eventListData={props.eventListData}
          locationSlug={props.locationSlug}
          allBooking={props.allBooking}
        />
     


        {props.escapeGamePartyList.length > 0 ? (
          <EventBookingPartySection
            isPublished={props.isPublished}
            allBooking={props.allBooking}
            eventBooking={props.eventBooking}
            escapeGamePartyList={props.escapeGamePartyList}
            locationSlug={props.locationSlug}
          />
        ) : (
          <EventBookingSection
            isPublished={props.isPublished}
            allBooking={props.allBooking}
            eventBooking={props.eventBooking}
          />
        )}
        <EventContact
          locationName={props.locationName}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
          eventFaq={props.eventFaq}
        />
             ==================================================*/}
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
  /* let res = null;
  let errFlag = true;

  try {
    res = await await getLocationEvenstListPageData(
      context.params.locationSlug
    );
  } catch (error) {
    console.log("reponse err. page not found");
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
  const DATA = res;*/
  const DATA = await getLocationEvenstListPageDataV2(
    context.params.locationSlug,
  );
  console.log(context.params.activitiesSlug);
  //  console.log("Location: " + context.params.locationSlug);

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
      pageHeroData: DATA.pageHeroData,
      allBooking: DATA.allBooking,
      eventBooking: DATA.eventBooking,
      businessHours: DATA.businessHours,
      mapInfo: DATA.mapInfo,
      holidayHours: DATA.holidayHours,
      eventListData: DATA.eventListData,
      hasMobileEscapeRoom: DATA.hasMobileEscapeRoom,
      giftBooking: DATA.giftBooking,
      //====== v2 pageData
      pageData: DATA.pageData,
      escapeRoomCarouselSectionData: DATA.escapeRoomCarouselSectionData,
      eventFaqList: DATA.eventFaqList,
      partyPackageList: DATA.partyPackageList,
    },
    revalidate: 60,
  };
};

export default LocationEvents;
