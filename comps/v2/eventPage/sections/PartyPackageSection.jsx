import { BsCheckCircle } from "react-icons/bs";
export default function PartyPackageSection({ sectionData }) {
  const showLocation = (e) => {
    e.preventDefault();
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };
  const bookPartyPackage = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };
  return (
    <div id="eventbooking" className="party-package-section ">
      <div className="section-container zm:max-w-[480px] md:max-w-[780px] lg:max-w-[970px]  xl:max-w-[1200px] 2xl:max-w-[1240px]  px-4 zm:px-8 md:px-4 lg:px-0  mx-auto">
        <div className="section-head text-center max-w-[830px] mx-auto px-4 md:px-8 lg:px-0 ">
          <h2 className="text-[#ca9342] uppercase font-bold text-center text-[28px] rm:text-[30px] zm:text-[33px] leading-[1.2] sm:text-4xl lg:text-5xl font-os outline-tile">
            {sectionData.sectionTitle
              ? sectionData.sectionTitle
              : "ESCAPE ROOM PARTY packages"}
          </h2>

          <div
            className="text-[#374151] sm:text-lg xl:text-xl text-center mt-3 xl:mt-4"
            dangerouslySetInnerHTML={{ __html: sectionData.sectionSubTitle }}
          ></div>
        </div>
        {/* =====================party package card list================*/}
        <div className="party-package-list  flex flex-col lg:flex-row space-y-6 md:space-y-6 lg:space-y-0  lg:space-x-4 xl:space-x-6 justify-center items-center mt-8 xl:mt-12">
          {sectionData.partyPackageList.map((item, index) => {
            return (
              <div
                key={index}
                className="party-package-card  flex flex-col md:max-w-[500px]"
              >
                <div className="bg-[#D4B56A] px-3 py-1 max-w-[100px]">
                  <p className="font-medium text-sm text-gray-900 text-center">
                    Option {index + 1}
                  </p>
                </div>
                {/* =====================party package card image================*/}
                <div className="bg-[#FBF2DC] border border-[#D2C6AA]">
                  <div className="card-img w-full">
                    <img
                      className="lg:max-w-[320px] xl:max-w-[400px] object-cover"
                      alt={item.packageImage.alt}
                      src={item.packageImage.url}
                    ></img>
                  </div>
                  {/* =====================party package card content================*/}
                  <div className="card-content grow flex flex-col justify-between space-y-4 zm:space-y-5 p-3 py-6 rm:px-4 rm:py-6 zm:p-5 pt-3 md:p-8 md:pt-5 lg:p-6 lg:pt-5">
                    <div className="card-text">
                      <h3 className="text-[1.4rem] md:text-[1.5rem] lg:text-[1.3rem]  xl:text-[1.5rem]  leading-[1.25] text-[#212121] font-bold text-center md:text-left lg:text-center uppercase">
                        {item.packageName}
                      </h3>
                      <h3 className="text-[1.4rem] md:text-[1.5rem] lg:text-[1.3rem]  xl:text-[1.5rem]  leading-[1.25] text-[#212121] font-bold text-center md:text-left lg:text-center uppercase">
                        PARTY PACKAGE
                      </h3>
                      <div className="pp-include mt-3 xl:mt-3">
                        <p className="text-[#727272] text-[18px] md:text-[20px] font-semibold">
                          What's Included:
                        </p>
                        {item.packageIncluds.map((point, index) => {
                          return (
                            <div
                              key={index}
                              className="pp-inc-item flex space-x-2 my-2 md:space-x-3 md:my-3 "
                            >
                              <div className="text-[#232323] text-[17px] xl:text-[19px] leading-[1.4] mt-[3px]">
                                <BsCheckCircle />
                              </div>
                              <p className="text-[#232323] text-[16px] xl:text-[17px] leading-[1.4] grow">
                                {point.text}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="card-button">
                      {item.partyPackageBookingInfo && (
                        <button
                          onClick={() => {
                            bookPartyPackage(item.partyPackageBookingInfo);
                          }}
                          className="block w-full rounded-full text-[18px] font-semibold leading-[1] py-4 px-8 txt-center text-white bg-red-600 hover:bg-red-700 transition duration-400 ease-in-out"
                        >
                          BOOK NOW
                        </button>
                      )}
                      {!item.partyPackageBookingInfo && (
                        <button
                          onClick={(e) => showLocation(e)}
                          className="block w-full rounded-full text-[18px] font-semibold leading-[1] py-4 px-8 txt-center text-white bg-red-600 hover:bg-red-700 transition duration-400 ease-in-out"
                        >
                          BOOK NOW
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
