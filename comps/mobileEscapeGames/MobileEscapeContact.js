import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";
const partyFormBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: "no",
    view: { item: bookingData.itemNo },
  });
};

const MobileEscapeContact = ({
  locationInfo,
  contactSectionData,
  locationName,
  locationSlug,
  setShowMobileEecapeMenu,
  setGoMobileEecapeForm,
  goMobileEecapeForm,
}) => {
  const showMobileEscapeBookingMenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setGoMobileEecapeForm(true);
    setShowMobileEecapeMenu(true);
  };
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
            <div className="contact-info-box  md:pt-12 px-4 w-full order-2 lg:order-1 lg:w-[46%]">
              <div className="in-sec-title mt-8 md:mt-0 mb-3 rm:mb-4 md:mb-6 lg:mb-8">
                <h2
                  className="text-[#E0BF62] mb-3 rm:mb-4 xl:mb-6 pt-0 md:py-2 text-[25px] rm:text-[26px] md:text-[40px] lg:text-[40px] 2xl:text-[48px] font-os font-bold uppercase"
                  style={{ lineHeight: 1.2 }}
                >
                  Contact Us
                </h2>
                {contactSectionData.sectionSubTitle !== null ? (
                  <div className="text-gray-200 lg:text-lg 3xl:text-xl"></div>
                ) : (
                  <></>
                )}
              </div>

              {locationInfo && (
                <div className="mer-info-list-box  ">
                  <div className="mer-info-list flex items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-y-[1px] border-[#D2C6AA]">
                    <div className="w-[18px] md:w-[24px]">
                      <img
                        className="w-full"
                        alt={"Allinadventures icon map"}
                        src="/assets/svg/event-icon-pin.svg"
                      ></img>
                    </div>
                    <div className="flex-1">
                      <a
                        className="text-[#F4E6C3] text-base xl:text-lg hover:text-red-700"
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
                    <div className="w-[18px] md:w-[24px]">
                      <img
                        className="w-full"
                        alt={"Allinadventures icon phone"}
                        src="/assets/svg/event-icon-phone.svg"
                      ></img>
                    </div>
                    <div className="flex-1">
                      <a
                        className="text-[#F4E6C3] xl:text-lg hover:text-red-700"
                        href={"tel:+1404-445-6047"}
                      >
                        Sales: +1 404-445-6047
                      </a>
                    </div>
                  </div>

                  {/*store email*/}
                  <div className="mer-info-list flex items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                    <div className="w-[18px] md:w-[24px]">
                      <img
                        className="w-full"
                        alt={"Allinadventures icon email"}
                        src="/assets/svg/event-icon-email.svg"
                      ></img>
                    </div>
                    <div className="flex-1">
                      <a
                        className="text-[#F4E6C3] text-base xl:text-lg hover:text-red-700"
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
              )}
              {!locationInfo && (
                <div className="mer-info-list-box  ">
                  <div className="mer-info-list flex  items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-y-[1px] border-[#D2C6AA]">
                    <div className="w-[18px] md:w-[24px]">
                      <img
                        className="w-full"
                        alt={"Allinadventures icon phone"}
                        src="/assets/svg/event-icon-phone.svg"
                      ></img>
                    </div>
                    <div className="flex-1">
                      <a
                        className="text-[#F4E6C3] xl:text-lg hover:text-red-700"
                        href={"tel:+1404-445-6047"}
                      >
                        Sales: +1 404-445-6047
                      </a>
                    </div>
                  </div>

                  {/*store email*/}
                  <div className="mer-info-list flex items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                    <div className="w-[18px] md:w-[24px]">
                      <img
                        className="w-full"
                        alt={"Allinadventures icon email"}
                        src="/assets/svg/event-icon-email.svg"
                      ></img>
                    </div>
                    <div className="flex-1">
                      <a
                        className="text-[#F4E6C3] text-base xl:text-lg hover:text-red-700"
                        href={"mailto:sales@allinadventures.com"}
                      >
                        sales@allinadventures.com
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {/**======================================================content button============ */}
              <div className="mbl-h-btn  mt-8 md:mt-10 2xl:mt-12">
                {locationSlug ? (
                  <button
                    onClick={() => {
                      partyFormBooking(eventFormBookingLinks[locationSlug]);
                    }}
                    className="max-w-[280px] md:max-w-[300px] mx-auto lg:mx-0 px-14 md:px-16 text-center border block text-white border-red-600 bg-red-600 py-[14px] md:py-3 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                  >
                    GET A QUOTE
                  </button>
                ) : (
                  <button
                    onClick={(e) => showMobileEscapeBookingMenu(e)}
                    className="max-w-[340px] px-10 text-center border block text-white border-red-600 bg-red-600 py-[16px] md:py-4 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                  >
                    CHOOSE YOUR LOCATION
                  </button>
                )}
              </div>
            </div>
            {/**======================================================content Info+FAQ end============ */}
            {/**=====================================Yext Form================================== */}
            <div
              id="mobile-escape-room-contact"
              className="mt-8 md:mt-8 lg:mt-0 contact-form-box w-full order-1 lg:order-2 lg:w-[50%]"
            >
              <img src="/assets/mobile-escape-room/mobile_escape_room_quote.png"></img>
            </div>

            {/**=====================================Yext Form end================================== */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileEscapeContact;
