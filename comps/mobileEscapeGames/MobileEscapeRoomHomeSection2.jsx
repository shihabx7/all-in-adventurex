import MobileTitleSeparatorLeft from "./MobileTitleSeparatorLeft";
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
const MobileEscapeRoomHomeSection2 = (props) => {
  const iconList = [
    {
      id: 1,
      text: "Kid and family-friendly experience, perfect for all ages",
    },
    {
      id: 2,
      text: "Great for team-building, parties and special events",
    },
    {
      id: 3,
      text: "Experience anywhere—office, classroom, church or indoor/outdoor",
    },
    {
      id: 4,
      text: "No transportation hassle, no logistical challenges",
    },
    {
      id: 5,
      text: "No waiver signs are required for kids",
    },
  ];
  const showLocation = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    props.setGoMobileEecapeForm(false);
    props.setShowMobileEecapeMenu(true);
  };
  const showLocatioForm = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    props.setGoMobileEecapeForm(true);
    props.setShowMobileEecapeMenu(true);
  };
  return (
    <div className="bg-[#231800]">
      <div className="mbe-root relative bg-[url('/assets/mobile-escape-room/mobile-escape-room-bg-v2.png')] bg-center bg-[length:200px_200px] md:bg-[length:260px_260px] lg:bg-[length:280px_280px] bg-repeat bg-opacity-70">
        <div className="mbl-h-container max-w-7xl mx-auto py-16 md:py-28 2xl:py-32 px-3 rm:px-4">
          <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center md:px-8 lg:px-0">
            <div className="mbl-col w-full lg:w-1/2 order-2 lg:order-1">
              {/* ==================section title=====================*/}
              <div className="section-title-container">
                <div className="md:max-w-[76%] lg:max-w-[100%]">
                  <h2 className="text-[#E0BF62] py-[2px] md:py-1 2xl:py-2 text-2xl rm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.7rem] 2xl:text-[3rem] leading-[1.3] md:leading-[1.2] font-os font-bold uppercase">
                    EXPERIENCE OUR MOBILE ESCAPE ROOMS
                    <span className="inline-block mbl-title-ribbon ml-4 md:ml-6">
                      <img
                        className="max-h-[24px] rm:max-h-[28px] md:max-h-[32px] lg:max-h-[38px] "
                        alt="Allinadventures new mobile escape rooms"
                        src="/assets/mobile-escape-room/new-animation.gif"
                      ></img>
                    </span>
                  </h2>
                </div>

                <div className="text-[#CCC9C1] leading-[1.7] text-[.9rem] rm:text-base lg:text-lg mt-4 md:mt-5 xl:mt-6">
                  <p>
                    Looking for a fun, hassle-free way to level up your next
                    event? Bring the adventure to you with our one-of-a-kind
                    mobile escape room experience! Whether it's a school event,
                    team-building day, church gathering, or private party, we
                    deliver the thrill, puzzles, and excitement right to your
                    location. No setup is needed—just step inside and let the
                    fun begin!
                  </p>
                </div>
              </div>
              {/* ==================icon list=====================*/}
              <div className="text-[#CCC9C1] mbl-h-list mt-6 ml-1 md:ml-4">
                {iconList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="icon-row flex space-x-2 md:space-x-3 xl:space-x-4 my-3 2xl:my-3 w-full"
                    >
                      <div className="mt-[6px] md:mt-[7px] w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#CA9342] "></div>
                      <div
                        className="leading-[1.5] text-[.9rem] rm:text-base lg:text-lg flex-1"
                        style={{ lineHeight: 1.3 }}
                      >
                        {item.text}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* ==================button=====================*/}
              <div className="mbl-h-btn flex space-x-2 justify-between md:justify-start md:space-x-6 mt-8">
                {props.locationSlug && (
                  <>
                    <button
                      onClick={() => {
                        partyFormBooking(
                          eventFormBookingLinks[props.locationSlug]
                        );
                      }}
                      className="w-[48%] md:max-w-[220px] text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium text-sm rm:text-base md:text-lg hover:bg-red-700 hover:border-red-700"
                    >
                      GET A QUOTE
                    </button>
                    <a
                      href={
                        "/" +
                        props.locationSlug +
                        "/activities/mobile-escape-room"
                      }
                      className="w-[48%] md:max-w-[220px] text-center block border text-white border-red-600 bg-transparent py-[10px] md:py-3 rounded-full font-medium text-sm rm:text-base md:text-lg hover:bg-red-700 hover:border-red-700"
                    >
                      LEARN MORE
                    </a>
                  </>
                )}
                {!props.locationSlug && (
                  <>
                    <button
                      onClick={(e) => showLocatioForm(e)}
                      className="w-[48%] md:max-w-[220px] text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium text-sm rm:text-base md:text-lg hover:bg-red-700 hover:border-red-700"
                    >
                      GET A QUOTE
                    </button>
                    <a
                      href={"/mobile-escape-room"}
                      className="w-[48%] md:max-w-[220px] text-center block border text-white border-red-600 bg-transparent py-[10px] md:py-3 rounded-full font-medium text-sm rm:text-base md:text-lg hover:bg-red-700 hover:border-red-700"
                    >
                      LEARN MORE
                    </a>
                  </>
                )}
              </div>
            </div>
            <div className="mbl-col w-full lg:w-1/2 order-1 lg:order-2 mt-3 md:mt-0 mb-6 md:mb-8 lg:mb-0">
              <div className="mbl-h-img">
                <img
                  alt={"Allinadventures mobile escape room"}
                  src={
                    "https://cdn.allinadventures.com/uploads/All_In_Adventures_Mobile_Escappe_Room_For_Big_Event_eb07303e99.jpg"
                  }
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEscapeRoomHomeSection2;
