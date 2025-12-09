import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { useSiteData } from "../../contexts/SiteDataContext";

//import MobileEscapeStickyBar from "../mobileEscapeGames/MobileEscapeStickyBar";
//import StickyGiftBar from "../giftCardPageComps/StickyGiftBar";
//import UerStickyBar from "../unlimitedEscapeRoom/UerStickyBar";

import SvglogoMain from "../headerComps/SvglogoMain";
import HeaderLocMenu from "../headerComps/HeaderLocMenu";
import DropDownMenu from "../headerComps/DropDownMenu";
//import EventBookingBtn from "../headerComps/EventBookingBtn";
import GameBookingBtn from "../headerComps/GameBookingBtn";
import HeaderNotice from "../headerComps/HeaderNotice";
import LocationMenuBtnHeader from "../util/LocationMenuBtnHeader";
import MobileBookingBtn from "../headerComps/MobileBookingBtn";
import MobileEscapeBookingBtn from "../headerComps/MobileEscapeBookingBtn";
import { navNotice } from "../../lib/tempData/tempNavNotice";
import { locationBookingInfo } from "../../lib/v2/data/locationBookingInfo";

const LocationNav = (props) => {
  const [showSlug, setShowSlug] = useState(null);
  const [noticeData, setNoticeData] = useState();

  const setNotice = async (sl) => {
    const ndata = await navNotice(sl);
    //  console.log(ndata)
    setNoticeData(ndata);
  };

  useEffect(() => {
    setNotice(props.locationSlug);
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

  const bookEventFlow = (locationSlug) => {
    let bookingData = locationBookingInfo[locationSlug];
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.partyPackageFlow,
    });
  };

  return (
    <>
      {/* ============Location List Menu */}
      {props.locationSlugList && (
        <div id="locmenu" className="loc-menu-holder hidden">
          <HeaderLocMenu locationSlugList={props.locationSlugList} />
        </div>
      )}
      {/* ============Location List Menu end*/}
      {/* ============Nav Header  */}
      <header id="header" className="bg-coffee w-full ">
        <div id="header-container-s" className="header-container-s">
          {noticeData !== undefined &&
            noticeData !== null &&
            noticeData.showNotice &&
            props.activitySlug !== "mobile-escape-room" && (
              <>
                <HeaderNotice
                  noticeData={noticeData}
                  locationSlug={props.locationSlug}
                  giftBooking={props.giftBooking}
                />
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
                    href={"/locations/" + props.locationSlug}
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
              <LocationMenuBtnHeader locationName={props.locationName} />
              {/*============location search btn end==========*/}
              {/*============nav bar btns ==========*/}
              <div className="home-nav-menu flex items-center space-x-0 md:space-x-10 lg:space-x-14 justify-end ">
                {/* ============Nav bar btn desktop  */}
                {props.activitySlug !== "mobile-escape-room" ? (
                  <>
                    <div className="menu-item-btn search-loc  text-white text-lg hidden lg:block">
                      <div className="header-btn">
                        <button
                          onClick={() => bookEventFlow(props.locationSlug)}
                          className="bg-transparent cursor-pointer rounded font-medium text-white hover:bg-red-700 py-2.5 px-6 border-[2px] border-red-600 hover:border-red-700 transition duration-300"
                        >
                          BOOK EVENT
                        </button>
                      </div>
                    </div>
                    <div className="menu-item-btn text-white text-lg hidden lg:block search-loc ">
                      <GameBookingBtn
                        isPublished={
                          props.isPublished ? props.isPublished : false
                        }
                        locationSlug={
                          props.locationSlug ? props.locationSlug : false
                        }
                        allBooking={props.allBooking ? props.allBooking : false}
                        giftBooking={
                          props.giftBooking ? props.giftBooking : false
                        }
                        gameBooking={
                          props.gameBooking ? props.gameBooking : false
                        }
                        isGiftPage={props.isGiftPage ? props.isGiftPage : false}
                      />
                    </div>
                  </>
                ) : (
                  <div className="menu-item-btn search-loc  text-white text-lg hidden lg:block">
                    <MobileEscapeBookingBtn
                      locationSlug={
                        props.locationSlug ? props.locationSlug : false
                      }
                    />
                  </div>
                )}
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
              className="submenu-holder absolute md:top-full right-0 z-[100]  w-full md:w-[740px]"
            >
              {showMe && (
                <DropDownMenu
                  locationSlug={props.locationSlug}
                  escapeGameSlugList={props.escapeGameSlugList}
                  otherGameSlugList={props.otherGameSlugList}
                  eventSlugList={props.eventSlugList}
                  giftBooking={props.giftBooking ? props.giftBooking : false}
                  hasToymakers={props.hasToymakers ? props.hasToymakers : false}
                  hasMobileEscapeRoom={
                    props.hasMobileEscapeRoom
                      ? props.hasMobileEscapeRoom
                      : false
                  }
                ></DropDownMenu>
              )}
            </div>
            {/*============dropdown/ toggle menu end==========*/}
          </div>
        </div>

        {/*============floating booking btn mobile ==========*/}
        <div
          id="hbtn"
          className="header-book-btn-container  w-full  bg-coffee  lg:hidden z-50"
        >
          <MobileBookingBtn
            isPublished={props.isPublished ? props.isPublished : false}
            locationSlug={props.locationSlug ? props.locationSlug : false}
            allBooking={props.allBooking ? props.allBooking : false}
            giftBooking={props.giftBooking ? props.giftBooking : false}
            gameBooking={props.gameBooking ? props.gameBooking : false}
            isGiftPage={props.isGiftPage ? props.isGiftPage : false}
            partyBooking={props.partyBooking ? props.partyBooking : false}
            eventSlug={props.eventSlug ? props.eventSlug : false}
            activeGameBooking={
              props.activeGameBooking ? props.activeGameBooking : false
            }
            activitySlug={props.activitySlug ? props.activitySlug : false}
          />
        </div>
        {/*============floating booking btn mobile end==========*/}
      </header>
      {/* ============Nav Header  end*/}
    </>
  );
};

export default LocationNav;
