import Script from "next/script";
import { useState } from "react";
import { getSingleMobileEscapeRoomPageData } from "../../api/getSingleMobileEscapeRoomPageData";
import MobileEscapeGamePageUI from "../../../comps/mobileEscapeGames/MobileEscapeGamePageUI";
// page template=============
import MobileEscapeNav from "../../../comps/mobileEscapeGames/MobileEscapeNav";
import MobileEscapeRootMenu from "../../../comps/mobileEscapeGames/MobileEscapEx";
import RootFooter from "../../../comps/RootFooter";
import SinglePageSeo from "../../../comps/util/SinglePageSeo";

const SingleMobileEscapeRoom = (props) => {
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
      {/* =======header content <SinglePageSeo meta={props.pageMeta} />======== */}
      <SinglePageSeo meta={props.pageMeta} />
      <MobileEscapeNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
        setShowMobileEecapeMenu={setShowMobileEecapeMenu}
        setGoMobileEecapeForm={setGoMobileEecapeForm}
        goMobileEecapeForm={goMobileEecapeForm}
        locationSlug={"winston-salem-nc"}
        locationName={"Winston-salem, NC"}
      />
      {/* =======header content ======== end */}

      {/* =========================================================================================main content ======== end */}

      <div id="mainContent" className="main-content">
        <MobileEscapeGamePageUI
          mobileEscapeRoomPageData={props.mobileEscapeRoomPageData}
          setShowMobileEecapeMenu={setShowMobileEecapeMenu}
          setGoMobileEecapeForm={setGoMobileEecapeForm}
          goMobileEecapeForm={goMobileEecapeForm}
          locationSlug={"winston-salem-nc"}
          locationName={"Winston-salem, NC"}
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

export default SingleMobileEscapeRoom;

export const getStaticProps = async () => {
  const DATA = await getSingleMobileEscapeRoomPageData("winston-salem-nc");
  // console.log(giftpagedataData.redeemgames);
  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      mobileEscapeRoomPageData: DATA.mobileEscapeRoomPageData,
    },
    revalidate: 12,
  };
};
