import { useState, useEffect } from "react";
import { FiExternalLink, FiX } from "react-icons/fi";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { escapeGameBundleBookingList } from "../../lib/v2/data/escapeGameBundleBookingList";
//import { useLocModal } from "../../contexts/LocModalContext";
import { useSiteData } from "../../contexts/SiteDataContext";

export default function UnlimitedBundleNotice({ noticeData, locationSlug }) {
  const { openModalMenu, closeModalMenu } = useSiteData();
  const [showNotice, setShownotice] = useState(false);
  const closeNotice = () => {
    setCookie("close-h-notice", true, {
      path: "/",
      maxAge: 1000, // Expires after 24 hours
      sameSite: true,
    });
    setShownotice(false);
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
    openModalMenu();
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

  return (
    showNotice && (
      <div className="header-notice py-[4px] sm:py-[4px] bg-[#033705]">
        <div className="max-w-7xl mx-auto ">
          <div className="header-notice-container flex justify-between items-center fex space-x-1 md:space-x-2  px-2  md:px-4 md:pt-1">
            <div className="header-notice-text items-center grow">
              <div className=" text-center ">
                <div
                  className="text-[#E8E8E8] inline-block  text-[.72rem] rm:text-[.8rem] sm:text-sm md:text-base lg:text-lg text-center font-light leading-[1] md:leading-[1.2]"
                  dangerouslySetInnerHTML={{ __html: noticeData.text }}
                ></div>
                {locationSlug && (
                  <button
                    onClick={() => bookBundle(locationSlug)}
                    className="text-[#ffffff] font-semiBold inline-block text-[.72rem] rm:text-[.8rem] sm:text-sm lg:text-base ml-1 md:ml-3 px-[2px] border-b border-transparent transition-all duration-500 hover:text-[#CA9342] hover:border-[#CA9342]"
                  >
                    UNLOCK YOUR BUNDLE
                  </button>
                )}
                {!locationSlug && (
                  <button
                    onClick={showLocModal}
                    className="text-[#ffffff] font-semiBold inline-block text-[.72rem] rm:text-[.8rem] sm:text-sm lg:text-base ml-1 md:ml-3 px-[2px] border-b border-transparent transition-all duration-500  hover:text-[#CA9342] hover:border-[#CA9342]"
                  >
                    UNLOCK YOUR BUNDLE
                  </button>
                )}
              </div>
            </div>
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
      </div>
    )
  );
}
