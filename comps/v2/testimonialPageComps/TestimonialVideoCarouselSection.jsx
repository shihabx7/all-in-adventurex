import SectionTitleCenterDark from "../sharedComs/SectionTitleCenterDark";

import TestimonialVideoCarousel from "./TestimonialVideoCarousel";

export default function TestimonialVideoCarouselSection({ sectionData }) {
  return (
    <div className="all-testimonial-section relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      {/*======================= boder img============== */}

      {/*======================= boder img end============== */}
      <div className="secttion-container max-w-7xl mx-auto py-16 md:py-20 lg:py-28 px-3 sm:px-4 relative z-30">
        {/*===================Section Title======================== */}
        <div className="section-title text-center max-w-[890px] mx-auto">
          <SectionTitleCenterDark
            title={
              sectionData.sectionTitle
                ? sectionData.sectionTitle
                : "CUSTOMERS LOVE ALL IN ADVENTURES"
            }
          />
          {sectionData.sectionSubTitle && (
            <div
              className="text-gray-700 md:px-8 sm:text-lg xl:text-xl mt-3 md:mt-3 xl:mt-4 mb-4"
              dangerouslySetInnerHTML={{ __html: sectionData.sectionSubTitle }}
            ></div>
          )}
        </div>
        {/*===================video Carousel======================== */}
        <div className="max-w-[330px] lm:max-w-[348px] sm:max-w-full md:max-w-[760px] lg:max-w-[1020px] xl:max-w-full mx-auto">
          <TestimonialVideoCarousel
            testimonialVideoList={sectionData.testimonialVideoList}
          />
        </div>
      </div>
    </div>
  );
}
