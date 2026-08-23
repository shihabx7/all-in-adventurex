import { getEventListPageData } from "../api/Events/getEventListPageData";
import { getEventListPageDataV2 } from "../api/Events/getEventListPageDataV2";

import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";
import EventBreadCrumbs from "../../comps/eventPageComps/EventBreadCrumbs";
import EventPageSeo from "../../comps/eventPageComps/EventPageSeo";
// page template=============
//import EventRootHero from "../../comps/eventPageComps/EventRootHero";
import EventRootList from "../../comps/eventPageComps/EventRootList";

// ================================ v2
import HomePageEventLisSection from "../../comps/v2/eventPageV2/HomePageEventLisSection";
import EventsListPageHero from "../../comps/v2/eventPageV2/EventsListPageHero";
import CheckOutPartyPackages from "../../comps/v2/eventPageV2/CheckOutPartyPackages";
import EventPageEscapeRoomCarousel from "../../comps/v2/eventPageV2/EventPageEscapeRoomCarousel";
import MobileMysteryEventSection from "../../comps/v2/eventPageV2/MobileMysteryEventSection";
import EventPageGallery from "../../comps/v2/eventPageV2/EventPageGallery";
import CustomerLoveTestimonialCarousel from "../../comps/v2/eventPageV2/CustomerLoveTestimonialCarousel";
import EventPageFaqs from "../../comps/v2/eventPageV2/EventPageFaqs";

const showAllevents = (props) => {
  return (
    <>
      {/* =========================================================seo comp======== */}
      <EventPageSeo meta={props.pageMeta} />
      {/* ===================================================root header content */}
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
        hideMenuBookBtn={true}
      />
      {/* =========================================================================================main content ======== end */}
      <div
        id="mainContent"
        className="main-content nobtn-main-content bg-center"
      >
        {/* ========================================breadcum content and breadcum========  */}
        <EventBreadCrumbs />
        {/* ===========================================================page hero end */}
        <EventsListPageHero pageHeroData={props.pageHeroData} />
        <HomePageEventLisSection
          extraSpace={true}
          pageType="all"
          title={"TURN ANY OCCASION INTO AN ADVENTURE"}
        />
        <CheckOutPartyPackages
          sectionData={props.pageData.CheckOutPartyPackagesData}
          partyPackageList={props.partyPackageList}
        />
        <EventPageEscapeRoomCarousel
          sectionData={props.escapeRoomCarouselSectionData}
          sectionHeadData={props.pageData.EventPageEscapeRoomCarouselData}
        />
        {/*==============================v2 ==============================
                {props.pageData.MobileMysterySectionData.showCardSection && (
                  <MobileMysteryEventSection
                    sectionData={props.pageData.MobileMysterySectionData}
                  />
                )}     
============================v2 =============================*/}
        <EventPageGallery sectionData={props.pageData.EventPageGalleryData} />

        <CustomerLoveTestimonialCarousel
          sectionData={props.pageData.CustomerLoveTestimonialCarouselData}
        />
        <EventPageFaqs
          sectionData={props.pageData.EventPageFaqsData}
          eventFaqList={props.eventFaqList}
        />
      </div>
      {/* =========================================================================================main content ======== end */}
      {/* =========================================================================================footer ======== */}
      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default showAllevents;

export const getStaticProps = async () => {
  const DATA = await getEventListPageDataV2();
  //console.log(eventsData);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      pageHeroData: DATA.pageHeroData,
      eventListData: DATA.eventListData,
      //========================v2
      pageData: DATA.pageData,
      partyPackageList: DATA.partyPackageList,
      escapeRoomCarouselSectionData: DATA.escapeRoomCarouselSectionData,
      eventFaqList: DATA.eventFaqList,
    },
    revalidate: 60,
  };
};
