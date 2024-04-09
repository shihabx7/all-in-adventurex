import TitleSeparator from "../util/TitleSeparator";
import InpersonCarousel from "./InpersonCarousel";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";

const InpersonEscapeSlider = (props) => {
  //console.log(props.inpersongames)

  return (
    <div className="inpsliderhome  bg-black game-bg-pattern-dark relative pb-4">
      <div className="max-w-7xl mx-auto pt-16 md:pt-28 px-4 z-20 relative">
        {props.city && (
          <>
            <TitleSeparator
              title={
                "REAL-LIFE ESCAPE ROOM GAMES in " +
                props.city +
                " " +
                props.state
              }
              color="text-gold"
              weight="font-bold"
            />
          </>
        )}
        {!props.city && (
          <TitleSeparator
            title="REAL-LIFE ESCAPE ROOM GAMES"
            color="text-gold"
            weight="font-bold"
          />
        )}

        <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-16">
          {props.city && (
            <p className="text-gray-200 md:px-8">
              Team up with your friends, family, kids (age 6+), or co-workers
              for an adrenaline filled 60 minute in-person interactive and
              engaging escape game experience!
            </p>
          )}
          {!props.city && (
            <p className="text-gray-200 md:px-8">
              Team up with your friends, family, kids (age 6+), or co-workers
              for an adrenaline filled 60 minute in-person interactive and
              engaging escape game experience!
            </p>
          )}

          <div className="mt-2 md:mt-4 escape-flow flex justify-center items-center space-x-.9 md:space-x-1 text-[18px] text-gold font-medium md:text-xl">
            <div>Team Up</div>
            <span className="text-gold">
              <FaAngleRight />
            </span>
            <div className="hidden md:block">Find Clues</div>
            <span className="text-gold hidden md:block">
              <FaAngleRight />
            </span>
            <div>Solve Puzzles</div>
            <span className="text-gold">
              <FaAngleRight />
            </span>
            <div>Escape</div>
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
        {props.publish && (
          <InpersonCarousel
            publish={props.publish}
            inpersongames={props.inpersongames}
            locationslug={props.locationslug}
            bookingData={props.bookingData}
          />
        )}
        {!props.publish && (
          <InpersonCarousel
            inpersongames={props.inpersongames}
            locationslug={props.locationslug}
            bookingData={props.bookingData}
          />
        )}
      </div>
      <div className="view-all flex justify-center pt-8 md:pt-12 lg:pt-16 pb-16">
        {props.locationslug && (
          <a
            href={"/" + props.locationslug + "/activities/"}
            className="flex relative z-20 font-medium text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"
          >
            <span>View all real-life escape rooms</span> <FaAngleRight />
          </a>
        )}
        {!props.locationslug && (
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

export default InpersonEscapeSlider;
