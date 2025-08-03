import { getLocationListPageData } from "../api/Locations/getLocationListPageData";

import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";
import LocationListPageHero from "../../comps/locationsPage/LocationListPageHero";
import PageBread from "../../comps/util/PageBread";
import PageSeo from "../../comps/util/PageSeo";
import LocationList from "../../comps/locationsPage/LocationList";

const Locations = (props) => {
  /* ========================page content=================== */
  return (
    <>
      <PageSeo meta={props.pageMeta} />
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
      />

      <div id="mainContent" className="main-content nobtn-main-content">
        {/* =======header content and breadcum======== */}

        <PageBread />
        {/* =======header content and breadcum======== end */}

        {/* ============page baner=============*/}
        <LocationListPageHero pageData={props.pageData} />
        {/* ============page baner end=============*/}
        {/* ============Location list=============*/}
        <LocationList locationListData={props.locationListData} />
        {/* ============Location list end=============*/}
      </div>
      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default Locations;

export const getStaticProps = async () => {
  const DATA = await getLocationListPageData();
  //console.log(DATA);
  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      locationListData: DATA.locationListData,
    },

    // - At most once every 10 seconds
    revalidate: 12,
  };
};
