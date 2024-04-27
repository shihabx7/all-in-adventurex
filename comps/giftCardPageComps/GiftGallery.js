import React from "react";
import TitleSeparator from "../util/TitleSeparator";
import GiftGnBtn from "./GiftGnBtn";
function GiftGallery(props) {
  return (
    <div className="gift-gallery  relative  py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px] bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] bg-repeat">
      {/*======================= boder img============== */}
      <div className="sec-divider-top w-full absolute top-0 left-0 ">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
        ></img>
        <img
          className="w-full rotate-180 md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
        ></img>
        <img
          className="w-full  md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      {/*======================= boder img end============== */}
      <div className="gift-gal-container-wrapper max-w-7xl mx-auto ">
        <div className="gsvenn-container ">
          {/*========================Section Title======================*/}
          <div className="sec-title gs-title max-w-[768px] mx-auto">
            <TitleSeparator
              title="ADVENTURE GALLERY"
              color="dark-gold"
              weight="font-bold"
            />
            <p className="text-lg text-[#2e2e2e] mt-2 text-center">
              Teams can have their group picture taken after their room with
              exciting props and a variety of backgrounds to choose from. This
              digital memento is included in the experience at no extra charge
              and is great for sharing with friends and family to commemorate
              the experience.
            </p>
          </div>
          {/*========================Section Title end======================*/}
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
