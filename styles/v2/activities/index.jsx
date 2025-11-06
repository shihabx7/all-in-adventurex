import { getRootActivityListPageData } from "../../api/v2/root/rootActivityListPageData";
import RootNav from "../../../comps/RootNav";
import RootFooter from "../../../comps/RootFooter";
import ActivityPageSeo from "../../../comps/activitiyPageComps/ActivityPageSeo";
import PageBread from "../../../comps/util/PageBread";
// ==================v2
import ActivityListPageVideoBgHero from "../../../comps/v2/escapeGamePage/sections/ActivityListPageVideoBgHero";
import ActivityFilterListSection from "../../../comps/v2/escapeGamePage/sections/ActivityFilterListSection";
import EventCarouselSection from "../../../comps/v2/homePageComps/sections/EventCarouselSection";
import ListPageFaqSection from "../../../comps/v2/escapeGamePage/sections/ListPageFaqSection";
import EscapeGameDarkPatternBg from "../../../comps/v2/escapeGamePage/EscapeGameDarkPatternBg";
// ==================v1

// ==================v2
export default function RootActivityListPage(props) {
  return (
    <>
      <ActivityPageSeo meta={props.pageMeta} />
      {/* =======header content======== */}

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
        <PageBread />
        {/* =======breadcum content and breadcum root page template======== end */}
        <ActivityListPageVideoBgHero pageHeroData={props.pageHeroData} />
        <EscapeGameDarkPatternBg>
          <div className="py-1 gap"></div>
          <ActivityFilterListSection
            escapeGameListSectionData={props.escapeGameListSectionData}
            otherGameListSectionData={props.otherGameListSectionData}
          />
        </EscapeGameDarkPatternBg>
        <EventCarouselSection
          eventCarouselSectionData={props.eventCarouselSectionData}
        />
        <ListPageFaqSection sectionData={props.faqSectionData} />
        {/* =========================================================================================main content   <ActivityRootList activityData={props.activityData} />======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const DATA = await getRootActivityListPageData();
  //  console.log(DATA);
  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      //-----------v2
      pageHeroData: DATA.pageHeroData,
      escapeGameListSectionData: DATA.escapeGameListSectionData,
      otherGameListSectionData: DATA.otherGameListSectionData,
      eventCarouselSectionData: DATA.eventCarouselSectionData,
      faqSectionData: DATA.faqSectionData,
      //==============v1

      //pageData: DATA.pageData,
      // activityData: DATA.activityListData,
    },
    revalidate: 30,
  };
};
