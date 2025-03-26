import Script from "next/script";

const MobileEscapeContact = ({
  locationInfo,
  contactSectionData,
  locationName,
}) => {
  const getStAddress = (slug) => {
    var ctArr = slug.split("-");
    var st = ctArr[ctArr.length - 1].toUpperCase();

    return st;
  };
  const getAddress = (address, state, zip, city) => {
    var locState = state.split(",");
    var st = locState[locState.length - 1].trim().toString().toUpperCase();

    var add = address + ", " + city + ", " + st + " " + zip;
    return add;
  };
  const removeTags = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/(<([^>]+)>)/gi, "");
  };
  const getDirection = (address, state, zip, city) => {
    var addr = address.toString().split(" ").join("+") + ",";
    var stArr = state.toString().split(",");
    var ct = city + ",";
    var st = stArr[stArr.length - 1].trim().toString().toUpperCase();

    var zp = zip + ",";

    var gslug = addr + "+" + ct + "+" + st + "+" + zp + "+" + "USA";

    //console.log(st);
    var gUrl = "https://www.google.com/maps/dir//" + gslug;

    return gUrl;
  };

  const changeStyle = () => {
    var formContainer = document.querySelector("iframe").contentWindow;
    //var formContainer=document.querySelector(".pipedriveWebForms")
    var elmnt = document.querySelector(".pipedriveWebForms");
    const style = document.createElement("style");

    style.textContent = `.gDhlQr{max-width: 30% !important;background:red;}`;
    //var h= formContainer.document.getElementsByClassName(".gDhlQr")[0]
    elmnt.appendChild(style);
    //  console.log(h)
  };
  const getState = (locslug) => {
    var stArr = locslug.split("-");
    return stArr[stArr.length - 1].toUpperCase();
  };
  return (
    <>
      <div
        id="mobile-escape-room-form"
        className="mer-contact bg-black pb-16 pt-10 md:py-20 lg:py-28 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto md:px-4">
          {/**======================================================content============ */}
          <div className="conatct-section flex flex-col lg:flex-row justify-between md:max-w-[660px] lg:max-w-none mx-auto">
            {/**======================================================content Info+FAQ============ */}
            <div className="contact-info-box  md:pt-12 px-4 w-full  lg:w-[46%]">
              <div className="in-sec-title mb-3 rm:mb-4 md:mb-6 lg:mb-8">
                <h2
                  className="dark-gold mb-3 rm:mb-4 xl:mb-6 pt-0 md:py-2 text-[25px] rm:text-[26px] md:text-[40px] lg:text-[40px] 2xl:text-[48px] font-os font-bold uppercase"
                  style={{ lineHeight: 1.2 }}
                >
                  {contactSectionData.sectionTitle}
                </h2>
                {contactSectionData.sectionSubTitle !== null ? (
                  <div className="text-gray-200 lg:text-lg 3xl:text-xl"></div>
                ) : (
                  <></>
                )}
              </div>
              {contactSectionData.note !== null ? (
                <div
                  className="mer-notice mt-4 md:mt-6 xl:text-lg text-[#eeeeee] mbl-group-text hidden"
                  dangerouslySetInnerHTML={{ __html: contactSectionData.note }}
                ></div>
              ) : (
                <></>
              )}

              <div className="mer-info-list-box  ">
                <div className="mer-info-list flex items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-y-[1px] border-[#D2C6AA]">
                  <div className="w-[20px] md:w-[24px]">
                    <img
                      className="w-full"
                      alt={"Allinadventures icon map"}
                      src="/assets/svg/event-icon-pin.svg"
                    ></img>
                  </div>
                  <div className="flex-1">
                    <a
                      className="text-[#F4E6C3] hover:text-red-700"
                      href={getDirection(
                        locationInfo.address,
                        locationInfo.state,
                        locationInfo.zip,
                        locationInfo.cityName
                      )}
                    >
                      {getAddress(
                        locationInfo.address,
                        locationInfo.state,
                        locationInfo.zip,
                        locationInfo.cityName
                      )}
                    </a>
                  </div>
                </div>

                <div className="mer-info-list flex  items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                  <div className="w-[20px] md:w-[24px]">
                    <img
                      className="w-full"
                      alt={"Allinadventures icon phone"}
                      src="/assets/svg/event-icon-phone.svg"
                    ></img>
                  </div>
                  <div className="flex-1">
                    <a
                      className="text-[#F4E6C3] hover:text-red-700"
                      href={
                        "tel:+1404-445-6047"
                      }
                    >
                      Sales: +1 404-445-6047
                    </a>
                  </div>
                </div>

                {/*store email*/}
                <div className="mer-info-list flex items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                  <div className="w-[20px] md:w-[24px]">
                    <img
                      className="w-full"
                      alt={"Allinadventures icon email"}
                      src="/assets/svg/event-icon-email.svg"
                    ></img>
                  </div>
                  <div className="flex-1">
                    <a
                      className="text-[#F4E6C3] hover:text-red-700"
                      href={
                        locationInfo.storeEmail !== null
                          ? "mailto:" + locationInfo.storeEmail
                          : "mailto:store123@allinadventures.com"
                      }
                    >
                      {locationInfo.storeEmail !== null
                        ? locationInfo.storeEmail
                        : "store123@allinadventures.com"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/**======================================================content Info+FAQ end============ */}
            {/**=====================================Yext Form================================== */}
            <div
              id="mobile-escape-room-contact"
              className="mt-8 md:mt-8 lg:mt-0 contact-form-box w-full lg:w-[50%]"
            >
              <div className="contact-form-bg bg-[#F4E6C3] px-4 pt-6 pb-8 md:p-6 lg:p-8 md:rounded w-full">
                <div
                  className="pipedriveWebForms"
                  data-pd-webforms="https://webforms.pipedrive.com/f/1GbaceOYFfjizbqZICDNPK2Ms6Tv8J5gwKVdEiv5DLoh98NAMtTxpy1GrhsG1Xinx"
                >
                  <Script
                    onLoad={() => {
                      changeStyle();
                    }}
                    src="https://webforms.pipedrive.com/f/loader"
                    strategy="afterInteractive"
                  ></Script>
                </div>
              </div>
            </div>

            {/**=====================================Yext Form end================================== */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileEscapeContact;
