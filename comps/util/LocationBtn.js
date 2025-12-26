import { BiMap } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { useSiteData } from "../../contexts/SiteDataContext";
const LocationBtn = (props) => {
  const { openModalMenu, setModalMenuType } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | gift-card | mobile-mystery |unlimited-play-pass | bundle
  const showLocModal = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setModalMenuType("location-links");
    openModalMenu();
  };
  const showloc = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };
  return (
    <div
      onClick={showLocModal}
      className="bg-red-600 hover:bg-red-700  search-loc cursor-pointer hover:shadow boder-p2 rounded-full"
    >
      <div className="border-2 border-white hover:border-gray-200 bg-white hover:bg-grey-200 flex space-x-2 justify-between md:space-x-2 rounded-full items-center  md:border-4 p-2 md:p-2 text-white ">
        <div className="text-black nav-search-l flex space-x-2 items-center">
          <span className="text-xl md:text-2xl">
            <BiMap />
          </span>
          <span className="font-medium md:text-lg uppercase">
            {props.location || "CHOOSE YOUR LOCATION"}{" "}
          </span>
        </div>
        <div className="text-black nav-search-r">
          <span className="text-xl md:text-2xl">
            <FaAngleDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocationBtn;
