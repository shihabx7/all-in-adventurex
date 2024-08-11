import styles from "../../styles/alllocations.module.css";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
const LocationListPageHero = (props) => {
  return (
    <div
      className={
        styles.alllocations +
        " relative overflow-hidden all-loc-hero bg-[#FFF9EB]"
      }
    >
      <div className={styles.alllocationscompas + " gift-rt absolute"}>
        <img src="/assets/Compas-brown.png"></img>
      </div>
      <div className="max-w-7xl mx-auto py-16 md:py-16 px-4 relative z-10">
        <div className="page-benar-info">
          <p className=" md:mt-0 font-semibold text-lg md:text-2xl mb-1 text-gray-800 text-center">
            CHOOSE FROM {props.pageData.totalLocations} U.S. LOCATIONS
          </p>
          <h1 className="dark-gold font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-2 rm:mb-2 md:mb-4 lg:mb-6 font-os">
            {props.pageData.pageTitle}
          </h1>
          <div
            className="text-gray-700 max-w-[840px] mx-auto text-center lg:text-lg"
            dangerouslySetInnerHTML={{ __html: props.pageData.pageSubtitle }}
          ></div>
        </div>
        <div className="map-autocomplete-box pt-6 md:pt-6 lg:pt-8 z-20">
          <Link href="#gamelist">
            <a className="max-w-[280px] mx-auto block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">
              BROWSE LOCATIONS
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationListPageHero;
