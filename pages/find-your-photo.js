import { getCustomersPhotos } from "./api/FindPhotos/getCustomersPhotos";
import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import FindPhotosHero from "../comps/findPhotos/FindPhotosHero";
import PageSeo from "../comps/util/PageSeo";
const FindPhotos = (props) => {
  return (
    <>
      {/* =======header content======== */}
      <PageSeo meta={props.pageMeta} />
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
      />
      {/* =======header content ======== end */}

      {/* =========================================================================================main content ======== end */}
      <div
        id="mainContent"
        className="main-content nobtn-main-content bg-center"
        style={{ backgroundImage: "url('/assets/game-dt-bg.jpg')" }}
      >
        {/* =======breadcum content and breadcum root page template======== end */}

        <FindPhotosHero
          locationSlugList={props.locationSlugList}
          photoList={props.photoList}
          pageData={props.pageData}
          totalLocations={props.totalLocations}
        />

        {/* =========================================================================================main content ======== end */}
      </div>

      {/*===========================Footer area===================*/}

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default FindPhotos;
export const getStaticProps = async () => {
  const DATA = await getCustomersPhotos();
  //console.log(DATA);
  // console.log(giftpagedataData.redeemgames);
  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,

      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,

      pageData: DATA.pageData,
      photoList: DATA.photoList,
    },
  };
};
