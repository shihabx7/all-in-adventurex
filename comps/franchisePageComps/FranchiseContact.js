import TitleSeparator from "../util/TitleSeparator";
import { useState } from "react";
import { useRouter } from "next/router";

const FranchiseContactForm = () => {
  const [err, setErr] = useState(false);
  const [emptyErr, setEmptyErr] = useState(true);
  const [formErr, setFormErr] = useState({
    fNameErr: false,
    lNameErr: false,
    emailErr: false,
    phoneErr: false,
    cityErr: false,
    stateErr: false,
    stateErr: false,
    addressErr: false,
    netWorthErr: false,
    liqAssetErr: false,
    visitAIAErr: false,
    fchoiceCityErr: false,
    schoiceCityErr: false,
    pTimeErr: false,
    otherFErr: false,
    planForVentureErr: false,
  });
  const [fieldVlue, setFieldValue] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    address: "",
    netWorth: "",
    liqAssets: "",
    visitAIA: "",
    preferredstate: "",
    planForVenture: "",
    fchoiceCity: "",
    schoiceCity: "",
    preferredTimeFrame: "",
    otherInvolvement: "",
    opPlan: "",
    profExp: "",
    urBelieve: "",
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

  // ========================================================phone validation validation end=================

  //================================your state==================
  const getYourState = (e) => {
    const urstate = e.target.value.trim();

    if (urstate != "") {
      setErr(false);
      setFormErr({ ...formErr, stateErr: false });
      setFieldValue({ ...fieldVlue, state: urstate });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setErr(true);
      setFormErr({ ...formErr, stateErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  //================================your state end==================

  // ========================================================city name validation=================
  const checkCity = (e) => {
    const cityname = e.target.value.trim();

    const namePatt = /^[a-zA-Z0-9- ]*$/;
    if (cityname.length > 2 && cityname.length < 21) {
      if (!namePatt.test(cityname)) {
        setErr(true);
        setFormErr({ ...formErr, cityErr: true });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr({ ...formErr, cityErr: false });
        setFieldValue({ ...fieldVlue, city: cityname });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr({ ...formErr, cityErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // ========================================================city validation=================
  // ========================================================address validation =================
  const checkAddress = (e) => {
    const address = e.target.value.trim();

    const namePatt = /^[a-zA-Z0-9-,.#_/(//)/ ]*$/;
    if (address.length > 3 && address.length < 68) {
      if (!namePatt.test(address)) {
        setErr(true);
        setFormErr({ ...formErr, addressErr: true });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr({ ...formErr, addressErr: false });
        setFieldValue({ ...fieldVlue, address: address });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr({ ...formErr, addressErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // ========================================================address validation end=================
  // ========================================================Net Worth validation =================
  const checkNetWorth = (e) => {
    const nworth = e.target.value.trim();

    const namePatt = /^[a-zA-Z0-9,.-]*$/;
    if (nworth.length > 0 && nworth.length < 25) {
      if (!namePatt.test(nworth)) {
        setErr(true);
        setFormErr({ ...formErr, netWorthErr: true });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr({ ...formErr, netWorthErr: false });
        setFieldValue({ ...fieldVlue, netWorth: nworth });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr({ ...formErr, netWorthErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // ========================================================Net Worth validation end=================
  // ========================================================Liq assest validation =================
  const checkLiqAssets = (e) => {
    const lqAssets = e.target.value.trim();

    const namePatt = /^[a-zA-Z0-9,.-]*$/;
    if (lqAssets.length > 0 && lqAssets.length < 25) {
      if (!namePatt.test(lqAssets)) {
        setErr(true);
        setFormErr({ ...formErr, liqAssetErr: true });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr({ ...formErr, liqAssetErr: false });
        setFieldValue({ ...fieldVlue, liqAssets: lqAssets });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setErr(true);
      setFormErr({ ...formErr, liqAssetErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // ========================================================Liq assest validation end=================
  // ========================================================have you ever visit AIA validation=================

  const visitAIA = (e) => {
    const vsitaia = e.target.value.trim();

    if (vsitaia != "") {
      setErr(false);
      setFormErr({ ...formErr, visitAIAErr: false });
      setFieldValue({ ...fieldVlue, visitAIA: vsitaia });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setErr(true);
      setFormErr({ ...formErr, visitAIAErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  // ========================================================have you ever visit AIA  validation end=================
  //================================preferred state to open a new venue==================
  const pState = (e) => {
    const preferredstate = e.target.value.trim();

    if (preferredstate != "") {
      // setErr(false)
      //setFormErr({...formErr,visitAIAErr:false})
      setFieldValue({ ...fieldVlue, preferredstate: preferredstate });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      // setErr(true)
      //setFormErr({...formErr,visitAIAErr:true})
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  //================================preferred state to open a new venue state==================
  // ========================================================first choise city name validation=================
  const fchoiceCity = (e) => {
    const fcityname = e.target.value.trim();

    const namePatt = /^[a-zA-Z0-9- ]*$/;
    if (fcityname.length > 2 && fcityname.length < 21) {
      if (!namePatt.test(fcityname)) {
        setErr(true);
        setFormErr({ ...formErr, fchoiceCityErr: true });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr({ ...formErr, fchoiceCityErr: false });
        setFieldValue({ ...fieldVlue, fchoiceCity: fcityname });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setFieldValue({ ...fieldVlue, fchoiceCity: "" });
    }
  };
  // ========================================================first choise validation=================
  // ========================================================2nd  choise city name validation=================
  const schoiceCity = (e) => {
    const scityname = e.target.value.trim();

    const namePatt = /^[a-zA-Z0-9- ]*$/;
    if (scityname.length > 2 && scityname.length < 21) {
      if (!namePatt.test(scityname)) {
        setErr(true);
        setFormErr({ ...formErr, schoiceCityErr: true });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setErr(false);
        setFormErr({ ...formErr, schoiceCityErr: false });
        setFieldValue({ ...fieldVlue, schoiceCity: scityname });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setFieldValue({ ...fieldVlue, schoiceCity: "" });
    }
  };
  // ========================================================2nd choise validation end=================
  // ========================================================2nd  choise city name validation=================
  const getOtherInv = (e) => {
    const otherinv = e.target.value.trim();

    if (otherinv == "") {
      setErr(true);
      setFormErr({ ...formErr, otherFErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    } else {
      setErr(false);
      setFormErr({ ...formErr, otherFErr: false });
      setFieldValue({ ...fieldVlue, otherInvolvement: otherinv });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    }
  };
  // ========================================================2nd choise validation end=================

  // ========================================================getPreferredTimefame validation=================
  const getPreferredTimefame = (e) => {
    const ptime = e.target.value.trim();

    if (ptime == null || ptime == "" || ptime == undefined) {
      setErr(true);
      setFormErr({ ...formErr, pTimeErr: true });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    } else {
      setErr(false);
      setFormErr({ ...formErr, pTimeErr: false });
      setFieldValue({ ...fieldVlue, preferredTimeFrame: ptime });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    }
  };
  // ========================================================getPreferredTimefame validation end=================

  // geet msg text escape
  const escape = (htmlStr) => {
    return htmlStr
      .replace(/&/g, "and")
      .replace(/</g, " ")
      .replace(/>/g, " ")
      .replace(/(?:\r\n|\r|\n)/g, "<br>");
  };
  // ========================================================plan for venture=================
  const getPlanForVenture = (e) => {
    const planV = escape(e.target.value.trim());
    if (planV.length > 3) {
      setFieldValue({ ...fieldVlue, planForVenture: planV });
      setErr(false);
      setFormErr({ ...formErr, planForVentureErr: false });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setErr(true);
      setFormErr({ ...formErr, planForVentureErr: true });
      setFieldValue({ ...fieldVlue, planForVentureErr: "" });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  // ========================================================plan for venture end=================
  // ========================================================your operations plan=================
  const getOpPlan = (e) => {
    const planOp = e.target.value.trim();
    if (planOp.length > 3) {
      setFieldValue({ ...fieldVlue, opPlan: escape(planOp) });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  // ========================================================your operations plan end=================
  // ======================================================== professional/relevant experiences=================
  const getProfExp = (e) => {
    const profexp = e.target.value.trim();
    if (profexp.length > 3) {
      setFieldValue({ ...fieldVlue, profExp: escape(profexp) });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  // ======================================================== professional/relevant experiences end=================
  // =======================================================you believe=================
  const getUrBlv = (e) => {
    const urblv = e.target.value.trim();
    if (urblv.length > 3) {
      setFieldValue({ ...fieldVlue, urBelieve: escape(urblv) });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  // ========================================================you believe end=================
  const [isSend, setIsSend] = useState(false);
  const submitFranchiseForm = async (event) => {
    event.preventDefault();
    if (!err) {
      //  console.log("Sending..."+fieldVlue)

      setIsSend(true);
      const response = await fetch("/api/Forms/fransContact", {
        method: "POST",
        headers: {
          Accept: "application/json,text/plain,*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fieldVlue),
      });
      const result = await response.json();
      //  console.log(result.data)
      // console.log(result.success)
      if (result.success) {
        setIsSend(false);
        window.location.replace("/thank-you-franchise");
        //window.location.href = "/thank-you-franchise";
      } else {
        setIsSend(false);
      }
    } else {
      console.log(formErr);
    }
  };

  return (
    <div
      id="fransform"
      className="our-mission-vission relative bg-center bg-cover"
      style={{ backgroundImage: 'url("/assets/game-dt-bg.jpg")' }}
    >
      <div className="w-full absolute top-0 left-0 ">
        <img className="w-full" src="/assets/game-home-or1.jpg"></img>{" "}
      </div>
      <div className="section-container max-w-7xl mx-auto  py-24 md:py-30 lg:py-40 relative z-30">
        <div className="section-title px-4 mb-8">
          <p className="text-lg text-center text-[#938056]">
            LET'S GET STARTED
          </p>
          <TitleSeparator
            title="SUBMIT THE FRANCHISE INQUIRY FORM"
            color="dark-gold"
            weight="font-bold"
          />
        </div>

        <div className="frans-contact-box max-w-[1000px] mx-auto">
          <div className="contact-form-bg bg-[#F4E6C3] px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12 md:rounded">
            {/*==========================================================contact form to book event======================= */}
            <form onSubmit={(event) => submitFranchiseForm(event)}>
              {/*======================================contact form row CHECK BOX====================== */}

              {/*======================================contact form row====================== */}
              {/**============CONTACT DETAILS===========section==================== */}
              <div className="frans-contact-details ">
                <div className="group-head my-4 pb-1 border-b border-[#855800]">
                  <h3 className="text-xl md:text-2xl">CONTACT DETAILS</h3>
                </div>
                {/*======================================contact form row fname-last-name====================== */}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between ">
                  <div className="form-col w-full md:w-[49%] lg:w-[49%]">
                    <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      What's your first name?*
                    </p>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      onChange={(e) => checkFName(e)}
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="Your first name"
                      required
                    ></input>
                    {formErr.fNameErr && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Invalid name. Only letter and space allowed (between
                        3-20 character)
                      </p>
                    )}
                  </div>
                  <div className="form-col w-full md:w-[49%] lg:w-[49%]">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      What's your last name?*
                    </p>
                    <input
                      type="text"
                      onChange={(e) => checkLName(e)}
                      name="lname"
                      id="lname"
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="Your last name"
                      required
                    ></input>
                    {formErr.lNameErr && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr">
                        Invalid name. Only letter and space allowed (min 3
                        character)
                      </p>
                    )}
                  </div>
                </div>
                {/*======================================contact form fname-last-name end====================== */}
                {/*======================================contact form Email+ Phone====================== */}
                <div className="form-row flex flex-col space-y-3 md:flex-row md:space-y-0 justify-between my-3 md:my-4 ">
                  <div className="form-col w-full md:w-[49%] lg:w-[49%]">
                    <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Email*
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
                      <p className="cor-form-err  mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Invalid email address
                      </p>
                    )}
                  </div>
                  <div className="form-col  w-full md:w-[49%] lg:w-[49%]">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Phone number*
                    </p>
                    <input
                      type="tel"
                      onChange={(e) => checkPhone(e)}
                      name="phone"
                      id="phone"
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="Your phone number"
                      required
                    ></input>
                    {formErr.phoneErr && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Invalid Phone Number
                      </p>
                    )}
                  </div>
                </div>
                {/*======================================contact form Email+ Phone end====================== */}
                {/*======================================contact form row select state====================== */}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between ">
                  <div className="form-col w-full md:w-[49%] lg:w-[49%]">
                    <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      City*{" "}
                    </p>
                    <input
                      type="text"
                      onChange={(e) => checkCity(e)}
                      name="city"
                      id="city"
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="Your city name"
                      required
                    ></input>
                    {formErr.cityErr && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Invalid city name
                      </p>
                    )}
                  </div>
                  <div className="form-col w-full md:w-[49%] lg:w-[49%]">
                    <p className=" mb-1 lg:text-lg  evevt-input-label text-[#313030]">
                      State*{" "}
                    </p>
                    <select
                      type="text"
                      name="state"
                      id="state"
                      className="w-full event-input text-gray-700 border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      onChange={(e) => getYourState(e)}
                      required
                    >
                      <option value="">Select your state</option>
                      <option value="Alabama">Alabama</option>
                      <option value="Alaska">Alaska</option>
                      <option value="Arizona">Arizona</option>
                      <option value="Arkansas">Arkansas</option>
                      <option value="California">California</option>
                      <option value="Colorado">Colorado</option>
                      <option value="Connecticut">Connecticut</option>
                      <option value="Delaware">Delaware</option>
                      <option value="District of Columbia">
                        District of Columbia
                      </option>
                      <option value="Florida">Florida</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Guam">Guam</option>
                      <option value="Hawaii">Hawaii</option>
                      <option value="Idaho">Idaho</option>
                      <option value="Illinois">Illinois</option>
                      <option value="Indiana">Indiana</option>
                      <option value="Iowa">Iowa</option>
                      <option value="Kansas">Kansas</option>
                      <option value="Kentucky">Kentucky</option>
                      <option value="Louisiana">Louisiana</option>
                      <option value="Maine">Maine</option>
                      <option value="Maryland">Maryland</option>
                      <option value="Massachusetts">Massachusetts</option>
                      <option value="Michigan">Michigan</option>
                      <option value="Minnesota">Minnesota</option>
                      <option value="Mississippi">Mississippi</option>
                      <option value="Missouri">Missouri</option>
                      <option value="Montana">Montana</option>
                      <option value="Nebraska">Nebraska</option>
                      <option value="Nevada">Nevada</option>
                      <option value="New Hampshire">New Hampshire</option>
                      <option value="New Jersey">New Jersey</option>
                      <option value="New Mexico">New Mexico</option>
                      <option value="New York">New York</option>
                      <option value="North Carolina">North Carolina</option>
                      <option value="North Dakota">North Dakota</option>
                      <option value="Northern Marianas Islands">
                        Northern Marianas Islands
                      </option>
                      <option value="Ohio">Ohio</option>
                      <option value="Oklahoma">Oklahoma</option>
                      <option value="Oregon">Oregon</option>
                      <option value="Pennsylvania">Pennsylvania</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Rhode Island">Rhode Island</option>
                      <option value="South Carolina">South Carolina</option>
                      <option value="South Dakota">South Dakota</option>
                      <option value="Tennessee">Tennessee</option>
                      <option value="Texas">Texas</option>
                      <option value="Utah">Utah</option>
                      <option value="Vermont">Vermont</option>
                      <option value="Virginia">Virginia</option>
                      <option value="Virgin Islands">Virgin Islands</option>
                      <option value="Washington">Washington</option>
                      <option value="West Virginia">West Virginia</option>
                      <option value="Wisconsin">Wisconsin</option>
                      <option value="Wyoming">Wyoming</option>
                    </select>
                    {formErr.stateErr && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Select your state
                      </p>
                    )}
                  </div>
                </div>
                {/*======================================contact form row select state end====================== */}

                {/*======================================contact form row address====================== */}
                <div className="form-row flex justify-between my-4 ">
                  <div className="form-col w-full">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Address*
                    </p>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      onChange={(e) => checkAddress(e)}
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="Your address"
                      required
                    ></input>
                    {formErr.addressErr && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Invalid address
                      </p>
                    )}
                  </div>
                </div>
                {/*======================================contact form row address end===================== */}
              </div>
              {/**============CONTACT DETAILS===========section end==================== */}

              {/**============ABOUT you===========section ==================== */}
              <div className="fran-cont-about">
                <div className="group-head mt-8 md:mt-10 lg:mt-12 mb-4 pb-1 border-b border-[#855800]">
                  <h3 className="text-xl md:text-2xl">ABOUT YOU</h3>
                </div>
                {/*======================================contact form row What's your current net worth?===================== */}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between ">
                  <div className="form-col md:w-[49%] lg:w-[49%]">
                    <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Your current net worth?*
                    </p>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      onChange={(e) => checkNetWorth(e)}
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder=""
                      required
                    ></input>
                    {formErr.netWorthErr && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Invalid net worth
                      </p>
                    )}
                  </div>
                  <div className="form-col md:w-[49%] lg:w-[49%]">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Your current liquid assets (investor/loaned)?*
                    </p>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      onChange={(e) => checkLiqAssets(e)}
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder=""
                      required
                    ></input>
                    {formErr.liqAssetErr && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Invalid liquid assets
                      </p>
                    )}
                  </div>
                </div>

                {/*======================================contact What's your current net worth?====================== */}
                {/*======================================contact form row message What is your plan for funding a venture of this nature?====================== */}
                <div className="form-row flex justify-between my-4 ">
                  <div className="form-col w-full">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      What is your plan for funding a venture of this nature?*{" "}
                    </p>

                    <textarea
                      id="fplan"
                      name="flan"
                      onChange={(e) => getPlanForVenture(e)}
                      className="w-full h-[100px] md:h-[120px] event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="Write your plan here"
                      required
                    ></textarea>
                    {formErr.planForVentureErr && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr ">
                        This field must not be empty. (3-260 character allowed)
                      </p>
                    )}
                  </div>
                </div>
                {/*======================================contact form row What is your plan for funding a venture of this nature?====================== */}

                {/*======================================contact form Have you visited ?===================== */}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-4">
                  <div className="form-col md:w-[49%] lg:w-[49%]">
                    <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Have you visited an ALL IN ADVENTURES before?*
                    </p>
                    <select
                      id="vsitaia"
                      name="vsitaia"
                      onChange={(e) => visitAIA(e)}
                      className="w-full event-input text-gray-700  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      required
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    {formErr.visitAIAErr && (
                      <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Invalid Phone Number
                      </p>
                    )}
                  </div>
                  <div className="form-col md:w-[49%] lg:w-[49%]">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Your preferred state to open a new venue? *
                    </p>
                    <select
                      type="text"
                      id="pstate"
                      name="pstate"
                      onChange={(e) => pState(e)}
                      className="w-full event-input text-gray-700  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      required
                    >
                      <option value="">Select preferred state</option>
                      <option value="Alabama">Alabama</option>
                      <option value="Alaska">Alaska</option>
                      <option value="Arizona">Arizona</option>
                      <option value="Arkansas">Arkansas</option>
                      <option value="California">California</option>
                      <option value="Colorado">Colorado</option>
                      <option value="Connecticut">Connecticut</option>
                      <option value="Delaware">Delaware</option>
                      <option value="District of Columbia">
                        District of Columbia
                      </option>
                      <option value="Florida">Florida</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Guam">Guam</option>
                      <option value="Hawaii">Hawaii</option>
                      <option value="Idaho">Idaho</option>
                      <option value="Illinois">Illinois</option>
                      <option value="Indiana">Indiana</option>
                      <option value="Iowa">Iowa</option>
                      <option value="Kansas">Kansas</option>
                      <option value="Kentucky">Kentucky</option>
                      <option value="Louisiana">Louisiana</option>
                      <option value="Maine">Maine</option>
                      <option value="Maryland">Maryland</option>
                      <option value="Massachusetts">Massachusetts</option>
                      <option value="Michigan">Michigan</option>
                      <option value="Minnesota">Minnesota</option>
                      <option value="Mississippi">Mississippi</option>
                      <option value="Missouri">Missouri</option>
                      <option value="Montana">Montana</option>
                      <option value="Nebraska">Nebraska</option>
                      <option value="Nevada">Nevada</option>
                      <option value="New Hampshire">New Hampshire</option>
                      <option value="New Jersey">New Jersey</option>
                      <option value="New Mexico">New Mexico</option>
                      <option value="New York">New York</option>
                      <option value="North Carolina">North Carolina</option>
                      <option value="North Dakota">North Dakota</option>
                      <option value="Northern Marianas Islands">
                        Northern Marianas Islands
                      </option>
                      <option value="Ohio">Ohio</option>
                      <option value="Oklahoma">Oklahoma</option>
                      <option value="Oregon">Oregon</option>
                      <option value="Pennsylvania">Pennsylvania</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Rhode Island">Rhode Island</option>
                      <option value="South Carolina">South Carolina</option>
                      <option value="South Dakota">South Dakota</option>
                      <option value="Tennessee">Tennessee</option>
                      <option value="Texas">Texas</option>
                      <option value="Utah">Utah</option>
                      <option value="Vermont">Vermont</option>
                      <option value="Virginia">Virginia</option>
                      <option value="Virgin Islands">Virgin Islands</option>
                      <option value="Washington">Washington</option>
                      <option value="West Virginia">West Virginia</option>
                      <option value="Wisconsin">Wisconsin</option>
                      <option value="Wyoming">Wyoming</option>
                    </select>
                  </div>
                </div>

                {/*======================================contact Have you visited ? end====================== */}
                {/*======================================contact form first choice/second choice===================== */}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-4 ">
                  <div className="form-col md:w-[49%] lg:w-[49%]">
                    <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Do you have a first choice city/town in mind?*
                    </p>
                    <input
                      type="text"
                      id="fchoice"
                      name="fchoice"
                      onChange={(e) => fchoiceCity(e)}
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="City/Town"
                      required
                    ></input>
                    {formErr.fchoiceCityErr && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr">
                        Invalid name. Only letter and space allowed (min 3
                        character)
                      </p>
                    )}
                  </div>
                  <div className="form-col md:w-[49%] lg:w-[49%]">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Do you have a second choice, if your first isn't
                      available?*
                    </p>
                    <input
                      type="text"
                      id="schoice"
                      name="schoice"
                      onChange={(e) => schoiceCity(e)}
                      className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="City/Town"
                      required
                    ></input>
                    {formErr.schoiceCityErr && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr">
                        Invalid name. Only letter and space allowed (min 3
                        character)
                      </p>
                    )}
                  </div>
                </div>

                {/*======================================contact choice/second choice====================== */}
                {/*======================================contact form preferred timeframe?===================== */}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-4">
                  <div className="form-col md:w-[49%] lg:w-[49%]">
                    <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      What is your preferred timeframe?*
                    </p>
                    <input
                      type="date"
                      id="schoice"
                      name="schoice"
                      onChange={(e) => getPreferredTimefame(e)}
                      className="w-full event-input text-gray-700  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder=""
                      required
                    ></input>
                    {formErr.pTimeErr && (
                      <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Invalid date
                      </p>
                    )}
                  </div>
                  <div className="form-col md:w-[49%] lg:w-[49%]">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Do you have any involvement with other franchisees?*
                    </p>
                    <select
                      id="schoice"
                      name="schoice"
                      onChange={(e) => getOtherInv(e)}
                      className="w-full event-input text-gray-700  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder=""
                      required
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    {formErr.otherFErr && (
                      <p className="cor-form-err md:absolute md:left-0 md:top-[100%] mt-1 evevt-input-label text-[#E1001A] fErr ">
                        Select Answer
                      </p>
                    )}
                  </div>
                </div>

                {/*======================================contact Have preferred timeframe?====================== */}
                {/*======================================contact form row message Tell us a little about your operations plan??====================== */}
                <div className="form-row flex justify-between my-4 ">
                  <div className="form-col w-full">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Tell us a little about your operations plan?*
                    </p>

                    <textarea
                      id="oplan"
                      name="oplan"
                      onChange={(e) => getOpPlan(e)}
                      className="w-full h-[100px] md:h-[120px]  event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="Write your operations plan here"
                      required
                    ></textarea>
                  </div>
                </div>
                {/*======================================contact form row Tell us a little about your operations plan??====================== */}
                {/*======================================contact form row Tell us about your other professional/relevant experiences?====================== */}
                <div className="form-row flex justify-between my-4 ">
                  <div className="form-col w-full">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      Tell us about your other professional/relevant
                      experiences?*
                    </p>

                    <textarea
                      id="oExp"
                      name="oExp"
                      onChange={(e) => getProfExp(e)}
                      className="w-full h-[100px] md:h-[120px]  event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="Write about your experiences here"
                      required
                    ></textarea>
                  </div>
                </div>
                {/*======================================contact form row Tell us about your other professional/relevant experiences?====================== */}
                {/*======================================contact form row Tell us about your other professional/relevant experiences?====================== */}
                <div className="form-row flex justify-between my-4 ">
                  <div className="form-col w-full">
                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
                      What do you believe will make you a great ALL IN
                      ADVENTURES franchisee?*
                    </p>

                    <textarea
                      id="urBlv"
                      name="urBlv"
                      onChange={(e) => getUrBlv(e)}
                      className="w-full h-[100px] md:h-[120px]  event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                      placeholder="Write your message here"
                      required
                    ></textarea>
                  </div>
                </div>
                {/*======================================contact form row Tell us about your other professional/relevant experiences?====================== */}
                {!isSend && (
                  <div className="form-row flex justify-center  mt-8 ">
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

                {/*======================================contact form row message event====================== */}
              </div>

              {/**============about you===========section end==================== */}
            </form>
            {/*==========================================================contact form to book event end======================= */}
          </div>
        </div>
      </div>

      <div className="w-full absolute bottom-0 left-0 ">
        <img className="w-full" src="/assets/game-home-or2.jpg"></img>{" "}
      </div>
    </div>
  );
};

export default FranchiseContactForm;
