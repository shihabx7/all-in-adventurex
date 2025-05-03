import { FiX } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";

const MobileEscapeRootMenu = (props) => {
  const closelocmenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    props.setShowMobileEecapeMenu(false);
  };

  return (
    <div
      className="loc-menu-mob top-0 left-0 bg-dark fixed w-full h-full overflow-scroll md:overflow-hidden z-[100000]"
      style={{
        backgroundImage:
          "url(/assets/submenu-bg.png),linear-gradient(#111111,#111111)",
      }}
    >
      <div
        onClick={closelocmenu}
        id="locclosemb"
        className="location-close-box flex justify-end pt-1 px-2 md:px-4 text-gray-400 text-xl md:text-2xl lg:text-3xl"
      >
        <span className="inline-block p-1 border-2 border-red-600 text-red-600 rounded-full cursor-pointer hover:border-light-gold hover:text-gold">
          <FiX />
        </span>
      </div>
      <div className="loc-menu-content px-4">
        <div className="sep-container max-w-[700px] mx-auto ">
          <h2 className="dark-gold py-2 text-center text-2xl uppercase md:text-[40px] lg:text-[44px] font-os font-bold">
            CHOOSE YOUR LOCATION
          </h2>
        </div>

        <div className="loc-menu-grid max-w-6xl mx-auto mt-5 md:mt-8 pb-8">
          {/*==================location xcolumn======================*/}
          {props.locationSlugList.map((loc) => {
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
                        {props.goMobileEecapeForm ? (
                          <a
                            href={
                              "/" +
                              item.locationSlug +
                              "/activities/mobile-escape-room#mobile-escape-room-form"
                            }
                            className="loc-link block"
                          >
                            <div className="flex space-x-1 items-center md:text-lg">
                              <span className="golden-text">
                                {item.locationName}
                              </span>
                              <span className="text-gold">
                                <FaAngleRight />
                              </span>
                            </div>
                            <div className="text-gray-500 text-sm md:text-base text-left">
                              {item.mall}
                            </div>
                          </a>
                        ) : (
                          <a
                            href={
                              "/" +
                              item.locationSlug +
                              "/activities/mobile-escape-room"
                            }
                            className="loc-link block"
                          >
                            <div className="flex space-x-1 items-center md:text-lg">
                              <span className="golden-text">
                                {item.locationName}
                              </span>
                              <span className="text-gold">
                                <FaAngleRight />
                              </span>
                            </div>
                            <div className="text-gray-500 text-sm md:text-base text-left">
                              {item.mall}
                            </div>
                          </a>
                        )}
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
  );
};

export default MobileEscapeRootMenu;
