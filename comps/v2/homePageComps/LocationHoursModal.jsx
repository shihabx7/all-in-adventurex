import { FiX } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
const formateDate = (dt) => {
  let dtArr = dt.split("-");
  return dtArr[1] + "-" + dtArr[2] + "-" + dtArr[0];
};

export default function LocationHoursModal({
  locationName,
  mall,
  businessHours,
  holidayHours,
  showHours,
  setShowHours,
  hourTable,
  setHourTable,
}) {
  const hourref = useRef();

  const closeHourDetails = () => {
    setHourTable(null);
    setShowHours(false);
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
  };
  useEffect(() => {
    const checkIfClickedOutsidehrs = (e) => {
      if (showHours && hourref.current && !hourref.current.contains(e.target)) {
        setShowHours(false);
        const body = document.getElementsByTagName("body")[0];
        body.classList.remove("overflow-hidden");
      }
    };
    document.addEventListener("mouseup", checkIfClickedOutsidehrs);
    return () => {
      document.removeEventListener("mouseup", checkIfClickedOutsidehrs);
    };
  }, [showHours]);

  return (
    <div className="store-businesshour-modal overflow-y-scroll h-screen w-screen bg-[rgba(0,0,0,0.8)] z-[1000000] top-0 left-0  pb-10 md:pb-0 fixed transition-all transition ease-in-out duration-700">
      <div className="max-w-[600px] mx-auto px-3 md:px-6 lg:px-4 relative">
        <div
          onClick={closeHourDetails}
          id="lochourclose"
          className="location-close-box flex justify-end pt-1 px-2 md:px-4 text-gray-400 text-xl md:text-2xl lg:text-3xl absolute top-[-50px] right-[4px] md:top-[-70px] xl:top-[-60px] xl:right-[-40px]"
        >
          <span className="inline-block p-1 border-2 border-red-600 text-red-600 rounded-full cursor-pointer hover:border-light-gold hover:text-gold">
            <FiX />
          </span>
        </div>
        <div
          ref={hourref}
          className="bg-[#FFF7E9] pt-5 lg:pt-8 mt-[60px] md:top-[80px] lg:mt-[92px] border-2 border-[#CA9342]"
        >
          <div className="modal-title text-center mb-6">
            <h2 className="dark-gold font-medium text-[1.7rem] uppercase md:text-[2.2rem] lg:text-[2.4rem] font-os ">
              All in adventures
            </h2>
            <p className="text-[.9rem] md:text-[1.25rem] font-medium">
              {"At " + mall + " in " + locationName}
            </p>
          </div>
          {/** business hours and holiday-hours start */}
          <div className="loc-business-hrs-tbl flex flex-col  md:flex-row border-y border-[#D2C6AA]">
            {hourTable == "business" && (
              <div className="loc-tb-hrs w-full ">
                <div className="pt-2 pb-2 px-2 md:px-2 md:py-3 lg:px-4 tbl-h border-b border-[#D2C6AA]">
                  <h3 className="text-[#232323] font-medium lg:text-lg">
                    Standard Business Hours
                  </h3>
                  <p className="font-thin text-sm lg:text-base">
                    Hours may vary sometimes
                  </p>
                </div>
                <div className="tbl-cont px-2 md:px-1 lg:px-2 py-2 ">
                  {/*======================business hours  table===== */}
                  {businessHours ? (
                    <table className="bhour-row table-auto border-collapse  text-[#464646] w-full">
                      <tbody>
                        <tr>
                          <td className=" capitalize px-2 py-1 font-medium ">
                            Day
                          </td>
                          <td className=" px-2 py-1 font-medium ">Open</td>
                          <td className=" px-2 py-1 font-medium ">Close</td>
                        </tr>
                        {businessHours.map((hours) => {
                          return (
                            <tr key={hours.id}>
                              <td className="capitalize px-2 py-1 text-sm lg:text-base">
                                {hours.day}
                              </td>
                              <td className="px-2 py-1 text-sm lg:text-base">
                                {!hours.isClosed ? hours.openHour : "-"}
                              </td>
                              <td className="px-2 py-1 text-sm lg:text-base ">
                                {!hours.isClosed ? hours.closeHour : "-"}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-center pt-8 font-medium text-xl text-[#222222]">
                      No Business Hours Found
                    </p>
                  )}
                  {/*======================business hours  table end===== */}
                </div>
              </div>
            )}
            {/*======================Holiday Hours  start===== */}
            {hourTable == "holiday" && (
              <div className="loc-holiday-tb-hrs md:border-l border-[#D2C6AA] w-full">
                <div className="pt-2 pb-2 px-2 md:px-2 md:py-3 lg:px-4 tbl-h border-t md:border-t-0 border-b border-[#D2C6AA]">
                  <h3 className="text-[#232323] font-medium lg:text-lg">
                    Holiday Hours
                  </h3>
                  <p className="font-thin text-sm lg:text-base">
                    Hours may vary sometimes
                  </p>
                </div>
                <div className="tbl-cont px-2 md:px-1 lg:px-2 py-2 ">
                  {/*======================Holiday Hours  table===== */}
                  {holidayHours ? (
                    <table className="bhour-row table-auto border-collapse text-[#464646] w-full">
                      <tbody>
                        <tr>
                          <td className="capitalize px-2 py-1 font-medium">
                            Holiday
                          </td>
                          <td className="capitalize px-2 py-1 font-medium">
                            Date
                          </td>
                          <td className="px-2 py-1 font-medium">Open</td>
                          <td className="px-2 py-1 font-medium">Close</td>
                        </tr>
                        {holidayHours.map((holiday, index) => {
                          return (
                            <tr key={holiday.id}>
                              <td className="capitalize px-2 py-1 text-xs md:text-sm lg:text-base">
                                {holiday.holidayName}
                              </td>
                              <td className="capitalize px-2 py-1 text-xs md:text-sm lg:text-base">
                                {formateDate(holiday.date)}
                              </td>
                              <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                                {holiday.stratTime}
                              </td>
                              <td className="px-2 py-1 text-xs md:text-sm lg:text-base ">
                                {holiday.closeTime}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-center pt-8 font-medium text-xl text-[#222222]">
                      No Holiday Hours Found
                    </p>
                  )}
                  {/*======================Holiday Hours table end===== */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
