import styles from "../../styles/alllocations.module.css";

const SiteMapHero = (props) => {
  return (
    <div className={styles.alllocations + " relative overflow-hidden"}>
      <div className={styles.alllocationscompas + " gift-rt absolute"}>
        <img src="/assets/Compas-brown.png"></img>
      </div>
      <div className="max-w-7xl mx-auto py-8 md:py-16 px-4 relative z-10">
        <div className="page-benar-info">
          <h1 className="golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl font-os uppercase">
            SITE MAP
          </h1>
        </div>
      </div>
    </div>
  );
};
export default SiteMapHero;
