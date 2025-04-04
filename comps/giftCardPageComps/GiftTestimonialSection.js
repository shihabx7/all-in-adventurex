import React from "react";
import GiftTestimonialCarousel from "./GiftTestimonialCarousel";
import SectionTitleCenter from "./SectionTitleCenter";
import GiftGnBtn from "./GiftGnBtn";
function GiftTestimonialSection({ setShowGiftBookingList, testimonialSectionData }) {
  return (
    <div className="gift-testimonial bg-black">
      <div className="gift-testimonial-container max-w-7xl mx-auto py-16 md:py-20 lg:py-28  z-20 px-1 md:px-4 ">
        <div className="gtc-box ">
          {/*====================section title==============*/}
          <div className="section-head mb-3 rm:mb-4 md:mb-6 lg:mb-7  md:max-w-[720px] lg:max-w-[860px] mx-auto px-4">
            <div className="rm:max-w-[320px] zm:max-w-[440px] md:max-w-none mx-auto"> <SectionTitleCenter textColor={"#E0BF62"} title={testimonialSectionData.sectionTitle ? testimonialSectionData.sectionTitle : "SEE WHAT OUR ADVENTURERS ARE SAYING"} /></div>

            {testimonialSectionData.sectionSubTitle !== null ? (
              <div
                className="text-[#ffffff] mt-1 md:mt-2 lg:mt-2  text-center md:text-lg lg:text-xl max-w-[840px] mx-auto"
                dangerouslySetInnerHTML={{
                  __html: testimonialSectionData.sectionSubTitle,
                }}
              ></div>
            ) : (
              <></>
            )}

          </div>
          {testimonialSectionData.testimonialList.length > 0 ? (
            <div className="megc px-2 lg:px-8 xl:px-0 relative">
              <GiftTestimonialCarousel
                testimonialList={testimonialSectionData.testimonialList}
              />
            </div>
          ) : (
            <></>
          )}
          <div className="sec-btn ss-btn flex justify-center mt-12 md:mt-16">
            <GiftGnBtn
              setShowGiftBookingList={
                setShowGiftBookingList
                  ? setShowGiftBookingList
                  : false
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftTestimonialSection;
