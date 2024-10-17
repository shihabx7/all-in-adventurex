import TitleSeparator from "../util/TitleSeparator";
import Link from "next/dist/client/link";
import { FiChevronRight } from "react-icons/fi";
import GiftMenu from "../headerComps/GiftMenu";
const BuyGiftCards = (props) => {
  const showLocation = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("giftmenu").classList.remove("hidden");
  };

  return (
    <>
      {" "}
      {props.locationlist && (
        <div id="giftmenu" className="loc-menu-holder hidden">
          <GiftMenu locationlist={props.locationlist} />
        </div>
      )}
      <div className="buy-gift bg-black gift-pattern -mt-12 md:mt-0 py-16 md:py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 z-30">
          <TitleSeparator
            title="ALL IN ADVENTURES GIFT CARDS"
            color="text-gold"
            weight="font-bold"
          />
          <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-12 lg:mb-16">
            <p className="text-gray-200 md:px-8">
              Have you ever considered giving the “gift of memories”? Well, our
              gift cards may be just what you're searching for! All In
              Adventures gift cards are perfect for your adventure loving
              friends/family and colleagues. You absolutely can't go wrong with
              this gift idea - it's something everyone will love and favor!
            </p>
          </div>
          {/* =================1st section================*/}
          <div className="gift-row flex flex-col md:flex-row justify-center md:space-x-4 lg:space-x-8 items-center">
            <div className="gift-poster md:w-1/2">
              <img
                alt="A display of all-in-adventures gift cards, offering diverse experiences for special occasions and thoughtful gifting."
                src="/assets/allinadventures-gift-cards-section.png"
              ></img>
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
                  <img alt="star icon" src="/assets/svg/star-bullet.svg"></img>
                </span>
                <span className="block w-[90%]">
                  Customers have an option to pay the remaining balance during
                  checkout - if the selected experience costs higher than the
                  amount of the gift card.
                </span>
              </div>
              <div className="flex  lg:text-lg text-gray-300 mt-3">
                <span className="block mt-1 w-6 md:w-8">
                  <img alt="star icon" src="/assets/svg/star-bullet.svg"></img>
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
                  <img alt="star icon" src="/assets/svg/star-bullet.svg"></img>
                </span>
                <span className="block w-[90%]">
                  All our locations are wheelchair accessible.
                </span>
              </div>
              <div className="flex  lg:text-lg text-gray-300 mt-3">
                <span className="block mt-1 w-6 md:w-8">
                  <img alt="star icon" src="/assets/svg/star-bullet.svg"></img>
                </span>
                <span className="block w-[90%]">
                  Game experiences vary by location.
                </span>
              </div>

              <div className="gift-btn-box mt-8">
                <button
                  onClick={showLocation}
                  className="bg-red-600 card-book-btnx  w-[300px] md:w-[320px] hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block max-w-sm text-center text-gray-100 rounded-full font-medium"
                >
                  BUY GIFT CARDS
                </button>

                <a
                  href="/activities"
                  className="bg-transparent mt-4  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block w-[300px]  md:w-[320px] text-center text-gray-100 rounded-full font-medium"
                >
                  VIEW ALL GAMES
                </a>
              </div>
            </div>
          </div>
          {/* =================1st section end================*/}
          {/* =================2nd section================*/}
          <div className="gift-card-option pt-16 md:pt-20">
            <div className="gift-row flex flex-col md:flex-row justify-center md:space-x-4 lg:space-x-8 items-center ">
              <div className="gift-option order-2 md:order-1 md:w-1/2">
                <div className="gift-option-box mb-6 lg:mb-8">
                  <h3 className="golden-text font-semibold mt-8 md:mt-0 text-xl lg:text-2xl mb-4 uppercase">
                    A GIFT PURCHASE (WITH A SURPRISE TWIST . . .)
                  </h3>
                  <p className="text-[#BEBEBE] lg:text-lg">
                    Looking for a way to add something EXTRA SPECIAL to your
                    gift card purchase? We've got you covered with a unique
                    element of MYSTERY and SURPRISE. Basically, for an
                    additional fee we will send a surprise package directly to
                    your gift recipient(s) which includes an at-home mystery
                    experience where the recipient is provided all the makings
                    of an escape room game - all packaged into one convenient
                    bundle. Here's where the mystery comes in . . . this is an
                    anonymously presented gift to your recipient. While
                    navigating through the game, gift recipients will unlock
                    clues/puzzles to discover not only the identity of the
                    sender (you), but those clues also lead recipients to their
                    gift card! Nothing for you to do after adding this special
                    surprise to your cart - we take care of ensuring it gets
                    shipped to your recipient's address - at a nominal
                    shipping/handling fee.
                  </p>
                  <p className="text-[#BEBEBE] lg:text-lg italic mt-4">
                    Once you select the amount for your gift card to purchase
                    and add it to your cart, you will be prompted with the “Gift
                    Card Add-On” option.
                  </p>
                </div>
                <div className="gift-option-link flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between">
                  <div>
                    <Link href="#gift-faq">
                      <a className="flex items-center space-x-1 text-red-600 hover:text-red-700 font-medium text-lg">
                        <span>How to buy Gift Cards</span>
                        <span>
                          <FiChevronRight />
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="#gift-faq">
                      <a className="flex space-x-1  items-center text-red-600 hover:text-red-700 font-medium text-lg">
                        <span>How to redeem Gift Cards</span>
                        <span>
                          <FiChevronRight />
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="gift-option-poster order-1 md:order-2 md:w-1/2 text-end">
                <img
                  alt="An engaging poster featuring diverse gift options available at All in Adventures, designed to inspire and delight recipients."
                  src="/assets/gift-option-poster.jpg"
                ></img>
              </div>
            </div>
          </div>
          {/* =================2nd section end================*/}
        </div>
      </div>
    </>
  );
};

export default BuyGiftCards;
