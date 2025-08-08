import PageLink from "../util/PageLink";
import TitleSeparator from "../util/TitleSeparator";
import TestimonialList from "./TestimonialList";
import SectionTitleCenter from "../util/SectionTitleCenter";
import SectionBorderBottom from "../util/SectionBorderBottom";
const TestimonialSection = (props) => {
  return (
    <div className="all-testimonial-section relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      {/*======================= boder img============== */}
      <SectionBorderBottom />
      {/*======================= boder img end============== */}
      {/*===================all  testimonils group======================== */}
      {props.testimonialsGroup.length > 0 ? (
        <div className="secttion-container max-w-7xl mx-auto pb-16 md:pb-20 lg:pb-28 px-4 relative z-30">
          {props.testimonialsGroup.map((group, index) => {
            return (
              <div
                key={index + 1}
                className={
                  index > 0
                    ? "testimonial-section-group mt-16 md:mt-20 lg:mt-24"
                    : "testimonial-section-group"
                }
              >
                <div className="section-title text-center max-w-[840px] mx-auto">
                  <SectionTitleCenter title={group.groupTitle} />
                  <div
                    className="text-gray-700 md:px-8 md:text-lg mt-1 md:mt-1"
                    dangerouslySetInnerHTML={{ __html: group.groupSubtitle }}
                  ></div>
                </div>
                <div>
                  <TestimonialList testimonialsList={group.testimonialsList} />
                </div>
                <div className="flex justify-center mt-3 md:mt-6">
                  <PageLink
                    link={group.groupLink}
                    label={group.groupLinkLabel}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="secttion-container max-w-7xl mx-auto py-20  md:py-24 lg:py-28 px-4 relative z-30">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-medium text-[#1a1a1a]">
              No Testimonial Found
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialSection;
