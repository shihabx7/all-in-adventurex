import { BiMap } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";

const LocationMenuBtnFooter = (props) => {
  const showloc = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };
  return (
    <div
      onClick={showloc}
      className="bg-red-600 hover:bg-red-900 search-loc cursor-pointer hover:shadow boder-p2 rounded-full"
    >
      <div className="border-2 border-[#111111] hover:border-gray-200 bg-[#111111] hover:bg-grey-200 flex space-x-2 justify-between md:space-x-2 rounded-full items-center  md:border-4 p-2 md:p-2 text-white ">
        <div className="text-white nav-search-l flex space-x-2 items-center">
          <span className="text-xl md:text-2xl">
            <BiMap />
          </span>
          <span className=" font-medium md:text-lg uppercase">
            {props.locationName ? props.locationName : "CHOOSE YOUR LOCATION"}
          </span>
        </div>
        <div className={props.color + " nav-search-r"}>
          <span className="text-xl md:text-2xl">
            <FaAngleDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocationMenuBtnFooter;
