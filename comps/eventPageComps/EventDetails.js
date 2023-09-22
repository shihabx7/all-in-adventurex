import { useRef, useState, useEffect } from "react";
import EventDbtn from "../util/EventDbtn";
import GameDtBtn from "../util/GameDtBtn";
import GameTitleSeparator from "../util/GameTitleSeparator";
import { FiXSquare } from "react-icons/fi";
import EventBookBtn from "../util/EventBookBtn";

const EventDetails = (props) => {
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
    <div
      className="event-detail relative overflow-hidden"
      style={{ background: "url('/assets/game-dt-bg.jpg')" }}
    >
      <div className="pl-or pl-or-1 absolute top-0 left-0 z-10">
        <img src="/assets/pl-bgi-1.png"></img>
      </div>
      <div className="pl-or pl-or-3 absolute top-0 right-0 z-10">
        <img src="/assets/pl-bgi-3.png"></img>
      </div>
      <div className="pl-or pl-or-2 absolute bottom-0 left-0 z-10">
        <img src="/assets/pl-bgi-2.png"></img>
      </div>
      <div className="pl-or pl-or-4 absolute bottom-0 right-0 z-10">
        <img src="/assets/pl-bgi-4.png"></img>
      </div>
      <div className="absolute top-0 left-0 w-full">
        <img className="w-full" src="/assets/game-home-or1.jpg"></img>
      </div>

      <div className="content-container pt-[116px] pb-16 md:py-24 lg:py-32 md:px-4 relative z-20">
        {/*===============================event row -1 WHY BOOK A PARTY WITH ALL IN ADVENTURE?================= */}
        <div className="evt-dt-container wbook-bg relative overflow-x-hidden md:overflow-visible">
          <div className="st-bg absolute bottom-[44%] right-0 md:right-[-30px] md:bottom-[0px] lg:bottom-[-40px] lg:right-[-60px] xl:bottom-[-16%] xl:right-[-80px] 2xl:bottom-[-4%] 4xl:bottom-[-8%]  2xl:right-[100px] 4xl:right-[200px] 5xl:right-[380px]">
            <img
              className="w-[134px] md:w-[160px] lg:w-[180px] xl:w-[280px] 2xl:w-[340px] 4xl:w-[350px] 5xl:w-[370px]"
              src="/assets/svg/util/cake-and-gift.svg"
            ></img>
          </div>

          <div className="event-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="event-dt-col w-full order-2 md:order-1 md:w-[49%] lg:w-[48%] relative z-20">
              <div className="event-dt-desc py-4 md:py-0">
                <p className="md:text-lg text-[#938056] uppercase leading-[1]">
                  {props.eventname}
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
                        label="BOOK YOUR PARTY"
                        eventbooking={props.eventbooking}
                      />
                    </div>
                  )}
                {props.eventbooking &&
                  props.eventbooking.eventstatus == false && (
                    <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                      <EventDbtn link="#eventform" label="INQUIRE NOW" />
                    </div>
                  )}
                {!props.eventbooking && (
                  <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                    <EventDbtn link="#eventform" label="INQUIRE NOW" />
                  </div>
                )}
              </div>
            </div>
            <div className="event-dt-col w-full md:w-[49%] lg:w-[48%] order-1 mb-4 md:mb-0 md:order-2">
              <div className="event-dt-img">
                <img
                  className="rounded drop-shadow"
                  src={props.eventdata.why_book_img}
                ></img>
              </div>
            </div>
          </div>
        </div>
        {/*===============================event row -1 WHY BOOK A PARTY WITH ALL IN ADVENTURE?================= */}
        {/*===============================event row WHAT WE OFFER?================= */}
        <div className="evt-dt-container offer-bg relative overflow-x-hidden md:overflow-visible py-8 lg:py-12">
          <div className="st-bg absolute bottom-[54%] right-[-10px] md:left-[-30px] md:bottom-[30px] lg:bottom-[20px] lg:left-[-60px] xl:bottom-[0px] xl:left-[-80px] 2xl:bottom-[30px] 2xl:left-[100px] 4xl:left-[220px] 5xl:left-[380px] w-[148px] md:w-[240px] lg:w-[280px] xl:w-[310px] 2xl:w-[330px] 4xl:w-[360px] 5xl:w-[380px]">
            <img
              className="w-[140px] md:w-[180px] lg:w-[200px] xl:w-[310px] 2xl:w-[330px] 4xl:w-[360px] 5xl:w-[380px]"
              src="/assets/svg/util/lock-and-key.svg"
            ></img>
          </div>
          <div className="event-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="event-dt-col w-full md:w-[49%] lg:w-[48%]  mb-4 md:mb-0 ">
              <div className="event-dt-img rounded">
                <img
                  className="rounded drop-shadow"
                  src={props.eventdata.offer_img}
                ></img>
              </div>
            </div>
            <div className="event-dt-col w-full md:w-[49%] lg:w-[48%]">
              <div className="event-dt-desc">
                <p className="md:text-lg text-[#938056] leading-[1] uppercase">
                  {props.eventname}
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
                {/** 
                                    <div className="relative"> 
                                        <p className="mt-2 md:mt-2 lg:mt-3 md:text-[18px] lg:text-[20px] text-gray-700">Also, there are two optional packages for a 2-hours party room rental. <span className="font-medium">Packages 1</span> offer a FREE $30 gift card and <span className="font-medium">Packages 2</span> offer a FREE $35 gift card for the guest of honor and provide basic supplies such as plates, napkins, and utensils. 
                                    
                                        <span onClick={showToast} className="cursor-pointer text-blue-600 hover:text-blue-700 hover:cursor-pointer"> See package details</span></p>
                                    <div className=" w-full bg-[#111111]  rounded absolute bottom-8 right-0 shadow-md" ref={ref}>
                                       {
                                        showPack &&
                                        <div className="pt-8 pb-4 px-4 md:p-6 lg:p-8 relative z-20"> 
                                            <div onClick={closeToast}  className="close-toast absolute top-[2px] right-[2px] text-[#dddddd] text-2xl hover:text-gold hover:cursor-pointer"><FiXSquare/> </div>
                                            <div className="mb-3 relative z-10">
                                              <p className="text-[#eeeeee]"><span className="text-gold font-medium">Package 1:</span> You can reserve our party room for a flat fee of $75 + Tax and cater your own food for your event. There's no minimum guest requirement; max varies.</p>
                                            </div>
                                             <div >
                                              <p className="text-[#eeeeee] relative z-10"><span className="text-gold  font-medium">Package 2:</span> Let us do the work! We will order and pick up your food plus prepare your event for $18.99 per person. This package includes FREE Party Room rental with a minimum of 6 guests; max varies. Our Standard Package includes Pizza, Cookie Cake, and a drink for each guest (may vary based on item availability). Additional catering options may available, ask for our menu! </p>
                                            </div>
                                         <div className="h-[60px] w-[60px] rotate-45 absolute bottom-0 left-0 right-0 mx-auto bg-[#111111] z-0">

                                         </div>
                                      </div>
                                       }
                                       
                                    </div>
                                    </div>
                                    */}
                <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                  <p className="md:text-lg text-[#938056] md:mb-1 uppercase">
                    {props.activityname}
                  </p>

                  {props.eventbooking &&
                    props.eventbooking.eventstatus == true && (
                      <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                        <EventBookBtn
                          label="BOOK YOUR PARTY"
                          eventbooking={props.eventbooking}
                        />
                      </div>
                    )}
                  {props.eventbooking &&
                    props.eventbooking.eventstatus == false && (
                      <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                        <EventDbtn link="#eventform" label="INQUIRE NOW" />
                      </div>
                    )}
                  {!props.eventbooking && (
                    <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                      <EventDbtn link="#eventform" label="INQUIRE NOW" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============================event row -1 WHAT WE OFFER? ================= */}
        {/*===============================event row -1 WHAT YOU CAN EXPECT FROM AN ESCAPE ROOM + PARTY?================= */}
        <div className="evt-dt-container storyline-bg relative overflow-x-hidden md:overflow-visible">
          <div className="msn-bg-l absolute bottom-[46%] right-[-10px] md:right-[-20px] md:bottom-[20px] lg:bottom-[0px] lg:right-[-20px] xl:bottom-[0px] xl:right-[-70px] 2xl:bottom-[-12%] 2xl:right-[100px] 4xl:right-[300px] 4xl:bottom-[-14%] 5xl:right-[420px] z-20">
            <img
              className=" -scale-x-100 md:scale-x-100 z-10 w-[160px] md:w-[190px] lg:w-[200px] xl:w-[300px]  2xl:w-[370px]  4xl:w-[380px] 5xl:w-[400px] "
              src="/assets/svg/util/compass.svg"
            ></img>
          </div>
          <div className="relative z-20 event-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="event-dt-col order-2 md:order-1 md:w-[49%] lg:w-[48%]">
              <div className="event-dt-desc py-4 md:py-0">
                <p className="md:text-lg text-[#938056] leading-[1] uppercase">
                  {props.eventname}
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
                          label="BOOK YOUR PARTY"
                          eventbooking={props.eventbooking}
                        />
                      </div>
                    )}
                  {props.eventbooking &&
                    props.eventbooking.eventstatus == false && (
                      <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                        <EventDbtn link="#eventform" label="INQUIRE NOW" />
                      </div>
                    )}
                  {!props.eventbooking && (
                    <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                      <EventDbtn link="#eventform" label="INQUIRE NOW" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="event-dt-col w-full md:w-[49%] lg:w-[48%] order-1 mb-4 md:mb-0 md:order-2">
              <div className="event-dt-img">
                <img
                  className="rounded drop-shadow"
                  src={props.eventdata.what_expect_img}
                ></img>
              </div>
            </div>
          </div>
        </div>
        {/*===============================event row -1 WHAT YOU CAN EXPECT FROM AN ESCAPE ROOM + PARTY?================= */}
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <img className="w-full" src="/assets/game-home-or2.jpg"></img>
      </div>
    </div>
  );
};

export default EventDetails;
