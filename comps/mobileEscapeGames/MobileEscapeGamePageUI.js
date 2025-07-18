import { newUpdateData } from "../../lib/tempData/mobileEscapeTempData";
import PageVideoBgHero from "./PageVideoBgHero";
import MobileEscapeGameCarouselSection from "./MobileEscapeGameCarouselSection";
import MobileEscapeTestimonialSlider from "./MobileEscapeTestimonialSlider";
import MobileEscapeFaqSection from "./MobileEscapeFaqSection";
import MobileEscapeContact from "./MobileEscapeContact";

import MobileEscapeExperience from "./MobileEscapeExperience";
import MobileEscapeGallery from "./MobileEscapeGallery";
import PerfectForGroupSection from "./PerfectForGroupSection";
import MobileEscapePricing from "./MobileEscapePricing";
import OtherPageGameCarouselSection from "../homepagecomps/OtherPageGameCarouselSection";
import { perfectSectionData } from "../../lib/tempData/mobileEscapeTempData";
import HeroInfoCard from "./HeroInfoCard";

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
const MobileEscapeGamePageUI = (props) => {
  return (
    <>
      {/*home hero*/}

      {props.mobileEscapeRoomPageData.pageHero !== null ? (
        <PageVideoBgHero
          pageHero={props.mobileEscapeRoomPageData.pageHero}
          locationName={props.locationName ? props.locationName : false}
          locationSlug={props.locationSlug ? props.locationSlug : false}
          setShowMobileEecapeMenu={
            props.setShowMobileEecapeMenu
              ? props.setShowMobileEecapeMenu
              : false
          }
          setGoMobileEecapeForm={
            props.setGoMobileEecapeForm ? props.setGoMobileEecapeForm : false
          }
          goMobileEecapeForm={
            props.goMobileEecapeForm ? props.goMobileEecapeForm : false
          }
        />
      ) : (
        <></>
      )}
      {/** ==  <MobileEscapePricing
        pricingSectionData={props.mobileEscapeRoomPageData.pricingSectionData}
        locationName={props.locationName ? props.locationName : false}
        locationInfo={props.locationInfo ? props.locationInfo : false}
      />*/}

      <HeroInfoCard
        locationName={props.locationName ? props.locationName : false}
      />
      {props.mobileEscapeRoomPageData.gameCarouselSectionData !== null ? (
        <MobileEscapeGameCarouselSection
          gameCarouselSectionData={
            props.mobileEscapeRoomPageData.gameCarouselSectionData
          }
          locationName={props.locationName ? props.locationName : false}
          locationSlug={props.locationSlug ? props.locationSlug : false}
          setShowMobileEecapeMenu={
            props.setShowMobileEecapeMenu
              ? props.setShowMobileEecapeMenu
              : false
          }
          setGoMobileEecapeForm={
            props.setGoMobileEecapeForm ? props.setGoMobileEecapeForm : false
          }
          goMobileEecapeForm={
            props.goMobileEecapeForm ? props.goMobileEecapeForm : false
          }
        />
      ) : (
        <></>
      )}
      {props.mobileEscapeRoomPageData.experienceSectionData !== null ? (
        <MobileEscapeExperience
          experienceSectionData={
            props.mobileEscapeRoomPageData.experienceSectionData
          }
          locationName={props.locationName ? props.locationName : false}
          locationSlug={props.locationSlug ? props.locationSlug : false}
          setShowMobileEecapeMenu={
            props.setShowMobileEecapeMenu
              ? props.setShowMobileEecapeMenu
              : false
          }
          setGoMobileEecapeForm={
            props.setGoMobileEecapeForm ? props.setGoMobileEecapeForm : false
          }
          goMobileEecapeForm={
            props.goMobileEecapeForm ? props.goMobileEecapeForm : false
          }
        />
      ) : (
        <></>
      )}
      <PerfectForGroupSection sectionData={perfectSectionData} />
      <MobileEscapeGallery sectionData={newUpdateData.gallerySectionData} />
      {props.mobileEscapeRoomPageData.testimonialSectionData !== null ? (
        <MobileEscapeTestimonialSlider
          testimonialSectionData={
            props.mobileEscapeRoomPageData.testimonialSectionData
          }
          locationName={props.locationName ? props.locationName : false}
        />
      ) : (
        <></>
      )}
      {props.mobileEscapeRoomPageData.faqSectionData !== null ? (
        <MobileEscapeFaqSection
          faqSectionData={props.mobileEscapeRoomPageData.faqSectionData}
          faqList={faqList}
          locationName={props.locationName ? props.locationName : false}
        />
      ) : (
        <></>
      )}
      {props.mobileEscapeRoomPageData.contactSectionData !== null ? (
        <MobileEscapeContact
          locationInfo={props.locationInfo ? props.locationInfo : false}
          contactSectionData={props.mobileEscapeRoomPageData.contactSectionData}
          locationName={props.locationName ? props.locationName : false}
          locationSlug={props.locationSlug ? props.locationSlug : false}
          setShowMobileEecapeMenu={
            props.setShowMobileEecapeMenu
              ? props.setShowMobileEecapeMenu
              : false
          }
          setGoMobileEecapeForm={
            props.setGoMobileEecapeForm ? props.setGoMobileEecapeForm : false
          }
          goMobileEecapeForm={
            props.goMobileEecapeForm ? props.goMobileEecapeForm : false
          }
        />
      ) : (
        <></>
      )}
      {props.escapeGameCarouselSectionData && (
        <OtherPageGameCarouselSection
          sectionData={props.escapeGameCarouselSectionData}
          locationName={props.locationName ? props.locationName : false}
          locationSlug={props.locationSlug ? props.locationSlug : false}
          locationInfo={props.locationInfo ? props.locationInfo : false}
        />
      )}

      {/** ==section============ old design======================= 3 
      {props.mobileEscapeRoomPageData.eventSectionData !== null ? (
        <MobileEscapeEvents
          eventSectionData={props.mobileEscapeRoomPageData.eventSectionData}
          locationName={props.locationName}
        />
      ) : (
        <></>
      )}
     
      {props.mobileEscapeRoomPageData.offerSectionData !== null ? (
        <WhyChooseMobileEscape
          offerSectionData={props.mobileEscapeRoomPageData.offerSectionData}
          locationName={props.locationName}
        />
      ) : (
        <></>
      )}
      

      {props.mobileEscapeRoomPageData.gallerySectionData !== null ? (
        <MobileEscapeGallery
          gallerySectionData={props.mobileEscapeRoomPageData.gallerySectionData}
          imgList={imgList}
          locationName={props.locationName}
        />
      ) : (
        <></>
      )}
      */}
    </>
  );
};

export default MobileEscapeGamePageUI;
