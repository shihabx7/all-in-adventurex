import Script from "next/script";

const MobileEscapeContact = (props) => {
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
        className="mer-contact bg-black py-16 md:py-20 lg:py-28 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto md:px-4">
          {/**======================================================content============ */}
          <div className="conatct-section flex flex-col md:flex-row justify-between">
            {/**======================================================content Info+FAQ============ */}
            <div className="contact-info-box pt-16 md:pt-12 px-4 order-2 md:order-1 w-full md:w-[44%] lg:w-[44%]">
              <div className="in-sec-title mb-4 md:mb-6 lg:mb-8">
                <h2 className="golden-text font-bold text-3xl  xl:text-4xl mb-2 xl:mb-4">
                  MOBILE MYSTERY INQUIRY
                </h2>
                <p className="text-gray-200 lg:text-lg 3xl:text-xl">
                  Let us know more about your event! We will be in contact
                  within 24 hours to book your event.
                </p>
              </div>
              <div className="mer-notice mt-4 md:mt-6">
                <div className=" lg:text-lg text-[#eeeeee] mt-4 ">
                  <p className="text-[#A5A5A5]">
                    <span className="text-[#E0BF62]">Please note:</span> All
                    Mobile Mystery events require the use of one (1) mobile
                    device per game provided to your group by your organization
                    plus a local Wi-Fi / Internet connection.
                    <span className="font-medium text-white">
                      While two devices are a minimum requirement, you may find
                      that up to six devices are needed for a single event
                      (depending on how many games are selected).
                    </span>
                  </p>
                </div>

                <div className=" lg:text-lg text-[#eeeeee] mt-4 ">
                  <p className="text-[#A5A5A5]">
                    These devices are used to access the electronic portion of
                    the game. If you are unable to provide this, we encourage
                    you to take advantage of our in-store experiences!
                  </p>
                </div>
              </div>
              <div className="mer-info-list-box mt-8 lg:mt-10 3xl:mt-16">
                <div className="mer-info-list flex items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-y-[1px] border-[#D2C6AA]">
                  <div className="w-[20px] md:w-[24px]">
                    <img
                      className="w-full"
                      src="/assets/svg/event-icon-pin.svg"
                    ></img>
                  </div>
                  <div className="flex-1">
                    <a className="text-[#F4E6C3] hover:text-red-700" href={"#"}>
                      {
                        "props.5959 Triangle Town Blvd Space EU 2113, Raleigh, NC 27616.phone"
                      }
                    </a>
                  </div>
                </div>
                <div className="mer-info-list flex  items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                  <div className="w-[20px] md:w-[24px]">
                    <img
                      className="w-full"
                      src="/assets/svg/event-icon-phone.svg"
                    ></img>
                  </div>
                  <div className="flex-1">
                    <a
                      className="text-[#F4E6C3] hover:text-red-700"
                      href={"tel:+1919-205-5008"}
                    >
                      {"+1 919-205-5008"}
                    </a>
                  </div>
                </div>
                <div className="mer-info-list flex items-center space-x-4 py-2 px-2 md:py-2 md:px-3 xl:py-3 xl:px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                  <div className="w-[20px] md:w-[24px]">
                    <img
                      className="w-full"
                      src="/assets/svg/event-icon-email.svg"
                    ></img>
                  </div>
                  <div className="flex-1">
                    <a
                      className="text-[#F4E6C3] hover:text-red-700"
                      href={"mailto:store123@allinadventures.com"}
                    >
                      {"store123@allinadventures.com"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/**======================================================content Info+FAQ end============ */}
            {/**=====================================Yext Form================================== */}
            <div
              id="mer-form"
              className="order-1 md:order-2 contact-form-box w-full md:w-[54%] lg:w-[54%]"
            >
              <div className="contact-form-bg bg-[#F4E6C3] px-4 py-8 md:p-6 lg:p-8 md:rounded w-full">
                <div
                  className="pipedriveWebForms"
                  data-pd-webforms="https://webforms.pipedrive.com/f/2Z8p4ZqukDQoxgiqFVoNKFZfVoGoClX7qWK065Gmf005eEwiLpSddFegYnUHnvLJV"
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
