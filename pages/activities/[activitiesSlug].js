import getActivitySlugs from "../api/Activities/getActivitySlugs";
import { getActivitiyPageData } from "../api/Activities/getActivitiyPageData";
//import { FiChevronRight } from "react-icons/fi";
// page tamplete content
import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";
import ActivityPageSeo from "../../comps/activitiyPageComps/ActivityPageSeo";
import ActivityBreadCrumbs from "../../comps/activitiyPageComps/ActivityBreadCrumbs";
import ActivityRootHero from "../../comps/activitiyPageComps/ActivityRootHero";
import ActivityRootDetails from "../../comps/activitiyPageComps/ActivityRootDetails";
import ActivityGallery from "../../comps/activitiyPageComps/ActivityGallery";
import ActivityVideo from "../../comps/activitiyPageComps/ActivityVideo";

const sinleActivities = (props) => {
  return (
    <>
      <ActivityPageSeo meta={props.pageMeta} />
      {/* =======header content======== */}
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
        activitySlug={props.activitySlug}
      />
      {/* =======header content ======== end */}

      <div id="mainContent" className="main-content nobtn-main-content">
        {/* =======breadcum content and breadcum======== end */}
        <ActivityBreadCrumbs />
        {/* =======breadcum content and breadcum======== end */}
        <ActivityRootHero
          pageData={props.pageData}
          activitySlug={props.activitySlug}
        />
        <ActivityRootDetails
          activityData={props.activityData}
          activitySlug={props.activitySlug}
        />
        <ActivityGallery activityGallery={props.activityGallery} />
        <ActivityVideo videoData={props.videoData} />
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};
export default sinleActivities;
// ==========================================get activity slugs
export const getStaticPaths = async () => {
  const res = await getActivitySlugs();

  const paths = res.map((item) => {
    return {
      params: { activitiesSlug: item.activitySlug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
//=============================== page props
export const getStaticProps = async (context) => {
  const DATA = await getActivitiyPageData(context.params.activitiesSlug);
  //  console.log("Activity Slug==="+DATA.currentActivitySlug);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      activitySlug: context.params.activitiesSlug, //DATA.gameSlug,
      currentActivitySlug: DATA.currentActivitySlug,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      activityData: DATA.activityData,
      videoData: DATA.videoData,
      activityGallery: DATA.activityGallery,
    },
    revalidate: 60,
  };
};
