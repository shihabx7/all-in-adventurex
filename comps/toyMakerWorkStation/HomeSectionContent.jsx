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
    <div className="home-sec-content  max-w-[540px] lg:max-w-[600px] 2xl:max-w-[680px] mx-auto">
      {/* icon list element */}
      <div className="ico-list flex justify-between space-x-[4px]  md:space-x-2 items-center mb-[20px] lg:mb-[32px] 2xl:mb-[42px] px-2 md:px-0">
        {/* icon 1 */}
        <div className="icon-col flex space-x-1 md:space-x-2 items-center">
          <img
            className="h-[14px] lg:h-[21px]"
            src={"/assets/toymakers-workshop/home/age.png"}
            alt={"toymaker workshop age icon"}
          ></img>
          <p className="text-[11px]  md:text-base lg:text-lg text-[#D0C5C5]">
            Age: 6 and under{" "}
          </p>
        </div>
        {/* icon 2 */}
        <div className="icon-col flex space-x-1 md:space-x-2 items-center">
          <img
            className="h-[14px] lg:h-[21px]"
            src={"/assets/toymakers-workshop/home/duration.png"}
            alt={"toymaker workshop duration icon"}
          ></img>
          <p className="text-[11px]  md:text-base lg:text-lg text-[#D0C5C5] text-[#D0C5C5]">
            Duration: 1 Hour{" "}
          </p>
        </div>
        {/* icon 3 */}
        <div className="icon-col flex space-x-1 md:space-x-2 items-center">
          <img
            className="h-[14px] lg:h-[21px]"
            src={"/assets/toymakers-workshop/home/childs.png"}
            alt={"toymaker workshop childs icon"}
          ></img>
          <p className="text-[11px] md:text-base lg:text-lg text-[#D0C5C5] text-[#D0C5C5]">
            Each child receives toy{" "}
          </p>
        </div>
      </div>
      {/* text content element */}
      <div className="home-sec-text max-w-[560px] lg:max-w-[616px] mx-auto">
        <h4 className="text-[20px] rm:text-[23px] md:text-[30px] xl:text-[32px] font-bold text-[#FFB548] mb-[4px] text-[#e0bf62] text-center">
          TOYMAKER'S WORKSHOP
        </h4>
        <p className="text-sm md:text-base lg:text-lg text-center text-[#ffffff]">
          Step into a world of wonder at the Toymaker's Workshop, where endless
          activities spark learning, ignite fun, and keep our littlest
          adventurers happily engaged! All kids receive a toy to take home.
        </p>
      </div>
      {/* duel btn element */}
      <div className="duel-btn flex justify-center space-x-3 md:space-x-6 mt-[28px] lg:mt-[38px] 2xl:mt-[48px]">
        <button
          onClick={() => bookGame(bookingData)}
          className="border bt1 w-[148px] md:w-[200px]  border-red-600 bg-red-600 py-2 md:py-3 md:x-12 rounded-full font-bold text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-center text-white"
        >
          BOOK NOW
        </button>
        <a
          href={"/" + locationSlug + "/activities/toymakers-workshop"}
          className="border bt1 w-[148px] md:w-[200px]  border-red-600 bg-transparent py-2 md:py-3 md:px-12 rounded-full font-bold text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-center  text-red-600 hover:text-white"
        >
          EXPLORE
        </a>
      </div>
    </div>
  );
}
