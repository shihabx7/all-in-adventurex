import SectionTittleCenterLight from "../../common/SectionTitleCenterLight";
import ToyMakerTestimonialCarousel from "../ToyMakerTestimonialCarousel";
const ToyMakerTestimonialsSection = ({ sectionData }) => {
  return (
    <div className="mer-games-slider bg-black">
      <div className=" max-w-7xl mx-auto py-16 md:py-20 lg:py-28  z-20  ">
        <div className="section-head mb-3 rm:mb-4 md:mb-6 lg:mb-7  md:max-w-[720px] lg:max-w-[860px] mx-auto px-3 zm:px-4 ">
          <SectionTittleCenterLight title={sectionData.sectionTitle} />
          {sectionData.sectionSubTitle !== null ? (
            <div
              className="text-[#ffffff] mt-3 md:mt-3 xl:mt-4  text-center md:text-lg lg:text-xl max-w-[840px] mx-auto"
              dangerouslySetInnerHTML={{
                __html: sectionData.sectionSubTitle,
              }}
            ></div>
          ) : (
            <></>
          )}
        </div>
        {sectionData.testimonialList.length > 0 ? (
          <div className="megc px-3 lg:px-8 xl:px-0 relative">
            <ToyMakerTestimonialCarousel
              testimonialList={sectionData.testimonialList}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default ToyMakerTestimonialsSection;
