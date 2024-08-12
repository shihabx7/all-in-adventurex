import Link from "next/link";
import GiftMenu from "../headerComps/GiftMenu";
import TitleSeparator from "../util/TitleSeparator";
import { useState } from "react";

const GiftCards = (props) => {
  const [showGiftBookingList, setShowGiftBookingList] = useState(false);
  const showLocation = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setShowGiftBookingList(true);
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
      {showGiftBookingList && (
        <div className="gftmenu">
          <GiftMenu
            locationSlugList={props.locationSlugList}
            setShowGiftBookingList={setShowGiftBookingList}
          />
        </div>
      )}

      <div className="buy-gift bg-black gift-pattern py-20 md:py-28  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 z-30">
          <TitleSeparator title="All IN ADVENTURES GIFT CARDS" />
          <div className="max-w-[840px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-12 lg:mb-16">
            <p className="text-gray-200 md:px-8">
              Have you ever considered giving the “gift of memories”? Well, our
              gift cards may be just what you're searching for! All In
              Adventures gift cards are perfect for your adventure loving
              friends/family and colleagues. You absolutely can't go wrong with
              this gift idea - it's something everyone will love and favor!
            </p>
          </div>
          <div className="gift-row flex flex-col md:flex-row justify-center md:space-x-4 lg:space-x-8 items-center">
            <div className="gift-poster md:w-1/2">
              <img src="/assets/allinadventures-gift-cards-section.png"></img>
            </div>
            <div className="gift-info md:w-1/2">
              <h3 className="golden-text font-semibold mt-8 md:mt-0 text-xl lg:text-2xl mb-4">
                HOW IT WORKS
              </h3>
              <p className="text-gray-200 lg:text-lg mb:4">
                Click “Buy Gift Card” to be routed to your local All In
                Adventures location. Once purchased, you will receive an email
                confirmation which includes the gift card number which can be
                redeemed at any time.
              </p>
              <p className="mt-3 mb-3 md:mt-4 md:mb-4 text-lg md:text-xl font-medium text-[#eeeeee]">
                Below are a few things to keep in mind:
              </p>
              <div className="flex  lg:text-lg text-gray-300 mt-4">
                <span className="block mt-1 w-6 md:w-8">
                  <img src="/assets/svg/star-bullet.svg"></img>
                </span>
                <span className="block w-[90%]">Gift cards never expire.</span>
              </div>
              <div className="flex  lg:text-lg text-gray-300 mt-3">
                <span className="block mt-1 w-6 md:w-8">
                  <img src="/assets/svg/star-bullet.svg"></img>
                </span>
                <span className="block w-[90%]">
                  Anyone can use/redeem the card to book any experience on our
                  website, in-store, or over the phone.
                </span>
              </div>
              <div className="flex  lg:text-lg text-gray-300 mt-3">
                <span className="block mt-1 w-6 md:w-8">
                  <img src="/assets/svg/star-bullet.svg"></img>
                </span>
                <span className="block w-[90%]">
                  Customers have an option to pay the remaining balance during
                  checkout - if the selected experience costs higher than the
                  amount of the gift card.
                </span>
              </div>
              <div className="flex  lg:text-lg text-gray-300 mt-3">
                <span className="block mt-1 w-6 md:w-8">
                  <img src="/assets/svg/star-bullet.svg"></img>
                </span>
                <span className="block w-[90%]">
                  Players of all ages are welcome; however, a paying adult (18
                  years or older) must participate with anyone below the age of
                  13. Any participants under the age of 18 will need an adult to
                  sign their waiver.
                </span>
              </div>
              <div className="flex  lg:text-lg text-gray-300 mt-3">
                <span className="block mt-1 w-6 md:w-8">
                  <img src="/assets/svg/star-bullet.svg"></img>
                </span>
                <span className="block w-[90%]">
                  All our locations are wheelchair accessible.
                </span>
              </div>
              <div className="flex  lg:text-lg text-gray-300 mt-3">
                <span className="block mt-1 w-6 md:w-8">
                  <img src="/assets/svg/star-bullet.svg"></img>
                </span>
                <span className="block w-[90%]">
                  Game experiences vary by location.
                </span>
              </div>
              <div className="gift-btn-box mt-8">
                {props.locationSlug ? (
                  <>
                    {props.isPublished ? (
                      <>
                        {props.giftBooking.isActive ? (
                          <button
                            onClick={() => giftBooking(props.giftBooking)}
                            className="bg-red-600  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block w-[280px] md:w-[300px] lg:w-[340px] text-center text-gray-100 rounded-full font-medium"
                          >
                            BUY GIFT CARDS
                          </button>
                        ) : (
                          <button
                            onClick={() => showLocation()}
                            className="bg-red-600  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block w-[280px] md:w-[300px] lg:w-[340px] text-center text-gray-100 rounded-full font-medium"
                          >
                            COMING SOON
                          </button>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => showLocation()}
                        className="bg-red-600  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block w-[280px] md:w-[300px] lg:w-[340px] text-center text-gray-100 rounded-full font-medium"
                      >
                        COMING SOON
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => showLocation()}
                    className=" bg-red-600 hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block w-[280px] md:w-[300px] lg:w-[340px] text-center text-gray-100 rounded-full font-medium"
                  >
                    BUY GIFT CARDS
                  </button>
                )}

                {props.locationSlug ? (
                  <a
                    href={"/" + props.locationSlug + "/gift-cards"}
                    className="bg-transparent mt-4  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block w-[280px] md:w-[300px] lg:w-[340px] text-center text-gray-100 rounded-full font-medium"
                  >
                    LEARN MORE
                  </a>
                ) : (
                  <a
                    href="/gift-cards"
                    className="bg-transparent mt-4  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block w-[280px] md:w-[300px] lg:w-[340px] text-center text-gray-100 rounded-full font-medium"
                  >
                    LEARN MORE
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCards;
