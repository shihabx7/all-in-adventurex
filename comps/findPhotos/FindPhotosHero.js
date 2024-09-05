import { BiMap } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

import { useState, useEffect, useRef } from "react";
import AllPhotos from "./AllPhotos";
import SearchPhotos from "./SearchPhotos";

import {
  FaAngleRight,
  FaAngleDown,
  FaUndo,
  FaRegCalendarCheck,
} from "react-icons/fa";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const FindPhotosHero = (props) => {
  const [allPhotos, setAllPhotos] = useState(true);
  const [searchPhotos, setSearchPhotos] = useState(false);
  const [searchPhotoList, setSearchPhotoList] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchLocationSlug, setSearchLocationSlug] = useState("");

  const [searchError, setSearchError] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const dropdownRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState(null);
  const [searchDate, setSearchDate] = useState("");
  const [activeBtn, setActiveBtn] = useState(false);
  const [searchDateUs, setSearchDateUs] = useState("");

  // calender container

  //fetch photos
  const fetchData = async () => {
    // console.log(searchLocationSlug);
    let url =
      "/api/FindPhotos/getSearchPhotos/?locationSlug=" +
      searchLocationSlug +
      "&srcDate=" +
      searchDate;
    const req = await fetch(url, { method: "GET" });
    const srcData = await req.json();

    console.log(srcData);
    return srcData;
  };
  // search handler
  const handleSearch = async (e) => {
    e.preventDefault();
    //console.log(searchLocation);
    //console.log(searchDate);
    if (
      searchLocation != "" &&
      searchLocation != undefined &&
      searchDate != "" &&
      searchDate != undefined
    ) {
      const srcPhotos = await fetchData();
      window.location.href = "#photos";
      if (srcPhotos.success) {
        setSearchPhotoList(srcPhotos.srcPhotolist);
        setActiveBtn(true);
      } else {
        setSearchPhotoList([]);
      }
      setAllPhotos(false);
      setSearchPhotos(true);
      setSearchError(false);
    } else {
      setAllPhotos(true);
      setSearchPhotos(false);
      setSearchError(true);
      setErrorText("Please select your location and date.");
    }
  };
  // reset seearch
  const resetSrc = () => {
    setSearchLocation("");
    setSearchLocationSlug("");
    setSearchPhotos(false);
    setSearchDate("");
    setSearchDateUs("");
    setSelectedDate(null);
    setAllPhotos(true);
    setSearchError(false);
    setActiveBtn(false);
    const dateEl = document.getElementById("searchD");
    dateEl.classList.remove("border-[#E25455]");
    dateEl.classList.add("border-[#A1A1A1]");
  };
  // toggole location dropdwon
  const showLocationDrop = (e) => {
    e.preventDefault();
    setShowDrop(!showDrop);
  };
  // click outside close location dropdwon
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDrop(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [showDrop]);
  // get search location slug
  const setSrcLoc = (slug, locName) => {
    setSearchLocation(locName);
    setSearchLocationSlug(slug);
    setShowDrop(false);
  };
  // get search date
  const checkDate = (date) => {
    if (!date) return;

    try {
      const dt = new Date(date);
      console.log(dt);

      const dy = dt.getDate().toString();
      const mn = (dt.getMonth() + 1).toString();
      const yr = dt.getFullYear().toString();

      const fdy = dy.padStart(2, "0");
      const fmn = mn.padStart(2, "0");

      const formateUsDate = `${fmn}-${fdy}-${yr}`;
      const formattedDate = `${yr}-${fmn}-${fdy}`;

      setSearchDate(formattedDate);
      setSearchDateUs(formateUsDate);
      setSelectedDate(dt); // Store the actual Date object in state
    } catch (error) {
      console.error("Date parsing error:", error);
      // Handle the error appropriately
    }
  };
  return (
    <>
      <div
        className="home-hero bg-[#111111] bg-cover bg-center"
        style={{
          backgroundImage: "url('" + props.pageData.pageHeroDesktop.url + "')",
        }}
      >
        <div className="home-hero-holder bg-[rgba(0,0,0,.7)] relative pb-[57%] rm:pb-[42%] lm:pb-[28%] xm:pb-[23%] zm:pb-[6%] sm:pb-[0%]">
          <div className="homehero-img w-full min-h-[280px] bg-[#000000] md:hidden">
            <img
              className="w-full"
              src={props.pageData.pageHeroMobile.url}
              alt={props.pageData.pageHeroMobile.alt}
            ></img>
          </div>
          <div className="w-full h-full fyp-baner absolute top-0 left-0 md:hidden "></div>
          <div className="max-w-7xl  mx-auto  md:px-4 absolute top-[34%] lm:top-[39%] xm:top-[42%] sm:top-[50%] left-0 right-0 md:static   z-30 pt-0 md:pt-20  lg:pt-28 2xl:pt-32">
            <div className="page-benar-info ">
              <p className="leading-[1.2] md:mt-0 font-semibold text-lg md:text-2xl mb-1 text-white text-center">
                ALL IN ADVENTURES
              </p>
              <h1 className="text-gold aia-shadow font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-2 rm:mb-2 md:mb-4 lg:mb-6 font-os uppercase max-w-[1000px] mx-auto">
                {/*props.pageData.pageTitle*/} FIND YOUR PHOTO
              </h1>

              <div className="pageSub mt-2 rm:mt-0 text-gray-100 max-w-[540px] md:max-w-[760px] lg:max-w-[810px] mx-auto text-center text-[15px] rm:text-base sm:text-lg 2xl:text-xl px-2 rm:px-3">
                {/* dangerouslySetInnerHTML={{
                  __html: props.pageData.pageSubtitle,
                }}*/}
                Select your location, enter the date you played, and hit search
                to access your group's photo. Then, choose your photo and click
                the download icon to save your memories. Use reset to start a
                new search.
              </div>
            </div>
          </div>
          <div className="w-full md:max-w-[760px] mx-auto absolute bottom-[-16%] sm:bottom-[-9%] md:static px-1 lm:px-3 md:px-3 z-30 sm:pb-0 md:pb-20  lg:pb-28 2xl:pb-32">
            <div className=" w-full">
              <div className="w-full photo-search-form-box sm:mt-6 md:mt-8 drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] flex  justify-center">
                <div className="w-full px-1 rm:px-2 py-8 rm:py-8 md:py-10 md:px-5 lg:py-10 rounded-lg bg-[#FEF8E8] relative">
                  <div
                    className={
                      searchError
                        ? "flex flex-wrap  justify-center space-x-1 rm:space-x-2  md:space-y-0 items-center md:space-x-4 "
                        : "flex flex-wrap  justify-center space-x-1 rm:space-x-2  md:space-y-0 items-center md:space-x-4  "
                    }
                  >
                    {/**location dropdown box  */}
                    <div
                      className="src-ent w-[54%] rm:w-[54%] sm:w-[34%] md:w-auto relative"
                      ref={dropdownRef}
                    >
                      <div
                        onClick={(e) => {
                          showLocationDrop(e);
                        }}
                        className="flex space-x-1 items-center justify-between border px-1 rm:px-1 lg:px-3 h-[40px] md:h-[40px] 2xl:h-[46px] hover:cursor-pointer border-[#A1A1A1] rounded-lg bg-white"
                      >
                        <div className="text-[18px] rm:text-[20px] md:text-[22px] lg:text-[24px] text-[#2D2D2D]">
                          <BiMap />
                        </div>

                        <div className="border-none w-[160px]  text-[12px] rm:text-[14px] md:text-base 2xl:text-lg text-[#1A1A1A]">
                          {searchLocation != "" ? (
                            searchLocation
                          ) : (
                            <>Location</>
                          )}
                        </div>
                        <div
                          className={
                            !showDrop
                              ? "text-[18px] rm:text-[20px] md:text-[22px] lg:text-[24px] text-[#2D2D2D]"
                              : "rotate-180 text-[18px] rm:text-[22px] md:text-[20px] lg:text-[24px] text-[#2D2D2D]"
                          }
                        >
                          <FaAngleDown />
                        </div>
                      </div>
                      {/**=================== location dropdown============ */}
                      {showDrop && (
                        <div
                          id="srcloc"
                          className="ease-in duration-300  transition-top absolute z-20  w-full  max-h-[400px] md:max-h-[460px] lg:max-h-[500px] top-[120%] left-0 overflow-y-scroll "
                        >
                          <div className="bg-[#2a2a2a] p-3 ">
                            {props.locationSlugList.map((loc) => {
                              return (
                                <div key={loc.id}>
                                  <div className="src-menu my-1">
                                    <h3 className="text-light-gold text-[15px] md:text-[17px] font-bold leading-[1.2]">
                                      <span className="inline-block pb-1 border-b border-light-gold">
                                        {loc.stateName}
                                      </span>
                                    </h3>
                                  </div>
                                  <div className="loc-item-box py-1 border-dark-coffee">
                                    {loc.locations.map((item) => {
                                      return (
                                        <div
                                          key={loc.id + item.id}
                                          className="loc-item py-2 border-b border-dark-coffee hover:cursor-pointer"
                                          onClick={() =>
                                            setSrcLoc(
                                              item.locationSlug,
                                              item.locationName
                                            )
                                          }
                                        >
                                          <div className="loc-link">
                                            <div className="flex space-x-1 items-center text-sm md:text-base">
                                              <span className="golden-text text-[14px] md:text-[15px]">
                                                {item.locationName}
                                              </span>
                                              <span className="text-gold">
                                                <FaAngleRight />
                                              </span>
                                            </div>
                                            <div className="text-gray-500  text-xs md:text-sm ">
                                              {item.mall}
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      {/**=================== location dropdown============= */}
                    </div>
                    {/**location dropdown box  end */}
                    {/**======= search date====== */}
                    <div
                      id="searchD"
                      className="src-ent w-[44%] rm:w-[40%] sm:w-[30%]  md:w-[200px]  "
                    >
                      <div className="relative border px-1 rm:px-2 lg:px-3 h-[40px] md:h-[40px] 2xl:h-[46px] hover:cursor-pointer border-[#A1A1A1] rounded-lg bg-white">
                        <div className="absolute top-[11px] md:top-[14px] right-[10px] md:right-[16px] bottom-0 my-auto ">
                          <FaRegCalendarCheck />
                        </div>
                        <div className="w-full h-full absolute top-0 left-0 bottom-0 my-auto z-20 cursor-pointer">
                          <DatePicker
                            selected={selectedDate}
                            className="focus:outline-none focus:outline-offset-0 focus:border-none focus:ring-0 text-[16px] rm:text-[16px] md:text-base 2xl:text-lg text-[#1A1A1A] border-0 w-full bg-transparent  "
                            onChange={(date) => checkDate(date)}
                            placeholderText="mm-dd-yyyy"
                          />
                        </div>
                      </div>
                    </div>
                    {/**======= search date end====== */}
                    {/**======= Searcj btn====== */}
                    <div className="src-ent mt-3 sm:mt-0">
                      <button
                        onClick={(e) => {
                          handleSearch(e);
                        }}
                        className={
                          activeBtn
                            ? "bg-red-600 hover:bg-red-700 group flex space-x-1 items-center px-4 h-[40px] md:h-[40px] 2xl:h-[46px] text-[#ffffff]  border border-[#E25455] rounded-lg"
                            : "bg-[#FFF2F2] hover:bg-red-700 group flex space-x-1 items-center px-4 h-[40px] md:h-[40px] 2xl:h-[46px] text-[#1A1A1A]  border border-[#E25455] rounded-lg"
                        }
                      >
                        <div
                          className={
                            activeBtn
                              ? "text-[18px] rm:text-[20px] md:text-[22px] lg:text-[24px] text-[#ffffff] group-hover:text-white"
                              : "text-[18px] rm:text-[20px] md:text-[22px] lg:text-[24px] text-[#2D2D2D] group-hover:text-white"
                          }
                        >
                          <BiSearch />
                        </div>
                        <span className="photo-src-btn text-sm rm:text-base 2xl:text-lg group-hover:text-white">
                          SEARCH
                        </span>
                      </button>
                    </div>
                    {/**======= Searcj btn end====== */}
                    {/**==========reset src  */}
                    <div className="src-ent mt-3 sm:mt-0">
                      <button
                        onClick={() => {
                          resetSrc();
                        }}
                        className="bg-white hover:bg-red-700 group text-[16px] rm:text-[18px] md:text-[20px] lg:text-[22px] photo-src-reset flex  items-center px-3 h-[40px] md:h-[40px] 2xl:h-[46px] text-[#7b7b7b] hover:text-white  border border-[#A1A1A1] hover:border-[#E25455] rounded-lg"
                      >
                        <FaUndo />
                      </button>
                    </div>
                    {/**==========reset src  end*/}
                  </div>
                  {searchError && (
                    <div className="absolute left-0 bottom-0 w-full text-red-700 text-[14px] rm:text-sm md:text-base text-center rounded-b-lg pb-[8px] md:pb-[12px] ">
                      {errorText}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**==========phot gallery section */}
      <div className="customer-photos-section bg-[#FEF8E8] ">
        <div className="max-w-7xl mx-auto py-12 md:py-20  lg:py-24 ">
          <div id="photos" className="pt-16 sm:pt-12 md:pt-0">
            {allPhotos && (
              <>
                <AllPhotos
                  photoList={props.photoList}
                  hasMore={props.hasMore}
                  totalLocations={props.totalLocations}
                />
              </>
            )}
            {searchPhotos && (
              <>
                <SearchPhotos
                  photoList={searchPhotoList}
                  locationName={searchLocation}
                  srcDate={searchDate}
                  searchDateUs={searchDateUs}
                />
              </>
            )}
          </div>
        </div>
      </div>
      {/**==========phot gallery section end*/}
    </>
  );
};

export default FindPhotosHero;
