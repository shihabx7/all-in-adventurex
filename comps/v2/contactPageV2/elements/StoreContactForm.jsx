import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const removeTags = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/(<([^>]+)>)/gi, "");
};
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
const statCode = (locationName) => {
  var ret = locationName.split(",");
  var retst = ret[ret.length - 1].toUpperCase().trim();
  return retst;
};
export default function StoreContactForm(props) {
  // sanitize msg text
  const escape = (htmlStr) => {
    return htmlStr
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    //.replace(/(?:\r\n|\r|\n)/g, "<br>");
  };
  //========================================= data state==============
  const recaptchaRef = useRef();
  const [showHour, setShowHours] = useState(false);

  const [reCaptchaToken, setReCaptchaToken] = useState(null);
  const [isPgLoaded, setIsPageLoaded] = useState(false);
  const [err, setErr] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [isSend, setIsSend] = useState(false);
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
    toEmail: props.locationInfo.storeEmail.toLowerCase() || "",
    toMgrEmail: props.locationInfo.managerEmail.toLowerCase() || "",
    fromCity: props.locationInfo.cityName || "",
    fromState: statCode(props.locationName) || "",
    botMsg: "",
  });

  // get csrf token
  /*
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
  */
  useEffect(() => {
    setIsPageLoaded(true);
  });
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

  const getMsg = (e) => {
    //const usermsg = escape(e.target.value.trim());
    const usermsg = e.target.value.trim();
    if (usermsg.length > 2) {
      setFieldValue({ ...fieldVlue, msg: usermsg });
    }
  };
  const checkBoot = (e) => {
    const botData = escape(e.target.value.trim());

    setFieldValue({ ...fieldVlue, botMsg: botData });
  };
  const checkEmpty = () => {
    if (
      fieldVlue.fName.length < 3 ||
      typeof fieldVlue.fName !== "string" ||
      fieldVlue.lName.length < 3 ||
      typeof fieldVlue.lName !== "string" ||
      fieldVlue.email.length < 6 ||
      typeof fieldVlue.email !== "string" ||
      fieldVlue.phone.length < 7 ||
      fieldVlue.botMsg.length > 0 ||
      typeof fieldVlue.botMsg !== "string"
    ) {
      return true;
    }

    return false;
  };

  const submitForm = async (event) => {
    event.preventDefault();
    console.log("submiting....");
    setIsSend(true);
    const isEmpty = checkEmpty();
    if (err || isEmpty) {
      setIsSend(false);
      if (fieldVlue.fName == "") {
        const fnameEl = document.getElementById("fname");
        fnameEl.classList.remove("focus-green");
        fnameEl.classList.add("focus-red");
        setFormErr({ ...formErr, fNameErr: true });
      }
      if (fieldVlue.comSubject == "" || fieldVlue.comSubject == "0") {
        const consubel = document.getElementById("comsub");
        consubel.classList.remove("focus-green");
        consubel.classList.add("focus-red");
        setFormErr({ ...formErr, comErr: true });
      }
      console.log("Empty Err ..." + grcToken);
      return;
    }
    const grcToken = await recaptchaRef.current.executeAsync();
    console.log("captcha token ..." + grcToken);
    if (!grcToken) {
      setErrorMsg("Cptcha not fetch. try again");
      return;
    }
    setReCaptchaToken(grcToken);

    // console.log("captcha...." + grcToken);
    console.log("Sending..." + fieldVlue);

    const formData = {
      fName: fieldVlue.fName,
      lName: fieldVlue.lName,
      email: fieldVlue.email,
      phone: fieldVlue.phone,
      comSubject: fieldVlue.comSubject,
      msg: fieldVlue.msg,
      botMsg: fieldVlue.botMsg,
      toEmail: fieldVlue.toEmail,
      toMgrEmail: fieldVlue.toMgrEmail,
      fromCity: fieldVlue.fromCity,
      fromState: fieldVlue.fromState,
      captchaToken: grcToken,
    };
    //csrfToken: csrfToken,
    console.log("form data..." + JSON.stringify(formData));
    try {
      const response = await fetch("/api/Forms/storeContact", {
        method: "POST",
        headers: {
          Accept: "application/json,text/plain,*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setIsSend(false);
      console.log(result.data);
      //console.log(result.success)
      if (response.status == 200) {
        setErrorMsg("");
        setSuccessMsg("Your message has submitted successfully. Thank you.");
        window.location.replace("/thank-you-store");
        //window.location.href = "/thank-you-store";
        // console.log("Form submit success " + result.data);
      } else if (response.status == 403) {
        setSuccessMsg("");
        setErrorMsg(result.data.error);
      } else if (response.status == 405) {
        setErrorMsg(result.data.error);
        setSuccessMsg("");
      } else if (response.status == 429) {
        setErrorMsg(
          result.data.error + " Try after" + result.data.resetAfter + " Min",
        );
        setSuccessMsg("");
      } else {
        setSuccessMsg("");
        setErrorMsg("Server not Responding. Try again later");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSend(false);
      setSuccessMsg("");
      alert("Network Error: Please try again later.");
      return;
    }
  };

  // form submission area==============

  return (
    <div className="c-contact w-full">
      <div className="bg-[#F4E6C3] py-8 px-4 lg:p-8 rounded-lg drop-shadow w-full">
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
          {/*========================  contact form row first name = last name=======================*/}
          <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between ">
            <div className="form-col w-full md:w-[48%] relative">
              <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                What's your full name?*
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
                  Invalid name. Only letter and space allowed (between 3-20
                  character)
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
                  Invalid name. Only letter and space allowed (min 3 character)
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
                Inquiry type*
              </p>
              <select
                name="comsub"
                id="comsub"
                className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                placeholder="Your email"
                onChange={(e) => checkComSub(e)}
                required
              >
                <option value="">Choose Inquiry Type</option>
                <option value=""> General Question / Information</option>
                <option value="General enquiry">
                  Purchase / Gift Card Support
                </option>
                <option value="Group booking">Billing / Refund Inquiry</option>
                <option value="Birthday party">
                  Technical / Website Issue
                </option>
                <option value="Corporate event">Accessibility Needs</option>
                <option value="Careers">Other / Not Listed Above</option>
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
          {/**================ captcha element */}
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LepEu0qAAAAAFSM_8lLN8LDgmT2qguQGQwV7cPZ" // Replace with your site key
            size="invisible"
            //onChange={setCaptchaToken}
          />
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
              <div className=" font-medium loader">Sending</div>
            </div>
          )}
          {/*======================================contact form button====================== */}
        </form>
      </div>
    </div>
  );
}
