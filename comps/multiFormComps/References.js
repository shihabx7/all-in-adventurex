import { FiPlus, FiMinus, FiX } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

const References = ({
  references,
  setReferences,
  setFormErrFlag,
  refPrevErr,
}) => {
  const [exp, setExp] = useState(1);
  const [showDs, setShowDs] = useState(false);

  const dsref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showDs && dsref.current && !dsref.current.contains(e.target)) {
        setShowDs(false);
      }
    };

    document.addEventListener("mouseup", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mouseup", checkIfClickedOutside);
    };
  }, [showDs]);

  // reff errors
  const [refErr, setRefErr] = useState({
    isAgreeErr: false,
    refErr1: {
      refName: false,
      refCompany: false,
      refTitle: false,
      refRelation: false,
      refTimeLength: false,
      refPhone: false,
      refEmail: false,
    },
    refErr2: {
      refName: false,
      refCompany: false,
      refTitle: false,
      refRelation: false,
      refTimeLength: false,
      refPhone: false,
      refEmail: false,
    },
    refErr3: {
      refName: false,
      refCompany: false,
      refTitle: false,
      refRelation: false,
      refTimeLength: false,
      refPhone: false,
      refEmail: false,
    },
  });
  const escape = (htmlStr) => {
    return htmlStr.replace(/&/g, "and").replace(/</g, " ").replace(/>/g, " ");
    //.replace(/(?:\r\n|\r|\n)/g, '<br>');
  };
  //  name validation------------------------
  const checkName = (e, ref) => {
    const cname = escape(e.target.value);
    const refkey = "ref" + ref;
    const errname = "refErr" + ref;
    const namePatt = /^[A-Za-z0-9 ]*$/;
    if (cname.length > 2 && cname.length < 41) {
      if (!namePatt.test(cname)) {
        setFormErrFlag(true);
        setRefErr({
          ...refErr,
          [errname]: { ...refErr[errname], refName: true },
        });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setFormErrFlag(false);
        setRefErr({
          ...refErr,
          [errname]: { ...refErr[errname], refName: false },
        });
        setReferences({
          ...references,
          [refkey]: { ...references[refkey], refName: cname },
        });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setFormErrFlag(true);
      setRefErr({
        ...refErr,
        [errname]: { ...refErr[errname], refName: true },
      });
      setReferences({
        ...references,
        [refkey]: { ...references[refkey], refName: cname },
      });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // company name validation------------------------
  const checkCompanyName = (e, ref) => {
    const cname = escape(e.target.value);
    const refkey = "ref" + ref;
    const errname = "refErr" + ref;
    const namePatt = /^[A-Za-z0-9 ]*$/;
    if (cname.length > 2 && cname.length < 41) {
      if (!namePatt.test(cname)) {
        setFormErrFlag(true);
        setRefErr({
          ...refErr,
          [errname]: { ...refErr[errname], refCompany: true },
        });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setFormErrFlag(false);
        setRefErr({
          ...refErr,
          [errname]: { ...refErr[errname], refCompany: false },
        });
        setReferences({
          ...references,
          [refkey]: { ...references[refkey], refCompany: cname },
        });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setFormErrFlag(true);
      setRefErr({
        ...refErr,
        [errname]: { ...refErr[errname], refCompany: true },
      });
      setReferences({
        ...references,
        [refkey]: { ...references[refkey], refCompany: cname },
      });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // title name validation------------------------
  const checkTitle = (e, ref) => {
    const cname = escape(e.target.value);
    const refkey = "ref" + ref;
    const errname = "refErr" + ref;
    const namePatt = /^[A-Za-z0-9 ]*$/;
    if (cname.length > 2 && cname.length < 41) {
      if (!namePatt.test(cname)) {
        setFormErrFlag(true);
        setRefErr({
          ...refErr,
          [errname]: { ...refErr[errname], refTitle: true },
        });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setFormErrFlag(false);
        setRefErr({
          ...refErr,
          [errname]: { ...refErr[errname], refTitle: false },
        });
        setReferences({
          ...references,
          [refkey]: { ...references[refkey], refTitle: cname },
        });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setFormErrFlag(true);
      setRefErr({
        ...refErr,
        [errname]: { ...refErr[errname], refTitle: true },
      });
      setReferences({
        ...references,
        [refkey]: { ...references[refkey], refTitle: cname },
      });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // relation validation------------------------
  const checkRelation = (e, ref) => {
    const cname = escape(e.target.value);
    const refkey = "ref" + ref;
    const errname = "refErr" + ref;

    if (cname.length > 0) {
      setFormErrFlag(false);
      setRefErr({
        ...refErr,
        [errname]: { ...refErr[errname], refRelation: false },
      });
      setReferences({
        ...references,
        [refkey]: { ...references[refkey], refRelation: cname },
      });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setFormErrFlag(true);
      setRefErr({
        ...refErr,
        [errname]: { ...refErr[errname], refRelation: true },
      });
      setReferences({
        ...references,
        [refkey]: { ...references[refkey], refRelation: cname },
      });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // time length validation------------------------
  const checkTimeLength = (e, ref) => {
    const cname = escape(e.target.value);
    const refkey = "ref" + ref;
    const errname = "refErr" + ref;
    const namePatt = /^[A-Za-z0-9 ]*$/;
    if (cname.length > 4 && cname.length < 21) {
      if (!namePatt.test(cname)) {
        setFormErrFlag(true);
        setRefErr({
          ...refErr,
          [errname]: { ...refErr[errname], refTimeLength: true },
        });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setFormErrFlag(false);
        setRefErr({
          ...refErr,
          [errname]: { ...refErr[errname], refTimeLength: false },
        });
        setReferences({
          ...references,
          [refkey]: { ...references[refkey], refTimeLength: cname },
        });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setFormErrFlag(true);
      setRefErr({
        ...refErr,
        [errname]: { ...refErr[errname], refTimeLength: true },
      });
      setReferences({
        ...references,
        [refkey]: { ...references[refkey], refTimeLength: cname },
      });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  // email validation------------------------
  const checkRefEmail = (e, ref) => {
    const cname = escape(e.target.value);
    const refkey = "ref" + ref;
    const errname = "refErr" + ref;
    const namePatt =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (cname.length > 4 && cname.length < 41) {
      if (!namePatt.test(cname)) {
        setFormErrFlag(true);
        setRefErr({
          ...refErr,
          [errname]: { ...refErr[errname], refEmail: true },
        });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setFormErrFlag(false);
        setRefErr({
          ...refErr,
          [errname]: { ...refErr[errname], refEmail: false },
        });
        setReferences({
          ...references,
          [refkey]: { ...references[refkey], refEmail: cname },
        });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setFormErrFlag(true);
      setRefErr({
        ...refErr,
        [errname]: { ...refErr[errname], refEmail: true },
      });
      setReferences({
        ...references,
        [refkey]: { ...references[refkey], refEmail: cname },
      });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // phone validation------------------------
  const checkRefPhone = (e, ref) => {
    const cname = escape(e.target.value);
    const refkey = "ref" + ref;
    const errname = "refErr" + ref;
    const numPatt = /^[ 0-9-+/./(/)]*$/;
    if (cname.length > 6 && cname.length < 21) {
      if (!numPatt.test(cname)) {
        setFormErrFlag(true);
        setRefErr({
          ...refErr,
          [errname]: { ...refErr[errname], refPhone: true },
        });
        e.target.classList.remove("focus-green");
        e.target.classList.add("focus-red");
      } else {
        setFormErrFlag(false);
        setRefErr({
          ...refErr,
          [errname]: { ...refErr[errname], refPhone: false },
        });
        setReferences({
          ...references,
          [refkey]: { ...references[refkey], refPhone: cname },
        });
        e.target.classList.remove("focus-red");
        e.target.classList.add("focus-green");
      }
    } else {
      setFormErrFlag(true);
      setRefErr({
        ...refErr,
        [errname]: { ...refErr[errname], refPhone: true },
      });
      setReferences({
        ...references,
        [refkey]: { ...references[refkey], refPhone: cname },
      });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // agreement validation------------------------
  const checkIsagree = (e) => {
    const cname = e.target.value;
    const check = e.target.checked;
    if (check) {
      setFormErrFlag(false);
      setRefErr({ ...refErr, isAgreeErr: false });
      setReferences({ ...references, isAgree: true });
    } else {
      setFormErrFlag(true);
      setRefErr({ ...refErr, isAgreeErr: true });
      setReferences({ ...references, isAgree: false });
    }
    // console.log(refErr)
    // console.log(references)
  };

  return (
    <div>
      <div className="form-holedr">
        {/*========================  contact form job ref =======================*/}

        <p className=" text-gray-700 mt-4 pb-2">
          List three (3) professional references who can provide a testimonial
          of your character and skills - no friends, family members, etc. Note:
          At least one (1) of the references must be from a current or former
          supervisor and include their work contact information. If you have
          never been employed, your references should be someone such as a
          school leader, teacher, coach or a professional mentor.
        </p>
        {/*========================  contact form job ref 1=======================*/}
        <div className="form-exp-box bg-[#FFF7EA] p-4 md:p-6 mt-4 shadow-md">
          <div
            className="f-job-head flex justify-between items-center cursor-pointer"
            onClick={() => {
              exp == 1 ? setExp(null) : setExp(1);
            }}
          >
            <h3 className="md:text-xl">Reference 1 *</h3>{" "}
            <span className="md:text-xl text-[#333105]">
              {exp == 1 ? <FiMinus /> : <FiPlus />}
            </span>
          </div>
          {exp == 1 && (
            <div className="f-job-bottom mt-2 border-t border-gray-300">
              <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                <div className="form-col w-full md:w-[49%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Name
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref1.refName}
                    onChange={(e) => checkName(e, 1)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref1.refName.length > 2
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr1 && references.ref1.refName.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Name"
                  ></input>
                  {refErr.refErr1.refName &&
                    references.ref1.refName.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Only letter, number and space allowed (between 3-40
                        character)
                      </p>
                    )}
                  {refErr.refErr1.refName &&
                    references.ref1.refName.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr1 &&
                    references.ref1.refName == "" &&
                    !refErr.refErr1.refName && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
                <div className="form-col w-full md:w-[49%]">
                  <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Company
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref1.refCompany}
                    onChange={(e) => checkCompanyName(e, 1)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref1.refCompany.length > 2
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr1 &&
                      references.ref1.refCompany.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Company name"
                  ></input>
                  {refErr.refErr1.refCompany &&
                    references.ref1.refCompany.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Only letter, number and space allowed (between 3-40
                        character)
                      </p>
                    )}
                  {refErr.refErr1.refCompany &&
                    references.ref1.refCompany.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr1 &&
                    references.ref1.refCompany == "" &&
                    !refErr.refErr1.refCompany && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
              </div>
              <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                <div className="form-col w-full md:w-[49%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Title
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref1.refTitle}
                    onChange={(e) => checkTitle(e, 1)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref1.refTitle.length > 2
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr1 && references.ref1.refTitle.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Title"
                  ></input>
                  {refErr.refErr1.refTitle &&
                    references.ref1.refTitle.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Only letter, number and space allowed (between 3-20
                        character)
                      </p>
                    )}
                  {refErr.refErr1.refTitle &&
                    references.ref1.refTitle.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr1 &&
                    references.ref1.refTitle == "" &&
                    !refErr.refErr1.refTitle && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
                <div className="form-col w-full md:w-[49%]">
                  <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Relationship
                  </p>
                  <select
                    defaultValue={references.ref1.refRelation}
                    onChange={(e) => checkRelation(e, 1)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref1.refRelation.length > 0
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr1 &&
                      references.ref1.refRelation.length == 0
                        ? "focus-red"
                        : "") +
                      (refErr.refErr1.refRelation ? "focus-red" : "")
                    }
                  >
                    <option value="">...</option>
                    <option value="Supervisor/Boss">Supervisor/Boss</option>
                    <option value="Co-Worker/Peer">Co-Worker/Peer</option>
                    <option value="Mentor/Coach/Teacher">
                      Mentor/Coach/Teacher
                    </option>
                    <option value="Pastor">Pastor</option>
                  </select>

                  {refErr.refErr1.refRelation &&
                    references.ref1.refRelation.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr1 &&
                    references.ref1.refRelation.length == 0 &&
                    !refErr.refErr1.refRelation && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
              </div>
              <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                <div className="form-col w-full md:w-[32%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Length of Time Known
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref1.refTimeLength}
                    onChange={(e) => checkTimeLength(e, 1)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref1.refTimeLength.length > 4
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr1 &&
                      references.ref1.refTimeLength.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="2 year/ 6 month..."
                  />

                  {refErr.refErr1.refTimeLength &&
                    references.ref1.refTimeLength.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Only letter, number and space allowed (between 5-20
                        character)
                      </p>
                    )}
                  {refErr.refErr1.refTimeLength &&
                    references.ref1.refTimeLength.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr1 &&
                    references.ref1.refTimeLength == "" &&
                    !refErr.refErr1.refTimeLength && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
                <div className="form-col w-full md:w-[32%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Phone Number
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref1.refPhone}
                    onChange={(e) => checkRefPhone(e, 1)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref1.refPhone.length > 6
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr1 &&
                      references.ref1.refTimeLength.length < 7
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Phone number"
                  />

                  {refErr.refErr1.refPhone &&
                    references.ref1.refPhone.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Invalid phone number
                      </p>
                    )}
                  {refErr.refErr1.refPhone &&
                    references.ref1.refPhone.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr1 &&
                    references.ref1.refPhone == "" &&
                    !refErr.refErr1.refPhone && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
                <div className="form-col w-full md:w-[32%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Email
                  </p>
                  <input
                    type="email"
                    defaultValue={references.ref1.refEmail}
                    onChange={(e) => checkRefEmail(e, 1)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref1.refEmail.length > 4
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr1 && references.ref1.refEmail.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Email address"
                  />
                  {refErr.refErr1.refEmail &&
                    references.ref1.refEmail.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Invalid email address
                      </p>
                    )}
                  {refErr.refErr1.refEmail &&
                    references.ref1.refEmail.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr1 &&
                    references.ref1.refEmail == "" &&
                    !refErr.refErr1.refEmail && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
              </div>
            </div>
          )}
        </div>
        {/*========================  contact form ref 1 end =======================*/}
        {/*========================  contact form job ref 2=======================*/}
        <div
          className={
            "form-exp-box bg-[#FFF7EA] p-4 md:p-6 mt-4 shadow-md " +
            (refPrevErr.refErr2 == true ? "focus-red" : "")
          }
        >
          <div
            className="f-job-head flex justify-between items-center cursor-pointer"
            onClick={() => {
              exp == 2 ? setExp(null) : setExp(2);
            }}
          >
            <h3 className="md:text-xl">Reference 2 *</h3>{" "}
            <span className="md:text-xl text-[#333105]">
              {exp == 2 ? <FiMinus /> : <FiPlus />}
            </span>
          </div>
          {exp == 2 && (
            <div className="f-job-bottom mt-2 border-t border-gray-300">
              <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                <div className="form-col w-full md:w-[49%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Name
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref2.refName}
                    onChange={(e) => checkName(e, 2)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref2.refName.length > 2
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr2 && references.ref2.refName.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Name"
                  ></input>
                  {refErr.refErr2.refName &&
                    references.ref2.refName.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Only letter, number and space allowed (between 3-40
                        character)
                      </p>
                    )}
                  {refErr.refErr2.refName &&
                    references.ref2.refName.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr2 &&
                    references.ref2.refName == "" &&
                    !refErr.refErr2.refName && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
                <div className="form-col w-full md:w-[49%]">
                  <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Company
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref2.refCompany}
                    onChange={(e) => checkCompanyName(e, 2)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref1.refCompany.length > 2
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr2 &&
                      references.ref2.refCompany.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Company name"
                  ></input>
                  {refErr.refErr2.refCompany &&
                    references.ref2.refCompany.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Only letter, number and space allowed (between 3-40
                        character)
                      </p>
                    )}
                  {refErr.refErr2.refCompany &&
                    references.ref2.refCompany.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr2 &&
                    references.ref2.refCompany == "" &&
                    !refErr.refErr2.refCompany && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
              </div>
              <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                <div className="form-col w-full md:w-[49%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Title
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref2.refTitle}
                    onChange={(e) => checkTitle(e, 2)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref2.refTitle.length > 2
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr2 && references.ref2.refTitle.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Title"
                  ></input>
                  {refErr.refErr2.refTitle &&
                    references.ref2.refTitle.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Only letter, number and space allowed (between 3-20
                        character)
                      </p>
                    )}
                  {refErr.refErr2.refTitle &&
                    references.ref2.refTitle.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr2 &&
                    references.ref2.refTitle == "" &&
                    !refErr.refErr2.refTitle && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
                <div className="form-col w-full md:w-[49%]">
                  <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Relationship
                  </p>
                  <select
                    defaultValue={references.ref2.refRelation}
                    onChange={(e) => checkRelation(e, 2)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref2.refRelation.length > 0
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr2 &&
                      references.ref1.refRelation.length == 0
                        ? "focus-red"
                        : "") +
                      (refErr.refErr1.refRelation ? "focus-red" : "")
                    }
                  >
                    <option value="">...</option>
                    <option value="Supervisor/Boss">Supervisor/Boss</option>
                    <option value="Co-Worker/Peer">Co-Worker/Peer</option>
                    <option value="Mentor/Coach/Teacher">
                      Mentor/Coach/Teacher
                    </option>
                    <option value="Pastor">Pastor</option>
                  </select>

                  {refErr.refErr2.refRelation &&
                    references.ref2.refRelation.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr2 &&
                    references.ref2.refRelation.length == 0 &&
                    !refErr.refErr2.refRelation && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
              </div>
              <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                <div className="form-col w-full md:w-[32%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Length of Time Known
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref2.refTimeLength}
                    onChange={(e) => checkTimeLength(e, 2)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref2.refTimeLength.length > 4
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr2 &&
                      references.ref2.refTimeLength.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="2 year/ 6 month..."
                  />

                  {refErr.refErr2.refTimeLength &&
                    references.ref2.refTimeLength.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Only letter, number and space allowed (between 5-20
                        character)
                      </p>
                    )}
                  {refErr.refErr2.refTimeLength &&
                    references.ref2.refTimeLength.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr2 &&
                    references.ref2.refTimeLength == "" &&
                    !refErr.refErr2.refTimeLength && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
                <div className="form-col w-full md:w-[32%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Phone Number
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref2.refPhone}
                    onChange={(e) => checkRefPhone(e, 2)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref2.refPhone.length > 6
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr2 &&
                      references.ref2.refTimeLength.length < 7
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Phone number"
                  />

                  {refErr.refErr2.refPhone &&
                    references.ref2.refPhone.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Invalid phone number
                      </p>
                    )}
                  {refErr.refErr2.refPhone &&
                    references.ref2.refPhone.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr2 &&
                    references.ref2.refPhone == "" &&
                    !refErr.refErr2.refPhone && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
                <div className="form-col w-full md:w-[32%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Email
                  </p>
                  <input
                    type="email"
                    defaultValue={references.ref2.refEmail}
                    onChange={(e) => checkRefEmail(e, 2)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref2.refEmail.length > 4
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr2 && references.ref2.refEmail.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Email address"
                  />
                  {refErr.refErr2.refEmail &&
                    references.ref2.refEmail.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Invalid email address
                      </p>
                    )}
                  {refErr.refErr2.refEmail &&
                    references.ref2.refEmail.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr2 &&
                    references.ref2.refEmail == "" &&
                    !refErr.refErr2.refEmail && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
              </div>
            </div>
          )}
        </div>
        {/*========================  contact form ref 2 end =======================*/}
        {/*========================  contact form job ref 3=======================*/}
        <div
          className={
            "form-exp-box bg-[#FFF7EA] p-4 md:p-6 mt-4 shadow-md " +
            (refPrevErr.refErr3 == true ? "focus-red" : "")
          }
        >
          <div
            className="f-job-head flex justify-between items-center cursor-pointer"
            onClick={() => {
              exp == 3 ? setExp(null) : setExp(3);
            }}
          >
            <h3 className="md:text-xl">Reference 3 *</h3>{" "}
            <span className="md:text-xl text-[#333105]">
              {exp == 3 ? <FiMinus /> : <FiPlus />}
            </span>
          </div>
          {exp == 3 && (
            <div className="f-job-bottom mt-2 border-t border-gray-300">
              <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                <div className="form-col w-full md:w-[49%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Name
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref3.refName}
                    onChange={(e) => checkName(e, 3)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref3.refName.length > 2
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr3 && references.ref3.refName.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Name"
                  ></input>
                  {refErr.refErr3.refName &&
                    references.ref3.refName.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Only letter, number and space allowed (between 3-40
                        character)
                      </p>
                    )}
                  {refErr.refErr3.refName &&
                    references.ref3.refName.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr3 &&
                    references.ref3.refName == "" &&
                    !refErr.refErr3.refName && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
                <div className="form-col w-full md:w-[49%]">
                  <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Company
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref3.refCompany}
                    onChange={(e) => checkCompanyName(e, 3)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref3.refCompany.length > 2
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr3 &&
                      references.ref3.refCompany.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Company name"
                  ></input>
                  {refErr.refErr3.refCompany &&
                    references.ref3.refCompany.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Only letter, number and space allowed (between 3-40
                        character)
                      </p>
                    )}
                  {refErr.refErr3.refCompany &&
                    references.ref3.refCompany.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr3 &&
                    references.ref3.refCompany == "" &&
                    !refErr.refErr3.refCompany && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
              </div>
              <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                <div className="form-col w-full md:w-[49%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Title
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref3.refTitle}
                    onChange={(e) => checkTitle(e, 3)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref3.refTitle.length > 2
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr3 && references.ref3.refTitle.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Title"
                  ></input>
                  {refErr.refErr3.refTitle &&
                    references.ref3.refTitle.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Only letter, number and space allowed (between 3-20
                        character)
                      </p>
                    )}
                  {refErr.refErr3.refTitle &&
                    references.ref3.refTitle.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr3 &&
                    references.ref3.refTitle == "" &&
                    !refErr.refErr3.refTitle && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
                <div className="form-col w-full md:w-[49%]">
                  <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Relationship
                  </p>
                  <select
                    defaultValue={references.ref3.refRelation}
                    onChange={(e) => checkRelation(e, 3)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref3.refRelation.length > 0
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr3 &&
                      references.ref3.refRelation.length == 0
                        ? "focus-red"
                        : "") +
                      (refErr.refErr3.refRelation ? "focus-red" : "")
                    }
                  >
                    <option value="">...</option>
                    <option value="Supervisor/Boss">Supervisor/Boss</option>
                    <option value="Co-Worker/Peer">Co-Worker/Peer</option>
                    <option value="Mentor/Coach/Teacher">
                      Mentor/Coach/Teacher
                    </option>
                    <option value="Pastor">Pastor</option>
                  </select>

                  {refErr.refErr3.refRelation &&
                    references.ref3.refRelation.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr3 &&
                    references.ref3.refRelation.length == 0 &&
                    !refErr.refErr3.refRelation && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
              </div>
              <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                <div className="form-col w-full md:w-[32%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Length of Time Known
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref3.refTimeLength}
                    onChange={(e) => checkTimeLength(e, 3)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref3.refTimeLength.length > 4
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr3 &&
                      references.ref3.refTimeLength.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="2 year/ 6 month..."
                  />

                  {refErr.refErr3.refTimeLength &&
                    references.ref3.refTimeLength.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Only letter, number and space allowed (between 5-20
                        character)
                      </p>
                    )}
                  {refErr.refErr3.refTimeLength &&
                    references.ref3.refTimeLength.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr3 &&
                    references.ref3.refTimeLength == "" &&
                    !refErr.refErr3.refTimeLength && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
                <div className="form-col w-full md:w-[32%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Phone Number
                  </p>
                  <input
                    type="text"
                    defaultValue={references.ref3.refPhone}
                    onChange={(e) => checkRefPhone(e, 3)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref3.refPhone.length > 6
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr3 &&
                      references.ref3.refTimeLength.length < 7
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Phone number"
                  />

                  {refErr.refErr3.refPhone &&
                    references.ref3.refPhone.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Invalid phone number
                      </p>
                    )}
                  {refErr.refErr3.refPhone &&
                    references.ref3.refPhone.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr3 &&
                    references.ref3.refPhone == "" &&
                    !refErr.refErr3.refPhone && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
                <div className="form-col w-full md:w-[32%]">
                  <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">
                    Email
                  </p>
                  <input
                    type="email"
                    defaultValue={references.ref3.refEmail}
                    onChange={(e) => checkRefEmail(e, 3)}
                    className={
                      "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent " +
                      (references.ref3.refEmail.length > 4
                        ? "focus-green "
                        : "") +
                      (refPrevErr.refErr3 && references.ref3.refEmail.length < 2
                        ? "focus-red"
                        : "")
                    }
                    placeholder="Email address"
                  />
                  {refErr.refErr3.refEmail &&
                    references.ref3.refEmail.length > 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        Invalid email address
                      </p>
                    )}
                  {refErr.refErr3.refEmail &&
                    references.ref3.refEmail.length == 0 && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}

                  {refPrevErr.refErr3 &&
                    references.ref3.refEmail == "" &&
                    !refErr.refErr3.refEmail && (
                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                        This field must not be empty
                      </p>
                    )}
                </div>
              </div>
            </div>
          )}
        </div>
        {/*========================  contact form ref 3 end =======================*/}
        {/*======================== contact form job ref end=======================*/}

        {/*========================  Other=======================*/}

        <div className="form-row mt-6">
          <p className="mb-1 text-lg lg:text-xl evevt-input-label text-gray-800 font-medium border-b border-gray-400 pb-2">
            Disclaimer & Signature
          </p>
          <div className="ds-box mt-4 relative ">
            <p className="text-gray-700">
              I certify that all information I have provided on this application
              is true, complete and correct. I understand that any information
              provided by me that is found to be false, incomplete or
              misrepresented in any respect, will be sufficient cause to cancel
              further consideration of this application, or immediately
              discharge me from employment when discovered.
            </p>
            <span
              onClick={() => {
                setShowDs(true);
              }}
              className="mt-2 text-blue-600 cursor-pointer hover:text-blue-800"
            >
              Read more
            </span>

            {showDs && (
              <div
                ref={dsref}
                className="ds-full  text-[14px] sm:text-sm absolute bottom-6 text-gray-700 bg-[#FFF7EA] px-2 py-5 md:p-6 shadow-lg  md:max-w-[98%] left-0 right-0 mx-auto border border-gold"
              >
                <div className="ds-close relative">
                  <span
                    onClick={() => {
                      setShowDs(false);
                    }}
                    className="absolute top-[-20px] right-[-8px] md:top-[-24px] md:right-[-24px] text-lg md:text-xl p-1 md:p-2 bg-gold"
                  >
                    <FiX />
                  </span>
                </div>
                <div className="overflow-y-auto max-h-[440px] md:max-h-[600px]">
                  <p className="text-gray-700 my-2">
                    I certify that all information I have provided on this
                    application is true, complete and correct. I understand that
                    any information provided by me that is found to be false,
                    incomplete or misrepresented in any respect, will be
                    sufficient cause to cancel further consideration of this
                    application, or immediately discharge me from employment
                    when discovered.
                  </p>
                  <p className="text-gray-700 myy-2">
                    I expressly authorize, without reservation, All in
                    Adventures, LLC and its representatives, employees or agents
                    to contact and obtain information from all references
                    (personal and professional), employers, public agencies,
                    licensing authorities and educational institutions and to
                    otherwise verify accuracy of all information provided by me
                    in this application, or job interview. I hereby waive any
                    and all rights and claims I may have against All in
                    Adventures LLC., its agents, employees or representatives,
                    for seeking, gathering and using such information in the
                    employment process and all other persons, corporations or
                    organizations for furnishing such information about me.
                  </p>
                  <p className="text-gray-700 my-2">
                    I understand that All in Adventures LLC. does not unlawfully
                    discriminate in employment and no question on this
                    application is used for purposes of limiting or excusing any
                    applicant from consideration for employment on a basis
                    prohibited by applicable local, state or federal law. If
                    employed and in consideration of my employment, I agree to
                    conform to the rules, procedures and policies of All in
                    Adventures. I understand that if I am hired, my employment
                    may be conditioned on a satisfactory background check. I
                    understand that if I am hired, my employment will be
                    at-will. I may be transferred, reassigned, suspended or
                    demoted and my employment may be terminated at any time with
                    or without notice or cause. I further understand that no one
                    has any authority to enter into any agreement of employment
                    for any specified period of time, or to make any agreement
                    contrary to the foregoing other than in writing signed by me
                    and an authorized representative of All in Adventures LLC.
                  </p>
                  <p className="text-gray-700 mt-4">
                    <span className="font-medium text-sm md:text-base">
                      BACKGROUND CHECKS:{" "}
                    </span>
                    Employment at All in Adventures is contingent upon a
                    background check, which is required for all staff members.
                    If the background check reveals a conviction or misconduct
                    relevant to the position, or if an individual refuses to
                    give consent for a background check, the individual may be
                    disqualified from holding the position. All in Adventures
                    recognizes the need to conduct background checks on
                    employees/candidates while protecting their privacy. All in
                    Adventure's policy as well as state and federal laws
                    recognizes the individual's right to privacy and prohibits
                    All in Adventures employees from unauthorized use or
                    disclosure of personal information.
                  </p>
                </div>
              </div>
            )}
          </div>
          <p className="mb-1 mt-2 lg:text-lg evevt-input-label text-gray-800">
            By checking this box, I agree that I have read and understand the
            above disclaimer and effectively sign this digital application.*
          </p>
          <div className="flex items-center space-x-4 ">
            <input
              type="checkbox"
              onChange={(e) => checkIsagree(e)}
              checked={references.isAgree == true ? "checked" : ""}
              id="tq"
            />
            <label htmlFor="tq" className="text-[#222222] text-lg">
              I agree
            </label>
          </div>
          {refErr.isAgreeErr && (
            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
              Check agreement
            </p>
          )}

          {refPrevErr.isAgreeErr &&
            !references.isAgree &&
            !refErr.isAgreeErr && (
              <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                Check agreement
              </p>
            )}
        </div>

        {/*======================== Other end=======================*/}
      </div>
    </div>
  );
};

export default References;
