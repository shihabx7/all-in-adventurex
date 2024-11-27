import LocationHeroHours from "./LocationHeroHours";
import { FiX } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import TitleWithSubtitleNew from "../util/TitleWithSubtitleNew";

import { useState, useEffect, useRef } from "react";

const LocationHero = (props) => {
  const [showHours, setShowHours] = useState(false);
  const hourref = useRef();

  const closeHourDetails = () => {
    setShowHours(false);
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
  };
  const showHourDetails = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");

    setShowHours(true);
  };

  useEffect(() => {
    const checkIfClickedOutsidehrs = (e) => {
      if (showHours && hourref.current && !hourref.current.contains(e.target)) {
        setShowHours(false);
        const body = document.getElementsByTagName("body")[0];
        body.classList.remove("overflow-hidden");
      }
    };

    document.addEventListener("mouseup", checkIfClickedOutsidehrs);

    return () => {
      document.removeEventListener("mouseup", checkIfClickedOutsidehrs);
    };
  }, [showHours]);

  return (
    <>
      {showHours && (
        <div className="overflow-y-scroll h-screen w-screen bg-[rgba(0,0,0,0.8)] z-[1000000] top-0 left-0  pb-10 md:pb-0 fixed">
          <div className="max-w-[1024px] mx-auto px-3 md:px-6 lg:px-4 relative">
            <div
              onClick={closeHourDetails}
              id="lochourclose"
              className="location-close-box flex justify-end pt-1 px-2 md:px-4 text-gray-400 text-xl md:text-2xl lg:text-3xl absolute top-[-50px] right-[4px] md:top-[-70px] xl:top-[-60px] xl:right-[-40px]"
            >
              <span className="inline-block p-1 border-2 border-red-600 text-red-600 rounded-full cursor-pointer hover:border-light-gold hover:text-gold">
                <FiX />
              </span>
            </div>
            <div
              ref={hourref}
              className="bg-[#FFF7E9] pt-5 lg:pt-8 mt-[60px] md:top-[80px] lg:mt-[92px] border-2 border-[#CA9342]"
            >
              <div>
                <TitleWithSubtitleNew
                  title="All in adventures"
                  subTitle={
                    "At " +
                    props.locationInfo.mall +
                    " in " +
                    props.locationName
                  }
                />
              </div>
              <LocationHeroHours
                locationInfo={props.locationInfo}
                businessHours={props.businessHours}
                holidayHours={props.holidayHours}
              />
            </div>
          </div>
        </div>
      )}

      <div
        className="bg-[#111111] home-hero location relative bg-cover bg-center"
        style={{
          backgroundImage: "url('" + props.pageData.pageHeroDesktop.url + "')",
        }}
      >
        <div className="home-hero-holder pt-0 pb-24 rm:pb-28  xm:pb-28 md:py-28 lg:py-32 2xl:py-36  relative">
          <div className="homehero-img hm-img md:hidden w-full min-h-[280px] bg-[#000000]">
            <img
              className="w-full"
              alt={props.pageData.pageHeroMobile.alt}
              src={props.pageData.pageHeroMobile.url}
            ></img>
          </div>
          {/* shadow */}
          <div className="w-full h-full fyp-baner absolute top-0 left-0 md:hidden z-10"></div>
          {/* shadow */}
          {/* =============stiker======= */}
          <div className="max-w-[84px] md:max-w-[120px] lg:max-w-[144px] absolute top-[4px] md:top-[26px] lg:top-[60px] left-0 right-[4px] md:right-0 ml-auto md:mx-auto z-40">
            <img
              alt={
                props.pageData.themeImage.hasImage
                  ? props.pageData.themeImage.alt
                  : "Kid and familly friendly escape rooms Allinadventures"
              }
              src={
                props.pageData.themeImage.hasImage
                  ? props.pageData.themeImage.url
                  : "/assets/kid-and-familly-friendly-escape-rooms-allinadventures.png"
              }
            ></img>
          </div>
          {/* =============stiker======= */}
          <div className="max-w-7xl home-hero-containerx mx-auto mt-[-28%] rm:mt-[-26%] lm:mt-[-25%] zm:mt-[-24%] sm:mt-[-22%] md:mt-0 md:pt-[160px] lg:pt-20 relative px-4  z-20">
            <div className="page-benar-info">
              {!props.isPublished && (
                <div className="text-center font-bold text-red-600 text-[32px] md:text-[52px] font-os cm-title py-4">
                  <img
                    className="max-w-[392px] mx-auto"
                    alt={"AllinAdventurs escape room in" + props.locationName}
                    src="/assets/svg/coming-soon.svg"
                  ></img>
                </div>
              )}
              <p className=" md:mt-4 lg:mt-6 xl:mt-0 font-semibold zm:text-lg md:text-2xl rm:mb-[-5px] xm:mb-1 text-white text-center leading-[1.2] uppercase">
                AT {props.locationInfo.mall} IN {props.locationName}
              </p>
              <h1 className="text-gold font-bold text-center text-2xl rm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-3 xm:mb-4 md:mb-6 lg:mb-6 font-os outline-tile uppercase">
                {props.pageData.pageTitle}
              </h1>
              <div
                className="text-gray-100 max-w-[900px] mx-auto text-center lg:text-lg"
                dangerouslySetInnerHTML={{
                  __html: props.pageData.pageSubtitle,
                }}
              ></div>
            </div>
            <div className="max-w-md mx-auto mt-8 pb-8 ">
              {/*============location search btn==========*/}
              <div className="booking-btn">
                <a
                  href={"/" + props.locationSlug + "/activities"}
                  className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg"
                >
                  VIEW ALL GAMES
                </a>
              </div>
              <div className="booking-btn mt-4">
                <a
                  href={"/" + props.locationSlug + "/events"}
                  className="block py-3 rounded-full text-center  text-white font-medium border-2 border-red-600  hover:bg-red-700 hover:border-red-700 text-lg"
                >
                  VIEW ALL EVENTS
                </a>
              </div>
              {/*============location search btn==========*/}
            </div>
          </div>
          {/*============location Info==========*/}
          <div className="drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] max-w-[96%]  xm:max-w-[92%] mx-auto md:max-w-3xl absolute bottom-[-18%] rm:bottom-[-16%] lm:bottom-[-17%] zm:bottom-[-16%] sm:bottom-[-15%] md:bottom-[-13%] left-0 right-0  bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded z-40">
            <div className="flex flex-wrap md:grid justify-center items-center md:grid-cols-5 ">
              <div className="text-center w-[33%] md:w-auto">
                <div>
                  <p className="golden-text text-xl md:text-4xl font-os font-bold">
                    {props.pageData.themedGames}
                  </p>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                    Themed Games
                  </p>
                </div>
              </div>
              <div className="text-center w-[33%] md:w-auto">
                <div className="border-l border-gray-300">
                  <p className="golden-text text-xl md:text-4xl font-os font-bold">
                    {props.pageData.ageRange}
                  </p>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                    Age Range
                  </p>
                </div>
              </div>
              <div className="text-center w-[33%] md:w-auto">
                <div className="border-l border-gray-300">
                  <p className="golden-text text-xl md:text-4xl font-os font-bold">
                    {props.pageData.privateEvents}
                  </p>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                    Private Events
                  </p>
                </div>
              </div>
              <div className="text-center w-[44%] md:w-auto border-t pt-2 mt-3 md:pt-0 md:mt-0 md:border-t-0 border-gray-300">
                <div className=" md:border-l border-gray-300">
                  <p className="golden-text text-xl md:text-4xl font-os font-bold">
                    {props.pageData.raveReviews}
                  </p>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                    Rave Reviews
                  </p>
                </div>
              </div>
              <div className="text-center w-[44%] md:w-auto border-t md:border-t-0 pt-2 mt-3 md:pt-0 md:mt-0 border-gray-300">
                <div className="border-l  border-gray-300">
                  <p className="golden-text text-xl md:text-4xl font-os font-bold">
                    {props.pageData.guestsServed}
                  </p>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                    Guests Served
                  </p>
                </div>
              </div>
            </div>

            <div className="show-hours-btn details flex items-center justify-center mt-6 md:mt-8">
              <div className="shb-container text-center ">
                <button
                  onClick={showHourDetails}
                  className="mx-auto px-6 py-2 md:py-3 text-[15px] md:text-[16px] flex items-center space-x-2 text-red-600 border-2 border-gold hover:text-red-700 hover:border-red-700 transition duration-350 ease-in-out rounded-full font-medium"
                >
                  <span>STORE DETAILS</span>
                  <span className="text-xl mt-[1px]">
                    <FaAngleDown />
                  </span>
                </button>

                <p className="text-[#464646] text-sm md:text-base mt-2">
                  See open hours, direction and contact details
                </p>
              </div>
            </div>
          </div>
          {/*============location Info==========*/}
        </div>
      </div>
    </>
  );
};

export default LocationHero;
