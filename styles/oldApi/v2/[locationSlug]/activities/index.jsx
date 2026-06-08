import Script from "next/script";
import { getLocationSlugUrl } from "../../../api/Locations/getLocationSlugUrls";

import { locationActivitiesListPageData } from "../../../api/v2/locations/locationActivitiesListPageData";

import LocationNav from "../../../../comps/locationsPage/LocationNav";
import LocationFooter from "../../../../comps/locationsPage/LocationFooter";
import PageSeo from "../../../../comps/util/PageSeo";
import DynamicPageBread from "../../../../comps/util/DynamicPageBread";
//===================v2
import ActivityListPageVideoBgHero from "../../../../comps/v2/escapeGamePage/sections/ActivityListPageVideoBgHero";
import ActivityFilterListSection from "../../../../comps/v2/escapeGamePage/sections/ActivityFilterListSection";
import EventCarouselSection from "../../../../comps/v2/homePageComps/sections/EventCarouselSection";
import ListPageFaqSection from "../../../../comps/v2/escapeGamePage/sections/ListPageFaqSection";
import EscapeGameDarkPatternBg from "../../../../comps/v2/escapeGamePage/EscapeGameDarkPatternBg";
import StoreDetailWithMapSection from "../../../../comps/v2/escapeGamePage/sections/StoreDetailWithMapSection";
//===================v1

import ToyMakerHomeSection from "../../../../comps/toyMakerWorkStation/section/ToyMakerHomeSection";

const LocationActivities = (props) => {
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
        allBooking={props.allBooking}
        hasMobileEscapeRoom={props.hasMobileEscapeRoom}
        giftBooking={props.giftBooking}
      />
      <div id="mainContent" className="main-content">
        <DynamicPageBread
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          activeSlug="activities"
          activeLabel="Activities"
        />
        {/*==================v2 */}

        <ActivityListPageVideoBgHero
          pageHeroData={props.pageHeroData}
          allBooking={props.allBooking}
          locationSlug={props.locationSlug}
        />
        <StoreDetailWithMapSection
          sectionData={props.storeAreaMapSectionData}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
          locationName={props.locationName}
          locationSlug={props.locationSlug}
        />
        <EscapeGameDarkPatternBg>
          <ActivityFilterListSection
            escapeGameListSectionData={props.escapeGameListSectionData}
            otherGameListSectionData={props.otherGameListSectionData}
            locationSlug={props.locationSlug}
          />
        </EscapeGameDarkPatternBg>
        <EventCarouselSection
          eventCarouselSectionData={props.eventCarouselSectionData}
          locationSlug={props.locationSlug}
        />
        <ListPageFaqSection
          sectionData={props.faqSectionData}
          locationSlug={props.locationSlug}
        />
        {/*==================v1 */}

        {/*<ActivityLocListHero
          pageData={props.pageData}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
          allBooking={props.allBooking}
          isPublished={props.isPublished}
        />
        <ActivityLocList
          isPublished={props.isPublished}
          locationSlug={props.locationSlug}
          activityData={props.activityData}
          hasMobileEscapeRoom={props.hasMobileEscapeRoom}
        />*/}
        {props.toyMakerPageData && (
          <ToyMakerHomeSection
            sectionData={props.toyMakerPageData.homePageSectionData}
            bookingData={props.toyMakerPageData.bookingData}
            locationSlug={props.locationSlug}
          />
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

export const getStaticPaths = async () => {
  const res = await getLocationSlugUrl();

  const paths = res.map((slug) => {
    return {
      params: { locationSlug: slug.locationSlug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  /* let res = null;
  let errFlag = true;

  try {
    res = await getLocationActivitiesListPageData(context.params.locationSlug);
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
  //const singleBlogData = await getSingleBlogData(context.params.activitiesSlug);
  // console.log(context.params.activitiesSlug);
  //console.log("Location: " + context.params.locationSlug);
  //  const DATA = await getLocationActivitiesListPageData(
  //   context.params.locationSlug
  //);

  const DATA = await locationActivitiesListPageData(
    context.params.locationSlug
  );
  //  console.log(DATA.storeAreaMapSectionData);
  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      hasMobileEscapeRoom: DATA.hasMobileEscapeRoom,
      locationName: DATA.locationName,
      locationSlug: DATA.locationSlug,
      isPublished: DATA.isPublished,
      totalLocations: DATA.totalLocations,
      locationInfo: DATA.locationInfo,
      allBooking: DATA.allBooking,
      giftBooking: DATA.giftBooking,
      businessHours: DATA.businessHours,
      holidayHours: DATA.holidayHours,
      pageMeta: DATA.pageMeta,
      //=============v2
      pageHeroData: DATA.pageHeroData,
      storeAreaMapSectionData: DATA.storeAreaMapSectionData,
      escapeGameListSectionData: DATA.escapeGameListSectionData,
      otherGameListSectionData: DATA.otherGameListSectionData,
      eventCarouselSectionData: DATA.eventCarouselSectionData,
      faqSectionData: DATA.faqSectionData,
      //============v1
      // pageData: DATA.pageData,

      //  activityData: DATA.activityListData,
      toyMakerPageData: DATA.toyMakerPageData,
    },
    revalidate: 30,
  };
};

export default LocationActivities;
