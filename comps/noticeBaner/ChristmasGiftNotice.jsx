import { useState, useEffect } from "react";
import { FiExternalLink, FiX } from "react-icons/fi";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { escapeGameBundleBookingList } from "../../lib/v2/data/escapeGameBundleBookingList";
import { useSiteData } from "../../contexts/SiteDataContext";
import { TbCopy } from "react-icons/tb";
import BlackFridayNoticeTimer from "./BlackFridayNoticeTimer";

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
            className=" object-cover object-right md:hidden"
            src={"/assets/notice/christmas-gift-card-bg-m.jpg"}
          ></img>
        </div>

        <div className="notice-content relative z-20">
          <div className="crm-notice-box flex flex-nowrap justify-between items-center sm:space-x-1">
            {/*=========================================crm notice icon 1 santa*/}
            <div className="crm-gift-santa-icon w-auto md:w-[21%] xl:w-[20%] 3xl:w-[17%] xl:text-right">
              <img
                className="hidden md:block w-full  md:max-h-[48px] xl:max-h-[48px] 3xl:max-h-[58px] object-contain object-right "
                src={"/assets/notice/chirstmas-gift-santa.png"}
              ></img>
            </div>
            {/*=========================================bfdy notice content */}
            <div className="w-auto  md:flex-0 md:w-[600px] lg:w-[640px] xl:maxw-[840px] 2xl:max-w-[1080px] ">
              <div className="bfdy-notice-container flex justify-center  items-center space-x-2 md:space-x-2 lg:space-x-2 xl:space-x-2 2xl:space-x-4 px-0 sm:px-2 py-1 ">
                {/*=========================================gift cart poster */}
                <div className="bfdy-notice-ribb max-w-[66px] md:max-w-[72px] lg:max-w-[82px] xl:max-w-[96px]  flex items-end md:block  sm:mx-3 md:mx-0 ">
                  <img
                    className="max-w-[50px] rm:max-w-[54px] lm:max-w-[60px] sm:max-w-[66px] md:max-w-[72px] lg:max-w-[80px] xl:max-w-[92px] 2xl:max-w-[100px]  4xl:max-w-[108px] "
                    src={"/assets/notice/gift-card-notice-baner.png"}
                    alt="black friday gift card"
                  ></img>
                </div>
                {/*==============================================================crm notice book btn*/}
                <div className="bfdy-n-item-4 text-[.64rem] rm:text-[.72rem] sm:text-[.76rem] md:text-[.85rem] xl:text-[1.07rem] 2xl:text-[1.15rem]  text-center leading-[1]">
                  {locationSlug && (
                    <button
                      onClick={() => bookGiftCard(giftBooking)}
                      className="block  px-2 py-2 sm:px-3 md:py-2.5 md:px-3 xl:py-3 xl:px-4 3xl:px-5 rounded border border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 text-white hover:text-white font-bold  transition-all duration-400"
                    >
                      BUY GIFT CARD
                    </button>
                  )}
                  {!locationSlug && (
                    <button
                      onClick={showLocModal}
                      className="block  px-2 py-2 sm:px-2.5 md:py-3 md:px-3 xl:py-3 xl:px-4 3xl:px-5 3xl:py-3 rounded border border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 text-white hover:text-white font-bold  transition-all duration-400"
                    >
                      BUY GIFT CARD
                    </button>
                  )}
                </div>
                {/*==============================================================crm learn more btn*/}
                <div className="bfdy-n-item-5  text-[.76rem] rm:text-[.8rem] sm:text-[.88rem] md:text-[.92rem] xl:text-[1.1rem] 2xl:text-[1.15rem] font-medium">
                  <a className="block hover:text-red-700" href={"/gift-cards"}>
                    Learn More
                  </a>
                </div>
                {/*==============================================================crm notice main links and text*/}
                {/*=========================================bfdy notice ribbon  2*/}
                <div className="bfdy-notice-ribb max-w-[66px] md:max-w-[72px] lg:max-w-[82px] xl:max-w-[96px] hidden md:flex  items-end mx-2 rm:mx-3 md:mx-0  ">
                  <img
                    className="max-w-[54px] rm:max-w-[58px] sm:max-w-[60px] md:max-w-[68px] lg:max-w-[80px] xl:max-w-[94px]  4xl:max-w-[108px] "
                    src={"/assets/notice/gift-card-notice-baner.png"}
                    alt="christmas gift card"
                  ></img>
                </div>
              </div>
            </div>
            {/*=========================================crm notice icon 2 boxes*/}
            <div className="crm-gift-boxes-icon md:w-[21%] xl:w-[20%] 3xl:w-[17%]">
              <img
                className=" hidden md:block w-full  md:max-h-[36px] xl:max-h-[42px] 3xl:max-h-[50px]  object-contain object-left "
                src={"/assets/notice/chirstmas-gift-boxes-icon-l.png"}
              ></img>
            </div>
          </div>
        </div>

        {/*========================================= notice close x btn*/}
        <div className="header-notice-close absolute top-0 bottom-0 right-1 rm:right-3 md:right-4 xl:right-6 my-auto z-30 w-[26px] h-[26px] md:w-[32px] md:h-[32px] xl:w-[34px] xl:h-[34px] ">
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
