import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FiChevronDown, FiX } from "react-icons/fi";
import StarRating from "../util/StarRating";

const LocationListCard = ({ location, stateCode }) => {
  const [showHour, setShwoHour] = useState(null);

  return (
    <div className="locationlist ease-in-out duration-100 rounded-b bg-[#FFF9EB] relative overflow-hidden">
      {!location.isPublished && (
        <div className="px-4 py-2 cm-rib absolute -rotate-45 top-[8%] left-[-30%] bg-red-600 text-[#fff] text-[18px] lg:text-[18px] text-center w-full">
          COMING SOON
        </div>
      )}
      <div className="loc-bt flex flex-col justify-between h-full">
        <div>
          <div className="location-img">
            <a
              href={"/locations/" + location.locationSlug}
              className="block cursor-pointer"
            >
              <img
                alt={location.cardImage.alt}
                src={location.cardImage.url}
              ></img>
            </a>
          </div>

          <div className="locationview-info py-4 px-4">
            <div className="location-name group">
              <a href={"/locations/" + location.locationSlug}>
                <div className="flex space-x-1 items-center text-2xl lg:text-3xl font-medium">
                  <h3 className="golden-text">
                    <span className="capitalize">{location.locationName}</span>
                  </h3>
                  <p className="text-gold">
                    <FaAngleRight />
                  </p>
                </div>
                <div className="text-lg text-[#4a4a4a] group-hover:text-red-700">
                  {location.mall}
                </div>
              </a>
            </div>
            <div className="loaction-business-hour mt-1 relative">
              <div className="location-review-ind flex items-center space-x-2 lg:text-lg">
                <span className="text-[#7b7b7b] font-medium">
                  {location.avgReview}
                </span>
                <span>
                  <StarRating rating={location.avgReview} />
                </span>
                <span className="text-[#7b7b7b] font-medium">
                  ({location.raveReviews})
                </span>
              </div>
            </div>

            <div className="location-contact-info py-1 mt-1">
              <div className="location-contact-link mb-2">
                <a
                  target="_blank"
                  href={
                    "https://www.google.com/maps/dir//" +
                    location.address +
                    ",+" +
                    location.cityName +
                    ",+" +
                    stateCode +
                    "+" +
                    location.zip
                  }
                  className="flex space-x-2 text-[#7b7b7b] hover:text-blue-600 "
                >
                  <span className="mt-[4px] text-blue-600">
                    <FaMapMarkerAlt />
                  </span>
                  <p className="hover:underline underline-offset-4">
                    <span className="text-blue-600 font-medium">
                      Direction:
                    </span>
                    {location.address +
                      ", " +
                      location.cityName +
                      ", " +
                      stateCode +
                      " " +
                      location.zip}
                  </p>
                </a>
              </div>
              <div className="location-contact-link mb-2">
                <div className="flex space-x-2 items-center">
                  <div className="flex space-x-2 items-center">
                    <span className="mt-[0px] text-[#424242] text-sm">
                      <FaPhoneAlt />
                    </span>
                    <span className="text-[#424242] font-medium">Phone: </span>
                  </div>
                  <Link href={"tel:" + location.phone}>
                    <a className="flex space-x-2 text-[#7b7b7b] hover:text-blue-600 hover:underline underline-offset-4">
                      {location.phone}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="location-contact-link mb-2">
                <div className="flex space-x-2 items-center">
                  <div className="flex space-x-2 items-center">
                    <span className="mt-[0px] text-[#424242] text-sm">
                      <FaEnvelope />
                    </span>
                    <span className="text-[#424242] font-medium">Email: </span>
                  </div>
                  <Link href={"mailto:" + location.storeEmail}>
                    <a className="flex space-x-2 text-[#7b7b7b] hover:text-blue-600 hover:underline underline-offset-4">
                      {location.storeEmail}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="locationview-link px-4 pb-6">
          <div className="flex justify-between">
            <a
              href={"/" + location.locationSlug + "/activities"}
              className="w-[46%] rounded py-3 lg:py-4 bg-red-600 hover:bg-red-700 text-center text-white font-medium"
            >
              BOOK GAMES
            </a>

            <a
              href={"/" + location.locationSlug + "/events"}
              className="w-[46%] rounded py-3 lg:py-4 bg-red-600 hover:bg-red-700 text-center text-white font-medium"
            >
              BOOK EVENTS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LocationListCard;
