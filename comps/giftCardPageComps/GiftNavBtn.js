import React, { useState } from "react";

function GiftNavBtn({ setShowGiftBookingList }) {
  const handleClick = (setShowUerBookingList) => {
    setShowUerBookingList(true);
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
  };

  return (
    <div className="gift-h-btn">
      <button
        onClick={() => {
          handleClick(setShowGiftBookingList);
        }}
        className="bg-red-600 hover:bg-red-700 cursor-pointer rounded font-medium text-white w-full lg:w-auto py-2 md:py-3  md:px-8 border border-red-600 hover:border-red-700 transition duration-300"
      >
        BUY YOUR GIFT CARD
      </button>
    </div>
  );
}

export default GiftNavBtn;
