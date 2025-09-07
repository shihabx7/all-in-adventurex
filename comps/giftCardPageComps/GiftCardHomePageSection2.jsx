import Link from "next/link";
import GiftMenu from "../headerComps/GiftMenu";
import GiftCardBookingMenu from "./GiftCardBookingMenu";
import TitleSeparator from "../util/TitleSeparator";
import SectionTitleCenter from "./SectionTitleCenter";
import { useState } from "react";

const GiftCardHomePageSection2 = (props) => {
  // const [showGiftBookingList, setShowGiftBookingList] = useState(false);
  const showLocation = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    props.setShowGiftBookingList(true);
  };

  const giftBooking = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };

  return (
    <>
      <div className="gift-card-home-section-v2 bg-[#090909]  relative overflow-hidden">
        <div className="max-w-7xl mx-auto py-16 md:py-24 lg:py-28 px-4 lg:px-6 z-30">
          <div className="gift-row gift-row-shadow xm:max-w-[490px] md:max-w-[700px] mx-auto lg:max-w-none flex flex-col lg:flex-row justify-between lg:space-x-7 xl:space-x-12 2xl:space-x-10 items-center ">
            <div className="gift-info order-2 lg:order-1 lg:w-1/2">
              <div className="text-content pt-4 md:pt-8 lg:pt-0">
                <h2 className="text-2xl rm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.7rem] 2xl:text-[3rem] leading-[1.3] md:leading-[1.2] font-os uppercase  text-[#E0BF62] font-os font-bold mb-3 zm:mb-4 2xl:max-w-[400px]">
                  ALL IN ADVENTURES GIFT CARDS
                </h2>
                <p className="text-[#d9d9d9] leading-[1.7] text-[.9rem] rm:text-base 2xl:text-lg mb-3 xl:mb-4">
                  Looking for the perfect gift? Surprise your loved ones with an
                  All In Adventures Gift Card—a ticket to thrilling escape room
                  experiences! Whether it's for a birthday, holiday, or just
                  because, this gift delivers excitement, teamwork, and
                  unforgettable memories.
                </p>
                <p className="text-[#d9d9d9] leading-[1.7] text-[.9rem] rm:text-base 2xl:text-lg mb-3 xl:mb-4">
                  No expiration date, no stress—just pure adventure! Instantly
                  delivered via email, it's the ultimate last-minute gift that
                  guarantees fun for all ages (6+).
                </p>
                <p className="text-[#d9d9d9] leading-[1.7] text-[.9rem] rm:text-base 2xl:text-lg mb-3 xl:mb-4">
                  Give more than just a present—give a lifetime of memories!
                </p>
              </div>
              <div className="gift-btn-box flex space-x-1 rm:space-x-2 justify-between md:justify-start md:space-x-6 mt-8">
                {props.locationSlug ? (
                  <>
                    {props.isPublished ? (
                      <>
                        {props.giftBooking.isActive ? (
                          <button
                            onClick={() => giftBooking(props.giftBooking)}
                            className="w-[49%] rm:w-[48%] md:max-w-[230px] text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium text-sm rm:text-base md:text-lg hover:bg-red-700 hover:border-red-700"
                          >
                            BUY GIFT CARDS
                          </button>
                        ) : (
                          <button
                            onClick={() => showLocation()}
                            className="w-[49%] rm:w-[48%] md:max-w-[230px] text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium text-sm rm:text-base md:text-lg hover:bg-red-700 hover:border-red-700"
                          >
                            COMING SOON
                          </button>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => showLocation()}
                        className="w-[49%] rm:w-[48%] md:max-w-[230px] text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium text-sm rm:text-base md:text-lg hover:bg-red-700 hover:border-red-700"
                      >
                        COMING SOON
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => showLocation()}
                    className="w-[49%] rm:w-[48%] md:max-w-[230px] text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium text-sm rm:text-base md:text-lg hover:bg-red-700 hover:border-red-700"
                  >
                    BUY GIFT CARDS
                  </button>
                )}

                <a
                  href="/gift-cards"
                  className="w-[49%] rm:w-[48%] md:max-w-[220px] text-center block border text-white border-red-600 bg-transparent py-[10px] md:py-3 rounded-full font-medium text-sm rm:text-base md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="gift-poster order-1 lg:order-2 lg:w-1/2">
              <div>
                <img
                  className="max-w-[99%] md:max-w-[500px]  mx-auto lg:max-w-full "
                  src="/assets/gift-images/hero/All-In-Adventures-Gift-Card-hero.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCardHomePageSection2;
