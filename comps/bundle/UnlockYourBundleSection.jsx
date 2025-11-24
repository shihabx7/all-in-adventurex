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
            src={"/assets/bundle/escape-game-bundle-bg.jpg"}
            alt={"all in adventures escape game bundle"}
          ></img>
        </div>
        <div className="section-container py-16 md:py-20 lg:py-28  mx-auto max-w-[1220px] px-3 rm:px-4 md:px-8 relative z-20">
          <div className="bnd-row flex flex-col lg:flex-row justify-between items-center">
            <div className="bnd-col w-full lg:w-[44%] order-2 lg:order-1">
              <div className="section-head max-w-[660px] mx-auto lg:mx-0">
                <div className="section-title ">
                  <p className="font-os font-semibold text-[1.5rem] md:text-[1.7rem] xl:text-[1.875rem] uppercase text-[#38D000] ">
                    SAVE 25%
                  </p>

                  <h2 className="text-[#ffffff] uppercase font-bold text-[1.7rem] rm:text-[2rem] zm:text-[2.3rem] leading-[1.1] sm:text-[2rem] lg:text-[2.5rem] font-os font-os outline-tile mt-0 md:mt-3 xl:mt-2">
                    CHOOSE YOUR BUNDLE
                  </h2>
                </div>

                <div className="section-sub-title  max-w-[800px]  xl:max-w-[900px]">
                  <p className="text-[#bababa]  sm:text-lg lg:text-[1rem] xl:text-[1.1rem]  mt-3 md:mt-4 lg:mt-3">
                    Double the fun without doubling the cost! We've paired our
                    most popular escape rooms into themed 2-game bundles —
                    perfect for families, friends, and thrill-seekers. Each
                    bundle saves you 25% automatically, no promo code needed.
                    Find your perfect challenge below.
                  </p>
                </div>
                <div className="escape-game-bundlei-btn max-w-[300px] mt-6 md:mt-7 lg:mt-5">
                  {!locationSlug && (
                    <button
                      onClick={showLocModal}
                      className="w-full  block uppercase py-3 md:py-3 px-4 md:text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center"
                    >
                      Unlock YOUR BUNDLE
                    </button>
                  )}
                  {locationSlug && (
                    <button
                      onClick={() => bookBundle(locationSlug)}
                      className="w-full  block uppercase py-3 md:py-3 px-4 md:text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center"
                    >
                      Unlock YOUR BUNDLE
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="bnd-col w-full lg:w-[55%] order-1 lg:order-2">
              <div className="escape-game-bundlei-mg w-full">
                <img
                  className="w-full lg:a-auto lg:max-w-full"
                  src={
                    "/assets/bundle/bundle-game-baner.png"
                  }
                  alt={"all in adventures escape game bundle"}
                ></img>
              </div>
            </div>
          </div>

          {/*============section head==========*/}

          {/*============section head end==========*/}

          {/*============Escape bundle-img=========*/}

          {/*============Escape bundle-img end==========*/}
        </div>
      </div>
    </div>
  );
}
