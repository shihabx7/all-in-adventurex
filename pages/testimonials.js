import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";

// page data
import { getTestimonialPageData } from "./api/getTestimonialPageData";

import TestimonialSection from "../comps/testimonialPageComps/TestimonialSection";
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
        <PageBread />
        <TestimonialPageHero pageData={props.pageData} />
        {/*===================all escaperooms testimonils-=========== */}
        <TestimonialSection testimonialsGroup={props.testimonialsGroup} />
        {/*===================all escaperooms testimonils end======================== */}

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

      testimonialsGroup: DATA.testimonialsGroup,
    },
    revalidate: 30, // In seconds
  };
};
