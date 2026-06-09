import Script from "next/script";
import { fetchLocationEvents } from "../../api/DynamicLocations/locationSlugUtil";
import { getLocationSlugUrl } from "../../api/Locations/getLocationSlugUrls";
import { getLocationEventPageData } from "../../api/DynamicLocations/getLocationEventPageData";
//===========================================v2
import getEventSlugV2 from "../../api/Events/getEventSlugV2";
import { getLocationEventPageDataV2 } from "../../api/DynamicLocations/getLocationEventPageDataV2";
//==========================================v2
import LocationNav from "../../../comps/locationsPage/LocationNav";
import LocationFooter from "../../../comps/locationsPage/LocationFooter";
import PageSeo from "../../../comps/util/PageSeo";
import DynamicPageBread from "../../../comps/util/DynamicPageBread";
//==========================v2
import EventPageHero from "../../../comps/v2/eventPageV2/EventPageHero";
import FeedBackTestimonialSlider from "../../../comps/v2/eventPageV2/FeedBackTestimonialSlider";
import CheckOutPartyPackages from "../../../comps/v2/eventPageV2/CheckOutPartyPackages";
import EventPageEscapeRoomCarousel from "../../../comps/v2/eventPageV2/EventPageEscapeRoomCarousel";
import MobileMysteryEventSection from "../../../comps/v2/eventPageV2/MobileMysteryEventSection";
import EventPageGallery from "../../../comps/v2/eventPageV2/EventPageGallery";
import CustomerLoveTestimonialCarousel from "../../../comps/v2/eventPageV2/CustomerLoveTestimonialCarousel";
import EventPageFaqs from "../../../comps/v2/eventPageV2/EventPageFaqs";
//=============================location detail section v2 format
import LocationDetails from "../../../comps/locationsPage/LocationDetails";
//==========================v1
import EventLocHero from "../../../comps/eventPageComps/EventLocHero";
import EventLocDetails from "../../../comps/eventPageComps/EventLocDetails";
import EventBookingSection from "../../../comps/eventPageComps/EventBookingSection";
import EventBookingPartySection from "../../../comps/eventPageComps/EventBookingPartySection";
import EventContact from "../../../comps/eventPageComps/EventContact";
import EventReview from "../../../comps/eventPageComps/EventReview";

const LocSingleEvent = (props) => {
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
        eventSlug={props.eventSlug}
        allBooking={props.allBooking}
        activeGameBooking={props.activeGameBooking}
        hasMobileEscapeRoom={props.hasMobileEscapeRoom}
        giftBooking={props.giftBooking}
        hideMenuBookBtn={true}
      />
      <div id="mainContent" className="main-content">
        {/* =======header content and breadcum======== */}
        <DynamicPageBread
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          eventSlug={props.eventSlug}
          eventName={props.eventName}
        />
        {/* =============== ============================================v2*/}
        <EventPageHero
          pageHeroData={props.pageData.PageHeroData}
          locationSlug={props.locationSlug}
          locationName={props.locationName}
          locationInfo={props.locationInfo}
        />
        <FeedBackTestimonialSlider
          sectionData={props.pageData.FeedBackTestimonialSliderData}
        />

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
        {/* =============== ============================================v2*/}
        {/*======================================================== old      
        <EventLocHero
          pageData={props.pageData}
          isPublished={props.isPublished}
          locationInfo={props.locationInfo}
          activeGameBooking={props.activeGameBooking}
          allBooking={props.allBooking}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
        />
        <EventLocDetails
          eventDetaliData={props.eventDetaliData}
          activeGameBooking={props.activeGameBooking}
          allBooking={props.allBooking}
          locationSlug={props.locationSlug}
        />
        {!props.activeGameBooking ? (
          <>
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
          </>
        ) : (
          <>
            <EventReview testimonialData={props.eventTestimonialData} />
          </>
        )}
       */}
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

export default LocSingleEvent;

export const getStaticPaths = async () => {
  //const locationSlugList = apiUrl + "locations?sort[0]=priority:asc";
  //const resLocations = await fetch(locationSlugList, apiSetting);
  //const locationsObj = await resLocations.json();
  // const locations = locationsObj.data;
  const locations = await getLocationSlugUrl();

  let paths = [];

  for (const location of locations) {
    //const events = await fetchLocationEvents(location.locationSlug);
    const events = await getEventSlugV2();
    const eventPaths = events.map((event) => ({
      params: {
        locationSlug: location.locationSlug,
        eventSlug: event.eventSlug,
      },
    }));
    paths = paths.concat(eventPaths);
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  //  const DATA = await getLocationEventPageData(context.params.locationSlug,context.params.eventSlug,);
  //console.log(DATA);
  const DATA = await getLocationEventPageDataV2(
    context.params.locationSlug,
    context.params.eventSlug,
  );
  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      isPublished: DATA.isPublished,
      totalLocations: DATA.totalLocations,
      locationInfo: DATA.locationInfo,
      locationName: DATA.locationName,
      locationSlug: DATA.locationSlug,
      eventName: DATA.eventName,
      eventSlug: DATA.eventSlug,
      activeGameBooking: DATA.activeGameBooking,
      mapInfo: DATA.mapInfo,
      eventBooking: DATA.eventBooking,
      allBooking: DATA.allBooking,
      partyPackageList: DATA.partyBooking,
      businessHours: DATA.businessHours,
      holidayHours: DATA.holidayHours,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      escapeRoomCarouselSectionData: DATA.escapeRoomCarouselSectionData,
      // eventDetaliData: DATA.eventDetaliData,
      //eventTestimonialData: DATA.eventTestimonialData,
      giftBooking: DATA.giftBooking,
      hasMobileEscapeRoom: DATA.hasMobileEscapeRoom,
      eventFaqList: DATA.eventFaqList,
    },
    revalidate: 60,
  };
};
