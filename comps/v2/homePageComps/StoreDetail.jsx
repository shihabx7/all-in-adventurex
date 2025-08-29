import {
  FaMapMarkerAlt,
  FaStoreAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { GoTriangleDown, GoClockFill } from "react-icons/go";
import { BsChatDots } from "react-icons/bs";

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
export default function StoreDetail({
  locationInfo,
  setShowHours,
  setHourTable,
}) {
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
    <div className="sotre-details-box mt-2 zm:mt-4 md:mt-2 lg:mt-1">
      <h3 className="text-[#ca9342] text-[22px] md:text-[24px] xl:text-[28px] font-bold leading-[1.3] uppercase">
        Store Details
      </h3>
      {/*================== ================stor map */}
      <div className="std-item-row store-address-map flex space-x-2 items-start md:space-x-3 xl:space-x-4 my-2 xl:my-3">
        <div className="text-[.96rem] xl:text-[1.15rem] leading-[1.1] text-[#A78849] mt-[3px] xl:mt-[5px]">
          <FaMapMarkerAlt />
        </div>
        <div className="text-[#374151] xl:text-lg">
          <span className="font-bold">Store Map: </span>
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
      {/*================== =================direction */}
      <div className="std-item-row store-address-map flex space-x-2 md:space-x-3 xl:space-x-4 my-2 md:my-3">
        <div className="text-[16px] xl:text-[18px] leading-[1.1] text-[#A78849] mt-[3px] xl:mt-[5px]">
          <FaStoreAlt />
        </div>
        <div className="text-[#374151] xl:text-lg">
          <span className="font-bold">Direction: </span>
          <span>{removeTags(locationInfo.direction)}</span>
        </div>
      </div>
      {/*================== =====================phone */}
      <div className="std-item-row store-address-map flex space-x-2 md:space-x-3 xl:space-x-4 my-2 md:my-3">
        <div className="text-[16px] xl:text-[18px] leading-[1.1] text-[#A78849] mt-[3px] xl:mt-[5px]">
          <FaPhoneAlt />
        </div>
        <div className="text-[#374151] xl:text-lg">
          <a href={"tel:" + locationInfo.phone} className="hover:text-red-700">
            {locationInfo.phone}
          </a>
        </div>
      </div>
      {/*================== =====================text msg */}
      {locationInfo && locationInfo.text && (
        <div className="std-item-row store-address-map flex space-x-2 md:space-x-3 xl:space-x-4 my-2 md:my-3">
          <div className="text-[16px] xl:text-[18px] leading-[1.1] text-[#A78849] mt-[3px] xl:mt-[5px]">
            <BsChatDots />
          </div>
          <div className="text-[#374151] xl:text-lg">
            <a href={"sms:" + locationInfo.text} className="hover:text-red-700">
              {locationInfo.text}
            </a>
          </div>
        </div>
      )}

      {/*===================================== email */}
      <div className="std-item-row store-address-map flex space-x-2 md:space-x-3 xl:space-x-4 my-2 md:my-3 ">
        <div className="text-[16px] xl:text-[18px] leading-[1.1] text-[#A78849] mt-[3px] xl:mt-[5px]">
          <FaEnvelope />
        </div>
        <div className="text-[#374151] xl:text-lg">
          <a
            href={"mailto:" + locationInfo.storeEmail.toString().toLowerCase()}
            className="hover:text-red-700"
          >
            {locationInfo.storeEmail}
          </a>
        </div>
      </div>
      {/*===================================== business hours holiday-ours */}
      <div className="std-hour-row flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 lg:space-x-8 xl:space-x-12  mt-3 md:mt-4">
        {/*===================================== business hours */}
        <div className="holiday-box text-[#374151] " onClick={showBusinessHour}>
          <div className="std-item-row store-address-map flex items-center space-x-2 ">
            <div className="text-[1.1rem] xl:text-[1.25rem] leading-[1] text-[#A78849] ">
              <GoClockFill />
            </div>
            <div className="text-[#374151] xl:text-[1.15rem]">
              <button className="hover:text-red-700">
                Standard Business Hours
              </button>
            </div>
            <div className="text-[1.1rem] xl:text-[1.2rem] leading-[1] text-[#374151] mt-[3px]">
              <GoTriangleDown />
            </div>
          </div>
          <p className="text-[.87rem] md:text-[.9rem] ml-7">
            *Hours may vary sometimes
          </p>
        </div>
        {/*===================================== holiday-ours */}
        <div
          className="bus-hours-box text-[#374151] "
          onClick={showHolidayHour}
        >
          <div className="std-item-row store-address-map flex items-center space-x-2 ">
            <div className="text-[1.1rem] xl:text-[1.25rem] leading-[1] text-[#A78849] ">
              <GoClockFill />
            </div>
            <div className="text-[#374151] xl:text-[1.15rem]">
              <button className="hover:text-red-700">Holiday Hours </button>
            </div>
            <div className="text-[1.1rem] xl:text-[1.2rem] leading-[1] text-[#374151] mt-[3px]">
              <GoTriangleDown />
            </div>
          </div>
          <p className="text-[.87rem] md:text-[.9rem] ml-7">
            *Hours may vary sometimes
          </p>
        </div>
      </div>
    </div>
  );
}
