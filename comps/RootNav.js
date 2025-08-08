import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import SvglogoMain from "./headerComps/SvglogoMain";
import HeaderLocMenu from "./headerComps/HeaderLocMenu";
import DropDownMenu from "./headerComps/DropDownMenu";
import EventBookingBtn from "./headerComps/EventBookingBtn";
import GameBookingBtn from "./headerComps/GameBookingBtn";
import HeaderNotice from "./headerComps/HeaderNotice";
import LocationMenuBtnHeader from "./util/LocationMenuBtnHeader";
import StickyGiftBar from "./giftCardPageComps/StickyGiftBar";
import UerStickyBar from "./unlimitedEscapeRoom/UerStickyBar";
import { navNotice } from "../lib/tempData/tempNavNotice";
const RootNav = (props) => {
  const [showSlug, setShowSlug] = useState(null);
  const [noticeData, setNoticeData] = useState();

  const setNotice = async () => {
    const ndata = await navNotice();
    //console.log(ndata)
    setNoticeData(ndata);
  };

  useEffect(() => {
    setNotice();
    setShowSlug(props.slug);
  }, []);

  const ref = useRef();
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
    const body = document.getElementsByTagName("body")[0];
    const winWidth = window.innerWidth;
    if (showMe == false) {
      if (winWidth < 768) {
        body.classList.add("overflow-hidden");
      }
    } else {
      if (winWidth < 768) {
        body.classList.remove("overflow-hidden");
      }
    }
  }

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showMe && ref.current && !ref.current.contains(e.target)) {
        setShowMe(false);
      }
    };

    document.addEventListener("mouseup", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mouseup", checkIfClickedOutside);
    };
  }, [showMe]);

  return (
    <>
      {/* ============Location List Menu */}

      <div id="locmenu" className="loc-menu-holder hidden">
        <HeaderLocMenu locationSlugList={props.locationSlugList} />
      </div>

      {/* 
      <UerStickyBar locationSlugList={props.locationSlugList} />
      <StickyGiftBar
        locationSlugList={props.locationSlugList}
        locationSlug={props.locationSlug ? props.locationSlug : false}
        giftBooking={props.giftBooking ? props.giftBooking : false}
      />*/}

      {/* ============Location List Menu end*/}
      {/* ============Nav Header  */}
      <header id="header" className="bg-coffee w-full ">
        <div id="header-container-s" className="header-container-s">
          {noticeData !== undefined &&
            noticeData !== null &&
            noticeData.showNotice && (
              <>
                <HeaderNotice noticeData={noticeData} />
              </>
            )}

          <div
            className="header-container-s max-w-7xl mx-auto relative md:px-4"
            ref={ref}
          >
            <div className="home-nav-bar flex justify-between items-center py-2 px-2 sm:p-1 lg:py-2 lg:px-0">
              {/**==========================logo================== */}
              <div className="logo">
                {props.locationSlug ? (
                  <a
                    href={"/locations/" + props.locationslug}
                    className="flex items-center"
                  >
                    <SvglogoMain />
                  </a>
                ) : (
                  <a href={"/"} className="flex items-center">
                    <SvglogoMain />
                  </a>
                )}
              </div>
              {/**==========================logo end================== */}
              {/*============location search btn==========*/}
              <LocationMenuBtnHeader />
              {/*============location search btn end==========*/}
              {/*============nav bar btns ==========*/}
              <div className="home-nav-menu flex items-center space-x-0 md:space-x-10 lg:space-x-14 justify-end ">
                {/* ============Nav bar btn desktop  */}
                <div className="menu-item-btn search-loc  text-white text-lg hidden lg:block">
                  <EventBookingBtn />
                </div>
                <div className="menu-item-btn text-white text-lg hidden lg:block search-loc ">
                  <GameBookingBtn />
                </div>
                {/* ============Nav bar btn desktop  end*/}
                {/* ============Nav bar toggle icon  */}
                <div
                  className="menu-item hover:shadow-md hover:cursor-pointer relative"
                  onClick={toggle}
                >
                  <div
                    className="menu-icon-box p-2 bg-coffee-light"
                    style={{
                      display: !showMe ? "block" : "none",
                    }}
                  >
                    <span className="block w-7 md:w-8 h-1 bg-golden"></span>
                    <span className="block my-1 w-7 md:w-8 h-1 bg-golden"></span>
                    <span className="block my-1 w-7 md:w-8 h-1 bg-golden"></span>
                    <span className="block w-7 md:w-8 h-1 bg-golden"></span>
                  </div>
                  <div
                    className="menu-icon-box menu-close flex justify-center items-center p-1 px-1 md:px-1.5 bg-coffee-light"
                    style={{
                      display: showMe ? "block" : "none",
                    }}
                  >
                    <div className="text-gold text-3xl md:text-4xl">
                      <FiX />
                    </div>
                  </div>
                </div>
                {/* ============Nav bar toggle icon  end*/}
              </div>
              {/*============nav bar btns end==========*/}
            </div>
            {/*============dropdown/ toggle menu==========*/}
            <div
              id="submenu-holder"
              className="submenu-holder absolute md:top-full right-0 z-[100]  w-full md:w-[716px]"
            >
              {showMe && (
                <DropDownMenu
                  escapeGameSlugList={props.escapeGameSlugList}
                  otherGameSlugList={props.otherGameSlugList}
                  eventSlugList={props.eventSlugList}
                ></DropDownMenu>
              )}
            </div>
            {/*============dropdown/ toggle menu end==========*/}
          </div>
        </div>

        {/*============floating booking btn mobile ==========*/}

        {/*============floating booking btn mobile end==========*/}
      </header>
      {/* ============Nav Header  end*/}
    </>
  );
};

export default RootNav;
