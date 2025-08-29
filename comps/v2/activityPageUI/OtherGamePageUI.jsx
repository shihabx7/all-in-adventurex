import EscapeGamePageVideoBgHero from "../escapeGamePage/sections/EscapeGamePageVideoBgHero";
import ActivityRootDetails from "../../activitiyPageComps/ActivityRootDetails";
import ActivityRootHero from "../../activitiyPageComps/ActivityRootHero";
import ActivityGallery from "../../activitiyPageComps/ActivityGallery";
import ActivityVideo from "../../activitiyPageComps/ActivityVideo";

export default function OtherGamePageUI({ otherGamePageUIData }) {
  return (
    <div className="other-game=page-ui">
      <ActivityRootHero pageData={otherGamePageUIData.pageData} />
      <ActivityRootDetails activityData={otherGamePageUIData.activityData} />
      <ActivityGallery activityGallery={otherGamePageUIData.activityGallery} />
      <ActivityVideo videoData={otherGamePageUIData.videoData} />
      {/* =======breadcum content and breadcum 
          <ActivityRootHero pageData={props.pageData} />
         <ActivityRootDetails activityData={props.activityData} />
        <ActivityGallery activityGallery={props.activityGallery} />
        <ActivityVideo videoData={props.videoData} />======== end */}
    </div>
  );
}
