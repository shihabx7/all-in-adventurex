import { getFindYourPhotoPageData } from "./api/FindPhotos/getFindYourPhotoPageData";
import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import FindPhotosHero from "../comps/findPhotos/FindPhotosHero";
import SinglePageSeo from "../comps/util/SinglePageSeo";

const FindPhotos = (props) => {
  return (
    <>
      {/* =======header content======== */}
      <SinglePageSeo meta={props.pageMeta} />
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
      >
        {/* =======breadcum content and breadcum root page template======== end */}

        <FindPhotosHero
          locationSlugList={props.locationSlugList}
          photoList={props.photoList.list}
          hasMore={props.photoList.hasMore}
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
  const DATA = await getFindYourPhotoPageData();
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
    revalidate: 10,
  };
};
