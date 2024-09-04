import { getPrivacyPageData } from "./api/getPrivacyPageData";
import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";

// page template=============
import PageBread from "../comps/util/PageBread";
import SinglePageSeo from "../comps/util/SinglePageSeo";
import GnrlHero from "../comps/privacyTermsComps/GnrlHero";
import PrivacyPolicy from "../comps/privacyTermsComps/PrivacyPolicy";

const privacyPolicy = (props) => {
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
        <GnrlHero pageData={props.pageData} />

        <PrivacyPolicy />

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default privacyPolicy;

export const getStaticProps = async () => {
  const DATA = await getPrivacyPageData();

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
