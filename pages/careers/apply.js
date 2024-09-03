import { getJobApplicationPageData } from "../api/getJobApplicationPageData";
import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";

// page template=============
import CareersHero from "../../comps/careersPageComps/CareersHero";
import JobApplication from "../../comps/careersPageComps/JobApplication";
import PageBread from "../../comps/util/PageBread";
import SinglePageSeo from "../../comps/util/SinglePageSeo";
const apply = (props) => {
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

        <CareersHero
          btnId={"job-application"}
          btnLabel={"VIEW ALL JOB POSITIONS"}
          pageData={props.pageData}
        />
        <JobApplication locationlist={props.locationSlugList} />

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default apply;

export const getStaticProps = async () => {
  const DATA = await getJobApplicationPageData();

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
