import MainTestimonials from "./MainTestimonials";
import PageLink from "../util/PageLink";
import TitleSeparator from "../util/TitleSeparator";
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
      {/*===================all escaperooms testimonils======================== */}
      <div className="secttion-container max-w-7xl mx-auto pt-16 pb-8 md:py-20 lg:py-28 px-4 relative z-30">
        <div className="section-title text-center max-w-[800px] mx-auto">
          <p className="text-lg text-[#938056] text-center">TESTIMONIALS</p>
          <TitleSeparator title="ESCAPE ROOM CUSTOMERS" />
          <p className="text-gray-700 md:px-8 md:text-lg mt-2 md:mt-4">
            Escape rooms create long-lasting memories among players and an
            irreplaceable experience for years to come. Hopefully, the following
            stories might inspire you to give escape room a try with your
            friends, families or co-workers.
          </p>
        </div>
        <MainTestimonials
          category="escaperoom"
          testimonials={props.testimonials}
        />
        <div className="flex justify-center mt-3 md:mt-6">
          <PageLink
            link="/activities"
            label="View all in-person escape rooms"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
