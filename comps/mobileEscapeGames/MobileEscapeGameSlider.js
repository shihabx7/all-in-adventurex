import TitleSeparator from "../util/TitleSeparator";
import MobileEscapeGameCarousel from "./MobileEscapeGameCarousel";
const MobileEscapeGameSlider = () => {
  return (
    <div className="mer-games-slider bg-black">
      <div className="py-16 md:py-20 lg:py-28  z-20 ">
        <div className="section-head max-w-[960px] mx-auto px-4 ">
          <TitleSeparator title={"CHOOSE YOUR MOBILE ESCAPE ROOM ADVENTURE"} />
          <div className="text-gray-200 md:px-8 md:text-lg text-center mt-4 md:mt-6">
            Select from a variety of thrilling themes and challenges, each
            designed to engage your group and create an unforgettable
            experience, right at your location.
          </div>
        </div>
        <div className="megc relative">
          <MobileEscapeGameCarousel />
        </div>
      </div>
    </div>
  );
};
export default MobileEscapeGameSlider;
