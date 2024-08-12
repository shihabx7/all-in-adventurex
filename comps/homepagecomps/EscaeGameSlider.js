import TitleSeparator from "../util/TitleSeparator";
import EscapeGameCarousel from "./EscapeGameCarousel";
import { FaAngleRight } from "react-icons/fa";

const EscaeGameSlider = (props) => {
  return (
    <div className="inpsliderhome  bg-black game-bg-pattern-dark relative pb-4">
      <div className="max-w-7xl mx-auto pt-16 md:pt-28 px-4 z-20 relative">
        <TitleSeparator title={props.escapeGameList.title} />

        <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-16">
          <div
            className="text-gray-200 md:px-8"
            dangerouslySetInnerHTML={{ __html: props.escapeGameList.subTitle }}
          ></div>

          <div className="mt-2 md:mt-4 escape-flow flex justify-center items-center space-x-.9 md:space-x-1 text-[18px] text-gold font-medium md:text-xl">
            <div className="text-[14px] rm:text-[16px] md:text-[18px]">
              Team Up
            </div>
            <span className="text-gold">
              <FaAngleRight />
            </span>
            <div className="hidden md:block">Find Clues</div>
            <span className="text-gold hidden md:block">
              <FaAngleRight />
            </span>
            <div className="text-[14px] rm:text-[16px] md:text-[18px]">
              Solve Puzzles
            </div>
            <span className="text-gold">
              <FaAngleRight />
            </span>
            <div className="text-[14px] rm:text-[16px] md:text-[18px]">
              Escape
            </div>
            <span>
              <img
                className="ml-2 w-[28px] md:w-[36px] lg:w-[40px]"
                src="/assets/svg/inperson.svg"
              ></img>
            </span>
          </div>
        </div>
      </div>
      <div className="slider-box pb-4 md:pb-8 relative">
        {props.locationSlug ? (
          <EscapeGameCarousel
            escapeGameList={props.escapeGameList.gameList}
            locationSlug={props.locationSlug}
            isPublished={props.isPublished}
          />
        ) : (
          <EscapeGameCarousel escapeGameList={props.escapeGameList.gameList} />
        )}
      </div>
      <div className="view-all flex justify-center pt-8 md:pt-12 lg:pt-16 pb-16">
        {props.locationSlug ? (
          <a
            href={"/" + props.locationSlug + "/activities"}
            className="flex relative z-20 font-medium text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"
          >
            <span>View all real-life escape rooms</span> <FaAngleRight />
          </a>
        ) : (
          <a
            href={"/activities/"}
            className="flex relative z-20 font-medium text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"
          >
            <span>View all real-life escape rooms</span> <FaAngleRight />
          </a>
        )}
      </div>
    </div>
  );
};

export default EscaeGameSlider;
