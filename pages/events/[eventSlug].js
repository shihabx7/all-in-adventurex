import getEventSlugs from "../api/Events/getEventSlugs";
import { getEventPagetData } from "../api/Events/getEventPageData";
import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";
import PageBread from "../../comps/util/PageBread";
import EventPageSeo from "../../comps/eventPageComps/EventPageSeo";
import EventRootHero from "../../comps/eventPageComps/EventRootHero";
import EventRootDetails from "../../comps/eventPageComps/EventRootDetails";
import EventRootTestimonials from "../../comps/eventPageComps/EventRootTestimonials";

const showSingleEvent = (props) => {
  return (
    <>
      {/* =======header content======== */}
      <EventPageSeo meta={props.pageMeta} />
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

        <EventRootHero pageData={props.pageData} />
        <EventRootDetails eventDetaliData={props.eventDetaliData} />
        <EventRootTestimonials testimonialData={props.eventTestimonialData} />

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default showSingleEvent;

export const getStaticPaths = async () => {
  const res = await getEventSlugs();

  const paths = res.map((eventSlugs) => {
    return {
      params: { eventSlug: eventSlugs.eventSlug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const DATA = await getEventPagetData(context.params.eventSlug);
  // console.log(eventPageData);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      eventDetaliData: DATA.eventDetaliData,
      eventTestimonialData: DATA.eventTestimonialData,
    },
    revalidate: 12,
  };
};
