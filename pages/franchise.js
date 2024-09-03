import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page template=============
import FranchiseHero from "../comps/franchisePageComps/FranchiseHero";
import { getFranchisePageData } from "./api/getFranchisePageData";
import FranchiseModel from "../comps/franchisePageComps/FranchiseModel";

import WhyAllinAdventure from "../comps/franchisePageComps/WhyAllinAdventure";
import ProjectTimeLine from "../comps/franchisePageComps/ProjectTimeLine";
import KeytoSuccess from "../comps/franchisePageComps/KeytoSuccess";
import PageBread from "../comps/util/PageBread";
import SinglePageSeo from "../comps/util/SinglePageSeo";

const franchise = (props) => {
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

        <FranchiseHero pageData={props.pageData} btnLabel="INQUIRE NOW" />
        <FranchiseModel />
        {/*<FranchiseTestimonials/> */}
        <WhyAllinAdventure />
        <ProjectTimeLine />
        <KeytoSuccess />

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default franchise;

export const getStaticProps = async () => {
  const DATA = await getFranchisePageData();

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageData: DATA.pageData,
      pageMeta: DATA.pageMeta,
    },
    revalidate: 30,
  };
};
