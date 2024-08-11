import TitleSeparator from "../util/TitleSeparator";
import { FaAngleRight } from "react-icons/fa";
import OtherGameCarousel from "./otherGameCarousel";

import PysicalCarousel from "./PysicalCarousel";
const OtherGameSlider = (props) => {
  return (
    <div className="pysicalescape  bg-black game-bg-pattern-dark relative pb-4">
      <div className="max-w-7xl mx-auto pt-4 md:pt-8 px-4 relative z-20 ">
        <TitleSeparator title={props.otherGameList.title} />

        <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-12 lg:mb-16">
          <div
            className="text-gray-200 md:px-8"
            dangerouslySetInnerHTML={{ __html: props.otherGameList.subTitle }}
          ></div>
        </div>
      </div>
      <div className="slider-box pb-4 md:pb-8 relative">
        {props.locationSlug ? (
          <OtherGameCarousel
            otherGameList={props.otherGameList.gameList}
            locationSlug={props.locationSlug}
            isPublished={props.isPublished}
          />
        ) : (
          <OtherGameCarousel otherGameList={props.otherGameList.gameList} />
        )}
      </div>
      <div className="view-all flex justify-center pt-8 md:pt-8 pb-4 md:pb-16 lg:pb-20">
        {props.locationSlug ? (
          <a
            href={
              "/" + props.locationSlug + "/activities#others-physical-games"
            }
            className="flex relative z-20 font-medium text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"
          >
            <span>View all other games</span> <FaAngleRight />
          </a>
        ) : (
          <a
            href={"/activities#others-physical-games"}
            className="flex relative z-20 font-medium text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"
          >
            <span>View all other games</span> <FaAngleRight />
          </a>
        )}
      </div>
    </div>
  );
};

export default OtherGameSlider;
