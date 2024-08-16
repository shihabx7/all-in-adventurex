import styles from "../styles/alllocations.module.css";
import TitleSeparator from "../comps/util/TitleSeparator";
import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
import CovidPageHero from "../comps/covidPageComps/CovidPageHero";
import CovidUpdates from "../comps/covidPageComps/CovidUpdates";

import { getCovidPageData } from "./api/getCovidPageData";
import Seofields from "../comps/util/SeoFields";
import Link from "next/link";

const covid19 = (props) => {
  /* custom breadcum code */
  const toTitleCase = (title) => {
    const btitle = title
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(""); // breadcum title capitalize

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
      <Seofields meta={props.pagemeta} />
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
      />

      <div id="mainContent" className="main-content nobtn-main-content">
        {/* =======header content and breadcum======== */}

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
        {/* =======header content and breadcum======== end */}
        {/* ============page baner=============*/}
        <CovidPageHero totalLocations={props.totalLocations} />
        {/* ============page baner end=============*/}
        {/* ============Location list=============*/}
        <CovidUpdates pageData={props.pageData} />
        {/* ============Location list end=============*/}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default covid19;

export const getStaticProps = async () => {
  const DATA = await getCovidPageData();
  return {
    props: {
      pageData: DATA.pageData,
      pagemeta: DATA.pageMeta,
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
    },

    // - At most once every 10 seconds
    // revalidate: 30, // In seconds
  };
};
