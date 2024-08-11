import TitleSeparator from "../util/TitleSeparator";
import { FiX } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";

const HeaderLocMenu = (props) => {
  const closelocmenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    document.getElementById("locmenu").classList.add("hidden");
  };

  return (
    <div className="loc-menu locx bg-black menu-pattern fixed w-full h-full overflow-scroll">
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
        <TitleSeparator title="CHOOSE YOUR LOCATION" />
        <div className="loc-menu-grid max-w-6xl mx-auto mt-4 pb-8">
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
                        <a
                          href={"/locations/" + item.locationSlug}
                          className="loc-link"
                        >
                          <div className="flex space-x-1 items-center md:text-lg">
                            <span className="golden-text">
                              {item.locationName}
                            </span>
                            <span className="text-gold">
                              <FaAngleRight />
                            </span>
                          </div>
                          <div className="text-gray-500  text-sm md:text-base ">
                            {item.mall}
                          </div>
                        </a>
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

export default HeaderLocMenu;
