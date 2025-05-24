import React, { useState } from "react";
import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";
function MobileEscapeNavBtn({
  locationSlug,
  setShowMobileEecapeMenu,
  setGoMobileEecapeForm,
  goMobileEecapeForm,
}) {
  const showMobileEscapeBookingMenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setGoMobileEecapeForm(true);
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
  return (
    <div className="gift-h-btn">
      {locationSlug ? (
        <button
          onClick={() => {
            partyFormBooking(eventFormBookingLinks[locationSlug]);
          }}
          className="bg-red-600 hover:bg-red-700 cursor-pointer rounded font-semibold text-white w-full lg:w-auto py-2 md:py-3  md:px-8 border border-red-600 hover:border-red-700 transition duration-300"
        >
          GET A QUOTE
        </button>
      ) : (
        <button
          onClick={(e) => showMobileEscapeBookingMenu(e)}
          className="bg-red-600 hover:bg-red-700 cursor-pointer rounded font-semibold text-white w-full lg:w-auto py-2 md:py-3  md:px-8 border border-red-600 hover:border-red-700 transition duration-300"
        >
          CHOOSE YOUR LOCATION
        </button>
      )}
    </div>
  );
}

export default MobileEscapeNavBtn;
