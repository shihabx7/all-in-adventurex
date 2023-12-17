import TitleSeparator from "../util/TitleSeparator";

import { FiChevronDown, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LocationMap from "../locationsPage/LocationMap";

const StoreContact = (props) => {
  const [showHour, setShowHours] = useState(false);
  const [isPgLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  });

  const TitleAddress = (slug) => {
    var stt = slug.split("-");
    var stts = stt[stt.length - 1].toString();
    var ctt = stt.slice(0, -1).join(" ");

    return ctt + " " + stts;
  };

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
  const stat = (slug) => {
    var ret = slug.split("-");
    var retst = ret[ret.length - 1].toUpperCase();
    return retst;
  };
  // form submission area==============
  const [err, setErr] = useState(false);
  const [emptyErr, setEmptyErr] = useState(true);
  const [formErr, setFormErr] = useState({
    fNameErr: false,
    lNameErr: false,
    emailErr: false,
    phoneErr: false,
    comErr: false,
  });
  const [fieldVlue, setFieldValue] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    comSubject: "General enquiry",
    msg: "",
    toEmail: props.contactdata.email.toLowerCase(),
    toMgrEmail: props.contactdata.mgremail.toLowerCase(),
    fromCity: props.contactdata.city,
    fromState: stat(props.contactdata.slug),
  });
  const router = useRouter();

  // ========================================================first name validation=================
  const checkFName = (e) => {
    const fname = e.target.value.trim();

    const namePatt = /^[a-zA-Z ]*$/;
    if (fname.length > 2 && fname.length < 21) {
      if (!namePatt.test(fname)) {
        setErr(true);
        setFormErr({ ...formErr, fNameErr: true });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr({ ...formErr, fNameErr: false });
        setFieldValue({ ...fieldVlue, fName: fname });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr({ ...formErr, fNameErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // ========================================================last name validation=================
  const checkLName = (e) => {
    const lname = e.target.value.trim();

    const namePatt = /^[a-zA-Z ]*$/;
    if (lname.length > 2 && lname.length < 21) {
      if (!namePatt.test(lname)) {
        setErr(true);
        setFormErr({ ...formErr, lNameErr: true });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr({ ...formErr, lNameErr: false });
        setFieldValue({ ...fieldVlue, lName: lname });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr({ ...formErr, lNameErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // ========================================================email validation=================

  const checkEmail = (e) => {
    const email = e.target.value.trim();

    const emailPatt =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length > 2) {
      if (!emailPatt.test(email)) {
        setErr(true);
        setFormErr({ ...formErr, emailErr: true });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr({ ...formErr, emailErr: false });
        setFieldValue({ ...fieldVlue, email: email });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr({ ...formErr, emailErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // ========================================================phone validation=================

  const checkPhone = (e) => {
    const phone = e.target.value.trim();
    const numPatt = /^[ 0-9-+/./(/)]*$/;

    if (phone.length > 6 && phone.length < 18) {
      if (!numPatt.test(phone)) {
        setErr(true);
        setFormErr({ ...formErr, phoneErr: true });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr({ ...formErr, phoneErr: false });
        setFieldValue({ ...fieldVlue, phone: phone });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr({ ...formErr, phoneErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // ========================================================communication subject validation=================

  const checkComSub = (e) => {
    const comSub = e.target.value;

    if (comSub != "0") {
      setErr(false);
      setFormErr({ ...formErr, comErr: false });
      setFieldValue({ ...fieldVlue, comSubject: comSub });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setErr(true);
      setFormErr({ ...formErr, comErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // geet msg text
  const escape = (htmlStr) => {
    return htmlStr
      .replace(/&/g, "and")
      .replace(/</g, " ")
      .replace(/>/g, " ")
      .replace(/(?:\r\n|\r|\n)/g, "<br>");
  };
  const getMsg = (e) => {
    const msg = e.target.value.trim();
    if (msg.length > 4) {
      setFieldValue({ ...fieldVlue, msg: escape(msg) });
    }
  };

  const [isSend, setIsSend] = useState(false);
  const submitForm = async (event) => {
    event.preventDefault();
    if (!err) {
      if (
        fieldVlue.fName != "" &&
        fieldVlue.lName != "" &&
        fieldVlue.email != "" &&
        fieldVlue.phone != "" &&
        fieldVlue.comSubject != "" &&
        fieldVlue.comSubject != "0"
      ) {
        console.log("Sending..." + fieldVlue);

        setIsSend(true);
        const response = await fetch("/api/Forms/storeContact", {
          method: "POST",
          headers: {
            Accept: "application/json,text/plain,*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fieldVlue),
        });
        const result = await response.json();

        //console.log(result.data)
        //console.log(result.success)
        if (result.success) {
          setIsSend(false);
          window.location.replace("/thank-you-store");
          //window.location.href = "/thank-you-store";
        } else {
          setIsSend(false);
          alert("Network Error");
        }
      }
    } else {
      if (fieldVlue.fName == "") {
        const fnameEl = document.getElementById("fname");
        fnameEl.classList.remove("focus-green");
        fnameEl.classList.add("focus-red");
        setFormErr({ ...formErr, fNameErr: ture });
      }
      if (fieldVlue.comSubject == "" || fieldVlue.comSubject == "0") {
        const consubel = document.getElementById("comsub");
        consubel.classList.remove("focus-green");
        consubel.classList.add("focus-red");
        setFormErr({ ...formErr, comErr: ture });
      }
    }
  };

  // form submission area==============

  return (
    <div
      className="c-contact py-16 md:py-20 lg:py-28  bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/game-dt-bg.jpg')" }}
    >
      <div className="section-container max-w-7xl mx-auto relative z-30">
        <div className="section-title px-4">
          <TitleSeparator
            title={
              "INQUIRE TO " + TitleAddress(props.contactdata.slug) + " STORE"
            }
            color="dark-gold"
            weight="font-bold"
          />
          <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-12 lg:mb-16">
            <p className="text-gray-700 md:px-8">
              Fill out the form below and we will be in touch shortly.
            </p>
          </div>
        </div>
        <div className="c-contact-box flex flex-col md:flex-row md:space-x-1 lg:space-x-12 justify-between items-center">
          {/*=========================================================contact details============================ */}
          <div className="c-form-info md:w-[43%] lg:w-[44%] order-2 md:order-1 px-4 lg:px-0">
            <h3 className="golden-text font-os font-bold mt-8 md:mt-0 text-2xl lg:text-3xl mb-2 lg:mb-4 uppercase">
              OUR FACILITIES
            </h3>
            <p className="text-gray-700 lg:text-lg">
              All escape rooms are completely private - for your players only!
              We provide an entire party with the opportunity to celebrate in a
              fun and unique way. Come join us to create exciting memories with
              your group.
            </p>
            <div className="c-contact-info-list mt-4 lg:mt-2 ">
              <div className="c-contact-item px-2  lg:px-4 py-2 lg:py-3 border-b border-[#D2C6AA] flex items-center space-x-3 lg:space-x-4">
                <img src="/assets/svg/event-icon-phone.svg"></img>
                <a
                  href={"tel:" + props.contactdata.phone}
                  className="lg:text-lg text-[#232323] block hover:text-red-700 max-w-[300px]"
                >
                  {props.contactdata.phone}
                </a>
              </div>
              <div className="c-contact-item px-2  lg:px-4 py-2 lg:py-3  flex items-center space-x-3 lg:space-x-4">
                <img src="/assets/svg/event-icon-email.svg"></img>
                <a
                  href={"mailto:" + props.contactdata.email.toLowerCase()}
                  className="lg:text-lg text-[#232323] block hover:text-red-700"
                >
                  {props.contactdata.email}
                </a>
              </div>
              <div className="c-contact-item px-2  lg:px-4 py-2 lg:py-3 border-t border-b border-[#D2C6AA] flex items-start space-x-3 lg:space-x-4">
                <img src="/assets/svg/event-icon-pin.svg"></img>
                <a
                  target="_blank"
                  href={getDirection(
                    props.contactdata.address,
                    props.contactdata.slug,
                    props.contactdata.city,
                    props.contactdata.zip
                  )}
                  className="lg:text-lg text-[#232323] block hover:text-blue-800 "
                >
                  <span className="text-blue-600 font-medium">Store Map: </span>
                  {getAddress(
                    props.contactdata.address,
                    props.contactdata.slug,
                    props.contactdata.city,
                    props.contactdata.zip
                  )}
                </a>
              </div>

              <div className="c-contact-item px-2  lg:px-4 py-2 lg:py-3 border-b border-[#D2C6AA] flex items-center space-x-3 lg:space-x-4">
                <img src="/assets/svg/event-icon-chair.svg"></img>
                <p className="lg:text-lg text-[#232323]">
                  Wheelchair Accessibility
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
                <div className="tbl-cont px-2 md:px-1 lg:px-2 py-2 ">
                  {props.contactdata.hours && (
                    <table className="bhour-row table-auto border-collapse  text-[#464646] w-full">
                      <tbody>
                        <tr>
                          <td className=" capitalize px-2 py-1 font-medium text-sm lg:text-base">
                            Day
                          </td>
                          <td className=" px-2 py-1 font-medium text-sm lg:text-base">
                            Open
                          </td>
                          <td className=" px-2 py-1 font-medium text-sm lg:text-base">
                            Close
                          </td>
                        </tr>
                        {props.contactdata.hours.map((hours, index) => {
                          return (
                            <tr key={index}>
                              <td className="capitalize px-2 py-1 text-sm lg:text-base">
                                {hours.day}
                              </td>
                              <td className="px-2 py-1 text-sm lg:text-base">
                                {hours.open}
                              </td>
                              <td className="px-2 py-1 text-sm lg:text-base ">
                                {hours.close}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
              {/*========== std business hours end=========== */}
              {/*========== holiday business hours=========== */}
              <div className="loc-tb-hrs md:min-w-[54%] md:border-y border-[#D2C6AA]">
                <div className="pt-2 pb-2 px-2 md:px-2 md:py-3 lg:px-4 tbl-h border-t md:border-t-0 border-b border-[#D2C6AA]">
                  <h3 className="text-[#232323] font-medium lg:text-lg">
                    Holiday Hours
                  </h3>
                  <p className="font-thin text-sm lg:text-base">
                    Hours may vary sometimes
                  </p>
                </div>
                <div className="tbl-cont px-2 md:px-1 lg:px-2 py-2 ">
                  {props.contactdata.holiday_hours ? (
                    <table className="bhour-row table-auto border-collapse  text-[#464646] w-full">
                      <tbody>
                        <tr>
                          <td className=" capitalize px-2 py-1 font-medium">
                            Holyday
                          </td>
                          <td className=" capitalize px-2 py-1 font-medium">
                            Date
                          </td>
                          <td className=" px-2 py-1 font-medium">Open</td>
                          <td className=" px-2 py-1 font-medium">Close</td>
                        </tr>
                        {props.contactdata.holiday_hours.map(
                          (holiday, index) => {
                            return (
                              <tr key={index}>
                                <td className="  capitalize px-2 py-1 text-xs md:text-sm lg:text-base">
                                  {holiday.holiday_name}
                                </td>
                                <td className="  capitalize px-2 py-1 text-xs md:text-sm lg:text-base">
                                  {holiday.date}
                                </td>
                                <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                                  {holiday.open ? holiday.open : "Closed"}
                                </td>
                                <td className="px-2 py-1 text-xs md:text-sm lg:text-base ">
                                  {holiday.close ? holiday.close : "-"}
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  ) : (
                    <table className="bhour-row table-auto border-collapse  text-[#464646] w-full">
                      <tbody>
                        <tr>
                          <td className=" capitalize pl-2 py-1 font-medium text-sm lg:text-base">
                            Holyday
                          </td>
                          <td className=" capitalize px-2 py-1 font-medium text-sm lg:text-base">
                            Date
                          </td>
                          <td className=" px-2 py-1 font-medium text-sm lg:text-base">
                            Open
                          </td>
                          <td className=" px-2 py-1 font-medium text-sm lg:text-base">
                            Close
                          </td>
                        </tr>

                        <tr>
                          <td className="  capitalize pl-2 py-1 text-sm lg:text-base">
                            Thanksgiving
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            11/23/23
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            --
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            Close
                          </td>
                        </tr>

                        <tr>
                          <td className="  capitalize pl-2 py-1 text-sm lg:text-base">
                            Christmas Eve
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            12/24/23
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            11am - 5pm
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            --
                          </td>
                        </tr>

                        <tr>
                          <td className="  capitalize pl-2 py-1 text-sm lg:text-base">
                            Christmas Day
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            11/23/23
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            --
                          </td>
                          <td className="px-2 py-1  text-xs md:text-sm lg:text-base">
                            Close
                          </td>
                        </tr>
                        <tr>
                          <td className="  capitalize pl-2 py-1 text-sm lg:text-base">
                            New Year's Eve{" "}
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            12/31/23
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            11am - 5pm
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            --
                          </td>
                        </tr>
                        <tr>
                          <td className="  capitalize pl-2 py-1 text-sm lg:text-base">
                            New Year's Day
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            01/01/24
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            11am - 5pm
                          </td>
                          <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                            --
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
              {/*========== holiday business hours end=========== */}
            </div>
          </div>
          {/*=========================================================contact details============================ */}
          {/*========================  contact form=======================*/}
          <div className="c-form-form md:w-[57%] lg:w-[56%] order-1 md:order-2 pr-0 md:pr-4">
            <div className="bg-[#F4E6C3] py-8 px-4 lg:p-8 rounded-lg drop-shadow">
              <form onSubmit={(event) => submitForm(event)}>
                {/*========================  contact form row first name = last name=======================*/}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between ">
                  <div className="form-col w-full md:w-[48%] relative">
                    <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      What's your first name?*
                    </p>
                    <input
                      onChange={(e) => checkFName(e)}
                      type="text"
                      id="fname"
                      name="fname"
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="Your first name"
                      pattern="[a-zA-z ]{3,20}"
                      title="Name should be alphabets (a to z) and minimum 2 charectar."
                      required
                    ></input>
                    {formErr.fNameErr && (
                      <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Invalid name. Only letter and space allowed (between
                        3-20 character)
                      </p>
                    )}
                  </div>
                  <div className="form-col w-full md:w-[48%] relative">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      What's your last name?*
                    </p>
                    <input
                      onChange={(e) => checkLName(e)}
                      type="text"
                      name="lname"
                      id="lname"
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="Your last name"
                      required
                    ></input>
                    {formErr.lNameErr && (
                      <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr">
                        Invalid name. Only letter and space allowed (min 3
                        character)
                      </p>
                    )}
                  </div>
                </div>
                {/*========================  contact form row first name = last name end========================*/}
                {/*======================================contact form row emal+phone====================== */}
                <div className="form-row flex flex-col space-y-3 md:flex-row md:space-y-0 justify-between mt-3 md:mt-10 lg:mt-12">
                  <div className="relative form-col w-full md:w-[48%]">
                    <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      What's your email?*
                    </p>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => checkEmail(e)}
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="Your email address"
                      required
                    ></input>
                    {formErr.emailErr && (
                      <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Invalid email address
                      </p>
                    )}
                  </div>
                  <div className="relative form-col  w-full md:w-[48%]">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      What's your phone number?*
                    </p>
                    <input
                      type="tel"
                      onChange={(e) => checkPhone(e)}
                      name="phone"
                      id="phone"
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green"
                      placeholder="Your phone number"
                      required
                    ></input>
                    {formErr.phoneErr && (
                      <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Invalid Phone Number
                      </p>
                    )}
                  </div>
                </div>
                {/*======================================contact form row====================== */}
                {/*======================================contact form row location event====================== */}
                <div className="form-row flex justify-between mt-3 md:mt-10 lg:mt-12 ">
                  <div className="relative form-col w-full">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Enquiry type*
                    </p>
                    <select
                      name="comsub"
                      id="comsub"
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="Your email"
                      onChange={(e) => checkComSub(e)}
                      required
                    >
                      <option value="General enquiry">General enquiry</option>
                      <option value="Group booking">Group booking</option>
                      <option value="Birthday party">Birthday party</option>
                      <option value="Corporate event">Corporate event</option>
                      <option value="Careers">Careers</option>
                      <option value="Franchise enquiry">
                        Franchise enquiry
                      </option>
                      <option value="Other">Other</option>
                    </select>
                    {formErr.comErr && (
                      <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Select communications reason
                      </p>
                    )}
                  </div>
                </div>
                {/*======================================contact form row location event====================== */}
                {/*======================================contact form row message event====================== */}
                <div className="form-row flex justify-between my-3 md:my-10 lg:my-12">
                  <div className="form-col w-full">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      What's your message?{" "}
                    </p>

                    <textarea
                      name="msg"
                      required
                      onChange={(e) => {
                        getMsg(e);
                      }}
                      id="msg"
                      className="w-full h-[110px] md:h-[180px] event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green"
                      placeholder="Write your message here"
                    ></textarea>
                  </div>
                </div>
                {/*======================================contact form row message event====================== */}
                {!isSend && (
                  <div className="form-row flex justify-center ">
                    <button
                      type="submit"
                      className="text-white font-medium text-lg md:text-xl py-3 px-12 bg-red-600 hover:bg-red-700 rounded-full"
                    >
                      Send Message
                    </button>
                  </div>
                )}

                {isSend == true && (
                  <div className="max-w-[170px] mx-auto btn-back px-6 py-2 text-lg md:text-xl rounded-full font-medium bg-red-600 hover:bg-red-700  text-white ">
                    <div class=" font-medium loader">Sending</div>
                  </div>
                )}
                {/*======================================contact form button====================== */}
              </form>
            </div>
            <div className="px-4 mt-6 lg:mt-10">
              <div className="direction locinfo-row border-b border-[#D2C6AA] py-2 px-2 lg:py-3">
                <div className="flex space-x-2  md:text-lg ">
                  <div className="loc-dt-icon  md:w-auto ">
                    <img
                      className="w-[24px]"
                      src="/assets/svg/util/store_direction.svg"
                    ></img>
                  </div>
                  <div className="loc-dt-text text-[#232323] flex-1">
                    <div>
                      <span>
                        <b>Direction: </b>
                      </span>
                      <span> {props.contactdata.entry_guid}</span>
                    </div>
                    {props.contactdata.entry_guid2 && (
                      <div className="mt-2">
                        <span>{props.contactdata.entry_guid2}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="payment locinfo-row border-b border-[#D2C6AA] py-2 px-2 lg:py-3">
                <div className="flex space-x-2  md:text-lg ">
                  <div className="loc-dt-icon  md:w-auto ">
                    <img
                      className="w-[24px]"
                      src="/assets/svg/util/payment_options.svg"
                    ></img>
                  </div>
                  <div className="loc-dt-text text-[#232323] flex-1">
                    <p>
                      <span> {props.contactdata.payment_options}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*======================== corporate contact form=======================*/}
        </div>
        {/* location map map */}
        <div className="location-spc-map drop-shadow-md border-2 border-gold max-w-7xl mx-auto mt-12 rounded">
          {isPgLoaded && (
            <div className="emb-map w-full  h-[400px] md:h-[440px] lg:h-[540px]">
              <LocationMap
                position={props.contactdata.position}
                place_id={props.contactdata.place_id}
              />
            </div>
          )}
        </div>
        {/* location map map end*/}
      </div>
    </div>
  );
};

export default StoreContact;
