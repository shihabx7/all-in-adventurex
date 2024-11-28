import TitleSeparator from "../util/TitleSeparator";
import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";
import MobileEscapeGameTestimonialCar from "./MobileEscapeGameTestimonialCar";
const MobileEscapeTestimonialSlider = ({
  testimonialSectionData,
  locationName,
}) => {
  return (
    <div className="mer-games-slider bg-black">
      <div className="py-16 md:py-20 lg:py-28  z-20 ">
        <div className="section-head mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[1200px] mx-auto px-4 ">
          <MobileTitleSeparatorCenter
            title={testimonialSectionData.sectionTitle}
          />
          {testimonialSectionData.sectionSubTitle !== null ? (
            <div
              className="text-[#2E2E2E] mt-3 md:mt-4 lg:mt-6  text-center md:text-lg lg:text-xl"
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
