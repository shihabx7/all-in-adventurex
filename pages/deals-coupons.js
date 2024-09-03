import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
import { getDealsCouponPageData } from "./api/getDealsCouponPageData";
// page template=============

import DealsAndCouponHero from "../comps/dealsPageComps/DealsAndCouponHero";
import DealsFaqs from "../comps/dealsPageComps/DealsFaqs";
import AllDealsAndCoupon from "../comps/dealsPageComps/AllDealsAndCoupon";
import PageBread from "../comps/util/PageBread";
import SinglePageSeo from "../comps/util/SinglePageSeo";

const DealsCoupon = (props) => {
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

        <DealsAndCouponHero pageData={props.pageData} />
        <AllDealsAndCoupon couponlist={props.couponlist} />
        <DealsFaqs faqlist={props.faqlist} />

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default DealsCoupon;

export const getStaticProps = async () => {
  const DATA = await getDealsCouponPageData();

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageData: DATA.pageData,
      pageMeta: DATA.pageMeta,
      faqlist: DATA.faqlist,
      couponlist: DATA.couponlist,
    },
    revalidate: 30,
  };
};
