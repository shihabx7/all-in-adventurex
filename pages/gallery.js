import { FiChevronRight } from "react-icons/fi";
import { getGalleryPageData } from "./api/getGalleryPageData";
import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import Breadcrumbs from "nextjs-breadcrumbs";

import GalleryPageHero from "../comps/galleryPageComps/GalleryPageHero";
import InpersonGallerySection from "../comps/galleryPageComps/InpersonGallerySection";
import EventGallerySection from "../comps/galleryPageComps/EventGallerySection";
import OtherGamesGallerySection from "../comps/galleryPageComps/OtherGamesGallerySection";

import Seofields from "../comps/util/SeoFields";

const gallery = (props) => {
  const toTitleCase = (title) => {
    const titlefres = title.replace(/-/g, " ");
    const btitle = titlefres
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" "); // breadcum title capitalize

    return (
      <div className="bitem flex items-center">
        <span>{btitle}</span>{" "}
        <span className="bsep text-gold">
          <FiChevronRight />
        </span>
      </div>
    );
  };
  /* customizing breadcum */

  return (
    <>
      {/* =======header content======== */}
      <Seofields meta={props.pagemeta} />
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
        <div className="breadcums  py-1 md:py-2 bg-[#fffceb]">
          <Breadcrumbs
            replaceCharacterList={[{ from: "-", to: " " }]}
            listClassName="max-w-7xl mx-auto px-2 md:px-4 breadcum-list text-sm md:text-base lg:text-lg"
            inactiveItemClassName="inline-block text-[#6a6a6a] hover:text-red-700"
            activeItemClassName="inline-block text-[#212121]"
            rootLabel="home"
            transformLabel={(title) => {
              return toTitleCase(title);
            }}
          ></Breadcrumbs>
        </div>
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
            <InpersonGallerySection gallerylist={props.gallerylist} />
            {/* =======inperson gallery========  end*/}
            {/* =======event gallery========  */}
            <EventGallerySection gallerylist={props.gallerylist} />
            {/* =======event gallery========  end*/}
            {/* =======OTHERS GAMES AND ACTIVITES========  */}
            <OtherGamesGallerySection gallerylist={props.gallerylist} />
            {/* =======OTHERS GAMES AND ACTIVITES========  end*/}
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
      gallerylist: DATA.galleryList,
    },
  };
};
