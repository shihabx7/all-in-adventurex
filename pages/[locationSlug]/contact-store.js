// pages/[locationSlug]/contact-store.js
import { getLocationSlugUrl } from "../api/Locations/getLocationSlugUrls";
import { getLocationsContactPageData } from "../api/DynamicLocations/getLocationsContactPageData";

import Script from "next/script";
import PageSeo from "../../comps/util/PageSeo";
import LocationFooter from "../../comps/locationsPage/LocationFooter";
import LocationNav from "../../comps/locationsPage/LocationNav";
import DynamicPageBread from "../../comps/util/DynamicPageBread";
import ContactStoreHero from "../../comps/contactComps/ContactStoreHero";
import StoreContact from "../../comps/contactComps/StoreContact";
const ContactStorePage = (props) => {
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
      />
      <div id="mainContent" className="main-content">
        {/* =======header content and breadcum======== */}
        <DynamicPageBread
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          activeSlug={"contact-store"}
          activeLabel="Contact Store"
        />
        <ContactStoreHero
          pageData={props.pageData}
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          isPublished={props.isPublished}
          allBooking={props.allBooking}
          eventBooking={props.eventBooking}
        />
        <StoreContact
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          isPublished={props.isPublished}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
          mapInfo={props.mapInfo}
        />
        {/* =======header content and breadcum======== end */}
        {/* ===========Page Content here=========*/}
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
  const DATA = await getLocationsContactPageData(context.params.locationSlug);
  // console.log(DATA);

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
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      allBooking: DATA.allBooking,
      eventBooking: DATA.eventBooking,
      giftBooking: DATA.giftBooking,
      businessHours: DATA.businessHours,
      holidayHours: DATA.holidayHours,
      mapInfo: DATA.mapInfo,
    },
    revalidate: 12,
  };
};

export default ContactStorePage;
