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
      {/* =====================================================location hours modal=========*/}
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
      {/* =====================================================location hours modal=========*/}

      <div className="activity-loc-hero-hero bg-[#121212] relative">
        {/* =======================================dsktop bg=============== */}
        <div className="activity-loc-hero-img dsk-img absolute top-0 left-0 w-full h-full  hidden md:block">
          <img
            className="w-full h-full object-cover object-center bg-no-repeat"
            src={props.pageData.pageHeroDesktop.url}
            alt={
              props.pageData.pageHeroDesktop.alt
                ? props.pageData.pageHeroDesktop.alt
                : "all in adventures escape game hero img"
            }
          ></img>
        </div>
        {/* =======================================dsktop bg=============== */}
        <div className="home-hero-holder pt-0 pb-24 rm:pb-28  xm:pb-28 md:py-28 lg:py-32 2xl:py-36  relative">
          {/* ======================================= mobile bg=============== */}
          <div className="homehero-img hm-img md:hidden w-full min-h-[280px] ">
            <img
              src={props.pageData.pageHeroMobile.url}
              alt={props.pageData.pageHeroMobile.alt}
            ></img>
          </div>
          {/* =======================================mobile bg=============== */}
          {/* =======================shadow */}
          <div className="w-full h-full fyp-baner absolute top-0 left-0 md:hidden z-10"></div>
          {/*======================= shadow */}
          <div className="max-w-7xl home-hero-containerx mx-auto mt-[-28%] rm:mt-[-26%] lm:mt-[-25%] zm:mt-[-24%] sm:mt-[-22%] md:mt-0 relative px-2 lm:px-4  z-20">
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

              <p className=" md:mt-4 lg:mt-6 xl:mt-0 font-semibold zm:text-lg md:text-2xl rm:mb-[-5px] xm:mb-1 text-white text-center leading-[1.2] uppercase">
                AT {props.locationInfo.mall} IN {props.pageData.locationName}
              </p>
              <h1 className="text-gold font-bold text-center text-2xl rm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-3 xm:mb-4 md:mb-6 lg:mb-6 font-os outline-tile">
                {props.pageData.pageTitle}
              </h1>
              {props.pageData.pageSubtitle && (
                <div
                  className="text-gray-100 max-w-[1000px] mx-auto text-center lg:text-lg"
                  dangerouslySetInnerHTML={{
                    __html: props.pageData.pageSubtitle,
                  }}
                ></div>
              )}
            </div>
              {props.pageData.pageNotice && (
              <div
                className="home-botice-des mt-2 md:mt-3 text-[#dddddd] max-w-[1000px] mx-auto text-center md:text-lg"
                dangerouslySetInnerHTML={{
                  __html: props.pageData.pageNotice,
                }}
              ></div>
            )}
            <div className="max-w-md mx-auto mt-5 rm:mt-6 xm:mt-6  md:mt-8 pb-6 md:pb-12 lg:pb-8 ">
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
          
          </div>
          {/*============Activity info ==========*/}
          <div className="game-ft drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] max-w-[96%]  xm:max-w-[92%] md:max-w-[780px] lg:max-w-[880px] xl:max-w-[960px] mx-auto absolute bottom-[-20%] rm:bottom-[-18%] lm:bottom-[-18%] zm:bottom-[-17%] sm:bottom-[-17%] md:bottom-[-15%] left-0 right-0  bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded z-40">
            <div className="flex flex-wrap w-full justify-center md:grid md:grid-cols-5  md:justify-evenly items-center ">
              {/*============Team size==========*/}
              <div className="text-center w-[33%] md:w-auto">
                <div className=" ">
                  <p className="golden-text text-[1.15rem] md:text-[2rem] xl:text-4xl  font-os font-bold">
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
                  <p className="golden-text text-[1.15rem] md:text-[2rem] xl:text-4xl font-os font-bold">
                    {props.pageData.age}
                  </p>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                    Age
                  </p>
                </div>
              </div>

              {/*============Duration/Private Events==========*/}

              <div className="text-center w-[33%] md:w-auto">
                <div className="border-l border-gray-300 ">
                  <p className="golden-text text-[1.15rem] md:text-[2rem] xl:text-4xl  font-os font-bold">
                    {props.pageData.successRate
                      ? props.pageData.duration + " MIN"
                      : props.pageData.privateEvents}
                  </p>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                    {props.pageData.successRate ? "Duration" : "Private Events"}
                  </p>
                </div>
              </div>

              {/*============Duration/success Rates==========*/}

              <div className="text-center w-[44%] md:w-auto">
                <div className="pt-2 mt-3 border-t md:border-t-0 md:pt-0 md:mt-0 md:border-l border-gray-300 ">
                  <p className="golden-text text-[1.15rem] md:text-[2rem] xl:text-4xl font-os font-bold">
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
                  <p className="golden-text text-[1.15rem] md:text-[2rem] xl:text-4xl font-os font-bold">
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
    </>
  );
};

export default ActivityLocHero;
