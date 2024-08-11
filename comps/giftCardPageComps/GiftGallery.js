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
          <div className="sec-title gs-title max-w-[840px] mx-auto">
            <TitleSeparator
              title={
                props.giftGallery.sectionTitle != null
                  ? props.giftGallery.sectionTitle
                  : "ADVENTURE GALLERY"
              }
            />
            {props.giftGallery.sectionSubTitle != null ? (
              <div
                className="text-lg text-[#2e2e2e] mt-2 text-center"
                dangerouslySetInnerHTML={{
                  __html: props.giftGallery.sectionSubTitle,
                }}
              ></div>
            ) : (
              <p className="text-lg text-[#2e2e2e] mt-2 text-center">
                Teams can have their group picture taken after their room with
                exciting props and a variety of backgrounds to choose from. This
                digital memento is included in the experience at no extra charge
                and is great for sharing with friends and family to commemorate
                the experience.
              </p>
            )}
          </div>
          {/*========================Section Title end======================*/}
          {/*========================gallery grid======================*/}
          <div className="ggl-container flex justify-center mt-8 md:mt-12 ">
            <div className="grid gridcols-1 md:grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3 lg:gap-6">
              {/*========================gallery grid item======================*/}
              {props.giftGallery.galleryImageList.length > 0 ? (
                props.giftGallery.galleryImageList.map((galleryItem) => {
                  return (
                    <div key={galleryItem.id} className="gl-item ">
                      <img
                        className="rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                        alt={galleryItem.alt}
                        src={galleryItem.url}
                      ></img>
                    </div>
                  );
                })
              ) : (
                <></>
              )}

              {/*========================gallery grid item======================*/}
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
                giftBooking={props.giftBooking ? props.giftBooking : false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftGallery;
