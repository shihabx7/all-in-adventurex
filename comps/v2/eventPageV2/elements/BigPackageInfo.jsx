import { FaPhone, FaEnvelope } from "react-icons/fa6";
import PartyFormBookingBtn from "./PartyFormBookingBtn";
export default function BigPackageInfo({
  bigPackageInfo,
  locationInfo,
  locationSlug,
}) {
  return (
    <div className="custom-package-box">
      <div className="package-head">
        <h3 className="package-title text-[1.25rem] md:text-[1.2rem] xl:text-[1.35rem] font-semibold text-white uppercase font-os">
          {bigPackageInfo.title
            ? bigPackageInfo.title
            : "NEED SOMETHING BIGGER, CUSTOM, OR WITHIN 7 DAYS?"}
        </h3>
        {bigPackageInfo.infoHtmlText && (
          <div
            className="text-sm xl:text-base text-[#DBDBDB] mt-2 xl:mt-3"
            dangerouslySetInnerHTML={{
              __html: bigPackageInfo.infoHtmlText,
            }}
          ></div>
        )}
      </div>
      {/*===========================================================================================================================package-contact-info===*/}
      <div className="pn-em flex flex-col lg:flex-row space-y-5 lg:space-y-0  lg:space-x-4 xl:space-x-7 my-4 sm:my-5 lg:my-6 ">
        <a
          href={locationInfo ? "tel:" + locationInfo.phone : "tel:844-502-5546"}
          className="flex items-center space-x-2 text-white font-medium xl:text-[1.1rem] hover:text-[#CB9442] transition-all duration-300 ease-linear "
        >
          <span className="text-gold">
            <FaPhone />
          </span>
          <span>{locationInfo ? locationInfo.phone : "844-502-5546"}</span>
        </a>
        <a
          href={
            locationInfo
              ? "mailto:" + locationInfo.storeEmail
              : "mailto:sales@allinadventures.com"
          }
          className="flex items-center space-x-2 text-white  font-medium xl:text-lg hover:text-[#CB9442] transition-all duration-300 ease-linear "
        >
          <span className="text-gold">
            <FaEnvelope />
          </span>
          <span>
            {locationInfo
              ? locationInfo.storeEmail
              : "sales@allinadventures.com"}
          </span>
        </a>
      </div>
      {/*===========================================================================================================================package-boking-btn===*/}
      <div className="big-party-booking">
        <PartyFormBookingBtn
          btnLabel={
            bigPackageInfo.ctaBtnLabel
              ? bigPackageInfo.ctaBtnLabel
              : "Reach out to our events team"
          }
          locationSlug={locationSlug ? locationSlug : false}
        />
      </div>
    </div>
  );
}
