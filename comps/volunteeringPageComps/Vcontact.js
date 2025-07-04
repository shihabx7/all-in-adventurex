import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import GameTitleSeparator from "../util/GameTitleSeparator";

const Vcontact = (props) => {
  const localdataWithMail = props.locationMailData;
  const recaptchaRef = useRef();
  const [reCaptchaToken, setReCaptchaToken] = useState(null);

  const [isSend, setIsSend] = useState(false);
  const [err, setErr] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
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
    botMsg: "",
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
    const locSlug = e.target.value;

    let storeEmail = "";
    let managerEmail = "";
    let tarLoc = "";
    //console.log(data);
    if (locSlug !== "") {
      setErr(false);
      setFormErr({ ...formErr, locErr: false });

      for (let i = 0; i < data.length; i++) {
        if (data[i].locationSlug == locSlug) {
          tarLoc = data[i].locationName;
          storeEmail = data[i].storeEmail;
          managerEmail = data[i].managerEmail;
        }
      }

      setFieldValue({
        ...fieldVlue,
        location: tarLoc,
        storeEmail: storeEmail,
        managerEmail: managerEmail,
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
      setFieldValue({ ...fieldVlue, msg: msg });
    }
  };
  const checkBoot = (e) => {
    const botData = htmlescape(e.target.value.trim());

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
      fieldVlue.inqType.length < 3 ||
      typeof fieldVlue.inqType !== "string" ||
      fieldVlue.location.length < 3 ||
      typeof fieldVlue.location !== "string" ||
      fieldVlue.botMsg.length > 0 ||
      typeof fieldVlue.botMsg !== "string"
    ) {
      return true;
    }

    return false;
  };
  const submitForm = async (event) => {
    event.preventDefault();
    setIsSend(true);
    //console.log(fieldVlue);
    //console.log("clicked");
    //console.log(fieldVlue);
    const isEmpty = checkEmpty();
    if (err || isEmpty) {
      setIsSend(false);
      setErrorMsg("Empty form can't be submitted. Fill required field.");

      // console.log("Empty Err ...");
      return;
    }
    const grcToken = await recaptchaRef.current.executeAsync();
    // console.log("captcha token ..." + grcToken);
    if (!grcToken) {
      setIsSend(false);
      setErrorMsg("Captcha not found. try again");
      return;
    }
    setReCaptchaToken(grcToken);
    const formData = {
      fName: fieldVlue.fName,
      lName: fieldVlue.lName,
      email: fieldVlue.email,
      phone: fieldVlue.phone,
      inqType: fieldVlue.inqType,
      location: fieldVlue.location,
      storeEmail: fieldVlue.storeEmail,
      managerEmail: fieldVlue.managerEmail,
      msg: fieldVlue.msg,
      botMsg: fieldVlue.botMsg,
      captchaToken: grcToken,
    };
    try {
      const response = await fetch("/api/Forms/volunteerContact", {
        method: "POST",
        headers: {
          Accept: "application/json,text/plain,*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setIsSend(false);
      // console.log("Success:" + result.data);
      //console.log(result.success)
      if (response.status == 200) {
        setErrorMsg("");
        setSuccessMsg("Your message has submitted successfully. Thank you.");
        window.location.replace("/thank-you");
        //window.location.href = "//thank-you";
        // console.log("Form submit success " + result.data);
      } else if (response.status == 403) {
        setSuccessMsg("");
        setErrorMsg(result.data.error);
      } else if (response.status == 405) {
        setErrorMsg(result.data.error);
        setSuccessMsg("");
      } else if (response.status == 429) {
        setErrorMsg(
          result.data.error + " Try after" + result.data.resetAfter + " Min"
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
    // ol======
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
            {/*==========================================================contact form to book event======================= */}
            <form onSubmit={(event) => submitForm(event)}>
              {/*======================================contact form row fname+ lname====================== */}
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
                  <input
                    type="text"
                    name="botCheck"
                    onChange={(e) => checkBoot(e)}
                    className="hidden"
                  ></input>
                  <p className="text-sm text-red-600">
                    {formErr.lNameErr ? "Only letter and space alowed" : ""}
                  </p>
                </div>
              </div>
              {/*======================================contact form row ====================== */}
              {/*======================================contact form row email+phone====================== */}
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
              {/*======================================contact form row select inquiry type + location====================== */}
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
                      {props.locationMailData.map((item, index) => {
                        return (
                          <option key={index} value={item.locationSlug}>
                            {item.locationName}
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
              {/**================ captcha element */}
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LepEu0qAAAAAFSM_8lLN8LDgmT2qguQGQwV7cPZ" // Replace with your site key
                size="invisible"
                //onChange={setCaptchaToken}
              />
              {/*======================================contact form row message 
              
              event====================== */}
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
              <span className="font-medium">- Workshop</span> &#40;Girl/Boy
              Scouts, Boys and Girls Club, etc.&#41;
            </p>
            <p className="text-[#464646] xl:text-lg mt-1">
              <span className="font-medium">
                - Neighbor-to-Neighbor Programs
              </span>{" "}
              &#40;Connections with other vendors within malls/shopping
              centers&#41;
            </p>
            <p className="text-[#464646] xl:text-lg mt-1">
              <span className="font-medium">- Space Rental </span>
              &#40;Donate space such as party rooms to groups who need it such
              as a pet adoption event&#41;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vcontact;
