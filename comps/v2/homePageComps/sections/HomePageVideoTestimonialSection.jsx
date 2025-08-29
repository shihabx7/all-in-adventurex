import SectionTitleCenterDark from "../../sharedComs/SectionTitleCenterDark";
import TestimonialVideoCarousel from "../../testimonialPageComps/TestimonialVideoCarousel";

const HomePageVideoTestimonialSection = ({ sectionData }) => {
  return (
    <div className="videotestimonia-section bg-[#FFF9EB]  ">
      <div className="videotestimonial-bg relative bg-[url('/assets/escape-game-events/old-paper-texture-bg-long.svg')] bg-no-repeat bg-center bg-cover ">
        <div className="all-testimonial-section relative ">
          {/*======================= boder img============== */}

          {/*======================= boder img end============== */}
          <div className="secttion-container max-w-7xl mx-auto py-16 md:py-20 lg:py-28 px-3 sm:px-4 relative z-30">
            {/*===================Section Title======================== */}
            <div className="section-title text-center max-w-[800px] mx-auto">
              <SectionTitleCenterDark
                title={
                  sectionData.sectionTitle
                    ? sectionData.sectionTitle
                    : "CUSTOMERS LOVE ALL IN ADVENTURES"
                }
              />
              {sectionData.sectionSubTitle && (
                <div
                  className="text-gray-700 max-w-[600px] mx-auto md:px-8 sm:text-lg xl:text-xl mt-3 md:mt-3 xl:mt-4 mb-4"
                  dangerouslySetInnerHTML={{
                    __html: sectionData.sectionSubTitle,
                  }}
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
      </div>
    </div>
  );
};

export default HomePageVideoTestimonialSection;
