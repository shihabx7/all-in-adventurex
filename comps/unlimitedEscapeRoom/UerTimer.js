import { useState, useEffect } from "react";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";

const creatTimerDur = (currentDate, randomDate) => {
  var numberOfMlSeconds = currentDate.getTime();
  var addMlSeconds = randomDate * 60 * 60 * 1000;
  var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);
  //console.log(randomDate);
  // console.log(currentDate);
  // console.log(newDateObj);
  return newDateObj;
};
const UerTimer = () => {
  const [hours, setHours] = useState(22);
  const [minutes, setMinutes] = useState(47);
  const [seconds, setSeconds] = useState(32);
  const [timeLimitDate, setTimeLimitDate] = useState(false);
  useEffect(() => {
    const uerTimerDate = getCookie("uer-time");
    // console.log(uerTimerDate);
    let currentDate = new Date();
    if (!uerTimerDate) {
      let randomDate = Math.floor(Math.random() * (72 - 24) + 24);
      let exp = randomDate * 60 * 60 - 1;
      let newTime = creatTimerDur(currentDate, randomDate);
      setCookie("uer-time", newTime, {
        path: "/",
        maxAge: exp, //604800, // Expires after 24*7 hours
        sameSite: true,
      });
      setTimeLimitDate(newTime);
    } else {
      setTimeLimitDate(uerTimerDate);
    }
  }, []);

  useEffect(() => {
    //  console.log(timeLimitDate);
    var updateTime = setInterval(() => {
      var now = new Date().getTime();
      var diffTime = new Date(timeLimitDate).getTime();
      var difference = diffTime - now;
      // console.log(diffTime);

      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      if (newDays > 0) {
        newHours = newHours + newDays * 24;
      }
      var newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      // setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        //setMessage("The Launch Has Started");
        // setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [timeLimitDate]);
  return (
    <div className="uer-timer-content w-full h-full flex justify-evenly items-center">
      <div className="uer-timer-unit w-1/3">
        {/* Hours */}
        <div className="uer-timer-unit-h mx-auto bg-[#000000] border border-1 border-[#453A23] w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[10px] flex justify-center items-center font-bold  text-[#CA9342] text-[20px] rm:text-[22px] md:text-[28px]">
          {hours}
        </div>
        <p className="text-[10px] rm:text-[11px] md:text-[14px] text-[#D1B06F] mt-1 text-center">
          HOUR
        </p>
      </div>
      <div className="uer-timer-unit w-1/3">
        {/* MUNITES */}
        <div className="uer-timer-unit-h mx-auto bg-[#000000]  border border-1 border-[#453A23] w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[10px] flex justify-center items-center font-bold  text-[#CA9342] text-[20px] rm:text-[22px] md:text-[28px]">
          {minutes}
        </div>
        <p className="text-[10px] rm:text-[11px] md:text-[14px] text-[#D1B06F] mt-1 text-center">
          MUNITES
        </p>
      </div>
      <div className="uer-timer-unit w-1/3">
        {/* seconds */}
        <div className="uer-timer-unit-h mx-auto bg-[#000000]  border border-1 border-[#453A23] w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[10px] flex justify-center items-center font-bold  text-[#CA9342] text-[20px] rm:text-[22px] md:text-[28px]">
          {seconds}
        </div>
        <p className="text-[10px] rm:text-[11px] md:text-[14px] text-[#D1B06F] mt-1 text-center">
          SECEONDS
        </p>
      </div>
    </div>
  );
};
export default UerTimer;
