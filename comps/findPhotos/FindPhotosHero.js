import { BiMap } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiHistory } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import AllPhotos from "./AllPhotos";
import SearchPhotos from "./SearchPhotos";
import {
  FaAngleRight,
  FaAngleDown,
  FaAngleUp,
  FaRegCalendarCheck,
} from "react-icons/fa";

import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";
const FindPhotosHero = (props) => {
  const [allPhotos, setAllPhotos] = useState(true);
  const [searchPhotos, setSearchPhotos] = useState(false);
  const [searchPhotoList, setSearchPhotoList] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchLocationSlug, setSearchLocationSlug] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchDateUs, setSearchDateUs] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const dropdownRef = useRef(null);

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
      if (srcPhotos.success) {
        setSearchPhotoList(srcPhotos.srcPhotolist);
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
    setAllPhotos(true);
    setSearchError(false);
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
  const checkDate = (v) => {
    let dt = new Date(v);
    console.log(dt);
    /* let formatter = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });*/

    let dy = dt.getDate().toString();
    let mn = (dt.getMonth() + 1).toString();
    let yr = dt.getFullYear().toString();

    let fdy = dy < 10 ? "0" + dy : dy;
    let fmn = mn < 10 ? "0" + mn : mn;
    // console.log("day " + fdy);
    // console.log("month " + fmn);
    //console.log("year " + yr);

    //let formateUsDate = usDate.split("/").join("-").toString();
    let formateUsDate = fmn + "-" + fdy + "-" + yr;
    // let formattedDate = formateUsDate;
    //let formattedDate = formatter.format(dt).toString();
    let formattedDate = yr + "-" + fmn + "-" + fdy;
    // formattedDate = formattedDate.split("/").reverse().join("-");
    //let formattedDateUS = usDate.split("/").join("-");
    //console.log(formattedDate);
    // console.log(formateUsDate);
    if (formattedDate != "" && formattedDate != undefined) {
      setSearchDate(formattedDate);
      setSearchDateUs(formateUsDate);
      // dateEl.classList.remove("border-[#A1A1A1]");
      // dateEl.classList.add("border-[#E25455]");
    } else {
      setErrorText("Please select your location and date.");
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
        <div className="home-hero-holder bg-[rgba(0,0,0,.7)]">
          <div className="homehero-img w-full min-h-[280px] bg-[#000000] md:hidden">
            <img
              className="w-full"
              src={props.pageData.pageHeroMobile.url}
              alt={props.pageData.pageHeroMobile.alt}
            ></img>
          </div>
          <div className="max-w-7xl home-hero-container mx-auto px-1 md:px-4 pt-0 pb-[50px] md:py-20  lg:py-28 2xl:py-32  relative z-30">
            <div className="page-benar-info">
              <p className="leading-[1.2] md:mt-0 font-semibold text-lg md:text-2xl mb-1 text-white text-center">
                ALL IN ADVENTURES
              </p>
              <h1 className="text-gold aia-shadow font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-2 rm:mb-2 md:mb-4 lg:mb-6 font-os uppercase max-w-[1000px] mx-auto">
                {/*props.pageData.pageTitle*/} FIND YOUR PHOTO
              </h1>

              <div className="pageSub text-gray-100 max-w-[820px] mx-auto text-center lg:text-lg 2xl:text-xl px-2">
                {/* dangerouslySetInnerHTML={{
                  __html: props.pageData.pageSubtitle,
                }}*/}
                Select your location, enter the date you played, and hit search
                to access your group's photo. Then, choose your photo and click
                the download icon to save your memories. Use reset to start a
                new search.
              </div>
            </div>

            <div className="photo-search-form-box mt-8 drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] flex  justify-center">
              <div className="px-2 rm:px-3 py-8 rm:py-8 md:py-10 md:px-5 lg:py-10 rounded-lg bg-[#FEF8E8] relative">
                <div
                  className={
                    searchError
                      ? "flex flex-wrap  justify-center space-x-1 rm:space-x-2  md:space-y-0 items-center md:space-x-4 "
                      : "flex flex-wrap  justify-center space-x-1 rm:space-x-2  md:space-y-0 items-center md:space-x-4  "
                  }
                >
                  {/**location dropdown box  */}
                  <div
                    className="src-ent w-[50%] rm:w-[52%] md:w-auto relative"
                    ref={dropdownRef}
                  >
                    <div
                      onClick={(e) => {
                        showLocationDrop(e);
                      }}
                      className="flex space-x-1 items-center border px-1 rm:px-2 lg:px-3 h-[40px] md:h-[40px] 2xl:h-[46px] hover:cursor-pointer border-[#A1A1A1] rounded-lg bg-white"
                    >
                      <div className="text-[18px] rm:text-[20px] md:text-[22px] lg:text-[24px] text-[#2D2D2D]">
                        <BiMap />
                      </div>

                      <div className="border-none w-[160px]  text-[13px] rm:text-[15px] md:text-base 2xl:text-lg text-[#1A1A1A]">
                        {searchLocation != "" ? searchLocation : <>Location</>}
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
                        className="ease-in duration-300  transition-top z-40 absolute w-full  max-h-[400px] md:max-h-[460px] lg:max-h-[500px] top-[120%] left-0 overflow-y-scroll "
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
                                        className=" loc-item py-2 border-b border-dark-coffee hover:cursor-pointer"
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
                    className="src-ent w-[46%] rm:w-[45%]  md:w-auto  "
                  >
                    <div className="flex space-x-1 items-center border px-1 rm:px-2 lg:px-3 h-[40px] md:h-[40px] 2xl:h-[46px] hover:cursor-pointer border-[#A1A1A1] rounded-lg bg-white">
                      <DatePicker
                        selected={searchDateUs}
                        className=" text-[13px] rm:text-[15px] md:text-base 2xl:text-lg text-[#1A1A1A] border-0 w-full dt-picker py-0 "
                        // onChange={(date) => checkDate(date)}
                        onChange={(date) => checkDate(date)}
                        placeholderText="mm-dd-yyyy"
                        strictParsing

                        /* onChange={() =>
                          alert("New date is: ", new Date(y, 0, 1, 0, 0, 0))
                        }*/
                        // value={searchDateUs}
                      />
                    </div>
                  </div>
                  {/**======= search date end====== */}
                  {/**======= Searcj btn====== */}
                  <div className="src-ent mt-3 md:mt-0">
                    <button
                      onClick={(e) => {
                        handleSearch(e);
                      }}
                      className="bg-[#FFF2F2] hover:bg-red-700 group flex space-x-1 items-center px-4 h-[40px] md:h-[40px] 2xl:h-[46px] text-[#1A1A1A]  border border-[#E25455] rounded-lg"
                    >
                      <div className="text-[18px] rm:text-[20px] md:text-[22px] lg:text-[24px] text-[#2D2D2D] group-hover:text-white">
                        <BiSearch />
                      </div>
                      <span className="photo-src-btn text-sm rm:text-base 2xl:text-lg group-hover:text-white">
                        SEARCH
                      </span>
                    </button>
                  </div>
                  {/**======= Searcj btn end====== */}
                  {/**==========reset src  */}
                  <div className="src-ent mt-3 md:mt-0">
                    <button
                      onClick={() => {
                        resetSrc();
                      }}
                      className="bg-white hover:bg-red-700  text-[18px] rm:text-[20px] md:text-[22px] lg:text-[24px] photo-src-reset flex  items-center px-3 h-[40px] md:h-[40px] 2xl:h-[46px] text-[#1A1A1A] hover:text-white  border border-[#A1A1A1] hover:border-[#E25455] rounded-lg"
                    >
                      <BiHistory />
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
      {/**==========phot gallery section */}
      <div className="customer-photos-section bg-[#FEF8E8]">
        <div className="max-w-7xl home-hero-container mx-auto pt-28  pb-16 md:py-20  lg:py-28 ">
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
      {/**==========phot gallery section end*/}
    </>
  );
};

export default FindPhotosHero;
