import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";

import CareersHero from "../../comps/careersPageComps/CareersHero";
import WhoWeAre from "../../comps/careersPageComps/WhoWeAre";
import OpenPosition from "../../comps/careersPageComps/OpenPosition";
import { getCareerHomePageData } from "../api/getCareerHomePageData";
import { getCareerHomePageDataV2 } from "../api/getCareerHomePageDataV2";
import PageBread from "../../comps/util/PageBread";
import SinglePageSeo from "../../comps/util/SinglePageSeo";
//===============================v2=========================
import CareerPageHeroV2 from "../../comps/v2/careerPageV2/CareerPageHeroV2";
import BrowsePositionSection from "../../comps/v2/careerPageV2/BrowsePositionSection";
import CareerAboutSection from "../../comps/v2/careerPageV2/CareerAboutSection";

const Careers = (props) => {
  return (
    <>
      {/* =======header content======== */}
      <SinglePageSeo meta={props.pageMeta} />
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
        className="main-content nobtn-main-content bg-center relative"
      >
        {/* =======breadcum content and breadcum========  */}
        <PageBread />
        {/* =======breadcum content and breadcum root page template======== end */}
        <CareerPageHeroV2
          pageHeroData={props.pageHeroData}
          btnId={"alljobs"}
          btnLabel={"VIEW ALL JOB POSITIONS"}
        />
        <BrowsePositionSection />
        <CareerAboutSection />

        {/* =========================================================================================<OpenPosition jobCardList={props.jobCardList} />======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default Careers;

export const getStaticProps = async () => {
  const DATA = await getCareerHomePageDataV2();

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageHeroData: DATA.pageData,
      pageMeta: DATA.pageMeta,
      jobCardList: DATA.jobCardList,
      jobOpeningsResData: DATA.jobOpeningsList,
    },
    revalidate: 60,
  };
};
