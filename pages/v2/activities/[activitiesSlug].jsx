import getRootActivitySlugs from "../../api/v2/root/rootActivitySlugs";
import { getRootActivitiyPageData } from "../../api/v2/root/rootActivityPageData";

import RootNav from "../../../comps/RootNav";
import RootFooter from "../../../comps/RootFooter";

import ActivityPageSeo from "../../../comps/activitiyPageComps/ActivityPageSeo";
import ActivityBreadCrumbs from "../../../comps/activitiyPageComps/ActivityBreadCrumbs";
import { FiChevronRight } from "react-icons/fi";
// ======================================================page ui
import EescapeGamePageUI from "../../../comps/v2/activityPageUI/EescapeGamePageUI";
import OtherGamePageUI from "../../../comps/v2/activityPageUI/OtherGamePageUI";

import ActivityRootHero from "../../../comps/activitiyPageComps/ActivityRootHero";
import ActivityRootDetails from "../../../comps/activitiyPageComps/ActivityRootDetails";
import ActivityGallery from "../../../comps/activitiyPageComps/ActivityGallery";
import ActivityVideo from "../../../comps/activitiyPageComps/ActivityVideo";

export default function RootActivitiyPage(props) {
  /* custom breadcum code */

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running

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

        {props.pageUI == "otherGame" && (
          <OtherGamePageUI
            otherGamePageUIData={{
              pageData: props.pageData,
              activityData: props.activityData,
              activityGallery: props.activityGallery,
              videoData: props.videoData,
            }}
          />
        )}
        {props.pageUI == "escapeGame" && (
          <EescapeGamePageUI
            escapeGamePageUIData={{
              pageHeroData: props.pageHeroData,
              storyLineSectionData: props.storyLineSectionData,
              gallerySectionDataData: props.gallerySectionDataData,
              mooreEscapeGameCarouselSection:
                props.mooreEscapeGameCarouselSection,
            }}
          />
        )}

        {/* =======breadcum content and breadcum 
          <ActivityRootHero pageData={props.pageData} />
         <ActivityRootDetails activityData={props.activityData} />
        <ActivityGallery activityGallery={props.activityGallery} />
        <ActivityVideo videoData={props.videoData} />======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await getRootActivitySlugs();

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

export const getStaticProps = async (context) => {
  const DATA = await getRootActivitiyPageData(context.params.activitiesSlug);
  //console.log(DATA);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      // ===================v2
      pageUI: DATA.pageUI,
      pageHeroData: DATA.pageHeroData,
      storyLineSectionData: DATA.storyLineSectionData,
      gallerySectionDataData: DATA.gallerySectionDataData,
      mooreEscapeGameCarouselSection: DATA.mooreEscapeGameCarouselSection,
      // ============================= for other games v1
      pageData: DATA.pageData,
      activityData: DATA.activityData,
      videoData: DATA.videoData,
      activityGallery: DATA.activityGallery,
    },
    revalidate: 30,
  };
};
