import MainTestimonials from "./MainTestimonials";
import PageLink from "../util/PageLink";
import TitleSeparator from "../util/TitleSeparator";
const GameShowRoomTestimonials = (props) => {
  return (
    <div className="all-escaperooms-tes relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      <div className="secttion-container max-w-7xl mx-auto  pt-8 pb-16 md:pt-0 md:pb-20 lg:pb-28  px-4 relative z-30">
        <div className="section-title text-center max-w-[800px] mx-auto">
          <p className="text-lg text-[#938056] text-center">TESTIMONIALS</p>
          <TitleSeparator
            title="GAME SHOW ROOM CUSTOMERS"
            color="dark-gold"
            weight="font-bold"
          />
          <p className="text-gray-700 md:px-8 md:text-lg">
            We offer a special, unpredictable, family-friendly live game show
            experience for guests of all different ages, background and group
            sizes. You&quote;ll have a blast and make long-lasting memories
            while actively participating.
          </p>
        </div>
        <MainTestimonials
          category="gameshowroom"
          testimonials={props.testimonials}
        />
        <div className="flex justify-center mt-2 md:mt-4">
          <PageLink
            link="/activities"
            label="View all in-person escape rooms"
          />
        </div>
      </div>
      {/*======================= boder img============== */}

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
    </div>
  );
};

export default GameShowRoomTestimonials;
