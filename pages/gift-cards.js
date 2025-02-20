import { getGiftCardsPageData } from "./api/getGiftCardsPageData";

// page template=============
import RootNav from "../comps/RootNav";
import GiftCardNav from "../comps/giftCardPageComps/GiftCardNav";
import RootFooter from "../comps/RootFooter";
import PageBread from "../comps/util/PageBread";
import SinglePageSeo from "../comps/util/SinglePageSeo";
import GiftHeroBaner from "../comps/giftCardPageComps/GiftHeroBaner";
import GiftSpotOn from "../comps/giftCardPageComps/GiftSpotOn";
import GiftVenGram from "../comps/giftCardPageComps/GiftVenGram";
import HowGiftCardsWork from "../comps/giftCardPageComps/HowGiftCardsWork";
import GiftRedeem from "../comps/giftCardPageComps/GiftRedeem";
import GiftPerfectFor from "../comps/giftCardPageComps/GiftPerfectFor";
import GiftGallery from "../comps/giftCardPageComps/GiftGallery";
import GiftEffect from "../comps/giftCardPageComps/GiftEffect";
import GiftFaq from "../comps/giftCardPageComps/GiftFaq";
import GiftMenu from "../comps/headerComps/GiftMenu";
import GiftCardBookingMenu from "../comps/giftCardPageComps/GiftCardBookingMenu";
import { useState } from "react";
import Script from "next/script";

const GiftCard = (props) => {
  const [showGiftBookingList, setShowGiftBookingList] = useState(false);

  /* customizing breadcum */

  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      {showGiftBookingList && (
        <div className="gftmenu">
          <GiftCardBookingMenu
            locationSlugList={props.locationSlugList}
            setShowGiftBookingList={setShowGiftBookingList}
          />
        </div>
      )}

      {/* =======header content======== */}
      <SinglePageSeo meta={props.pageMeta} />
      <GiftCardNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
        setShowGiftBookingList={setShowGiftBookingList}
      />
      {/* =======header content ======== end */}

      {/* =========================================================================================main content ======== end */}

      <div id="mainContent" className="main-content">
        <PageBread />
        <GiftHeroBaner
          pagedata={props.pagedata}
          locationlist={props.locationlist}
          setShowGiftBookingList={setShowGiftBookingList}
        />

        <GiftSpotOn setShowGiftBookingList={setShowGiftBookingList} />
        <GiftVenGram setShowGiftBookingList={setShowGiftBookingList} />
        <HowGiftCardsWork setShowGiftBookingList={setShowGiftBookingList} />
        <GiftRedeem
          giftReedem={props.giftReedem}
          setShowGiftBookingList={setShowGiftBookingList}
        />
        <GiftPerfectFor setShowGiftBookingList={setShowGiftBookingList} />
        <GiftGallery
          giftGallery={props.giftGallery ? props.giftGallery : false}
          setShowGiftBookingList={setShowGiftBookingList}
        />
        <GiftEffect setShowGiftBookingList={setShowGiftBookingList} />

        <GiftFaq
          giftFaqs={props.giftFaqs}
          setShowGiftBookingList={setShowGiftBookingList}
        />
        {/*<GameHomeHero gametotal="not" pagedata={props.pagedata} />*/}
        {/*<BuyGiftCards locationlist={props.locationlist} />*/}
        {/*<WhyAdvGiftCards />*/}
      </div>
      {/* =========================================================================================main content ======== end */}

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default GiftCard;

export const getStaticProps = async () => {
  const DATA = await getGiftCardsPageData();
  // console.log(giftpagedataData.redeemgames);
  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,

      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,

      giftReedem: DATA.giftReedem,
      giftFaqs: DATA.giftFaqs,
      giftGallery: DATA.giftGallery,
    },
    revalidate: 12,
  };
};
