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
  const [prevSearch, setPrevSearch] = useState({});
  const [searchCount, setSearchCount] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [searchSchedule, setSearchSchedule] = useState("");
  const [searchLocation, setSearcLocation] = useState("");
  const [searchPosition, setSearchPosition] = useState("");
  const [searchWorkplace, setSearchWorkplace] = useState("");

  const resetSearch = () => {
    setIsSearching(false);
    setSearchSchedule("");
    setSearcLocation("");
    setSearchPosition("");
    setSearchWorkplace("");
    setPrevSearch({});
    setSearchCount(0);
    setIsErr(false);
    setSrcMsg(null);
    setJobSearchList([]);
  };
  useEffect(() => {
    return resetSearch();
  }, []);
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
  const isSameSearch = () => {
    const isDuplicate =
      searchSchedule === prevSearch.searchSchedule &&
      searchLocation === prevSearch.searchLocation &&
      searchPosition === prevSearch.searchPosition &&
      searchWorkplace === prevSearch.searchWorkplace;

    if (isDuplicate) {
      return true;
    }
    return false;
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
      setSrcMsg("No search option selected. Please select at least one field");
      // console.log(srcMsg);
      return;
    }
    if (isSameSearch()) {
      setIsErr(true);
      setSrcMsg("Please change search option");
      // console.log(srcMsg);
      return;
    }
    setIsSearching(true);
    setPrevSearch({
      searchSchedule: searchSchedule,
      searchLocation: searchLocation,
      searchPosition: searchPosition,
      searchWorkplace: searchWorkplace,
    });
    const formPayload = new FormData();

    formPayload.append("schedule", searchSchedule);
    formPayload.append("location", searchLocation);
    formPayload.append("position", searchPosition);
    formPayload.append("workplace", searchWorkplace);

    // console.log("sending job search request.....");

    console.log("payload-data : ", formPayload);
    console.log("prev search : ", JSON.stringify(prevSearch));
    const srNo = searchCount + 1;
    setSearchCount(srNo);
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
        // clearSearch();
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
    <div className="job-search-box relative">
      <div className="job-search-bar border border-[#DFD7CB] rounded-[10px] bg-white/60 px-3 py-4 rm:px-4 md:p-4  2xl:p-5">
        <form
          onSubmit={(e) => {
            submitSearch(e);
          }}
          className="search-form "
        >
          <div className="flex flex-wrap justify-between sm:justify-evenly items-end gap-x-0 gap-y-5 xm:gap-y-6 zm:gap-x-1 md md:gap-1 lg:gap-3 xl:gap-4">
            {/*==== ========================================================search by schedule*/}
            <div className="input-wrapper w-[48%] sm:w-[20%] md:w-[21%] xl:w-[20.5%]  relative">
              <p className="text-sm lg:text-base mb-1 sm:mb-1.5  text-[#66706C]">
                Schedule
              </p>
              <select
                onChange={(e) => {
                  setSearchSchedule(e.target.value);
                  setIsSearching(false);
                }}
                value={searchSchedule}
                className="w-full h-[36px] rm:h-[39px] xm:h-[40px] zm:h-[42px] md:h-[44px] xl:h-[48px]  border border-[#DFD7CB] rounded-[6px] bg-white/90 px-2 py-1.5 md:p-2 xl:p-3 text-xs xm:text-sm zm:text-[.7rem] sm:text-xs md:text-sm  xl:text-base text-[#0F0F0F]"
              >
                <option value="">Select Schedule</option>
                <option value="Full-Time">Full Time</option>
                <option value="Part-Time">Part Time</option>
                <option value="Others">Others</option>
              </select>
            </div>
            {/*==== ========================================================search by locations*/}
            <div className="input-wrapper  w-[48%] sm:w-[20%] md:w-[21%] xl:w-[20.5%] relative">
              <p className="text-sm lg:text-base mb-1 sm:mb-1.5 text-[#66706C]">
                Location
              </p>
              <select
                onChange={(e) => {
                  setSearcLocation(e.target.value);
                  setIsSearching(false);
                }}
                value={searchLocation}
                className="w-full h-[36px] rm:h-[39px] xm:h-[40px] zm:h-[42px] md:h-[44px] xl:h-[48px] border border-[#DFD7CB] rounded-[6px] bg-white/90 p-2 md:p-2 xl:p-3 text-xs xm:text-sm zm:text-[.7rem] sm:text-xs md:text-sm xl:text-base text-[#0F0F0F]"
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
            <div className="input-wrapper w-[48%] sm:w-[20%] md:w-[21%] xl:w-[20.5%]  relative">
              <p className="text-sm lg:text-base mb-1 sm:mb-1.5  text-[#66706C]">
                Position
              </p>
              <select
                onChange={(e) => {
                  setSearchPosition(e.target.value);
                  setIsSearching(false);
                }}
                value={searchPosition}
                className="w-full h-[36px] rm:h-[39px] xm:h-[40px] zm:h-[42px] md:h-[44px] xl:h-[48px] border border-[#DFD7CB] rounded-[6px] bg-white/90 p-2 md:p-2 xl:p-3 text-xs xm:text-sm zm:text-[.7rem] sm:text-xs md:text-sm  xl:text-base text-[#0F0F0F]"
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
            <div className="input-wrapper w-[48%] sm:w-[20%] md:w-[21%] xl:w-[20.5%]  relative">
              <p className="text-sm lg:text-base mb-1 sm:mb-1.5  text-[#66706C]">
                Workplace
              </p>
              <select
                onChange={(e) => {
                  setSearchWorkplace(e.target.value);
                  setIsSearching(false);
                }}
                value={searchWorkplace}
                className="w-full h-[36px] rm:h-[39px] xm:h-[40px] zm:h-[42px] md:h-[44px] xl:h-[48px] border border-[#DFD7CB] rounded-[6px] bg-white/90 p-2 md:p-2 xl:p-3 text-xs xm:text-sm zm:text-[.7rem] sm:text-xs md:text-sm  xl:text-base text-[#0F0F0F]"
              >
                <option value="">Select Workplace</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            {/*==== ========================================================buttons search+ reset*/}
            <div className="button-wrapper w-full  sm:w-auto sm:flex-grow relative">
              {isSearching && (
                <div className="w-full  bg-[#231800] rounded-[6px] h-[36px] rm:h-[39px] xm:h-[40px] zm:h-[42px] md:h-[44px] xl:h-[48px] border border-[#231800]  flex justify-center items-center">
                  <p className=" text-sm sm:text-xs md:text-sm xl:text-base  font-medium text-gold text-center">
                    Searching  ...
                  </p>
                </div>
              )}
              {!isSearching && (
                <div className="search-submit-btn">
                  <button
                    disabled={isSearching}
                    type="submit"
                    className="w-full bg-[#231800] flex justify-center items-center space-x-4 sm:space-x-1 md:space-x-2 h-[36px] rm:h-[39px] xm:h-[40px] zm:h-[42px] md:h-[44px] xl:h-[48px] border border-[#231800] hover:bg-red-700 hover:border-red-700 text-white hover:text-white rounded-[6px]  py-2 px-3 xm:px-4 md:px-5  md:py-2 xl:py-3 "
                  >
                    <span className="text-sm sm:text-xs md:text-sm xl:text-base">
                      {searchCount > 0 ? "Try Again" : "Find Now"}
                    </span>

                    <span className=" sm:text-[1.1rem] md:text-[1.15rem] xl:text-xl">
                      {searchCount > 0 ? (
                        <span className="sm:text-[1.1rem] md:text-[1.15rem] xl:text-xl">
                          <MdOutlineRefresh />
                        </span>
                      ) : (
                        <span className="sm:text-[1.1rem] md:text-[1.15rem] xl:text-xl">
                          <GoSearch />
                        </span>
                      )}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
      {/**===============================msg box */}
      <div className="w-full absolute top-full left-0">
        <div className="form-msg min-h-8 mt-2 text-[.875rem] sm:text-[1.1rem] md:text-[1.15rem] font-medium flex flex-col justify-center items-center ">
          {isErr && srcMsg !== null && (
            <p className="err font-medium text-red-700 text-[.75rem] lm:text-[.85rem] sm:text-[.9rem] md:text-[.96rem]">
              {srcMsg}
            </p>
          )}
          {!isErr && srcMsg !== null && (
            <p className=" font-medium text-green-800">{srcMsg}</p>
          )}
        </div>
      </div>
    </div>
  );
}
