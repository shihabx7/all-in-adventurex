import TitleSeparator from "../util/TitleSeparator";

import LocationMap from "./LocationMap";

import { FiChevronDown, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import LocationDetailsHours from "./LocationDetailsHours";

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
const LocationDetails = (props) => {
  const [showHour, setShwoHour] = useState(false);
  const [isPgLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  });

  return (
    <div className="location-details relative bg-center bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      {/*======================= boder img============== */}

      <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
        ></img>
        <img
          className="w-full  md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      {/*======================= boder img end============== */}
      <div className="max-w-[1000px] mx-auto pb-16 md:pb-24 lg:pb-28 relative z-30 px-4">
        <div className="section-title max-w-[860px] mx-auto">
          <TitleSeparator
            title={
              "ALL IN ADVENTURES " +
              props.locationInfo.cityName +
              " LOCATION DETAILS"
            }
          />
          <div className="max-w-[860px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-16">
            <p className="text-gray-[600] md:px-8">
              We are conveniently located at {props.locationInfo.mall} in{" "}
              {props.locationInfo.cityName}{" "}
              {getStateCode(props.locationInfo.state)}.{" "}
              {removeTags(props.locationInfo.locationDescription)}
            </p>
          </div>
        </div>
        <div className="location-spc-map drop-shadow-md border-2 border-gold">
          {isPgLoaded && (
            <div className="emb-map w-full h-[500px] md:h-[600px]">
              <LocationMap mapInfo={props.mapInfo} />
            </div>
          )}
        </div>
        <LocationDetailsHours
          locationSlug={props.locationSlug}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
          locationName={props.locationName}
        />

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
        <div className="loc-cont flex justify-center mt-16">
          <a
            href={"/" + props.locationSlug + "/contact-store"}
            className="uppercase text-lg font-medium text-white bg-red-600 hover:bg-red-700 py-3 px-10 rounded-full"
          >
            Contact store
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
