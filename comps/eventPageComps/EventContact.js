import React, { useState, useEffect, useRef } from "react";
import { FiMapPin, FiChevronDown, FiClock, FiX } from "react-icons/fi";

import Script from "next/script";
import EventFaqList from "./EventFaqList";

import LocationHeroHours from "../locationsPage/LocationHeroHours";
import TitleWithSubtitleNew from "../util/TitleWithSubtitleNew";

const EventContact = (props) => {
  const [showHour, setShwoHour] = useState(false);
  const hourref = useRef();

  useEffect(() => {
    const checkIfClickedOutsidehrs = (e) => {
      if (showHour && hourref.current && !hourref.current.contains(e.target)) {
        setShwoHour(false);
        const body = document.getElementsByTagName("body")[0];
        body.classList.remove("overflow-hidden");
      }
    };

    document.addEventListener("mouseup", checkIfClickedOutsidehrs);

    return () => {
      document.removeEventListener("mouseup", checkIfClickedOutsidehrs);
    };
  }, [showHour]);
  const getStAddress = (slug) => {
    var ctArr = slug.split("-");
    var st = ctArr[ctArr.length - 1].toUpperCase();

    return st;
  };
  const getAddress = (address, state, zip, city) => {
    var locState = state.split(",");
    var st = locState[locState.length - 1].trim().toString().toUpperCase();

    var add = address + ", " + city + ", " + st + " " + zip;
    return add;
  };
  const removeTags = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/(<([^>]+)>)/gi, "");
  };
  const getDirection = (address, state, zip, city) => {
    var addr = address.toString().split(" ").join("+") + ",";
    var stArr = state.toString().split(",");
    var ct = city + ",";
    var st = stArr[stArr.length - 1].trim().toString().toUpperCase();

    var zp = zip + ",";

    var gslug = addr + "+" + ct + "+" + st + "+" + zp + "+" + "USA";

    //console.log(st);
    var gUrl = "https://www.google.com/maps/dir//" + gslug;

    return gUrl;
  };

  const changeStyle = () => {
    var formContainer = document.querySelector("iframe").contentWindow;
    //var formContainer=document.querySelector(".pipedriveWebForms")
    var elmnt = document.querySelector(".pipedriveWebForms");
    const style = document.createElement("style");

    style.textContent = `.gDhlQr{max-width: 30% !important;background:red;}`;
    //var h= formContainer.document.getElementsByClassName(".gDhlQr")[0]
    elmnt.appendChild(style);
    //  console.log(h)
  };
  const getState = (locslug) => {
    var stArr = locslug.split("-");
    return stArr[stArr.length - 1].toUpperCase();
  };
  const closeHourDetails = () => {
    setShwoHour(false);
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
  };
  return (
    <>
      {showHour && (
        <>
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
                      props.locationName
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
        </>
      )}
      <div
        id="eventform"
        className="event-contact bg-black py-16 md:py-20 lg:py-28 relative overflow-hidden"
      >
        <div className="gift-rt absolute">
          <img src="/assets/Compas-brown.png"></img>
        </div>
        <div className="gift-lt absolute top-0 left-0">
          <img src="/assets/gift-balon-bg.png"></img>
        </div>
        <div className="max-w-7xl mx-auto md:px-4">
          {/**==========Section Title============ */}
          {
            <div className="section-title  text-center max-w-[840px] mx-auto  mb-6 md:mb-8 lg:mb-12 lg:mb-16 px-4">
              <h2 className="dark-gold py-2 text-2xl uppercase md:text-[40px] lg:text-[44px] font-os font-bold">
                OUR FACILITIES
              </h2>
              <p className="text-gray-200 md:px-8 md:text-lg 2xl:text-xl mt-1 md:mt-5 xl:mt-5">
                All escape rooms are completely private - for your players only!
                We provide an entire party with the opportunity to celebrate in
                a fun and unique way. Come join us to create exciting memories
                with your group.
              </p>
            </div>
          }
          {/**==========Section Title end============ */}
          {/**======================================================content============ */}
          <div className="conatct-section md:max-w-[740px] mx-auto lg:max-w-none flex flex-col lg:flex-row justify-between">
            {/**======================================================content Info+FAQ============ */}
            <div className="contact-info-box  md:py-0 px-4 md:px-0  w-full lg:w-[42%]">
              <div className="event-info-list-box mt-2">
                {/**======================================================Phone============ */}
                <div className="event-info-list flex items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-6 xl:px-4 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                  <span>
                    <img src="/assets/svg/event-icon-phone.svg"></img>
                  </span>
                  <span>
                    <a
                      className="text-[#F4E6C3] hover:text-red-700"
                      href={"tel:" + props.locationInfo.phone}
                    >
                      {props.locationInfo.phone}
                    </a>
                  </span>
                </div>
                {/**======================================================text============ */}
                {props.locationInfo.text != null && (
                  <div className="event-info-list flex items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-6 xl:px-4 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                    <span>
                      <img src="/assets/svg/util/allinadventures-text-message-icon.svg"></img>
                    </span>
                    <span>
                      <a
                        className="text-[#F4E6C3] hover:text-red-700"
                        href={"sms:" + props.locationInfo.text}
                      >
                        {props.locationInfo.text}
                      </a>
                    </span>
                  </div>
                )}
                {/**======================================================email============ */}
                <div className="event-info-list flex items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-4 xl:px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                  <span>
                    <img src="/assets/svg/event-icon-email.svg"></img>
                  </span>
                  <span>
                    <a
                      className="text-[#F4E6C3] hover:text-red-700"
                      href={
                        "mailto:" + props.locationInfo.storeEmail.toLowerCase()
                      }
                    >
                      {props.locationInfo.storeEmail}
                    </a>
                  </span>
                </div>
                {props.contactdata && (
                  <div className="event-info-list flex text-[#F4E6C3]  items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                    <span className="text-[#A78849] text-[24px]">
                      <FiMapPin />
                    </span>{" "}
                    <a
                      target="_blank"
                      href={getDirection(
                        props.locationInfo.address,
                        props.locationInfo.state,
                        props.locationInfo.zip,
                        props.locationInfo.cityName
                      )}
                      className="text-[#F4E6C3] hover:text-blue-700"
                    >
                      <span className="text-blue-600 font-medium">
                        Direction:{" "}
                      </span>
                      {getAddress(
                        props.locationInfo.address,
                        props.locationInfo.state,
                        props.locationInfo.zip,
                        props.locationInfo.cityName
                      )}
                    </a>
                  </div>
                )}
                {/**======================================================hours============ */}
                <div className="relative event-info-list flex text-[#F4E6C3]  items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-4 xl:px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                  <span className="text-[#A78849] text-[24px]">
                    <FiClock />
                  </span>
                  <div
                    className="flex justify-between item-center space-x-3 md:space-x-4 hover:cursor-pointer group"
                    onClick={() => setShwoHour(true)}
                  >
                    <p className="text-[#1B823A]">Open Hours</p>
                    <p className="flex items-center space-x-2 group-hover:text-blue-700">
                      View Local Time
                      <span className="text-xl">
                        <FiChevronDown />
                      </span>
                    </p>
                  </div>
                </div>
                {/**======================================================wheel chair============ */}
                <div className="event-info-list flex  items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-4 xl:px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                  <span>
                    <img src="/assets/svg/event-icon-chair.svg"></img>
                  </span>
                  <span>
                    <p className="text-[#F4E6C3]">
                      {" "}
                      {props.locationInfo.wheelChairAccessibility
                        ? "Wheelchair Accessible"
                        : ""}
                    </p>
                  </span>
                </div>
              </div>
              {/**======================================================direction an payment note============ */}
              <div className="event-notice mt-4 md:mt-6">
                <div className="flex  lg:text-lg text-[#eeeeee] mt-4 justify-between">
                  <div className="mt-[6px] w-[16px] lg:w-[16px]">
                    <img src="/assets/svg/star-bullet.svg"></img>
                  </div>
                  <div className="w-[92%] font-thin text-[16px]">
                    {removeTags(props.locationInfo.direction)}
                  </div>
                </div>

                <div className="flex  lg:text-lg text-[#eeeeee] mt-4 justify-between">
                  <div className="mt-[6px] w-[16px] lg:w-[16px]">
                    <img src="/assets/svg/star-bullet.svg"></img>
                  </div>
                  <div className="w-[92%] font-thin text-[16px]">
                    {removeTags(props.locationInfo.acceptedPayments)}
                  </div>
                </div>
              </div>
            </div>
            {/**================================================================event Faq=============== */}
            <div className="evt-faq  max-w-full mt-6 md:mt-10 lg:mt-0 px-4 md:px-0  lg:w-[54%]">
              <h2 className="golden-text font-bold text-[24px] md:text-[32px]  lg:text-[36px] leading-[1] mb-1 md:mb-2 xl:mb-3">
                FREQUENTLY ASKED Q.
              </h2>
              <EventFaqList faqlist={props.eventFaq} />
            </div>
            {/**=============event Faq=============== */}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventContact;
