import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";

import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page template=============
import { getJobApplicationPageData } from "../api/getJobApplicationPageData";

import CareerHero from "../../comps/careersPageComps/CareerHero";
import JobApplication from "../../comps/careersPageComps/JobApplication";

import Seofields from "../../comps/util/SeoFields";

const apply = (props) => {
  /* customizing breadcum */
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
        className="main-content nobtn-main-content bg-center relative"
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
          jobname="apply"
          jobid="job-application"
          pagedata={props.pagedata}
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
      pagedata: DATA.pageData,
      pagemeta: DATA.pageMeta,
    },
    revalidate: 30,
  };
};
