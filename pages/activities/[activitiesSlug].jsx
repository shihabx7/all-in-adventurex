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
//-------------------------------------------------v2
import GamePageHeroSection from "../../comps/v2/gamePageV2/GamePageHeroSection";
import StoryLineSection from "../../comps/v2/gamePageV2/StoryLineSection";
import YoutubeVideoSection from "../../comps/v2/gamePageV2/YoutubeVideoSection";
import GameGallerySection from "../../comps/v2/gamePageV2/GameGallerySection";
import MoorEscapeRoomCarouselSection from "../../comps/v2/gamePageV2/MoorEscapeRoomCarouselSection";

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
      {/* =========================================================header content ======== end */}
      {/* =============================================================================V2 content=
      {props.activityType != "Others" && (
        <div id="mainContent" className="game-page-ui-v2 main-content">
          <ActivityBreadCrumbs />
          <GamePageHeroSection
            pageHeroData={props.pageHeroData}
            gameStatData={props.gameStatData}
          />
          <StoryLineSection sectionData={props.storyLineSectionData} />
          <YoutubeVideoSection
            videoData={props.videoData}
            activitySlug={props.activitySlug}
          />
          <GameGallerySection sectionData={props.gallerySectionDataData} />
          <MoorEscapeRoomCarouselSection
            sectionData={props.mooreEscapeGameCarouselSectionData}
          />
        </div>
      )}
{props.activityType == "Others" && (
     ==================V2 content======== end */}

      
        <div id="mainContent" className="main-content old-ui-v1 nobtn-main-content ">
           <ActivityBreadCrumbs />
          <ActivityRootHero
            pageData={props.pageData}
            activitySlug={props.activitySlug}
          />

          <ActivityRootDetails
            activityData={props.activityData}
            activitySlug={props.activitySlug}
          />

          <ActivityGallery activityGallery={props.activityGallery} />
          <ActivityVideo
            videoData={props.videoData}
            activitySlug={props.activitySlug}
          />
        </div>
    

      {/* ====================================================================V1 content=====     )}     ===================================================================================== end */}

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
  //console.log(JSON.stringify(DATA.storyLineSectionData));

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      activitySlug: context.params.activitiesSlug, //DATA.gameSlug,
      currentActivitySlug: DATA.currentActivitySlug,
      activityType: DATA.activityType,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      activityData: DATA.activityData,
      videoData: DATA.videoData,
      activityGallery: DATA.activityGallery,
      //==============================v2 data
      pageHeroData: DATA.pageHeroData,
      gameStatData: DATA.gameStatData,
      storyLineSectionData: DATA.storyLineSectionData,
      gallerySectionDataData: DATA.gallerySectionDataData,
      mooreEscapeGameCarouselSectionData:
        DATA.mooreEscapeGameCarouselSectionData,
    },
    revalidate: 60,
  };
};
