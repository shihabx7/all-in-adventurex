import LocationHeroHours from "../locationsPage/LocationHeroHours";
import { FiX } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import TitleWithSubtitleNew from "../util/TitleWithSubtitleNew";
import { useState, useEffect, useRef } from "react";

const ActivityLocHero = (props) => {
  const [showHours, setShowHours] = useState(false);
  const hourref = useRef();
  const bookAll = (bookingData) => {
    FH.open({
      shortname: bookingData.shortname,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: "items",
    });
  };

  const bookGame = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };
  // console.log(props.pagedata.bookingdata.active);
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
      {/* ?autolightframe=yes*/}
      {props.locationInfo && showHours && (
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
                    props.pageData.locationName
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
        className="bg-[#111111] home-hero"
        style={{
          backgroundImage: "url('" + props.pageData.pageHeroDesktop.url + "')",
        }}
      >
        <div className="home-hero-holder ">
          <div className="homehero-img w-full min-h-[280px] bg-[#000000] md:hidden">
            <img
              src={props.pageData.pageHeroMobile.url}
              alt={props.pageData.pageHeroMobile.alt}
            ></img>
          </div>
          <div className="max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-[130px] md:pt-20 md:pb-28 lg:py-32 xl:py-36 relative z-40">
            <div className="page-benar-info">
              {props.pageData.themeImage.hasImage ? (
                <div className="flex justify-center mb-1 md:mb-2">
                  <img
                    className="max-h-[30px] md:max-h-[32px] lg:max-h-[36px] 3xl:max-h-[40px]"
                    src={props.pageData.themeImage.url}
                    alt={props.pageData.themeImage.alt}
                  ></img>
                </div>
              ) : (
                <></>
              )}
              {!props.isPublished ? (
                <div className="text-center font-bold text-red-600 text-[32px] md:text-[52px] font-os cm-title py-4">
                  <img
                    className="max-w-[380px] mx-auto"
                    src="/assets/svg/coming-soon.svg"
                  ></img>
                </div>
              ) : (
                <></>
              )}
              {props.pageData.noticeImage && (
                <div className="text-center font-bold text-red-600 text-[32px] md:text-[52px] font-os cm-title py-4">
                  <img
                    className="max-w-[400px] md:max-w-[480px] lg:max-w-[520px] mx-auto"
                    src={props.pageData.noticeImage.url}
                    alt={props.pageData.noticeImage.alt}
                  ></img>
                </div>
              )}

              <p className="leading-[1.2] md:mt-0 font-semibold text-lg md:text-2xl mb-1 text-white text-center uppercase">
                AT {props.locationInfo.mall} IN {props.pageData.locationName}
              </p>
              <h1 className="text-gold aia-shadow font-bold text-center  text-3xl md:text-5xl lg:text-6xl mb-2 rm:mb-2 md:mb-4 lg:mb-6 font-os uppercase max-w-[1024px] mx-auto">
                {props.pageData.pageTitle}
              </h1>
              <div
                className="text-gray-100 max-w-[840px] mx-auto text-center lg:text-lg"
                dangerouslySetInnerHTML={{
                  __html: props.pageData.pageSubtitle,
                }}
              ></div>
            </div>
            <div className="max-w-md mx-auto mt-8 ">
              {/*============Game Booking btn==========*/}
              {props.isPublished ? (
                <>
                  {props.gameBooking.isActive ? (
                    <button
                      onClick={() => bookGame(props.gameBooking)}
                      className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg"
                    >
                      BOOK THIS GAME
                    </button>
                  ) : (
                    <button className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">
                      COMING SOON
                    </button>
                  )}
                </>
              ) : (
                <button className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">
                  COMING SOON
                </button>
              )}
              {/*============Party Booking / all event link btn==========*/}
              {props.partyBooking.hasParty ? (
                <button
                  onClick={() => bookGame(props.partyBooking)}
                  className="w-full block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                >
                  BOOK YOUR PARTY
                </button>
              ) : (
                <a
                  href={"/" + props.pageData.locationSlug + "/events"}
                  className="w-full block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                >
                  VIEW ALL EVENTS
                </a>
              )}

              {/*============Hero Notice==========*/}
            </div>
            {props.pageData.pageNotice && (
              <div
                className="home-botice-des mt-4 md:mt-8 text-[#dddddd] max-w-[700px] mx-auto text-center md:text-lg"
                dangerouslySetInnerHTML={{ __html: props.pageData.pageNotice }}
              ></div>
            )}

            {/*============Activity info ==========*/}
            <div className="mb-6"></div>
            <div className="game-ft drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] max-w-[90%] md:max-w-3xl mx-auto bottom-[-20%] md:bottom-[-16%] left-0 right-0 absolute bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded ">
              <div className="flex flex-wrap w-full justify-center md:grid md:grid-cols-5  md:justify-evenly items-center ">
                {/*============Team size==========*/}
                <div className="text-center w-[33%] md:w-auto">
                  <div className=" ">
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      {props.pageData.teamSize}
                    </p>
                    <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                      {props.pageData.teamSizeLabel}
                    </p>
                  </div>
                </div>
                {/*============Age range==========*/}

                <div className="text-center w-[33%] md:w-auto">
                  <div className="border-l border-gray-300">
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      {props.pageData.age}
                    </p>
                    <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                      Age Range
                    </p>
                  </div>
                </div>

                {/*============Duration/Private Events==========*/}

                <div className="text-center w-[33%] md:w-auto">
                  <div className="border-l border-gray-300 ">
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      {props.pageData.successRate
                        ? props.pageData.duration
                        : props.pageData.privateEvents}
                    </p>
                    <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                      {props.pageData.successRate
                        ? "Duration"
                        : "Private Events"}
                    </p>
                  </div>
                </div>

                {/*============Duration/success Rates==========*/}

                <div className="text-center w-[44%] md:w-auto">
                  <div className="pt-2 mt-3 border-t md:border-t-0 md:pt-0 md:mt-0 md:border-l border-gray-300 ">
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      {props.pageData.successRate
                        ? props.pageData.successRate + "%"
                        : props.pageData.duration + " MIN"}
                    </p>
                    <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                      {props.pageData.successRate ? "Success Rate" : "Duration"}
                    </p>
                  </div>
                </div>

                {/*============Private ==========*/}

                <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
                  <div className="border-l border-gray-300 ">
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      {props.pageData.privateEvents}
                    </p>
                    <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                      Private
                    </p>
                  </div>
                </div>
              </div>

              {/*============location hours info ==========*/}
              <div className="show-hours-btn details flex items-center justify-center mt-6 md:mt-8">
                <div className="shb-container text-center ">
                  <button
                    onClick={showHourDetails}
                    className="mx-auto px-6 py-2 md:py-3 text-[15px] md:text-[16px] flex items-center space-x-2 text-red-600  border-2 border-gold hover:text-red-700 hover:border-red-700 transition duration-350 ease-in-out rounded-full font-medium"
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

              {/*============location hours info ==========*/}
            </div>

            {/*============Activity info ==========*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityLocHero;