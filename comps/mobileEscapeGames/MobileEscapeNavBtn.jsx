import React, { useState } from "react";
import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";
import { mobileEscapeRoomBookingData } from "../../lib/tempData/mobileEscapeRoomBookingData";
function MobileEscapeNavBtn({
  locationSlug,
  setShowMobileEecapeMenu,
  setGoMobileEecapeForm,
  goMobileEecapeForm,
}) {
  const showMobileEscapeBookingMenuParty = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    
    setGoMobileEecapeForm(true);
    setShowMobileEecapeMenu(true);
  };
  const showMobileEscapeBookingMenuGame= () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    
    setGoMobileEecapeForm(false);
    setShowMobileEecapeMenu(true);
  };
  const partyFormBooking = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: "no",
      view: { item: bookingData.itemNo },
    });
  };
  const mobileMystryBooking = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: "no",
      view: { item: bookingData.itemNo2 },
    });
  };
  return (
    <div className="gift-h-btn">
      {locationSlug ? (
        <div className="flex space-x-4 justify-center lg:justify-end items-center"> 
        <button
          onClick={() => {
            mobileMystryBooking(mobileEscapeRoomBookingData[locationSlug]);
          }}
          className="bg-red-600 hover:bg-red-700 cursor-pointer rounded font-semibold text-white w-full lg:w-auto py-2 md:py-3  md:px-8 border border-red-600 hover:border-red-700 transition duration-300"
        >
         BOOK NOW
        </button>
          <button
          onClick={() => {
            partyFormBooking(mobileEscapeRoomBookingData[locationSlug]);
          }}
          className="hover:bg-red-700 cursor-pointer rounded font-semibold text-white w-full lg:w-auto py-2 md:py-3  md:px-8 border border-red-600 hover:border-red-700 transition duration-300"
        >
          GET A QUOTE 
        </button>
        </div>
      ) : (
        <div className="flex space-x-2 md:space-x-3  xl:space-x-5 justify-center items-center"> 
            <button
        onClick={(e) =>showMobileEscapeBookingMenuGame(e)}
          className="bg-red-600 hover:bg-red-700 cursor-pointer rounded font-semibold text-white w-full lg:w-auto py-2 md:py-3  md:px-8 border border-red-600 hover:border-red-700 transition duration-300"
        >
         BOOK NOW
        </button>
        <button
          onClick={(e) => showMobileEscapeBookingMenuParty(e)}
          className="bg-red-600 lg:bg-transparent hover:bg-red-700 cursor-pointer rounded font-semibold text-white w-full lg:w-auto py-2 md:py-3  md:px-8 border border-red-600 hover:border-red-700 transition duration-300"
        >
          GET A QUOTE
        </button>
          </div>
      )}
    </div>
  );
}

export default MobileEscapeNavBtn;
