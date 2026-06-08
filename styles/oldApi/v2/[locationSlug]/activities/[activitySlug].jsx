import Script from "next/script";

import { getLocationSlugUrl } from "../../../api/Locations/getLocationSlugUrls";
import { fetchLocationActivities } from "../../../api/DynamicLocations/locationSlugUtil";
import { locationsActivityPageData } from "../../../api/v2/locations/locationsActivityPageData";
//import { getLocationsActivityPageData } from "../../../api/DynamicLocations/getLocationsActivityPageData";

import LocationNav from "../../../../comps/locationsPage/LocationNav";
import LocationFooter from "../../../../comps/locationsPage/LocationFooter";

import PageSeo from "../../../../comps/util/PageSeo";
import DynamicPageBread from "../../../../comps/util/DynamicPageBread";
//==============v2
import EescapeGamePageUI from "../../../../comps/v2/activityPageUI/EescapeGamePageUI";
//==============v1
import MobileEscapeGamePageUI from "../../../../comps/mobileEscapeGames/MobileEscapeGamePageUI";
import ToyMakerPageUI from "../../../../comps/toyMakerWorkStation/ToyMakerPageUI";

import ActivityLocHero from "../../../../comps/activitiyPageComps/ActivityLocHero";
import ActivityLocDetails from "../../../../comps/activitiyPageComps/ActivityLocDetails";
import ActivityGallery from "../../../../comps/activitiyPageComps/ActivityGallery";
import ActivityVideo from "../../../../comps/activitiyPageComps/ActivityVideo";

const LocSingleActivity = (props) => {
  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      <PageSeo meta={props.pageMeta} />
      <LocationNav
        isPublished={props.isPublished}
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
        locationName={props.locationName}
        locationSlug={props.locationSlug}
        gameBooking={props.gameBooking}
        allBooking={!props.gameBooking ? props.allBooking : false}
        partyBooking={props.partyBooking}
        hasMobileEscapeRoom={props.hasMobileEscapeRoom}
        hasToymakers={props.hasToymakers}
        activitySlug={props.activitySlug}
        giftBooking={props.giftBooking}
      />
      <div id="mainContent" className="main-content">
        {/* =======header content and breadcum======== */}
        <DynamicPageBread
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          activitySlug={props.activitySlug}
          activityName={props.activityName}
        />
        {/*  main activity components */}
        {/*console.log(props.mobileEscapeRoomPageData)*/}
        {props.pageUi === "mobile-escape-game" && (
          <>
            <MobileEscapeGamePageUI
              mobileEscapeRoomPageData={props.mobileEscapeRoomPageData}
              locationInfo={props.locationInfo}
              locationName={props.locationName}
              locationSlug={props.locationSlug}
              escapeGameCarouselSectionData={
                props.escapeGameCarouselSectionData
              }
            />
          </>
        )}
        {props.pageUi === "toymakers-workstation" && (
          <>
            <ToyMakerPageUI
              toymakersPageData={props.toymakersPageData}
              locationInfo={props.locationInfo}
              locationName={props.locationName}
              locationSlug={props.locationSlug}
              escapeGameCarouselSectionData={
                props.escapeGameCarouselSectionData
              }
            />
          </>
        )}
        {props.pageUi === "others-game" && (
          <>
            <ActivityLocHero
              isPublished={props.isPublished}
              locationInfo={props.locationInfo}
              pageData={props.pageData}
              gameBooking={props.gameBooking}
              partyBooking={props.partyBooking}
              allBooking={props.allBooking}
              businessHours={props.businessHours}
              holidayHours={props.holidayHours}
            />
            <ActivityLocDetails
              activityData={props.activityData}
              isPublished={props.isPublished}
              gameBooking={props.gameBooking}
              partyBooking={props.partyBooking}
            />
            <ActivityGallery activityGallery={props.activityGallery} />
            <ActivityVideo
              videoData={props.videoData}
              locationSlug={props.locationSlug}
            />
          </>
        )}

        {props.pageUi === "escape-game" && (
          <>
            <EescapeGamePageUI
              escapeGamePageUIData={{
                locationSlug: props.locationSlug,
                locationName: props.locationName,
                gameBooking: props.gameBooking,
                pageHeroData: props.pageHeroData,
                storyLineSectionData: props.storyLineSectionData,
                gallerySectionDataData: props.gallerySectionDataData,
                mooreEscapeGameCarouselSection:
                  props.mooreEscapeGameCarouselSection,
              }}
            />
          </>
        )}
      </div>

      <LocationFooter
        locationName={props.locationName}
        locationSlug={props.locationSlug}
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default LocSingleActivity;

export const getStaticPaths = async () => {
  //const locationSlugList = apiUrl + "locations?sort[0]=priority:asc";
  //const resLocations = await fetch(getLocationSlugUrl, apiSetting);
  //const locationsObj = await resLocations.json();
  //const locations = locationsObj.data;
  const locations = await getLocationSlugUrl();

  let paths = [];

  for (const location of locations) {
    const activities = await fetchLocationActivities(location.locationSlug);
    // console.log(context.params.length);

    const activityPaths = activities.map((activity) => ({
      params: {
        locationSlug: location.locationSlug,
        activitySlug: activity.activitySlug,
      },
    }));
    paths = paths.concat(activityPaths);
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  /*let res = null;
  let errFlag = true;

  try {
    res = await getLocationsActivityPageData(
      context.params.locationSlug,
      context.params.activitySlug
    );
  } catch (error) {
    console.log("reponse err. page not found");
    errFlag = false;
  }
  if (!errFlag) {
    return {
      redirect: {
        permanent: false, // or true
        destination: "/404",
      },
    };
  }
  const DATA = res;*/
  // for (let i = 0; i < paths.length; i++) {}
  //  console.log("parram-activityType :" + context.params.activityType);
  //  console.log("parram-activityName :" + context.params.activityName);
  //  console.log("parram-activitySlug :" + context.params.activitySlug);

  const DATA = await locationsActivityPageData(
    context.params.locationSlug,
    context.params.activitySlug
  );
  //console.log(DATA);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      activityName: DATA.activityName,
      activitySlug: DATA.activitySlug,
      locationName: DATA.locationName,
      locationSlug: DATA.locationSlug,
      isPublished: DATA.isPublished,
      totalLocations: DATA.totalLocations,
      locationInfo: DATA.locationInfo,
      pageMeta: DATA.pageMeta,
      pageUi: DATA.pageUi,
      //=============v2
      // pgr: DATA.pgr,
      //  loca: DATA.loca,
      pageHeroData: DATA.pageHeroData,
      storyLineSectionData: DATA.storyLineSectionData,
      gallerySectionDataData: DATA.gallerySectionDataData,
      mooreEscapeGameCarouselSection: DATA.mooreEscapeGameCarouselSection,
      //==================v1
      pageData: DATA.pageData,
      gameBooking: DATA.gameBooking,
      allBooking: DATA.allBooking,
      partyBooking: DATA.partyBooking,
      businessHours: DATA.businessHours,
      holidayHours: DATA.holidayHours,
      giftBooking: DATA.giftBooking,
      activityData: DATA.activityData,
      activityGallery: DATA.activityGallery,
      videoData: DATA.videoData,
      hasMobileEscapeRoom: DATA.hasMobileEscapeRoom,
      hasToymakers: DATA.hasToymakers,

      mobileEscapeRoomPageData: DATA.mobileEscapeRoomPageData,
      toymakersPageData: DATA.toymakersPageData,
      escapeGameCarouselSectionData: DATA.escapeGameCarouselSectionData,
    },
    revalidate: 30,
  };
};
