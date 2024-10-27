import getActivitySlugs from "../api/Activities/getActivitySlugs";
import { getActivitiyPageData } from "../api/Activities/getActivitiyPageData";

import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";

import ActivityPageSeo from "../../comps/activitiyPageComps/ActivityPageSeo";
import ActivityBreadCrumbs from "../../comps/activitiyPageComps/ActivityBreadCrumbs";
import { FiChevronRight } from "react-icons/fi";
// page tamplete content

import ActivityRootHero from "../../comps/activitiyPageComps/ActivityRootHero";
import ActivityRootDetails from "../../comps/activitiyPageComps/ActivityRootDetails";
import ActivityGallery from "../../comps/activitiyPageComps/ActivityGallery";
import ActivityVideo from "../../comps/activitiyPageComps/ActivityVideo";

const sinleActivities = (props) => {
  /* custom breadcum code */
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
      <ActivityPageSeo meta={props.pageMeta} />
      {/* =======header content======== */}

      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
      />
      {/* =======header content ======== end */}

      <div id="mainContent" className="main-content nobtn-main-content">
        {/* =======breadcum content and breadcum======== end */}
        <ActivityBreadCrumbs />
        {/* =======breadcum content and breadcum======== end */}

        <ActivityRootHero pageData={props.pageData} />

        <ActivityRootDetails activityData={props.activityData} />
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

export const getStaticPaths = async () => {
  const res = await getActivitySlugs();

  const paths = res.map((item) => {
    return {
      params: { activitiesSlug: item.activitySlug },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  //const singleBlogData = await getSingleBlogData(context.params.activitiesSlug);
  // console.log(context.params.activitiesSlug);
  //console.log(context.params);
  const DATA = await getActivitiyPageData(context.params.activitiesSlug);
  //console.log(activityPageData);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      activityData: DATA.activityData,
      videoData: DATA.videoData,
      activityGallery: DATA.activityGallery,
    },
    revalidate: 12,
  };
};
