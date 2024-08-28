import TitleSeparator from "../util/TitleSeparator";

import { FiChevronDown, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LocationMap from "../locationsPage/LocationMap";

const formateDate = (dt) => {
  let dtArr = dt.split("-");
  return dtArr[1] + "-" + dtArr[2] + "-" + dtArr[0];
};
const StoreContactInfo = (props) => {
  const getDirection = (address, slug, city, zip) => {
    var addr = address.toString().split(" ").join("+");
    var stl = slug.split("-");
    stl = stl[stl.length - 1].toString();

    const gUrl =
      "https://www.google.com/maps/dir//" +
      addr +
      ",+" +
      city +
      ",+" +
      stl +
      "+" +
      zip +
      "+" +
      "USA";

    return gUrl;
  };
  const getAddress = (address, slug, city, zip) => {
    var st = slug.split("-");
    st = st[st.length - 1].toString();
    st = st.toUpperCase();

    return address + ", " + city + ", " + st + " " + zip + " United States";
  };

  return (
    <div className="store-info">
      <h3 className="golden-text font-os font-bold mt-8 md:mt-0 text-2xl lg:text-3xl mb-2 lg:mb-4 uppercase">
        OUR FACILITIES
      </h3>
      <p className="text-gray-700 lg:text-lg">
        All escape rooms are completely private - for your players only! We
        provide an entire party with the opportunity to celebrate in a fun and
        unique way. Come join us to create exciting memories with your group.
      </p>
      <div className="c-contact-info-list mt-4 lg:mt-2 ">
        <div className="c-contact-item px-2  lg:px-4 py-2 lg:py-3 border-b border-[#D2C6AA] flex items-center space-x-2 lg:space-x-3">
          <img
            className="w-[18px] md:w-[20px]"
            src="/assets/svg/util/event-icon-phone.svg"
          ></img>
          <a
            href={"tel:" + props.locationInfo.phone}
            className="lg:text-lg text-[#232323] block hover:text-red-700 max-w-[300px] flex-1"
          >
            {props.locationInfo.phone}
          </a>
        </div>
        <div className="c-contact-item px-2  lg:px-4 py-2 lg:py-3  flex items-center space-x-4 lg:space-x-3">
          <img
            className="w-[18px] md:w-[20px]"
            src="/assets/svg/event-icon-email.svg"
          ></img>
          <a
            href={"mailto:" + props.locationInfo.storeEmail.toLowerCase()}
            className="lg:text-lg text-[#232323] block hover:text-red-700 flex-1"
          >
            {props.locationInfo.storeEmail}
          </a>
        </div>
        <div className="c-contact-item px-2  lg:px-4 py-2 lg:py-3 border-t border-b border-[#D2C6AA] flex items-start space-x-2 lg:space-x-3">
          <img
            className="w-[18px] md:w-[20px]"
            src="/assets/svg/event-icon-pin.svg"
          ></img>
          <a
            target="_blank"
            href={getDirection(
              props.locationInfo.address,
              props.locationSlug,
              props.locationInfo.cityName,
              props.locationInfo.zip
            )}
            className="lg:text-lg text-[#232323] block hover:text-blue-800 flex-1"
          >
            <span className="text-blue-600 font-medium">Store Map: </span>
            {getAddress(
              props.locationInfo.address,
              props.locationSlug,
              props.locationInfo.cityName,
              props.locationInfo.zip
            )}
          </a>
        </div>

        <div className="c-contact-item px-2  lg:px-4 py-2 lg:py-3 border-b border-[#D2C6AA] flex items-center space-x-2 lg:space-x-3">
          <img
            className="w-[18px] md:w-[20px]"
            src="/assets/svg/event-icon-chair.svg"
          ></img>
          <p className="lg:text-lg text-[#232323] flex-1">
            {props.wheelChairAccessibility ? "Wheelchair Accessibility" : ""}
          </p>
        </div>
        {/*========== std business hours=========== */}
        <div className="loc-tb-hrs">
          <div className="pt-2 pb-2 px-2 md:px-2 md:py-3 lg:px-4 tbl-h border-b border-[#D2C6AA]">
            <h3 className="text-[#232323] font-medium lg:text-lg">
              Standard Business Hours
            </h3>
            <p className="font-thin text-sm lg:text-base">
              Hours may vary sometimes
            </p>
          </div>
          <div className="tbl-cont px-1 md:px-1 lg:px-2 py-2 ">
            <table className="bhour-row table-auto border-collapse  text-[#464646] w-full">
              <tbody>
                <tr>
                  <td className=" capitalize px-2 py-1 font-medium ">Day</td>
                  <td className=" px-2 py-1 font-medium ">Open</td>
                  <td className=" px-2 py-1 font-medium ">Close</td>
                </tr>
                {props.businessHours.map((hours, index) => {
                  return (
                    <tr key={index}>
                      <td className="capitalize px-2 py-1 text-sm lg:text-base">
                        {hours.day}
                      </td>
                      <td className="px-2 py-1 text-sm lg:text-base">
                        {!hours.isClosed ? hours.openHour : "Closed"}
                      </td>
                      <td className="px-2 py-1 text-sm lg:text-base ">
                        {!hours.isClosed ? hours.closeHour : "-"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/*========== std business hours end=========== */}
        {/*========== holiday business hours=========== */}
        <div className="loc-tb-hrs md:min-w-[54%] md:border-y border-[#D2C6AA]">
          <div className="pt-2 pb-2 px-1 md:px-2 md:py-3 lg:px-4 tbl-h border-t md:border-t-0 border-b border-[#D2C6AA]">
            <h3 className="text-[#232323] font-medium lg:text-lg">
              Holiday Hours
            </h3>
            <p className="font-thin text-sm lg:text-base">
              Hours may vary sometimes
            </p>
          </div>
          <div className="tbl-cont px-1 md:px-1 lg:px-2 py-2 ">
            <table className="bhour-row table-auto border-collapse  text-[#464646] w-full">
              <tbody>
                <tr>
                  <td className=" capitalize px-2 py-1 font-medium">Holiday</td>
                  <td className=" capitalize px-2 py-1 font-medium">Date</td>
                  <td className=" px-2 py-1 font-medium">Open</td>
                  <td className=" px-2 py-1 font-medium">Close</td>
                </tr>
                {props.holidayHours.map((holiday, index) => {
                  return (
                    <tr key={index}>
                      <td className="  capitalize px-2 py-1 text-xs md:text-sm lg:text-base">
                        {holiday.holidayName}
                      </td>
                      <td className="  capitalize px-2 py-1 text-xs md:text-sm lg:text-base">
                        {formateDate(holiday.date)}
                      </td>
                      <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                        {holiday.stratTime}
                      </td>
                      <td className="px-2 py-1 text-xs md:text-sm lg:text-base ">
                        {holiday.closeTime}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/*========== holiday business hours end=========== */}
      </div>
    </div>
  );
};

export default StoreContactInfo;
