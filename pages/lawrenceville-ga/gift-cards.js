import Footer from "../../comps/Footer";
import Homenav from "../../comps/Homenav";
import BreadcumNew from "../../comps/util/BreadcumNew";

import { getLocationIndGiftPageData } from "../api/LocationIndData/getLocationIndGiftPageData";
import GameLocGiftHero from "../../comps/activitiyPageComps/GameLocGiftHero";

import WhyAdvGiftCards from "../../comps/giftCardPageComps/WhyAdvGiftCards";

import BuyLocGift from "../../comps/activitiyPageComps/BuyLocGift";
import Seofields from "../../comps/util/SeoFields";
// new booking comps
import GiftHeroBaner from "../../comps/giftCardPageComps/GiftHeroBaner";
import GiftSpotOn from "../../comps/giftCardPageComps/GiftSpotOn";
import GiftVenGram from "../../comps/giftCardPageComps/GiftVenGram";
import HowGiftCardsWork from "../../comps/giftCardPageComps/HowGiftCardsWork";
import GiftRedeem from "../../comps/giftCardPageComps/GiftRedeem";
import GiftPerfectFor from "../../comps/giftCardPageComps/GiftPerfectFor";
import GiftGallery from "../../comps/giftCardPageComps/GiftGallery";
import GiftEffect from "../../comps/giftCardPageComps/GiftEffect";
import GiftFaq from "../../comps/giftCardPageComps/GiftFaq";

const viewLocGift = (props) => {
  const getLoc = (slug) => {
    var locname = slug.split("-");
    var st = locname[locname.length - 1].toString();

    locname = locname.slice(0, -1);
    locname = locname.join(" ");
    return locname + ", " + st;
  };

  return (
    <>
      <Seofields meta={props.pagemeta} />
      <Homenav
        locationslug={props.pagedata.locationslug}
        bookinggame={props.pagedata.bookingdata}
        eventbooking={props.pagedata.eventbooking}
        location={getLoc(props.pagedata.locationslug)}
        activitylist={props.activitylist}
        eventlist={props.eventlist}
        locationlist={props.locationlist}
        publish_status={props.pagedata.publish_status}
      />
      <div id="mainContent" className="main-content">
        <GiftHeroBaner
          pagedata={props.pagedata}
          bookingData={props.pagedata.bookingdata}
        />

        <GiftSpotOn bookingData={props.pagedata.bookingdata} />
        <GiftVenGram bookingData={props.pagedata.bookingdata} />
        <HowGiftCardsWork bookingData={props.pagedata.bookingdata} />
        <GiftRedeem
          redeemgames={props.redeemgames}
          bookingData={props.pagedata.bookingdata}
        />
        <GiftPerfectFor bookingData={props.pagedata.bookingdata} />
        <GiftGallery bookingData={props.pagedata.bookingdata} />
        <GiftEffect bookingData={props.pagedata.bookingdata} />

        <GiftFaq
          faqlist={props.faqlist}
          bookingData={props.pagedata.bookingdata}
        />
        {/* =======header content and breadcum======== */}

        {/* <div className="breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]">
          <BreadcumNew />
  </div>*/}

        {/* =======header content and breadcum======== end */}
        {/* ===========Page Content here=========
                         <GameLocHero pagedata={props.pagedata}/>
                         */}
        {/*<GameLocGiftHero pagedata={props.pagedata} />
        <BuyLocGift
          locationslug={props.pagedata.locationslug}
          bookingdata={props.pagedata.bookingdata}
        />
        <WhyAdvGiftCards
          locationslug={props.pagedata.locationslug}
          bookingdata={props.pagedata.bookingdata}
        />
                        <GiftFaq faqlist={props.faqlist} />*/}
      </div>

      <Footer
        location={getLoc(props.pagedata.locationslug)}
        locationlist={props.locationlist}
        totallocations={props.pagedata.totalLocations}
      />
    </>
  );
};

export default viewLocGift;

export const getStaticProps = async () => {
  const locationGiftdata = getLocationIndGiftPageData("lawrenceville-ga");

  return {
    props: {
      pagedata: locationGiftdata.pagedata,
      pagemeta: locationGiftdata.pagemeta,
      faqlist: locationGiftdata.gift_faq,
      activitylist: locationGiftdata.activitylist,
      eventlist: locationGiftdata.eventlist,
      locationlist: locationGiftdata.locationlist,
      redeemgames: locationGiftdata.redeemgames,
    },
    revalidate: 30,
  };
};
