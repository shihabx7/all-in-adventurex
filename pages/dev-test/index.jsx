import { getCareerHomePageData } from "../api/getCareerHomePageData";
import dynamic from "next/dynamic";
import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";

//import FhBookingGridFlow from "../../comps/v2/devTest/FhBookingGridFlow";
//import FhBookingCalender from "../../comps/v2/devTest/FhBookingCalender";

import PageBread from "../../comps/util/PageBread";
import SinglePageSeo from "../../comps/util/SinglePageSeo";
import FhBookingGridFlow from "../../comps/v2/devTest/FhBookingGridFlow";
import FhBookingCalender from "../../comps/v2/devTest/FhBookingCalender";

//const FhBookingGridFlow = dynamic(() => import('../../comps/v2/devTest/FhBookingGridFlow'), { ssr: false });
//const FhBookingCalender = dynamic(() => import('../../comps/v2/devTest/FhBookingCalender'), { ssr: false });

const TestPage = (props) => {
  return (
    <>
      {/* =======header content========
      <SinglePageSeo meta={props.pageMeta} />
       */}
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
        <FhBookingGridFlow />
        <FhBookingCalender />
        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default TestPage;

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
    revalidate: 60,
  };
};
