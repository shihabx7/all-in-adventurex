import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";

import CareersHero from "../../comps/careersPageComps/CareersHero";
import WhoWeAre from "../../comps/careersPageComps/WhoWeAre";
import OpenPosition from "../../comps/careersPageComps/OpenPosition";
import { getCareerHomePageData } from "../api/getCareerHomePageData";
import PageBread from "../../comps/util/PageBread";
import SinglePageSeo from "../../comps/util/SinglePageSeo";

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
        className="main-content nobtn-main-content bg-center"
      >
        {/* =======breadcum content and breadcum========  */}
        <PageBread />
        {/* =======breadcum content and breadcum root page template======== end */}
        <CareersHero
          pageData={props.pageData}
          btnId={"alljobs"}
          btnLabel={"VIEW ALL JOB POSITIONS"}
        />
        <WhoWeAre />
        <OpenPosition jobCardList={props.jobCardList} />

        {/* =========================================================================================main content ======== end */}
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
  const DATA = await getCareerHomePageData();

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageData: DATA.pageData,
      pageMeta: DATA.pageMeta,
      jobCardList: DATA.jobCardList,
    },
    revalidate: 12,
  };
};
