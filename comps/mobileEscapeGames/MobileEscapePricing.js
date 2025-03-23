
import SectionBorderBottom from "../util/SectionBorderBottom";

const MobileEscapePricing = ({ pricingSectionData, locationName }) => {
  return (
    <div className="bg-black">
      <div className="py-14 md:py-12 lg:py-18 bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] relative">
        <SectionBorderBottom />
      </div>
      <div className="max-w-7xl mx-auto mt-[-110px] rm:mt-[-100px] md:mt-[-100px]  lg:mt-[-114px] xl:mt-[-104px] 3xl:mt-[-124px]  relative z-30 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xl:gap-6">
          {pricingSectionData.pricingList.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index > 2
                    ? "hidden"
                    : "mer-pric-list-item bg-[#231800] rounded-[20px]"
                }
              >
                <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-4 md:py-6 lg:px-6 lg:py-8 2xl:px-8 2xl:py-10">
                  <div className="mar-wv-text ">
                    <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[22px] lg:text-[26px] 3xl:text-[28px] leading-[1.3] text-[#CA9342]">
                      {item.title}
                    </h3>
                    <p className="text-[#ffffff] mt-6 md:mt-4 lg:mt-6 3xl:mt-8 text-sm rm:text-base 3xl:text-lg font-semibold">
                      {item.subTitle}{" "}
                      {item.subTitleNote !== null ? (
                        <span className="text-[#a5a5a5] font-medium">
                          {item.subTitleNote}
                        </span>
                      ) : (
                        ""
                      )}
                    </p>
                    <p className="text-[#a5a5a5] mt-1 rm:mt-2  text-sm rm:text-base 3xl:text-lg">
                      {item.infoCardText !== null ? item.infoCardText : ""}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/*=======================Section btn============== */}
      </div>
    </div>
  );
};

export default MobileEscapePricing;
