import React from "react";
import TitleSeparator from "../util/TitleSeparator";
import GiftGnBtn from "./GiftGnBtn";
function GiftGallery(props) {
  return (
    <div className="gift-gallery  relative  py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px] bg-[url('/assets/svg/pattern/brown-color-bg-pattern.svg')] bg-[length:320px_320px] md:bg-[length:460px_460px] lg:bg-[length:600px_600px] bg-repeat">
      <div className="btop absolute top-0 left-0 w-full">
        <img
          className="w-full"
          src="/assets/svg/pattern/brown-color-border.svg"
        ></img>
      </div>
      <div className="btop absolute bottom-0 left-0 w-full">
        <img
          className="w-full rotate-180"
          src="/assets/svg/pattern/brown-color-border.svg"
        ></img>
      </div>
      <div className="gift-gal-container-wrapper max-w-7xl mx-auto ">
        <div className="gsvenn-container ">
          <div className="sec-title gs-title max-w-[768px] mx-auto">
            <TitleSeparator
              title="ALL IN ADVENTURES GALLERY"
              color="dark-gold"
              weight="font-bold"
            />
            <p className="text-lg text-[#2e2e2e] mt-2 text-center">
              Meet some of our happy adventurers and a few of the scenes from
              our Escape From Alcatraz escape game. Experience this game at All
              In Adventures.
            </p>
          </div>
          {/*========================gallery grid======================*/}
          <div className="ggl-container flex justify-center mt-8 md:mt-12 ">
            <div className="grid gridcols-1 md:grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3 lg:gap-6">
              {/*========================gallery grid item======================*/}
              <div className="gl-item ">
                <img
                  className="rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                  alt="friends at all in adventures escape room after redeeming gift card"
                  src="/assets/gift-images/gallery/friends-at-all-in-adventures-escape-room-after-redeeming-gift-card.jpg"
                ></img>
              </div>
              {/*========================gallery grid item======================*/}
              <div className="gl-item ">
                <img
                  className="rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                  alt="friends at all in adventures escape room after redeeming gift card"
                  src="/assets/gift-images/gallery/escape-room-santa-claus-at-all-in-adventures.jpg"
                ></img>
              </div>
              {/*========================gallery grid item======================*/}
              <div className="gl-item ">
                <img
                  className="rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                  alt="friends at all in adventures escape room after redeeming gift card"
                  src="/assets/gift-images/gallery/kids-at-all-in-adventures-escape-room-using-gift-cards.jpg"
                ></img>
              </div>
              {/*========================gallery grid item======================*/}
              <div className="gl-item ">
                <img
                  className="rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                  alt="friends at all in adventures escape room after redeeming gift card"
                  src="/assets/gift-images/gallery/kids-all-in-adventures-escape-room-birthday-party.jpg"
                ></img>
              </div>
              {/*========================gallery grid item======================*/}
              <div className="gl-item ">
                <img
                  className="rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                  alt="friends at all in adventures escape room after redeeming gift card"
                  src="/assets/gift-images/gallery/young-adults-at-escape-room-after-redeeming-all-in-adventures-gift-cards.jpg"
                ></img>
              </div>
              {/*========================gallery grid item======================*/}
              <div className="gl-item ">
                <img
                  className="rounded-lg w-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                  alt="friends at all in adventures escape room after redeeming gift card"
                  src="/assets/gift-images/gallery/escape-room-team-building-corporates-using-all-in-adventures-gift-card.jpg"
                ></img>
              </div>
            </div>
          </div>
          <div className="sec-btn ss-btn  mt-12 md:mt-16">
            <div className="flex  justify-center mt-4">
              <GiftGnBtn
                setShowGiftBookingList={
                  props.setShowGiftBookingList
                    ? props.setShowGiftBookingList
                    : false
                }
                bookingData={props.bookingData ? props.bookingData : false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftGallery;
