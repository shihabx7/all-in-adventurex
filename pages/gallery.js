import { FiChevronRight } from "react-icons/fi";
import { getGalleryPageData } from "./api/getGalleryPageData";
import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import Breadcrumbs from "nextjs-breadcrumbs";

import GalleryPageHero from "../comps/galleryPageComps/GalleryPageHero";
import InpersonGallerySection from "../comps/galleryPageComps/InpersonGallerySection";
import EventGallerySection from "../comps/galleryPageComps/EventGallerySection";
import OtherGamesGallerySection from "../comps/galleryPageComps/OtherGamesGallerySection";
import PageBread from "../comps/util/PageBread";
import SinglePageSeo from "../comps/util/SinglePageSeo";
import GallerySection from "../comps/galleryPageComps/GallerySection";

const gallery = (props) => {
  return (
    <>
      {/* =======header content======== */}
      <SinglePageSeo meta={props.pagemeta} />
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
        className="main-content nobtn-main-content bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]"
      >
        {/* =======breadcum content and breadcum========  */}
        <PageBread />
        {/* =======breadcum content and breadcum root page template======== end */}
        <GalleryPageHero pageData={props.pageData} />

        <div className="gallery-section py-16 md:py-20 lg:py-28 relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
          {/*======================= boder img============== */}
          <div className="sec-divider-top w-full absolute top-0 left-0 ">
            <img
              className="w-full hidden md:block"
              src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
            ></img>
            <img
              className="w-full rotate-180 md:hidden"
              src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
            ></img>
          </div>
          <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
            <img
              className="w-full hidden md:block"
              src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
            ></img>
            <img
              className="w-full  md:hidden"
              src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
            ></img>
          </div>
          {/*======================= boder img end============== */}
          <div className="section-container max-w-7xl mx-auto relative z-30">
            {/* =======inperson  gallery========  */}
            <GallerySection galleryGroup={props.galleryGroup} />
          </div>
        </div>

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default gallery;

export const getStaticProps = async () => {
  const DATA = await getGalleryPageData();

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,

      totalLocations: DATA.totalLocations,
      pagemeta: DATA.pageMeta,
      pageData: DATA.pageData,
      galleryGroup: DATA.galleryGroup,
      gallerylist: DATA.galleryList,
    },
    revalidate: 12,
  };
};
