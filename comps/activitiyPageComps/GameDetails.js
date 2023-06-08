import GameTitleSeparator from "../util/GameTitleSeparator";
import GameDtBtn from "../util/GameDtBtn";
import { ImGift } from "react-icons/im";

const GameDetails = (props) => {
  return (
    <div
      className="game-details relative "
      style={{ backgroundImage: "url('/assets/game-dt-bg.jpg')" }}
    >
      <div className=" w-full absolute top-0 left-0">
        <img className="w-full" src="/assets/game-home-or1.jpg"></img>
      </div>
      <div className="content-container-game pt-16 md:pt-24 lg:pt-32 px-4 relative z-10">
        {/*=========== game story=====*/}
        <div className="game-dt-container storyline-bg relative">
          {props.activitydata.story_bg && (
            <div className="st-bg absolute top-[38%] right-0 md:left-[-20px] md:top-[-40px] lg:top-[-110px] xl:top-[-80px] 2xl:top-[-40px] 2xl:left-[-60px]">
              <img
                className="w-[110px] md:w-[130px] lg:w-[180px] xl:w-[200px] 2xl:w-[380px]"
                src={props.activitydata.story_bg}
              ></img>
            </div>
          )}

          <div className="game-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between md:px-4">
            <div className="gme-dt-col order-2 md:order-1 md:w-[49%] lg:w-[45%]">
              <div className="game-dt-title">
                <p className="md:text-lg text-[#938056] md:mb-1 uppercase">
                  {props.activityname}
                </p>
                <GameTitleSeparator
                  title={
                    props.activitydata.category == "other"
                      ? "HOW DOES IT WORK"
                      : "THE STORYLINE"
                  }
                  color="dark-gold"
                  weight="font-bold"
                ></GameTitleSeparator>
              </div>
              <div className="game-dt-desc mt-4 md:mt-4 lg:mt-6">
                <p className="text-[#464646] md:text-[18px] lg:text-[20px]">
                  {props.activitydata.story}
                </p>
              </div>
              <div className="game-dt-link mt-4 md:mt-4 lg:mt-6">
                <GameDtBtn
                  label="SOUNDS GREAT! BOOK NOW"
                  color="golden-text"
                  weight="font-bold"
                />
              </div>
            </div>
            <div className="game-dt-col md:w-[49%] lg:w-[45%] order-1 mb-4 md:mb-0 md:order-2">
              <img src={props.activitydata.storyimg}></img>
            </div>
          </div>
        </div>
        {/*=========== game story=====*/}
        {/*=========== game scene=====*/}
        <div className="game-dt-container plot-bg relative">
          {props.activitydata.scene_bg && (
            <div className="pt-bg absolute top-[38%] right-[0px] md:top-[-100px] lg:top-[-124px] xl:top-[-110px] 2xl:top-[-140px] 2xl:right-[0px]">
              <img
                className="w-[120px] md:w-[240px] lg:w-[280px] xl:w-[300px] 2xl:w-[400px]"
                src={props.activitydata.scene_bg}
              ></img>
            </div>
          )}

          <div className="game-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between  md:px-4 py-12 md:py-16 lg:py-20">
            <div className="game-dt-col md:w-[48%] lg:w-[45%]  mb-4 md:mb-0 ">
              <img src={props.activitydata.sceneimg}></img>
            </div>
            <div className="gme-dt-col md:w-[48%] lg:w-[45%]">
              <div className="game-dt-title">
                <p className="md:text-lg text-[#938056] md:mb-1 uppercase">
                  {props.activityname}
                </p>
                <GameTitleSeparator
                  title={
                    props.activitydata.category == "other"
                      ? "WHAT TO EXPECT"
                      : "THE PLOT"
                  }
                  color="dark-gold"
                  weight="font-bold"
                ></GameTitleSeparator>
              </div>
              <div className="game-dt-desc mt-4 md:mt-4 lg:mt-6">
                <p className="text-[#464646] md:text-[18px] lg:text-[20px]">
                  {props.activitydata.scene}
                </p>
              </div>
              <div className="game-dt-link mt-4 md:mt-4 lg:mt-6">
                <GameDtBtn label="VERY EXCITING! BOOK NOW" />
              </div>
            </div>
          </div>
        </div>
        {/*=========== game scene=====*/}
        {/*=========== game mission=====*/}
        <div className="game-dt-container mission-bg relative">
          <div className="msn-bg-l absolute top-[40%] right-[-10px] md:left-0 md:top-[-160px] lg:top-[-120px] xl:top-[-140px] 2xl:top-0  z-20">
            <img
              className=" -scale-x-100 md:scale-x-100 w-[120px] md:w-[140px] lg:w-[170px] xl:w-[200px] xl:opacity-80 2xl:w-[280px] 2xl:opacity-90"
              src="/assets/svg/game-bg-pattern/direction.svg"
            ></img>
          </div>
          <div className="msn-bg-r absolute bottom-[-100px]  right-0 md:bottom-[-80px] md:right-[0px] lg:bottom-[-120px] lg:right-[-10px] xl:bottom-[-130px] xl:right-[-10px] 2xl:bottom-[-180px] 2xl:right-[120px] z-20">
            <img
              className="w-[280px] md:w-[340px] lg:w-[360px] xl:w-[420px] xl:opacity-90 2xl:w-[490px] 2xl:opacity-100"
              src="/assets/svg/game-bg-pattern/settings.svg"
            ></img>
          </div>
          <div className="game-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between md:px-4 relative z-20">
            <div className="gme-dt-col order-2 md:order-1 md:w-[48%] lg:w-[45%]">
              <div className="game-dt-title">
                <p className="md:text-lg text-[#938056] md:mb-1 uppercase">
                  {props.activityname}
                </p>
                <GameTitleSeparator
                  title={
                    props.activitydata.category == "other"
                      ? "WHO CAN PLAY"
                      : "YOUR MISSION"
                  }
                  color="dark-gold"
                  weight="font-bold"
                ></GameTitleSeparator>
              </div>
              <div className="game-dt-desc mt-4 md:mt-4 lg:mt-6">
                <p className="text-[#464646] md:text-[18px] lg:text-[20px]">
                  {props.activitydata.mission}
                </p>
              </div>
              <div className="game-dt-link mt-4 md:mt-4 lg:mt-6">
                <GameDtBtn label="LET'S GET TO IT! BOOK NOW" />
              </div>
            </div>
            <div className="game-dt-col md:w-[48%] lg:w-[45%] order-1 mb-4 md:mb-0 md:order-2">
              <img src={props.activitydata.missionimg}></img>
            </div>
          </div>
        </div>

        {/*=========== game story=====*/}
      </div>
    </div>
  );
};

export default GameDetails;
