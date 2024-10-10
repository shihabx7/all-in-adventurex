import { useState, useEffect } from "react";
import { FiExternalLink, FiX } from "react-icons/fi";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
const HeaderNotice = () => {
  const [showNotice, setShownotice] = useState(false);
  const closeNotice = () => {
    setCookie("header-notice", true, {
      path: "/",
      maxAge: 604800, // Expires after 24*7 hours
      sameSite: true,
    });
    setShownotice(false);
  };
  useEffect(() => {
    // const winSize = screen.width;
    //console.log(winSize);
    const coc = getCookie("header-notice");
    if (!coc) {
      setShownotice(true);
    }
  }, []);

  return (
    showNotice && (
      <div className="header-notice py-[2px] sm:py-[2px] bg-[#564B31] lg:hidden">
        <div className="max-w-7xl mx-auto ">
          <div className="header-notice-box flex justify-between items-center fex space-x-2 md:space-x-2  px-2  md:px-4">
            <div className="header-notice-text items-center">
              <div className="text-white  text-[11px] sm:text-sm  text-center font-light">
                To finalize your booking, you'll be redirected to our secure
                booking platform, fareharbor.com
              </div>
            </div>
            <div className="header-notice-close flex items-center">
              <button
                onClick={() => closeNotice()}
                className="text-gold text-2xl md:text-3xl"
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
