import GameTitleSeparator from "../util/GameTitleSeparator";
import GameDtBtn from "../util/GameDtBtn";
import Image from "next/image";
import { ImSad } from "react-icons/im";

const ActivityRootDetails = (props) => {
  return (
    <div className="game-details bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] relative ">
      {/*======================= boder img============== */}
      <div className="sec-divider-top w-full absolute top-0 left-0 ">
        <div className="w-full hidden md:block">
          <img
            src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
            alt="All in Adventures border pattern"
          />
        </div>
        <div className="w-full md:hidden">
          <img
            src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
            alt="All in Adventures border pattern"
          />
        </div>
      </div>

      {/*======================= boder img end============== */}
      <div className="content-container-game pt-[116px] md:pt-24 lg:pt-32 md:px-4 relative z-10">
        {/*=========== Activity story Line=====*/}
        <div className="game-dt-container storyline-bg relative overflow-x-hidden md:overflow-visible ">
          <div className="st-bg absolute top-[38%] right-0 md:left-[-20px] md:top-[-40px] lg:top-[-110px] xl:top-[-80px] 2xl:top-[-40px] 2xl:left-[-60px] 4xl:left-[172px] 5xl:left-[210px]">
            <div className="w-[196px] md:w-[130px] lg:w-[180px] xl:w-[200px] 2xl:w-[380px] 4xl:w-[466px] 5xl:w-[492px]">
              <Image
                src={props.activityData.storyLineBgImage.url}
                alt={props.activityData.storyLineBgImage.alt}
                width={props.activityData.storyLineBgImage.width}
                height={props.activityData.storyLineBgImage.height}
              />
            </div>
          </div>

          <div className="game-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="gme-dt-col  order-2 md:order-1 md:w-[49%] lg:w-[45%] relative z-20">
              <div className="game-dt-title">
                <p className="md:text-lg text-[#938056] md:mb-1 uppercase">
                  {props.activityData.activityName}
                </p>
                <GameTitleSeparator title={props.activityData.storyLineLabel} />
              </div>
              <div
                className="game-dt-desc mt-4 md:mt-4 lg:mt-6 text-[#464646] md:text-[18px] lg:text-[20px]"
                dangerouslySetInnerHTML={{
                  __html: props.activityData.storyLineText,
                }}
              ></div>
              <div className="game-dt-link mt-4 md:mt-4 lg:mt-6">
                <GameDtBtn
                  label="SOUNDS GREAT! BOOK NOW"
                  color="golden-text"
                  weight="font-bold"
                />
              </div>
            </div>
            <div className="game-dt-col  md:w-[49%] lg:w-[45%] order-1 mb-4 md:mb-0 md:order-2">
              <img
                src={props.activityData.storyLineImage.url}
                alt={props.activityData.storyLineImage.alt}
              ></img>
            </div>
          </div>
        </div>
        {/*=========== Activity story Line End=====*/}
        {/*=========== Activity plot=====*/}
        <div className="game-dt-container plot-bg relative overflow-x-hidden md:overflow-visible">
          <div className="pt-bg absolute top-[38%] right-[-20px] md:top-[-100px] lg:top-[-124px] xl:top-[-110px] 2xl:top-[-140px] 2xl:right-[0px] 4xl:right-[220px] 5xl:right-[330px] w-[240px] md:w-[240px] lg:w-[280px] xl:w-[300px] 2xl:w-[400px] 4xl:w-[520px] 5xl:w-[550px]">
            <div className="w-[240px] md:w-[240px] lg:w-[280px] xl:w-[300px] 2xl:w-[400px] 4xl:w-[520px] 5xl:w-[550px]">
              <img
                src={props.activityData.plotBgImage.url}
                alt={props.activityData.plotBgImage.alt}
              ></img>
            </div>
          </div>

          <div className="game-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-12 md:py-16 lg:py-20">
            <div className="game-dt-col md:w-[48%] lg:w-[45%]  mb-4 md:mb-0 ">
              <img
                src={props.activityData.plotImage.url}
                alt={props.activityData.plotImage.alt}
              ></img>
            </div>
            <div className="gme-dt-col md:w-[48%] lg:w-[45%]">
              <div className="game-dt-title">
                <p className="md:text-lg text-[#938056] md:mb-1 uppercase">
                  {props.activityData.activityName}
                </p>
                <GameTitleSeparator title={props.activityData.plotLabel} />
              </div>
              <div
                className="game-dt-desc mt-4 md:mt-4 lg:mt-6 text-[#464646] md:text-[18px] lg:text-[20px]"
                dangerouslySetInnerHTML={{
                  __html: props.activityData.plotText,
                }}
              ></div>
              <div className="game-dt-link mt-4 md:mt-4 lg:mt-6">
                <GameDtBtn label="VERY EXCITING! BOOK NOW" />
              </div>
            </div>
          </div>
        </div>
        {/*=========== Activity Plot End=====*/}
        {/*=========== Activity mission=====*/}
        <div className="game-dt-container mission-bg relative overflow-x-hidden md:overflow-visible">
          <div className="msn-bg-l absolute top-[40%] right-[-10px] hidden md:block md:left-0 md:top-[-160px] lg:top-[-120px] xl:top-[-140px] 2xl:top-0 4xl:left-[200px] 5xl:left-[300px] 4xl:top-[-160px]  z-20 w-[120px] md:w-[140px] lg:w-[170px] xl:w-[200px] xl:opacity-80 2xl:w-[280px] 2xl:opacity-90 4xl:w-[320px] 5xl:w-[380px] ">
            <div className=" -scale-x-100 md:scale-x-100 w-[120px] md:w-[140px] lg:w-[170px] xl:w-[200px] xl:opacity-80 2xl:w-[280px] 2xl:opacity-90 4xl:w-[320px] 5xl:w-[380px] ">
              <img
                src="/assets/svg/game-bg-pattern/direction.svg"
                alt="All in Adventures border pattern"
              />
            </div>
          </div>
          <div className="msn-bg-r absolute bottom-[36%] rotate-[-15deg]  right-[-80px] md:rotate-[-20deg]  md:bottom-[-80px] md:right-[0px] lg:bottom-[-120px] lg:right-[-10px] xl:bottom-[-130px] xl:right-[-10px] 2xl:bottom-[-180px] 2xl:right-[120px] 4xl:right-[300px] 4xl:bottom-[-240px] 5xl:right-[340px] z-20">
            <div className="w-[280px] md:w-[340px] lg:w-[360px] xl:w-[420px] xl:opacity-90 2xl:w-[500px] 2xl:opacity-100 4xl:w-[540px] 5xl:w-[620px]">
              <img
                src="/assets/svg/game-bg-pattern/settings.svg"
                alt="All in Adventures border pattern"
              />
            </div>
          </div>
          <div className="game-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 relative z-30 ">
            <div className="gme-dt-col order-2 md:order-1 md:w-[48%] lg:w-[45%]">
              <div className="game-dt-title">
                <p className="md:text-lg text-[#938056] md:mb-1 uppercase">
                  {props.activityData.activityName}
                </p>
                <GameTitleSeparator title={props.activityData.missionLabel} />
              </div>
              <div
                className="game-dt-desc mt-4 md:mt-4 lg:mt-6 text-[#464646] md:text-[18px] lg:text-[20px]"
                dangerouslySetInnerHTML={{
                  __html: props.activityData.missionText,
                }}
              ></div>
              <div className="game-dt-link mt-4 md:mt-4 lg:mt-6">
                <GameDtBtn label="LET'S GET TO IT! BOOK NOW" />
              </div>
            </div>
            <div className="game-dt-col md:w-[48%] lg:w-[45%] order-1 mb-4 md:mb-0 md:order-2">
              <img
                src={props.activityData.missionImage.url}
                alt={props.activityData.missionImage.alt}
              ></img>
            </div>
          </div>
        </div>

        {/*===========  Activity mission end=====*/}
      </div>
    </div>
  );
};

export default ActivityRootDetails;
