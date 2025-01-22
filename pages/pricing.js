import { getPricingPageData } from "./api/getPricingPageData";
import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import UnlimitedEscapeRoomSection from "../comps/unlimitedEscapeRoom/UnlimitedEscapeRoomSection";

// page template=============

import PricingPageHero from "../comps/pricingPageComps/PricingPageHero";
import PriceForLargerGroup from "../comps/pricingPageComps/PriceForLargerGroup";
import PriceInperson from "../comps/pricingPageComps/PriceInperson";
import PricingNextGen from "../comps/pricingPageComps/PricingNextGen";
import PricingQuest from "../comps/pricingPageComps/PricingQuest";
import PricingOthersGame from "../comps/pricingPageComps/PricingOthersGame";

import PricingEvents from "../comps/pricingPageComps/PricingEvents";
import PricingGiftCard from "../comps/pricingPageComps/PricingGiftCard";
import PageBread from "../comps/util/PageBread";
import SinglePageSeo from "../comps/util/SinglePageSeo";
import UnlimitedEscapeGameMenu from "../comps/unlimitedEscapeRoom/UnlimitedEscapeGameMenu";
import { useState } from "react";

const Pricing = (props) => {
  const [showUerBookingList, setShowUerBookingList] = useState(false);
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
        className="main-content nobtn-main-content bg-center relative"
      >
        {/* =======breadcum content and breadcum========  */}
        <PageBread />
        {/* =======breadcum content and breadcum root page template======== end */}

        <PricingPageHero pageData={props.pageData} />
        <PriceInperson
          pricing={props.inpersonpricing}
          setShowUerBookingList={setShowUerBookingList}
        />
        <PricingNextGen pricing={props.nextgenpricing} />
        <PricingQuest pricing={props.questgenpricing} />
        <PricingOthersGame />
        <PricingEvents />
        <PricingGiftCard />
        {/*<PrivcingVirtualGames/>*/}
        <PriceForLargerGroup />

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default Pricing;

export const getStaticProps = async () => {
  const DATA = await getPricingPageData();

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageData: DATA.pageData,
      pageMeta: DATA.pageMeta,
      inpersonpricing: DATA.inpersonpricing,
      nextgenpricing: DATA.nextgenpricing,
      questgenpricing: DATA.questgenpricing,
    },
    revalidate: 12,
  };
};
