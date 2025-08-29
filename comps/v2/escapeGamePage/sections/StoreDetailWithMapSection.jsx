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
export default function StoreDetailWithMapSection({
  sectionData,
  locationInfo,
  businessHours,
  holidayHours,
  locationName,
  locationSlug,
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
      <div className="store-area-section  relative bg-[url('/assets/escape-game-events/old-paper-texture-bg-long.svg')] bg-center bg-cover">
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
          <div className="section-content mt-8 md:mt-10 xl:mt-1">
            {/**===============================================map image================ */}
            <div className="location-area-map relative z-20">
              <img
                className="max-w-[95%] md:max-w-[90%] mx-auto "
                src={sectionData.storeAreaMapImage.url}
                alt={sectionData.storeAreaMapImage.alt}
              ></img>
            </div>
            {/**==============================================================location info================ */}
            <div className="location-info bg-[#231800] px-4 py-12 md:p-16 lg:px-8 lg:pt-16 lg:pb-8 xl:p-20 mt-[-4rem] md:mt-[-5.5rem] lg:mt-[-7rem] rounded-[.7rem]">
              <div className="top-gap h-10 md:h-16"></div>
              <div className="info-row flex flex-col space-y-6 md:space-y-8 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-4 lg:flex-nowrap">
                {/**==============================================================location info col 1================ */}
                <div className="info-col max-w-full lg:w-[48.5%]">
                  <div className="location-image border-[4px] border-[#513E12]  max-w-full">
                    <img
                      className="w-full max-w-full boject-cover object-center"
                      src={sectionData.locationImage.url}
                      alt={sectionData.locationImage.alt}
                    ></img>
                  </div>
                  {/*================== ================store map link*/}
                  <div className="std-item-row store-address-map flex space-x-2 items-start md:space-x-3 xl:space-x-4 my-5 md:my-4 lg:my-5">
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
                  <div className="std-item-row store-address-map flex space-x-2 md:space-x-3 xl:space-x-4 my-3 md:my-4 lg:my-5">
                    <div className="text-[.94rem] xl:text-[1.15rem] leading-[1.1] text-[#A78849] mt-[3px] xl:mt-[5px]">
                      <BiSolidDirectionRight />
                    </div>
                    <div className="text-[#9DA1A8] text-[.8rem] md:text-[.9rem] lg:text-[.78rem] xl:text-[.9rem] ">
                      <span className="font-bold">Direction: </span>
                      <span>{removeTags(locationInfo.direction)}</span>
                    </div>
                  </div>
                </div>
                {/**==============================================================location info col 2================ */}
                <div className="info-col max-w-full  lg:w-[48.5%]">
                  <div className="store-image border-[4px] border-[#513E12]  max-w-full">
                    <img
                      className="w-full max-w-full boject-cover object-center"
                      src={sectionData.storeImage.url}
                      alt={sectionData.storeImage.alt}
                    ></img>
                  </div>
                  <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between md:space-x-4 lg:space-x-2 mt-5 md:mt-6">
                    <div className="loc-hour-col md:w-[48%] lg:w-[47%]">
                      {/*===================================== business hours */}
                      <div
                        className="bus-hours-box text-[#9DA1A8] hover:cursor-pointer pb-4"
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
                        className=" hliday-box text-[#9DA1A8] hover:cursor-pointer py-4 border-y-[.5px] border-[#392702]"
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
                    {/*================== ================stor conact info */}
                    <div className="loc-conact-col  md:w-[48%] lg:w-[50%]">
                      {/*================== =====================phone */}
                      <div className="std-item-row store-address-map flex space-x-2 md:space-x-3  mb-3 md:mb-5">
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
                        <div className="std-item-row store-address-map flex space-x-2 md:space-x-3 my-3 md:my-5">
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
                      <div className="std-item-row store-address-map flex space-x-2 md:space-x-3  my-3 md:my-5 ">
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
