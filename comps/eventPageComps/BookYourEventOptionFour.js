import React from "react";
import Image from "next/image";
import TitleSeparator from "../util/TitleSeparator";

const bookAll = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: "items",
  });
};

const bookEvent = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "no",
    flow: bookingData.flow,
    view: { item: bookingData.itemNo },
  });
};
const bookGame = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: { item: bookingData.itemNo },
  });
};

function BookYourEventOptionFour(props) {
  return (
    <div className="max-w-7xl mx-auto relative pb-16 pt-12 md:pb-24 md:pt-28 lg:pb-28 lg:pt-28 xl:pb-32  px-4 xl:px-0 z-20">
      {/*===========section Title============= */}
      <div className="section-title  text-center max-w-[760px] mx-auto  mb-8 md:mb-14 lg:mb-16 xl:mb-16">
        <TitleSeparator
          title="BOOK YOUR EVENT"
          color="golden-text"
          weight="font-bold"
        />
        <p className="text-[#333333] md:text-xl mt-3 md:mt-3 xl:mt-4">
          Choose the perfect option for your group from the four choices below.
        </p>
      </div>
      {/*===========section Title end============= */}
      {/*===========section Content============= */}
      <div className="book-event mt-16 sec-content grid md:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-14 md:gap-x-8 md:gap-y-16 lg:gap-x-4 lg:gap-y-0">
        {/*===========box 1 ============= */}
        <div className="book-event-box w-full">
          <div className="bk-wrapper h-full bg-[#FBF2DC] border border-[#D2C6AA] relative">
            <div className="bk-option absolute bottom-[100%] left-0">
              <span className="inline-block bg-[#D4B56A] px-3 py-1 text-[#111111] font-medium">
                Option 1
              </span>
            </div>
            <div className="bk-content h-full flex flex-col justify-between  ">
              <div className="bk-box ">
                <div className="bk-img">
                  <Image
                    className="w-full"
                    src="/assets/events/party-and-escape-room-booking.jpg"
                    alt="Party and escape room booking"
                    width={800}
                    height={461}
                  />
                </div>

                <div className="bk-text mt-3 mb-6 px-3 md:px-2 xl:px-3">
                  <h3 className="text-black text-[18px] lg:text-[19px] xl:text-[22px] text-center font-bold">
                    PARTY ROOM + ESCAPE ROOM
                  </h3>
                  <p className="text-[#232323] text-[16px] md:text-[17px] xl:text-[18px] font-thin text-center mt-2">
                    {!props.eventBooking.isActive ? (
                      <>
                        To reserve our Party Room and arrange catering services
                        at this location, please contact our store manager
                        directly, as online booking is not available for this
                        location. However, you can book games online.
                      </>
                    ) : (
                      <>
                        Ideal for groups of 6-10 people looking to enjoy both
                        the party room and the excitement of an escape room.
                        Confirm your booking online by choosing your party room,
                        catering package, and escape room theme.
                      </>
                    )}
                  </p>
                </div>
              </div>
              <div className="bk-btn text-center pb-5 md:pb-8 px-3 md:px-3 xl:px-5">
                {props.isPublished ? (
                  <>
                    {props.eventBooking.isActive ? (
                      <button
                        onClick={() => {
                          bookEvent(props.eventBooking);
                        }}
                        className="bg-red-600 hover:bg-red-700
                   text-white text-center font-medium
                    py-4  rounded-full mx-auto text-[14px] lg:text-[14px] xl:text-[16px] w-full"
                      >
                        BOOK PARTY & ESCAPE ROOM
                      </button>
                    ) : (
                      <a
                        href={"/" + props.locationSlug + "/contact-store"}
                        className="bg-red-600 hover:bg-red-700
                   text-white text-center font-medium
                    py-4  rounded-full mx-auto text-[14px] lg:text-[14px] xl:text-[16px] w-full block"
                      >
                        CONTACT US
                      </a>
                    )}
                  </>
                ) : (
                  <button
                    className="bg-red-600 hover:bg-red-700
                   text-white text-center font-medium
                    py-4  rounded-full mx-auto text-[14px] lg:text-[14px] xl:text-[16px] w-full"
                  >
                    COMING SOON
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*===========box 1 end ============= */}
        {/*===========box 2 ============= */}
        <div className="book-event-box w-full">
          <div className="bk-wrapper h-full  bg-[#FBF2DC] border border-[#D2C6AA] relative">
            <div className="bk-option absolute bottom-[100%] left-0">
              <span className="inline-block bg-[#D4B56A] px-3 py-1 text-[#111111] font-medium">
                Option 2
              </span>
            </div>
            <div className="bk-content h-full flex flex-col justify-between  ">
              <div className="bk-box ">
                <div className="bk-img">
                  <Image
                    className="w-full"
                    src={props.escapeGamePartyList[0].partyCardImage.url}
                    alt={props.escapeGamePartyList[0].partyCardImage.alt}
                    width={props.escapeGamePartyList[0].partyCardImage.width}
                    height={props.escapeGamePartyList[0].partyCardImage.height}
                  />
                </div>

                <div className="bk-text mt-3 mb-6 px-3 md:px-2 xl:px-3">
                  <h3 className="text-black text-[18px] lg:text-[19px] xl:text-[22px] text-center font-bold uppercase">
                    {props.escapeGamePartyList[0].partyName}
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props.escapeGamePartyList[0].partyCardText,
                    }}
                    className="text-[#232323] text-[16px] md:text-[17px] xl:text-[18px] font-thin text-center mt-2"
                  ></div>
                </div>
              </div>
              <div className="bk-btn text-center pb-5 md:pb-8 px-3 md:px-3 xl:px-5">
                {props.escapeGamePartyList[0].isActive ? (
                  <button
                    onClick={() => {
                      bookGame(props.escapeGamePartyList[0].bookingData);
                    }}
                    className="bg-red-600 hover:bg-red-700
                   text-white text-center font-medium
                    py-4  rounded-full mx-auto text-[14px] lg:text-[14px] xl:text-[16px] w-full"
                  >
                    {props.escapeGamePartyList[0].bookingBtnText}
                  </button>
                ) : (
                  <a
                    href="#eventform"
                    className="bg-red-600 hover:bg-red-700
                   text-white text-center font-medium
                    py-4  rounded-full mx-auto text-[14px] lg:text-[14px] xl:text-[16px] w-full"
                  >
                    {props.escapeGamePartyList[0].bookingBtnText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*===========box 2 end ============= */}
        <div className="book-event-box w-full">
          <div className="bk-wrapper h-full  bg-[#FBF2DC] border border-[#D2C6AA] relative">
            <div className="bk-option absolute bottom-[100%] left-0">
              <span className="inline-block bg-[#D4B56A] px-3 py-1 text-[#111111] font-medium">
                Option 3
              </span>
            </div>
            <div className="bk-content h-full flex flex-col justify-between  ">
              <div className="bk-box ">
                <div className="bk-img">
                  <Image
                    className="w-full"
                    src="/assets/events/escape-room-event-booking.jpg"
                    alt="Escape room booking"
                    width={800}
                    height={461}
                  />
                </div>

                <div className="bk-text mt-3 mb-6 px-3 md:px-2 xl:px-3">
                  <h3 className="text-black text-[18px] lg:text-[19px] xl:text-[22px] text-center font-bold">
                    ESCAPE ROOM ONLY
                  </h3>
                  <p className="text-[#232323] text-[16px] md:text-[17px] xl:text-[18px] font-thin text-center mt-2">
                    For groups of 2-10 who just crave the escape room adrenaline
                    rush, this is your jam! Book your escape room online and
                    come conquer it together. No party room frills needed, just
                    pure puzzle-solving bliss.
                  </p>
                </div>
              </div>
              <div className="bk-btn text-center pb-5 md:pb-8 px-3 md:px-3 xl:px-5">
                {!props.isPublished ? (
                  <button
                    className="bg-red-600 hover:bg-red-700
                   text-white text-center font-medium
                    py-4 rounded-full mx-auto text-[14px] lg:text-[14px] xl:text-[16px] w-full"
                  >
                    COMING SOON
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      bookAll(props.allBooking);
                    }}
                    className="bg-red-600 hover:bg-red-700
                   text-white text-center font-medium
                    py-4  rounded-full mx-auto text-[14px] lg:text-[14px] xl:text-[16px] w-full"
                  >
                    BOOK YOUR ESCAPE ROOM
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*===========box 3 end ============= */}
        {/*===========box 4 ============= */}
        <div className="book-event-box w-full">
          <div className="bk-wrapper h-full bg-[#FBF2DC] border border-[#D2C6AA] relative">
            <div className="bk-option absolute bottom-[100%] left-0">
              <span className="inline-block bg-[#D4B56A] px-3 py-1 text-[#111111] font-medium">
                Option 4
              </span>
            </div>
            <div className="bk-content h-full flex flex-col justify-between ">
              <div className="bk-box ">
                <div className="bk-img">
                  <Image
                    className="w-full"
                    src="/assets/events/large-event-booking.jpg"
                    alt="Large event booking"
                    width={800}
                    height={461}
                  />
                </div>

                <div className="bk-text mt-3 mb-6 px-3 md:px-2 xl:px-3">
                  <h3 className="text-black text-[18px] lg:text-[19px] xl:text-[22px] text-center font-bold">
                    LARGE EVENT / CUSTOMIZATION
                  </h3>
                  <p className="text-[#232323] text-[16px] md:text-[17px] xl:text-[18px] font-thin text-center mt-2">
                    Planning a large event for over 10 people? Or need some
                    customization? Submit your inquiries, and we'll work our
                    magic to craft a custom quote, special deals, and anything
                    else you need to make your event legendary.
                  </p>
                </div>
              </div>
              <div className="bk-btn text-center pb-5 md:pb-8 px-3 md:px-3 xl:px-5">
                <a
                  href="#eventform"
                  className="bg-red-600 hover:bg-red-700
                   text-white text-center font-medium
                    py-4  rounded-full mx-auto text-[14px] lg:text-[14px] xl:text-[16px] w-full inline-block"
                >
                  INQUIRE NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*===========box 4 end ============= */}
      </div>
      {/*===========section Content End============= */}
    </div>
  );
}

export default BookYourEventOptionFour;
