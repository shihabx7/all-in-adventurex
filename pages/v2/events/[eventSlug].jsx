import { useState } from "react";
import Script from "next/script";
import getRootEventSlugs from "../../api/v2/root/rootEventSlugs";
import { getRootEventPagetData } from "../../api/v2/root/rootEventPageData";
import RootNav from "../../../comps/RootNav";
import RootFooter from "../../../comps/RootFooter";
import PageBread from "../../../comps/util/PageBread";
import EventPageSeo from "../../../comps/eventPageComps/EventPageSeo";
import EventRootHero from "../../../comps/eventPageComps/EventRootHero";
//============ v2
import EventPageHero from "../../../comps/v2/eventPage/sections/EventPageHero";
import EventHeroInfoBox from "../../../comps/v2/eventPage/EventHeroInfoBox";
import EventDetailSection from "../../../comps/v2/eventPage/sections/EventDetailSection";
import PartyPackageSection from "../../../comps/v2/eventPage/sections/PartyPackageSection";
import MoreEscapeGameCarouselSection from "../../../comps/v2/escapeGamePage/sections/MoreEscapeGameCarouselSection";
import EscapeGameGallerySection from "../../../comps/v2/escapeGamePage/sections/EscapeGameGallerySection";
import EventTestimonialCarouselSection from "../../../comps/v2/eventPage/sections/EventTestimonialCarouselSection";

import OldPaperTextureBgSection from "../../../comps/v2/sharedComs/OldPaperTextureBgSection";
import DarkBgKeyPatternBgSection from "../../../comps/v2/sharedComs/DarkBgKeyPatternBgSection";
//============v1

import MobileEscapeRootMenu from "../../../comps/mobileEscapeGames/MobileEscapeRootMenu";
import MobileEscapeGameRootHomeSection from "../../../comps/mobileEscapeGames/MobileEscapeGameRootHomeSection";
import EventFaqSection from "../../../comps/v2/eventPage/sections/EventFaqSection";

export default function showSingleEvent(props) {
  const [showMobileEecapeMenu, setShowMobileEecapeMenu] = useState(false);
  const [goMobileEecapeForm, setGoMobileEecapeForm] = useState(false);
  return (
    <>
      {/* =======header content======== */}
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      {showMobileEecapeMenu && (
        <MobileEscapeRootMenu
          locationSlugList={props.locationSlugList}
          setShowMobileEecapeMenu={setShowMobileEecapeMenu}
          setGoMobileEecapeForm={setGoMobileEecapeForm}
          goMobileEecapeForm={goMobileEecapeForm}
        />
      )}
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
      >
        {/* =======breadcum content and breadcum========  */}
        <PageBread />
        {/* =======breadcum content and breadcum root page template======== end */}

        <EventPageHero pageHeroData={props.pageHeroData} />

        <OldPaperTextureBgSection>
          <div className="mt-[-104px] rm:mt-[-128px] md:mt-0 md:absolute w-full left-0 md:top-[-140px]  lg:top-[-130px]  xl:top-[-120px] z-30">
            <EventHeroInfoBox heroInfoList={props.pageHeroData.heroInfo} />
          </div>
          <EventDetailSection sectionData={props.eventDetailSectionData} />
          <PartyPackageSection sectionData={props.partyPackageSectionData} />
        </OldPaperTextureBgSection>
        <DarkBgKeyPatternBgSection>
          <MoreEscapeGameCarouselSection
            sectionData={props.escapescapeRoomCarouselSectionData}
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
        {/* =========================================================================================main content  <EventRootDetails eventDetaliData={props.eventDetaliData} />
        <EventRootTestimonials testimonialData={props.eventTestimonialData} />======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await getRootEventSlugs();

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
  /*let res = null;
  let errFlag = true;

  try {
    res = await getEventPagetData(context.params.eventSlug);
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
  const DATA = await getRootEventPagetData(context.params.eventSlug);
  //console.log(DATA);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      //================v2
      pageHeroData: DATA.pageHeroData,
      eventDetailSectionData: DATA.eventDetailSectionData,
      partyPackageSectionData: DATA.partyPackageSectionData,
      escapescapeRoomCarouselSectionData:
        DATA.escapescapeRoomCarouselSectionData,
      gallerySectionData: DATA.gallerySectionData,
      testimonialSectionData: DATA.testimonialSectionData,
      faqSectionData: DATA.faqSectionData,
      //===============v1
      pageData: DATA.pageData,
      eventDetaliData: DATA.eventDetaliData,
      eventTestimonialData: DATA.eventTestimonialData,
    },
    revalidate: 30,
  };
};
