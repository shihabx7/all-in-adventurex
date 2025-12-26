import { FiX } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
//import { useLocModal } from "../../contexts/LocModalContext";
import { escapeGameBundleBookingList } from "../../lib/v2/data/escapeGameBundleBookingList";
import Script from "next/script";

const BundleBookingMenu = ({ locationSlugList, activeBooking }) => {
 // const { closeLocModal, activeModalMenu, setModalMenuType } = useLocModal();
  const closelocmenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
   // closeLocModal();
   // setModalMenuType("gift-card");
  };
  const bookBundle = (locationSlug) => {
    const bookingData = escapeGameBundleBookingList[locationSlug];
    // console.log(bookingData);
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
    });
  };

  const bookGiftCard = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: "no",
      view: { item: bookingData.giftCardItemNo },
    });
  };

  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      <div
        className="bundle-booking-loc-menu top-0 left-0 bg-dark fixed w-full h-screen overflow-x-hidden overflow-y-auto  z-[100000]"
        style={{
          backgroundImage:
            "url(/assets/submenu-bg.png),linear-gradient(#111111,#111111)",
        }}
      >
        <div
          onClick={closelocmenu}
          id="close-bundle-booking-menu"
          className="location-close-box flex justify-end pt-1 px-2 md:px-4 text-gray-400 text-xl md:text-2xl lg:text-3xl"
        >
          <span className="inline-block p-1 border-2 border-red-600 text-red-600 rounded-full cursor-pointer hover:border-light-gold hover:text-gold">
            <FiX />
          </span>
        </div>
        <div className="loc-menu-content px-4">
          <div className="sep-container max-w-[280px] md:max-w-[560px] mx-auto ">
            <h2 className="dark-gold py-2 text-center text-2xl uppercase md:text-[40px] lg:text-[44px] leading-[1.2] font-os font-bold">
           
                <span> CHOOSE YOUR LOCATION TO UNLOCK YOUR BUNDLE</span>
          
            </h2>
          </div>

          <div className="loc-menu-grid max-w-6xl mx-auto mt-4 md:mt-6 lg:mt-8 pb-8">
            {/*==================location xcolumn======================*/}
            {locationSlugList.map((loc) => {
              return (
                <div key={loc.id} className="loc-menu-box ">
                  {/*==================location NEW YORK======================*/}
                  <div className="loc-menu-head mb-2">
                    <h3 className="text-light-gold text-xl md:text-2xl font-bold">
                      <span className="inline-block pb-1 border-b border-light-gold">
                        {loc.stateName}
                      </span>
                    </h3>
                  </div>
                  <div className="loc-item-box py-2 border-dark-coffee">
                    {loc.locations.map((item) => {
                      return (
                        <div
                          key={loc.id + item.id}
                          className=" loc-item py-2 border-b border-dark-coffee"
                        >
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              bookBundle(item.locationSlug);
                            }}
                            className="loc-link block golden-text md:text-lg"
                          >
                            {item.locationName}
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

export default BundleBookingMenu;
