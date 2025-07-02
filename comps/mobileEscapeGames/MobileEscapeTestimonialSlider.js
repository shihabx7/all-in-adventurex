import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";
import MobileEscapeGameTestimonialCar from "./MobileEscapeGameTestimonialCar";
import { mobileEscapeTestimonialList } from "../../lib/tempData/mobileEscapeTempData";
const MobileEscapeTestimonialSlider = ({
  testimonialSectionData,
  locationName,
}) => {
  return (
    <div className="mer-games-slider bg-[#231800]">
      <div className=" max-w-7xl mx-auto py-16 md:py-20 lg:py-28  z-20 px-1 md:px-4 ">
        <div className="section-head mb-3 rm:mb-4 md:mb-6 lg:mb-7  md:max-w-[720px] lg:max-w-[860px] mx-auto px-4 ">
          <MobileTitleSeparatorCenter
            title={testimonialSectionData.sectionTitle}
            textColor={"#E0BF62"}
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
        {testimonialSectionData.testimonialList.length > 3 ? (
          <div className="megc px-3 lg:px-8 xl:px-0 relative">
            <MobileEscapeGameTestimonialCar
              testimonialList={testimonialSectionData.testimonialList}
            />
          </div>
        ) : (
          <div className="megc px-3 lg:px-8 xl:px-0 relative">
            <MobileEscapeGameTestimonialCar
              testimonialList={mobileEscapeTestimonialList}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default MobileEscapeTestimonialSlider;
