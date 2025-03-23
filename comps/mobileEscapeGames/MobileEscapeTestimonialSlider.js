
import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";
import MobileEscapeGameTestimonialCar from "./MobileEscapeGameTestimonialCar";
const MobileEscapeTestimonialSlider = ({
  testimonialSectionData,
  locationName,
}) => {
  return (
    <div className="mer-games-slider bg-black">
      <div className=" max-w-7xl mx-auto py-16 md:py-20 lg:py-28  z-20 px-1 md:px-4 ">
        <div className="section-head mb-3 rm:mb-4 md:mb-6 lg:mb-8  md:max-w-[720px] lg:max-w-[860px] mx-auto px-4 ">
          <MobileTitleSeparatorCenter
            title={testimonialSectionData.sectionTitle}

          />
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
          <div className="megc lg:px-8 xl:px-0 relative">
            <MobileEscapeGameTestimonialCar
              testimonialList={testimonialSectionData.testimonialList}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default MobileEscapeTestimonialSlider;
