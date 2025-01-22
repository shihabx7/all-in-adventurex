import { getUnlimitedEscapePageData } from "./api/getUnlimitedEscapePageData";

// page template=============
import RootNav from "../comps/RootNav";
import UerNav from "../comps/unlimitedEscapeRoom/UerNav";
import RootFooter from "../comps/RootFooter";
import PageBread from "../comps/util/PageBread";
import SinglePageSeo from "../comps/util/SinglePageSeo";
import UnlimitedEscapeRoomHero from "../comps/unlimitedEscapeRoom/UnlimitedEscapeRoomHero";
import WhatIsUnlimitedPlayPass from "../comps/unlimitedEscapeRoom/WhatIsUnlimitedPlayPass";
import HowUnlimitedPlayPassWork from "../comps/unlimitedEscapeRoom/HowUnlimitedPlayPassWork";
import CreatUnlimitedDeal from "../comps/unlimitedEscapeRoom/CreatUnlimitedDeal";
import UnlimitedEscapeFaq from "../comps/unlimitedEscapeRoom/UnlimitedEscapeFaq";
import UnlimitedEscapeGameMenu from "../comps/unlimitedEscapeRoom/UnlimitedEscapeGameMenu";
import { useState } from "react";

const UnlimitedER = (props) => {
  const [showUerBookingList, setShowUerBookingList] = useState(false);

  /* customizing breadcum */

  return (
    <>
      {showUerBookingList && (
        <div className="uermenu">
          <UnlimitedEscapeGameMenu
            locationSlugList={props.locationSlugList}
            setShowUerBookingList={setShowUerBookingList}
          />
        </div>
      )}

      {/* =======header content======== */}
      <SinglePageSeo meta={props.pageMeta} />
      <UerNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
        setShowUerBookingList={setShowUerBookingList}
      />
      {/* =======header content ======== end */}

      {/* =========================================================================================main content ======== end */}

      <div id="mainContent" className="main-content">
        <PageBread />
        <UnlimitedEscapeRoomHero
          setShowUerBookingList={setShowUerBookingList}
        />
        <WhatIsUnlimitedPlayPass
          setShowUerBookingList={setShowUerBookingList}
        />
        <HowUnlimitedPlayPassWork
          setShowUerBookingList={setShowUerBookingList}
        />
        <CreatUnlimitedDeal setShowUerBookingList={setShowUerBookingList} />
        <UnlimitedEscapeFaq setShowUerBookingList={setShowUerBookingList} />
      </div>
      {/* =========================================================================================main content ======== end */}

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default UnlimitedER;

export const getStaticProps = async () => {
  const DATA = await getUnlimitedEscapePageData();
  // console.log(giftpagedataData.redeemgames);
  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,

      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,

      //giftReedem: DATA.giftReedem,
      // giftFaqs: DATA.giftFaqs,
      // giftGallery: DATA.giftGallery,
    },
    revalidate: 12,
  };
};
