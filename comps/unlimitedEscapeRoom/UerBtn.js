import React, { useState } from "react";
import { UerBookingLinks } from "./UerBookingLinks";

function UerBtn({ isHeader, setShowUerBookingList, locationSlug }) {
  const handleClick = (setShowUerBookingList) => {
    setShowUerBookingList(true);
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
  };
  const bookUnlimitedPlayPass = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: "no",
      view: { item: bookingData.itemNo },
    });
  };

  return (
    <>
      {isHeader ? (
        <button
          onClick={() => {
            handleClick(setShowUerBookingList);
          }}
          className="bg-red-600 hover:bg-red-700 cursor-pointer rounded font-medium text-white w-full lg:w-auto py-2 md:py-3  md:px-8 border border-red-600 hover:border-red-700 transition duration-300"
        >
          BUY UNLIMITED PLAY PASS
        </button>
      ) : (
        <>
          {locationSlug ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                bookUnlimitedPlayPass(UerBookingLinks[locationSlug]);
              }}
              className="px-5 rm:px-6 md:px-8 text-center border inline-block text-[14px] rm:text-[16px] lg:text-[18px] text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700 transition duration-300"
            >
              BUY UNLIMITED PLAY PASS
            </button>
          ) : (
            <button
              onClick={() => {
                handleClick(setShowUerBookingList);
              }}
              className="px-5 rm:px-6 md:px-8 text-center border inline-block text-[14px] rm:text-[16px] lg:text-[18px] text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700 transition duration-300"
            >
              BUY UNLIMITED PLAY PASS
            </button>
          )}
        </>
      )}
    </>
  );
}

export default UerBtn;
