import { getLocationSlugUrl } from "../../api/Locations/getLocationSlugUrls";
import { getLocationActivitiesListPageData } from "../../api/DynamicLocations/getLocationActivitiesListPageData";
import Script from "next/script";
import LocationNav from "../../../comps/locationsPage/LocationNav";
import LocationFooter from "../../../comps/locationsPage/LocationFooter";
import PageSeo from "../../../comps/util/PageSeo";
import DynamicPageBread from "../../../comps/util/DynamicPageBread";
import ActivityLocListHero from "../../../comps/activitiyPageComps/ActivityLocListHero";
import ActivityLocList from "../../../comps/activitiyPageComps/ActivityLocList";

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
      />
      <div id="mainContent" className="main-content">
        <DynamicPageBread
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          activeSlug="activities"
          activeLabel="Activities"
        />
        <ActivityLocListHero
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
        />
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
  //const singleBlogData = await getSingleBlogData(context.params.activitiesSlug);
  // console.log(context.params.activitiesSlug);
  //console.log("Location: " + context.params.locationSlug);
  const DATA = await getLocationActivitiesListPageData(
    context.params.locationSlug
  );
  //console.log(DATA);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,

      locationName: DATA.locationName,
      locationSlug: DATA.locationSlug,
      isPublished: DATA.isPublished,
      totalLocations: DATA.totalLocations,
      locationInfo: DATA.locationInfo,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,

      allBooking: DATA.allBooking,

      businessHours: DATA.businessHours,
      holidayHours: DATA.holidayHours,
      activityData: DATA.activityListData,
    },
    revalidate: 12,
  };
};

export default LocationActivities;
