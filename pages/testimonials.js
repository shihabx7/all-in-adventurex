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
import SinglePageSeo from "../comps/util/SinglePageSeo";
import PageBread from "../comps/util/PageBread";

const testimonials = (props) => {
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
      pageMeta: DATA.pageMeta,
      testimonials: DATA.testimonials,
    },
    revalidate: 30, // In seconds
  };
};
