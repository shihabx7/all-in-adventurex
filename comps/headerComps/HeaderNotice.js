import { useState, useEffect } from "react";
import { FiExternalLink, FiX } from "react-icons/fi";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
const HeaderNotice = ({ noticeData }) => {
  const [showNotice, setShownotice] = useState(false);
  const closeNotice = () => {
    setCookie("close-h-notice", true, {
      path: "/",
      maxAge: 3600, // Expires after 24 hours
      sameSite: true,
    });
    setShownotice(false);
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

  return (
    showNotice && (
      <div className="header-notice py-[4px] sm:py-[2px] bg-[#127B8B]">
        <div className="max-w-7xl mx-auto ">
          <div className="header-notice-container flex justify-between items-center fex space-x-2 md:space-x-2  px-2  md:px-4">
            <div className="header-notice-text items-center grow">
              <div className="text-[#FDEABC]  text-[12px] rm:text-[13px] sm:text-sm lg:text-base text-center font-light leading-[1.2]" dangerouslySetInnerHTML={{ __html: noticeData.text }}>

              </div>

            </div>
            <div className="header-notice-close flex items-center">
              <button
                onClick={() => closeNotice()}
                className="text-[#dddddd] hover:text-[#ffffff] text-2xl md:text-3xl"
              >
                <FiX />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default HeaderNotice;
