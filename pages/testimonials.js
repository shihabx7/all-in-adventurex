import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page data
import { getTestimonialPageData } from "./api/getTestimonialPageData";
import EscapeRoomCustomerTestimonials from "../comps/testimonialPageComps/EscapeRoomCustomerTestimonials";
import BirthdayPartyTestimonials from "../comps/testimonialPageComps/BirthdayPartyTestimonials";
import PrivatePartyCustomersTestimonials from "../comps/testimonialPageComps/PrivatePartyCustomersTestimonials";
import TeamBuildingTestimonials from "../comps/testimonialPageComps/TeamBuildingTestimonials";
import GameShowRoomTestimonials from "../comps/testimonialPageComps/GameShowRoomTestimonials";
import TestimonialPageHero from "../comps/testimonialPageComps/TestimonialPageHero";

import Seofields from "../comps/util/SeoFields";

const testimonials = (props) => {
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

        <TestimonialPageHero pageData={props.pageData} />
        {/*===================all escaperooms testimonils-=========== */}
        <EscapeRoomCustomerTestimonials testimonials={props.testimonials} />
        {/*===================all escaperooms testimonils end======================== */}
        {/*===================all BIRTHDAY PARTY CUSTOMERS testimonils-=========== */}
        <BirthdayPartyTestimonials testimonials={props.testimonials} />
        {/*===================all BIRTHDAY PARTY CUSTOMERS testimonils======================== */}
        {/*===================all team-building testimonils-=========== */}
        <TeamBuildingTestimonials testimonials={props.testimonials} />
        {/*===================all all team-building testimonils end======================== */}
        {/*===================all PRIVATE PARTY CUSTOMERS testimonils-=========== */}
        <PrivatePartyCustomersTestimonials testimonials={props.testimonials} />
        {/*===================all PRIVATE PARTY CUSTOMERS testimonils end======================== */}
        {/*===================all GAME SHOW ROOM CUSTOMERS testimonils-=========== */}
        <GameShowRoomTestimonials testimonials={props.testimonials} />
        {/*===================all GAME SHOW ROOM CUSTOMERS testimonils end======================== */}

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default testimonials;

export const getStaticProps = async () => {
  const DATA = await getTestimonialPageData();

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,

      pageData: DATA.pageData,
      pagemeta: DATA.pageMeta,
      testimonials: DATA.testimonials,
    },
    revalidate: 30, // In seconds
  };
};
