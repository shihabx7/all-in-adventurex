import { getJobPositionPageData } from "../api/getJobPositionPageData";
import { getJobSlug } from "../api/getJobSlug";

import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";

import PageBread from "../../comps/util/PageBread";
import SinglePageSeo from "../../comps/util/SinglePageSeo";
import CareersHero from "../../comps/careersPageComps/CareersHero";

import JobDetails from "../../comps/careersPageComps/JobDetails";

const OpenJobPosition = (props) => {
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
          btnLink={"/careers/apply"}
          btnLabel={"SUBMIT YOUR APPLICATION"}
        />
        <JobDetails
          jobAboutSectionData={props.jobAboutSectionData}
          jobName={props.jobName}
          keyCompetencies={props.keyCompetencies}
          desiredTraits={props.desiredTraits}
          requirements={props.requirements}
        />

        {/* =========================================================================================main content ======== end */}
      </div>
      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default OpenJobPosition;

export const getStaticPaths = async () => {
  const res = await getJobSlug();

  const paths = res.map((urlSlug) => {
    return {
      params: { jobSlug: urlSlug.jobSlug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  /*  let res = null;
  let errFlag = true;

  try {
    res = await getJobPositionPageData(context.params.jobSlug);
  } catch (error) {
    console.log("reponse err. page not found");
    errFlag = false;
  }
  if (!errFlag) {
    return {
      redirect: {
        permanent: false, // or true
        destination: "/404",
      },
    };
  }*/
  // const DATA = res;
  const DATA = await getJobPositionPageData(context.params.jobSlug);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,

      jobAboutSectionData: DATA.jobAboutSectionData,
      desiredTraits: DATA.desiredTraits,
      keyCompetencies: DATA.keyCompetencies,
      requirements: DATA.requirements,
      jobName: DATA.jobName,
      jobSlug: DATA.urlSlug,
    },
    revalidate: 12,
  };
};
