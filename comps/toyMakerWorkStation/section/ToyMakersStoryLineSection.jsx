import SectionTitleDark from "../../common/SectionTitleDark";

export default function ToyMakersStoryLineSection({ gameInfo, bookingData }) {
  const bookGame = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };

  return (
    <div className="game-story-line-section egs-section relative z-[20] mt-[-40px] xm:mt-[-46px] lg:mt-[-30px]">
      {/*=======================================Game section bg*/}

      <div className="egs-section-bg absolute w-full h-full top-0 left-0">
        <img
          className="w-full h-full object-cover object-center md:object-center"
          alt={"toymaker workshop storyline"}
          src={
            "/assets/toymakers-workshop/storyline/toymakers-workshop-bgn.png"
          }
        ></img>
      </div>

      <div className="egs-content py-16  md:py-20 lg:py-24 xl:pt-32 xl:pb-28 px-4 relative z-[20] ">
        <div className="zm:max-w-[580px] md:max-w-[700px] lg:max-w-[980px] xl:max-w-[1200px] mx-auto">
          <div className="section-con flex flex-col lg:flex-row lg:justify-between items-center space-y-6 lg:space-y-0 lg:space-x-4  2xl:space-x-7">
            <div className="egs-col md:max-w-[700px] lg:max-w-[520px] xl:max-w-[580px]  order-2 lg:order-1">
              <div className="section-title mt-5 md:mt-0 mb-2 md:mb-6 lg:mb-8">
                <SectionTitleDark title={"THE STORYLINE"} />
              </div>
              <div className="story-card  md:p-1">
                {/*=======================================Game info*/}
                <div className="egs-info-row flex justify-between  items-center mt-[6px] lg:mt-1 2xl:mt-2 flex-wrap">
                  {/*==================================================col 1*/}
                  <div className="item-col flex w-[55%] md:w-[48%]  mt-1 items-center space-x-1 md:space-x-2">
                    <img
                      className="max-h-[18px] rm:max-h-[22px] md:max-h-[36px] lg:max-h-[40px] 2xl:max-h-[46px]"
                      src={"/assets/toymakers-workshop/storyline/age.svg"}
                    ></img>
                    <p className="text-[#2e2e2e] text-[12px] rm:text-[14px] md:text-[17px] xl:text-[18px]">
                      Age: 6 and under
                    </p>
                  </div>
                  {/*==================================================col 2*/}
                  <div className="item-col flex w-[42%] md:w-[48%] mt-1  items-center space-x-1 md:space-x-2">
                    <img
                      className="max-h-[18px] rm:max-h-[22px] md:max-h-[36px] lg:max-h-[40px] 2xl:max-h-[46px]"
                      src={"/assets/toymakers-workshop/storyline/duration.svg"}
                    ></img>
                    <p className="text-[#2e2e2e] text-[12px] rm:text-[14px] md:text-[17px] xl:text-[18px]">
                      Duration: 1 Hour
                    </p>
                  </div>
                  {/*==================================================col 3*/}
                  <div className="item-col flex w-[55%] md:w-[48%] mt-2  items-center space-x-1 md:space-x-2">
                    <img
                      className="max-h-[18px] rm:max-h-[22px] md:max-h-[36px] lg:max-h-[40px] 2xl:max-h-[46px]"
                      src={"/assets/toymakers-workshop/storyline/free-toy.svg"}
                    ></img>
                    <p className="text-[#2e2e2e] text-[12px] rm:text-[14px] md:text-[17px] xl:text-[18px]">
                      Toy: Game Prize Included
                    </p>
                  </div>
                  {/*==================================================col 4*/}
                  <div className="item-col flex w-[42%] md:w-[48%] mt-2 items-center space-x-1 md::space-x-2">
                    <img
                      className="max-h-[18px] rm:max-h-[22px] md:max-h-[36px] lg:max-h-[40px] 2xl:max-h-[46px]"
                      src={
                        "/assets/toymakers-workshop/storyline/adults-required.svg"
                      }
                    ></img>
                    <p className="text-[#2e2e2e] text-[12px] rm:text-[14px] md:text-[17px] xl:text-[18px]">
                      Adults: Adults Required
                    </p>
                  </div>
                </div>
                {/*=======================================Game tag*/}

                {/*=========================================game short decription====*/}
                <div className="egl-shot-desc mt-4 md:mt-7 lg:mt-5 xl:mt-5 2xl:mt-6">
                  <h4 className="text-[20px] rm:text-[22px] md:text-[24px] lg:text-[28px] font-medium text-[#ca9342] mb-2">
                    {gameInfo.storyLineTitle}
                  </h4>
                  <div
                    className="text-[#2e2e2e] text-sm rm:text-base xl:text-lg flex flex-col space-y-2 md:space-y-4"
                    
                  >
                    <p><span className="font-bold">Help the Toymaker finish his work before time runs out!</span> This experience is designed as the perfect 'training ground' for future escape room enthusiasts. We've removed the frustration of complex locks and passcodes, replacing them with interactive props and sensory clues.</p>
                      <p>Parents can help guide children through the story, or let their little detectives explore at their own pace. With no wrong answers, EVERY child completes the story successfully and receives a special toy from the Toymaker to take home as a reward for their hard work!</p>
                  </div>
                </div>
                {/*=========================================game button===*/}
                <div className="egl-btn-pair mt-6 mb-[8px] md:mt-7 xl:mt-8 xl:mb-2">
                  <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 ">
                    <button
                      onClick={() => bookGame(bookingData)}
                      className="border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700  md:text-lg text-white px-10 md:px-12  xl:px-12 py-3 md:py-4 text-center font-bold "
                    >
                      BOOK THIS GAME
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-img max-w-[] grow md:max-w-[500px] lg:max-w-none mx-auto order-1 lg:order-2">
              <img
                className=""
                alt={
                  gameInfo.storyLineImage.alt
                    ? gameInfo.storyLineImage.alt
                    : "toymaker workshop storyline"
                }
                src={
                  gameInfo.storyLineImage
                    ? gameInfo.storyLineImage.url
                    : "/assets/toymakers-workshop/storyline/toymakers-workshop-storyline.png"
                }
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
