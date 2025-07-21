import { mobileEscapeGameGridData } from "../../lib/tempData/mobileEscapeTempData";
import { useState, useEffect, useRef } from "react";
export default function MobileGameGrid() {
  return (
    <div className="mbl-escape-games   md:overflow-hidden md:h-auto max-w-[394px] md:max-w-[750px] lg:max-w-[1160px] px-3 rm:px-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-6 lg:gap-4 xl:gap-8 py-4">
        {mobileEscapeGameGridData.map((item, index) => {
          return (
            <div
              key={index}
              className="mbg-game-col g-shadow rounded-lg relative"
            >
              <div className="mbl-bg-img">
                <img
                  className="object-cover object-center rounded-lg "
                  src={item.bgImage.url}
                  alt={item.bgImage.alt}
                ></img>
              </div>
              <div className="price text-white absolute right-2 top-2 xl:right-4 bg-red-600 rounded">
                <div className="px-2 py-[.32rem] rm:px-2 rm:py-[.36rem] xl:py-[.44rem] flex space-x-1 items-end ">
                  <span className="text-[.8rem] rm:text-[.88rem] md:text-[.9rem] lg:text-sm xl:text-[1.08rem] font-semibold">
                    {item.price}
                  </span>
                  <span className="text-[.6rem] rm:text-[.7rem]">
                    (Per Persion)
                  </span>
                </div>
              </div>
              <div className="mbl-g-content-box w-full h-full absolute top-0 left-0">
                <div className="h-full flex flex-col justify-between">
                  <div className="mbl-card-g-top p-2 xl:p-3 xl:pt-2 max-w-[150px] rm:max-w-[162px] md:max-w-[180px] xl:max-w-[190px]">
                    <div className="flex items-center space-x-1 md:space-x-2 text-gray-50 bg-[#251A03E5] p-2 rounded">
                      <span>
                        <img
                          alt="Allinadventure mobile escape game carousel icon"
                          src="/assets/svg/inperson.svg"
                        ></img>
                      </span>
                      <span className="text-[.62rem] rm:text-[.7rem] md:text-[.8rem] lg:text-[.7rem]  xl:text-[.81rem]">
                        Mobile Escape Room
                      </span>
                    </div>
                  </div>
                  <div className="mbl-card-g-bottom px-4 pb-4 pt-8 card-bottom rounded-b-lg">
                    <div className="mbl-carg-info">
                      <div className=" flex space-x-3 text-gray-50 items-center">
                        <div className="flex space-x-1 items-center">
                          <img
                            alt="Allinadventure mobile escape game age range  icon"
                            src="/assets/svg/card-age.svg"
                          ></img>
                          <p className=" text-[.62rem] rm:text-[.8rem] lg:text-[.76rem] xl:text-[.8rem] ">
                            Age {item.ageRange}
                          </p>
                        </div>
                        <div className="flex space-x-1 items-center">
                          <img
                            alt="Allinadventure mobile escape room duration   icon"
                            src="/assets/svg/card-time.svg"
                          ></img>
                          <p className="text-[.62rem] rm:text-[.8rem] lg:text-[.76rem] xl:text-[.8rem] ">
                            Duration {item.duration} Min
                          </p>
                        </div>
                        <div className="flex space-x-1 items-center">
                          <img
                            alt="Allinadventure mobile escape room team size  icon"
                            src="/assets/svg/card-person.svg"
                          ></img>
                          <p className="text-[.62rem] rm:text-[.8rem] lg:text-[.76rem] xl:text-[.8rem] ">
                            Team Size {item.teamSize}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mbl-g-title mt-3 mb-2">
                      <h3 className="text-xl font-bold text-[#E0BF62]">
                        {item.gameTitle}
                      </h3>
                    </div>
                    <div
                      className="text-gray-200 text-[.9rem]"
                      dangerouslySetInnerHTML={{
                        __html: item.shortDescription,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
