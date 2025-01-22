import React, { useState, useEffect } from "react";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";

import { UerBookingLinks } from "./UerBookingLinks";
import UnlimitedEscapeGameMenu from "./UnlimitedEscapeGameMenu";

function UerStickyBar(props) {
  const [showUerTab, setShowUerTab] = useState(false);
  const [showUerBookingList, setShowUerBookingList] = useState(false);

  const bookUnlimitedPlayPass = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: "no",
      view: { item: bookingData.itemNo },
    });
  };
  const takeAction = (bookingData) => {
    if (!props.locationSlug) {
      setShowUerBookingList(true);
    } else {
      bookUnlimitedPlayPass(bookingData);
    }
  };

  const closeUerTab = (e) => {
    e.preventDefault();
    setCookie("uer-tab", true, {
      path: "/",
      maxAge: 86400, //604800, // Expires after 24*7 hours
      sameSite: true,
    });
    setShowUerTab(false);
  };
  useEffect(() => {
    const coc = getCookie("uer-tab");
    if (!coc) {
      setShowUerTab(true);
    } else {
      setShowUerTab(false);
    }
  }, []);
  return (
    <>
      {showUerBookingList && (
        <UnlimitedEscapeGameMenu
          locationSlugList={props.locationSlugList}
          setShowUerBookingList={setShowUerBookingList}
        />
      )}
      {showUerTab && (
        <div className="sticky-uer-bar cursor-pointer w-full fixed z-[999] bottom-0 left-0  bg-[url('/assets/gift-images/Bottom-Bar-mobile-desktop.png')] bg-cover">
          <div className="sticky-gift-container w-full  relative">
            <div className="stgb-left absolute bottom-[-4px] left-[-16px] md:bottom-[0px] md:left-[-16px] max-w-[64px] md:max-w-[100px] xl:max-w-[160px]">
              <img
                className="w-full"
                alt="allinadventures gift card"
                src="/assets/unlimited-escape-room/all-inadventures-unlimited-play-pass-card-tab.png"
              ></img>
            </div>
            <div className="stgb-right absolute bottom-0 right-[-14px] md:right-[0px] lg:right-[0px]  max-w-[76px] md:max-w-[140px] xl:max-w-[200px]">
              <img
                className="w-full"
                alt="allinadventures gift card christmas tree"
                src="/assets/unlimited-escape-room/allinadventures-unlimited-escape-room-winner.png"
              ></img>
            </div>
            <div className="stgb-content flex justify-between items-center py-1 px-2">
              <div className="stgb-em w-[28px] md:w-[30px] lg:w-[32px]"></div>
              <div
                id="tap-btn"
                onClick={(e) => {
                  e.preventDefault();
                  takeAction(UerBookingLinks[props.locationSlug]);
                }}
                className="stgb-txt flex flex-auto justify-center items-center space-x-2 md:space-x-4"
              >
                <img
                  className="max-w-[24px]  md:max-w-[32px] lg:max-w-[36px]"
                  alt="allinadventures gift card tap icon"
                  src="/assets/gift-images/tap-icon.svg"
                ></img>
                <div className="">
                  <div className=" [text-shadow:_0_3px_0_rgb(0_0_0_/_30%)] text-[14px] rm:text-[15px] md:text-[26px] lg:text-[30px] leading-[1.4] font-os font-bold text-white flex space-x-2 justify-center items-center">
                    BUY UNLIMITED PLAY PASS
                  </div>
                </div>

                <img
                  className="max-w-[24px]  md:max-w-[32px] lg:max-w-[36px]"
                  alt="allinadventures gift card tap icon"
                  src="/assets/gift-images/tap-icon.svg"
                ></img>
              </div>
              <button
                onClick={(e) => {
                  closeUerTab(e);
                }}
                className="btn-close-stgb relative z-[100] "
              >
                <img
                  className="w-[20px] md:w-[30px] lg:w-[32px]"
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

export default UerStickyBar;
