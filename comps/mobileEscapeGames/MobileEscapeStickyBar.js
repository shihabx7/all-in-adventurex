import { useState, useEffect } from "react";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";

function MobileEscapeStickyBar(props) {
  const [showNotice, setShownotice] = useState(false);
  const closeNotice = () => {
    setCookie("mobile-escape-notice", true, {
      path: "/",
      maxAge: 86400, // Expires after 24*7 hours
      sameSite: true,
    });
    setShownotice(false);
  };
  useEffect(() => {
    // const winSize = screen.width;
    //console.log(winSize);
    const coc = getCookie("mobile-escape-notice");
    if (!coc) {
      setShownotice(true);
    }
  }, []);

  return (
    <>
      {!showNotice ? (
        <></>
      ) : (
        <div className="mer-b-bar cursor-pointer w-full fixed z-[999] bottom-0 left-0  bg-[url('/assets/gift-images/Bottom-Bar-mobile-desktop.png')] bg-cover">
          <a
            href="#"
            className="sticky-gift-container w-full  relative z-80 block"
          >
            <div className="stgb-left absolute bottom-[-14px] left-[-6px] md:bottom-[-30px] xl:bottom-[-44px] md:left-[0px] max-w-[48px] md:max-w-[80px] xl:max-w-[116px]">
              <img
                className="w-full"
                src="/assets/mobile-escape-room/icon/Allinadventures-Mobile-EscapeRoom-icon-2.png"
              ></img>
            </div>
            <div className="stgb-right absolute bottom-[-10px]  md:bottom-[-24px] xl:bottom-[-44px]  right-[-26px] md:right-[44px] lg:right-[48px]  max-w-[68px] md:max-w-[110px] xl:max-w-[156px]">
              <img
                className="w-full"
                src="/assets/mobile-escape-room/icon/Allinadventures-Mobile-EscapeRoom-icon.png"
              ></img>
            </div>
            <div className="stgb-content flex justify-between items-center py-1 px-2">
              <div className="stgb-em w-[28px] md:w-[30px] lg:w-[32px]"></div>
              <div
                id="tap-btn"
                className="stgb-txt flex flex-auto justify-center items-center space-x-2 md:space-x-4"
              >
                <img
                  className="max-w-[30px]  md:max-w-[32px] lg:max-w-[36px]"
                  src="/assets/gift-images/tap-icon.svg"
                ></img>
                <div className="block">
                  <div className=" [text-shadow:_0_3px_0_rgb(0_0_0_/_30%)] text-[13px] md:text-[22px] lg:text-[26px] 2xl:text-[30px] leading-[1.4] font-os font-bold text-white flex space-x-2 justify-center items-center">
                    BOOK YOUR MOBILE ESCAPE ROOM TODAY
                  </div>
                </div>

                <img
                  className="max-w-[30px]  md:max-w-[32px] lg:max-w-[36px]"
                  src="/assets/gift-images/tap-icon.svg"
                ></img>
              </div>
              <button
                onClick={() => closeNotice()}
                className="btn-close-stgb relative z-[100] "
              >
                <img
                  className="w-[28px] md:w-[30px] lg:w-[32px]"
                  src="/assets/gift-images/cross-desktop.svg"
                ></img>
              </button>
            </div>
          </a>
        </div>
      )}
    </>
  );
}

export default MobileEscapeStickyBar;
