import { FiX } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import StoreContactForm from "./elements/StoreContactForm";
import CorContactForm from "./elements/CorContactForm";
import CorContacV1 from "./elements/CorContacV1";

const ContactModalSection = (props) => {
  const closelocmenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    props.setShowFormModalForm(false);
  };

  return (
    <div className="loc-menu u-play-pass-menu top-0 left-0 bg-[#111111] fixed w-full h-screen  overflow-x-hidden overflow-y-auto z-[10000]">
      <div
        onClick={closelocmenu}
        id="locclose"
        className="location-close-box flex justify-end pt-1 px-2 md:px-4 text-gray-400 text-xl md:text-2xl lg:text-3xl"
      >
        <span className="inline-block p-1 border-2 border-red-600 text-red-600 rounded-full cursor-pointer hover:border-light-gold hover:text-gold">
          <FiX />
        </span>
      </div>
      <div className="mod-menu-content px-4 w-full flex justify-center  ">
        <div className="cont-f-v2 w-full  md:w-[740px] lg:w-[960px]">
          {props.locationSlug && (
            <StoreContactForm
              locationName={props.locationName}
              locationSlug={props.locationSlug}
              locationInfo={props.locationInfo}
            />
          )}
          {props.locationList && (
            <CorContacV1 locationList={props.locationList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModalSection;
