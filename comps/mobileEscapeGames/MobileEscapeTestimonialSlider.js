import TitleSeparator from "../util/TitleSeparator";
import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";
import MobileEscapeGameTestimonialCar from "./MobileEscapeGameTestimonialCar";
const MobileEscapeTestimonialSlider = ({
  testimonialSectionData,
  locationName,
}) => {
  return (
    <div className="mer-games-slider bg-black">
      <div className=" max-w-7xl mx-auto py-16 md:py-20 lg:py-28  z-20 px-1 md:px-4 ">
        <div className="section-head mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[1200px] mx-auto px-4 ">
          <MobileTitleSeparatorCenter
            title={testimonialSectionData.sectionTitle}
            
          />
          {testimonialSectionData.sectionSubTitle !== null ? (
            <div
              className="text-[#ffffff] mt-3 md:mt-4 lg:mt-6  text-center md:text-lg lg:text-xl max-w-[840px] mx-auto"
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
