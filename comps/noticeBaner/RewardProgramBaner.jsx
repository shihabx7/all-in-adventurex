import { useState, useEffect } from "react";
import Script from "next/script";
import { FiExternalLink, FiX } from "react-icons/fi";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import Image from "next/image";
import { escapeGameBundleBookingList } from "../../lib/v2/data/escapeGameBundleBookingList";
import { useSiteData } from "../../contexts/SiteDataContext";
import { TbCopy } from "react-icons/tb";
import NoticeTimer from "./NoticeTimer";
import { locationBookingInfo } from "../../lib/v2/data/locationBookingInfo";

export default function RewardProgramBaner({ locationSlug, giftBooking }) {
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
    const noticeClose = getCookie("close-h-notice");
    if (!noticeClose) {
      setShownotice(true);
    }
  }, []);

  const showLocModal = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setModalMenuType("all-in-rewards");
    openModalMenu();
  };
  const bookReward = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: "no",
      view: {
        item: bookingData.itemNo,
      },
    });
  };
  return (
    showNotice && (
      <>
        <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
        <div className="header-notice-bfdy  bg-[#140200] relative border-b md:border-b-1.5 border-gold/30 overflow-hidden">
          {/*==========================================================================bg-img*/}
          <div className=" w-full h-full absolute top-0 left-0">
            <img
              className="w-full h-full object-cover object-center "
              src={"/assets/notice/rewar-program-baner-bg.jpg"}
            ></img>
          </div>
          {/*==============================================================================================================Des-1 */}
          <div className="notice-content relative z-20 ">
            <div className="crm-notice-box flex flex-nowrap justify-between items-center sm:space-x-1">
              {/*=========================================bfdy notice content */}
              <div className="w-full max-w-[99%] rm:max-w-[98%] flex-grow md:max-w-[740px] lg:max-w-[860px] xl:max-w-[1040px] 2xl:max-w-[1050px] mx-auto py-1">
                <div className="bfdy-notice-container  flex flex-nowrap md:flex-nowrap   sm:justify-between items-center space-x-1.5 rm:space-x-2 lg:space-x-2 2xl:space-x-4 px-0 sm:px-2 py-1 ">
                  <div className="text-slate-50 ">
                    <div className="font-os uppercase text-[0.64rem]  rm:text-[0.72rem] sm:text-[1.25rem] lg:text-[1.35rem] 3xl:text-[1.5rem] leading-[1] font-medium  ">
                      JOIN our
                      <span className="inline-block px-2 py-[3px] md:px-3 md:p-1.5 rounded bg-red-600 font-cr font-semibold transform -skew-x-3 mx-1 md:mx-2">
                        FREE
                      </span>
                      <span className="text-gold">Rewards Program</span>
                    </div>
                    <div className="note-text text-white flex items-center space-x-1 sm:hidden font-normal">
                      <p className="text-[.5rem] rm:text-[.6rem] sm:text-[.8rem] md:text-[.84rem] xl:text-[.9rem] 2xl:text-[1.05rem] leading-[1.3]">
                        Save<span className="text-red-600"> 10% </span>today!
                      </p>
                      <p className="text-[.6rem] rm:text-[.7rem] sm:text-[.8rem] md:text-[.84rem] xl:text-[.9rem] 2xl:text-[1.05rem] leading-[1] ">
                        & earn <span className="text-red-700"> FREE </span>
                        admissions.
                      </p>
                    </div>
                  </div>

                  {/*============================================================================================btn containrr 
                
                 {locationSlug && (
                      <button
                        onClick={() => bookGiftCard(giftBooking)}
                        className="block px-3 py-1 md:py-1.5 md:px-3 xl:px-4 3xl:py-2 rounded border border-red-600 hover:border-red-700 bg-transparent hover:bg-red-700 text-white hover:text-white font-bold  transition-all duration-400"
                      >
                        JOIN NOW
                      </button>
                    )}
                */}
                  <div className="notice-btnt-text w-auto flex justify-center items-center space-x-1.5 rm:space-x-2 md:space-x-3 lg:space-x-4 2xl:space-x-5 lm:pl-4 sm:pl-0">
                    {/*==============================================================crm learn more btn*/}
                    <div className="bfdy-n-item-4 text-[.6rem] rm:text-[.64rem] sm:text-[.8rem] md:text-[.95rem] xl:text-[1rem]  text-center leading-[1]">
                      {locationSlug && (
                        <button
                          onClick={(e)=>{
                             e.preventDefault();
                            bookReward({
                        
                            shortName:
                              locationBookingInfo[locationSlug].shortName,
                            itemNo:
                              locationBookingInfo[locationSlug].rewardItemNo,
                          })
                          }}
                          className="block px-1.5 py-1.5 md:py-2 md:px-3 xl:px-4 3xl:py-2 rounded border border-red-600 hover:border-red-700 bg-transparent hover:bg-red-700 text-white hover:text-white font-bold  transition-all duration-400"
                        >
                          JOIN NOW
                        </button>
                      )}
                      {!locationSlug && (
                        <button
                          onClick={showLocModal}
                          className="block px-1.5 py-1.5 md:py-2 md:px-3 xl:px-4 3xl:py-2 rounded border border-red-600 hover:border-red-700 bg-transparent hover:bg-red-700 text-white hover:text-white font-bold  transition-all duration-400"
                        >
                          JOIN NOW
                        </button>
                      )}
                    </div>
                    {/*==============================================================crm notice main links */}
                    <div className="bfdy-n-item-5  text-[.6rem] rm:text-[.64rem] sm:text-[.8rem] md:text-[.95rem] xl:text-[1.05rem] font-medium">
                      <a
                        className="block text-[#d9d9d9] hover:text-red-700 underline underline-offset-4 "
                        href={"/all-in-rewards"}
                      >
                        Learn More
                      </a>
                    </div>
                    {/*==============================================================crm notice book gift card btn*/}
                  </div>
                  {/*========================================================================================btn containrr end*/}
                  {/*====================================================notice text*/}
                  <div className="note-text text-white hidden sm:block">
                    <p className="text-[.7rem] rm:text-[.75rem] sm:text-[.8rem] md:text-[.84rem] xl:text-[.95rem] 2xl:text-[1.05rem] leading-[1.3]">
                      to save<span className="text-red-600"> 10% </span>today!
                    </p>
                    <p className="text-[.7rem] rm:text-[.75rem] sm:text-[.8rem] md:text-[.84rem] xl:text-[.95rem] 2xl:text-[1.05rem] leading-[1.3] ">
                      Plus, earn <span className="text-red-700"> FREE </span>
                      admissions.
                    </p>
                  </div>
                  {/*==================================================notice text end*/}
                </div>
              </div>
            </div>
          </div>
          {/*==============================================================================================================Des-2 */}
          <div className="notice-content relative z-20 hidden">
            <div className="crm-notice-box flex flex-nowrap justify-between items-center sm:space-x-1">
              {/*=========================================bfdy notice content */}
              <div className="w-full max-w-[99%] rm:max-w-[98%] flex-grow md:max-w-[740px] lg:max-w-[990px] xl:max-w-[980px] 2xl:max-w-[1050px] mx-auto py-1">
                <div className="bfdy-notice-container  flex flex-wrap md:flex-nowrap   justify-between items-center space-x-1.5 rm:space-x-2 lg:space-x-2 2xl:space-x-4 px-0 sm:px-2 py-1 ">
                  {/*=========================================gift cart poster */}
                  <div className="text-slate-50 font-os uppercase text-[1.35rem] leading-[1] font-medium  ">
                    JOIN our
                    <span className="inline-block px-3 p-1.5 rounded bg-red-600 font-cr font-semibold transform -skew-x-3 mx-2">
                      FREE
                    </span>
                    <span className="text-gold">Rewards Program</span>
                  </div>
                  {/*=========================================gift card offer*/}
                  <div className="note-text text-white">
                    to save<span className="text-red-600"> 10% </span>today!
                    Plus, earn <span className="text-red-700"> FREE </span>
                    admissions.
                  </div>
                  {/*============================================================================================btn containrr 
                
                 {locationSlug && (
                      <button
                        onClick={() => bookGiftCard(giftBooking)}
                        className="block px-3 py-1 md:py-1.5 md:px-3 xl:px-4 3xl:py-2 rounded border border-red-600 hover:border-red-700 bg-transparent hover:bg-red-700 text-white hover:text-white font-bold  transition-all duration-400"
                      >
                        JOIN NOW
                      </button>
                    )}
                */}
                  <div className="notice-btnt-text w-auto flex justify-center items-center space-x-1.5 rm:space-x-2 md:space-x-1 lg:space-x-2 2xl:space-x-3 ">
                    {/*==============================================================crm learn more btn*/}
                    <div className="bfdy-n-item-5  text-[.7rem] rm:text-[.75rem] sm:text-[.8rem] md:text-[.84rem] xl:text-[1.05rem] font-medium">
                      <a
                        className="block text-[#d9d9d9] hover:text-red-700 underline underline-offset-0"
                        href={"/all-in-rewards"}
                      >
                        Learn More
                      </a>
                    </div>
                    {/*==============================================================crm notice main links */}

                    {/*==============================================================crm notice book gift card btn*/}
                    <div className="bfdy-n-item-4 text-[.66rem] rm:text-[.75rem] sm:text-[.8rem] md:text-[.84rem] xl:text-[1rem]  text-center leading-[1]">
                      <button
                        onClick={showLocModal}
                        className="block px-3 py-1 md:py-1.5 md:px-3 xl:px-4 3xl:py-2 rounded border border-red-600 hover:border-red-700 bg-transparent hover:bg-red-700 text-white hover:text-white font-bold  transition-all duration-400"
                      >
                        JOIN NOW
                      </button>
                    </div>
                  </div>
                  {/*========================================================================================btn containrr end*/}
                  {/*====================================================timer*/}

                  {/*==================================================timer end*/}
                </div>
              </div>
            </div>
          </div>
          {/*==============================================================================================================Des-3 */}
          <div className="notice-content relative z-20 hidden">
            <div className="crm-notice-box flex flex-nowrap justify-between items-center sm:space-x-1">
              {/*=========================================bfdy notice content */}
              <div className="w-full max-w-[99%] rm:max-w-[98%] flex-grow md:max-w-[740px] lg:max-w-[990px] xl:max-w-[980px] 2xl:max-w-[1050px] mx-auto py-1">
                <div className="bfdy-notice-container  flex flex-wrap md:flex-nowrap   justify-between items-center space-x-1.5 rm:space-x-2 lg:space-x-2 2xl:space-x-4 px-0 sm:px-2 py-1 ">
                  {/*=========================================gift cart poster */}
                  <div className="text-slate-50 font-os uppercase text-[1.35rem] leading-[1] font-medium  ">
                    JOIN our
                    <span className="inline-block px-3 p-1.5 rounded bg-red-600 font-cr font-semibold transform -skew-x-3 mx-2">
                      FREE
                    </span>
                    <span className="text-gold">Rewards Program</span>
                  </div>
                  {/*=========================================gift card offer*/}
                  <div className="note-text text-white">
                    to save<span className="text-red-600"> 10% </span>today!
                    Plus, earn <span className="text-red-700"> FREE </span>
                    admissions.
                  </div>
                  {/*============================================================================================btn containrr 
                
                 {locationSlug && (
                      <button
                        onClick={() => bookGiftCard(giftBooking)}
                        className="block px-3 py-1 md:py-1.5 md:px-3 xl:px-4 3xl:py-2 rounded border border-red-600 hover:border-red-700 bg-transparent hover:bg-red-700 text-white hover:text-white font-bold  transition-all duration-400"
                      >
                        JOIN NOW
                      </button>
                    )}
                */}
                  <div className="notice-btnt-text w-auto flex justify-center items-center space-x-1.5 rm:space-x-2 md:space-x-1 lg:space-x-2 2xl:space-x-3 ">
                    {/*==============================================================crm learn more btn*/}
                    <div className="bfdy-n-item-5  text-[.7rem] rm:text-[.75rem] sm:text-[.8rem] md:text-[.84rem] xl:text-[1.05rem] font-medium">
                      <a
                        className="block text-[#d9d9d9] hover:text-red-700"
                        href={"/all-in-rewards"}
                      >
                        Learn More
                      </a>
                    </div>
                    {/*==============================================================crm notice main links */}

                    {/*==============================================================crm notice book gift card btn*/}
                    <div className="bfdy-n-item-4 text-[.66rem] rm:text-[.75rem] sm:text-[.8rem] md:text-[.84rem] xl:text-[1rem]  text-center leading-[1]">
                      <button
                        onClick={showLocModal}
                        className="block px-3 py-1 md:py-1.5 md:px-3 xl:px-4 3xl:py-2 rounded border border-red-600 hover:border-red-700 bg-transparent hover:bg-red-700 text-white hover:text-white font-bold  transition-all duration-400"
                      >
                        JOIN NOW
                      </button>
                    </div>
                  </div>
                  {/*========================================================================================btn containrr end*/}
                  {/*====================================================timer*/}

                  {/*==================================================timer end*/}
                </div>
              </div>
            </div>
          </div>
          {/*=========================================================== notice close x btn*/}
          <div className="header-notice-close absolute top-2 md:top-0 md:bottom-0 right-[2px] rm:right-1.5 md:right-4 xl:right-6 md:my-auto z-30 w-[26px] h-[26px] md:w-[32px] md:h-[32px] xl:w-[34px] xl:h-[34px] ">
            <button
              onClick={() => closeNotice()}
              className="text-[#e8e8e8] hover:text-red-700 text-[1.5rem] rm:text-[1.6rem] md:text-[1.8rem]  lg:text-[2rem] 3xl:text-[2.2rem] bg-[rgba(0,0,0,0.7)] hover:bg-[rgba(0,0,0,0.9)]"
            >
              <FiX />
            </button>
          </div>
        </div>
      </>
    )
  );
}
