import styles from "../../styles/alllocations.module.css";

const CovidPageHero = (props) => {
  return (
    <div className={styles.alllocations + " relative overflow-hidden"}>
      <div className={styles.alllocationscompas + " gift-rt absolute"}>
        <img src="/assets/Compas-brown.png"></img>
      </div>
      <div className="max-w-7xl mx-auto py-16 md:py-16 px-4 relative z-10">
        <div className="page-benar-info">
          <p className=" md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-gray-800 text-center">
            CHOOSE FROM {props.totalLocations} U.S LOCATIONS
          </p>
          <h1 className="golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os uppercase">
            COVID-19 Update
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-center lg:text-lg">
            {" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CovidPageHero;
