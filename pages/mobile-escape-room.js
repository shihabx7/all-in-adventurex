import { getRootMobileEscapeRoomPageData } from "./api/getRootMobileEscapeRoomPageData";
import MobileEscapeGamePageUI from "../comps/mobileEscapeGames/MobileEscapeGamePageUI";
import Script from "next/script";

// page template=============

import MobileEscapeNav from "../comps/mobileEscapeGames/MobileEscapeNav";
import RootNav from "../comps/RootNav";
import MobileEscapeRootMenu from "../comps/mobileEscapeGames/MobileEscapeRootMenu";
import RootFooter from "../comps/RootFooter";
import PageBread from "../comps/util/PageBread";
import SinglePageSeo from "../comps/util/SinglePageSeo";

import { useState } from "react";
import EscapeGameCarousel from "../comps/homepagecomps/EscapeGameCarousel";

const RootMobileEscapeRoom = (props) => {
  const [showMobileEecapeMenu, setShowMobileEecapeMenu] = useState(false);
  const [goMobileEecapeForm, setGoMobileEecapeForm] = useState(false);

  /* customizing breadcum */

  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      {showMobileEecapeMenu && (
        <MobileEscapeRootMenu
          locationSlugList={props.locationSlugList}
          setShowMobileEecapeMenu={setShowMobileEecapeMenu}
          setGoMobileEecapeForm={setGoMobileEecapeForm}
          goMobileEecapeForm={goMobileEecapeForm}
        />
      )}
      {/* =======header content======== */}
      <SinglePageSeo meta={props.pageMeta} />
      <MobileEscapeNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
        setShowMobileEecapeMenu={setShowMobileEecapeMenu}
        setGoMobileEecapeForm={setGoMobileEecapeForm}
        goMobileEecapeForm={goMobileEecapeForm}
      />
      {/* =======header content ======== end */}

      {/* =========================================================================================main content ======== end */}

      <div id="mainContent" className="main-content">
        <PageBread />
        <MobileEscapeGamePageUI
          mobileEscapeRoomPageData={props.mobileEscapeRoomPageData}
          escapeGameCarouselSectionData={props.escapeGameCarouselSectionData}
          setShowMobileEecapeMenu={setShowMobileEecapeMenu}
          setGoMobileEecapeForm={setGoMobileEecapeForm}
          goMobileEecapeForm={goMobileEecapeForm}
        />
      </div>
      {/* =========================================================================================main content ======== end */}

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default RootMobileEscapeRoom;

export const getStaticProps = async () => {
  const DATA = await getRootMobileEscapeRoomPageData();
  //console.log(DATA.escapeGameCarouselSectionData);
  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      escapeGameCarouselSectionData: DATA.escapeGameCarouselSectionData,
      mobileEscapeRoomPageData: DATA.mobileEscapeRoomPageData,
    },
    revalidate: 12,
  };
};
