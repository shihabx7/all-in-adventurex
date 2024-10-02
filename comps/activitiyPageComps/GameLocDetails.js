import GameTitleSeparator from "../util/GameTitleSeparator";
import GameDtBtn from "../util/GameDtBtn";

const GameLocDetails = (props) => {
  return (
    <div className="game-details bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-repeat bg-center bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] relative ">
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

      {/*======================= boder img end============== */}
      <div className="content-container-game  pt-[160px] md:pt-28 lg:pt-32  relative z-30">
        {/*=========== game story=====*/}
        <div className="game-dt-container storyline-bg relative overflow-x-hidden md:overflow-visible">
          {props.activitydata.story_bg && (
            <div className="st-bg absolute top-[38%] right-0 md:left-[-20px] md:top-[-40px] lg:top-[-110px] xl:top-[-80px] 2xl:top-[-40px] 2xl:left-[-60px] 4xl:left-[172px] 5xl:left-[210px]">
              <img
                className="w-[196px] md:w-[130px] lg:w-[180px] xl:w-[200px] 2xl:w-[380px] 4xl:w-[466px] 5xl:w-[492px]"
                src={props.activitydata.story_bg}
              ></img>
            </div>
          )}

          <div className="game-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="gme-dt-col order-2 md:order-1 md:w-[49%] lg:w-[45%] relative z-20">
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
                {props.publish == false && (
                  <div className="inline-block bg-golden hover:bg-golden-alt search-loc hover:cursor-pointer hover:shadow boder-p rounded-full">
                    <div className="bg-[#FEF6E9] hover:bg-golden-alt rounded-full items-center text-[#424242] md:text-lg gont-medium">
                      <button className="block py-2 px-6 md:py-3 md:px-8">
                        COMING SOON
                      </button>
                    </div>
                  </div>
                )}
                {(props.publish == true || props.publish == undefined) && (
                  <>
                    {props.bookingdata.active == true && (
                      <>
                        {props.bookingParty &&
                        props.gameslug == "axe-throwing" ? (
                          <div className="flex space-x-4">
                            <GameDtBtn
                              bookingdata={props.bookingdata}
                              label="BOOK GAME"
                              color="dark-gold"
                              weight="font-bold"
                            />
                            <GameDtBtn
                              bookingdata={props.bookingParty}
                              label="BOOK PARTY"
                              color="dark-gold"
                              weight="font-bold"
                            />
                          </div>
                        ) : (
                          <GameDtBtn
                            bookingdata={props.bookingdata}
                            label="I'VE READ ENOUGH! BOOK NOW"
                            color="dark-gold"
                            weight="font-bold"
                          />
                        )}
                      </>
                    )}
                    {props.bookingdata.active == false && (
                      <div className="inline-block bg-golden hover:bg-golden-alt search-loc hover:cursor-pointer hover:shadow boder-p rounded-full">
                        <div className="bg-[#FEF6E9] hover:bg-golden-alt rounded-full items-center text-[#424242] md:text-lg gont-medium">
                          <button className="block py-2 px-6 md:py-3 md:px-8">
                            COMING SOON
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="game-dt-col md:w-[49%] lg:w-[45%] order-1 mb-4 md:mb-0 md:order-2">
              <img src={props.activitydata.storyimg}></img>
            </div>
          </div>
        </div>
        {/*=========== game story=====*/}
        {/*=========== game scene=====*/}
        <div className="game-dt-container  plot-bg relative overflow-x-hidden md:overflow-visible">
          {props.activitydata.scene_bg && (
            <div className="pt-bg absolute top-[38%] right-[-20px] md:top-[-100px] lg:top-[-124px] xl:top-[-110px] 2xl:top-[-140px] 2xl:right-[0px] 4xl:right-[220px] 5xl:right-[330px]">
              <img
                className="w-[240px] md:w-[240px] lg:w-[280px] xl:w-[300px] 2xl:w-[400px] 4xl:w-[520px] 5xl:w-[550px]"
                src={props.activitydata.scene_bg}
              ></img>
            </div>
          )}

          <div className="game-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between  px-4 py-12 md:py-16 lg:py-20">
            <div className="game-dt-col md:w-[48%] lg:w-[45%]  mb-4 md:mb-0 ">
              <img src={props.activitydata.sceneimg}></img>
            </div>
            <div className="gme-dt-col md:w-[48%] lg:w-[45%] relative z-30">
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
                {props.publish == false && (
                  <div className="inline-block bg-golden hover:bg-golden-alt search-loc hover:cursor-pointer hover:shadow boder-p rounded-full">
                    <div className="bg-[#FEF6E9] hover:bg-golden-alt rounded-full items-center text-[#424242] md:text-lg gont-medium">
                      <button className="block py-2 px-6 md:py-3 md:px-8">
                        COMING SOON
                      </button>
                    </div>
                  </div>
                )}
                {(props.publish == true || props.publish == undefined) && (
                  <>
                    {props.bookingdata.active == true && (
                      <>
                        {props.bookingParty &&
                        props.gameslug == "axe-throwing" ? (
                          <div className="flex space-x-4">
                            <GameDtBtn
                              bookingdata={props.bookingdata}
                              label="BOOK GAME"
                              color="dark-gold"
                              weight="font-bold"
                            />
                            <GameDtBtn
                              bookingdata={props.bookingParty}
                              label="BOOK PARTY"
                              color="dark-gold"
                              weight="font-bold"
                            />
                          </div>
                        ) : (
                          <GameDtBtn
                            bookingdata={props.bookingdata}
                            label="DON'T GIVE IT AWAY! BOOK NOW"
                            color="dark-gold"
                            weight="font-bold"
                          />
                        )}
                      </>
                    )}
                    {props.bookingdata.active == false && (
                      <div className="inline-block bg-golden hover:bg-golden-alt search-loc hover:cursor-pointer hover:shadow boder-p rounded-full">
                        <div className="bg-[#FEF6E9] hover:bg-golden-alt rounded-full items-center text-[#424242] md:text-lg gont-medium">
                          <button className="block py-2 px-6 md:py-3 md:px-8">
                            COMING SOON
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*=========== game scene=====*/}
        {/*=========== game mission=====*/}
        <div className="game-dt-container mission-bg relative overflow-x-hidden md:overflow-visible">
          <div className="msn-bg-l absolute top-[40%] right-[-10px] hidden md:block md:left-0 md:top-[-160px] lg:top-[-120px] xl:top-[-140px] 2xl:top-0 4xl:left-[200px] 5xl:left-[300px] 4xl:top-[-160px]  z-20 w-[120px] md:w-[140px] lg:w-[170px] xl:w-[200px] xl:opacity-80 2xl:w-[280px] 2xl:opacity-90 4xl:w-[320px] 5xl:w-[380px]">
            <img
              className=" -scale-x-100 md:scale-x-100 w-[120px] md:w-[140px] lg:w-[170px] xl:w-[200px] xl:opacity-80 2xl:w-[280px] 2xl:opacity-90 4xl:w-[320px] 5xl:w-[380px] "
              src="/assets/svg/game-bg-pattern/direction.svg"
            ></img>
          </div>
          <div className="msn-bg-r absolute bottom-[36%] rotate-[-15deg]  right-[-80px] md:rotate-[-20deg]  md:bottom-[-80px] md:right-[0px] lg:bottom-[-120px] lg:right-[-10px] xl:bottom-[-130px] xl:right-[-10px] 2xl:bottom-[-180px] 2xl:right-[120px] 4xl:right-[300px] 4xl:bottom-[-240px] 5xl:right-[340px] z-20">
            <img
              className="w-[280px] md:w-[340px] lg:w-[360px] xl:w-[420px] xl:opacity-90 2xl:w-[500px] 2xl:opacity-100 4xl:w-[540px] 5xl:w-[620px]"
              src="/assets/svg/game-bg-pattern/settings.svg"
            ></img>
          </div>
          <div className="game-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 relative z-30">
            <div className="gme-dt-col order-2 md:order-1 md:w-[48%] lg:w-[45%] relative z-30">
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
                  color="golden-text"
                  weight="font-bold"
                ></GameTitleSeparator>
              </div>
              <div className="game-dt-desc mt-4 md:mt-4 lg:mt-6">
                <p className="text-[#464646] md:text-[18px] lg:text-[20px]">
                  {props.activitydata.mission}
                </p>
              </div>
              <div className="game-dt-link mt-4 md:mt-4 lg:mt-6">
                {props.publish == false && (
                  <div className="inline-block bg-golden hover:bg-golden-alt search-loc hover:cursor-pointer hover:shadow boder-p rounded-full">
                    <div className="bg-[#FEF6E9] hover:bg-golden-alt rounded-full items-center text-[#424242] md:text-lg gont-medium">
                      <button className="block py-2 px-6 md:py-3 md:px-8">
                        COMING SOON
                      </button>
                    </div>
                  </div>
                )}
                {(props.publish == true || props.publish == undefined) && (
                  <>
                    {props.bookingdata.active == true && (
                      <>
                        {props.bookingParty &&
                        props.gameslug == "axe-throwing" ? (
                          <div className="flex space-x-4">
                            <GameDtBtn
                              bookingdata={props.bookingdata}
                              label="BOOK GAME"
                              color="dark-gold"
                              weight="font-bold"
                            />
                            <GameDtBtn
                              bookingdata={props.bookingParty}
                              label="BOOK PARTY"
                              color="dark-gold"
                              weight="font-bold"
                            />
                          </div>
                        ) : (
                          <GameDtBtn
                            bookingdata={props.bookingdata}
                            label="LET ME AT EM! BOOK NOW"
                            color="dark-gold"
                            weight="font-bold"
                          />
                        )}
                      </>
                    )}
                    {props.bookingdata.active == false && (
                      <div className="inline-block bg-golden hover:bg-golden-alt search-loc hover:cursor-pointer hover:shadow boder-p rounded-full">
                        <div className="bg-[#FEF6E9] hover:bg-golden-alt rounded-full items-center text-[#424242] md:text-lg gont-medium">
                          <button className="block py-2 px-6 md:py-3 md:px-8">
                            COMING SOON
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
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

export default GameLocDetails;
