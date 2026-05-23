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
    <div className="location-details bg-[#FFF3D3] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px] lg:bg-[400px_400px] pt-4 md:pt-6 lg:pt-8 pb-16 md:pb-20 lg:pb-28  relative">
      {/*======================= boder img============== */}
      <div className="htb-bg-icon htb-bg-3 absolute">
        <img
          alt="A brown-coloured compass representing the theme of Escape Rooms at All In Adventures."
          src="/assets/Navigation.png"
        ></img>
      </div>

      <div className="htb-bg-icon htb-bg-4 absolute">
        <img
          alt="A skull and crossbones symbolizing the excitement of an escape room game at All In Adventures."
          src="/assets/Skull.png"
        ></img>
      </div>

      {/*======================= boder img end============== */}
      <div className="max-w-[1000px] mx-auto  relative z-30 px-4">
        <div className="section-title max-w-[860px] mx-auto">
          <h2 className="dark-gold py-[2px] md:py-1 2xl:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] leading-[1.2] font-os font-bold uppercase text-center">
          CUSTOMERS LOVE ALL IN ADVENTURES
        </h2>
          <div className="max-w-[900px] md:text-lg mx-auto text-center mt-1 md:mt-2 mb-4 md:mb-8 lg:mb-9">
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
