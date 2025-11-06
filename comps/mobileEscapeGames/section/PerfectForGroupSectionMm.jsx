/* eslint-disable @next/next/no-img-element */
export default function PerfectForGroupSectionMm({
  sectionData,
  locationName,
}) {
  return (
    <div className="mm-section bg-[#231800] py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-28  relative ">
      <div className="max-w-[1180px] 2xl:max-w-[1200px] 3xl:max-w-[1248px] mx-auto  px-3 rm:px-4 xl:px-0  z-20 ">
        {/*============================================================Section title============== */}
        <div className="section-head mb-6 rm:mb-8 md:mb-10 lg:mb-12  ">
          <div className="max-w-[364px] md:max-w-full mx-auto">
            <h2 className="text-[#CA9342] pb-2 pt-0 md:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-os font-bold uppercase text-center">
              PERFECT FOR ANY GROUP, ANY OCCASION
            </h2>
          </div>

          <div className="text-gray-200 mt-1 md:mt-2 lg:mt-2  text-center md:text-lg lg:text-xl max-w-[900px] xl:max-w-[1080px] mx-auto">
            <p>
              Our Mobile Mystery experience is designed to bring excitement to
              all kinds of events—big or small. Whether you&apos;re planning a
              school activity, company outing, or community celebration, we
              deliver unforgettable fun right to your location.
            </p>
          </div>
        </div>
        {/*===========================================================3 box grid============== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2 lg:gap-3 xl:gap-5 mb-6 rm:mb-8 md:mb-10 lg:mb-16">
          {/*=======================ite 1============== */}
          <div className="mer-pric-list-item bg-[#FAECCA] rounded-[20px]">
            <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-3 md:py-6 lg:px-5 lg:py-7 xl:px-5 2xl:px-6 2xl:py-8">
              <div className="mar-wv-text ">
                <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[22px] lg:text-[1.4rem] xl:text-[1.55rem]  3xl:text-[1.7rem] leading-[1.3] text-[#CA9342]">
                  PRICING
                </h3>
                <p className="text-[#2e2e2e] mt-4 md:mt-2 lg:mt-3 3xl:mt-4 text-sm rm:text-[.9rem] md:text-[.75rem] lg:text-[.84rem]  xl:text-base 3xl:text-lg font-semibold leading-1 ">
                  $19.99 per person (20-person minimum)
                </p>
                <p className="text-[#2E2E2E] mt-1 rm:mt-2  text-[.9rem] rm:text-[1rem] md:text-[.9rem] xl:text-[1.06rem]">
                  Kick off the fun at just $19.99 per person with a 20-player
                  minimum. Want more adventure? Add a second round with a
                  different game for only $9.99 per person—that's 50% off!
                </p>
              </div>
            </div>
          </div>
          {/*=======================ite 2============== */}
          <div className="mer-pric-list-item bg-[#FAECCA] rounded-[20px]">
            <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-3 md:py-6 lg:px-5 lg:py-7 xl:px-5 2xl:px-6 2xl:py-8">
              <div className="mar-wv-text ">
                <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[22px] lg:text-[1.4rem] xl:text-[1.55rem]  3xl:text-[1.7rem] leading-[1.3] text-[#CA9342]">
                  AVAILABILITY
                </h3>
                <p className="text-[#2e2e2e]  mt-4 md:mt-2 lg:mt-3 text-sm rm:text-[.9rem] md:text-[.75rem] lg:text-[.84rem] xl:text-base 3xl:text-lg font-semibold leading-1 ">
                  Service within 25 miles
                </p>
                <p className="text-[#2E2E2E] mt-1 rm:mt-2  text-[.9rem] rm:text-[1rem] md:text-[.9rem] xl:text-[1.07rem]">
                  {locationName
                    ? "Escape the travel costs! We travel free of charge to locations within 25 miles of the city center. Outside that range? No problem—reach out, and we'll do our best to make it work!"
                    : "Escape the travel costs! We travel free of charge to locations within 25 miles of the city center. Outside that range? No problem—reach out, and we'll do our best to make it work!"}
                </p>
              </div>
            </div>
          </div>
          {/*=======================ite 3============== */}
          <div className="mer-pric-list-item bg-[#FAECCA] rounded-[20px]">
            <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-3 md:py-6 lg:px-5 lg:py-7 xl:px-5 2xl:px-6 2xl:py-8">
              <div className="mar-wv-text ">
                <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[22px] lg:text-[1.4rem] xl:text-[1.55rem]  3xl:text-[1.7rem] leading-[1.3] text-[#CA9342]">
                  GROUP SIZE
                </h3>
                <p className="text-[#2e2e2e] mt-4 md:mt-2 lg:mt-3 text-sm rm:text-[.9rem] md:text-[.75rem] lg:text-[.84rem]  xl:text-base 3xl:text-lg font-semibold leading-1 ">
                  Accommodates 20 to 60 people per hour
                </p>
                <p className="text-[#2E2E2E] mt-1 rm:mt-2  text-[.9rem] rm:text-[1rem] md:text-[.9rem] xl:text-[1.07rem]">
                  We can host 20 to 60 players per hour across 6 thrilling
                  games, each lasting 60 minutes. Bigger crowd or special timing
                  needs? We'll customize the experience to fit your event!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="iconlist-box">
        <div className="mbl-per-opt   3xl:max-w-[1568px] mx-auto px-3 rm:px-4 lg:px-3 xl:px-4 relative rounded-lg">
          <div className="flex flex-col zm:flex-row space-y-4 zm:space-y-3 zm:space-x-0 md:space-y-3 md:space-x-2 xl:space-y-0 xl:space-x-1  2xl:space-x-2 zm:justify-between md:justify-center zm:items-center flex-wrap xl:flex-nowrap">
            {sectionData.dataList.map((item, index) => {
              return (
                <div
                  className="per-col bg-[#2F2102] w-[96%] zm:w-[47%] md:w-[32%] xl:w-[19.9%] 2xl:w-[19.6%] 3xl:w-[19%] pl-1  rounded-lg"
                  key={index}
                >
                  <div className="per-col-wrapper flex flex-nowrap items-center space-x-2 rm:space-x-3">
                    <div className="per-icon-box h-[60px] w-[60px] 3xl:h-[64px] 3xl:w-[64px] bg-[#CA9342] flex items-center justify-center rounded-lg">
                      <img
                        className="max-w-[27px] 3xl:max-w-[32px]"
                        src={item.icon.url}
                        alt={item.icon.alt}
                      ></img>
                    </div>
                    <p className="text-[1rem]  md:text-[.9rem] 2xl:text-[1rem] 3xl:text-[1.07rem] text-[#ffffff] font-regular">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*===========================================================Star notice============== */}
      <div className="notice flex  justify-center lg:items-center space-x-2 mt-8 md:mt-12 px-3 rm:px-4 md:px-6">
        <div className="star-icon">
          <img
            className="max-w-[11px] md:max-w-[13px] mt-1 lg:mt-0"
            src="/assets/mobile-escape-room/perfectFor/star.svg"
            alt="star-con"
          ></img>
        </div>
        <p className="text-[.9rem] md:text-base lg:text-lg text-[#6b6b6b] font-thin italic ">
          Please note: We do not offer residential bookings. The event location
          must be a commercial or institutional address.
        </p>
      </div>
      {/*===========================================================Star notice============== */}
    </div>
  );
}
