import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import TitleSeparator from "../util/TitleSeparator";
import LocationListCard from "./LocationListCard";

const LocationList = (props) => {
  const [showLocList, setShowLoclist] = useState("ALL");

  const [catBoxWidth, setCatBoxWidth] = useState(0);
  const [catItemsWidth, setCatItemsWidth] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [currentNav, setCurrentNav] = useState(0);
  const [showNext, setShowNext] = useState(true);
  const [showPrev, setShowPrev] = useState(false);

  const setTopPadding = () => {
    let headerHeight = document.getElementById("header").offsetHeight;
    document.getElementById("mainContent").style.paddingTop =
      headerHeight + "px";
  };
  const countTotalLocation = (arr) => {
    var i;
    var total = 0;
    for (i = 0; i < arr.length; i++) {
      total = total + arr[i].locationList.length;
    }
    return total;
  };
  const ScrollTab = (id) => {
    const tabBox = document.getElementById("loc-tab-list-box");
    const tabList = document.getElementById("loc-tab-list").children;
    const tablength = 0;
    const scrollLeft = tabBox.scrollLeft;
    for (var j = 0; j < tabList.length; j++) {
      tablength += parseInt(tabList[j].offsetWidth, 10);
    }
    //console.log("tabBox " + tabBox.offsetWidth);
    // console.log("tabList " + tablength);
    // console.log("s " + scrollLeft);
    if (id > 1 && id < tabList.length) {
      document.getElementById("loc-tab-list-box").scrollLeft += 72;
    }
  };
  // new el

  const scrollLeft = (e) => {
    e.preventDefault;
    let itemTotal = document.querySelectorAll(".tab-items");
    let content = document.getElementById("loc-tab-list");
    let toScroll = itemTotal[currentNav].offsetWidth;
    // console.log(currentNav);
    let newNavindex = currentNav - 1;
    //console.log(currentNav);
    // console.log(itemTotal.length);
    //const content_scroll_width = content.scrollWidth;
    let content_scoll_left = content.scrollLeft;
    content_scoll_left -= toScroll;
    setShowNext(true);
    if (content_scoll_left <= 0) {
      content_scoll_left = 0;
      setShowPrev(false);
      newNavindex = 0;
    }
    content.scrollLeft = content_scoll_left;
    setCurrentNav(newNavindex);
  };
  const scrollRight = (e) => {
    e.preventDefault;
    let itemTotal = document.querySelectorAll(".tab-items");
    const content = document.getElementById("loc-tab-list");
    const contentDiv = document.getElementById("loc-tab-list-box");
    //console.log("view:" + contentDiv.offsetWidth);
    const content_scroll_width = content.scrollWidth;
    let content_scoll_left = content.scrollLeft;
    // console.log("SL Bf:" + content_scoll_left);
    let toScroll = itemTotal[currentNav].offsetWidth;
    content_scoll_left += toScroll;
    let neindex = currentNav + 1;
    setCurrentNav(neindex);
    setShowPrev(true);
    // console.log("SW :" + content_scroll_width);
    //  console.log("SL :" + content_scoll_left);
    if (content_scoll_left >= content_scroll_width - contentDiv.offsetWidth) {
      content_scoll_left = content_scroll_width;
      setShowNext(false);
      // console.log("SL change:" + content_scoll_left);
      setCurrentNav[itemTotal.length - 1];
    }
    content.scrollLeft = content_scoll_left;
  };
  useEffect(() => {
    let intBox = document.getElementById("loc-tab-list-box");
    let intBoxW = intBox.offsetWidth;

    // console.log("int Box D W " + intBoxW);

    let intCatItems = document.getElementsByClassName("tab-items");
    let intCatItemsW = 0;
    for (let i = 0; i < intCatItems.length; i++) {
      intCatItemsW = intCatItemsW + intCatItems[i].offsetWidth;
    }

    // console.log("int items W " + intCatItemsW);
    if (intBoxW < intCatItemsW) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    const handleResize = () => {
      let catbox = document.getElementById("loc-tab-list-box");
      let boxW = catbox.offsetWidth;

      let boxCatItems = document.getElementsByClassName("tab-items");
      let boxCatItemsW = 0;
      for (let i = 0; i < boxCatItems.length; i++) {
        boxCatItemsW = boxCatItemsW + boxCatItems[i].offsetWidth;
      }

      // console.log("box W " + boxW);
      // console.log("items W " + boxCatItemsW);
      if (boxW < boxCatItemsW) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div
      id="gamelist"
      className="all-location-list-section bg-black relative overflow-hidden px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto md:px-4 py-16 md:py-28">
        <div className="section-head relative z-20">
          <TitleSeparator
            title={
              props.locationListData.sectionTitle
                ? props.locationListData.sectionTitle
                : "CHOOSE YOUR LOCATION"
            }
          />
          <div className="max-w-[840px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16">
            <div
              className="text-gray-300 md:px-8"
              dangerouslySetInnerHTML={{
                __html: props.locationListData.sectionSubTitle,
              }}
            ></div>
          </div>
        </div>
        <div id="gamelist" className="location-grid-box mx-auto">
          <div className="gift-lt absolute top-0 left-0">
            <img src="/assets/gift-balon-bg.png"></img>
          </div>
          <div className="gift-rt absolute">
            <img src="/assets/Compas-brown.png"></img>
          </div>
          {/* ======navigation==== */}
          <div className="flex justify-end space-x-2 md:space-x-3 mb-1 md:mb-2">
            {showNav && showPrev && (
              <button
                onClick={(e) => scrollLeft(e)}
                className="h-[24px] prev w-[24px] rm:h-[28px] rm:w-[28px] md:h-[36px] md:w-[36px] text-center bg-zinc-100/20 flex items-center justify-center text-xl text-gold"
              >
                <span>
                  <FiChevronLeft />
                </span>
              </button>
            )}

            {showNav && showNext && (
              <button
                onClick={(e) => scrollRight(e)}
                className="h-[24px] next w-[24px] rm:h-[28px] rm:w-[28px] md:h-[36px] md:w-[36px] text-center bg-zinc-100/20 flex items-center justify-center text-xl text-gold"
              >
                <span>
                  <FiChevronRight />
                </span>
              </button>
            )}
          </div>
          {/* ======list items box==== */}
          <div className="loc-list-tab mx-auto mb-6 md:mb-8 lg:mb-8 relative">
            <div
              id="loc-tab-list-box"
              className={"loc-tab-list-box w-full overflow-hidden"}
            >
              {/* ======list items==== */}
              <div
                id="loc-tab-list"
                className={
                  showNav
                    ? "loc-tab-list flex flex-nowrap space-x-[1px] overflow-x-scroll"
                    : "loc-tab-list flex flex-nowrap space-x-[1px]"
                }
              >
                <button
                  onClick={() => {
                    setShowLoclist("ALL");
                    // ScrollTab(0);
                  }}
                  className={`${
                    showLocList == "ALL"
                      ? "bg-red-600 text-white "
                      : "bg-[#1c1c1c] text-[#7b7b7b]"
                  }  hover:text-white tab-items hover:bg-red-800 flex-grow  py-3 px-2 text-sm md:text-base lg:text-lg min-w-[90px] md:min-w-[102px]`}
                >
                  ALL
                  <span>
                    ({countTotalLocation(props.locationListData.locationList)})
                  </span>
                </button>
                {props.locationListData.locationList.map((state, index) => {
                  return (
                    <button
                      key={index + 1}
                      onClick={() => {
                        setShowLoclist(state.stateCode);
                        //ScrollTab(state.id);
                      }}
                      className={`${
                        showLocList == state.stateCode
                          ? "bg-red-600 text-white "
                          : "bg-[#1c1c1c] text-[#7b7b7b]"
                      }  hover:text-white tab-items hover:bg-red-800 flex-grow  py-3 px-2 text-sm md:text-base lg:text-lg min-w-[90px] md:min-w-[102px]`}
                    >
                      {state.stateCode}
                      <span> ({state.locationList.length})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid gap-y-6 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {props.locationListData.locationList.map((state) => {
              return state.locationList.map((location) => {
                return (
                  (showLocList == "ALL" || showLocList == state.stateCode) && (
                    <LocationListCard
                      key={state.id + location.id}
                      location={location}
                      stateCode={state.stateCode}
                    />
                  )
                );
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationList;
