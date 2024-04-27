import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import GameTitleSeparator from "../util/GameTitleSeparator";

const Vcontact = (props) => {
  const localdataWithMail = props.locationMailData;
  const [isSend, setIsSend] = useState(false);
  const [err, setErr] = useState(false);

  const [formErr, setFormErr] = useState({
    fNameErr: false,
    lNameErr: false,
    emailErr: false,
    phoneErr: false,
    inqTypeErr: false,
    locErr: false,
  });

  const [fieldVlue, setFieldValue] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    inqType: "",
    location: "",
    storeEmail: "",
    managerEmail: "",
    msg: "",
  });
  // ========================================================first name validation=================
  const htmlescape = (htmlStr) => {
    return htmlStr
      .replace(/&/g, "and")
      .replace(/</g, " ")
      .replace(/>/g, " ")
      .replace(/(?:\r\n|\r|\n)/g, "<br>");
  };
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
  // ========================================================inqury type validation=================

  const checkInqType = (e) => {
    const inqType = e.target.value;

    if (inqType != "") {
      setErr(false);
      setFormErr({ ...formErr, inqTypeErr: false });
      setFieldValue({ ...fieldVlue, inqType: inqType });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setErr(true);
      setFormErr({ ...formErr, inqTypeErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // ========================================================checkLocation validation=================

  const checkLocation = (e, data) => {
    const loc = e.target.value;
    let lostate = "";
    let sEmail = "";
    let mEmail = "";

    if (loc != "") {
      setErr(false);
      setFormErr({ ...formErr, locErr: false });

      for (let i = 0; i < data.length; i++) {
        if (data[i].city == loc) {
          lostate = data[i].state;
          sEmail = data[i].storeEmail;
          mEmail = data[i].managrEmail;
        }
      }

      setFieldValue({
        ...fieldVlue,
        location: loc + ", " + lostate,
        storeEmail: sEmail,
        managerEmail: mEmail,
      });

      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setErr(true);
      setFormErr({ ...formErr, locErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // geet msg text

  const getMsg = (e) => {
    const msg = e.target.value.trim();
    if (msg.length > 2) {
      setFieldValue({ ...fieldVlue, msg: htmlescape(msg) });
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();
    //console.log("clicked");
    //console.log(fieldVlue);
    if (!err) {
      if (fieldVlue.inqType == "") {
        setFormErr({ ...formErr, inqTypeErr: true });
      }
      if (fieldVlue.location == "") {
        setFormErr({ ...formErr, locErr: true });
      } else {
        setIsSend(true);
        const response = await fetch("/api/Forms/volunteerContact", {
          method: "POST",
          headers: {
            Accept: "application/json,text/plain,*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fieldVlue),
        });
        const result = await response.json();
        if (result.success) {
          setIsSend(false);
          window.location.replace("/thank-you");
        } else {
          setIsSend(false);
          alert("Network Error");
        }
      }
    } else {
      setIsSend(false);
      alert("Form can'nt be submitted. Try again later");
    }
  };

  return (
    <div
      id="contact-v"
      className="py-16 pt-16 pb-0 md:py-20 lg:py-28 bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className=" text-center px-4">
          <GameTitleSeparator
            title="CONTACT YOUR LOCAL ALL IN ADVENTURES"
            color="dark-gold"
            weight="font-bold"
          />
        </div>
        <div className="order-1 md:order-2 contact-form-box w-full mt-6 md:mt-8 xl:mt-12">
          <div className="contact-form-bg bg-[#F4E6C3] px-4 py-8 md:py-10 md:px-8 lg:p-12 md:rounded">
            {/*==========================================================contact form to book event======================= */}
            <form onSubmit={(event) => submitForm(event)}>
              {/*======================================contact form row====================== */}
              <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between ">
                <div className="form-col w-full md:w-[48.5%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                    First name*
                  </p>
                  <input
                    type="text"
                    className="w-full event-input  border-0 md:py-3 px-4 bg-white"
                    placeholder="Your first name"
                    onChange={(e) => checkFName(e)}
                    required
                  ></input>

                  <p className="text-sm text-red-600">
                    {formErr.fNameErr
                      ? "Field must not be empty. Only letter and space alowed"
                      : ""}
                  </p>
                </div>
                <div className="form-col w-full md:w-[48.5%]">
                  <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                    Last name
                  </p>
                  <input
                    type="text"
                    className=" w-full event-input  border-0 md:py-3 px-4 bg-white"
                    placeholder="Your last name"
                    onChange={(e) => checkLName(e)}
                  ></input>
                  <p className="text-sm text-red-600">
                    {formErr.lNameErr ? "Only letter and space alowed" : ""}
                  </p>
                </div>
              </div>
              {/*======================================contact form row====================== */}
              {/*======================================contact form row====================== */}
              <div className="form-row flex flex-col space-y-3 md:flex-row md:space-y-0 justify-between my-3 md:my-4 ">
                <div className="form-col w-full md:w-[48.5%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                    Email address*
                  </p>
                  <input
                    type="email"
                    className="w-full event-input  border-0 md:py-3 px-4 bg-white"
                    placeholder="Email address"
                    onChange={(e) => checkEmail(e)}
                    required
                  ></input>
                  <p className="text-sm text-red-600">
                    {formErr.emailErr ? "Invalid Email Address" : ""}
                  </p>
                </div>
                <div className="form-col  w-full md:w-[48.5%]">
                  <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                    Phone number*
                  </p>
                  <input
                    type="text"
                    className=" w-full event-input  border-0 md:py-3 px-4 bg-white"
                    placeholder="Phone number"
                    onChange={(e) => checkPhone(e)}
                    required
                  ></input>
                  <p className="text-sm text-red-600">
                    {formErr.phoneErr ? "Invalid Phone Number" : ""}
                  </p>
                </div>
              </div>
              {/*======================================contact form row====================== */}
              {/*======================================contact form row select event====================== */}
              <div className="form-row flex  flex-col space-y-3 md:flex-row  md:space-y-0 justify-between my-3 md:my-4 ">
                <div className="form-col w-full md:w-[48.5%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                    Choose inquiry type*
                  </p>
                  <select
                    type="text"
                    className="w-full event-input  text-gray-500 border-0 md:py-3 px-4 bg-white"
                    onChange={(e) => checkInqType(e)}
                    required
                  >
                    <option value="">Inquiry type...</option>
                    <option value="Volunteer Request">Volunteer Request</option>
                    <option value="Fundraising">Fundraising</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Neighbor-to-Neighbor Programs">
                      Neighbor-to-Neighbor Programs
                    </option>
                    <option value="Space Rental">Space Rental</option>
                  </select>
                  <p className="text-sm text-red-600">
                    {formErr.inqTypeErr ? "Please select an inquiry type" : ""}
                  </p>
                </div>
                <div className="form-col w-full md:w-[48.5%]">
                  <div className="form-col w-full">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Choose your location*
                    </p>
                    <select
                      type="text"
                      className="w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white"
                      placeholder="Your email"
                      onChange={(e) => checkLocation(e, localdataWithMail)}
                      required
                    >
                      <option value="">Your location...</option>
                      {props.locationMailData.map((location, index) => {
                        return (
                          <option key={index} value={location.city}>
                            {location.city + ", " + location.state}
                          </option>
                        );
                      })}
                    </select>
                    <p className="text-sm text-red-600">
                      {formErr.locErr ? "Please select a location" : ""}
                    </p>
                  </div>
                </div>
              </div>
              {/*======================================contact form row select event====================== */}

              {/*======================================contact form row message event====================== */}
              <div className="form-row flex justify-between my-4 ">
                <div className="form-col w-full">
                  <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                    Your message
                  </p>

                  <textarea
                    className="w-full h-[80px] md:h-[100px] event-input text-gray-500  border-0 md:py-3 px-4 bg-white"
                    placeholder="Write your message here..."
                    onChange={(e) => getMsg(e)}
                  ></textarea>
                </div>
              </div>
              {/*======================================contact form row message event====================== */}
              <div className="form-row flex justify-center mt-4 md:mt-6 lg:mt-6 ">
                <button
                  type="submit"
                  className="text-white font-medium text-lg py-3 px-16 bg-red-600 hover:bg-red-700 rounded-full"
                >
                  {isSend ? "SENDING..." : "SUBMIT"}
                </button>
              </div>
              {/*======================================contact form row message event====================== */}
            </form>
            {/*==========================================================contact form to book event end======================= */}
          </div>
        </div>
        <div className="inq-type-text px-4 md:px-8 mt-8 pb-16 md:pb-0">
          <h3 className="text-[#212121] font-bold text-xl">Inquiry Types:</h3>
          <div className="inq-list sm:ml-3 lg:ml-4 mt-2">
            <p className="text-[#464646] xl:text-lg">
              <span className="font-medium">- Volunteer Request</span>
            </p>
            <p className="text-[#464646] xl:text-lg mt-1">
              <span className="font-medium">- Fundraising</span>
            </p>

            <p className="text-[#464646] xl:text-lg mt-1">
              <span className="font-medium">- Workshop</span> &#40;We help
              develop a unique program for your organization's goals&#41;
            </p>
            <p className="text-[#464646] xl:text-lg mt-1">
              <span className="font-medium">
                - Neighbor-to-Neighbor Programs{" "}
              </span>
              &#40;Partner with us for social events and shared activities&#41;
            </p>
            <p className="text-[#464646] xl:text-lg mt-1">
              <span className="font-medium">- Space Rental </span>
              &#40;Host meetings, parties, or other events in our community
              space&#41;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vcontact;
