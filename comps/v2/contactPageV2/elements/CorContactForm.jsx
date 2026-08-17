import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect, useRef } from "react";

const MAX_SIZE_MB = 2;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "application/pdf"];

const CorContactForm = (props) => {
  // const [captchaToken, setCaptchaToken] = useState(null);
  //   toEmail: props.locationInfo.storeEmail.toLowerCase() || "",
  //  toMgrEmail: props.locationInfo.managerEmail.toLowerCase() || "",
  const [locationEmailData, setLocationEmailData] = useState(
    props.locationList,
  );
  const recaptchaRef = useRef();
  const [csrfToken, setCsrfToken] = useState(null);
  const [reCaptchaToken, setReCaptchaToken] = useState(null);

  const [err, setErr] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [formErr, setFormErr] = useState({
    fNameErr: false,
    emailErr: false,
    phoneErr: false,
    locationErr: false,
    conMethodErr: false,
    comErr: false,
    bookingOrderErr: false,
    imgFileErr: false,
  });
  const [fieldVlue, setFieldValue] = useState({
    fName: "",
    email: "",
    phone: "",
    conMethod: "",
    comSubject: "General enquiry",
    bookingOrder: "",
    imgFile: "",
    locationName: "",
    toEmail: "",
    toMgrEmail: "",
    msg: "",
    botMsg: "",
  });
  // get csrf token
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const csrfRes = await fetch("/api/Forms/getCsrfToken");
        console.log("CSRF token response:", csrfRes);
        const resDtata = await csrfRes.json();
        setCsrfToken(resDtata.csrfToken);
        console.log("CSRF token found:", resDtata.csrfToken);
      } catch (error) {
        setErrorMsg("Failed to fetch CSRF token");
        console.log("Failed to fetch CSRF token:", error);
      }
    };

    fetchCsrfToken();
  }, []);
  // escape Html tag
  const escape = (htmlStr) => {
    return htmlStr
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    //  .replace(/(?:\r\n|\r|\n)/g, "<br>");
  };
  // ========================================================first name validation=================
  const checkFName = (e) => {
    const fname = e.target.value.trim();

    const namePatt = /^[a-zA-Z ]*$/;
    if (fname.length > 2 && fname.length < 24) {
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

    if (phone.length > 6 && phone.length < 17) {
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
  const checkLocation = (e) => {
    const loc = e.target.value;
    //  console.log(loc);
     console.log(locationEmailData[loc].attributes);
    if (loc > "0" || loc == "0") {
      setErr(false);
      setFormErr({ ...formErr, locationErr: false });
      setFieldValue({
        ...fieldVlue,
        toEmail: locationEmailData[loc].attributes.locationInfo.storeEmail,
        toMgrEmail: locationEmailData[loc].attributes.locationInfo.managerEmail,
        locationName: locationEmailData[loc].attributes.locationName,
      });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setErr(true);
      setFormErr({ ...formErr, locationErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  const checkConMethod = (e) => {
    const conMet = e.target.value;

    if (conMet != "0") {
      setErr(false);
      setFormErr({ ...formErr, conMethodErr: false });
      setFieldValue({ ...fieldVlue, conMethod: conMet });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setErr(true);
      setFormErr({ ...formErr, conMethodErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
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
  const checkBookingOrder = (e) => {
    const orderNo = e.target.value.trim();
    const numPatt = /^[a-zA-Z0-9.-]+$/;

    if (orderNo.length > 3 && orderNo.length < 16) {
      if (!numPatt.test(orderNo)) {
        setErr(true);
        setFormErr({ ...formErr, bookingOrderErr: true });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr({ ...formErr, bookingOrderErr: false });
        setFieldValue({ ...fieldVlue, bookingOrder: orderNo });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr({ ...formErr, bookingOrderErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  const getMsg = (e) => {
    //const msg = escape(e.target.value.trim());
    const msg = e.target.value.trim();
    if (msg.length > 2) {
      setFieldValue({ ...fieldVlue, msg: msg });
    }
  };

  //========================================upload file
  const checkFile = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      setErr(true);
      setFormErr({ ...formErr, imgFileErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
      return;
    }

    // 1. Client-Side Type Checking
    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setErr(true);
      setFormErr({ ...formErr, imgFileErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
      return;
    }

    // 2. Client-Side Size Checking
    if (selectedFile.size > MAX_SIZE_BYTES) {
      setErr(true);
      setFormErr({ ...formErr, imgFileErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
      return;
    }

    setErr(false);
    setFormErr({ ...formErr, imgFileErr: false });
    setFieldValue({ ...fieldVlue, imgFile: selectedFile });
    e.target.classList.remove("focus-red");
    e.target.classList.add("focus-green");

    //setFile(selectedFile);
  };
  const checkBoot = (e) => {
    const botData = escape(e.target.value.trim());

    setFieldValue({ ...fieldVlue, botMsg: botData });
  };
  const checkEmpty = () => {
    if (
      fieldVlue.fName.length < 3 ||
      typeof fieldVlue.fName !== "string" ||
      fieldVlue.conMethod.length < 1 ||
      fieldVlue.email.length < 6 ||
      typeof fieldVlue.email !== "string" ||
      fieldVlue.toEmail.length < 1 ||
      fieldVlue.phone.length < 7 ||
      fieldVlue.botMsg.length > 0 ||
      typeof fieldVlue.email !== "string"
    ) {
      return true;
    }
    return false;
  };
  //========================================submit form
  const submitForm = async (event) => {
    event.preventDefault();

    setIsSend(true);
    const isEmpty = checkEmpty();
    if (err || isEmpty) {
      setErrorMsg("Some thing is wrong. Miscellaneous activity detected");
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
      return;
    }

    const formPayload = new FormData();
    formPayload.append("fName", fieldVlue.fName);
    formPayload.append("email", fieldVlue.email);
    formPayload.append("phone", fieldVlue.phone);
    formPayload.append("conMethod", fieldVlue.conMethod);
    formPayload.append("comSubject", fieldVlue.comSubject);
    formPayload.append("bookingOrder", fieldVlue.bookingOrder);
    formPayload.append("toEmail", fieldVlue.toEmail);
    formPayload.append("toMgrEmail", fieldVlue.toMgrEmail);
    formPayload.append("locationName", fieldVlue.locationName);
    formPayload.append("msg", fieldVlue.msg);
    formPayload.append("botMsg", fieldVlue.botMsg);
    // formPayload.append("captchaToken", reCaptchaToken);
    formPayload.append("csrfToken", csrfToken);

    const grcToken = await recaptchaRef.current.executeAsync();
    //  console.log("captcha token ..." + grcToken);
    if (!grcToken) {
      setErrorMsg("Cptcha not Found. try again");
      return;
    }
    setReCaptchaToken(grcToken);
    formPayload.append("captchaToken", grcToken);
    //console.log("botlength - " + fieldVlue.botMsg.length);
    if (fieldVlue.imgFile != "") {
      formPayload.append("file", fieldVlue.imgFile);
    }

    /**
 * const formData = {
      fName: fieldVlue.fName,
      email: fieldVlue.email,
      phone: fieldVlue.phone,
      toEmail: fieldVlue.toEmail,
      toMgrEmail: fieldVlue.toMgrEmail,
      conMethod: fieldVlue.conMethod,
      comSubject: fieldVlue.comSubject,
      bookingOrder: fieldVlue.bookingOrder,
      imgFile: fieldVlue.imgFile,
      msg: fieldVlue.msg,
      botMsg: fieldVlue.botMsg,
      captchaToken: grcToken,
      csrfToken: csrfToken,
    };
 * 
 */
    console.log("Sending...");
    console.log(formPayload);

    try {
      const response = await fetch("/api/Forms/processContactFrom", {
        method: "POST",
        body: formPayload,
        //  headers: {
        //   Accept: "application/json,text/plain,*/*",
        //   "Content-Type": "application/json",
        //  },
        //body: JSON.stringify(formData),
      });
      const result = await response.json();
      setIsSend(false);
      if (response.status == 200) {
        setErrorMsg("");
        setSuccessMsg("Your message has submitted successfully. Thank you.");
        window.location.replace("/thank-you");
      } else if (response.status == 400) {
        setErrorMsg(result.data.error);
      } else if (response.status == 403) {
        setSuccessMsg("");
        setErrorMsg(result.data.error);
      } else if (response.status == 405) {
        setSuccessMsg("");
        setErrorMsg(result.data.error);
      } else if (response.status == 429) {
        setSuccessMsg("");
        setErrorMsg(
          result.data.error + " Try after" + result.data.resetAfter + " Min",
        );
      } else {
        setErrorMsg("Server not Responding. Try again later");
        setSuccessMsg("");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSuccessMsg("");
      setIsSend(false);
      alert("Network Error: Please try again later.");
    }

    //console.log(result);
    // console.log(response.status);
    //console.log(result.success)
  };
  return (
    <div className="c-contact corporate-contact w-full">
      {/*======================== corporate contact form=======================*/}

      <div className="c-form-form py-5 md:py-7 xl:py-6 3xl:py-8 px-0 zm:px-4 lg:p-8 rounded-lg drop-shadow  w-full">
        <div className="bg-[#F4E6C3] py-6 sm:py-7 md:py-8 px-4 lg:p-8 rounded-lg drop-shadow">
          <div className="mb-3.5 md:mb-5 text-center">
            <h2 className="dark-gold md:py-2 text-[1.85rem] zm:text-[2rem] sm:text-[2.25rem] 2xl:text-[2.5rem] leading-[1.2] font-os font-bold uppercase ">
              ADDITIONAL HELP
            </h2>
          </div>
          {errorMsg.length > 0 && successMsg.length < 1 && (
            <p className="form-error p-3 mb-4 bg-amber-50 text-red-700 text-center text-sm">
              {errorMsg}
            </p>
          )}
          {errorMsg.length < 1 && successMsg.length > 0 && (
            <p className="form-error p-3 mb-4 bg-amber-50 text-red-700 text-center text-sm">
              {successMsg}
            </p>
          )}
          <form onSubmit={(event) => submitForm(event)}>
            {/*========================  ======================================================================contact form row full name + email=======================*/}
            <div className="form-row flex flex-col space-y-3 zm:space-y-3.5 md:space-y-0 md:flex-row justify-between ">
              <div className="relative form-col w-full md:w-[48%]">
                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                  What's your full name?<span className="text-red-600">*</span>
                </p>
                <input
                  onChange={(e) => checkFName(e)}
                  type="text"
                  id="fname"
                  name="fname"
                  className="w-full h-[46px] md:h-[50px] event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                  placeholder="Your full name"
                  pattern="[a-zA-z ]{3,20}"
                  title="Name should be alphabets (a to z) and minimum 2 charectar."
                  required
                ></input>
                {formErr.fNameErr && (
                  <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                    Invalid name. Only letter and space allowed (between 3-20
                    character)
                  </p>
                )}
              </div>
              <div className="relative form-col w-full md:w-[48%]">
                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                  What's your email?<span className="text-red-600">*</span>
                </p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => checkEmail(e)}
                  className="w-full h-[46px] md:h-[50px] event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                  placeholder="Your email address"
                  required
                ></input>
                <input
                  type="text"
                  name="botCheck"
                  onChange={(e) => checkBoot(e)}
                  className="hidden"
                ></input>
                {formErr.emailErr && (
                  <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                    Invalid email address
                  </p>
                )}
              </div>
            </div>
            {/*========================  contact form row first name = last name end========================*/}
            {/*======================================contact form row phone location====================== */}
            <div className="form-row flex flex-col space-y-3 zm:space-y-3.5 md:space-y-0 md:flex-row justify-between mt-3 rm:mt-3.5 sm:mt-8 lg:mt-10">
              <div className="relative form-col  w-full md:w-[48%]">
                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                  What's your phone number?
                  <span className="text-red-600">*</span>
                </p>
                <input
                  type="tel"
                  onChange={(e) => checkPhone(e)}
                  name="phone"
                  id="phone"
                  className="w-full h-[46px] md:h-[50px] event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green"
                  placeholder="Your phone number"
                  required
                ></input>
                {formErr.phoneErr && (
                  <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                    Invalid Phone Number
                  </p>
                )}
              </div>
              <div className="relative form-col w-full md:w-[48%]">
                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                  Choose your location<span className="text-red-600">*</span>
                </p>
                <select
                  name="location"
                  id="location"
                  className="w-full h-[46px] md:h-[50px] event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                  onChange={(e) => checkLocation(e)}
                  required
                >
                  <option value="-1">Select your location</option>
                  {props.locationList.map((item, index) => {
                    return (
                      <option key={index} value={index}>
                        {item.attributes.locationName}
                      </option>
                    );
                  })}
                </select>
                {formErr.locationErr && (
                  <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                    Select your location.
                  </p>
                )}
              </div>
            </div>
            {/*======================================contact form row====================== */}
            {/*======================================Preferred contact method*  Inquiry type* ====================== */}
            <div className="form-row flex flex-col space-y-3 zm:space-y-3.5 md:space-y-0 md:flex-row justify-between mt-3 rm:mt-3.5 sm:mt-8 lg:mt-10">
              <div className="form-col w-full md:w-[48%]">
                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                  Preferred contact method
                  <span className="text-red-600">*</span>
                </p>
                <select
                  name="conmethod"
                  id="conmethod"
                  className="w-full h-[46px] md:h-[50px] event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                  onChange={(e) => checkConMethod(e)}
                  required
                >
                  <option value="0">Select your contact method</option>

                  <option value="Phone">Phone</option>
                  <option value="Group booking">Email</option>
                </select>
                {formErr.conMethodErr && (
                  <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                    Choose a contact method
                  </p>
                )}
              </div>
              <div className="form-col w-full md:w-[48%]">
                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                  Inquiry type<span className="text-red-600">*</span>
                </p>
                <select
                  name="comsub"
                  id="comsub"
                  className="w-full h-[46px] md:h-[50px] event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                  onChange={(e) => checkComSub(e)}
                  required
                >
                  <option value="">Choose Inquiry Type</option>

                  <option value="General Question / Information">
                    General Question / Information
                  </option>
                  <option value="Purchase / Gift Card Support">
                    Purchase / Gift Card Support
                  </option>
                  <option value="Billing / Refund Inquiry">
                    Billing / Refund Inquiry
                  </option>
                  <option value="Technical / Website Issue">
                    Technical / Website Issue
                  </option>
                  <option value="Accessibility Needs">
                    Accessibility Needs
                  </option>
                  <option value="Other / Not Listed Above">
                    Other / Not Listed Above
                  </option>
                </select>
                {formErr.comErr && (
                  <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                    Select communications reason
                  </p>
                )}
              </div>
            </div>
            {/*======================================contact form Preferred contact method*  Inquiry type====================== */}
            {/*======================================Booking / order number* ====================== */}
            <div className="form-row flex flex-col space-y-3 zm:space-y-3.5 md:space-y-0 md:flex-row justify-between mt-3 rm:mt-3.5 sm:mt-8 lg:mt-10">
              <div className="relative form-col  w-full md:w-[48%]">
                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                  Booking / order number
                </p>

                <input
                  onChange={(e) => checkBookingOrder(e)}
                  type="text"
                  id="bookingcode"
                  name="bookingcode"
                  className="w-full h-[46px] md:h-[50px] event-input   border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                  placeholder="Your booking / order number"
                  // pattern="[a-zA-z ]{3,20}"
                  title="Bookink should be numbers (0 to 9) and minimum 5 charectar."
                ></input>
                {formErr.bookingOrderErr && (
                  <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                    Invalid booking order no. Only Alphabet and Number allowed
                  </p>
                )}
              </div>
              <div className="relative form-col  w-full md:w-[48%]">
                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                  Attachment a file / screenshot
                </p>
                <input
                  onChange={(e) => checkFile(e)}
                  type="file"
                  id="imgfile"
                  name="imgfile"
                  className="w-full h-[46px] md:h-[50px] event-input  border-0 pt-2.5 md:py-3 px-4 bg-white focus:ring-transparent"
                  placeholder="Your booking / order number"
                  //pattern="[a-zA-z ]{3,20}"
                  title="Name should be alphabets (a to z) and minimum 2 charectar."
                ></input>
                {formErr.imgFileErr && (
                  <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                    Only jpg, png and pdf allowed. Max file size 2MB.
                  </p>
                )}
              </div>
            </div>
            {/*======================================contact form Preferred contact method*  Inquiry type====================== */}
            {/*======================================contact form row message ====================== */}
            <div className="form-row flex flex-col space-y-3 zm:space-y-3.5 md:space-y-0 md:flex-row justify-between mt-3 rm:mt-3.5 sm:mt-8 lg:mt-10">
              <div className="relative form-col w-full">
                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                  Please describe your issue in detail
                </p>

                <textarea
                  name="msg"
                  onChange={(e) => {
                    getMsg(e);
                  }}
                  id="msg"
                  className="w-full h-[110px] md:h-[140px] event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green"
                  placeholder="Write your message here"
                ></textarea>
              </div>
            </div>
            {/**================ captcha element */}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LepEu0qAAAAAFSM_8lLN8LDgmT2qguQGQwV7cPZ" // Replace with your site key
              size="invisible"
              //onChange={setCaptchaToken}
            />

            {/*======================================contact form row message====================== */}
            {!isSend && (
              <div className="form-row flex justify-center mt-5 rm:mt-6 sm:mt-8 md:mt-10  ">
                <button
                  type="submit"
                  className="inline-block w-full zm:w-[400px] md:w-[440px] text-white font-medium text-lg md:text-xl py-3 px-12 bg-red-600 hover:bg-red-700 rounded-full"
                >
                  SUBMIT
                </button>
              </div>
            )}

            {isSend == true && (
              <div className="w-full zm:w-[400px] md:w-[440px] mx-auto btn-back px-6 py-3 text-lg md:text-xl rounded-full font-medium bg-red-600 hover:bg-red-700  text-white text-center mt-5 rm:mt-6 sm:mt-8 md:mt-10">
                <div className=" font-medium loader">Sending</div>
              </div>
            )}
            {/*======================================contact form button====================== */}
          </form>
        </div>
      </div>

      {/*======================== corporate contact form=======================*/}
    </div>
  );
};

export default CorContactForm;
