import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";

const WhyChooseMobileEscape = ({ offerSectionData, locationName }) => {
  const gridBorderClassesList = [
    {
      id: 1,
      borderClasses:
        "border-[1px] border-[#000000] border-b-[#222222] md:border-r-[#222222] lg:border-r-[#000000]",
      paddingClasses: "pt-4 rm:pt-5 lg:pt-2 pb-6 md:pb-8 lg:pb-12",
    },
    {
      id: 2,
      borderClasses:
        "border-[1px] border-[#000000] border-b-[#222222] lg:border-x-[#222222]",
      paddingClasses: "pt-4 rm:pt-5 lg:pt-2 pb-6 md:pb-8 lg:pb-12",
    },
    {
      id: 3,
      borderClasses:
        "border-[1px] border-[#000000] border-b-[#222222] md:border-r-[#222222] lg:border-r-[#000000]",
      paddingClasses: "pt-4 rm:pt-5 lg:pt-2 pb-6 md:pb-8 lg:pb-12",
    },
    {
      id: 4,
      borderClasses:
        "mer-wc-list-item border border-[#000000] border-b-[#222222]  lg:border-b-[#000000] pt-0",
      paddingClasses: "pt-4 rm:pt-5 lg:pt-12 pb-6 md:pb-2",
    },
    {
      id: 5,
      borderClasses:
        "border-[1px] border-[#000000] border-b-[#222222] md:border-b-[#000000] md:border-r-[#222222] lg:border-x-[#222222]",
      paddingClasses: "pt-4 rm:pt-5 lg:pt-12 pb-6 md:pb-2",
    },
    {
      id: 6,
      borderClasses: "border-none",
      paddingClasses: "pt-4 rm:pt-5 lg:pt-12 pb-6 md:pb-2",
    },
  ];
  const getBoderClassess = (index) => {
    return gridBorderClassesList[index].borderClasses;
  };
  const getPaddingClassess = (index) => {
    return gridBorderClassesList[index].paddingClasses;
  };
  return (
    <div className="mer-why-c bg-black py-16 md:py-20 lg:py-28 px-4 lg:px-12  z-20 ">
      {/*======================= boder img============== */}

      {/*======================= boder img end============== */}
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[840px] mx-auto">
          <MobileTitleSeparatorCenter title={offerSectionData.sectionTitle} />
          <div
            className=" text-[#e2e2e2]  mt-3 md:mt-4 lg:mt-6  text-center  md:text-lg lg:text-xl"
            dangerouslySetInnerHTML={{
              __html: offerSectionData.sectionSubTitle,
            }}
          ></div>
        </div>
        {offerSectionData.offerList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {offerSectionData.offerList.map((item, index) => {
              return (
                <div
                  key={index}
                  className={"mer-wc-list-item " + getBoderClassess(index)}
                >
                  <div
                    className={
                      "item-wrapper px-3 rm:px-4 sm:px-6 md:px-8 lg:px-12 " +
                      getPaddingClassess(index)
                    }
                  >
                    <div className="mer-wc-img img-1">
                      <img
                        className="mer-wc-icon 3xl:w-[42px]"
                        alt={
                          item.icon.alt
                            ? item.icon.alt
                            : "Allinadventures offer icon" + index
                        }
                        src={
                          item.icon.hasImage
                            ? item.icon.url
                            : "/assets/mobile-escape-room/icon/convenient-mobile-experience.svg"
                        }
                      ></img>
                    </div>
                    <div className="mar-wv-text ">
                      <h3 className=" mt-5 3xl:mt-6 font-bold text-[20px] sm:text-[21px] md:text-[22px] 3xl:text-[24px] leading-[1.3] text-[#CA9342]">
                        {item.offerTitle}
                      </h3>
                      <div
                        className="text-[#afafaf] mt-3 3xl:mt-4  text-sm 3xl:text-base"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}

        {/*=======================Section btn============== */}
        <div className="mbl-h-btn  mt-10 md:mt-14 2xl:mt-16 flex justify-center">
          <a
            href="#mobile-escape-room-form"
            className="max-w-[220px] px-12 text-center border block text-white border-red-600 bg-red-600 py-[12px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMobileEscape;
