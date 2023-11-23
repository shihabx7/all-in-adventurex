import React, { useState } from "react";
import GiftCardsMenuBooking from "./GiftCardsMenuBooking";
import { bookingList } from "../../pages/api/LocationIndData/bookingList";
import Script from "next/script";

function StickyGiftBar(props) {
  const [showFooterTab, setShowFooterTab] = useState(true);
  const [showGiftBookingList, setShowGiftBookingList] = useState(false);
  const ActiveGiftBookingMenu = (locationslug, bookinggame) => {
    if (!locationslug) {
      const body = document.getElementsByTagName("body")[0];

      body.classList.add("overflow-hidden");
      setShowGiftBookingList(true);
    } else {
      if (!bookinggame || bookinggame.type !== "gift") {
        window.location.href = "/" + locationslug + "/gift-cards";
      } else {
        const bookingData = bookingList("gift-card", locationslug);
        console.log(bookingData);
        bookGift(bookingData);
      }
    }
  };
  const bookGift = (bookingData) => {
    FH.open({
      shortname: bookingData.shortname,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.item },
    });
  };
  return (
    <>
      {props.locationslug && (
        <>
          <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
        </>
      )}

      {showGiftBookingList && (
        <GiftCardsMenuBooking
          locationlist={props.locationlist}
          giftbookinglist={props.giftbookinglist}
          setShowGiftBookingList={setShowGiftBookingList}
        />
      )}
      {showFooterTab && (
        <div className="sticky-gift-bar cursor-pointer w-full fixed z-[999] bottom-0 left-0  bg-[url('/assets/gift-images/Bottom-Bar-mobile-desktop.png')] bg-cover">
          <div className="sticky-gift-container w-full  relative">
            <div className="stgb-left absolute bottom-[-4px] left-[-38px] md:bottom-[-30px] md:left-[-50px] max-w-[100px] md:max-w-[140px] xl:max-w-[180px]">
              <img
                className="w-full"
                src="/assets/gift-images/all-in-adventures-gift-card.png"
              ></img>
            </div>
            <div className="stgb-right absolute bottom-0 right-[2px] md:right-[40px] lg:right-[48px]  max-w-[60px] md:max-w-[90px] xl:max-w-[90px]">
              <img
                className="w-full"
                src="/assets/gift-images/all-in-adventures-gift-card-christmas-tree.png"
              ></img>
            </div>
            <div className="stgb-content flex justify-between items-center py-1 px-2">
              <div className="stgb-em w-[28px] md:w-[30px] lg:w-[32px]"></div>
              <div
                id="tap-btn"
                onClick={() => {
                  ActiveGiftBookingMenu(props.locationslug, props.bookinggame);
                }}
                className="stgb-txt flex flex-auto justify-center items-center space-x-2 md:space-x-4"
              >
                <img
                  className="max-w-[30px]  md:max-w-[32px] lg:max-w-[36px]"
                  src="/assets/gift-images/tap-icon.svg"
                ></img>
                <div className="hidden md:block">
                  <div className=" [text-shadow:_0_3px_0_rgb(0_0_0_/_30%)] text-[30px] leading-[1.4] font-os font-bold text-white flex space-x-2 justify-center items-center">
                    <span>CLICK TO BUY GIFT CARDS -</span>

                    <span>$25</span>
                    <span className="h-[8px] w-[8px] rounded-full bg-white"></span>
                    <span>$50</span>
                    <span className="h-[8px] w-[8px] rounded-full bg-white"></span>
                    <span>$100</span>
                  </div>
                </div>
                <div className=" md:hidden">
                  <div className="[text-shadow:_0_3px_0_rgb(0_0_0_/_30%)] text-[24px] leading-[1.4] font-os font-bold text-white flex space-x-2 justify-center items-center">
                    <span>CLICK TO BUY</span>
                  </div>
                </div>
                <img
                  className="max-w-[30px]  md:max-w-[32px] lg:max-w-[36px]"
                  src="/assets/gift-images/tap-icon.svg"
                ></img>
              </div>
              <button
                onClick={() => {
                  setShowFooterTab(false);
                }}
                className="btn-close-stgb relative z-[100] "
              >
                <img
                  className="w-[28px] md:w-[30px] lg:w-[32px]"
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
