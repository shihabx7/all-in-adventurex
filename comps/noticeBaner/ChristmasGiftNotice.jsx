import { useState, useEffect } from "react";
import { FiExternalLink, FiX } from "react-icons/fi";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { escapeGameBundleBookingList } from "../../lib/v2/data/escapeGameBundleBookingList";
import { useSiteData } from "../../contexts/SiteDataContext";
import { TbCopy } from "react-icons/tb";
import NoticeTimer from "./NoticeTimer";

export default function ChristmasGiftNotice({ locationSlug, giftBooking }) {
  const [showNotice, setShownotice] = useState(false);
  const { openModalMenu, closeModalMenu, setModalMenuType, setModalGame } =
    useSiteData();
  const closeNotice = () => {
    setCookie("close-h-notice", true, {
      path: "/",
      maxAge: 1000, // Expires after 24 hours
      sameSite: true,
    });
    setShownotice(false);
    setModalMenuType(null);
    setModalGame(null);
    closeModalMenu();
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
    setModalMenuType("gift-card");
    openModalMenu();
  };

  const bookGiftCard = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "no",
      flow: "no",
      view: { item: bookingData.itemNo },
    });
  };

  const copyToClipboard = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Coupon Code copied to clipboard!");
    } catch (err) {
      alert("Failed to Coupon Code. Please try again.");
    }
  };

  return (
    showNotice && (
      <div className="header-notice-bfdy  bg-[#140200] relative border-b md:border-b-1.5 border-red-700 overflow-hidden">
        {/*==============================bg-img*/}
        <div className="bfdy-notice-bg w-full h-full absolute top-0 left-0">
          <img
            className="w-full h-full object-cover object-center hidden md:block"
            src={"/assets/notice/christmas-gift-card-bg.jpg"}
          ></img>
          <img
            className="h-full object-cover object-center md:hidden"
            src={"/assets/notice/christmas-gift-card-bg-m.jpg"}
          ></img>
        </div>

        <div className="notice-content relative z-20">
          <div className="crm-notice-box flex flex-nowrap justify-between items-center sm:space-x-1">
            {/*=========================================crm notice icon 1 santa*/}
            <div className="crm-gift-santa-icon w-auto md:w-[10%] lg:w-[12.5%] xl:w-[13.5%] 3xl:w-[15%] xl:text-right">
              <img
                className="hidden md:block w-full  md:max-h-[40px] xl:max-h-[46px] 3xl:max-h-[54px] object-contain object-right "
                src={"/assets/notice/chirstmas-gift-santa.png"}
              ></img>
            </div>
            {/*=========================================bfdy notice content */}
            <div className="max-w-[94%] rm:max-w-[87%] flex-grow md:max-w-[764px] lg:max-w-[1000px] xl:max-w-[1080px] 2xl:max-w-[1170px] ">
              <div className="bfdy-notice-container  flex flex-wrap md:flex-nowrap   justify-center items-center space-x-0 md:space-x-2 lg:space-x-2 2xl:space-x-4 px-0 sm:px-2 py-1 ">
                {/*=========================================gift cart poster */}
                <div className="bfdy-notice-ribb order-1">
                  <img
                    className="max-w-[54px] rm:max-w-[56px] lm:max-w-[60px] sm:max-w-[66px] md:max-w-[60px] lg:max-w-[66px] xl:max-w-[80px] 2xl:max-w-[90px]"
                    src={"/assets/notice/gift-card-notice-baner.png"}
                    alt="black friday gift card"
                  ></img>
                </div>
                {/*=========================================gift card offer*/}
                <div className="px-1.5 rm:px-2 md:px-0 text-[.88rem] rm:text-[.92rem] sm:text-[.94rem] md:text-[.92rem] xl:text-[1.1rem] 2xl:text-[1.15rem] font-semibold order-2">
                  <p>20% OFF</p>
                </div>
                {/*============================================================================================btn containrr*/}
                <div className="notice-btnt-text w-full md:w-auto flex justify-center items-center space-x-1.5 lm:space-x-2 md:space-x-1 lg:space-x-2 2xl:space-x-3 order-4 md:order-3 mt-1 md:mt-0">
                  {/*==============================================================crm notice book gift card btn*/}
                  <div className="copy-coupon-btn text-[.68rem] rm:text-[.8rem] sm:text-[.86rem] md:text-[.85rem] xl:text-[1.07rem] 2xl:text-[1.15rem] text-center leading-[1] ">
                    <button
                      onClick={() => copyToClipboard("GIFT20")}
                      className=" bg-[#0D542B] hover:bg-red-700 hover:text-white text-[#98FFBF] flex items-center space-x-1 justify-center px-3 py-2 md:py-2 md:px-3 xl:px-4 3xl:py-3 copy-btn rounded"
                    >
                      <span>Code:</span>
                      <span>GIFT20</span>
                      <span className="text-[.74rem] sm:text-[1rem] md:text-[1.1rem]">
                        <TbCopy />
                      </span>
                    </button>
                  </div>
                  {/*==============================================================crm notice book gift card btn*/}
                  {/*==============================================================crm notice book gift card btn*/}
                  <div className="bfdy-n-item-4 text-[.68rem] rm:text-[.8rem] sm:text-[.86rem] md:text-[.85rem] xl:text-[1.07rem] 2xl:text-[1.15rem]  text-center leading-[1]">
                    {locationSlug && (
                      <button
                        onClick={() => bookGiftCard(giftBooking)}
                        className="block px-3 py-2 md:py-2 md:px-3 xl:px-4 3xl:py-3 rounded border border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 text-white hover:text-white font-bold  transition-all duration-400"
                      >
                        BUY GIFT CARD
                      </button>
                    )}
                    {!locationSlug && (
                      <button
                        onClick={showLocModal}
                        className="block px-3 py-2 md:py-2 md:px-3 xl:px-4 3xl:py-3 rounded border border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 text-white hover:text-white font-bold  transition-all duration-400"
                      >
                        BUY GIFT CARD
                      </button>
                    )}
                  </div>
                  {/*==============================================================crm learn more btn*/}
                  <div className="bfdy-n-item-5  text-[.76rem] rm:text-[.8rem] sm:text-[.88rem] md:text-[.9rem] xl:text-[1.06rem] 2xl:text-[1.1rem] font-medium">
                    <a
                      className="block hover:text-red-700"
                      href={"/gift-cards"}
                    >
                      Learn More
                    </a>
                  </div>
                  {/*==============================================================crm notice main links */}
                </div>
                {/*========================================================================================btn containrr end*/}
                {/*====================================================timer*/}
                <div className="bfdy-notice-timer  order-3 md:order-4">
                  <NoticeTimer />
                </div>
                {/*==================================================timer end*/}
              </div>
            </div>
            {/*=====================================================================crm notice icon 2 boxes*/}
            <div className="crm-gift-boxes-icon md:w-[9%] lg:w-[12.5%] xl:w-[13.5%] 3xl:w-[15%]">
              <img
                className=" hidden md:block w-full  md:max-h-[28px] xl:max-h-[36px] 3xl:max-h-[44px]  object-contain object-left "
                src={"/assets/notice/chirstmas-gift-boxes-icon-l.png"}
              ></img>
            </div>
          </div>
        </div>

        {/*=========================================================== notice close x btn*/}
        <div className="header-notice-close absolute top-2 md:top-0 md:bottom-0 right-[2px] rm:right-1.5 md:right-4 xl:right-6 md:my-auto z-30 w-[26px] h-[26px] md:w-[32px] md:h-[32px] xl:w-[34px] xl:h-[34px] ">
          <button
            onClick={() => closeNotice()}
            className="text-[#e8e8e8] hover:text-red-700 text-[1.5rem] rm:text-[1.6rem] md:text-[1.8rem]  lg:text-[2rem] 3xl:text-[2.1rem] bg-[rgba(0,0,0,0.7)] hover:bg-[rgba(0,0,0,0.9)]"
          >
            <FiX />
          </button>
        </div>
      </div>
    )
  );
}
