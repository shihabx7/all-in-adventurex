import { useEffect, useState } from "react";
import ApplicantInfo from "./ApplicantInfo";
import ApplicantInfo2 from "./ApplicantInfo2";
import Availability from "./Availability";
import Education from "./Education";
import Experience from "./Experience";
import References from "./References";

const JobApplicationForms = (props) => {
  const [formStep, setFormStep] = useState(0);

  const [formName, setFormName] = useState("Applicant Information ");
  useEffect(() => {
    if (formStep == 1) {
      setFormName("Applicant Information");
    }
    if (formStep == 2) {
      setFormName("Availability");
    }
    if (formStep == 3) {
      setFormName("Education");
    }
    if (formStep == 4) {
      setFormName("Work Experience");
    }
    if (formStep == 5) {
      setFormName("Professional References");
    }
  }, [formStep]);

  const getPw = () => {
    var step = Math.floor((formStep / 6) * 100);

    return step;
  };
  const [prevFormErr, setPrevFormErr] = useState(false);
  const [formErrFlag, setFormErrFlag] = useState(false);
  // ======================Applicant info 1 data
  const [appInfo1, setAppInfo1] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    stAdd1: "",
    stAdd2: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });
  const checkAppInfo1 = () => {
    var emptycount = 0;
    for (const key in appInfo1) {
      if (key != "stAdd2") {
        if (appInfo1[key] == "") {
          emptycount = emptycount + 1;
        }
      }
    }
    //console.log(emptycount)
    if (emptycount != 0) {
      return false;
    }
    return true;
  };
  // ==========================Applicant info 1 data
  // Applicant info 2 data end
  const [appInfo2, setAppInfo2] = useState({
    dLocation: "",
    dPosition: "",
    dPay: "",
    dSchedule: "",
    isAge: "",
    isEligible: "",
    everWorkPast: "",
    workUnderOther: "",
    learnAboutPos: "",
    whatAttracted: "",
  });
  const checkAppInfo2 = () => {
    var emptycount = 0;
    for (const key in appInfo2) {
      if (
        key != "everWorkPast" &&
        key != "workUnderOther" &&
        key != "learnAboutPos" &&
        key != "whatAttracted"
      ) {
        if (appInfo2[key] == "") {
          emptycount = emptycount + 1;
        }
      }
    }
    //console.log(emptycount)
    if (emptycount != 0) {
      return false;
    }
    return true;
  };

  // ========================================Applicant info 2 data end
  // ==============================applicant availablity data set
  const [availability, setAvailability] = useState({
    careerObjective: "",
    avlStartDate: "",
    avlToWork: {
      tg: false,
      cmp: false,
      cmo: false,
      none: false,
    },
    howLongStay: "",
    sunday: {
      start: "",
      close: "",
    },
    monday: {
      start: "",
      close: "",
    },
    tuesday: {
      start: "",
      close: "",
    },
    wednesday: {
      start: "",
      close: "",
    },
    thursday: {
      start: "",
      close: "",
    },
    friday: {
      start: "",
      close: "",
    },
    saturday: {
      start: "",
      close: "",
    },
  });
  const checkAvailablity = () => {
    var emptycount = 0;
    var emptyavlw = 0;
    for (const key in availability) {
      if (key == "avlToWork") {
        for (const k in availability.avlToWork) {
          if (availability.avlToWork[k] == false) {
            emptyavlw = emptyavlw + 1;
          }
        }
        if (emptyavlw == 4) {
          emptycount = emptycount + 1;
        }
      }

      if (key == "careerObjective") {
        if (availability[key] == "") {
          emptycount = emptycount + 1;
        }
      }
      if (key == "avlStartDate") {
        if (availability[key] == "") {
          emptycount = emptycount + 1;
        }
      }
      if (key == "howLongStay") {
        if (availability[key] == "") {
          emptycount = emptycount + 1;
        }
      }
      if (key == "sunday") {
        if (availability[key].start == "" || availability[key].close == "") {
          emptycount = emptycount + 1;
        }
      }
      if (key == "monday") {
        if (availability[key].start == "" || availability[key].close == "") {
          emptycount = emptycount + 1;
        }
      }
      if (key == "tuesday") {
        if (availability[key].start == "" || availability[key].close == "") {
          emptycount = emptycount + 1;
        }
      }
      if (key == "wednesday") {
        if (availability[key].start == "" || availability[key].close == "") {
          emptycount = emptycount + 1;
        }
      }
      if (key == "thursday") {
        if (availability[key].start == "" || availability[key].close == "") {
          emptycount = emptycount + 1;
        }
      }
      if (key == "friday") {
        if (availability[key].start == "" || availability[key].close == "") {
          emptycount = emptycount + 1;
        }
      }
      if (key == "saturday") {
        if (availability[key].start == "" || availability[key].close == "") {
          emptycount = emptycount + 1;
        }
      }
    }
    //console.log(emptyavlw)
    // console.log(availability.avlToWork)

    //console.log(emptycount)
    if (emptycount != 0) {
      return false;
    }

    return true;
  };
  // ===================applicant availablity data set end
  //================== ======applicant education data

  const [prevEduErr, setPrevEduErr] = useState({
    hschoolErr: false,
    collegeErr: false,
    otherErr: false,
    allErr: false,
  });
  const [education, setEducation] = useState({
    highschool: {
      insname: "",
      attendDate: "",
      isGraduated: "",
      degree: "",
    },
    college: {
      insname: "",
      attendDate: "",
      isGraduated: "",
      degree: "",
    },
    other: {
      insname: "",
      attendDate: "",
      isGraduated: "",
      degree: "",
    },
  });
  const checkEducation = () => {
    const ederr = {
      earr: false,
      alleempty: 0,
      hschoolempty: 0,
      collegeempty: 0,
      otherempty: 0,
    };

    for (const keh in education.highschool) {
      if (education.highschool[keh] == "") {
        ederr.hschoolempty = ederr.hschoolempty + 1;
      }
    }
    for (const kec in education.college) {
      if (education.college[kec] == "") {
        ederr.collegeempty = ederr.collegeempty + 1;
      }
    }
    for (const keo in education.other) {
      if (education.other[keo] == "") {
        ederr.otherempty = ederr.otherempty + 1;
      }
    }
    if (
      ederr.hschoolempty == 4 &&
      ederr.collegeempty == 4 &&
      ederr.otherempty == 4
    ) {
      ederr.alleempty = 1;
      ederr.earr = true;
    }
    if (ederr.hschoolempty < 4 && ederr.hschoolempty > 0) {
      ederr.earr = true;
    }
    if (ederr.collegeempty < 4 && ederr.collegeempty > 0) {
      ederr.earr = true;
    }
    if (ederr.otherempty < 4 && ederr.otherempty > 0) {
      ederr.earr = true;
    }

    return ederr;
  };
  // ========================================applicant education data end
  //======================== applicant job experience data
  const [jobPrevErr, setjobPrevErr] = useState({
    jobErr1: false,
    jobErr2: false,
    jobErr3: false,
    jobAllErr: false,
    skillListErr: false,
  });
  const [jobExp, setJobExp] = useState({
    isEmployed: "",
    skillList: "",
    job1: {
      companyName: "",
      title: "",
      spName: "",
      spPhone: "",
      dateOfEmployment: "",
      isContact: "",
      majorResponsibility: "",
      reasonForLeaving: "",
    },
    job2: {
      companyName: "",
      title: "",
      spName: "",
      spPhone: "",
      dateOfEmployment: "",
      isContact: "",
      majorResponsibility: "",
      reasonForLeaving: "",
    },
    job3: {
      companyName: "",
      title: "",
      spName: "",
      spPhone: "",
      dateOfEmployment: "",
      isContact: "",
      majorResponsibility: "",
      reasonForLeaving: "",
    },
  });
  const checkJobExp = () => {
    const err = {
      jobErr1: false,
      jobErr2: false,
      jobErr3: false,
      jobAllErr: false,
      skillListErr: false,
    };
    const jobcount = {
      job1: 0,
      job2: 0,
      job3: 0,
    };

    if (jobExp.isEmployed == "") {
      err.jobAllErr = true;
    }
    if (jobExp.skillList != "" && jobExp.skillList.length < 3) {
      err.jobAllErr = true;
    }
    for (const key in jobExp.job1) {
      if (jobExp.job1[key] != "") {
        jobcount.job1 = jobcount.job1 + 1;
      }
    }
    for (const key2 in jobExp.job2) {
      if (jobExp.job2[key2] != "") {
        jobcount.job2 = jobcount.job2 + 1;
      }
    }
    for (const key3 in jobExp.job3) {
      if (jobExp.job2[key3] != "") {
        jobcount.job3 = jobcount.job3 + 1;
      }
    }
    if (jobcount.job1 > 0 && jobcount.job1 < 6) {
      err.jobErr1 = true;
    }
    if (jobcount.job2 > 0 && jobcount.job2 < 6) {
      err.jobErr1 = true;
    }
    if (jobcount.job3 > 0 && jobcount.job3 < 6) {
      err.jobErr1 = true;
    }

    return err;
  };
  //================= applicant job experience data  end
  //================== applicant refferecnc  data
  const [references, setReferences] = useState({
    isAgree: false,
    ref1: {
      refName: "",
      refCompany: "",
      refTitle: "",
      refRelation: "",
      refTimeLength: "",
      refPhone: "",
      refEmail: "",
    },
    ref2: {
      refName: "",
      refCompany: "",
      refTitle: "",
      refRelation: "",
      refTimeLength: "",
      refPhone: "",
      refEmail: "",
    },
    ref3: {
      refName: "",
      refCompany: "",
      refTitle: "",
      refRelation: "",
      refTimeLength: "",
      refPhone: "",
      refEmail: "",
    },
  });

  const [refPrevErr, setRefPrevErr] = useState({
    refErr1: false,
    refErr2: false,
    refErr3: false,
    refAllErr: false,
    isAgreeErr: false,
  });
  const checkRef = () => {
    const reterr = {
      isAgreeErr: false,
      refErr1: false,
      refErr2: false,
      refErr3: false,
    };
    const refcount = {
      ref1: 0,
      ref2: 0,
      ref3: 0,
    };
    if (!references.isAgree) {
      reterr.isAgreeErr = true;
    }
    for (const x in references.ref1) {
      if (references.ref1[x] != "") {
        refcount.ref1 = refcount.ref1 + 1;
      }
    }
    for (const y in references.ref2) {
      if (references.ref2[y] != "") {
        refcount.ref2 = refcount.ref2 + 1;
      }
    }
    for (const z in references.ref3) {
      if (references.ref3[z] != "") {
        refcount.ref3 = refcount.ref3 + 1;
      }
    }
    if (refcount.ref1 < 7) {
      reterr.refErr1 = true;
    }
    if (refcount.ref2 < 7) {
      reterr.refErr2 = true;
    }
    if (refcount.ref3 < 7) {
      reterr.refErr3 = true;
    }
    return reterr;
  };
  // =======================applicant refferecnc  data  end

  // form step controll===============
  const [formErr, setFormErr] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    dLocation: "",
  });
  const backStep = () => {
    setFormStep(formStep - 1);
  };
  const nextStep = () => {
    if (formErrFlag == false) {
      if (formStep == 0) {
        const chkAppinfo1 = checkAppInfo1();
        if (chkAppinfo1 == false) {
          setPrevFormErr(true);
        } else {
          setPrevFormErr(false);
          setFormStep(formStep + 1);
        }
      }
      if (formStep == 1) {
        const chkAppinfo2 = checkAppInfo2();
        if (chkAppinfo2 == false) {
          setPrevFormErr(true);
        } else {
          setPrevFormErr(false);
          setFormStep(formStep + 1);
        }
      }
      if (formStep == 2) {
        const chkAvl = checkAvailablity();
        if (chkAvl == false) {
          setPrevFormErr(true);
        } else {
          setPrevFormErr(false);
          setFormStep(formStep + 1);
        }
      }
      if (formStep == 3) {
        const chEdu = checkEducation();
        const reterr = {
          allErr: false,
          hschoolErr: false,
          collegeErr: false,
          otherErr: false,
        };

        if (
          chEdu.hschoolempty == 4 &&
          chEdu.collegeempty == 4 &&
          chEdu.otherempty == 4
        ) {
          reterr.allErr = true;
        }

        if (chEdu.hschoolempty > 0 && chEdu.hschoolempty < 4) {
          reterr.hschoolErr = true;
        }
        if (chEdu.collegeempty > 0 && chEdu.collegeempty < 4) {
          reterr.collegeErr = true;
        }
        if (chEdu.otherempty > 0 && chEdu.otherempty < 4) {
          reterr.otherErr = true;
        }
        if (chEdu.alleempty == 1) {
          reterr.allErr = true;
        }
        setPrevEduErr(reterr);
        if (chEdu.alleempty == 0 && chEdu.earr == false) {
          setPrevEduErr({ ...prevEduErr, allErr: false });
          setPrevFormErr(false);
          setFormStep(formStep + 1);
        }
      }
      if (formStep == 4) {
        const chExp = checkJobExp();
        const retErr = {
          jobAllErr: chExp.jobAllErr,
          skillListErr: chExp.skillListErr,
          jobErr1: chExp.jobErr1,
          jobErr2: chExp.jobErr2,
          jobErr3: chExp.jobErr3,
        };
        setjobPrevErr(retErr);

        if (
          !chExp.jobAllErr &&
          !chExp.skillListErr &&
          !chExp.jobErr1 &&
          !chExp.jobErr2 &&
          !chExp.jobErr3
        ) {
          setPrevFormErr(false);
          setFormStep(formStep + 1);
        }

        //console.log(jobPrevErr)
      }
    }

    //console.log(prevFormErr)
    //console.log(appInfo1)
    //console.log(appInfo2)
    // console.log(formErrFlag)
  };
  // form step controll end===============
  // ==============================submit form
  const [isSend, setIsSend] = useState(false);
  const submitForm = async (event) => {
    event.preventDefault();
    if (formErrFlag == false) {
      const chRef = checkRef();
      const neErr = {
        isAgreeErr: chRef.isAgreeErr,
        refErr1: chRef.refErr1,
        refErr2: chRef.refErr2,
        refErr3: chRef.refErr3,
      };

      setRefPrevErr(neErr);

      if (
        !chRef.isAgreeErr &&
        !chRef.refErr1 &&
        !chRef.refErr2 &&
        !chRef.refErr3
      ) {
        const formData = {
          info1: appInfo1,
          info2: appInfo2,
          avlinfo: availability,
          eduinfo: education,
          expinfo: jobExp,
          refinfo: references,
        };
        setIsSend(true);

        const response = await fetch("/api/Forms/jobApplication", {
          method: "POST",
          headers: {
            Accept: "application/json,text/plain,*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success == true) {
          window.location.replace("/thank-you-career");
          setIsSend(false);
          // console.log(result.data)
          //  console.log(result.success)
        } else {
          setIsSend(false);
          alert("Network Error");
        }
        //  console.log(result.data)
        // console.log(result.success)
      } else {
        setFormStep(5);
      }
      // console.log(chRef)
      // console.log(refPrevErr)
      // console.log(references)
    } else {
      setFormStep(5);
    }
    // console.log(isSend)
  };
  // ==============================submit form end
  return (
    <div className="job-form">
      <div className="job-form-head">
        <div className="job-name flex justify-between mb-4">
          <h3 id="fhead" className="font-medium text-2xl text-[#464646]">
            {formName}
          </h3>
          <p className="font-medium text-lg text-[#464646]">
            Step {formStep + 1} of 6
          </p>
        </div>
        <div className="bg-[#cdcdcd] rounded">
          <div
            className={"bg-golden-alt h-[4px] rounded"}
            style={{ width: getPw() + "%" }}
          ></div>
        </div>
      </div>
      <div className="job-form-body">
        {formStep == 0 && (
          <ApplicantInfo
            prevFormErr={prevFormErr}
            appInfo1={appInfo1}
            setAppInfo1={setAppInfo1}
            setFormErrFlag={setFormErrFlag}
          />
        )}
        {formStep == 1 && (
          <ApplicantInfo2
            prevFormErr={prevFormErr}
            locationlist={props.locationlist}
            appInfo2={appInfo2}
            setAppInfo2={setAppInfo2}
            setFormErrFlag={setFormErrFlag}
          />
        )}
        {formStep == 2 && (
          <Availability
            prevFormErr={prevFormErr}
            availability={availability}
            setAvailability={setAvailability}
            setFormErrFlag={setFormErrFlag}
          />
        )}
        {formStep == 3 && (
          <Education
            prevEduErr={prevEduErr}
            education={education}
            setEducation={setEducation}
            setFormErrFlag={setFormErrFlag}
          />
        )}
        {formStep == 4 && (
          <Experience
            jobExp={jobExp}
            setJobExp={setJobExp}
            setFormErrFlag={setFormErrFlag}
            jobPrevErr={jobPrevErr}
          />
        )}
        {formStep == 5 && (
          <References
            references={references}
            setReferences={setReferences}
            setFormErrFlag={setFormErrFlag}
            refPrevErr={refPrevErr}
          />
        )}
      </div>
      <div className="form-bottom flex justify-end items-center space-x-2 mt-8">
        {formStep > 0 && !isSend && (
          <button
            onClick={() => {
              backStep();
            }}
            className="btn-back px-6 py-2 text-lg rounded bg-red-600 hover:bg-red-700 text-center text-white"
          >
            BACK
          </button>
        )}
        {formStep < 5 && (
          <button
            onClick={() => {
              nextStep();
            }}
            className="btn-back px-6 py-2 text-lg rounded bg-red-600 hover:bg-red-700 text-center text-white"
          >
            NEXT
          </button>
        )}

        {formStep == 5 && isSend == false && (
          <button
            onClick={(event) => {
              submitForm(event);
            }}
            className="btn-back px-6 py-2 text-lg rounded bg-red-600 hover:bg-red-700 text-center text-white"
          >
            SUBMIT
          </button>
        )}
        {isSend == true && (
          <div className="btn-back px-6 py-2 md:text-lg rounded bg-red-600 hover:bg-red-700  text-white w-[170px]">
            <div className="loader font-medium">Submitting</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplicationForms;
