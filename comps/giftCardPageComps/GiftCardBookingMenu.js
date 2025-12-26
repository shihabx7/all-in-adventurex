import GiftMenuTitle from "./GiftMenuTitle";

import { FiX } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import Script from "next/script";

const GiftCardBookingMenu = (props) => {
  const closelocmenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    props.setShowGiftBookingList(false);
  };
  const bookGiftCard = (bookingData) => {
    //console.log("booking gift active" + JSON.stringify(bookingData));
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "no",
      flow: "no",
      view: { item: bookingData.giftCardItemNo },
    });
    // closelocmenu();
  };

  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      <div className="loc-menu gift-card-menu top-0 left-0 bg-[#111111] fixed w-full h-screen overflow-x-hidden overflow-y-auto z-[10000]">
        <div
          onClick={closelocmenu}
          id="locclose"
          className="location-close-box flex justify-end pt-1 px-2 md:px-4 text-gray-400 text-xl md:text-2xl lg:text-3xl"
        >
          <span className="inline-block p-1 border-2 border-red-600 text-red-600 rounded-full cursor-pointer hover:border-light-gold hover:text-gold">
            <FiX />
          </span>
        </div>
        <div className="loc-menu-content px-4">
          <div className="sep-container max-w-[420px] md:max-w-[760px] lg:max-w-[860px] mx-auto ">
            <h2 className="text-[#E0BF62] text-center text-[1.5rem] rm:text-[1.88rem]  md:text-[3rem] lg:text-[4rem] leading-[1.2] font-os uppercase font-bold">
              Choose Your Location
            </h2>
            <p className="text-[#7B7B7B] py-2 text-center text-[1.1rem]  md:text-[1.3rem] lg:text-[1.5rem] leading-[1.2] ">
              Buy gift cards valid at your location
            </p>
          </div>

          <div className="loc-menu-grid max-w-[64rem] mx-auto mt-4 md:mt-8 lg:mt-10 pb-12 md:pb-8">
            {/*==================location xcolumn======================*/}
            {props.locationSlugList.map((loc) => {
              return (
                <div key={loc.id} className="loc-menu-box ">
                  {/*==================location NEW YORK======================*/}
                  <div className="loc-menu-head">
                    <h3 className="text-[#bbbbbb] text-[1.08rem] md:text-[1.13rem] xl:md:text-[1.2rem] uppercase font-bold">
                      <span className="inline-block">{loc.stateName}</span>
                    </h3>
                  </div>
                  <div className="loc-item-box py-1 border-[#191919]">
                    {loc.locations.map((item) => {
                      return (
                        <div
                          key={loc.id + item.id}
                          className=" loc-item py-2 border-b border-[#191919]"
                        >
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              bookGiftCard(item.bookingInfo);
                            }}
                            className="loc-link block text-[#7b7b7b] hover:text-[#D8C695]  text-left"
                          >
                            <span className="loc-name block text-[1.05rem] font-medium">
                              {item.locationName}
                            </span>
                            <span className="block loc-mall text-sm">
                              {item.mall}
                            </span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/*==================location xcolumn======================*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCardBookingMenu;
