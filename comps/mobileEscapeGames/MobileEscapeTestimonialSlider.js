import TitleSeparator from "../util/TitleSeparator";
import MobileEscapeGameTestimonialCar from "./MobileEscapeGameTestimonialCar";
const MobileEscapeTestimonialSlider = () => {
  return (
    <div className="mer-games-slider bg-black">
      <div className="py-16 md:py-20 lg:py-28  z-20 ">
        <div className="section-head max-w-[780px] mx-auto px-4 ">
          <TitleSeparator
            title={"WHAT OUR MOBILE ESCAPE ROOM PLAYERS ARE SAYING"}
          />
        </div>
        <div className="megc relative">
          <MobileEscapeGameTestimonialCar />
        </div>
      </div>
    </div>
  );
};
export default MobileEscapeTestimonialSlider;
