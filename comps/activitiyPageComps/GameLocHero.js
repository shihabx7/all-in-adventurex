import Script from "next/script";
import LocationHours from "../locationsPage/LocationHours";
import { FiX } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import TitleWithSubTitle from "../util/TitleWithSubTitle";
import { useState, useEffect, useRef } from "react";

const GameLocHero = (props) => {
  const [showHours, setShowHours] = useState(false);
  const hourref = useRef();
  const bookAll = (bookingData) => {
    FH.open({
      shortname: bookingData.shortname,
      fallback: "simple",
      fullItems: "yes",
      // flow:  bookingData.flow,
      view: "items",
    });
  };

  const bookGame = (bookingData) => {
    FH.open({
      shortname: bookingData.shortname,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.item },
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
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      {props.locdetail && showHours && (
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
                <TitleWithSubTitle
                  title="All in adventures"
                  mall={props.pagedata.mall}
                  city={props.pagedata.city}
                  state={props.pagedata.state}
                />
              </div>
              <LocationHours locdetail={props.locdetail} />
            </div>
          </div>
        </div>
      )}
      <div
        className="home-hero"
        style={{
          background: "url('" + props.pagedata.coverimageL + "')",
        }}
      >
        <div className="home-hero-holder ">
          <div className="homehero-img w-full min-h-[280px] bg-[#000000] md:hidden">
            <img
              src={props.pagedata.coverimageM}
              alt={
                props.pagedata.coverimageM_alt
                  ? props.pagedata.coverimageM_alt
                  : "Allinadventures escape room"
              }
            ></img>
          </div>
          <div className="max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-[130px] md:pt-20 md:pb-28 lg:py-32 xl:py-36 relative z-50">
            <div className="page-benar-info">
              {props.pagedata.publish_status == false && (
                <div className="text-center font-bold text-red-600 text-[32px] md:text-[52px] font-os cm-title py-4">
                  <img
                    className="max-w-[400px] mx-auto"
                    src="/assets/svg/coming-soon.svg"
                  ></img>
                </div>
              )}

              <p className=" md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-white text-center uppercase">
                At {props.pagedata.mall} in {props.pagedata.location_name}
              </p>
              <h1 className="text-gold aia-shadow font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os uppercase max-w-[1000px] mx-auto">
                {props.pagedata.pagetitle}{" "}
              </h1>
              <div
                className="text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg"
                dangerouslySetInnerHTML={{
                  __html: props.pagedata.pagesubtitle,
                }}
              ></div>
            </div>
            <div className="max-w-md mx-auto mt-8 ">
              {/*============location search btn==========*/}
              {props.pagedata.bookingall &&
                props.pagedata.publish_status == true && (
                  <button
                    onClick={() => bookAll(props.pagedata.bookingall)}
                    className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg"
                  >
                    BOOK YOUR GAMES
                  </button>
                )}
              {props.pagedata.bookingall &&
                props.pagedata.publish_status == false && (
                  <button className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">
                    COMING SOON
                  </button>
                )}
              {props.pagedata.bookingdata &&
                props.pagedata.publish_status == true && (
                  <>
                    {props.pagedata.bookingdata.active == true && (
                      <button
                        onClick={() => bookGame(props.pagedata.bookingdata)}
                        className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg"
                      >
                        BOOK THIS GAME
                      </button>
                    )}
                    {props.pagedata.bookingdata.active == false && (
                      <button className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">
                        COMING SOON
                      </button>
                    )}
                  </>
                )}

              {props.pagedata.bookingdata &&
                props.pagedata.publish_status == false && (
                  <button className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">
                    COMING SOON
                  </button>
                )}
              {props.pagedata.eventbooking && props.eventslug && (
                <>
                  {props.pagedata.eventbooking.eventstatus == true && (
                    <button
                      onClick={() => {
                        bookGame(props.pagedata.eventbooking);
                      }}
                      className="block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                    >
                      {props.pagedata.bookingall
                        ? "BOOK A PARTY"
                        : "BOOK YOUR PARTY"}
                    </button>
                  )}
                  {props.pagedata.eventbooking.eventstatus == false && (
                    <a
                      href="#eventform"
                      className="block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                    >
                      {props.pagedata.bookingall
                        ? "BOOK A PARTY"
                        : "BOOK YOUR PARTY"}
                    </a>
                  )}
                </>
              )}
              {props.eventslug && !props.pagedata.eventbooking && (
                <a
                  href="#eventform"
                  className="block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                >
                  BOOK EVENTS
                </a>
              )}
              {!props.eventslug && props.pagedata.eventbooking && (
                <>
                  {props.pagedata.eventbooking.eventstatus == true && (
                    <a
                      href={"/" + props.pagedata.locationslug + "/events"}
                      className="w-full block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                    >
                      VIEW ALL EVENTS
                    </a>
                  )}
                  {props.pagedata.eventbooking.eventstatus == false && (
                    <a
                      href={"/" + props.pagedata.locationslug + "/events"}
                      className="w-full block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                    >
                      VIEW ALL EVENTS
                    </a>
                  )}
                </>
              )}

              {/*============location book btn==========*/}
            </div>
            {props.pagedata.notice && (
              <div
                className="home-botice-des mt-4 md:mt-8 text-[#dddddd] max-w-[700px] mx-auto text-center md:text-lg"
                dangerouslySetInnerHTML={{ __html: props.pagedata.notice }}
              ></div>
            )}
            {props.gametotal != "not" && <div className="mb-6"> </div>}

            {/*============location info ==========*/}
            {props.gametotal != "not" && (
              <div className="game-ft drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] max-w-[90%] md:max-w-3xl mx-auto bottom-[-20%] md:bottom-[-16%] left-0 right-0 absolute bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded ">
                <div className="flex flex-wrap w-full justify-center md:grid md:grid-cols-5  md:justify-evenly items-center ">
                  {props.pagedata.totalUniqueGames && (
                    <div className="text-center w-[33%] md:w-auto">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {props.pagedata.totalUniqueGames}
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                        Themed Games
                      </p>
                    </div>
                  )}
                  {props.pagedata.max_players && (
                    <div className="text-center w-[33%] md:w-auto">
                      <div className=" ">
                        <p className="golden-text text-xl md:text-4xl font-os font-bold">
                          {props.pagedata.max_players ==
                          props.pagedata.min_players
                            ? props.pagedata.min_players
                            : props.pagedata.min_players +
                              "-" +
                              props.pagedata.max_players}
                        </p>
                        <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                          {!props.pagedata.groupcat && (
                            <>
                              {props.pagedata.min_players < 2
                                ? "Guest"
                                : "Team Size"}
                            </>
                          )}

                          {props.pagedata.groupcat && (
                            <span className="text-gray-700 text-xs md:text-base lg:text-lg">
                              Guests {props.pagedata.groupcat}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                  {props.pagedata.age && (
                    <div className="text-center w-[33%] md:w-auto">
                      <div className="border-l border-gray-300">
                        <p className="golden-text text-xl md:text-4xl font-os font-bold">
                          {props.pagedata.age}
                        </p>
                        <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                          Age Range
                        </p>
                      </div>
                    </div>
                  )}
                  {!props.pagedata.age && (
                    <div className="text-center w-[33%] md:w-auto">
                      <div className="border-l border-gray-300">
                        <p className="golden-text text-xl md:text-4xl font-os font-bold">
                          6-99
                        </p>
                        <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                          Age Range
                        </p>
                      </div>
                    </div>
                  )}
                  {props.pagedata.private_events && (
                    <div className="text-center w-[33%] md:w-auto">
                      <div className="border-l border-gray-300 ">
                        <p className="golden-text text-xl md:text-4xl font-os font-bold">
                          YES
                        </p>
                        <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                          Private Events
                        </p>
                      </div>
                    </div>
                  )}
                  {props.pagedata.duration && (
                    <div
                      className={
                        props.pagedata.private_events
                          ? "text-center w-[44%] md:w-auto"
                          : "text-center w-[33%] md:w-auto"
                      }
                    >
                      <div
                        className={
                          props.pagedata.private_events
                            ? "pt-2 mt-3 border-t md:border-t-0 md:pt-0 md:mt-0 md:border-l border-gray-300 "
                            : "border-l border-gray-300 "
                        }
                      >
                        <p className="golden-text text-xl md:text-4xl font-os font-bold">
                          {props.pagedata.duration} MIN
                        </p>
                        <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                          Duration
                        </p>
                      </div>
                    </div>
                  )}
                  {props.pagedata.success_rate && (
                    <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
                      <div className="border-l-0 border-gray-300 md:border-l ">
                        <p className="golden-text text-xl md:text-4xl font-os font-bold">
                          {props.pagedata.success_rate}
                        </p>
                        <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                          Success Rate
                        </p>
                      </div>
                    </div>
                  )}
                  {props.pagedata.totalFiveStarReview && (
                    <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
                      <div className="border-l-0 border-gray-300 md:border-l ">
                        <p className="golden-text text-xl md:text-4xl font-os font-bold">
                          {props.pagedata.totalFiveStarReview}
                        </p>
                        <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                          Rave Reviews
                        </p>
                      </div>
                    </div>
                  )}
                  {props.pagedata.price && (
                    <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
                      <div className="border-l border-gray-300 ">
                        <p className="golden-text text-xl md:text-4xl font-os font-bold">
                          ${props.pagedata.price}
                        </p>
                        <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                          Per Guest
                        </p>
                      </div>
                    </div>
                  )}
                  {props.pagedata.totalPlayerEscaped && (
                    <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
                      <div className="border-l border-gray-300 ">
                        <p className="golden-text text-xl md:text-4xl font-os font-bold">
                          {props.pagedata.totalPlayerEscaped}
                        </p>
                        <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                          Guests Served
                        </p>
                      </div>
                    </div>
                  )}
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
                      See open hours, direction and phone
                    </p>
                  </div>
                </div>

                {/*============location hours info ==========*/}
              </div>
            )}

            {/*============location info ==========*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameLocHero;
