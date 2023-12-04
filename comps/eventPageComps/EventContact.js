import React, { useState, useEffect, useRef } from "react";
import { FiMapPin, FiChevronDown, FiClock, FiX } from "react-icons/fi";
import TitleSeparator from "../util/TitleSeparator";
import Script from "next/script";
import EventFaqList from "./EventFaqList";
import LocationHours from "../locationsPage/LocationHours";
import TitleWithSubTitle from "../util/TitleWithSubTitle";
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
  const getDirection = (address, slug, zip, city) => {
    var addr = address.toString().split(" ").join("+") + ",";
    var st = slug.toString().split("-");
    var ct = city + ",";
    st = [st.length - 1].toString().toUpperCase();
    var zp = zip + ",";

    var gslug = addr + "+" + ct + "+" + st + "+" + zp + "+" + "USA";
    var gUrl = "https://www.google.com/maps/dir//" + gslug;

    return gUrl;
  };
  const getAddress = (address, slug, zip, city) => {
    var scity = slug.split("-");
    var st = scity[scity.length - 1].toString().toUpperCase();

    var add = address + ", " + city + ", " + st + " " + zip;
    return add;
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
                  <TitleWithSubTitle
                    title="All in adventures"
                    mall={props.contactdata.mall}
                    city={props.contactdata.city}
                    state={getState(props.contactdata.slug)}
                  />
                </div>
                <LocationHours locdetail={props.contactdata} />
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
          <div className="section-title  text-center max-w-[840px] mx-auto  mb-8 md:mb-12 lg:mb-16 px-4">
            <TitleSeparator
              title="SUBMIT YOUR INQUIRY"
              color="golden-text"
              weight="font-bold"
            />
            <p className="text-gray-200 md:px-8 md:text-lg mt-8">
              {/*Let us help host your{" "}
              {props.eventname ? props.eventname : "event"} at All In Adventures
              {props.contactdata && (
                <span>
                  {" "}
                  in{" "}
                  {props.contactdata.city +
                    " " +
                    getStAddress(props.contactdata.slug)}
                </span>
              )}
              . We promise you'll love it! Please fill out the inquiry form
              below to reach our dedicated guest experience team. We'll be in
                  contact within 24 hours.*/}
              Need a custom quote, mega event info, or just want to chat about
              your event? This contact form is your magic portal! Groups under
              10? We've got you covered with options 1 & 2!
            </p>
          </div>
          {/**==========Section Title end============ */}
          {/**======================================================content============ */}
          <div className="conatct-section flex flex-col md:flex-row justify-between">
            {/**======================================================content Info+FAQ============ */}
            <div className="contact-info-box pt-16 md:py-0 px-4 order-2 md:order-1 w-full md:w-[44%] lg:w-[44%]">
              <div className="in-sec-title mb-4 md:mb-6 lg:mb-8">
                <h2 className="golden-text font-bold text-3xl  xl:text-4xl mb-2 xl:mb-4">
                  OUR FACILITIES
                </h2>
                <p className="text-gray-200 lg:text-lg">
                  All escape rooms are completely private - for your players
                  only! We provide an entire party with the opportunity to
                  celebrate in a fun and unique way. Come join us to create
                  exciting memories with your group.
                </p>
              </div>
              <div className="event-info-list-box">
                <div className="event-info-list flex items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-y-[1px] border-[#D2C6AA]">
                  <span>
                    <img src="/assets/svg/event-icon-phone.svg"></img>
                  </span>
                  <span>
                    {props.contactdata && (
                      <a
                        className="text-[#F4E6C3] hover:text-red-700"
                        href={"tel:" + props.contactdata.phone}
                      >
                        {props.contactdata.phone}
                      </a>
                    )}
                    {!props.contactdata && (
                      <a
                        className="text-[#F4E6C3] hover:text-red-700"
                        href="tel:+1 844-502-5546"
                      >
                        +1 844-502-5546 ex. 709.
                      </a>
                    )}
                  </span>
                </div>
                <div className="event-info-list flex items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                  <span>
                    <img src="/assets/svg/event-icon-email.svg"></img>
                  </span>
                  <span>
                    {props.contactdata && (
                      <a
                        className="text-[#F4E6C3] hover:text-red-700"
                        href={"mailto:" + props.contactdata.email.toLowerCase()}
                      >
                        {props.contactdata.email}
                      </a>
                    )}
                    {!props.contactdata && (
                      <a
                        className="text-[#F4E6C3] hover:text-red-700"
                        href="email:sales@allinadventures.com"
                      >
                        sales@allinadventures.com
                      </a>
                    )}
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
                        props.contactdata.address,
                        props.contactdata.slug,
                        props.contactdata.zip,
                        props.contactdata.city
                      )}
                      className="text-[#F4E6C3] hover:text-blue-700"
                    >
                      <span className="text-blue-600 font-medium">
                        Direction:{" "}
                      </span>
                      {getAddress(
                        props.contactdata.address,
                        props.contactdata.slug,
                        props.contactdata.zip,
                        props.contactdata.city
                      )}
                    </a>
                  </div>
                )}
                {props.contactdata && (
                  <div className="relative event-info-list flex text-[#F4E6C3]  items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                    <span className="text-[#A78849] text-[24px]">
                      <FiClock />
                    </span>
                    <div
                      className="flex justify-between item-center space-x-3 md:space-x-4 hover:cursor-pointer group"
                      onClick={() => setShwoHour(true)}
                    >
                      <p className="text-[#1B823A]">Open Hours</p>{" "}
                      <p className="flex items-center space-x-2 group-hover:text-blue-700">
                        View Local Time{" "}
                        <span className="text-xl">
                          <FiChevronDown />
                        </span>
                      </p>
                    </div>
                  </div>
                )}
                <div className="event-info-list flex  items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                  <span>
                    <img src="/assets/svg/event-icon-chair.svg"></img>
                  </span>
                  <span>
                    <p className="text-[#F4E6C3]">Wheelchair Accessibility</p>
                  </span>
                </div>
              </div>
              <div className="event-notice mt-4 md:mt-6">
                {props.contactdata && (
                  <div className="flex  lg:text-lg text-[#eeeeee] mt-4 justify-between">
                    <div className="mt-[6px] w-[16px] lg:w-[16px]">
                      <img src="/assets/svg/star-bullet.svg"></img>
                    </div>
                    <div className="w-[92%] font-thin text-[16px]">
                      {props.contactdata.entry_guid}
                    </div>
                  </div>
                )}

                <div className="flex  lg:text-lg text-[#eeeeee] mt-4 justify-between">
                  <div className="mt-[6px] w-[16px] lg:w-[16px]">
                    <img src="/assets/svg/star-bullet.svg"></img>
                  </div>
                  <div className="w-[92%] font-thin text-[16px]">
                    We have gone CASHLESS but accept Credit/Debit, PayPal,
                    Venmo, Zelle, Cash App and in some locations Apple Pay and
                    Samsung Pay.
                  </div>
                </div>
              </div>
              {/**=============event Faq=============== */}
              <div className="evt-faq">
                <h2 className="golden-text font-bold text-3xl  xl:text-4xl mb-2 xl:mb-3 mt-6 lg:mt-8">
                  FAQ
                </h2>
                <EventFaqList faqlist={props.eventFaq} />
              </div>
              {/**=============event Faq=============== */}
            </div>
            {/**======================================================content Info+FAQ end============ */}
            {/**=====================================Yext Form================================== */}
            <div
              id="eventform-form"
              className="order-1 md:order-2 contact-form-box w-full md:w-[54%] lg:w-[54%]"
            >
              <div className="contact-form-bg bg-[#F4E6C3] px-4 py-8 md:p-6 lg:p-8 md:rounded w-full">
                <div
                  className="pipedriveWebForms"
                  data-pd-webforms="https://webforms.pipedrive.com/f/2Z8p4ZqukDQoxgiqFVoNKFZfVoGoClX7qWK065Gmf005eEwiLpSddFegYnUHnvLJV"
                >
                  <Script
                    onLoad={() => {
                      changeStyle();
                    }}
                    src="https://webforms.pipedrive.com/f/loader"
                    strategy="afterInteractive"
                  ></Script>
                </div>
              </div>
            </div>
            {/**=====================================Yext Form end================================== */}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventContact;
