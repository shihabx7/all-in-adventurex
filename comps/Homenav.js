import { FiX } from "react-icons/fi";
import Image from "next/image";
import SvglogoMain from "./headerComps/SvglogoMain";
import SvglogoMobile from "./headerComps/SvglogoMobile";
import SubMenu from "./headerComps/SubMenu";
import LocationMenu from "./headerComps/LocationMenu";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HeaderBtnRed from "./headerComps/HeaderBtnRed";
import LocationBtnH from "./util/LocationBtnH";
import HeaderNotice from "./headerComps/HeaderNotice";
import HeaderBtnTrans from "./headerComps/HeaderBtnTrans";
import MoblieBook from "./headerComps/MobileBook";
import LocationMenuX from "./headerComps/LocationMenuX";
import StickyGiftBar from "./giftCardPageComps/StickyGiftBar";
import { isActiveGiftBooking } from "../pages/api/LocationIndData/bookingList";

const Homenav = (props) => {
  const [showSlug, setShowSlug] = useState(null);

  useEffect(() => {
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
  const isGiftActiveForLoaction = (locationSlug) => {
    return isActiveGiftBooking(locationSlug);
  };

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
      {props.locationlist && (
        <div id="locmenu" className="loc-menu-holder hidden">
          <LocationMenuX locationlist={props.locationlist} />
        </div>
      )}
      {props.locationslug && isGiftActiveForLoaction(props.locationslug) && (
        <StickyGiftBar
          locationlist={props.locationlist}
          giftbookinglist={props.giftbookinglist}
          locationslug={props.locationslug ? props.locationslug : false}
          bookinggame={props.bookinggame ? props.bookinggame : false}
        />
      )}
      {!props.locationslug && (
        <StickyGiftBar
          locationlist={props.locationlist}
          giftbookinglist={props.giftbookinglist}
          locationslug={props.locationslug ? props.locationslug : false}
          bookinggame={props.bookinggame ? props.bookinggame : false}
        />
      )}
      <header id="header" className="bg-coffee w-full ">
        <div id="header-container-s" className="header-container-s">
          {/*<HeaderNotice/>*/}
          <div
            className="header-container-s max-w-7xl mx-auto relative md:px-4"
            ref={ref}
          >
            <div className="home-nav-bar flex justify-between items-center py-2 px-2 sm:p-1 lg:py-2 lg:px-0">
              {/**==========================logo================== */}
              <div className="logo">
                {props.locationslug && (
                  <a
                    href={"/locations/" + props.locationslug}
                    className="flex items-center"
                  >
                    <SvglogoMain></SvglogoMain>
                  </a>
                )}
                {!props.locationslug && (
                  <a href="/" className="flex items-center">
                    <SvglogoMain></SvglogoMain>
                  </a>
                )}
              </div>
              {/**==========================logo end================== */}
              {/*============location search btn==========*/}
              <LocationBtnH location={props.location} />
              {/*============location search btn==========*/}
              <div className="home-nav-menu flex items-center space-x-0 md:space-x-10 lg:space-x-14 justify-end ">
                <div className="menu-item-btn search-loc  text-white text-lg hidden lg:block">
                  {props.locationslug && props.eventbooking && (
                    <HeaderBtnTrans
                      locationslug={props.locationslug}
                      eventbooking={props.eventbooking}
                      eventslug={props.eventslug ? props.eventslug : false}
                      btntext="BOOK EVENT"
                      gameslug={props.gameslug ? props.gameslug : false}
                      bookingParty={
                        props.bookingParty ? props.bookingParty : false
                      }
                    />
                  )}
                  {props.locationslug && !props.eventbooking && (
                    <HeaderBtnTrans
                      locationslug={props.locationslug}
                      eventslug={props.eventslug ? props.eventslug : false}
                      btntext="BOOK EVENT"
                      gameslug={props.gameslug ? props.gameslug : false}
                      bookingParty={
                        props.bookingParty ? props.bookingParty : false
                      }
                    />
                  )}

                  {!props.locationslug && (
                    <HeaderBtnTrans btntext="BOOK EVENT" />
                  )}
                </div>
                <div className="menu-item-btn text-white text-lg hidden lg:block search-loc ">
                  {props.bookingall &&
                    (props.publish_status == true ||
                      props.publish_status == undefined) && (
                      <HeaderBtnRed
                        bookingall={props.bookingall}
                        btntext="BOOK GAMES"
                      />
                    )}
                  {props.bookingall && props.publish_status == false && (
                    <HeaderBtnRed btntext={"COMING SOON"} />
                  )}

                  {props.bookinggame &&
                    (props.publish_status == true ||
                      props.publish_status == undefined) && (
                      <HeaderBtnRed
                        bookinggame={props.bookinggame}
                        btntext={
                          props.bookinggame.type == "gift"
                            ? "BUY GIFT CARDS"
                            : "BOOK THIS GAME"
                        }
                      />
                    )}
                  {props.bookinggame && props.publish_status == false && (
                    <HeaderBtnRed btntext={"COMING SOON"} />
                  )}
                  {props.vgamebooking && (
                    <HeaderBtnRed
                      vgamebooking={props.vgamebooking}
                      btntext="BOOK THIS GAME"
                    />
                  )}
                  {props.vgamebookinglink && (
                    <HeaderBtnRed
                      vgamebookinglink={props.vgamebookinglink}
                      btntext="BOOK THIS GAME"
                    />
                  )}
                  {!props.bookingall &&
                    !props.bookinggame &&
                    !props.vgamebooking &&
                    !props.vgamebookinglink && (
                      <HeaderBtnRed btntext="BOOK GAMES" />
                    )}
                </div>
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
              </div>
            </div>

            <div
              id="submenu-holder"
              className="submenu-holder absolute md:top-full right-0 z-[100]  w-full md:w-auto"
            >
              {showMe && props.locationslug && (
                <SubMenu
                  locationslug={props.locationslug}
                  eventlist={props.eventlist}
                  activitylist={props.activitylist}
                  activeGiftCards={isActiveGiftBooking(props.locationslug)}
                ></SubMenu>
              )}
              {showMe && !props.locationslug && (
                <SubMenu
                  activitylist={props.activitylist}
                  eventlist={props.eventlist}
                ></SubMenu>
              )}
            </div>
          </div>
        </div>
        {props.locationslug && props.bookingall && (
          <MoblieBook
            locationslug={props.locationslug}
            eventslug={props.eventslug ? props.eventslug : false}
            bookingall={props.bookingall}
            publish_status={props.publish_status}
            eventbooking={props.eventbooking}
            gameslug={props.gameslug ? props.gameslug : false}
            bookingParty={props.bookingParty ? props.bookingParty : false}
          />
        )}
        {props.locationslug && props.bookinggame && (
          <MoblieBook
            locationslug={props.locationslug}
            eventslug={props.eventslug ? props.eventslug : false}
            bookinggame={props.bookinggame}
            publish_status={props.publish_status}
            eventbooking={props.eventbooking}
            gameslug={props.gameslug ? props.gameslug : false}
            bookingParty={props.bookingParty ? props.bookingParty : false}
          />
        )}
      </header>
    </>
  );
};

export default Homenav;
