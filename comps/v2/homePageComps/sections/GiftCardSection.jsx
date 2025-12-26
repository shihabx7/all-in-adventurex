import { useSiteData } from "../../../../contexts/SiteDataContext";
import { locationBookingInfo } from "../../../../lib/v2/data/locationBookingInfo";

export default function GiftCardSection({ locationSlug, giftBooking }) {
  const { openModalMenu, setModalMenuType } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | gift-card | mobile-mystery | mobile-mystery-quote | unlimited-play-pass | bundle
  const showLocModal = (menuType) => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setModalMenuType(menuType);
    openModalMenu();
  };

  const giftCardBooking = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "no",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };

  return (
    <div className="section mobile-mystery pt-3 rm:pt-4 md:pt-6 xl:pt-8 2xl:pt-10">
      <div className="section-container pt-3 rm:pt-4 md:pt-6 xl:pt-8 2xl:pt-10 mx-auto max-w-7xl  px-4 md:px-0">
        {/*============section head==========*/}
        <div className="section-head px-3 rm:px-4">
          <div className="pageTitle max-w-[320px] zm:max-w-[500px] md:max-w-[780px] lg:max-w-[960px] mx-auto">
            <h2 className="text-[#e0bf62] uppercase font-bold text-center text-[28px] rm:text-[30px] zm:text-[33px] leading-[1.2] sm:text-4xl lg:text-5xl font-os outline-tile">
              GIFT CARDS
            </h2>
          </div>

          <div className="page-sub-title max-w-[700px] lg:max-w-[800px] mx-auto">
            <p className="text-[#f3f4f6]  sm:text-lg xl:text-xl text-center mt-3 md:mt-3 lg:mt-4 xl:mt-5">
              Give more than a gift—give unforgettable escape room adventures
              filled with teamwork and excitement. Digital gift cards never
              expire and are redeemable at all our locations.
            </p>
          </div>
        </div>
        {/*============section head end==========*/}
        <div className="gift-card-container lm:max-w-[380px]  zm:max-w-[500px] md:max-w-[760px]  lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1200px] mx-auto  mt-8 md:mt-10 lg:mt-12">
          {/*============mob myster  card==========*/}
          <div className="ogl-info-row flex justify-center flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-5 xl:space-x-8">
            <div className="ogl-item-col w-full relative shadow-golden">
              <div className="ogl-info-bg-img  w-full h-full absolute  z-10">
                <img
                  className="w-full h-full object-cover object-center"
                  src={
                    "/assets/gift-images/allinadventures-escape-room-gift-card-list-bg.jpg"
                  }
                  alt={"allinadventures mobile mystery"}
                ></img>
              </div>
              <div className=" w-full h-full absolute top-0 left-0 z-20 overlay-53d"></div>
              <div className="ogl-info-content relative z-[30] p-2 rm:p-2  zm:p-4 md:p-4  xl:p-4">
                <div className="top-section flex justify-end space-x-6">
                  {/*==================================================================================Game info*/}
                  <div className="ogl-info-row grow">
                    {/*==================================================col 1 team*/}

                    {/*==================================================col 2 age*/}
                    <div className="item-col flex  mt-1 md:w-auto items-center space-x-1 2xl:space-x-2">
                      <img
                        className="max-h-[16px] rm:max-h-[18px] md:max-h-[16px] 2xl:max-h-[22px]"
                        src={
                          "/assets/escape-games/icons/escape-game-age-range-icon.svg"
                        }
                      ></img>
                      <p className="text-[#d9d9d9] text-[12px] rm:text-[14px] md:text-[13px] lg:text-[14px] 2xl:text-[15px]">
                        <span>Age: 6+</span>
                      </p>
                    </div>
                    {/*==================================================col 3 duration*/}

                    {/*==================================================col 4*/}
                  </div>
                  {/*=======================================-============================================price*/}
                  <div className="ogl-price ">
                    <div className="egl-price-wrapper relative">
                      <div className="bg-img ">
                        <img
                          className="w-[82px] zm:w-[84px] lg:w-[90px] xl:w-[100px] 2xl:w-[106px]"
                          src={
                            "/assets/escape-games/icons/escape-game-price-bg.svg"
                          }
                        ></img>
                      </div>
                      <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center ">
                        <p className="text-center text-[#AAA7A7] text-[.9rem] rm:text-[.94rem] md:text-[.96rem] xl:text-[1rem] 3xl:text-[1.1rem] leading-[1.1]">
                          From
                        </p>
                        <p className="text-center text-[#D4B56A] font-bold text-[1rem] rm:text-[1.15rem] md:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.28rem] leading-[1.2]">
                          $ 19.99
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-card-gap h-[140px] rm:h-[146px] md:h-[160px]"></div>
                {/*=========================================game  decription====*/}
                <div className="bottom-section md:max-w-[480px] lg:max-w-[700px]">
                  <h3 className="egl-game-title leading-[1.1] font-bold text-[20px] rm:text-[22px] zm:text-[26px] xl:text-[28px]  2xl:text-[30px] uppercase text-[#f0f0f0]">
                    GIFT CARDS
                  </h3>
                  {/*=========================================game short decription====*/}
                  <div className="egl-shot-desc mt-2 md:mt-2 xl:mt-3">
                    <p className="text-[#E5E7EB] text-sm lg:text-base 2xl:text-lg">
                      Surprise loved ones with All In Adventures Gift Cards for
                      thrilling escape room experiences—delivering teamwork,
                      excitement, and memories. Instantly emailed, never expire,
                      last-minute gifts for all ages.
                    </p>
                  </div>
                  {/*=========================================game button===*/}
                  <div className="egl-btn-pair mt-5 md:mt-5 mb-[8px] xl:mt-8 xl:mb-2">
                    <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 ">
                      {locationSlug && (
                        <>
                          <button
                            onClick={() => giftCardBooking(giftBooking)}
                            className="border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700
                         text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-semibold"
                          >
                            BUY NOW
                          </button>
                        </>
                      )}

                      {!locationSlug && (
                        <>
                          <button
                            onClick={(e) => showLocModal("gift-card")}
                            className="border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700
                         text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-semibold"
                          >
                            BUY NOW
                          </button>
                        </>
                      )}
                      <a
                        href={"/gift-cards"}
                        className="border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700
                         text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-semibold"
                      >
                        LEARN MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*============mob myster  card==========*/}
        </div>
      </div>
    </div>
  );
}
