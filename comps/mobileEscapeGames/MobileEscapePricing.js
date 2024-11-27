import TitleSeparator from "../util/TitleSeparator";
import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";

const MobileEscapePricing = ({ pricingSectionData, locationName }) => {
  return (
    <div className="mer-why-c bg-black py-16 md:py-20 lg:py-28 px-4 lg:px-12  z-20 ">
      {/*======================= boder img============== */}

      {/*======================= boder img end============== */}
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[840px] mx-auto">
          <MobileTitleSeparatorCenter title={pricingSectionData.sectionTitle} />
          <div
            className="mt-4 md:mt-6 text-[#e2e2e2] text-center lg:text-lg 3xl:text-xl"
            dangerouslySetInnerHTML={{
              __html: pricingSectionData.sectionSubTitle,
            }}
          ></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
          {pricingSectionData.pricingList.map((item, index) => {
            return (
              <div
                key={index}
                className="mer-pric-list-item bg-[#1D1D1D] rounded-[20px]"
              >
                <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-6 md:py-8 2xl:px-8 2xl:py-10">
                  <div className="mar-wv-text ">
                    <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[26px] 3xl:text-[28px] leading-[1.3] text-[#CA9342]">
                      {item.title}
                    </h3>
                    <p className="text-[#ffffff] mt-6 md:mt-8 3xl:mt-10 text-sm rm:text-base 3xl:text-lg font-semibold">
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
        <div className="mbl-h-btn  mt-10 md:mt-14 2xl:mt-16 flex justify-center">
          <a
            href="#mobile-escape-room-form"
            className="max-w-[340px] px-12 text-center border block text-white border-red-600 bg-red-600 py-[12px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
          >
            BOOK YOUR EVENT TODAY
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileEscapePricing;
