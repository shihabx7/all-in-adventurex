import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import TitleSeparator from "../util/TitleSeparator";
import LocationListCard from "./LocationListCard";

const LocationList = (props) => {
  const setTopPadding = () => {
    let headerHeight = document.getElementById("header").offsetHeight;
    document.getElementById("mainContent").style.paddingTop =
      headerHeight + "px";
  };

  const [showLocList, setShowLoclist] = useState("ALL");

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
          <div className="loc-list-tab mx-auto mb-6 md:mb-8 lg:mb-8 relative">
            <div className="indic absolute bottom-full right-0 md:hidden">
              <div className="h-[24px] w-[24px] text-center bg-zinc-100/20 flex items-center justify-center text-xl text-gold">
                <span>
                  <FiChevronRight />
                </span>
              </div>
            </div>
            <div
              id="loc-tab-list-box"
              className="loc-tab-list-box w-full overflow-x-auto"
            >
              <div
                id="loc-tab-list"
                className="loc-tab-list flex flex-nowrap space-x-[1px] "
              >
                <button
                  onClick={() => {
                    setShowLoclist("ALL");
                    ScrollTab(0);
                  }}
                  className={`${
                    showLocList == "ALL"
                      ? "bg-red-600 text-white "
                      : "bg-[#1c1c1c] text-[#7b7b7b]"
                  }  hover:text-white hover:bg-red-800 flex-grow  py-3 px-2 text-sm md:text-base lg:text-lg min-w-[90px] md:min-w-[102px]`}
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
                        ScrollTab(state.id);
                      }}
                      className={`${
                        showLocList == state.stateCode
                          ? "bg-red-600 text-white "
                          : "bg-[#1c1c1c] text-[#7b7b7b]"
                      }  hover:text-white hover:bg-red-800 flex-grow  py-3 px-2 text-sm md:text-base lg:text-lg min-w-[90px] md:min-w-[102px]`}
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
