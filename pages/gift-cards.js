import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";

// page template=============

import GameHomeHero from "../comps/activitiyPageComps/GameHomeHero";
import { getGiftCardPageData } from "./api/getGiftCardPageData";
import BuyGiftCards from "../comps/giftCardPageComps/BuyGiftCards";
import WhyAdvGiftCards from "../comps/giftCardPageComps/WhyAdvGiftCards";

import Seofields from "../comps/util/SeoFields";
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
import { useState } from "react";

const GiftCard = (props) => {
  const [showGiftBookingList, setShowGiftBookingList] = useState(false);
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
      {showGiftBookingList && (
        <div className="gftmenu">
          <GiftMenu
            locationlist={props.locationlist}
            setShowGiftBookingList={setShowGiftBookingList}
          />
        </div>
      )}

      {/* =======header content======== */}
      <Seofields meta={props.pagemeta} />
      <Homenav
        locationlist={props.locationlist}
        activitylist={props.activitylist}
        eventlist={props.eventlist}
      />
      {/* =======header content ======== end */}

      {/* =========================================================================================main content ======== end */}

      {/* =======breadcum content and breadcum========  */}
      {/* <div className="breadcums  py-1 md:py-2 bg-[#fffceb]">
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
        </div>*/}
      {/* =======breadcum content and breadcum root page template======== end */}

      <GiftHeroBaner
        pagedata={props.pagedata}
        locationlist={props.locationlist}
        setShowGiftBookingList={setShowGiftBookingList}
      />

      <GiftSpotOn setShowGiftBookingList={setShowGiftBookingList} />
      <GiftVenGram setShowGiftBookingList={setShowGiftBookingList} />
      <HowGiftCardsWork setShowGiftBookingList={setShowGiftBookingList} />
      <GiftRedeem
        redeemgames={props.redeemgames}
        setShowGiftBookingList={setShowGiftBookingList}
      />
      <GiftPerfectFor setShowGiftBookingList={setShowGiftBookingList} />
      <GiftGallery setShowGiftBookingList={setShowGiftBookingList} />
      <GiftEffect setShowGiftBookingList={setShowGiftBookingList} />

      <GiftFaq
        faqlist={props.faqlist}
        setShowGiftBookingList={setShowGiftBookingList}
      />
      {/*<GameHomeHero gametotal="not" pagedata={props.pagedata} />*/}
      {/*<BuyGiftCards locationlist={props.locationlist} />*/}
      {/*<WhyAdvGiftCards />*/}

      {/* =========================================================================================main content ======== end */}

      <Footer
        locationlist={props.locationlist}
        totallocations={props.pagedata.totalLocations}
      />
    </>
  );
};

export default GiftCard;

export const getStaticProps = async () => {
  const giftpagedataData = await getGiftCardPageData();
  // console.log(giftpagedataData.redeemgames);
  return {
    props: {
      pagemeta: giftpagedataData.pagemeta,
      pagedata: giftpagedataData.pagedata,
      locationlist: giftpagedataData.locationlist,
      activitylist: giftpagedataData.activitylistSlug,
      eventlist: giftpagedataData.eventlistSlug,
      faqlist: giftpagedataData.gift_faq,
      redeemgames: giftpagedataData.redeemgames,
    },
  };
};
