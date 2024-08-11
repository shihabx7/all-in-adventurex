import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";

import CareerHero from "../../comps/careersPageComps/CareerHero";
import { getJobSlug } from "../api/getJobSlag";
import { getJobPositionPageData } from "../api/getJobPositionPageData";
import JobDetails from "../../comps/careersPageComps/JobDetails";
import Seofields from "../../comps/util/SeoFields";

const OpenJobPosition = (props) => {
  const toTitleCase = (title) => {
    const titlefres = title.replace(/-/g, " ");
    const btitle = titlefres
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" "); // breadcum title capitalize

    return (
      <div className="bitem flex items-center">
        <span>{btitle}</span>{" "}
        <span className="bsep text-gold">
          <FiChevronRight />
        </span>
      </div>
    );
  };
  /* customizing breadcum */

  return (
    <>
      {/* =======header content======== */}
      <Seofields meta={props.pagemeta} />
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
        <div className="breadcums  py-1 md:py-2 bg-[#fffceb]">
          <Breadcrumbs
            replaceCharacterList={[{ from: "-", to: " " }]}
            listClassName="max-w-7xl mx-auto px-2 md:px-4 breadcum-list text-sm md:text-base lg:text-lg"
            inactiveItemClassName="inline-block text-[#6a6a6a] hover:text-red-700"
            activeItemClassName="inline-block text-[#212121]"
            rootLabel="home"
            transformLabel={(title) => {
              return toTitleCase(title);
            }}
          ></Breadcrumbs>
        </div>
        {/* =======breadcum content and breadcum root page template======== end */}

        <CareerHero
          pagedata={props.pagedata}
          jobname={props.pagedata.job_designation}
        />
        <JobDetails
          jobname={props.pagedata.job_designation}
          designation={props.pagedata.job_designation}
          jobroles={props.jobroles}
          competencies={props.competencies}
          traits={props.traits}
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

  const paths = res.map((jobSlug) => {
    return {
      params: { jobSlug: jobSlug.job_slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const DATA = await getJobPositionPageData(context.params.jobSlug);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pagemeta: DATA.pageMeta,
      pagedata: DATA.pageData,
      jobroles: DATA.job_roles,
      competencies: DATA.key_competencies,
      traits: DATA.desired_traits,
      requirements: DATA.requirements,
    },
    revalidate: 30,
  };
};
