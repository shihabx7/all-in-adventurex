import { useRef, useState, useEffect } from "react";
import EventDbtn from "../util/EventDbtn";
import GameDtBtn from "../util/GameDtBtn";
import GameTitleSeparator from "../util/GameTitleSeparator";
import { FiXSquare } from "react-icons/fi";
import EventBookBtn from "../util/EventBookBtn";
import BookYourEvent from "./BookYourEvent";

const EventRootDetails = (props) => {
  const [showPack, setShowPack] = useState(false);
  const showToast = () => {
    setShowPack(true);
  };
  const closeToast = () => {
    setShowPack(false);
  };
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showPack && ref.current && !ref.current.contains(e.target)) {
        setShowPack(false);
      }
    };

    document.addEventListener("mouseup", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mouseup", checkIfClickedOutside);
    };
  }, [showPack]);

  return (
    <div className="event-detail relative overflow-hidden bg-center bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] bg-repeat">
      {/*======================= boder img============== */}
      <div className="sec-divider-top w-full absolute top-0 left-0 ">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
        ></img>
        <img
          className="w-full rotate-180 md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>

      {/*======================= boder img end============== */}
      <div className="pl-or pl-or-1 absolute top-0 left-0 z-10">
        <img src="/assets/pl-bgi-1.png"></img>
      </div>
      <div className="pl-or pl-or-3 absolute top-0 right-0 z-10">
        <img src="/assets/pl-bgi-3.png"></img>
      </div>

      {/**=========================== section content========================= */}
      <div className="content-container py-16  md:pt-24  lg:pt-28 relative z-20">
        {/*===============================event row -1 WHY BOOK A PARTY WITH ALL IN ADVENTURE?================= */}
        <div className="evt-dt-container wbook-bg relative overflow-x-hidden md:overflow-visible">
          <div className="st-bg absolute bottom-[44%] right-0 sm:bottom-[20%] md:right-[-30px] md:bottom-[0px] lg:bottom-[-40px] lg:right-[-60px] xl:bottom-[-16%] xl:right-[-80px] 2xl:bottom-[-16%] 4xl:bottom-[-16%]  2xl:right-[100px] 4xl:right-[200px] 5xl:right-[380px]">
            <img
              className="w-[134px] sm:w-[190px] md:w-[160px] lg:w-[180px] xl:w-[280px] 2xl:w-[340px] 4xl:w-[350px] 5xl:w-[370px]"
              src="/assets/svg/util/cake-and-gift.svg"
            ></img>
          </div>

          <div className="event-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="event-dt-col w-full order-2 md:order-1 md:w-[49%] lg:w-[48%] relative z-20">
              <div className="event-dt-desc py-4 md:py-0">
                <p className="md:text-lg text-[#938056] uppercase leading-[1]">
                  {props.eventname == "birthday party"
                    ? "YOUR BIRTHDAY PARTY"
                    : props.eventname}
                </p>
                <GameTitleSeparator
                  title={"WHY ALL IN ADVENTURES"}
                  color="golden-text"
                  weight="font-bold"
                ></GameTitleSeparator>
                <div
                  className="mt-3 md:mt-3 lg:mt-4 md:text-[18px] lg:text-[20px] text-gray-700"
                  dangerouslySetInnerHTML={{ __html: props.eventdata.why_book }}
                ></div>
                {props.eventbooking &&
                  props.eventbooking.eventstatus == true && (
                    <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                      <EventBookBtn
                        label="BOOK YOUR EVENT"
                        eventbooking={props.eventbooking}
                      />
                    </div>
                  )}
                {props.eventbooking &&
                  props.eventbooking.eventstatus == false && (
                    <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                      <EventDbtn link="#eventbooking" label="BOOK YOUR EVENT" />
                    </div>
                  )}
                {!props.eventbooking && (
                  <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                    <EventDbtn link="#eventbooking" label="BOOK YOUR EVENT" />
                  </div>
                )}
              </div>
            </div>
            <div className="event-dt-col w-full md:w-[49%] lg:w-[48%] order-1 mb-4 md:mb-0 md:order-2">
              <div className="event-dt-img">
                <img
                  className="rounded"
                  src={props.eventdata.why_book_img}
                  alt={props.eventdata.why_book_alt}
                ></img>
              </div>
            </div>
          </div>
        </div>
        {/*===============================event row -1 WHY BOOK A PARTY WITH ALL IN ADVENTURE?================= */}
        {/*===============================event row -2 WHAT WE OFFER?================= */}
        <div className="evt-dt-container offer-bg relative overflow-x-hidden md:overflow-visible py-8 lg:py-12">
          <div className="st-bg absolute bottom-[54%] sm:bottom-[32%] right-[-10px] md:left-[-30px] md:bottom-[30px] lg:bottom-[20px] lg:left-[-60px] xl:bottom-[0px] xl:left-[-80px] 2xl:bottom-[30px] 2xl:left-[100px] 4xl:left-[220px] 5xl:left-[380px] w-[148px] md:w-[240px] lg:w-[280px] xl:w-[310px] 2xl:w-[330px] 4xl:w-[360px] 5xl:w-[380px]">
            <img
              className="w-[140px] sm:w-[180px] md:w-[180px] lg:w-[200px] xl:w-[310px] 2xl:w-[330px] 4xl:w-[360px] 5xl:w-[380px]"
              src="/assets/svg/util/lock-and-key.svg"
            ></img>
          </div>
          <div className="event-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="event-dt-col w-full md:w-[49%] lg:w-[48%]  mb-4 md:mb-0 ">
              <div className="event-dt-img rounded">
                <img
                  className="rounded"
                  src={props.eventdata.offer_img}
                  alt={props.eventdata.offer_alt}
                ></img>
              </div>
            </div>
            <div className="event-dt-col w-full md:w-[49%] lg:w-[48%]">
              <div className="event-dt-desc">
                <p className="md:text-lg text-[#938056] leading-[1] uppercase">
                  {props.eventname == "birthday party"
                    ? "YOUR BIRTHDAY PARTY"
                    : props.eventname}
                </p>
                <GameTitleSeparator
                  title={"MAKE IT MEMORABLE"}
                  color="golden-text"
                  weight="font-bold"
                ></GameTitleSeparator>
                <p className="mt-3 md:mt-3 lg:mt-4 md:text-[18px] lg:text-[20px] text-gray-700">
                  {props.eventdata.offer}
                </p>
                <p className="lg:text-lg italic mt-4 lg:mt-8">
                  * See your location's party package booking page for specific
                  details, offerings and experience may vary by location and
                  package choice.
                </p>

                <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                  <p className="md:text-lg text-[#938056] md:mb-1 uppercase">
                    {props.activityname}
                  </p>

                  {props.eventbooking &&
                    props.eventbooking.eventstatus == true && (
                      <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                        <EventBookBtn
                          label="BOOK YOUR EVENT"
                          eventbooking={props.eventbooking}
                        />
                      </div>
                    )}
                  {props.eventbooking &&
                    props.eventbooking.eventstatus == false && (
                      <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                        <EventDbtn
                          link="#eventbooking"
                          label="BOOK YOUR EVENT"
                        />
                      </div>
                    )}
                  {!props.eventbooking && (
                    <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                      <EventDbtn link="#eventbooking" label="BOOK YOUR EVENT" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============================event row -2 WHAT WE OFFER? end================= */}
        {/*===============================event row -3 WHAT YOU CAN EXPECT FROM AN ESCAPE ROOM + PARTY?================= */}
        <div className="evt-dt-container storyline-bg relative overflow-x-hidden md:overflow-visible">
          <div className="msn-bg-l absolute bottom-[46%] sm:bottom-[22%] right-[-10px] md:right-[-20px] md:bottom-[20px] lg:bottom-[0px] lg:right-[-20px] xl:bottom-[0px] xl:right-[-70px] 2xl:bottom-[-12%] 2xl:right-[100px] 4xl:right-[300px] 4xl:bottom-[-14%] 5xl:right-[420px] z-20">
            <img
              className=" -scale-x-100 md:scale-x-100 z-10 w-[160px] sm:w-[180px] md:w-[190px] lg:w-[200px] xl:w-[300px]  2xl:w-[370px]  4xl:w-[380px] 5xl:w-[400px] "
              src="/assets/svg/util/compass.svg"
            ></img>
          </div>
          <div className="relative z-20 event-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="event-dt-col order-2 md:order-1 md:w-[49%] lg:w-[48%]">
              <div className="event-dt-desc py-4 md:py-0">
                <p className="md:text-lg text-[#938056] leading-[1] uppercase">
                  {props.eventname == "birthday party"
                    ? "YOUR BIRTHDAY PARTY"
                    : props.eventname}
                </p>
                <GameTitleSeparator
                  title={"WHAT TO EXPECT"}
                  color="golden-text"
                  weight="font-bold"
                ></GameTitleSeparator>

                <div
                  className="mt-3 md:mt-3 lg:mt-4 md:text-[18px] lg:text-[20px] text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: props.eventdata.what_expect,
                  }}
                ></div>

                <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                  {props.eventbooking &&
                    props.eventbooking.eventstatus == true && (
                      <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                        <EventBookBtn
                          label="BOOK YOUR EVENT"
                          eventbooking={props.eventbooking}
                        />
                      </div>
                    )}
                  {props.eventbooking &&
                    props.eventbooking.eventstatus == false && (
                      <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                        <EventDbtn
                          link="#eventbooking"
                          label="BOOK YOUR EVENT"
                        />
                      </div>
                    )}
                  {!props.eventbooking && (
                    <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                      <EventDbtn link="#eventbooking" label="BOOK YOUR EVENT" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="event-dt-col w-full md:w-[49%] lg:w-[48%] order-1 mb-4 md:mb-0 md:order-2">
              <div className="event-dt-img">
                <img
                  className="rounded "
                  src={props.eventdata.what_expect_img}
                  alt={props.eventdata.what_expect_alt}
                ></img>
              </div>
            </div>
          </div>
        </div>
        {/*===============================event row -3 WHAT YOU CAN EXPECT FROM AN ESCAPE ROOM + PARTY?================= */}
      </div>
      {/**=========================== section content========================= */}
    </div>
  );
};

export default EventRootDetails;
