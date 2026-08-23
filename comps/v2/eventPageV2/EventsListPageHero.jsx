import { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";

//import { locationBookingInfo } from "../../lib/v2/data/locationBookingInfo";
import { FaArrowDown } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import EventPageHeroBgImg from "./elements/EventPageHeroBgImg";

export default function EventsListPageHero(props) {
  //====================================================== section state+effect
  const [showHours, setShowHours] = useState(false);
  const hourref = useRef();
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
  //====================================================== section function
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
  const bookAll = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: "items",
    });
  };
  const bookEventFlow = (locationSlug) => {
    let bookingData = locationBookingInfo[locationSlug];
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "no",
      flow: bookingData.partyPackageFlow,
    });
  };
  const getCityName = (lo) => {
    let loStr = lo.toString();
    let loArr = loStr.split(",");

    return loArr[0].trim();
  };
  //=============================================================== ui
  return (
    <div className="event-list-hero  bg-[#111111] w-full relative">
      {/*=====================================hero bg======================== */}
      <div className="hero-bg-image w-full h-full absolute top-0 left-0 ">
        <EventPageHeroBgImg
          heroBgImageDesktop={props.pageHeroData.pageHeroDesktop}
          heroBgImageMobile={props.pageHeroData.pageHeroMobile}
        />
      </div>
      {/*=====================================hero bg======================== */}
      {/*===================================== section cotent======================== */}
      <div className="section-bg-shadow w-full  bg-gradient-to-t from-black/50 to-black/70  z-10  relative">
        <div className="w-full min-h-[80vh] rm:min-h-[570px] lm:min-h-[600px] zm:min-h-[64vh] md:min-h-[54vh] lg:min-h-[58vh] xl:min-h-[78vh] 2xl:min-h-[77vh] flex flex-col justify-center items-center">
          <div className="w-auto xl:max-w-[75rem] 2xl:max-w-7xl  px-3 rm:px-5 zm:px-7 lg:px-6 xl:px-4 py-16 lg:py-28 3xl:py-32">
            <div className="page-benar-info">
              {props.pageHeroData.totalLocations && (
                <p className="md:mt-4 lg:mt-6 xl:mt-0 font-semibold zm:text-lg md:text-2xl  mb-1 text-white text-center leading-[1.2] uppercase">
                  CHOOSE FROM {props.pageHeroData.totalLocations} U.S. LOCATIONS
                </p>
              )}
              {props.locationInfo && (
                <p className="md:mt-4 lg:mt-6 xl:mt-0 font-semibold zm:text-lg md:text-2xl mb-1 text-white text-center leading-[1.2] uppercase">
                  AT {props.locationInfo.mall} IN{" "}
                  {props.pageHeroData.locationName}
                </p>
              )}

              <h1 className="text-gold aia-shadow font-bold text-center text-2xl rm:text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl  mb-3 xm:mb-4 md:mb-6 lg:mb-6 font-os uppercase  max-w-[1070px] mx-auto">
                {/*================================================props.pageHeroData.pageTitle*/}
                Escape room parties and events
                {/*
              props.locationName ? " In " + props.locationName : ""
                dangerouslySetInnerHTML={{
                __html: props.pageHeroData.pageSubtitle,
              }}
              */}
              </h1>
              <div className="text-gray-100 lsth max-w-[700px] lg:max-w-[740px] 3xl:max-w-[820px] mx-auto text-center lg:text-lg 3xl:text-[1.2rem]">
                <p>
                  Host your event at a venue built for unforgettable group
                  experiences. From families and companies to schools, churches,
                  sports teams, and more, All In Adventures{" "}
                  {props.locationName ? getCityName(props.locationName) : ""}{" "}
                  makes it easy to plan an event your whole group will enjoy.
                </p>
              </div>
            </div>
            {/*=====================================btn pair======================== */}
            <div className="btn-pair-row mt-6  md:mt-10 xl:mt-12 w-full flex flex-col sm:flex-row justify-center  items-center space-y-6 sm:space-y-0 sm:space-x-3 md:spce-x-4 lg:space-x-1 xl:space-x-6">
              <div className="scrol-btn w-full sm:max-w-[300px] xl:max-w-[320px] ">
                <a
                  href={"#book-party-pacakages"}
                  className=" w-full py-3 px-5 rounded-full uppercase text-center flex justify-center items-center md:space-x-3 lg:space-x-1 xl:space-x-2 text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-sm rm:text-base md:text-lg lg:text-sm xl:text-lg"
                >
                  <span>
                    {props.pageHeroData.ctaBtnLabel
                      ? props.pageHeroData.ctaBtnLabel
                      : "BOOK A PARTY PACKAGE"}
                  </span>
                  <FaArrowDown />
                </a>
              </div>
              <div className="scrol-btn  w-full sm:max-w-[250px] xl:max-w-[264px]">
                <a
                  href={"#escape-game-booking"}
                  className=" w-full py-3 px-5 rounded-full uppercase text-center flex justify-center items-center md:space-x-3 lg:space-x-1 xl:space-x-2 text-white font-medium border-2 border-white bg-transparent hover:border-red-700 hover:bg-red-700 text-sm rm:text-base md:text-lg lg:text-sm xl:text-lg"
                >
                  <span>BOOK GAME ONLY</span>
                  <FaArrowDown />
                </a>
              </div>
            </div>
            {/*=============================bottom gap============================== */}
            <div className="h-[2.75rem] zm:h-[3rem] md:h-[3.5rem] lg:h-[4rem] 2xl:h-[4.25rem]"></div>
          </div>
        </div>
      </div>
      {/*===================================== location info======================== */}
      <div className="gst-container  w-[98%] rm:w-[96%] xm:w-[91%] sm:w-[600px] md:w-[700px] lg:w-[740px] 3xl:w-[800px]  absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2   z-[999]">
        <div className="bg-[#FFFBF3] text-center drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] rounded-md px-[2px] rm:px-1 xm::px-2 py-4 rm:py-5 zm:py-5.5 md:px-4 md:py-6 xl:py-7 3xl:py-8 flex flex-nowrap justify-center space-x-2 zm:space-x-0 zm:grid zm:grid-cols-4  items-center ">
          {/*========================================TThemed Games==========*/}
          <div className="text-center border-r border-gray-300 pr-2  zm:pr-0">
            <p className="golden-text text-xl md:text-4xl font-os font-bold">
              {props.pageHeroData.themedGames
                ? props.pageHeroData.themedGames
                : props.pageHeroData.totalUniqueGames}
            </p>
            <p className="text-gray-700 text-[.7rem] rm:text-[.75rem] lm:text-[.85rem]  md:text-base lg:text-lg ">
              Themed Games
            </p>
          </div>
          {/*============ ========================== Guest Capacity==========*/}
          <div className="text-center border-r border-gray-300 pr-2 lm:pr-3 zm:pr-0">
            <p className="golden-text text-xl md:text-4xl font-os font-bold">
              {props.pageHeroData.guestCapacity}
            </p>
            <p className="text-gray-700 text-[.7rem] rm:text-[.75rem] lm:text-[.85rem] md:text-base lg:text-lg">
              Guest Capacity
            </p>
          </div>
          {/*=======================================================age==========*/}
          <div className="text-center border-r border-gray-300 pr-2  zm:pr-0">
            <p className="golden-text text-xl md:text-4xl font-os font-bold">
              {props.pageHeroData.ageRange}
            </p>
            <p className="text-gray-700 text-[.7rem] rm:text-[.75rem] lm:text-[.85rem] md:text-base lg:text-lg">
              Age
            </p>
          </div>
          {/*===================================================Catering==========*/}

          <div className="text-center ">
            <p className="golden-text text-xl md:text-4xl font-os font-bold">
              {props.pageHeroData.guestServed}
            </p>
            <p className="text-gray-700 text-[.7rem] rm:text-[.752rem] lm:text-[.85rem] md:text-base lg:text-lg">
              Guests Served
            </p>
          </div>

          {/*==============================================Guests Served
           <p className="golden-text text-xl md:text-4xl font-os font-bold">
              {props.pageHeroData.catering}
            </p>
            <p className="text-gray-700 text-[.5rem] rm:text-[.56rem] lm:text-[.72rem] md:text-base lg:text-lg">
              
              Catering
            </p>
          
          ==========*/}
        </div>
      </div>
    </div>
  );
}
