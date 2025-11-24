import { useState, useEffect } from "react";
import { FiExternalLink, FiX } from "react-icons/fi";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { escapeGameBundleBookingList } from "../../lib/v2/data/escapeGameBundleBookingList";
import { useLocModal } from "../../contexts/LocModalContext";
import { TbCopy } from "react-icons/tb";
import BlackFridayNoticeTimer from "./BlackFridayNoticeTimer";
export default function BlackFridayNotice({
  noticeData,
  locationSlug,
  giftBooking,
}) {
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

  const bookGiftCard = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };
     const copyToClipboard = async (textToCopy) => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            alert("Coupon Code copied to clipboard!");
           // console.log('Text copied to clipboard!');
            // Optionally, provide user feedback (e.g., a temporary "Copied!" message)
        } catch (err) {
           // console.error('Failed to copy text: ', err);
           alert("Failed to Coupon Code. Please try again.");
            // Handle cases where copying might not be supported or allowed
        }
    };
  return (
    showNotice && (
      <div className="header-notice-bfdy  bg-[#140200] relative">
        {/*==============================bg-img*/}
        <div className="bfdy-notice-bg w-full h-full absolute top-0 left-0">
          <img
            className="object-cover object-center w-full hidden md:block"
            src={"/assets/notice/black-friday-gift-card-bg.jpg"}
          ></img>
            <img
            className="object-cover object-center w-full h-full md:hidden"
            src={"/assets/notice/black-friday-gift-card-bg-m.jpg"}
          ></img>
        </div>
        {/*=========================================bfdy notice bar */}
        <div className="notice-content relative z-20">
          <div className="w-full md:w-[720px] lg:w-[800px] xl:w-[900px] 2xl:w-[910px] mx-auto ">
            <div className="bfdy-notice-container flex justify-center flex-wrap md:justify-between  items-center md:space-x-2 lg:space-x-3 px-2 py-1 lg:py-1.5">
              {/*=========================================bfdy notice ribbon */}
              <div className="order-1 bfdy-notice-ribb max-w-[66px] md:max-w-[74px] lg:max-w-[82px] xl:max-w-[96px]  flex items-end md:block mr-2 md:mr-0">
                <img
                  className="max-w-[54px] rm:max-w-[58px] sm:max-w-[60px] md:max-w-[72px] lg:max-w-[80px] xl:max-w-[94px]  4xl:max-w-[108px] "
                  src={"/assets/notice/gift-card-notice-baner.png"}
                  alt="black friday gift card"
                ></img>
              </div>
              {/*=========================================bfdy notice links and text*/}
              <div className="w-full mt-2 md:mt-0 order-3 md:order-2 md:w-auto bfdy-content-box text-[#E8E8E8]  text-[.64rem] rm:text-[.72rem] sm:text-[.76rem] md:text-[.9rem] xl:text-[1.07rem] 2xl:text-[1.15rem]   text-center  leading-[1]">
                <div className="bfdy-content-container flex items-center justify-center space-x-1 md:space-x-2 xl:space-x-3">
                  <div className="bfdy-n-item-1">20% Off</div>
                  <div className="bfdy-n-item-2">|</div>
                  <div className="bfdy-n-item-3 flex items-center  space-x-1 md:space-x-2">
                    <p>Code:</p>
                    <button onClick={() => copyToClipboard('GIFT20')} className="bg-[#0D542B] text-[#98FFBF] flex items-center space-x-1 justify-center px-2 py-1 lg:px-3 lg:py-1.5 rounded-full copy-btn">
                     <span>GIFT20</span>
                      <span className="text-[.74rem] sm:text-[1rem] md:text-[1.1rem]">
                        <TbCopy />
                      </span>
                    </button>
                  </div>
                  <div className="bfdy-n-item-4">
                    {locationSlug && (
                      <button
                        onClick={() => bookGiftCard(giftBooking)}
                        className="ml-1 md:ml-1.5 px-2 py-1.5 lg:px-3 md:py-2  rounded border border-[#ffffff] hover:border-red-700 bg-transparent hover:bg-red-700 text-red-600 hover:text-white font-bold  text-[.66rem] rm:text-[.77rem] sm:text-[.87rem] xl:text-[1rem] leading-[1] transition-all duration-500 "
                      >
                        BUY GIFT CARD
                      </button>
                    )}
                    {!locationSlug && (
                      <button
                        onClick={showLocModal}
                        className="ml-1 md:ml-1.5 px-2 py-1.5 lg:px-3 md:py-2 rounded border border-[#ffffff] hover:border-red-700 bg-transparent hover:bg-red-700 text-red-600 hover:text-white font-bold  text-[.66rem] rm:text-[.77rem] sm:text-[.72rem] xl:text-[1rem] leading-[1] transition-all duration-500 "
                      >
                        BUY GIFT CARD
                      </button>
                    )}
                  </div>
                  <div className="bfdy-n-item-5 ">Learn More</div>
                </div>
              </div>
               {/*=========================================bfdy notice timer*/}
              <div className=" order-2 md:order-3 bfdy-timer-container">
                <BlackFridayNoticeTimer/>
              </div>
            </div>
          </div>
        </div>
           {/*=========================================bfdy notice bar */}
        {/*=========================================bfdy notice close */}
        <div className="header-notice-close absolute top-0 right-1 sm:right-2.5 md:right-6 bottom-4 md:bottom-0 my-auto z-30 w-[20px] h-[20px] md:w-[28px] md:h-[28px] ">
          <button
            onClick={() => closeNotice()}
            className="text-[#e8e8e8] hover:text-[#ffffff] text-[1.5rem] md:text-[1.875rem]  bg-[rgba(0,0,0,0.5)]"
          >
            <FiX />
          </button>
        </div>
      </div>
    )
  );
}
