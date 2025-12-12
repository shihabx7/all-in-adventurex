import TitleSeparator from "../util/TitleSeparator";
import { locationBookingInfo } from "../../lib/v2/data/locationBookingInfo";
import { useSiteData } from "../../contexts/SiteDataContext";

const MobileEscapeGameList = (props) => {
  return (
    <div
      id="others-physical-games"
      className="pt-20 all-gamelist-box grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-8"
    >
      <div className="section-title text-center max-w-[800px] mx-auto">
        <TitleSeparator title={"Mobile Escape Rooms"} />
        <div className="text-gray-700 md:px-8 md:text-lg">
          Discover our affordable pricing, straightforward booking process, and
          availability to bring the thrill of mobile mystery to your next event!
        </div>
      </div>

      <div className="all-game-list bg-center bg-cover p-4 md:p-6 lg:p-8 mbl-list-bg">
        <div className="all-game-list-head flex justify-between space-x-1 items-center">
          <div className="all-game-info max-w-[50%]">
            <div className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
              <span>
                <img src="/assets/svg/card-age.svg"></img>
              </span>
              <p className="text-[13px] xs:text-[14px] md:text-base">Age 6+</p>
            </div>
            <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
              <span>
                <img src="/assets/svg/card-time.svg"></img>
              </span>
              <span className="text-[13px] xs:text-[14px] md:text-base">
                Duration 60 Min
              </span>
            </p>
            <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
              <span>
                <img src="/assets/svg/card-person.svg"></img>
              </span>
              <span className="text-[13px] xs:text-[14px] md:text-base">
                Team Size 20-60
              </span>
            </p>

            <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
              <span>
                <img src="/assets/svg/inperson.svg"></img>
              </span>
              <span className="text-[13px] xs:text-[14px] md:text-base drop-shadow">
                Mobile Escape Room
              </span>
            </p>
          </div>

          <div className="card-ribbon p-[2px] md:p-[5px] bg-red-600">
            <div className="inline-block text-center py-2 px-4 border border-dashed border-gray-300">
              <p
                className="text-2xl md:text-3xl text-white font-bold"
                style={{ lineHeight: 1 }}
              >
                $19.99
              </p>
              <p className="text-lg text-white mt-1" style={{ lineHeight: 1 }}>
                Per Person
              </p>
              <p
                className="text-xs md:text-sm text-slate-200 md:mt-[2px]"
                style={{ lineHeight: 1 }}
              >
                (Min. 20 person)
              </p>
            </div>
          </div>
        </div>

        <div className="all-game-list-gap py-[52px] md:py-[8%] lg:py-[72px]"></div>
        <div className="all-game-list-bottom">
          <div className=" text-center md:text-left">
            <h3 className="card-game-title text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white">
              Mobile Escape Rooms
            </h3>
            <div className="text-gray-200 lg:text-lg mx-auto md:mx-0 max-w-[700px]">
              Our mobile mystery offers an unforgettable adventure for all ages
              and group sizes, making it the ideal choice for corporate events,
              team-building activities, school programs, family gatherings,
              birthday parties and more.
            </div>
          </div>

          <div className="card-game-link mt-4 text-left">
            <a
              href={
                "/" +
                props.locationSlug +
                "/activities/mobile-escape-room#mobile-escape-room-form"
              }
              className="border-2 w-[240px] card-book-btn-x block md:inline-block mx-auto md:mx-0 border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
            >
              GET A QUOTE
            </a>

            <a
              href={"/" + props.locationSlug + "/activities/mobile-escape-room"}
              className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEscapeGameList;
