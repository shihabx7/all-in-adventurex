import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";

const partyFormBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: "no",
    view: { item: bookingData.itemNo },
  });
};
const showMobileEscapeBookingMenu = () => {
  const body = document.getElementsByTagName("body")[0];
  body.classList.add("overflow-hidden");
  setGoMobileEecapeForm(true);
  setShowMobileEecapeMenu(true);
};
const PerfectForGroupSection = ({ sectionData }) => {
  return (
    <div className="mer-games-slider bg-[#231800]   relative ">
      <div className="max-w-[1080px] mx-auto py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-28 px-4 md:px-6  z-20 ">
        <div className="section-head mb-6 rm:mb-8 md:mb-10 lg:mb-12  ">
          <div className="max-w-[364px] md:max-w-full mx-auto">
            <MobileTitleSeparatorCenter
              title={
                sectionData.sectionTitle
                  ? sectionData.sectionTitle
                  : "Perfect For Any Group, Any Occasion"
              }
              textColor={"#E0BF62"}
            />
          </div>

          <div
            className="text-gray-200 mt-1 md:mt-2 lg:mt-2  text-center md:text-lg lg:text-xl max-w-[800px] mx-auto"
            dangerouslySetInnerHTML={{
              __html: sectionData.sectionSubTitle,
            }}
          ></div>
        </div>
        <div className="mbl-per-opt relative">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-y-7 gap-x-0 md:gap-x-8 md:gap-y-8 lg:gap-x-10  xl:gap-x-16">
            {sectionData.dataList.map((item, index) => {
              return (
                <div className="per-col" key={index}>
                  <div className="per-col-wrapper relative w-full h-full ">
                    <div className="per-icon-box h-[68px] w-[68px] bg-[#CA9342] flex items-center justify-center absolute top-0 left-0 bottom-0 m-auto rounded-lg">
                      <img
                        className="max-w-[36px]"
                        src={item.icon.url}
                        alt={item.icon.alt}
                      ></img>
                    </div>
                    <div className="per-content flex justify-end h-full items-center">
                      <div className="bg-[#2F2102] py-4 pr-3 pl-12 h-full rounded-lg w-[90%] lg:w-[92%]">
                        <h3 className="text-[1.1rem] xl:text-[1.3rem] text-[#ffffff]">
                          {item.title}
                        </h3>
                        <p className="text-[#dadada] mt-1 text-[0.94rem] xl:text-[1.02rem]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="notice flex lg:items-center space-x-3 mt-16">
          <div>
            <img
              className="max-w-[24px] mt-2 lg:mt-0"
              src="/assets/mobile-escape-room/perfectFor/star.svg"
              alt="star-con"
            ></img>
          </div>
          <p className="text-lg text-[#7B7B7B] font-thin italic ">
            Please note: We do not offer residential bookings. The event
            location must be a commercial or institutional address.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PerfectForGroupSection;
