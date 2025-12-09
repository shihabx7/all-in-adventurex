import { useRef, useState, useEffect } from "react";
import { useSiteData } from "../../contexts/SiteDataContext";
import EventDbtn from "../util/EventDbtn";
import GameTitleSeparator from "../util/GameTitleSeparator";
import SectionBorderTop from "../util/SectionBorderTop";
const EventRootDetails = (props) => {
  const [showPack, setShowPack] = useState(false);
  const { openModalMenu, setModalMenuType } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | gift-card | mobile-mystery |unlimited-play-pass | bundle
  const showLocModal = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setModalMenuType("partyPackage-list");
    openModalMenu();
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
      <SectionBorderTop />

      {/*======================= boder img end============== */}
      <div className="pl-or pl-or-1 absolute top-0 left-0 z-10">
        <img
          alt="Balloons, stars and a flying rocket representing the fun and excitement of Escape Rooms at All In Adventures."
          src="/assets/pl-bgi-1.png"
        ></img>
      </div>
      <div className="pl-or pl-or-3 absolute top-0 right-0 z-10">
        <img
          alt="Appealing decorations with colourful confetti, highlighting the fun of Escape Rooms at All In Adventures."
          src="/assets/pl-bgi-3.png"
        ></img>
      </div>

      {/**=========================== section content========================= */}
      <div className="content-container py-16  md:pt-24  lg:pt-28 relative z-20">
        {/*===============================event row -1 WHY BOOK A PARTY WITH ALL IN ADVENTURE?================= */}
        <div className="evt-dt-container wbook-bg relative overflow-x-hidden md:overflow-visible">
          <div className="st-bg absolute bottom-[44%] right-0 sm:bottom-[20%] md:right-[-30px] md:bottom-[0px] lg:bottom-[-40px] lg:right-[-60px] xl:bottom-[-16%] xl:right-[-80px] 2xl:bottom-[-16%] 4xl:bottom-[-16%]  2xl:right-[100px] 4xl:right-[200px] 5xl:right-[380px]">
            <img
              className="w-[134px] sm:w-[190px] md:w-[160px] lg:w-[180px] xl:w-[280px] 2xl:w-[340px] 4xl:w-[350px] 5xl:w-[370px]"
              src="/assets/svg/util/cake-and-gift.svg"
              alt="A huge birthday cake, two wine glasses, and a bottle of wine, featuring the fun and excitement of escape room birthday parties at All In Adventures."
            ></img>
          </div>

          <div className="event-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="event-dt-col w-full order-2 md:order-1 md:w-[49%] lg:w-[48%] relative z-20">
              <div className="event-dt-desc py-4 md:py-0">
                <p className="md:text-lg text-[#938056] uppercase leading-[1]">
                  {props.eventDetaliData.whyAllinAdventuresSubTitle}
                </p>
                <GameTitleSeparator
                  title={props.eventDetaliData.whyAllinAdventuresTitle}
                />
                <div
                  className="mt-3 md:mt-3 lg:mt-4 md:text-[18px] lg:text-[20px] text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: props.eventDetaliData.whyAllinAdventuresDesc,
                  }}
                ></div>

                <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                  <div className="inline-block bg-golden hover:bg-golden-alt search-loc hover:cursor-pointer hover:shadow boder-p rounded-full transition-all duration-500 ease-in-out">
                    <button
                      onClick={(e) => showLocModal()}
                      className="bg-[#FEF6E9] hover:bg-golden-alt rounded-full items-center py-2 px-6 md:py-3 md:px-8 xl:px-10 text-[#424242] hover:text-[#121212] md:text-lg gont-medium"
                    >
                      BOOK YOUR EVENT
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-dt-col w-full md:w-[49%] lg:w-[48%] order-1 mb-4 md:mb-0 md:order-2">
              <div className="event-dt-img">
                <img
                  className="rounded"
                  src={props.eventDetaliData.whyAllinAdventuresImg.url}
                  alt={props.eventDetaliData.whyAllinAdventuresImg.alt}
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
                  src={props.eventDetaliData.makeItMemorableImg.url}
                  alt={props.eventDetaliData.makeItMemorableImg.alt}
                ></img>
              </div>
            </div>
            <div className="event-dt-col w-full md:w-[49%] lg:w-[48%]">
              <div className="event-dt-desc">
                <p className="md:text-lg text-[#938056] leading-[1] uppercase">
                  {props.eventDetaliData.makeItMemorableSubTitle}
                </p>
                <GameTitleSeparator
                  title={props.eventDetaliData.makeItMemorableTitle}
                />

                <div
                  className="mt-3 md:mt-3 lg:mt-4 md:text-[18px] lg:text-[20px] text-gray-700 ev-desc"
                  dangerouslySetInnerHTML={{
                    __html: props.eventDetaliData.makeItMemorableDesc,
                  }}
                ></div>

                <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                  <div className="inline-block bg-golden hover:bg-golden-alt search-loc hover:cursor-pointer hover:shadow boder-p rounded-full transition-all duration-500 ease-in-out">
                    <button
                      onClick={(e) => showLocModal()}
                      className="bg-[#FEF6E9] hover:bg-golden-alt rounded-full items-center py-2 px-6 md:py-3 md:px-8 xl:px-10 text-[#424242] hover:text-[#121212] md:text-lg gont-medium"
                    >
                      BOOK YOUR EVENT
                    </button>
                  </div>
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
              alt="Decorative compass rose design with ornate details, highlighting directions relevant to All In Adventures escape rooms."
            ></img>
          </div>
          <div className="relative z-20 event-dt-row max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="event-dt-col order-2 md:order-1 md:w-[49%] lg:w-[48%]">
              <div className="event-dt-desc py-4 md:py-0">
                <p className="md:text-lg text-[#938056] leading-[1] uppercase">
                  {props.eventDetaliData.whatToExpectSubTitle}
                </p>
                <GameTitleSeparator
                  title={props.eventDetaliData.whatToExpectTitle}
                />

                <div
                  className="mt-3 md:mt-3 lg:mt-4 md:text-[18px] lg:text-[20px] text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: props.eventDetaliData.whatToExpectDesc,
                  }}
                ></div>

                <div className="event-notice mt-4 md:mt-6 lg:mt-8">
                  <div className="inline-block bg-golden hover:bg-golden-alt search-loc hover:cursor-pointer hover:shadow boder-p rounded-full transition-all duration-500 ease-in-out">
                    <button
                      onClick={(e) => showLocModal()}
                      className="bg-[#FEF6E9] hover:bg-golden-alt rounded-full items-center py-2 px-6 md:py-3 md:px-8 xl:px-10 text-[#424242] hover:text-[#121212] md:text-lg gont-medium"
                    >
                      BOOK YOUR EVENT
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-dt-col w-full md:w-[49%] lg:w-[48%] order-1 mb-4 md:mb-0 md:order-2">
              <div className="event-dt-img">
                <img
                  className="rounded "
                  src={props.eventDetaliData.whatToExpectImg.url}
                  alt={props.eventDetaliData.whatToExpectImg.alt}
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
