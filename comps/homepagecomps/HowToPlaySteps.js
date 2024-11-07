const HowToPlaySteps = () => {
  return (
    <div className="htb-steps  sm:max-w-[98%] md:max-w-[740px] lg:max-w-[840px] mx-auto ">
      <div className="flex  mb-10 md:mb-12 lg:mb-16">
        <div className="steps-1 w-[28%] md:w-[220px]  flex flex-col">
          <div className="htb-icon text-center w-[86%] mx-auto">
            <img
              className="w-[90px] mx-auto"
              alt="Team Assemble Icon."
              src="/assets/svg/assemble-team.svg"
            ></img>
          </div>
          <h3 className="golden-text text-3xl font-bold mt-2 text-center">1</h3>
          <p className="htb-text-x text-[8px] rm:text-[10px] lm:text-[12px] sm:text-[14px] lg:text-lg text-center text-gray-700 mt-2  font-medium">
            ASSEMBLE<br></br>YOUR TEAM
          </p>
        </div>
        <div className="lin  flex-grow flex flex-col">
          <div className="line-img w-full h-full relative">
            <div className="absolute top-[62%] lm:top-[60%] xm:top-[55%] md:top-[60%] lg:top-[57%] w-[200%] xm:w-[140%] md:w-[190px] lg:w-[240px] left-[-40%] xm:left-[-20%] md:left-[-72px] lg:left-[-78px]">
              <img
                className="hidden md:block"
                src="/assets/svg/htb-line-1.svg"
              ></img>
              <img
                className="w-full md:hidden"
                src="/assets/svg/step-line-mb.svg"
              ></img>
            </div>
          </div>
        </div>
        <div className="steps-2 w-[28%] md:w-[220px]   flex flex-col">
          <div className="htb-icon text-center w-[86%] mx-auto">
            <img
              className="w-[90px] mx-auto"
              alt="Choose escape Game from All In Adventures."
              src="/assets/svg/choose-game.svg"
            ></img>
          </div>
          <h3 className="golden-text text-3xl font-bold mt-2 text-center">2</h3>
          <p className="htb-text-x text-[8px] rm:text-[10px] lm:text-[12px] sm:text-[14px] lg:text-lg text-center text-gray-700 mt-2  font-medium">
            CHOOSE<br></br>YOUR GAME
          </p>
        </div>
        <div className="lin   flex-grow flex flex-col">
          <div className="line-img w-full h-full relative">
            <div className="absolute top-[62%] lm:top-[60%] xm:top-[55%] md:top-[60%] lg:top-[57%] w-[200%] xm:w-[140%] md:w-[190px] lg:w-[240px] left-[-40%] xm:left-[-20%] md:left-[-72px] lg:left-[-78px]">
              <img
                className="hidden md:block"
                src="/assets/svg/htb-line-1.svg"
              ></img>
              <img
                className="w-full md:hidden"
                src="/assets/svg/step-line-mb.svg"
              ></img>
            </div>
          </div>
        </div>
        <div className="steps-3 w-[28%] md:w-[220px] flex flex-col">
          <div className="htb-icon w-[86%] mx-auto">
            <img
              className="w-[90px] mx-auto"
              alt="Make your Escape from All In Adventures Escape Games"
              src="/assets/svg/make-escape.svg"
            ></img>
          </div>
          <h3 className="golden-text text-3xl font-bold mt-2 text-center">3</h3>
          <p className="htb-text-x text-[8px] rm:text-[10px] lm:text-[12px] sm:text-[14px] lg:text-lg text-center  text-gray-700 mt-2  font-medium">
            MAKE YOUR <br></br>ESCAPE
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToPlaySteps;
