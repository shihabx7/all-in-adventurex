import { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import LocationHoursTable from "./LocationHoursTable";

export default function LocationHomeHeroInfoOld({
  heroInfo,
  locationInfo,
  businessHours,
  holidayHours,
  locationName,
  locationSlug,
}) {
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
  //====================================================================================================================return ui
  return (
    <>
      {/*============================================================================================info modal=====*/}
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
              <div className="sep-title text-center">
                <div className="sep-container inline-block mx-auto">
                  <h2 className="dark-gold font-medium text-2xl uppercase md:text-[36px] lg:text-[40px] font-os ">
                    All in Adventures
                  </h2>
                  <p className="text-sm lg:text-lg font-medium">
                    {`At ${locationInfo.mall}  in ${locationName}`}
                  </p>
                </div>
              </div>
              <LocationHoursTable
                locationInfo={locationInfo}
                businessHours={businessHours}
                holidayHours={holidayHours}
              />
            </div>
          </div>
        </div>
      )}
      {/*============================================================================================info bar=======*/}
      <div
        className="loc-hero-Info-old bg-white drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] 
         max-w-[98%] rm:max-w-[94%]   xm:max-w-[92%]  md:max-w-3xl   px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded
        zm:absolute left-0 right-0 bottom-[-144px] zm:bottom-[-160px] md:bottom-[-120px] xl:bottom-[-116px] mx-auto
         z-30"
      >
        {/**====================================================old version info bar======== */}
        <div className="flex flex-wrap md:grid justify-center items-center md:grid-cols-5 ">
          <div className="text-center w-[33%] md:w-auto">
            <div className="boarf">
              <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
                {heroInfo.escapeRooms}
              </h3>
              <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                Themed Games
              </p>
            </div>
          </div>
          <div className="text-center w-[33%] md:w-auto">
            <div className="border-l border-gray-300">
              <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
                {heroInfo.age ? heroInfo.age : "6+"}
              </h3>
              <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                Age
              </p>
            </div>
          </div>
          <div className="text-center w-[33%] md:w-auto">
            <div className="border-l border-gray-300">
              <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
                YES
              </h3>
              <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                Private Events
              </p>
            </div>
          </div>
          <div className="text-center w-[44%] md:w-auto border-t pt-2 mt-3 md:pt-0 md:mt-0 md:border-t-0  border-gray-300">
            <div className="md:border-l border-gray-300">
              <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
                {heroInfo.review}
              </h3>
              <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                Rave Reviews
              </p>
            </div>
          </div>
          <div className="text-center w-[44%] md:w-auto border-t md:border-t-0 pt-2 mt-3 md:pt-0 md:mt-0 border-gray-300">
            <div className="border-l  border-gray-300">
              <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
                {heroInfo.guestServed}
              </h3>
              <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                Guests Served
              </p>
            </div>
          </div>
        </div>
        {/**===================================================modal trigger btn======== */}
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
    </>
  );
}
