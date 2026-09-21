import { GoSearch } from "react-icons/go";
import { MdOutlineRefresh } from "react-icons/md";
import { useState, useEffect } from "react";

export default function JobSearchBar({
  jobPositionList,
  jobSearchLocationList,
  setJobSearchList,
}) {
  const [srcMsg, setSrcMsg] = useState(null);
  const [isErr, setIsErr] = useState(false);
  const [searchSchedule, setSearchSchedule] = useState("");
  const [searchLocation, setSearcLocation] = useState("");
  const [searchPosition, setSearchPosition] = useState("");
  const [searchWorkplace, setSearchWorkplace] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const resetSearch = () => {
    setSearchSchedule("");
    setSearcLocation("");
    setSearchPosition("");
    setSearchWorkplace("");
    setIsErr(false);
    setSrcMsg(null);
  };
  const clearSearch = () => {
    setSearchSchedule("");
    setSearcLocation("");
    setSearchPosition("");
    setSearchWorkplace("");
  };
  const isSearchVal = () => {
    if (
      searchSchedule == "" &&
      searchLocation == "" &&
      searchPosition == "" &&
      searchWorkplace == ""
    ) {
      return false;
    }
    return true;
  };
  const submitSearch = async (e) => {
    e.preventDefault();
    // console.log("Scedule", searchSchedule);
    //console.log("lc", searchLocation);
    //console.log("sumited.....");
    setIsErr(false);
    setSrcMsg(null);
    if (!isSearchVal()) {
      setIsErr(true);
      setSrcMsg("No search Field selected. Please select at least one field");
      console.log(srcMsg);
      return;
    }
    setIsSearching(true);
    const formPayload = new FormData();

    formPayload.append("schedule", searchSchedule);
    formPayload.append("location", searchLocation);
    formPayload.append("position", searchPosition);
    formPayload.append("workplace", searchWorkplace);

    // console.log("sending job search request.....");
    console.log("payload-data : ", formPayload);

    try {
      const response = await fetch("/api/Forms/ProcessJobSearch", {
        method: "POST",
        body: formPayload, // Browser automatically applies dynamic boundary headers
      });

      const result = await response.json();

      if (response.ok) {
        setJobSearchList(result.data || []);
        setIsSearching(false);
        setIsErr(false);
        setSrcMsg(
          result.data?.length
            ? result.data.length + " job openings found."
            : "No Job openings found. Please search again",
        );
        clearSearch();
      } else {
        setIsSearching(false);
        setIsErr(true);
        setSrcMsg(`Error: ${result.message || "Failed fetching details"}`);
      }
    } catch (error) {
      setIsSearching(false);
      setIsErr(true);
      setSrcMsg("Network connectivity error.");
    }
  };
  return (
    <div className="job-search-bar border border-[#DFD7CB] rounded-[10px] bg-white/60 p-3 md:p-4  2xl:px-5">
      <form
        onSubmit={(e) => {
          submitSearch(e);
        }}
        className="search-form "
      >
        <div className="flex flex-wrap justify-evenly items-end gap-x-0 gap-y-3 md:gap-2 lg:gap-3 xl:gap-4">
          {/*==== ========================================================search by schedule*/}
          <div className="input-wrapper w-[47%] md:w-[21%] xl:w-[20.5%]  relative">
            <p className="text-sm xl:text-base mb-2 text-[#66706C]">Schedule</p>
            <select
              onChange={(e) => {
                setSearchSchedule(e.target.value);
                setIsSearching(false);
              }}
              value={searchSchedule}
              className="w-full border border-[#DFD7CB] rounded-[6px] bg-white/90 p-2 md:p-2 xl:p-3 text-sm xl:text-base text-[#0F0F0F]"
            >
              <option value="">Select Schedule</option>
              <option value="Full-Time">Full Time</option>
              <option value="Part-Time">Part Time</option>
              <option value="Others">Others</option>
            </select>
          </div>
          {/*==== ========================================================search by locations*/}
          <div className="input-wrapper w-[47%]  md:w-[21%] xl:w-[20.5%] relative">
            <p className="text-sm  xl:text-base mb-2 text-[#66706C]">
              Location
            </p>
            <select
              onChange={(e) => {
                setSearcLocation(e.target.value);
                setIsSearching(false);
              }}
              value={searchLocation}
              className="w-full border border-[#DFD7CB] rounded-[6px] bg-white/90 p-2 md:p-2 xl:p-3 text-sm xl:text-base text-[#0F0F0F]"
            >
              <option value="">Select Location</option>
              {jobSearchLocationList.map((item, index) => {
                return (
                  <option key={index} value={item.locationSlug}>
                    {item.locationName}
                  </option>
                );
              })}
            </select>
          </div>
          {/*==== ========================================================search by Positions*/}
          <div className="input-wrapper w-[47%]  md:w-[21%] xl:w-[20.5%] relative">
            <p className="text-sm xl:text-base mb-2 text-[#66706C]">Position</p>
            <select
              onChange={(e) => {
                setSearchPosition(e.target.value);
                setIsSearching(false);
              }}
              value={searchPosition}
              className="w-full border border-[#DFD7CB] rounded-[6px] bg-white/90 p-2 md:p-2 xl:p-3 text-sm xl:text-base text-[#0F0F0F]"
            >
              <option value="">Select Position</option>
              {jobPositionList.map((item, index) => {
                return (
                  <option key={index} value={item.positionName}>
                    {item.positionName}
                  </option>
                );
              })}
            </select>
          </div>
          {/*==== ========================================================search by Workplace*/}
          <div className="input-wrapper w-[47%]  md:w-[21%] xl:w-[20.5%] relative">
            <p className="text-sm xl:text-base mb-2 text-[#66706C]">
              Workplace
            </p>
            <select
              onChange={(e) => {
                setSearchWorkplace(e.target.value);
                setIsSearching(false);
              }}
              value={searchWorkplace}
              className="w-full border border-[#DFD7CB] rounded-[6px] bg-white/90 p-2 md:p-2 xl:p-3 text-sm xl:text-base text-[#0F0F0F]"
            >
              <option value="">Select Workplace</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          {/*==== ========================================================buttons search+ reset*/}
          <div className="button-wrapper relative">
            <div className="flex  items-center gap-2 md:gap-3 lg:gap-4">
              <button
                disabled={isSearching}
                type="submit"
                className="inline-block border border-[#DFD7CB] rounded-[6px] bg-white/90 p-2 md:p-2 xl:p-3 text-lg md:text-2xl"
              >
                <GoSearch />
              </button>
              <button
                disabled={isSearching}
                onClick={resetSearch}
                type="reset"
                className="inline-block border border-[#DFD7CB] rounded-[6px] bg-white/60 p-2  md:p-2 xl:p-3 text-lg md:text-2xl"
              >
                <MdOutlineRefresh />
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="form-msg min-h-4 mt-2 text-sm flex flex-col justify-center items-center">
        {isErr && srcMsg !== null && (
          <p className="err font-medium text-red-600">{srcMsg}</p>
        )}
        {!isErr && srcMsg !== null && (
          <p className=" font-medium text-green-800">{srcMsg}</p>
        )}
        {isSearching && (
          <p className=" font-medium text-green-700 ">
            Searching job position for you...
          </p>
        )}
      </div>
      <p></p>
    </div>
  );
}
