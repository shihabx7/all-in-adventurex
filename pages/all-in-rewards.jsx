//import { getUnlimitedEscapePageData } from "./api/getUnlimitedEscapePageData";
import { getAllinRewardPageData } from "./api/getAllinRewardPageData";
import { useState } from "react";
// page template=============
import RootNav from "../comps/RootNav";
import AllinRewardNav from "../comps/allInRewards/AllInRewardsNav";
import RootFooter from "../comps/RootFooter";
import PageBread from "../comps/util/PageBread";
import SinglePageSeo from "../comps/util/SinglePageSeo";
//========================================================================new components
import RewardsHero from "../comps/allInRewards/RewardsHero";
import RewardCarousel from "../comps/allInRewards/elements/RewardCarousel";
import WhatIsRewards from "../comps/allInRewards/WhatIsRewards";
import HowRewardWorks from "../comps/allInRewards/HowRewardWorks";
import NoteToRemember from "../comps/allInRewards/NoteToRemember";
import CreateValue from "../comps/allInRewards/CreateValue";
import AllInRewardFaq from "../comps/allInRewards/AllInRewardFaq";
//=======================================================================old component
import UnlimitedEscapeRoomHero from "../comps/unlimitedEscapeRoom/UnlimitedEscapeRoomHero";
import WhatIsUnlimitedPlayPass from "../comps/unlimitedEscapeRoom/WhatIsUnlimitedPlayPass";
import HowUnlimitedPlayPassWork from "../comps/unlimitedEscapeRoom/HowUnlimitedPlayPassWork";
import CreatUnlimitedDeal from "../comps/unlimitedEscapeRoom/CreatUnlimitedDeal";
import UnlimitedEscapeFaq from "../comps/unlimitedEscapeRoom/UnlimitedEscapeFaq";
import UnlimitedEscapeGameMenu from "../comps/unlimitedEscapeRoom/UnlimitedEscapeGameMenu";

const AllInRewards = (props) => {
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
      <AllinRewardNav
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
        <RewardsHero setShowUerBookingList={setShowUerBookingList} />
        <RewardCarousel />
        <WhatIsRewards />
        <HowRewardWorks />
        <NoteToRemember />
        <CreateValue />
        <AllInRewardFaq />
      </div>
      {/* =========================================================================================main content ======== end */}

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default AllInRewards;

export const getStaticProps = async () => {
  const DATA = await getAllinRewardPageData();
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
    // - At most once every 10 seconds
    revalidate: 60,
  };
};
