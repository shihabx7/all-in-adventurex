import { useState } from "react";
const ApplicantInfo2 = ({
  prevFormErr,
  appInfo2,
  setAppInfo2,
  setFormErrFlag,
  locationlist,
}) => {
  const [appInfo2Err, setAppInfo2Err] = useState({
    dLocationErr: false,
    dPositionErr: false,
    dPayErr: false,
    dScheduleErr: false,
    isAgeErr: false,
    isEligibleErr: false,
    everWorkPastErr: false,
    workUnderOtherErr: false,
    learnAboutPosErr: false,
    whatAttractedErr: false,
  });
  // ========================================================location validation=================
  const escape = (htmlStr) => {
    return htmlStr.replace(/&/g, "and").replace(/</g, " ").replace(/>/g, " ");
    //.replace(/(?:\r\n|\r|\n)/g, '<br>');
  };
  const checkLocation = (e) => {
    const dloc = e.target.value.trim();

    if (dloc.length > 0) {
      setFormErrFlag(false);
      setAppInfo2Err({ ...appInfo2Err, dLocationErr: false });
      setAppInfo2({ ...appInfo2, dLocation: dloc });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setFormErrFlag(true);
      setAppInfo2Err({ ...appInfo2Err, dLocationErr: true });
      setAppInfo2({ ...appInfo2, dLocation: dloc });
      e.target.classList.add("focus-red");
      e.target.classList.remove("focus-green");
    }
  };
  // ========================================================desired position validation=================
  const checkPosition = (e) => {
    const pos = e.target.value.trim();

    if (pos.length > 0) {
      setFormErrFlag(false);
      setAppInfo2Err({ ...appInfo2Err, dPositionErr: false });
      setAppInfo2({ ...appInfo2, dPosition: pos });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setFormErrFlag(true);
      setAppInfo2Err({ ...appInfo2Err, dPositionErr: true });
      setAppInfo2({ ...appInfo2, dPosition: pos });
      e.target.classList.add("focus-red");
      e.target.classList.remove("focus-green");
    }
  };
  // ========================================================desired pay range validation=================
  const checkPayRange = (e) => {
    const payRange = escape(e.target.value.trim());

    //console.log(fname.length)

    //const payPatt=/^[A-Za90-9 ]*$/
    if (payRange.length > 0 && payRange.length < 101) {
      setFormErrFlag(false);
      setAppInfo2Err({ ...appInfo2Err, dPayErr: false });
      setAppInfo2({ ...appInfo2, dPay: payRange });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setFormErrFlag(true);
      setAppInfo2Err({ ...appInfo2Err, dPayErr: true });
      setAppInfo2({ ...appInfo2, dPay: payRange });
      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // ========================================================desired schedule validation=================
  const checkSchedule = (e) => {
    const schedule = e.target.value.trim();

    if (schedule.length > 0) {
      setFormErrFlag(false);
      setAppInfo2Err({ ...appInfo2Err, dScheduleErr: false });
      setAppInfo2({ ...appInfo2, dSchedule: schedule });
      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setFormErrFlag(true);
      setAppInfo2Err({ ...appInfo2Err, dScheduleErr: true });
      setAppInfo2({ ...appInfo2, dSchedule: schedule });
      e.target.classList.add("focus-red");
      e.target.classList.remove("focus-green");
    }
  };
  // ========================================================18+ age validation=================
  const checkAge = (e) => {
    const age = e.target.value.trim();
    setAppInfo2({ ...appInfo2, isAge: age });
  };
  // ========================================================Are you eligible to work in the US validation=================
  const checkWorkEligible = (e) => {
    const eli = e.target.value.trim();
    setAppInfo2({ ...appInfo2, isEligible: eli });
  };
  // ========================================================Past Work validation=================
  const checkPastwork = (e) => {
    const pastwork = e.target.value.trim();
    const stAdd = escape(pastwork);

    if (stAdd.length > 2 && stAdd.length < 261) {
      setFormErrFlag(false);
      setAppInfo2Err({ ...appInfo2Err, everWorkPastErr: false });
      setAppInfo2({ ...appInfo2, everWorkPast: stAdd });

      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setAppInfo2Err({ ...appInfo2Err, everWorkPastErr: true });

      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // ========================================================Other Work validation=================
  const checkOtherwork = (e) => {
    const othertwork = e.target.value.trim();
    const otwork = escape(othertwork);
    if (otwork.length > 2 && otwork.length < 131) {
      setFormErrFlag(false);
      setAppInfo2Err({ ...appInfo2Err, workUnderOtherErr: false });
      setAppInfo2({ ...appInfo2, workUnderOther: otwork });

      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setAppInfo2Err({ ...appInfo2Err, workUnderOtherErr: true });

      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // ========================================================Learn about position validation=================
  const checkLearnposition = (e) => {
    const lp = e.target.value.trim();
    const lpos = escape(lp);

    if (lpos.length > 2 && lpos.length < 101) {
      setFormErrFlag(false);
      setAppInfo2Err({ ...appInfo2Err, learnAboutPosErr: false });
      setAppInfo2({ ...appInfo2, learnAboutPos: lpos });

      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setAppInfo2Err({ ...appInfo2Err, learnAboutPosErr: true });

      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };
  // ========================================================what attract validation=================
  const checkWhatattracted = (e) => {
    const atxt = e.target.value.trim();
    const atr = escape(atxt);

    if (atr.length > 2 && atr.length < 261) {
      setFormErrFlag(false);
      setAppInfo2Err({ ...appInfo2Err, whatAttractedErr: false });
      setAppInfo2({ ...appInfo2, whatAttracted: atr });

      e.target.classList.remove("focus-red");
      e.target.classList.add("focus-green");
    } else {
      setAppInfo2Err({ ...appInfo2Err, whatAttractedErr: true });

      e.target.classList.remove("focus-green");
      e.target.classList.add("focus-red");
    }
  };

  return (
    <div>
      <div className="form-holedr">
        {/*========================  contact form row desired LOCATION + Position Desired*=======================*/}
        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
          <div className="form-col w-full md:w-[49%]">
            <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
              Desired Location *
            </p>

            <select
              onChange={(e) => checkLocation(e)}
              defaultValue={appInfo2.dLocation}
              className={
                "w-full event-input border-0 md:py-3 px-4 bg-white focus:ring-transparent " +
                (appInfo2.dLocation.length > 0 ? "focus-green" : "") +
                (appInfo2Err.dLocationErr == true ? "focus-red" : "")
              }
            >
              <option value="">Select location</option>
              {locationlist.map((item, index) => {
                return item.cities.map((itm) => {
                  return (
                    <option
                      key={index + itm.id}
                      value={itm.city + ", " + item.state}
                    >
                      {itm.city}, {item.state}
                    </option>
                  );
                });
              })}
            </select>

            {appInfo2Err.dLocationErr && (
              <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                Select your desired location
              </p>
            )}
            {prevFormErr &&
              appInfo2.dLocation == "" &&
              !appInfo2Err.dLocationErr && (
                <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                  Select your desired location
                </p>
              )}
          </div>
          <div className="form-col w-full md:w-[49%]">
            <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
              Desired Position *
            </p>

            <select
              onChange={(e) => checkPosition(e)}
              defaultValue={appInfo2.dPosition}
              className={
                "w-full event-input border-0 md:py-3 px-4 bg-white focus:ring-transparent " +
                (appInfo2.dPosition > 0 ? "focus-green" : "") +
                (appInfo2Err.dPositionErr == true ? "focus-red" : "")
              }
            >
              <option value="">Select position</option>
              <option value="Associate">Associate </option>
              <option value="Team Lead">Team Lead </option>
              <option value="Assistant Manager">Assistant Manager </option>
              <option value="Store Manager">Store Manager</option>
            </select>
            {appInfo2Err.dPositionErr && (
              <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                Select your desired job position
              </p>
            )}
            {prevFormErr &&
              appInfo2.dPosition == "" &&
              !appInfo2Err.dPositionErr && (
                <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                  Select your desired job position
                </p>
              )}
          </div>
        </div>
        {/*======================== contact form row LOCATION + Position Desired* end=======================*/}
        {/*========================  contact form row pay range + d schedule=======================*/}
        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
          <div className="form-col w-full md:w-[49%]">
            <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
              Desired Pay Range ($) *{" "}
            </p>
            <input
              type="text"
              onChange={(e) => checkPayRange(e)}
              defaultValue={appInfo2.dPay}
              className={
                "w-full event-input border-0 md:py-3 px-4 bg-white focus:ring-transparent " +
                (appInfo2.dPay.length > 2 ? "focus-green" : "") +
                (appInfo2Err.dPayErr == true ? "focus-red" : "")
              }
            ></input>
            {appInfo2Err.dPayErr && appInfo2.dPay.length > 0 && (
              <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                Invalid
              </p>
            )}
            {appInfo2Err.dPayErr && appInfo2.dPay.length == 0 && (
              <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                This field must not be empty
              </p>
            )}
            {prevFormErr && appInfo2.dPay == "" && !appInfo2Err.dPayErr && (
              <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                This field must not be empty
              </p>
            )}
          </div>
          <div className="form-col w-full md:w-[49%]">
            <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
              Desired Schedule (i.e. FT/PT) *
            </p>
            <select
              onChange={(e) => checkSchedule(e)}
              defaultValue={appInfo2.dSchedule}
              className={
                "w-full event-input border-0 md:py-3 px-4 bg-white focus:ring-transparent " +
                (appInfo2.dSchedule > 0 ? "focus-green" : "") +
                (appInfo2Err.dScheduleErr == true ? "focus-red" : "")
              }
            >
              <option value="">Select schedule</option>
              <option value="Full Time">Full Time </option>
              <option value="Part Time">Part Time </option>
              <option value="Other">Other</option>
            </select>
            {appInfo2Err.dScheduleErr && (
              <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                Select your desired schedule
              </p>
            )}
            {prevFormErr &&
              appInfo2.dSchedule == "" &&
              !appInfo2Err.dScheduleErr && (
                <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                  Select your desired schedule
                </p>
              )}
          </div>
        </div>
        {/*======================== pay range + d schedule end=======================*/}
        {/*======================== are u  18+?    + eligible   2=======================*/}
        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-4">
          <div className="form-col w-full md:w-[48%]">
            <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
              Are you 18 years of age or older? *
            </p>
            <div className="flex space-x-8 items-center mt-2 md:mt-4">
              <div className="flex space-x-3 items-center">
                <input
                  onChange={(e) => checkAge(e)}
                  type="radio"
                  name="isAge"
                  value="Yes"
                  checked={appInfo2.isAge == "Yes"}
                  id="age-yes"
                  className="th-radio"
                />

                <label htmlFor="age-yes">Yes</label>
              </div>
              <div className="flex space-x-3 items-center">
                <input
                  onChange={(e) => checkAge(e)}
                  type="radio"
                  name="isAge"
                  value="No"
                  checked={appInfo2.isAge == "No"}
                  id="age-no"
                  className="th-radio"
                />
                <label htmlFor="age-no">No</label>
              </div>
            </div>
            {prevFormErr && appInfo2.isAge == "" && (
              <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                Check if you are 18+ or not
              </p>
            )}
          </div>
          <div className="form-col w-full md:w-[48%]">
            <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
              Are you eligible to work in the US? *
            </p>
            <div className="flex space-x-8 items-center  mt-2 md:mt-4">
              <div className="flex space-x-3 items-center">
                <input
                  onChange={(e) => checkWorkEligible(e)}
                  type="radio"
                  name="isEligible"
                  checked={appInfo2.isEligible == "Yes"}
                  value="Yes"
                  id="el-yes"
                  className="th-radio"
                />

                <label htmlFor="el-yes">Yes</label>
              </div>
              <div className="flex space-x-3 items-center">
                <input
                  onChange={(e) => checkWorkEligible(e)}
                  type="radio"
                  name="isEligible"
                  checked={appInfo2.isEligible == "No"}
                  value="No"
                  id="el-no"
                  className="th-radio"
                />
                <label htmlFor="el-no">No</label>
              </div>
            </div>
            {prevFormErr && appInfo2.isEligible == "" && (
              <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                Check if you are eligible or not
              </p>
            )}
          </div>
        </div>
        {/*======================== 18+?    + eligible end=======================*/}
        {/*========================  Have you ever worked for All In Adventures =======================*/}
        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
          <div className="form-col w-full ">
            <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
              Have you ever worked for All In Adventures, Escape the Mystery
              Room, or Mystery Room in the past?{" "}
            </p>

            <textarea
              onChange={(e) => checkPastwork(e)}
              defaultValue={appInfo2.everWorkPast}
              className={
                "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-white focus:ring-transparent " +
                (appInfo2.everWorkPast.length > 0 ? "focus-green" : "")
              }
              placeholder="If yes, where/when?"
            ></textarea>
            {appInfo2Err.everWorkPastErr && (
              <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                6-100 character allowed{" "}
              </p>
            )}
          </div>
        </div>
        {/*======================== contact form Have you ever worked for All In Adventures end=======================*/}
        {/*========================  Have you ever worked under any other names? =======================*/}
        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
          <div className="form-col w-full md:w-[49%]">
            <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
              Have you ever worked under any other names?
            </p>
            <input
              type="text"
              onChange={(e) => checkOtherwork(e)}
              defaultValue={appInfo2.workUnderOther}
              className={
                "w-full event-input border-0 md:py-3 px-4 bg-white focus:ring-transparent " +
                (appInfo2.workUnderOther.length > 2 ? "focus-green" : "")
              }
              placeholder="If so, list other name(s)."
            ></input>
            {appInfo2Err.workUnderOtherErr && (
              <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                3-100 character allowed{" "}
              </p>
            )}
          </div>
          <div className="form-col w-full md:w-[49%]">
            <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">
              How did you learn about the position?
            </p>
            <input
              type="text"
              onChange={(e) => checkLearnposition(e)}
              defaultValue={appInfo2.learnAboutPos}
              className={
                "w-full event-input border-0 md:py-3 px-4 bg-white focus:ring-transparent " +
                (appInfo2.learnAboutPos.length > 5 ? "focus-green" : "")
              }
              placeholder="Friend / Social media / others..."
            ></input>
            {appInfo2Err.learnAboutPosErr && (
              <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                6-100 character allowed{" "}
              </p>
            )}
          </div>
        </div>
        {/*======================== contact form Have you ever worked under any other names? end=======================*/}
        {/*========================  Have you ever worked for All In Adventures =======================*/}
        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
          <div className="form-col w-full ">
            <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">
              What attracted you to the company?{" "}
            </p>

            <textarea
              onChange={(e) => checkWhatattracted(e)}
              defaultValue={appInfo2.whatAttracted}
              className={
                "w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-white focus:ring-transparent " +
                (appInfo2.whatAttracted.length > 0 ? "focus-green" : "")
              }
            ></textarea>
            {appInfo2Err.whatAttractedErr && (
              <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">
                6-120 character allowed{" "}
              </p>
            )}
          </div>
        </div>
        {/*======================== contact form Have you ever worked for All In Adventures end=======================*/}
      </div>
    </div>
  );
};

export default ApplicantInfo2;
