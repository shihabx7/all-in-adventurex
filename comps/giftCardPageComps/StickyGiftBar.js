import React, { useState, useEffect } from "react";
import GiftCardsMenuBooking from "./GiftCardsMenuBooking";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import Script from "next/script";

function StickyGiftBar(props) {
  const [showGiftTab, setShowGiftTab] = useState(true);
  const [showGiftBookingList, setShowGiftBookingList] = useState(false);
  const bookGiftCard = (giftBooking) => {
    FH.open({
      shortname: giftBooking.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: giftBooking.flow,
      view: { item: giftBooking.itemNo },
    });
  };
  const takeAction = (giftBooking) => {
    if (!giftBooking || !giftBooking.isActive) {
      setShowGiftBookingList(true);
    } else {
      bookGiftCard(giftBooking);
    }
  };
  const closeGiftTab = (e) => {
    e.preventDefault();
    setCookie("gift-notice", true, {
      path: "/",
      maxAge: 10200, //604800, // Expires after 24*7 hours
      sameSite: true,
    });
    setShowGiftTab(false);
  };
  useEffect(() => {
    const coc = getCookie("gift-notice");
    if (!coc) {
      setShowGiftTab(true);
    } else {
      setShowGiftTab(false);
    }
  }, []);
  return (
    <>
      {props.locationSlug && (
        <>
          <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
        </>
      )}

      {showGiftBookingList && (
        <GiftCardsMenuBooking
          locationSlugList={props.locationSlugList}
          setShowGiftBookingList={setShowGiftBookingList}
        />
      )}
      {showGiftTab && (
        <div className="sticky-gift-bar cursor-pointer w-full fixed z-[999] bottom-0 left-0  bg-[url('/assets/gift-images/Bottom-Bar-mobile-desktop.png')] bg-cover">
          <div className="sticky-gift-container w-full  relative">
            <div className="stgb-left absolute bottom-[-4px] left-[-38px] md:bottom-[-30px] md:left-[-50px] max-w-[100px] md:max-w-[140px] xl:max-w-[180px]">
              <img
                className="w-full"
                alt="allinadventures gift card"
                src="/assets/gift-images/all-in-adventures-gift-card.png"
              ></img>
            </div>
            <div className="stgb-right absolute bottom-0 right-[2px] md:right-[40px] lg:right-[48px]  max-w-[60px] md:max-w-[90px] xl:max-w-[90px]">
              <img
                className="w-full"
                alt="allinadventures gift card christmas tree"
                src="/assets/gift-images/all-in-adventures-gift-card-christmas-tree.png"
              ></img>
            </div>
            <div className="stgb-content flex justify-between items-center py-1 px-2">
              <div className="stgb-em w-[28px] md:w-[30px] lg:w-[32px]"></div>
              <div
                id="tap-btn"
                onClick={() => {
                  takeAction(props.giftBooking);
                }}
                className="stgb-txt flex flex-auto justify-center items-center space-x-2 md:space-x-4"
              >
                <img
                  className="max-w-[30px]  md:max-w-[32px] lg:max-w-[36px]"
                  alt="allinadventures gift card tap icon"
                  src="/assets/gift-images/tap-icon.svg"
                ></img>
                <div className="hidden md:block">
                  <div className=" [text-shadow:_0_3px_0_rgb(0_0_0_/_30%)] text-[30px] leading-[1.4] font-os font-bold text-white flex space-x-2 justify-center items-center">
                    <span>BUY GIFT CARDS -</span>

                    <span>$25</span>
                    <span className="h-[8px] w-[8px] rounded-full bg-white"></span>
                    <span>$50</span>
                    <span className="h-[8px] w-[8px] rounded-full bg-white"></span>
                    <span>$100</span>
                  </div>
                </div>
                <div className=" md:hidden">
                  <div className="[text-shadow:_0_3px_0_rgb(0_0_0_/_30%)] text-[24px] leading-[1.4] font-os font-bold text-white flex space-x-2 justify-center items-center">
                    <span>BUY GIFT CARDS</span>
                  </div>
                </div>
                <img
                  className="max-w-[30px]  md:max-w-[32px] lg:max-w-[36px]"
                  alt="allinadventures gift card tap icon"
                  src="/assets/gift-images/tap-icon.svg"
                ></img>
              </div>
              <button
                onClick={(e) => {
                  closeGiftTab(e);
                }}
                className="btn-close-stgb relative z-[100] "
              >
                <img
                  className="w-[28px] md:w-[30px] lg:w-[32px]"
                  alt="allinadventures gift card cross icon"
                  src="/assets/gift-images/cross-desktop.svg"
                ></img>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StickyGiftBar;
