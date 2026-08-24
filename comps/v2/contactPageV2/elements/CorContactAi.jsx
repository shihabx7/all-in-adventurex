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

const re = [
  {
    id: 6855,
    attributes: {
      publishDate: "2026-11-23",
      createdAt: "2025-12-05T21:21:51.840Z",
      updatedAt: "2025-12-05T21:21:55.035Z",
      publishedAt: "2025-12-05T21:21:55.032Z",
      photos: {
        data: [
          {
            id: 40967,
            attributes: {
              name: "IMG_2710.png",
              url: "/uploads/IMG_2710_ddab76f601.png",
              alternativeText: null,
              width: 5376,
              height: 3024,
            },
          },
          {
            id: 40968,
            attributes: {
              name: "IMG_2709.png",
              url: "/uploads/IMG_2709_d75570de35.png",
              alternativeText: null,
              width: 5376,
              height: 3024,
            },
          },
          {
            id: 40969,
            attributes: {
              name: "IMG_2707.png",
              url: "/uploads/IMG_2707_1c48e58155.png",
              alternativeText: null,
              width: 5376,
              height: 3024,
            },
          },
          {
            id: 40970,
            attributes: {
              name: "IMG_2708.png",
              url: "/uploads/IMG_2708_f54834fe66.png",
              alternativeText: null,
              width: 5376,
              height: 3024,
            },
          },
          {
            id: 40971,
            attributes: {
              name: "IMG_2704.png",
              url: "/uploads/IMG_2704_d523be6577.png",
              alternativeText: null,
              width: 5376,
              height: 3024,
            },
          },
          {
            id: 40972,
            attributes: {
              name: "IMG_2705.png",
              url: "/uploads/IMG_2705_42d517854c.png",
              alternativeText: null,
              width: 5376,
              height: 3024,
            },
          },
          {
            id: 40973,
            attributes: {
              name: "IMG_2706.png",
              url: "/uploads/IMG_2706_f39c73eda5.png",
              alternativeText: null,
              width: 5376,
              height: 3024,
            },
          },
        ],
      },
      location: {
        data: {
          id: 23,
          attributes: {
            createdAt: "2024-01-24T13:43:51.080Z",
            updatedAt: "2026-06-22T20:30:31.519Z",
            publishedAt: "2024-08-04T23:24:33.148Z",
            locationName: "Rockaway, NJ",
            slug: "rockaway-nj",
            priority: 62,
            isPublished: true,
          },
        },
      },
    },
  },
  {
    id: 10328,
    attributes: {
      publishDate: "2026-08-23",
      createdAt: "2026-08-23T21:57:38.165Z",
      updatedAt: "2026-08-23T21:57:41.223Z",
      publishedAt: "2026-08-23T21:57:41.216Z",
      photos: {
        data: [
          {
            id: 63275,
            attributes: {
              name: "Photoroom_20260823_162141.jpeg",
              url: "/uploads/Photoroom_20260823_162141_bb7a16af52.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63276,
            attributes: {
              name: "Photoroom_20260823_165430.jpeg",
              url: "/uploads/Photoroom_20260823_165430_b735c7a6fe.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63277,
            attributes: {
              name: "Photoroom_20260823_145256.jpeg",
              url: "/uploads/Photoroom_20260823_145256_df7ed9a843.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63278,
            attributes: {
              name: "Photoroom_20260823_173510.jpeg",
              url: "/uploads/Photoroom_20260823_173510_97c39fa49c.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63279,
            attributes: {
              name: "Photoroom_20260823_174007.jpeg",
              url: "/uploads/Photoroom_20260823_174007_60d6b54fa1.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63280,
            attributes: {
              name: "Photoroom_20260823_143007.jpeg",
              url: "/uploads/Photoroom_20260823_143007_3947684e75.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63281,
            attributes: {
              name: "Photoroom_20260823_142208.jpeg",
              url: "/uploads/Photoroom_20260823_142208_6ce84ae467.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63282,
            attributes: {
              name: "Photoroom_20260823_130146.jpeg",
              url: "/uploads/Photoroom_20260823_130146_c9dbc3401f.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63283,
            attributes: {
              name: "Photoroom_20260823_132557.jpeg",
              url: "/uploads/Photoroom_20260823_132557_3dd6e05133.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63284,
            attributes: {
              name: "Photoroom_20260823_141050.jpeg",
              url: "/uploads/Photoroom_20260823_141050_33ba95e6aa.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
        ],
      },
      location: {
        data: {
          id: 17,
          attributes: {
            createdAt: "2024-01-24T13:43:51.080Z",
            updatedAt: "2026-06-22T20:03:55.721Z",
            publishedAt: "2024-08-04T23:50:23.193Z",
            locationName: "Manchester, CT",
            slug: "manchester-ct",
            priority: 32,
            isPublished: true,
          },
        },
      },
    },
  },
  {
    id: 10311,
    attributes: {
      publishDate: "2026-08-23",
      createdAt: "2026-08-23T00:28:37.840Z",
      updatedAt: "2026-08-23T00:28:38.666Z",
      publishedAt: "2026-08-23T00:28:38.663Z",
      photos: {
        data: [
          {
            id: 63106,
            attributes: {
              name: "IMG_20260822_121523_725.jpg",
              url: "/uploads/IMG_20260822_121523_725_a803ca4947.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63105,
            attributes: {
              name: "IMG_20260822_173758_517.jpg",
              url: "/uploads/IMG_20260822_173758_517_c7786a34f2.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63104,
            attributes: {
              name: "IMG_20260822_182337_434.jpg",
              url: "/uploads/IMG_20260822_182337_434_c4c79d49c5.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63103,
            attributes: {
              name: "IMG_20260822_185355_548.jpg",
              url: "/uploads/IMG_20260822_185355_548_73284bfdb4.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63102,
            attributes: {
              name: "IMG_20260822_165544_035.jpg",
              url: "/uploads/IMG_20260822_165544_035_e16a652060.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63101,
            attributes: {
              name: "IMG_20260822_201935_161.jpg",
              url: "/uploads/IMG_20260822_201935_161_a5b7f1b914.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
        ],
      },
      location: {
        data: {
          id: 2,
          attributes: {
            createdAt: "2024-01-24T13:43:51.080Z",
            updatedAt: "2026-06-22T19:21:50.184Z",
            publishedAt: "2024-01-24T14:51:28.412Z",
            locationName: "Albany, NY",
            slug: "albany-ny",
            priority: 1,
            isPublished: true,
          },
        },
      },
    },
  },
  {
    id: 10324,
    attributes: {
      publishDate: "2026-08-23",
      createdAt: "2026-08-23T20:47:19.346Z",
      updatedAt: "2026-08-23T20:47:21.490Z",
      publishedAt: "2026-08-23T20:47:21.487Z",
      photos: {
        data: [
          {
            id: 63236,
            attributes: {
              name: "IMG_6935513808144856887 (1).jpg",
              url: "/uploads/IMG_6935513808144856887_1_b92c0668ca.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63237,
            attributes: {
              name: "IMG_5972367327735304683 (1).jpg",
              url: "/uploads/IMG_5972367327735304683_1_24ef1ea9a1.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
        ],
      },
      location: {
        data: {
          id: 20,
          attributes: {
            createdAt: "2024-01-24T13:43:51.080Z",
            updatedAt: "2026-06-22T20:22:29.500Z",
            publishedAt: "2024-08-04T23:50:45.528Z",
            locationName: "Bowie, MD",
            slug: "bowie-md",
            priority: 51,
            isPublished: true,
          },
        },
      },
    },
  },
  {
    id: 10310,
    attributes: {
      publishDate: "2026-08-23",
      createdAt: "2026-08-23T00:27:33.293Z",
      updatedAt: "2026-08-23T21:53:37.578Z",
      publishedAt: "2026-08-23T00:27:34.437Z",
      photos: {
        data: [
          {
            id: 63256,
            attributes: {
              name: "Photoroom_20260823_130551.jpeg",
              url: "/uploads/Photoroom_20260823_130551_92ce467925.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63257,
            attributes: {
              name: "Photoroom_20260823_133211.jpeg",
              url: "/uploads/Photoroom_20260823_133211_7135cde39c.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63258,
            attributes: {
              name: "Photoroom_20260823_164822.jpeg",
              url: "/uploads/Photoroom_20260823_164822_882375b533.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63259,
            attributes: {
              name: "Photoroom_20260823_174136.jpeg",
              url: "/uploads/Photoroom_20260823_174136_f6058a1b1c.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63260,
            attributes: {
              name: "Photoroom_20260823_143116.jpeg",
              url: "/uploads/Photoroom_20260823_143116_c415280b3f.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63261,
            attributes: {
              name: "Photoroom_20260823_144040.jpeg",
              url: "/uploads/Photoroom_20260823_144040_f800d9bffb.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63262,
            attributes: {
              name: "Photoroom_20260823_144321.jpeg",
              url: "/uploads/Photoroom_20260823_144321_71404917d1.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63264,
            attributes: {
              name: "Photoroom_20260823_142928.jpeg",
              url: "/uploads/Photoroom_20260823_142928_b09201af9f.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63263,
            attributes: {
              name: "Photoroom_20260823_154044.jpeg",
              url: "/uploads/Photoroom_20260823_154044_d13348d6c4.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63265,
            attributes: {
              name: "Photoroom_20260823_155733.jpeg",
              url: "/uploads/Photoroom_20260823_155733_43f1da1e2a.jpeg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
        ],
      },
      location: {
        data: {
          id: 5,
          attributes: {
            createdAt: "2024-01-24T13:43:51.080Z",
            updatedAt: "2026-06-22T19:24:49.086Z",
            publishedAt: "2024-08-04T23:46:42.176Z",
            locationName: "Syracuse, NY",
            slug: "syracuse-ny",
            priority: 4,
            isPublished: true,
          },
        },
      },
    },
  },
  {
    id: 10326,
    attributes: {
      publishDate: "2026-08-23",
      createdAt: "2026-08-23T21:55:16.640Z",
      updatedAt: "2026-08-23T21:55:18.778Z",
      publishedAt: "2026-08-23T21:55:18.767Z",
      photos: {
        data: [
          {
            id: 63266,
            attributes: {
              name: "IMG_1185070721677894390.jpg",
              url: "/uploads/IMG_1185070721677894390_28db6ded11.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63267,
            attributes: {
              name: "IMG_8078042136911708554 (1).jpg",
              url: "/uploads/IMG_8078042136911708554_1_9768cc13fc.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63268,
            attributes: {
              name: "IMG_2218346663267425535.jpg",
              url: "/uploads/IMG_2218346663267425535_eaa4e9e6ab.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63269,
            attributes: {
              name: "IMG_3013106235891059641.jpg",
              url: "/uploads/IMG_3013106235891059641_beb0068dde.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63270,
            attributes: {
              name: "IMG_3103827113490274820.jpg",
              url: "/uploads/IMG_3103827113490274820_30d32b8c10.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63272,
            attributes: {
              name: "IMG_39318070844065126 (1).jpg",
              url: "/uploads/IMG_39318070844065126_1_2ac19cce03.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63271,
            attributes: {
              name: "IMG_4795787955612487993 (1).jpg",
              url: "/uploads/IMG_4795787955612487993_1_63b54c5d52.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
        ],
      },
      location: {
        data: {
          id: 24,
          attributes: {
            createdAt: "2024-01-24T13:43:51.080Z",
            updatedAt: "2026-07-02T17:07:53.661Z",
            publishedAt: "2024-08-04T23:31:07.296Z",
            locationName: "Woodbridge, NJ",
            slug: "woodbridge-nj",
            priority: 65,
            isPublished: true,
          },
        },
      },
    },
  },
  {
    id: 10320,
    attributes: {
      publishDate: "2026-08-23",
      createdAt: "2026-08-23T20:37:49.186Z",
      updatedAt: "2026-08-23T20:37:50.811Z",
      publishedAt: "2026-08-23T20:37:50.808Z",
      photos: {
        data: [
          {
            id: 63215,
            attributes: {
              name: "IMG_6935513808144856887 (1).jpg",
              url: "/uploads/IMG_6935513808144856887_1_67568c40b9.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63216,
            attributes: {
              name: "IMG_5972367327735304683 (1).jpg",
              url: "/uploads/IMG_5972367327735304683_1_bf88865ff0.jpg",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
        ],
      },
      location: {
        data: {
          id: 20,
          attributes: {
            createdAt: "2024-01-24T13:43:51.080Z",
            updatedAt: "2026-06-22T20:22:29.500Z",
            publishedAt: "2024-08-04T23:50:45.528Z",
            locationName: "Bowie, MD",
            slug: "bowie-md",
            priority: 51,
            isPublished: true,
          },
        },
      },
    },
  },
  {
    id: 10313,
    attributes: {
      publishDate: "2026-08-23",
      createdAt: "2026-08-23T00:43:02.025Z",
      updatedAt: "2026-08-23T00:43:58.735Z",
      publishedAt: "2026-08-23T00:43:58.731Z",
      photos: { data: null },
      location: {
        data: {
          id: 20,
          attributes: {
            createdAt: "2024-01-24T13:43:51.080Z",
            updatedAt: "2026-06-22T20:22:29.500Z",
            publishedAt: "2024-08-04T23:50:45.528Z",
            locationName: "Bowie, MD",
            slug: "bowie-md",
            priority: 51,
            isPublished: true,
          },
        },
      },
    },
  },
  {
    id: 10325,
    attributes: {
      publishDate: "2026-08-23",
      createdAt: "2026-08-23T21:49:15.064Z",
      updatedAt: "2026-08-23T21:49:18.517Z",
      publishedAt: "2026-08-23T21:49:18.513Z",
      photos: {
        data: [
          {
            id: 63247,
            attributes: {
              name: "Reel of Fortune (3D) (5).png",
              url: "/uploads/Reel_of_Fortune_3_D_5_b074821ec5.png",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63248,
            attributes: {
              name: "Alcatraz (Cellblock) (6).png",
              url: "/uploads/Alcatraz_Cellblock_6_323882f7b6.png",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63249,
            attributes: {
              name: "Treasure (Beach) (1) (29).png",
              url: "/uploads/Treasure_Beach_1_29_efa6b18ca7.png",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63250,
            attributes: {
              name: "Alcatraz (Wanted) (1) (14).png",
              url: "/uploads/Alcatraz_Wanted_1_14_445f42d8bd.png",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63251,
            attributes: {
              name: "Black Ops (Title) (16).png",
              url: "/uploads/Black_Ops_Title_16_a73a72e6ff.png",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63252,
            attributes: {
              name: "Black Ops (Title) (18).png",
              url: "/uploads/Black_Ops_Title_18_01c0c93353.png",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63253,
            attributes: {
              name: "Alcatraz (Cellblock) (8).png",
              url: "/uploads/Alcatraz_Cellblock_8_8df8df8d7e.png",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63254,
            attributes: {
              name: "Alcatraz (Cellblock) (11).png",
              url: "/uploads/Alcatraz_Cellblock_11_39aa33b375.png",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
          {
            id: 63255,
            attributes: {
              name: "Alcatraz (Cellblock) (4).png",
              url: "/uploads/Alcatraz_Cellblock_4_579ce945cd.png",
              alternativeText: null,
              width: 1280,
              height: 720,
            },
          },
        ],
      },
      location: {
        data: {
          id: 25,
          attributes: {
            createdAt: "2024-01-24T13:43:51.080Z",
            updatedAt: "2026-06-22T20:42:09.585Z",
            publishedAt: "2024-08-04T23:51:18.138Z",
            locationName: "Roanoke, VA",
            slug: "roanoke-va",
            priority: 71,
            isPublished: true,
          },
        },
      },
    },
  },
];
