const HeroInfoCard = ({ locationName }) => {
  return (
    <div className="bg-[#251A03]">
      <div className="max-w-7xl mx-auto mt-[-12px] rm:mt-[-26px] md:mt-[-100px]  lg:mt-[-110px] xl:mt-[-106px] 2xl:mt-[-112px]  relative z-30 px-4 md:px-3 xl:px-4 2xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2 lg:gap-3 xl:gap-6">
          {/*=======================ite 1============== */}
          <div className="mer-pric-list-item bg-[#FFF9EB] rounded-[20px]">
            <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-3 md:py-6 lg:px-5 lg:py-7 xl:px-6 2xl:px-6 2xl:py-8">
              <div className="mar-wv-text ">
                <p className="text-[#2e2e2e] text-sm xl:text-[1rem] 2xl:text-[1.06rem] font-medium [word-spacing:0.2rem] mb-1 2xl:mb-2">
                  MOBILE ESCAPE ROOM
                </p>
                <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[22px] lg:text-[1.4rem] xl:text-[1.55rem]  3xl:text-[1.7rem] leading-[1.3] text-[#CA9342]">
                  PRICING
                </h3>
                <p className="text-[#2e2e2e] mt-4 md:mt-3 lg:mt-4 3xl:mt-5 text-sm rm:text-[16px] md:text-[14px] lg:text-[15px]  xl:text-base 3xl:text-lg font-semibold leading-1 ">
                  $19.99 per person (20-person minimum)
                </p>
                <p className="text-[#2E2E2E] mt-1 rm:mt-2  text-sm rm:text-base md:text-[15px] xl:text-lg">
                  Kick off the fun at just $19.99 per person with a 20-player
                  minimum. Want more adventure? Add a second round with a
                  different game for only $9.99 per person—that's 50% off!
                </p>
              </div>
            </div>
          </div>
          {/*=======================ite 2============== */}
          <div className="mer-pric-list-item bg-[#FFF9EB] rounded-[20px]">
            <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-3 md:py-6 lg:px-5 lg:py-7 xl:px-6 2xl:px-6 2xl:py-8">
              <div className="mar-wv-text ">
                <p className="text-[#2e2e2e] text-sm xl:text-[1rem] 2xl:text-[1.06rem] font-medium [word-spacing:0.2rem] mb-1 2xl:mb-2">
                  MOBILE ESCAPE ROOM
                </p>
                <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[22px] lg:text-[1.4rem] xl:text-[1.55rem]  3xl:text-[1.7rem] leading-[1.3] text-[#CA9342]">
                  AVAILABILITY
                </h3>
                <p className="text-[#2e2e2e] mt-4 md:mt-3 lg:mt-4 3xl:mt-5 text-sm rm:text-[16px] md:text-[14px] lg:text-[15px]  xl:text-base 3xl:text-lg font-semibold leading-1 ">
                  Service within 25 miles
                </p>
                <p className="text-[#2E2E2E] mt-1 rm:mt-2  text-sm rm:text-base md:text-[15px] xl:text-lg">
                  {locationName
                    ? "Escape the travel costs! We travel free of charge to locations within 25 miles of the city center. Outside that range? No problem—reach out, and we'll do our best to make it work!"
                    : "Escape the travel costs! We travel free of charge to locations within 25 miles of the city center. Outside that range? No problem—reach out, and we'll do our best to make it work!"}
                </p>
              </div>
            </div>
          </div>
          {/*=======================ite 3============== */}
          <div className="mer-pric-list-item bg-[#FFF9EB] rounded-[20px]">
            <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-3 md:py-6 lg:px-5 lg:py-7 xl:px-6 2xl:px-6 2xl:py-8">
              <div className="mar-wv-text ">
                <p className="text-[#2e2e2e] text-sm xl:text-[1rem] 2xl:text-[1.06rem] font-medium [word-spacing:0.2rem] mb-1 2xl:mb-2">
                  MOBILE ESCAPE ROOM
                </p>
                <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[22px] lg:text-[1.4rem] xl:text-[1.55rem]  3xl:text-[1.7rem] leading-[1.3] text-[#CA9342]">
                  GROUP SIZE
                </h3>
                <p className="text-[#2e2e2e] mt-4 md:mt-3 lg:mt-4 3xl:mt-5 text-sm rm:text-[16px] md:text-[14px] lg:text-[15px]  xl:text-base 3xl:text-lg font-semibold leading-1 ">
                  Accommodates 20 to 60 people per hour
                </p>
                <p className="text-[#2E2E2E] mt-1 rm:mt-2  text-sm rm:text-base md:text-[15px] xl:text-lg">
                  We can host 20 to 60 players per hour across 6 thrilling
                  games, each lasting 60 minutes. Bigger crowd or special timing
                  needs? We'll customize the experience to fit your event!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*=======================Section btn============== */}
      </div>
    </div>
  );
};

export default HeroInfoCard;
