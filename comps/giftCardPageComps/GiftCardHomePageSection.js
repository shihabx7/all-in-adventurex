import Link from "next/link";
import GiftMenu from "../headerComps/GiftMenu";
import GiftCardBookingMenu from "./GiftCardBookingMenu";
import TitleSeparator from "../util/TitleSeparator";
import SectionTitleCenter from "./SectionTitleCenter";
import { useState } from "react";

const GiftCardHomePageSection = (props) => {
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
      fullItems: "no",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };

  return (
    <>
      <div className="buy-gift bg-[#000000] gift-pattern py-16 md:py-24 lg:py-28  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 z-30">
          <div className="gift-row gift-row-shadow xm:max-w-[490px] md:max-w-[700px] mx-auto lg:max-w-none flex flex-col lg:flex-row justify-between lg:space-x-7 xl:space-x-12 2xl:space-x-10 items-center pt-6 pb-8 px-1 rm:px-2 lm:px-3 xm:px-4  zm:p-8 md:p-12 lg:p-10 xl:p-12 2xl:p-14 bg-[#151515] rounded-[14px]">
            <div className="gift-info order-2 lg:order-1 lg:w-1/2">
              <div className="text-content pt-4 md:pt-8 lg:pt-0 ">
                <p className="text-red-600 text-sm rm:text-base 2xl:text-[1.27rem] font-semibold uppercase">
                  Christmas Gift Card Deal — 20% OFF
                </p>
                <h2 className="text-[1.32rem] rm:text-[1.5rem] max-w-[400px] rm:max-w-[440px] md:max-w-[500px] md:text-[40px] lg:text-[42px] xl:text-[44px] 2xl:text-[48px]  leading-[1.2] text-[#CA9342] font-os font-bold mb-3 zm:mb-4 2xl:max-w-[400px]">
                  ALL IN ADVENTURES GIFT CARDS
                </h2>
                <p className="text-[#ffffff] text-sm rm:text-[.96rem] 2xl:text-lg mb-3 xl:mb-4 font-medium">
                  Use code <span className="text-red-600 ">GIFT20 </span>at checkout. Code expires Dec. 25.
                </p>
                <p className="text-[#c5c5c5] text-sm rm:text-base 2xl:text-lg mb-3 xl:mb-4">
                  Looking for the perfect gift? Surprise your loved ones with an
                  All In Adventures Gift Card—a ticket to thrilling escape room
                  experiences! Whether it's for a birthday, holiday, or just
                  because, this gift delivers excitement, teamwork, and
                  unforgettable memories.
                </p>
                <p className="text-[#c5c5c5] text-sm rm:text-base 2xl:text-lg mb-3 xl:mb-4">
                  No expiration date, no stress—just pure adventure! Instantly
                  delivered via email, it's the ultimate last-minute gift that
                  guarantees fun for all ages (6+).
                </p>

                <p className="text-[#c5c5c5] text-sm rm:text-base 2xl:text-lg mb-3 xl:mb-4">
                  Give more than just a present—give a lifetime of memories!
                </p>
              </div>
              <div className="gift-btn-box mt-7 zm:mt-8 xl:mt-10 flex flex-col zm:flex-row space-y-4 zm:space-y-0 zm:space-x-2 md:space-x-0 lg:space-x-3 xl:space-x-4">
                {props.locationSlug ? (
                  <>
                    {props.isPublished ? (
                      <>
                        {props.giftBooking.isActive ? (
                          <button
                            onClick={() => giftBooking(props.giftBooking)}
                            className="bg-red-600  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-10 md:px-12 lg:px-10 xl:px-12 block  text-center text-gray-100 rounded-full font-semibold"
                          >
                            BUY GIFT CARDS
                          </button>
                        ) : (
                          <button
                            onClick={() => showLocation()}
                            className="bg-red-600  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-8 md:px-12 lg:px-10 xl:px-12 block  text-center text-gray-100 rounded-full font-semibold"
                          >
                            COMING SOON
                          </button>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => showLocation()}
                        className="bg-red-600  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-10 md:px-12 lg:px-10 xl:px-12 block w-[280px]  text-center text-gray-100 rounded-full font-medium"
                      >
                        COMING SOON
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => showLocation()}
                    className=" bg-red-600 hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-10 md:px-12 lg:px-10 xl:px-12 block text-center text-gray-100 rounded-full font-medium"
                  >
                    BUY GIFT CARDS
                  </button>
                )}

                <a
                  href="/gift-cards"
                  className="bg-transparent  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-10 md:px-12 lg:px-10 xl:px-12 text-center text-gray-100 rounded-full font-medium"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="gift-poster order-1 lg:order-2 lg:w-1/2">
              <div>
                <img
                  className="max-w-[99%] md:max-w-[500px]  mx-auto lg:max-w-full "
                  src="/assets/gift-images/hero/gift-card-baner-christmas25.jpg"
                ></img>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCardHomePageSection;
