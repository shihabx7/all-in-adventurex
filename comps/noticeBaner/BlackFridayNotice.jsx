import { useState, useEffect } from "react";
import { FiExternalLink, FiX } from "react-icons/fi";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { escapeGameBundleBookingList } from "../../lib/v2/data/escapeGameBundleBookingList";
import { useLocModal } from "../../contexts/LocModalContext";
import BlackFridayNoticeTimer from "./BlackFridayNoticeTimer";
export default function BlackFridayNotice({ noticeData, locationSlug,giftBooking }) {
  const { openLocModal, closeLocModal } = useLocModal();
  const [showNotice, setShownotice] = useState(false);
  const closeNotice = () => {
    setCookie("close-h-notice", true, {
      path: "/",
      maxAge: 1000, // Expires after 24 hours
      sameSite: true,
    });
    setShownotice(false);
    closeLocModal();
  };
  useEffect(() => {
    // const winSize = screen.width;
    //console.log(winSize);
    //  const noticeExp = getCookie("close-h-notice");
    const noticeClose = getCookie("close-h-notice");
    if (!noticeClose) {
      setShownotice(true);
    }
  }, []);
  const showLocModal = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    openLocModal();
  };
  const bookBundle = (locationSlug) => {
    const bookingData = escapeGameBundleBookingList[locationSlug];
    console.log(bookingData);
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
    });
  };

  const bookGiftCard= (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };
  return (
    showNotice && (
      <div className="header-notice-bfdy  bg-[#140200] flex items-stretch justify-center">
        {/*==============================bg-ribbon 1 */}
        <div className="bfdy-notice-ribbon grow hidden lg:block bg-[url('/assets/notice/black-friday-notice-ribbon.png')] bg-center bg-cover"></div>
          {/*=========================================bfdy notice bar */}
        <div className="w-full lg:w-[990px] xl:w-[1060px] 2xl:w-[1120px]  bg-[url('/assets/notice/black-friday-notice-bg.jpg')] bg-center bg-cover">
          <div className="header-bfdynotice-container flex justify-between items-stretch md:items-center fex space-x-1  md:space-x-2  pr-1  md:px-2 ">
            <div className="header-notice-gift-card-img max-w-[54px] rm:max-w-[62px] flex items-end md:block ">
              <img
                className="w-[54px] rm:w-[62px] md:w-[70px] "
                src={"/assets/notice/blcak-friday-gift-card.png"}
                alt="black friday gift card"
              ></img>
            </div>
            <div className="header-notice-box items-center grow py-1 md:py-0">
              <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 xl:space-x-16">
               
                <div className="flex justify-center items-center space-x-1 sm:space-x-2 2xl:space-x-3 order-2 md:order-1">
                  <div className="text-[#E8E8E8]  text-[.72rem] rm:text-[.8rem] sm:text-sm md:text-base lg:text-lg text-center font-light leading-[1] ">
                    Black Friday
                  </div>
                  <div className="text-[#E8E8E8]  text-[.72rem] rm:text-[.8rem] sm:text-sm md:text-base lg:text-lg text-center font-light leading-[1] ">
                    -
                  </div>
                  {locationSlug && (
                    <button
                      onClick={() => bookGiftCard(giftBooking)}
                      className="text-red-600 font-bold  text-[.70rem] rm:text-[.77rem] sm:text-[.9rem] lg:text-[1rem] leading-[1] transition-all duration-500 hover:text-[#CA9342] hover:border-[#CA9342]"
                    >
                      BUY GIFT CARD
                    </button>
                  )}
                  {!locationSlug && (
                    <button
                      onClick={showLocModal}
                      className="text-red-600  font-bold text-[.70rem] rm:text-[.77rem] sm:text-[.9rem] lg:text-[1rem] leading-[1]  transition-all duration-500  hover:text-[#CA9342] hover:border-[#CA9342]"
                    >
                      BUY GIFT CARD
                    </button>
                  )}
                  <div className="text-[#E8E8E8]   text-[.72rem] rm:text-[.8rem] sm:text-sm md:text-base lg:text-lg text-center font-light leading-[1] ">
                    |
                  </div>
                  <div className="text-[.72rem] rm:text-[.77rem] sm:text-[.9rem] lg:text-[1rem] leading-[1]">
                    <a href={"/gift-cards"} className="text-[#ABAEB3] hover:text-[#CA9342]    text-center  ">
                     <span className="md:hidden">See More</span> <span className="hidden md:block">Learn More</span>
                    </a>
                  </div>
                </div>
                 <div className="bf-timer order-1 md:order-2">
                  <BlackFridayNoticeTimer />
                </div>
              </div>
            </div>
             {/*=========================================bfdy notice close */}
            <div className="header-notice-close flex items-center">
              <button
                onClick={() => closeNotice()}
                className="text-[#dddddd] hover:text-[#ffffff] text-[1.35rem] md:text-[1.6rem]"
              >
                <FiX />
              </button>
            </div>
          </div>
        </div>
        {/*==============================bg-ribbon 2 */}
       <div className="bfdy-notice-ribbon grow hidden lg:block bg-[url('/assets/notice/black-friday-notice-ribbon.png')] bg-center bg-cover"></div>
      </div>
    )
  );
}
