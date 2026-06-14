//import getEventSlugs from "../api/Events/getEventSlugs";
//import { getEventPagetData } from "../api/Events/getEventPageData";
//=====================================================================v2
import getEventSlugV2 from "../api/Events/getEventSlugV2";
import { getEventPageDataV2 } from "../api/Events/getEventPageDataV2";

import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";
import PageBread from "../../comps/util/PageBread";
import EventPageSeo from "../../comps/eventPageComps/EventPageSeo";
//import EventRootHero from "../../comps/eventPageComps/EventRootHero";
//import EventRootDetails from "../../comps/eventPageComps/EventRootDetails";
//import EventRootTestimonials from "../../comps/eventPageComps/EventRootTestimonials";
import EventRooTPageBread from "../../comps/v2/eventPageV2/EventRooTPageBread";
// =================================================================================================v2
import EventPageHero from "../../comps/v2/eventPageV2/EventPageHero";
import EventPageHeroV2 from "../../comps/v2/eventPageV2/EventPageHeroV2";
import FeedBackTestimonialSlider from "../../comps/v2/eventPageV2/FeedBackTestimonialSlider";
import CheckOutPartyPackages from "../../comps/v2/eventPageV2/CheckOutPartyPackages";
import EventPageEscapeRoomCarousel from "../../comps/v2/eventPageV2/EventPageEscapeRoomCarousel";
import MobileMysteryEventSection from "../../comps/v2/eventPageV2/MobileMysteryEventSection";
import EventPageGallery from "../../comps/v2/eventPageV2/EventPageGallery";
import CustomerLoveTestimonialCarousel from "../../comps/v2/eventPageV2/CustomerLoveTestimonialCarousel";
import EventPageFaqs from "../../comps/v2/eventPageV2/EventPageFaqs";
//===============================v2 end
const showSingleEvent = (props) => {
  return (
    <>
      {/* =======header content======== */}
      <EventPageSeo meta={props.pageMeta} />
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
        hideMenuBookBtn={true}
      />
      {/* =======header content ======== end */}

      {/* =========================================================================================main content ======== end */}
      <div
        id="mainContent"
        className="main-content nobtn-main-content bg-center"
        style={{ backgroundImage: "url('/assets/game-dt-bg.jpg')" }}
      >
        {/* =======breadcum content and breadcum========  */}
        <EventRooTPageBread
          labelText={props.menuLabel}
          slug={props.eventSlug}
        />
        {/* =======breadcum content and breadcum root page template======== end */}
        {/*==============================v2 ==============================*/}
        <EventPageHero pageHeroData={props.pageData.PageHeroData} />
        <FeedBackTestimonialSlider
          sectionData={props.pageData.FeedBackTestimonialSliderData}
        />
        <CheckOutPartyPackages
          sectionData={props.pageData.CheckOutPartyPackagesData}
          partyPackageList={props.partyPackageList}
        />
        <EventPageEscapeRoomCarousel
          sectionData={props.escapeRoomCarouselSectionData}
          sectionHeadData={props.pageData.EventPageEscapeRoomCarouselData}
        />
        {props.pageData.MobileMysterySectionData.showCardSection && (
          <MobileMysteryEventSection
            sectionData={props.pageData.MobileMysterySectionData}
          />
        )}
        <EventPageGallery sectionData={props.pageData.EventPageGalleryData} />
        <CustomerLoveTestimonialCarousel
          sectionData={props.pageData.CustomerLoveTestimonialCarouselData}
        />
        <EventPageFaqs
          sectionData={props.pageData.EventPageFaqsData}
          eventFaqList={props.eventFaqList}
        />
        {/*==============================v2 =============================*/}
        {/*  
        <EventRootHero pageData={props.pageData} />
        <EventRootDetails eventDetaliData={props.eventDetaliData} />
        <EventRootTestimonials testimonialData={props.eventTestimonialData} />
*/}
        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default showSingleEvent;

export const getStaticPaths = async () => {
  const res = await getEventSlugV2();

  const paths = res.map((eventSlugs) => {
    return {
      params: { eventSlug: eventSlugs.eventSlug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  //const DATA = await getEventPagetData(context.params.eventSlug);
  const DATA = await getEventPageDataV2(context.params.eventSlug);
  // console.log(eventPageData);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      eventSlug: DATA.eventSlug,
      eventName: DATA.eventName,
      menuLabel: DATA.menuLabel,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      escapeRoomCarouselSectionData: DATA.escapeRoomCarouselSectionData,
      partyPackageList: DATA.partyPackageList,
      eventFaqList: DATA.eventFaqList,
      //  eventDetaliData: DATA.eventDetaliData,
      //  eventTestimonialData: DATA.eventTestimonialData,
    },
    revalidate: 60,
  };
};
