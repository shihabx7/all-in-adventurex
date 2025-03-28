import React, { useState } from "react";
import GiftMenu from "../headerComps/GiftMenu";

function GiftBigBtn({ title, giftBooking, setShowGiftBookingList }) {
  const handleClick = (giftBooking) => {
    if (!giftBooking) {
      const body = document.getElementsByTagName("body")[0];
      body.classList.add("overflow-hidden");
      setShowGiftBookingList(true);
    } else {
      bookGift(giftBooking);
    }
  };
  const bookGift = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };
  return (
    <>
      <div className="gift-big-btn-container inline-block">
        <button
          onClick={() => {
            handleClick(giftBooking);
          }}
          className="relative bg-red-600 hover:bg-red-700 font-medium md:text-lg text-white  py-4 px-6 md:px-16 rounded-full"
        >
          {title ? title : "BUY GIFT CARDS"}

          <div className="left-art absolute top-[-8px] left-[-14px] z-[0]">
            <img
              alt="Artwork of an escape room gift box featuring intriguing designs and elements that evoke adventure and mystery."
              src="/assets/gift-images/usp/gift-button-left-side-artwork.svg"
            ></img>
          </div>
          <div className="right-art absolute top-[-8px] right-[-14px] z-0]">
            <img
              alt="Escape room gift box artwork, designed with engaging visuals that reflect themes of adventure and problem-solving challenges."
              src="/assets/gift-images/usp/gift-button-right-side-artwork.svg"
            ></img>
          </div>
        </button>
      </div>
    </>
  );
}

export default GiftBigBtn;
