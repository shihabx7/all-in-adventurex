import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";

// page data
import { getAboutUsPageData } from "./api/getAboutUsPageData";
import AboutPageHero from "../comps/aboutPageComps/AboutPageHero";
import AboutOurMission from "../comps/aboutPageComps/AboutOurMission";
import CoreValue from "../comps/aboutPageComps/CoreValue";
import MeetOurTeam from "../comps/aboutPageComps/MeetOurTeam";
import PartnerMedia from "../comps/aboutPageComps/PartnerMedia";
import HappyTeam from "../comps/aboutPageComps/HappyTeam";
import PageBread from "../comps/util/PageBread";
import SinglePageSeo from "../comps/util/SinglePageSeo";
const AboutUs = (props) => {
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
        <AboutPageHero
          pageData={props.pageData}
          totalLocations={props.totalLocations}
        />
        <AboutOurMission />
        <CoreValue />
        <MeetOurTeam teamMembersList={props.teamMembersList} />
        <PartnerMedia partnerMediaList={props.partnerMediaList} />
        <HappyTeam />

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default AboutUs;

export const getStaticProps = async () => {
  const DATA = await getAboutUsPageData();

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageData: DATA.pageData,
      pagemeta: DATA.pageMeta,

      teamMembersList: DATA.teamMembersList,
      partnerMediaList: DATA.partnerMediaList,
    },
    revalidate: 30,
  };
};
