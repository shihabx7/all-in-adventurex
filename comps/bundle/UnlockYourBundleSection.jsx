import { useLocModal } from "../../contexts/LocModalContext";
import { escapeGameBundleBookingList } from "../../lib/v2/data/escapeGameBundleBookingList";

export default function UnlockYourBundleSection({ locationSlug }) {
  const { openLocModal } = useLocModal();
  const showLocModal = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    openLocModal();
  };
  const bookBundle = (slug) => {
    const bookingData = escapeGameBundleBookingList[slug];
    console.log(bookingData);
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
    });
  };
  return (
    <div className="escape-games-bundl-section ">
      <div className="section-bg bg-gradient-to-tr from-[#022b03] to-[#055e04] relative">
        {/*============section bg img==========*/}
        <div className="section-bg-img w-full h-full absolute top-0 left-0  ">
          <img
            className="w-full h-full object-cover object-center "
            src={"/assets/bundle/all-in-adventures-escape-game-bundle-bg.svg"}
            alt={"all in adventures escape game bundle"}
          ></img>
        </div>
        <div className="section-container py-16 md:py-20 lg:py-28  mx-auto max-w-[1220px] px-3 rm:px-4 md:px-8 relative z-20">
          {/*============section head==========*/}
          <div className="section-head">
            <div className="section-title max-w-[320px] zm:max-w-[500px] md:max-w-[780px] lg:max-w-[960px] mx-auto">
              <p className="font-os font-semibold text-[1.5rem] md:text-[1.8rem] xl:text-3xl uppercase text-[#38D000] text-center">
                SAVE 25%
              </p>

              <h2 className="text-[#ffffff] uppercase font-bold text-center text-[1.7rem] rm:text-[2rem] zm:text-[2.3rem] leading-[1.2] sm:text-4xl lg:text-5xl font-os font-os outline-tile mt-2 md:mt-3 xl:mt-4">
                CHOOSE YOUR BUNDLE
              </h2>
            </div>

            <div className="section-sub-title  max-w-[800px]  xl:max-w-[900px] mx-auto">
              <p className="text-[#bababa]  sm:text-lg xl:text-xl text-center mt-3 md:mt-4 lg:mt-5">
                Double the fun without doubling the cost! We've paired our most
                popular escape rooms into themed 2-game bundles — perfect for
                families, friends, and thrill-seekers. Each bundle saves you 25%
                automatically, no promo code needed. Find your perfect challenge
                below.
              </p>
            </div>
          </div>
          {/*============section head end==========*/}

          {/*============Escape bundle-img=========*/}
          <div className="escape-game-bundlei-mg mt-5 sm:mt-7 md:mt-8 lg:mt-10">
            <img
              className=""
              src={"/assets/bundle/all-in-adventures-escape-game-bundle.png"}
              alt={"all in adventures escape game bundle"}
            ></img>
          </div>
          {/*============Escape bundle-img end==========*/}
          <div className="escape-game-bundlei-btn max-w-sm mx-auto mt-7 md:mt-8 lg:mt-10">
            {!locationSlug && (
              <button
                onClick={showLocModal}
                className="w-full  block uppercase py-3 md:py-4 px-6 md:text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center"
              >
                Unlock YOUR BUNDLE
              </button>
            )}
            {locationSlug && (
              <button
                onClick={() => bookBundle(locationSlug)}
                className="w-full  block uppercase py-3 md:py-4 px-6 md:text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center"
              >
                Unlock YOUR BUNDLE
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
