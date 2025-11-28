import { useState, useEffect } from "react";


export default function BlackFridayNoticeTimer() {

  const [remainingTime, setRemainingTime] = useState({ days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,});
const formatBfdyTime = (value) => {
  return String(value).padStart(2, '0');
};
  useEffect(() => {
    const expireDate = new Date("2025-12-01T00:59:59");

    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeRemainingMs = expireDate.getTime() - currentTime.getTime();

      if (timeRemainingMs <= 0) {
        clearInterval(interval);
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const seconds = Math.floor((timeRemainingMs / 1000) % 60);
      const minutes = Math.floor((timeRemainingMs / (1000 * 60)) % 60);
      const hours = Math.floor((timeRemainingMs / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeRemainingMs / (1000 * 60 * 60 * 24));

      setRemainingTime({ days, hours, minutes, seconds });
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div className="bfdy-timer flex space-x-[1.5px]  rm:space-x-[2px] xl:space-x-2 items-center text-white text-center  ">
      <div className="timer-item-box d-box  bg-[#1D1E1F] rounded-sm px-1 py-[2px] lg:px-2 lg:py-[6px] min-w-[32px] md:min-w-[36px] lg:min-w-[42px]">
        <p className="bfdy-Day font-semibold text-[.75rem] md:text-[.9rem] lg:text-[1.1rem] 2xl:text-[1.15rem] leading-[1.1]">
          {formatBfdyTime(remainingTime.days)}
        </p>
        <p className="bfdy-label text-[.6rem] md:text-[.65rem] 2xl:text-[.7rem] text-[#B3B3B3] leading-[1]">
          Days
        </p>
      </div>
      <div className="timer-item-box d-box  bg-[#1D1E1F] rounded-sm px-1 py-[2px] lg:px-2 lg:py-[6px]  min-w-[32px] md:min-w-[36px] lg:min-w-[42px]">
        <p className="bfdy-Day font-semibold text-[.75rem] md:text-[.9rem] lg:text-[1.1rem] 2xl:text-[1.15rem] leading-[1.1]">
          {formatBfdyTime(remainingTime.hours)}
        </p>
        <p className="bfdy-label text-[.6rem] md:text-[.65rem] 2xl:text-[.7rem] text-[#B3B3B3] leading-[1]">
          Hours
        </p>
      </div>
      <div className="timer-item-box d-box  bg-[#1D1E1F] rounded-sm px-1 py-[2px] lg:px-2 lg:py-[6px]  min-w-[32px] md:min-w-[36px] lg:min-w-[42px]">
        <p className="bfdy-Day font-semibold text-[.75rem] md:text-[.9rem] lg:text-[1.1rem] 2xl:text-[1.15rem] leading-[1.1]">
          {formatBfdyTime(remainingTime.minutes)}
        </p>
        <p className="bfdy-label text-[.6rem] md:text-[.65rem] 2xl:text-[.7rem] text-[#B3B3B3] leading-[1]">Min</p>
      </div>
      <div className="timer-item-box d-box  bg-[#1D1E1F] rounded-sm px-1 py-[2px] lg:px-2 lg:py-[6px]  min-w-[32px] md:min-w-[36px] lg:min-w-[42px]">
        <p className="bfdy-Day font-semibold text-[.75rem] md:text-[.9rem] lg:text-[1.1rem] 2xl:text-[1.15rem] leading-[1.1]">
          {formatBfdyTime(remainingTime.seconds)}
        </p>
        <p className="bfdy-label text-[.6rem] md:text-[.65rem] 2xl:text-[.7rem] text-[#B3B3B3] leading-[1]">Sec</p>
      </div>
    </div>
  );
}
