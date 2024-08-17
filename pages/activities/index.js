import { getActivityListPageData } from "../api/Activities/getActivityListPageData";

import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";
import ActivityPageSeo from "../../comps/activitiyPageComps/ActivityPageSeo";
import PageBread from "../../comps/util/PageBread";
import ActivityRootListHero from "../../comps/activitiyPageComps/ActivityRootListHero";
import ActivityRootList from "../../comps/activitiyPageComps/ActivityRootList";
const viewAllActivities = (props) => {
  return (
    <>
      <ActivityPageSeo meta={props.pageMeta} />
      {/* =======header content======== */}

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
        <ActivityRootListHero pageData={props.pageData} />
        <ActivityRootList activityData={props.activityData} />
        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default viewAllActivities;

export const getStaticProps = async () => {
  const DATA = await getActivityListPageData();
  //console.log(allActivity);
  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      activityData: DATA.activityListData,
    },
    revalidate: 12,
  };
};
