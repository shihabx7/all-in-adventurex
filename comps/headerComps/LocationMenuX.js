import TitleSeparator from "../util/TitleSeparator";
import { FiX } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

const LocationMenuX = (props) => {
  const closelocmenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    document.getElementById("locmenu").classList.add("hidden");
  };

  return (
    <div className="loc-menu-x locnx bg-black menu-pattern fixed w-full h-full overflow-x-hidden overflow-y-auto">
      <div
        onClick={closelocmenu}
        id="locclose"
        className="location-close-box flex justify-end pt-1 px-2 md:px-4 text-gray-400 text-xl md:text-2xl lg:text-3xl"
      >
        <span className="inline-block p-1 border-2 border-red-600 text-red-600 rounded-full cursor-pointer hover:border-light-gold hover:text-gold">
          <FiX />
        </span>
      </div>
      <div className="loc-menu-content px-4">
        <h2 className="text-[#E0BF62] text-center text-[1.5rem] uppercase md:text-[3rem] lg:text-[4rem] leading-[1.2] font-os font-bold">
          Choose Your Location
        </h2>
        <p className="text-[#7B7B7B] py-2 text-center text-[1.05rem]  md:text-[1.3rem] lg:text-[1.5rem] leading-[1.2] ">
          View games, hours, and details for your selected location
        </p>
        <div className="loc-menu-grid max-w-[64rem] mx-auto mt-4 md:mt-8 lg:mt-10 pb-8">
          {/*==================location xcolumn======================*/}
          {props.locationlist.map((loc) => {
            return (
              <div key={loc.id} className="loc-menu-box ">
                {/*==================location NEW YORK======================*/}
                <div className="loc-menu-head ">
                  <h3 className="text-[#bbbbbb] text-[1.06rem] md:text-[1.15rem] xl:md:text-[1.3rem] font-bold">
                    <span className="inline-block">{loc.state_name}</span>
                  </h3>
                </div>
                <div className="loc-item-box py-1 border-[#191919]">
                  {loc.cities.map((item) => {
                    return (
                      <div
                        key={loc.id + item.id}
                        className=" loc-item py-2 border-b border-[#191919]"
                      >
                        <a
                          href={"/locations/" + item.slug}
                          className="loc-link"
                        >
                          <span className="loc-name  lg:text-lg">
                            {item.city}, {loc.state}
                          </span>
                          <br></br>
                          <span className="loc-mall text-sm">{item.mall}</span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/*==================location xcolumn======================*/}
        </div>
      </div>
    </div>
  );
};

export default LocationMenuX;
