import GameTitleSeparator from "../util/GameTitleSeparator";
import MobileEscapeHomeCarousel from "./MobileEscapeHomeCarousel";
import MobileEscapeHero from "./MobileEscapeHero";
import MobileEscapeGameSlider from "./MobileEscapeGameSlider";
import MobileEscapeTestimonialSlider from "./MobileEscapeTestimonialSlider";
import MobileEscapeFaqSection from "./MobileEscapeFaqSection";
import MobileEscapeGallery from "./MobileEscapeGallery";
import MobileEscapeContact from "./MobileEscapeContact";
import MobileEscapeEvents from "./MobileEscapeEvents";
import WhyChooseMobileEscape from "./WhyChooseMobileEscape";
import MobileEscapEx from "./MobileEscapEx";
import MobileEscapePricing from "./MobileEscapePricing";

const faqList = [
  {
    id: 1,
    ques: "What is a mobile escape room?",
    ans: "A mobile escape room is a portable, immersive experience that can be set up in various locations. It challenges participants to solve puzzles and complete tasks within a set time limit to escape a themed scenario.",
  },
  {
    id: 2,
    ques: "How does the mobile escape room work?",
    ans: "A mobile escape room is a portable, immersive experience that can be set up in various locations. It challenges participants to solve puzzles and complete tasks within a set time limit to escape a themed scenario.",
  },
  {
    id: 3,
    ques: "How long does a game last?",
    ans: "A mobile escape room is a portable, immersive experience that can be set up in various locations. It challenges participants to solve puzzles and complete tasks within a set time limit to escape a themed scenario.",
  },
  {
    id: 4,
    ques: "How many people can play at once?",
    ans: "A mobile escape room is a portable, immersive experience that can be set up in various locations. It challenges participants to solve puzzles and complete tasks within a set time limit to escape a themed scenario.",
  },
  {
    id: 5,
    ques: "Are the games suitable for all ages?",
    ans: "A mobile escape room is a portable, immersive experience that can be set up in various locations. It challenges participants to solve puzzles and complete tasks within a set time limit to escape a themed scenario.",
  },
  {
    id: 6,
    ques: "Can I request a specific theme or genre?",
    ans: "A mobile escape room is a portable, immersive experience that can be set up in various locations. It challenges participants to solve puzzles and complete tasks within a set time limit to escape a themed scenario.",
  },
  {
    id: 7,
    ques: "Is the experience suitable for people with disabilities?",
    ans: "A mobile escape room is a portable, immersive experience that can be set up in various locations. It challenges participants to solve puzzles and complete tasks within a set time limit to escape a themed scenario.",
  },
];
const imgList = [
  {
    id: 1,
    url: "/assets/mobile-escape-room/gallery/allinadventures-mobile-escape-room-gallery-1.jpg",
    alt: "Allinadventures mobile escape room gallery 1",
  },
  {
    id: 2,
    url: "/assets/mobile-escape-room/gallery/allinadventures-mobile-escape-room-gallery-2.jpg",
    alt: "Allinadventures mobile escape room gallery 2",
  },
  {
    id: 3,
    url: "/assets/mobile-escape-room/gallery/allinadventures-mobile-escape-room-gallery-3.jpg",
    alt: "Allinadventures mobile escape room gallery 3",
  },
  {
    id: 4,
    url: "/assets/mobile-escape-room/gallery/allinadventures-mobile-escape-room-gallery-4.jpg",
    alt: "Allinadventures mobile escape room gallery 4",
  },
  {
    id: 5,
    url: "/assets/mobile-escape-room/gallery/allinadventures-mobile-escape-room-gallery-5.jpg",
    alt: "Allinadventures mobile escape room gallery 5",
  },
  {
    id: 6,
    url: "/assets/mobile-escape-room/gallery/allinadventures-mobile-escape-room-gallery-6.jpg",
    alt: "Allinadventures mobile escape room gallery 6",
  },
];
const MobileEscapeGamesHome = () => {
  return (
    <>
      <div className="mbl-h">
        <div className="mbl-h-container max-w-7xl mx-auto pt-16 md:pt-28 2xl:pt-32 px-4">
          <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center">
            <div className="mbl-col w-full lg:w-1/2 order-2 lg:order-1">
              {/* ==================section title=====================*/}
              <GameTitleSeparator title="EXPERIENCE OUR MOBILE ESCAPE ROOMS" />
              <div className="text-slate-100 md:text-lg mt-6">
                Our mobile escape room is an excellent choice for groups who
                want to enjoy a fun and interactive activity without having to
                leave their own location.
              </div>
              {/* ==================icon list=====================*/}
              <div className="text-slate-100 mbl-h-list mt-6">
                <div className="icon-row flex space-x-2 items-center">
                  <div className="w-[36px] md:w-[42px] ">
                    <img
                      className="w-full"
                      src="/assets/mobile-escape-room/icon/adventures.svg"
                    ></img>
                  </div>
                  <div className="md:text-lg flex-1">
                    Thrilling Adventures Delivered to Your Doorstep
                  </div>
                </div>
                <div className="icon-row flex space-x-2 items-center mt-4">
                  <div className="w-[36px] md:w-[42px] ">
                    <img
                      className="w-full"
                      src="/assets/mobile-escape-room/icon/team-building.svg"
                    ></img>
                  </div>
                  <div className="md:text-lg flex-1">
                    Perfect for Team-Building, Parties, and Special Events
                  </div>
                </div>
                <div className="icon-row flex space-x-2 items-center mt-4">
                  <div className="w-[36px] md:w-[42px] ">
                    <img
                      className="w-full"
                      src="/assets/mobile-escape-room/icon/puzzle.svg"
                    ></img>
                  </div>
                  <div className="md:text-lg flex-1">
                    Solve Challenging Puzzles Anywhere—Office, Classroom, or
                    Outdoors
                  </div>
                </div>
              </div>
              {/* ==================button=====================*/}
              <div className="mbl-h-btn flex space-x-2 justify-between md:justify-start md:space-x-6 mt-8">
                <a
                  href="#"
                  className="w-[48%] md:max-w-[220px] text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  INQUIRE NOW
                </a>
                <a
                  href="#"
                  className="w-[48%] md:max-w-[220px] text-center block border text-white border-red-600 bg-transparent py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="mbl-col w-full lg:w-1/2 order-1 lg:order-2 mb-6 md:mb-8 lg:mb-0">
              <div className="mbl-h-img">
                <img src="/assets/mobile-escape-room/allinadventures-mobile-escape-room.jpg"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="mbl-carousel pb-16 md:pb-28 2xl:pb-32  mt-6 md:mt-10 2xl:mt-12">
          <MobileEscapeHomeCarousel />
        </div>
      </div>
      {/*home hero*/}
      <MobileEscapeHero />
      <MobileEscapeGameSlider />
      <MobileEscapeEvents />
      <WhyChooseMobileEscape />
      <MobileEscapEx />
      <MobileEscapePricing />
      <MobileEscapeGallery imgList={imgList} />
      <MobileEscapeTestimonialSlider />
      <MobileEscapeFaqSection faqList={faqList} />
      <MobileEscapeContact />
    </>
  );
};

export default MobileEscapeGamesHome;
