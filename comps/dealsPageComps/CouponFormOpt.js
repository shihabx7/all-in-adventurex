import { useState, useEffect, useRef } from "react";
import { BsFillCheckCircleFill, BsCheck } from "react-icons/bs";
import ReCAPTCHA from "react-google-recaptcha";
import Script from "next/script";
const CouponFormOpt = (props) => {
  const recaptchaRef = useRef();
  const [reCaptchaToken, setReCaptchaToken] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showCoupon, setShowcoupon] = useState(false);
  const [err, setErr] = useState(false);
  const [emptyErr, setEmptyErr] = useState(true);
  const [savedDoller, setSavedDoller] = useState(6);
  const [minAgo, setMinAgo] = useState(2);
  const [isSend, setIsSend] = useState(false);
  const [formErr, setFormErr] = useState({
    nameErr: false,
    emailErr: false,
  });
  const [fieldVlue, setFieldValue] = useState({
    name: "",
    email: "",
    botMsg: "",
  });

  useEffect(() => {
    let sd = (Math.random() * (4.0 - 1.0) + 1.0).toFixed(0);
    let ma = (Math.random() * (40 - 2) + 2).toFixed(0);
    setSavedDoller(sd);
    setMinAgo(ma);
  }, []);

  /*============= coupon form function ===============*/
  // ========================================================last name validation=================
  const checkName = (e) => {
    const name = e.target.value.trim();
    console.log(name);
    const namePatt = /^[a-zA-Z ]*$/;
    if (name.length > 2 && name.length < 21) {
      if (!namePatt.test(name)) {
        setErr(true);
        setFormErr({ ...formErr, nameErr: true });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr({ ...formErr, nameErr: false });
        setFieldValue({ ...fieldVlue, name: name });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr({ ...formErr, nameErr: true });
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
  const checkBoot = (e) => {
    const botData = htmlescape(e.target.value.trim());

    setFieldValue({ ...fieldVlue, botMsg: botData });
  };
  const checkEmpty = () => {
    if (
      fieldVlue.name.length < 3 ||
      typeof fieldVlue.name !== "string" ||
      fieldVlue.email.length < 6 ||
      typeof fieldVlue.email !== "string" ||
      fieldVlue.botMsg.length > 0 ||
      typeof fieldVlue.botMsg !== "string"
    ) {
      return true;
    }

    return false;
  };
  const showcouponnow = async (e) => {
    e.preventDefault();
    setIsSend(true);
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
      name: fieldVlue.name,
      email: fieldVlue.email,
      botMsg: fieldVlue.botMsg,
      captchaToken: grcToken,
    };
    try {
      const response = await fetch("/api/Forms/couponSubmit", {
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
      if (response.status == 200) {
        setErrorMsg("");
        setSuccessMsg("Your message has submitted successfully. Thank you.");
        setShowcoupon(true);
        e.target.reset();
        // window.location.replace("/thank-you");
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
    //===========oldx
  };
  /*============= coupon form function ===============*/
  /**============copy to clipboard==================== */
  const copyCoupon = () => {
    const couponId = document.getElementById("coupon" + props.id);

    if (document.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(couponId);
      range.select();
    } else if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(couponId);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      console.warn("Could not select text in node: Unsupported browser.");
    }
    navigator.clipboard.writeText(couponId.outerText);
  };

  /**============copy to clipboard==================== */
  /*==================== rand saving============== */

  return (
    <div className="couponcard bg-[#FBF2DC] border border-[#DAC89F] rounded-lg drop-shadow-sm my-4 flex flex-col md:flex-row justify-between ">
      <div className=" md:hidden">
        <div className="coupon-form-top flex justify-between items-center  px-[8px] py-[16px] md:py-[14px] lg:py-[16px] rm:px-3 bg-[#111111] rounded-t-[6px]">
          <div className="coupon-varified flex space-x-1 md:space-x-1 items-center uppercase text-[#E0BF62] text-xs rm:text-sm md:text-base">
            <span className="text-sm rm:text-lg md:text-xl">
              <BsFillCheckCircleFill />
            </span>
            <span>VERIFIED</span>
          </div>
          <div className="coupon-varified flex space-x-[2px] md:space-x-1 items-center text-[#E0BF62] text-xs md:text-sm">
            <span className="text-base rm:text-lg md:text-xl">
              <BsCheck />
            </span>
            <span>
              Last user saved
              <span className="font-medium"> ${savedDoller} </span> {minAgo} min
              ago
            </span>
          </div>
        </div>
      </div>
      {/* ==================coupon desc============================= */}
      <div className="copoun-desc-box md:max-w-[48%] lg:max-w-[50%] px-4 py-7 md:px-6 md:py-6 lg:px-7 lg:py-7">
        <div className="coupon-title">
          <p className="md:text-lg text-[#938056]">CURRENT DEALS AND COUPONS</p>
          <h2 className="golden-text font-os font-bold text-[24px] rm:text-[26px] md:text-3xl lg:text-4xl uppercase">
            {props.coupon.coupon_title}
          </h2>
        </div>
        <div className="coupon-desc mt-4 md:mt-4">
          <div
            className="text-[#464646]  lg:text-lg dc-gap"
            dangerouslySetInnerHTML={{ __html: props.coupon.coupon_desc }}
          ></div>
          {props.coupon.social && (
            <div className="flex space-x-4 md:space-x-8 my-4">
              <a
                href="https://www.facebook.com/allinadventure/"
                target="_blank"
                className="cup-social transition duration-300 ease-out hover:drop-shadow-lg hover:scale-105 hover:ease-in"
              >
                <img
                  className="w-[36px] md:w-[42px]"
                  src="/assets/svg/facebook-coupon-icon.svg"
                ></img>
              </a>
              <a
                href="https://www.instagram.com/all_in_adventures/"
                target="_blank"
                className="cup-social transition duration-300 ease-out hover:drop-shadow-lg hover:scale-105 hover:ease-in"
              >
                <img
                  className="w-[36px] md:w-[42px]"
                  src="/assets/svg/instagram-coupon-icon.svg"
                ></img>
              </a>
            </div>
          )}
          {props.coupon.coupon_point_list && (
            <ul className="star-list pl-6 lg:text-lg text-[#464646] mt-4">
              {props.coupon.coupon_point_list.map((point) => {
                return (
                  <li key={point.id} className="my-2">
                    {point.point}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      {/* ==================coupon desc============================= */}
      {/* ==================coupon from============================= */}
      <div className="copoun-form-box bg-[#F4E6C3] grow rounded-b-lg md:rounded-b-[0px] md:rounded-r-[8px]">
        <div className="coupon-form-col ">
          <div className="hidden md:block">
            <div className="coupon-form-top flex justify-between items-center  px-1 py-[12px] md:py-[14px] lg:py-[16px] rm:px-3 bg-[#111111] md:rounded-tr-[8px]">
              <div className="coupon-varified flex space-x-1 md:space-x-1 items-center uppercase text-[#E0BF62] text-xs rm:text-sm md:text-base">
                <span className="text-sm rm:text-lg md:text-xl">
                  <BsFillCheckCircleFill />
                </span>
                <span>VERIFIED</span>
              </div>
              <div className="coupon-varified flex space-x-[2px] md:space-x-1 items-center text-[#E0BF62] text-xs md:text-sm">
                <span className="text-base rm:text-lg md:text-xl">
                  <BsCheck />
                </span>
                <span>
                  Last user saved
                  <span className="font-bold"> ${savedDoller} </span> {minAgo}{" "}
                  min ago
                </span>
              </div>
            </div>
          </div>

          <div className="flodesk-form px-3 py-8 md:px-4 md:pt-5 md:pb-7 lg:px-7 lg:pb-8 ">
            <div id={props.foldeskFormData.divId}></div>
            <Script
              dangerouslySetInnerHTML={{
                __html: `window.fd('form', {
    formId: '${props.foldeskFormData.formId}',
    containerEl: '${props.foldeskFormData.elId}'
  })`,
              }}
            />
          </div>
        </div>
      </div>
      {/* ==================coupon form============================= */}
    </div>
  );
};

export default CouponFormOpt;
