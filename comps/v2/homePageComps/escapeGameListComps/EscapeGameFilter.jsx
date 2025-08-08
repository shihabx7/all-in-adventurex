import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

import { useState, useEffect, useRef } from "react";
const themeList = ["Adventure", "Mystery", "Prison Break", "Detective"];
const recList = [
  "Beginners",
  "Kids",
  "Family",
  "Experts",
  "Adults",
  "Big Group",
  "Small Group",
];

export default function EscapeGameFilter({
  gameThemeList,
  recommendList,
  currentFilter,
  setCurrentFilter,
}) {
  const dropRef = useRef(null);
  // const [currentFilter, setCurrentFilter] = useState("All Games");
  const [filterMessage, setFilterMessage] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showMobileBtn, setShowMobileBtn] = useState(false);

  // =============================================================filter mobile view function====
  const handleClickOutside = (event) => {
    //  event.preventDefault();
    if (window.innerWidth < 767) {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setShowFilter(false);
        // console.log("clicke Out");
      }
    }
  };
  const handleResize = () => setShowFilter(window.innerWidth > 767);
  useEffect(() => {
    const screenW = window.innerWidth;
    setShowFilter(screenW > 767);
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // =============================================================set filter item====
  const setfilter = (e, filterItem, msgFor) => {
    e.preventDefault();
    if (window.innerWidth < 767 && showFilter) {
      setShowFilter(false);
    }

    let msg = "";
    if (msgFor && msgFor !== "All Games") {
      if (msgFor == "theme") {
        msg = `Following games are ${filterItem} Themed`;
      } else {
        msg = `Following games are perfect for ${filterItem}`;
      }
    }
    setCurrentFilter(filterItem);
    setFilterMessage(msg);
  };
  // =============================================================clear filter item====
  const clearFilter = (e) => {
    setCurrentFilter("All Games");
    setFilterMessage("");
  };
  // toggle filter button
  const toggleFilter = (e) => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="escape-game-list-filter  relative">
      <div
        ref={dropRef}
        className="egl-filter-op-row sticky top-0 z-[30] flex flex-row items-center md:items-start md:flex-col"
      >
        {/* ======================================================== filter head ==========*/}
        <div className="egl-filter-head flex items-center max-w-[100px] md:max-w-none md:inline-block">
          <div className="flex space-x-1 md:space-x-2 items-center px-4 py-4 md:p-3 lg:p-4 md:pr-6 md:pb-2 lg:pr-8 rounded-l-[12px] md:rounded-bl-[0px] md:rounded-t-[12px] bg-[#111111] text-[#a3a3a3]">
            <span className="text-[18px] lg:text-[24px]">
              <TbAdjustmentsHorizontal />
            </span>
            <span className="text-[15px]  md:text-[15px] xl:text-[16px]">
              Filter
            </span>
          </div>
        </div>

        <div className="egl-filter-content grow md:w-full relative md:static">
          {/* ========================================================mobile filter button column ==========*/}
          <div className="select-filter-mobile w-full md:hidden">
            <button
              onClick={(e) => {
                toggleFilter(e);
              }}
              className="flex w-full pl-2 pr-3 rm:px-6 xm:px-8 py-4 bg-[#111111] text-[#fcfcfc] justify-between items-center rounded-r-[12px]"
            >
              <span className="text-[15px] lg:text-[15px] xl:text-[16px]">
                {currentFilter}
              </span>
              <span className="text-[20px] lg:text-[24px]">
                <FaAngleDown />
              </span>
            </button>
          </div>
          {/*======================================filter row */}
          {showFilter && (
            <div className="min-w-[260px] rm:min-w-[280px] lm:min-w-[98%] absolute top-[88%] right-0  h-[372px] lm:h-[416px] overflow-y-auto md:h-auto md:static md:min-w-fit z-[40]">
              <div className="egl-filter-row  flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 lg:space-x-4 xl:space-x-6 item-center p-4 md:p-3 lg:p-4 rounded-[12px] rounded-tl-[0px] bg-[#111111] ">
                {/* ========================================================filter column 1*==========*/}
                <div className="egl-filter-col grow min-w-[140px] lg:min-w-[180px] px-4 pt-3 pb-2 lg:p-4 rounded-[10px] bg-[#1c1c1c]">
                  <h4 className="text-white text-[14px] lg:text-[15px] xl:text-[16px] font-bold word-space-lg letter-space-lg uppercase md:text-center">
                    ESCAPE ROOMS
                  </h4>
                  <div className="filter-btn-list md:text-center flex md:justify-center md:items-center">
                    <div className="mt-[5px] md:mt-2">
                      <button
                        onClick={(e) => {
                          setfilter(e, "All Games", "All Games");
                        }}
                        className={
                          "text-[#f1f1f1] text-[15px] md:text-[14px] lg:text-[14px] xl:text-[15px] hover:text-[#fdfdfd] pt-[3px] pl-2 pb-[2px] md:pl-0 lg:pb-[3px] border-b-[2px]  border-transparent hover:border-[#ca9342] transition transition-dureation-500"
                        }
                      >
                        All Games
                      </button>
                    </div>
                  </div>
                </div>
                {/* ========================================================filter column 2*==========*/}
                <div className="egl-filter-col px-4 pt-3 pb-2 lg:p-4 rounded-[10px] bg-[#1c1c1c] grow overflow-x-auto">
                  <h4 className="text-white text-[14px] lg:text-[15px] xl:text-[16px] font-bold word-space-lg letter-space-lg uppercase">
                    Game Themes
                  </h4>
                  <div className=" mt-[5px] md:mt-2 pl-2 lg:pl-3 xl:pl-4 filter-btn-list text-center flex flex-col md:flex-row items-start flex-wrap ">
                    {gameThemeList.map((item, index) => {
                      return (
                        <button
                          key={index}
                          onClick={(e) => {
                            setfilter(e, item, "theme");
                          }}
                          className="text-[#808080] text-[15px] md:text-[14px] lg:text-[14px] xl:text-[15px] hover:text-[#fdfdfd] pt-[3px] pb-[2px] lg:pb-[3px] border-b-[2px] border-transparent hover:border-[#ca9342] transition transition-dureation-500 mr-2 lg:mr-3 xl:mr-4"
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {/* ========================================================filter column 3*==========*/}
                <div className="egl-filter-col px-4 pt-3 pb-2 lg:p-4 rounded-[10px] bg-[#1c1c1c] grow overflow-x-auto">
                  <h4 className="text-white text-[14px] lg:text-[15px] xl:text-[16px] font-bold word-space-lg letter-space-lg uppercase">
                    Recommended for
                  </h4>
                  <div className=" mt-[5px] md:mt-2 pl-2 lg:pl-3 xl:pl-4 filter-btn-list text-center flex flex-col md:flex-row items-start flex-wrap">
                    {recommendList.map((item, index) => {
                      return (
                        <button
                          key={index}
                          onClick={(e) => {
                            setfilter(e, item, "recomended");
                          }}
                          className="text-[#808080] text-[15px] md:text-[13px] lg:text-[14px] xl:text-[15px] hover:text-[#fdfdfd] pt-[3px] pb-[2px] lg:pb-[3px] border-b-[2px]  border-transparent hover:border-[#E0BF62] transition transition-dureation-500 mr-2 lg:mr-3 xl:mr-4 "
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/*======================================filter row */}
        </div>
      </div>
      {/*======================================filter clear message */}
      <div className="egl-filter-clear-row min-h-[36px] lg:min-h-[42px] py-1 md:py-2 px-3 md:px-6">
        {filterMessage.length > 0 && (
          <div className="flex flex-col md:flex-row h-full space-y-[2px] md:space-y-0 md:items-center  md:space-x-6">
            <p className="text-[#fefefe] text-[13px] md:text-[14px] lg:text-[15px]">
              {filterMessage}
            </p>
            <div>
              <button
                onClick={(e) => {
                  clearFilter(e);
                }}
                className="flex space-x-1 items-center text-[#a3a3a3]"
              >
                <span className="text-[18px] md:text-[20px] lg:text-[22px]">
                  <TbAdjustmentsHorizontal />
                </span>
                <span className="text-[13px] md:text-[14px] lg:text-[15px]  underline underline-offset-2">
                  Clear Filter
                </span>
                <span className="text-[16px] lg:text-[18px] text-red-600 hover:text-red-700 mt-[2px] ml-[2px]">
                  <MdOutlineClose />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
