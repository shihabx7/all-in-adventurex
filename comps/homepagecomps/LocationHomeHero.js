import Link from "next/link";
import LocationBtn from "../util/LocationBtn";
import LocationHours from "../locationsPage/LocationHours";
import { FiX } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import TitleWithSubTitle from "../util/TitleWithSubTitle";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";

const LocationHomeHero = (props) => {
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
      shortname: bookingData.shortname,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.item },
    });
  };
  const getOtherActivity = (actArr) => {
    console.log(actArr);
    var i;
    var tempArr = [];
    var ret = "";
    for (i = 0; i < actArr.length; i++) {
      if (actArr[i].category == "other") {
        tempArr.push(actArr[i].activity_name);
      }
    }
    console.log(tempArr);
    if (tempArr.length > 0) {
      tempArr[tempArr.length - 1] = "and " + tempArr[tempArr.length - 1];
      if (tempArr.length > 2) {
        ret = ", " + tempArr.join(",");
      } else if (tempArr.length == 2) {
        ret = ", " + tempArr.join(" ");
      } else {
        ret = " " + tempArr.join(" ");
      }
    }

    return ret;
  };
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
                  mall={props.pagedata.locationaddress}
                  city={props.pagedata.locationcity}
                  state={props.pagedata.locationstate}
                />
              </div>
              <LocationHours locdetail={props.locdetail} />
            </div>
          </div>
        </div>
      )}

      <div
        className="bg-[#111111] home-hero location relative "
        style={{
          background: "url('" + props.pagedata.coverimageL + "')",
        }}
      >
        <div className="max-w-[84px] md:max-w-[120px] lg:max-w-[144px] absolute top-[4px] md:top-[36px] lg:top-[60px] left-0 right-[4px] md:right-0 ml-auto md:mx-auto">
          <img
            alt="Kid and familly friendly escape rooms Allinadventures"
            src="/assets/kid-and-familly-friendly-escape-rooms-allinadventures.png"
          ></img>
        </div>
        <div className="home-hero-holder ">
          <div className="homehero-img md:hidden w-full min-h-[280px] bg-[#000000]">
            <img className="w-full" src={props.pagedata.coverimageM}></img>
          </div>
          <div className="max-w-7xl home-hero-container mx-auto px-4 pb-[120px] pt-0 md:pb-24 md:pt-[160px] lg:pb-28 lg:pt-[210px] relative z-10">
            <div className="page-benar-info">
              {!props.pagedata.publish_status && (
                <div className="text-center font-bold text-red-600 text-[32px] md:text-[52px] font-os cm-title py-4">
                  <img
                    className="max-w-[400px] mx-auto"
                    src="/assets/svg/coming-soon.svg"
                  ></img>
                </div>
              )}
              <p className=" md:mt-0 font-semibold text-lg md:text-2xl  mb-2 text-white text-center uppercase ">
                AT {props.pagedata.locationaddress} IN{" "}
                {props.pagedata.locationcity}, {props.pagedata.locationstate}
              </p>
              <h1 className="text-gold font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-8 font-os uppercase max-w-[1000px] mx-auto">
                {(props.pagedata.locationcity == "West Nyack" ||
                  props.pagedata.locationcity == "Poughkeepsie") && (
                  <>
                    ESCAPE ROOMS AND AXE THROWING IN{" "}
                    {props.pagedata.locationcity},{" "}
                    {props.pagedata.locationstate}
                  </>
                )}
                {props.pagedata.locationcity !== "West Nyack" &&
                  props.pagedata.locationcity !== "Poughkeepsie" && (
                    <>
                      {" "}
                      ESCAPE ROOMS AND FUN THINGS TO DO IN{" "}
                      {props.pagedata.locationcity},{" "}
                      {props.pagedata.locationstate}
                    </>
                  )}
              </h1>
              <div
                className="text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg"
                dangerouslySetInnerHTML={{
                  __html: props.pagedata.pagesubtitle,
                }}
              ></div>
            </div>
            <div className="max-w-md mx-auto mt-8 pb-8 ">
              {/*============location search btn==========*/}
              <div className="booking-btn">
                <a
                  href={"/" + props.pagedata.slug + "/activities"}
                  className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg"
                >
                  VIEW ALL GAMES
                </a>
              </div>
              <div className="booking-btn mt-4">
                <a
                  href={"/" + props.pagedata.slug + "/events"}
                  className="block py-3 rounded-full text-center  text-white font-medium border-2 border-red-600  hover:bg-red-700 hover:border-red-700 text-lg"
                >
                  VIEW ALL EVENTS
                </a>
              </div>
              {/*============location search btn==========*/}
            </div>
            {/*============location Info==========*/}
            <div className="drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)]  mx-auto bottom-[-20%] max-w-[90%] md:max-w-3xl md:bottom-[-16%] left-0 right-0 absolute bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded">
              <div className="flex flex-wrap md:grid justify-center items-center md:grid-cols-5 ">
                <div className="text-center w-[33%] md:w-auto">
                  <div>
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      {props.pagedata.totalUniqueGames}
                    </p>
                    <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                      Themed Games
                    </p>
                  </div>
                </div>
                <div className="text-center w-[33%] md:w-auto">
                  <div className="border-l border-gray-300">
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      6-99
                    </p>
                    <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                      Age Range
                    </p>
                  </div>
                </div>
                <div className="text-center w-[33%] md:w-auto">
                  <div className="border-l border-gray-300">
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      YES
                    </p>
                    <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                      Private Events
                    </p>
                  </div>
                </div>
                <div className="text-center w-[44%] md:w-auto border-t pt-2 mt-3 md:pt-0 md:mt-0 md:border-t-0 border-gray-300">
                  <div className=" md:border-l border-gray-300">
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      {props.pagedata.totalFiveStarReview}
                    </p>
                    <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                      Rave Reviews
                    </p>
                  </div>
                </div>
                <div className="text-center w-[44%] md:w-auto border-t md:border-t-0 pt-2 mt-3 md:pt-0 md:mt-0 border-gray-300">
                  <div className="border-l  border-gray-300">
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      {props.pagedata.totalPlayerEscaped}
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
      </div>
    </>
  );
};

export default LocationHomeHero;
