import TitleSeparator from "../util/TitleSeparator";

import LocationMap from "./LocationMap";

import { FiChevronDown, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import LocationHours from "./LocationHours";

const NewLoactionDetails = (props) => {
  const [showHour, setShwoHour] = useState(false);
  const [isPgLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  });

  const getAddress = (address, slug, zip, city) => {
    var scity = slug.split("-");
    var st = scity[scity.length - 1].toString().toUpperCase();

    var add = address + ", " + city + ", " + st + " " + zip;
    return add;
  };
  const locState = (slug) => {
    var scity = slug.split("-");
    var st = scity[scity.length - 1].toString().toUpperCase();
    return st;
  };
  const getDirection = (address, slug, zip, city) => {
    var addr = address.toString().split(" ").join("+") + ",";
    var stArr = slug.toString().split("-");
    var ct = city + ",";
    var stlen = stArr.length - 1;
    var st = stArr[stlen];
    st = st.toString().toUpperCase();
    var zp = zip + ",";

    var gslug = addr + "+" + ct + "+" + st + "+" + zp + "+" + "USA";

    //console.log(st);
    var gUrl = "https://www.google.com/maps/dir//" + gslug;

    return gUrl;
  };

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
        <div className="section-title max-w-[800px] mx-auto">
          <TitleSeparator
            title={
              "ALL IN ADVENTURES " + props.locdetail.city + " LOCATION DETAILS"
            }
            color="dark-gold"
            weight="font-bold"
          />
          <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-16">
            <p className="text-gray-[600] md:px-8">
              We are conveniently located at {props.locdetail.mall} in{" "}
              {props.locdetail.city} {locState(props.locdetail.slug)}.{" "}
              {props.locdetail.city_include}
            </p>
          </div>
        </div>
        <div className="location-spc-map drop-shadow-md border-2 border-gold">
          {isPgLoaded && (
            <div className="emb-map w-full h-[500px] md:h-[600px]">
              <LocationMap
                position={props.locdetail.position}
                place_id={props.locdetail.place_id}
              />
            </div>
          )}
        </div>
        <LocationHours locdetail={props.locdetail} />

        <div className="loc-notice mt-4 md:mt-8">
          <div className="payment locinfo-row border-b border-[#D2C6AA] py-2 px-2 lg:py-3">
            <div className="flex space-x-2  md:text-lg ">
              <div className="loc-dt-icon  md:w-auto ">
                <img
                  className="w-[24px]"
                  src="/assets/svg/util/payment_options.svg"
                ></img>
              </div>
              <div className="loc-dt-text text-[#232323] flex-1">
                <p>
                  <span> {props.locdetail.payment_options}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="loc-cont flex justify-center mt-16">
          <a
            href={"/" + props.locdetail.slug + "/contact-store"}
            className="uppercase text-lg font-medium text-white bg-red-600 py-3 px-10 rounded-full"
          >
            Contact store
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewLoactionDetails;
