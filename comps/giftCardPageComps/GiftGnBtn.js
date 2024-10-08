import React, { useState } from "react";

function GiftGnBtn({ title, giftBooking, setShowGiftBookingList }) {
  const handleClick = (giftBooking) => {
    if (!giftBooking) {
      setShowGiftBookingList(true);
      const body = document.getElementsByTagName("body")[0];
      body.classList.add("overflow-hidden");
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
      <div className="gift-btn-container inline-block">
        <button
          onClick={() => {
            handleClick(giftBooking);
          }}
          className="relative bg-red-600 hover:bg-red-700 font-medium md:text-lg text-white  py-4 px-16 md:px-16 rounded-full"
        >
          {title ? title : "BUY GIFT CARDS"}

          <div className="left-art absolute top-[-8px] left-[-14px] z-[0]">
            <img src="/assets/gift-images/usp/gift-button-left-side-artwork.svg"></img>
          </div>
          <div className="right-art absolute top-[-8px] right-[-14px] z-0]">
            <img src="/assets/gift-images/usp/gift-button-right-side-artwork.svg"></img>
          </div>
        </button>
      </div>
    </>
  );
}

export default GiftGnBtn;
