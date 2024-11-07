import TitleSeparator from "../util/TitleSeparator";
import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";
const MobileEscapeEvents = (props) => {
  return (
    <div className="mer-event-section relative  py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px] bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] bg-repeat">
      {/*======================= boder img============== */}
      <SectionBorderTop />
      <SectionBorderBottom />
      {/*======================= boder img end============== */}
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-8 md:mb-12  mx-auto">
          <TitleSeparator title="MOBILE ESCAPE ROOM EVENT FOR ALL" />
          <p className="mt-6 text-[#2E2E2E] max-w-[840px] mx-auto text-center lg:text-lg 3xl:text-xl">
            Our mobile escape room delivers fun and immersive experiences for
            all ages and group sizes, making it perfect for corporate events,
            school activities, or family gatherings and more.
          </p>
        </div>
        <div className="mer-event-list flex flex-col md:flex-row md:justify-center lg:justify-between space-y-6 md:space-y-0 md:space-x-2 lg:space-x-4  md:flex-wrap lg:flex-nowrap">
          {/*=======================item 1============== */}
          <div className="mer-event-list-item w-full md:w-[31%] lg:w-[32%]  bg-[#222222] rounded-[12px]">
            <div className="mer-ev-img rounded-t-[12px]">
              <img
                className="rounded-t-[12px]"
                src="/assets/mobile-escape-room/events/mobile-escape-room-events-1.jpg"
              ></img>
            </div>
            <div className="mar-ev-text px-5 py-6 md:px-4 md:py-6 lg:px-6 lg:py-8 text-center">
              <h3 className="font-bold text-[24px] md:text-[22px] lg:text-[28px] 3xl:text-[30px] leading-[1.3] text-[#CA9342]">
                Workplace Event
              </h3>
              <p className="text-[#e2e2e2] text-sm lg:text-base mt-2 md:mt-3 3xl:mt-4">
                Bring excitement to your next office gathering with our mobile
                escape room. It transforms your workplace into a fun,
                interactive challenge, perfect for energizing your team and
                boosting collaboration.
              </p>
            </div>
          </div>
          {/*=======================item 2============== */}
          <div className="mer-event-list-item w-full md:w-[31%] lg:w-[32%] bg-[#222222] rounded-[12px]">
            <div className="mer-ev-img rounded-t-[12px]">
              <img
                className="rounded-t-[12px]"
                src="/assets/mobile-escape-room/events/mobile-escape-room-events-2.jpg"
              ></img>
            </div>
            <div className="mar-ev-text px-5 py-6 md:px-4 md:py-6 lg:px-6 lg:py-8 text-center">
              <h3 className="font-bold text-[24px] md:text-[22px] lg:text-[28px] 3xl:text-[30px] leading-[1.3] text-[#CA9342]">
                School Event
              </h3>
              <p className="text-[#e2e2e2] text-sm lg:text-base  mt-2 md:mt-3 3xl:mt-4 font-normal">
                Make your school event unforgettable with our mobile escape
                room. Designed to promote teamwork and critical thinking, it's a
                fun, educational experience right in your classroom.
              </p>
            </div>
          </div>
          {/*=======================item 3============== */}
          <div className="mer-event-list-item w-full md:w-[31%] lg:w-[32%] bg-[#222222] rounded-[12px] ">
            <div className="mer-ev-img rounded-t-lg ">
              <img
                className="rounded-t-[12px]"
                src="/assets/mobile-escape-room/events/mobile-escape-room-events-3.jpg"
              ></img>
            </div>
            <div className="mar-ev-text px-5 py-6 md:px-4 md:py-6 lg:px-6 lg:py-8 text-center">
              <h3 className="font-bold text-[24px] md:text-[22px] lg:text-[28px] 3xl:text-[30px] leading-[1.3] text-[#CA9342]">
                Team Building
              </h3>
              <p className="text-[#e2e2e2] text-sm lg:text-base mt-2 md:mt-3 3xl:mt-4">
                Boost teamwork and communication with our immersive escape room
                challenges. Our mobile setup encourages collaboration in a fun,
                engaging way, making it perfect for team-building activities.
              </p>
            </div>
          </div>
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

export default MobileEscapeEvents;
