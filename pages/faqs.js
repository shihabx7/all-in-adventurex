import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";

import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
import { getFaqPageData } from "./api/getFaqPageData";
import FaqPageHero from "../comps/faqComps/FaqPageHero";
import AllFaq from "../comps/faqComps/AllFaq";
import PageBread from "../comps/util/PageBread";
import SinglePageSeo from "../comps/util/SinglePageSeo";

const faqs = (props) => {
  return (
    <>
      {/* =======header content======== */}
      <SinglePageSeo meta={props.pagemeta} />
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
        <FaqPageHero pageData={props.pageData} />
        <AllFaq faqGroup={props.faqGroup} />

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default faqs;

export const getStaticProps = async () => {
  const DATA = await getFaqPageData();

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pagemeta: DATA.pageMeta,
      pageData: DATA.pageData,

      faqGroup: DATA.faqGroup,
    },
  };
};
