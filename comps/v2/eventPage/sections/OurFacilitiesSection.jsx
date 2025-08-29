import {
  FaMapMarkerAlt,
  FaStoreAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { BiSolidDirectionRight } from "react-icons/bi";

import { GoTriangleDown, GoClockFill } from "react-icons/go";
import { BsChatDots } from "react-icons/bs";
import { useState } from "react";

import LocationHoursModal from "../../homePageComps/LocationHoursModal";
import LocationMap from "../../../locationsPage/LocationMap";

// format address
const storeAddress = (address, state, zip, city) => {
  let locState = state.split(",");
  let st = locState[locState.length - 1].trim().toString().toUpperCase();
  let add = address + ", " + city + ", " + st + " " + zip;
  return add;
};
const storeMapLink = (address, state, zip, city) => {
  let addr = address.toString().split(" ").join("+") + ",";
  let stArr = state.toString().split(",");
  let ct = city + ",";
  let st = stArr[stArr.length - 1].trim().toString().toUpperCase();
  let zp = zip + ",";
  let gslug = addr + "+" + ct + "+" + st + "+" + zp + "+" + "USA";
  //console.log(st);
  let gUrl = "https://www.google.com/maps/dir//" + gslug;

  return gUrl;
};
const removeTags = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/(<([^>]+)>)/gi, "");
};
// format address
export default function OurFacilitiesSection({
  sectionData,
  locationInfo,
  businessHours,
  holidayHours,
  locationName,
  locationSlug,
  mapInfo,
}) {
  const [showHours, setShowHours] = useState(false);
  const [hourTable, setHourTable] = useState(null);
  const showBusinessHour = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setHourTable("business");
    setShowHours(true);
  };
  const showHolidayHour = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setHourTable("holiday");
    setShowHours(true);
  };
  return (
    <>
      {showHours && (
        <LocationHoursModal
          locationName={locationName}
          mall={locationInfo.mall}
          businessHours={businessHours}
          holidayHours={holidayHours}
          showHours={showHours}
          setShowHours={setShowHours}
          hourTable={hourTable}
          setHourTable={setHourTable}
        />
      )}
      <div className="store-area-section  relative bg-[#000000] bg-center bg-cover">
        <div className="section-container zm:max-w-[480px] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-7xl mx-auto py-16 md:py-20 lg:py-28 relative z-30 px-3 rm:px-4">
          <div className="section-title text-center max-w-[840px] mx-auto mt-5 md:mt-6 xl:mt-8">
            <div className="max-w-[320px] zm:max-w-full">
              <h2 className="text-[#8E611F] uppercase font-bold text-center text-[1.7rem] rm:text-[1.85rem] zm:text-[2rem] leading-[1.25] sm:text-4xl lg:text-5xl font-os outline-tile">
                {sectionData.sectionTitle}
              </h2>
            </div>
            <div
              className="text-gray-700 max-w-[760px] mx-auto md:px-8 sm:text-lg xl:text-xl  mt-3 md:mt-3 xl:mt-4  "
              dangerouslySetInnerHTML={{ __html: sectionData.sectionSubTitle }}
            ></div>
          </div>
          <div className="section-content mt-8 md:mt-10 xl:mt-12">
            {/**===============================================map image================ */}

            {/**==============================================================location info================ */}
            <div className="location-info  px-4 rounded-[.7rem]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 xl:gap-8">
                <div className="section-images w-full h-full flex flex-col justify-between space-y-4">
                  <div className="about-img-img w-full lg:min-h-[47.5%] bottom-2 border-red-500">
                    <img
                      className="w-full h-full object-cover"
                      alt="All in adventures escape room"
                      src="/assets/location-home-page/intro/all-in-adventure-plaris-fashion-columbus-oh.jpg"
                    ></img>
                  </div>
                  <div className=" store-img lg:min-h-[47.5%]">
                    <img
                      className=" w-full h-full object-cover "
                      alt="All in adventures escape room"
                      src="/assets/location-home-page/intro/all-in-adventure-columbus-oh.jpg"
                    />
                  </div>
                </div>
                <div className="location-map-info w-full h-full flex flex-col justify-between space-y-5 xl:space-y-10">
                  <div className="map-box min-h-[288px] md:min-h-[350px] text-center text-2xl bg-gray-400">
                    <LocationMap mapInfo={mapInfo} />
                  </div>
                  <div className="store-details bg-[#231800] mt-8 px-4 py-5  md:p-8 lg:p-6 xl:p-8 rounded-[.7rem]">
                    <div className="sec-head">
                      <h3 className="text-[#ca9342] text-[1.6rem] md:text-[1.7rem] xl:text-[1.76rem] font-bold leading-[1.3] uppercase">
                        Store Details
                      </h3>
                    </div>
                    {/*================== =================store map */}
                    <div className="std-item-row store-address-map flex  items-start space-x-2 md:space-x-3 my-3">
                      <div className="text-[.94rem] xl:text-[1.15rem] leading-[1.1] text-[#CA9342] mt-[3px] xl:mt-[5px]">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="text-[#9DA1A8] text-[.8rem] md:text-[.9rem] lg:text-[.78rem] xl:text-[.9rem]">
                        <span className="font-bold text-[#1B58B9]">
                          Store Map:{" "}
                        </span>
                        <a
                          target="_blank"
                          href={storeMapLink(
                            locationInfo.address,
                            locationInfo.state,
                            locationInfo.zip,
                            locationInfo.cityName
                          )}
                          className="hover:text-red-700"
                        >
                          {storeAddress(
                            locationInfo.address,
                            locationInfo.state,
                            locationInfo.zip,
                            locationInfo.cityName
                          )}
                        </a>
                      </div>
                    </div>
                    {/*================== =================store direction */}
                    <div className="std-item-row store-address-map flex  space-x-2 md:space-x-3  my-3 ">
                      <div className="text-[.94rem] xl:text-[1.15rem] leading-[1.1] text-[#A78849] mt-[3px] xl:mt-[5px]">
                        <BiSolidDirectionRight />
                      </div>
                      <div className="text-[#9DA1A8] text-[.8rem] md:text-[.9rem] lg:text-[.78rem] xl:text-[.9rem] ">
                        <span className="font-bold">Direction: </span>
                        <span>{removeTags(locationInfo.direction)}</span>
                      </div>
                    </div>
                    {/*================== =====================phone */}
                    <div className="std-item-row store-address-map flex space-x-2 md:space-x-3  my-3 ">
                      <div className="text-[.9rem] xl:text-[1rem] leading-[1.1] text-[#CA9342] mt-[3px] xl:mt-[5px]">
                        <FaPhoneAlt />
                      </div>
                      <div className="text-[#B3B7BE] text-[.8rem] md:text-[.9rem] lg:text-[.78rem] xl:text-[.9rem]">
                        <a
                          href={"tel:" + locationInfo.phone}
                          className="hover:text-red-700"
                        >
                          {locationInfo.phone}
                        </a>
                      </div>
                    </div>
                    {/*================== =====================text msg */}
                    {locationInfo && locationInfo.text && (
                      <div className="std-item-row store-address-map flex space-x-2 md:space-x-3 my-3">
                        <div className="text-[.9rem] xl:text-[1rem] leading-[1.1] text-[#CA9342] mt-[3px] xl:mt-[5px]">
                          <BsChatDots />
                        </div>
                        <div className="text-[#B3B7BE] text-[.8rem] md:text-[.9rem] lg:text-[.78rem] xl:text-[.9rem]">
                          <a
                            href={"sms:" + locationInfo.text}
                            className="hover:text-red-700"
                          >
                            {locationInfo.text}
                          </a>
                        </div>
                      </div>
                    )}

                    {/*===================================== email */}
                    <div className="std-item-row store-address-map flex space-x-2 md:space-x-3  my-3  ">
                      <div className="text-[.9rem] xl:text-[1rem] leading-[1.1] text-[#CA9342] mt-[3px] xl:mt-[5px]">
                        <FaEnvelope />
                      </div>
                      <div className="text-[#B3B7BE] text-[.8rem] md:text-[.9rem] lg:text-[.78rem] xl:text-[.9rem]">
                        <a
                          href={
                            "mailto:" +
                            locationInfo.storeEmail.toString().toLowerCase()
                          }
                          className="hover:text-red-700"
                        >
                          {locationInfo.storeEmail}
                        </a>
                      </div>
                    </div>
                    {/*=====================================  hours */}
                    <div className="loc-hour-col flex  flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 mt-4">
                      {/*===================================== business hours */}
                      <div
                        className="bus-hours-box text-[#9DA1A8] hover:cursor-pointer "
                        onClick={showBusinessHour}
                      >
                        <div className="std-item-row store-address-map flex items-center  space-x-2 ">
                          <div className="text-[1rem] xl:text-[1.15rem] leading-[1] text-[#CA9342] ">
                            <GoClockFill />
                          </div>
                          <div className="text-[.8rem] md:text-[.9rem] lg:text-[.78rem] xl:text-[.9rem]">
                            <button className="hover:text-red-700">
                              Standard Business Hours
                            </button>
                          </div>
                          <div className="text-[1rem] xl:text-[1.15rem] leading-[1] mt-[3px]">
                            <GoTriangleDown />
                          </div>
                        </div>
                        <p className="text-[.7rem] md:text-[.8rem] ml-7">
                          *Hours may vary sometimes
                        </p>
                      </div>
                      {/*===================================== holiday-ours */}
                      <div
                        className=" hliday-box text-[#9DA1A8] hover:cursor-pointer "
                        onClick={showHolidayHour}
                      >
                        <div className="std-item-row store-address-map flex items-center space-x-2 ">
                          <div className="text-[1rem] xl:text-[1.15rem] leading-[1] text-[#CA9342] ">
                            <GoClockFill />
                          </div>
                          <div className="text-[.8rem] md:text-[.9rem] lg:text-[.78rem] xl:text-[.9rem]">
                            <button className="hover:text-red-700">
                              Holiday Hours{" "}
                            </button>
                          </div>
                          <div className="text-[1rem] xl:text-[1.15rem] leading-[1] mt-[3px]">
                            <GoTriangleDown />
                          </div>
                        </div>
                        <p className="text-[.7rem] md:text-[.8rem] ml-7">
                          *Hours may vary sometimes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
