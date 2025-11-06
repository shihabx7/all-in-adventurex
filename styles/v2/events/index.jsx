import { rootEventListPageData } from "../../api/v2/root/rootEventListPageData";
import Script from "next/script";
import { useState } from "react";

import RootNav from "../../../comps/RootNav";
import RootFooter from "../../../comps/RootFooter";
import EventBreadCrumbs from "../../../comps/eventPageComps/EventBreadCrumbs";
import EventPageSeo from "../../../comps/eventPageComps/EventPageSeo";
// page template=============
//============ v2
import EventPageHero from "../../../comps/v2/eventPage/sections/EventPageHero";
import EventHeroInfoBox from "../../../comps/v2/eventPage/EventHeroInfoBox";
import EventListSection from "../../../comps/v2/eventPage/sections/EventListSection";
import EventDetailSection from "../../../comps/v2/eventPage/sections/EventDetailSection";
import PartyPackageSection from "../../../comps/v2/eventPage/sections/PartyPackageSection";
import MoreEscapeGameCarouselSection from "../../../comps/v2/escapeGamePage/sections/MoreEscapeGameCarouselSection";
import EscapeGameGallerySection from "../../../comps/v2/escapeGamePage/sections/EscapeGameGallerySection";
import EventTestimonialCarouselSection from "../../../comps/v2/eventPage/sections/EventTestimonialCarouselSection";

import OldPaperTextureBgSection from "../../../comps/v2/sharedComs/OldPaperTextureBgSection";
import DarkBgKeyPatternBgSection from "../../../comps/v2/sharedComs/DarkBgKeyPatternBgSection";
import MobileEscapeRootMenu from "../../../comps/mobileEscapeGames/MobileEscapeRootMenu";
import MobileEscapeGameRootHomeSection from "../../../comps/mobileEscapeGames/MobileEscapeGameRootHomeSection";
import EventFaqSection from "../../../comps/v2/eventPage/sections/EventFaqSection";
//============v1
import EventRootHero from "../../../comps/eventPageComps/EventRootHero";
import EventRootList from "../../../comps/eventPageComps/EventRootList";

export default function RootEventListPage(props) {
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
      {/* =======header content======== */}
      <EventPageSeo meta={props.pageMeta} />
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
      />
      {/* =======header content ======== end */}

      {/* =========================================================================================main content ======== end */}
      <div
        id="mainContent"
        className="main-content nobtn-main-content bg-center"
        style={{ backgroundImage: "url('/assets/game-dt-bg.jpg')" }}
      >
        {/* =======breadcum content and breadcum========  */}
        <EventBreadCrumbs />
        {/* =======breadcum content and breadcum root page template======== end */}
        <EventPageHero pageHeroData={props.pageHeroData} />

        <OldPaperTextureBgSection>
          <div className="mt-[-104px] rm:mt-[-128px] md:mt-0 md:absolute w-full left-0 md:top-[-140px]  lg:top-[-130px]  xl:top-[-120px] z-30">
            <EventHeroInfoBox heroInfoList={props.pageHeroData.heroInfo} />
          </div>
          <EventListSection sectionData={props.eventListSectionData} />
        </OldPaperTextureBgSection>
        <DarkBgKeyPatternBgSection>
          <MoreEscapeGameCarouselSection
            sectionData={props.escapeRoomCarouselSectionData}
          />
          <MobileEscapeGameRootHomeSection
            setShowMobileEecapeMenu={setShowMobileEecapeMenu}
            setGoMobileEecapeForm={setGoMobileEecapeForm}
            goMobileEecapeForm={goMobileEecapeForm}
          />
          <EscapeGameGallerySection sectionData={props.gallerySectionData} />
          <EventTestimonialCarouselSection
            sectionData={props.testimonialSectionData}
          />
        </DarkBgKeyPatternBgSection>
        <EventFaqSection sectionData={props.faqSectionData} />
        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const DATA = await rootEventListPageData();
  //console.log(DATA.eventListSectionData);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      //============v2
      pageHeroData: DATA.pageHeroData,
      eventListSectionData: DATA.eventListSectionData,
      // partyPackageSectionData: DATA.partyPackageSectionData,
      escapeRoomCarouselSectionData: DATA.escapeRoomCarouselSectionData,
      gallerySectionData: DATA.gallerySectionData,
      testimonialSectionData: DATA.testimonialSectionData,
      faqSectionData: DATA.faqSectionData,
      //============v1
      pageData: DATA.pageData,
      eventListData: DATA.eventListData,
    },
    revalidate: 30,
  };
};
