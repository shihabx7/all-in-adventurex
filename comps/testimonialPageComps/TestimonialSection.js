import PageLink from "../util/PageLink";
import TitleSeparator from "../util/TitleSeparator";
import TestimonialList from "./TestimonialList";
const TestimonialSection = (props) => {
  return (
    <div className="all-testimonial-section relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
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
      {/*===================all  testimonils group======================== */}
      {props.testimonialsGroup.length > 0 ? (
        <div className="secttion-container max-w-7xl mx-auto py-16 md:py-20 lg:py-28 px-4 relative z-30">
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
                  <p className="text-lg text-[#938056] text-center">
                    TESTIMONIALS
                  </p>
                  <TitleSeparator
                    title={group.groupTitle}
                    setMicroData={true}
                  />
                  <div
                    className="text-gray-700 md:px-8 md:text-lg mt-2 md:mt-4"
                    dangerouslySetInnerHTML={{ __html: group.groupSubtitle }}
                  ></div>
                </div>
                <div
                  className="rv-group"
                  itemScope
                  itemType="https://schema.org/Review"
                >
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
