import { getEventListPageData } from "../api/Events/getEventListPageData";

import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";
import EventBreadCrumbs from "../../comps/eventPageComps/EventBreadCrumbs";
import EventPageSeo from "../../comps/eventPageComps/EventPageSeo";
// page template=============
import EventRootHero from "../../comps/eventPageComps/EventRootHero";
import EventRootList from "../../comps/eventPageComps/EventRootList";

const showAllevents = (props) => {
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
        <EventBreadCrumbs />
        {/* =======breadcum content and breadcum root page template======== end */}

        <EventRootHero pageData={props.pageData} />

        <EventRootList eventListData={props.eventListData} />

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default showAllevents;

export const getStaticProps = async () => {
  const DATA = await getEventListPageData();
  //console.log(eventsData);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      eventListData: DATA.eventListData,
    },
    revalidate: 12,
  };
};
