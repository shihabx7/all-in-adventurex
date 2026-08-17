import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect, useRef } from "react";

const MAX_SIZE_MB = 2;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "application/pdf"];

const CorContactAi = (props) => {
  const [locationEmailData, setLocationEmailData] = useState(
    props.locationList || [],
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

  const [selectedFile, setSelectedFile] = useState(null);

  const [fieldVlue, setFieldValue] = useState({
    fName: "",
    email: "",
    phone: "",
    conMethod: "",
    comSubject: "General enquiry",
    bookingOrder: "",
    imgFile: "",
    toEmail: "",
    toMgrEmail: "",
    msg: "",
    botMsg: "",
  });

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const csrfRes = await fetch("/api/Forms/getCsrfToken");
        const resData = await csrfRes.json();
        setCsrfToken(resData.csrfToken);
      } catch (error) {
        setErrorMsg("Failed to fetch CSRF token");
        console.error("Failed to fetch CSRF token:", error);
      }
    };
    fetchCsrfToken();
  }, []);

  const escape = (htmlStr) => {
    return htmlStr
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const checkFName = (e) => {
    const fname = e.target.value.trim();
    const namePatt = /^[a-zA-Z ]*$/;
    if (fname.length > 2 && fname.length < 24) {
      if (!namePatt.test(fname)) {
        setErr(true);
        setFormErr((prev) => ({ ...prev, fNameErr: true }));
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr((prev) => ({ ...prev, fNameErr: false }));
        setFieldValue((prev) => ({ ...prev, fName: fname }));
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr((prev) => ({ ...prev, fNameErr: true }));
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  const checkEmail = (e) => {
    const email = e.target.value.trim();
    const emailPatt =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length > 2) {
      if (!emailPatt.test(email)) {
        setErr(true);
        setFormErr((prev) => ({ ...prev, emailErr: true }));
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr((prev) => ({ ...prev, emailErr: false }));
        setFieldValue((prev) => ({ ...prev, email: email }));
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr((prev) => ({ ...prev, emailErr: true }));
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  const checkPhone = (e) => {
    const phone = e.target.value.trim();
    const numPatt = /^[ 0-9-+/./(/)]*$/;
    if (phone.length > 6 && phone.length < 17) {
      if (!numPatt.test(phone)) {
        setErr(true);
        setFormErr((prev) => ({ ...prev, phoneErr: true }));
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr((prev) => ({ ...prev, phoneErr: false }));
        setFieldValue((prev) => ({ ...prev, phone: phone }));
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr((prev) => ({ ...prev, phoneErr: true }));
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  const checkLocation = (e) => {
    const loc = e.target.value;
    if (loc !== "" && loc !== "0" && locationEmailData[loc]) {
      setErr(false);
      setFormErr((prev) => ({ ...prev, locationErr: false }));
      setFieldValue((prev) => ({
        ...prev,
        toEmail: locationEmailData[loc].attributes.locationInfo.StoreEmail,
        toMgrEmail: locationEmailData[loc].attributes.locationInfo.managerEmail,
      }));
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setErr(true);
      setFormErr((prev) => ({ ...prev, locationErr: true }));
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  const checkConMethod = (e) => {
    const conMet = e.target.value;
    if (conMet !== "0") {
      setErr(false);
      setFormErr((prev) => ({ ...prev, conMethodErr: false }));
      setFieldValue((prev) => ({ ...prev, conMethod: conMet }));
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setErr(true);
      setFormErr((prev) => ({ ...prev, conMethodErr: true }));
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  const checkComSub = (e) => {
    const comSub = e.target.value;
    if (comSub !== "0") {
      setErr(false);
      setFormErr((prev) => ({ ...prev, comErr: false }));
      setFieldValue((prev) => ({ ...prev, comSubject: comSub }));
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setErr(true);
      setFormErr((prev) => ({ ...prev, comErr: true }));
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  const checkBookingOrder = (e) => {
    const orderNo = e.target.value.trim();
    const numPatt = /^[ 0-9-+/./(/)]*$/;
    if (orderNo.length > 3 && orderNo.length < 16) {
      if (!numPatt.test(orderNo)) {
        setErr(true);
        setFormErr((prev) => ({ ...prev, bookingOrderErr: true }));
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr((prev) => ({ ...prev, bookingOrderErr: false }));
        setFieldValue((prev) => ({ ...prev, bookingOrder: orderNo }));
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr((prev) => ({ ...prev, bookingOrderErr: true }));
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  const checkImgFile = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      setFormErr((prev) => ({ ...prev, imgFileErr: false }));
      setSelectedFile(null);
      setFieldValue((prev) => ({ ...prev, imgFile: "" }));
      e.target.classList.remove("focus-red", "focus-green");
      return;
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      setFormErr((prev) => ({ ...prev, imgFileErr: true }));
      setErrorMsg("Invalid type. Please select a valid JPG, PNG, or PDF file.");
      setSelectedFile(null);
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
      return;
    }

    if (file.size > MAX_SIZE_BYTES) {
      setFormErr((prev) => ({ ...prev, imgFileErr: true }));
      setErrorMsg(
        `File is too heavy. Maximum size threshold is ${MAX_SIZE_MB}MB.`,
      );
      setSelectedFile(null);
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
      return;
    }

    setFormErr((prev) => ({ ...prev, imgFileErr: false }));
    setErrorMsg("");
    setSelectedFile(file);
    setFieldValue((prev) => ({ ...prev, imgFile: e.target.value }));
    e.target.classList.remove("focus-red");
    e.target.classList.add("focus-green");
  };

  const getMsg = (e) => {
    const msg = e.target.value.trim();
    if (msg.length > 2) {
      setFieldValue((prev) => ({ ...prev, msg: msg }));
    }
  };

  const checkBoot = (e) => {
    const botData = escape(e.target.value.trim());
    setFieldValue((prev) => ({ ...prev, botMsg: botData }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    console.log("submitted");
    if (Object.values(formErr).some((hasError) => hasError)) {
      setErrorMsg(
        "Please fix form syntax configuration errors before submitting.",
      );
      return;
    }

    if (!reCaptchaToken) {
      setErrorMsg("Please complete the reCAPTCHA checkbox validation.");
      return;
    }

    setIsSend(true);

    const formPayload = new FormData();
    formPayload.append("fName", fieldVlue.fName);
    formPayload.append("email", fieldVlue.email);
    formPayload.append("phone", fieldVlue.phone);
    formPayload.append("conMethod", fieldVlue.conMethod);
    formPayload.append("comSubject", fieldVlue.comSubject);
    formPayload.append("bookingOrder", fieldVlue.bookingOrder);
    formPayload.append("toEmail", fieldVlue.toEmail);
    formPayload.append("toMgrEmail", fieldVlue.toMgrEmail);
    formPayload.append("msg", fieldVlue.msg);
    formPayload.append("botMsg", fieldVlue.botMsg);

    if (csrfToken) formPayload.append("csrfToken", csrfToken);
    formPayload.append("reCaptchaToken", reCaptchaToken);

    if (selectedFile) {
      formPayload.append("file", selectedFile);
    }
    console.log("formData...");
    console.log(JSON.stringify(formPayload));
    try {
      const response = await fetch("/api/Forms/submitContact", {
        method: "POST",
        body: formPayload,
      });
      console.log("sending....");
      const data = await response.json();
      console.log("respose recv");
      if (response.ok) {
        setSuccessMsg(
          "Form parsed, email with attachment processed successfully!",
        );
        setFieldValue({
          fName: "",
          email: "",
          phone: "",
          conMethod: "",
          comSubject: "General enquiry",
          bookingOrder: "",
          imgFile: "",
          toEmail: "",
          toMgrEmail: "",
          msg: "",
          botMsg: "",
        });
        setSelectedFile(null);
        if (recaptchaRef.current) recaptchaRef.current.reset();
        setReCaptchaToken(null);
      } else {
        setErrorMsg(data.error || "Server processing failure encountered.");
      }
    } catch (err) {
      setErrorMsg("Unable to communicate with the remote server.");
    } finally {
      setIsSend(false);
    }
  };

  const onCaptchaChange = (token) => {
    setReCaptchaToken(token);
  };

  return (
    <div className="c-contact corporate-contact w-full">
      {/*======================== corporate contact form=======================*/}

      <div className="c-form-form py-8 px-4 lg:p-8 rounded-lg drop-shadow  w-full">
        <div className="bg-[#F4E6C3] py-8 px-4 lg:p-8 rounded-lg drop-shadow">
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label>Full Name *</label>
              <br />
              <input type="text" onBlur={checkFName} required />
            </div>
            <br />

            <div>
              <label>Email Address *</label>
              <br />
              <input type="email" onBlur={checkEmail} required />
            </div>
            <br />

            <div>
              <label>Phone Number *</label>
              <br />
              <input type="text" onBlur={checkPhone} required />
            </div>
            <br />

            <div>
              <label>Select Location *</label>
              <br />
              <select onChange={checkLocation}>
                <option value="0">-- Choose Location --</option>
                {locationEmailData.map((loc, idx) => (
                  <option key={idx} value={idx + 1}>
                    {loc.attributes?.locationName || `Store Branch #${idx + 1}`}
                  </option>
                ))}
              </select>
            </div>
            <br />

            <div>
              <label>Preferred Contact Method *</label>
              <br />
              <select onChange={checkConMethod}>
                <option value="0">-- Choose Method --</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone Call</option>
              </select>
            </div>
            <br />

            <div>
              <label>Subject Topic *</label>
              <br />
              <select onChange={checkComSub} defaultValue="General enquiry">
                <option value="General enquiry">General enquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
              </select>
            </div>
            <br />

            <div>
              <label>Booking / Order Number</label>
              <br />
              <input type="text" onBlur={checkBookingOrder} />
            </div>
            <br />

            <div>
              <label>Message Comments</label>
              <br />
              <textarea onBlur={getMsg}></textarea>
            </div>
            <br />

            <div style={{ display: "none" }}>
              <input
                type="text"
                onChange={checkBoot}
                value={fieldVlue.botMsg}
              />
            </div>

            <div>
              <label>
                <strong>Optional Attachment (Max 2MB: JPG, PNG, PDF)</strong>
              </label>
              <br />
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={checkImgFile}
                value={fieldVlue.imgFile}
              />
            </div>
            <br />

            <div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={
                  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                }
                onChange={onCaptchaChange}
              />
            </div>
            <br />

            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}

            <button
              className="px-16 py-4 text-white bg-red-600 hover:bg-red-700 rounded-full"
              type="submit"
              disabled={isSend || err}
            >
              {isSend ? "Sending Details..." : "Submit Form"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CorContactAi;
