export default function HomeSectionContent({ bookingData, locationSlug }) {
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
    <div className="home-sec-content max-w-[320px] rm:max-w-[360px] xm:max-w-[424px] md:max-w-[580px] lg:max-w-[600px] 2xl:max-w-[680px] mx-auto px-2 zm:px-0">
      {/* icon list element */}
      <div className="ico-list flex flex-wrap justify-center zm:justify-between space-x-2 zm:space-x-[6px]  md:space-x-2 items-center mb-[16px] lg:mb-[32px] 2xl:mb-[42px] px-2 md:px-0">
        {/* icon 1 */}
        <div className="icon-col w-[48%] xm:w-auto flex space-x-1 md:space-x-2 items-center my-1 zm:my-0">
          <img
            className="h-[14px] rm:h-[16px] lg:h-[21px]"
            src={"/assets/toymakers-workshop/storyline/age.svg"}
            alt={"toymaker workshop age icon"}
          ></img>
          <p className="text-sm xm:text-[12px] md:text-base lg:text-lg text-[#D0C5C5]">
            Age: 6 and under
          </p>
        </div>
        {/* icon 2 */}
        <div className="icon-col w-[48%] xm:w-auto flex space-x-1 md:space-x-2 items-center my-1 zm:my-0">
          <img
            className="h-[14px] rm:h-[16px] lg:h-[21px]"
            src={"/assets/toymakers-workshop/storyline/duration.svg"}
            alt={"toymaker workshop duration icon"}
          ></img>
          <p className="text-sm xm:text-[12px] md:text-base lg:text-lg text-[#D0C5C5] ">
            Duration: 1 Hour
          </p>
        </div>
        {/* icon 3 */}
        <div className="icon-col w-[60%] xm:w-auto flex space-x-1 md:space-x-2 items-center my-1 zm:my-0">
          <img
            className="h-[14px] rm:h-[16px] lg:h-[21px]"
            src={"/assets/toymakers-workshop/storyline/free-toy.svg"}
            alt={"toymaker workshop childs icon"}
          ></img>
          <p className="text-sm xm:text-[12px] md:text-base lg:text-lg text-[#D0C5C5] ">
            Toy: Game Prize Included
          </p>
        </div>
      </div>
      {/* text content element */}
      <div className="home-sec-text max-w-[560px] lg:max-w-[616px] mx-auto">
        <h4 className="text-[20px] rm:text-[23px] md:text-[30px] xl:text-[32px] font-bold text-[#FFB548] mb-[4px] text-center">
          TOYMAKER'S WORKSHOP
        </h4>
        <p className="text-sm md:text-base lg:text-lg text-center text-[#ffffff]">
          Step into a world of fun at the Toymaker's Workshop! This special game
          replaces complex locks with hands-on, confidence-building puzzles.
          It's a completely <strong>stress-free</strong> experience where kids learn to search
          for clues and solve simple mysteries and EVERY child receives a
          well-deserved toy to take home!
        </p>
      </div>
      {/* duel btn element */}
      <div className="duel-btn flex justify-center space-x-3 md:space-x-6 mt-[26px] xm:mt-[22px] md:mt-[28px] lg:mt-[38px] 2xl:mt-[48px]">
        <button
          onClick={() => bookGame(bookingData)}
          className="border bt1 w-[148px] md:w-[200px]  border-red-600 bg-red-600 py-2 md:py-3 md:x-12 rounded-full font-bold md:text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-center text-white"
        >
          BOOK NOW
        </button>
        <a
          href={"/" + locationSlug + "/activities/toymakers-workshop"}
          className="border bt1 w-[148px] md:w-[200px]  border-red-600 bg-transparent py-2 md:py-3 md:px-12 rounded-full font-bold md:text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-center  text-red-600 hover:text-white"
        >
          EXPLORE
        </a>
      </div>
    </div>
  );
}
