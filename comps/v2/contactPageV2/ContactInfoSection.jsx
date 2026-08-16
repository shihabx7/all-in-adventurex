import { useEffect, useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import LocationDetailsHours from "../../locationsPage/LocationDetailsHours";
import LocationMap from "../../locationsPage/LocationMap";

const removeTags = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/(<([^>]+)>)/gi, "");
};
const getStateCode = (state) => {
  let stArr = state.split(",");
  let stCode = stArr[stArr.length - 1].trim().toUpperCase();
  return stCode;
};
const ContactInfoSection = (props) => {
  const [showHour, setShwoHour] = useState(false);
  const [isPgLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  });

  return (
    <div className="location-details-v2 bg-[#FFF3D3] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px] lg:bg-[400px_400px]  py-16 md:py-20 lg:py-28 3xl:py-32  relative">
      <div className="max-w-[1000px] mx-auto  relative z-30 px-4">
        {/*=================================================================location map */}
        <div className="location-spc-map drop-shadow-md border-2 border-gold">
          {isPgLoaded && (
            <div className="emb-map w-full h-[500px] md:h-[600px]">
              <LocationMap mapInfo={props.mapInfo} />
            </div>
          )}
        </div>
        {/*=================================================================location indo */}
        <LocationDetailsHours
          locationSlug={props.locationSlug}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
          locationName={props.locationName}
        />
        {/*=================================================================accepted payment */}
        <div className="loc-notice mt-2 md:mt-4">
          <div className="payment locinfo-row border-b border-[#D2C6AA] py-2 px-2 lg:py-3">
            <div className="flex space-x-2  md:text-lg ">
              <div className="loc-dt-icon  md:w-auto ">
                <img
                  className="w-[24px]"
                  alt="Payment method icon, showing that All In Adventures has gone cashless but accepts Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay."
                  src="/assets/svg/util/payment_options.svg"
                ></img>
              </div>
              <div className="loc-dt-text text-[#232323] flex-1">
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.locationInfo.acceptedPayments,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/*=================================================================accepted payment  end*/}
      </div>
    </div>
  );
};

export default ContactInfoSection;
