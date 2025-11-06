
import { newUpdateData } from "../../lib/tempData/mobileEscapeTempData";
import OtherPageGameCarouselSection from "../homepagecomps/OtherPageGameCarouselSection";
import { perfectSectionData } from "../../lib/tempData/mobileEscapeTempData";

import PageHeroVideoBgMm from "./section/PageHeroVideoBgMm";
import MobileMystreyGameListSection from "./section/MobileMystreyGameListSection";
import AboutSectionMm from "./section/AboutSectionMm";
import PerfectForGroupSectionMm from "./section/PerfectForGroupSectionMm";
import VideoSectionMm from "./section/VideoSectionMm";
import GallerySectionMm from "./section/GallerySectionMm";
import TestimonialCarouselSectionMm from "./section/TestimonialCarouselSectionMm";
import FaqSectionMm from "./section/FaqSectionMm";
import ContactSectionMm from "./section/ContactSectionMm";

const MobileEscapeGamePageUI = (props) => {
  return (
    <>
      {/*home hero*/}
      {props.mobileEscapeRoomPageData.pageHero &&
        props.mobileEscapeRoomPageData.pageHero !== null && (
          <>
            <PageHeroVideoBgMm
              locationName={props.locationName ? props.locationName : false}
              locationSlug={props.locationSlug ? props.locationSlug : false}
              isSubStore={props.isSubStore ? props.isSubStore : false}
              setShowMobileEecapeMenu={
                props.setShowMobileEecapeMenu
                  ? props.setShowMobileEecapeMenu
                  : false
              }
              setGoMobileEecapeForm={
                props.setGoMobileEecapeForm
                  ? props.setGoMobileEecapeForm
                  : false
              }
            />
          </>
        )}
      <MobileMystreyGameListSection
        locationName={props.locationName ? props.locationName : false}
        locationSlug={props.locationSlug ? props.locationSlug : false}
        setShowMobileEecapeMenu={
          props.setShowMobileEecapeMenu ? props.setShowMobileEecapeMenu : false
        }
        setGoMobileEecapeForm={
          props.setGoMobileEecapeForm ? props.setGoMobileEecapeForm : false
        }
      />

      <AboutSectionMm
        locationName={props.locationName ? props.locationName : false}
        locationSlug={props.locationSlug ? props.locationSlug : false}
        setShowMobileEecapeMenu={
          props.setShowMobileEecapeMenu ? props.setShowMobileEecapeMenu : false
        }
        setGoMobileEecapeForm={
          props.setGoMobileEecapeForm ? props.setGoMobileEecapeForm : false
        }
      />

      <PerfectForGroupSectionMm sectionData={perfectSectionData} locationName={props.locationName ? props.locationName : false} />
      <VideoSectionMm sectionData={newUpdateData.gallerySectionData} />
      <GallerySectionMm
        sectionData={newUpdateData.gallerySectionData}
        locationSlug={props.locationSlug ? props.locationSlug : false}
        setShowMobileEecapeMenu={
          props.setShowMobileEecapeMenu ? props.setShowMobileEecapeMenu : false
        }
        setGoMobileEecapeForm={
          props.setGoMobileEecapeForm ? props.setGoMobileEecapeForm : false
        }
      />
      <TestimonialCarouselSectionMm />

      {props.escapeGameCarouselSectionData && (
        <OtherPageGameCarouselSection
          sectionData={props.escapeGameCarouselSectionData}
          locationName={props.locationName ? props.locationName : false}
          locationSlug={props.locationSlug ? props.locationSlug : false}
          locationInfo={props.locationInfo ? props.locationInfo : false}
        />
      )}
      <FaqSectionMm
        faqSectionData={props.mobileEscapeRoomPageData.faqSectionData}
        locationName={props.locationName ? props.locationName : false}
      />
      
  <ContactSectionMm
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
      {/** ==section============ old design======================= 3 
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
      */}
    </>
  );
};

export default MobileEscapeGamePageUI;
