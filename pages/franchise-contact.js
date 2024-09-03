import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";

import { FiChevronRight } from "react-icons/fi";
// page template=============
import FranchiseHero from "../comps/franchisePageComps/FranchiseHero";
import { getFranchiseContactPageData } from "./api/getFranchiseContactPageData";
import FranchiseContactForm from "../comps/franchisePageComps/FranchiseContact";
import PageBread from "../comps/util/PageBread";
import SinglePageSeo from "../comps/util/SinglePageSeo";
const FranchiseContact = (props) => {
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
        <div className="breadcums  py-1 md:py-2 bg-[#fffceb]">
          <PageBread />
        </div>
        {/* =======breadcum content and breadcum root page template======== end */}

        <FranchiseHero
          pageData={props.pageData}
          btnLabel="FILL OUT THE INQUIRY FORM"
          btnId="inquiry"
        />

        <div className="inquiry-form" id="inquiry">
          <FranchiseContactForm />
        </div>

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default FranchiseContact;

export const getStaticProps = async () => {
  const DATA = await getFranchiseContactPageData();

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
    revalidate: 12,
  };
};
