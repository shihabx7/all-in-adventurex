import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page template=============
import { getVolunteeringPageData } from "./api/getVolunteeringPageData";

import VolunteeringHero from "../comps/volunteeringPageComps/VolunteeringHero";
import GivingBack from "../comps/volunteeringPageComps/GivingBack";
import Organization from "../comps/volunteeringPageComps/Organization";
import Vhelp from "../comps/volunteeringPageComps/Vhelp";

import Vcontact from "../comps/volunteeringPageComps/Vcontact";
import SinglePageSeo from "../comps/util/SinglePageSeo";
import PageBread from "../comps/util/PageBread";

const Volunteering = (props) => {
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

        <VolunteeringHero
          pageData={props.pageData}
          totalLocations={props.totalLocations}
        />
        <GivingBack />
        <Organization />
        <Vhelp />
        <Vcontact locationMailData={props.locationMailData} />
        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default Volunteering;

export const getStaticProps = async () => {
  const DATA = await getVolunteeringPageData();
  // console.log(DATA);
  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageData: DATA.pageData,
      pageMeta: DATA.pageMeta,

      locationMailData: DATA.locationMailData,
    },
    revalidate: 30,
  };
};
