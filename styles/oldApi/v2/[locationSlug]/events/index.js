// pages/[locationSlug]/contact-store.js

import { getLocationSlugUrl } from "../../../api/Locations/getLocationSlugUrls";
import { locationEvenstListPageData } from "../../../api/v2/locations/locationEventListPageData";
import { getLocationEvenstListPageData } from "../../../api/DynamicLocations/getLocationEvenstListPageData";

import Script from "next/script";
import LocationNav from "../../../../comps/locationsPage/LocationNav";
import LocationFooter from "../../../../comps/locationsPage/LocationFooter";
import PageSeo from "../../../../comps/util/PageSeo";
import DynamicPageBread from "../../../../comps/util/DynamicPageBread";
import EventLocListHero from "../../../../comps/eventPageComps/EventLocListHero";
//=======================v2
import EventPageHero from "../../../../comps/v2/eventPage/sections/EventPageHero";

import EventHeroInfoBox from "../../../../comps/v2/eventPage/EventHeroInfoBox";
import EventListSection from "../../../../comps/v2/eventPage/sections/EventListSection";
import EventDetailSection from "../../../../comps/v2/eventPage/sections/EventDetailSection";
import PartyPackageSection from "../../../../comps/v2/eventPage/sections/PartyPackageSection";
import MoreEscapeGameCarouselSection from "../../../../comps/v2/escapeGamePage/sections/MoreEscapeGameCarouselSection";
import EscapeGameGallerySection from "../../../../comps/v2/escapeGamePage/sections/EscapeGameGallerySection";
import EventTestimonialCarouselSection from "../../../../comps/v2/eventPage/sections/EventTestimonialCarouselSection";

import OldPaperTextureBgSection from "../../../../comps/v2/sharedComs/OldPaperTextureBgSection";
import DarkBgKeyPatternBgSection from "../../../../comps/v2/sharedComs/DarkBgKeyPatternBgSection";
import MobileEscapeRootMenu from "../../../../comps/mobileEscapeGames/MobileEscapeRootMenu";
import MobileEscapeGameRootHomeSection from "../../../../comps/mobileEscapeGames/MobileEscapeGameRootHomeSection";
import EventFaqSection from "../../../../comps/v2/eventPage/sections/EventFaqSection";
//======================v1
//import EventLocList from "../../../../../comps/eventPageComps/EventLocList";
//import EventBookingSection from "../../../../../comps/eventPageComps/EventBookingSection";
//import EventBookingPartySection from "../../../../comps/eventPageComps/EventBookingPartySection";
//import EventContact from "../../../../../comps/eventPageComps/EventContact";

const LocationEvents = (props) => {
  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      <PageSeo meta={props.pageMeta} />
      <LocationNav
        isPublished={props.isPublished}
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
        locationName={props.locationName}
        locationSlug={props.locationSlug}
        allBooking={props.allBooking}
        hasMobileEscapeRoom={props.hasMobileEscapeRoom}
        giftBooking={props.giftBooking}
      />
      <div id="mainContent" className="main-content">
        <DynamicPageBread
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          activeSlug="events"
          activeLabel="Events"
        />
        <EventPageHero
          pageHeroData={props.pageHeroData}
          locationSlug={props.locationSlug}
        />
        <OldPaperTextureBgSection>
          <div className="mt-[-104px] rm:mt-[-128px] md:mt-0 md:absolute w-full left-0 md:top-[-140px]  lg:top-[-130px]  xl:top-[-120px] z-30">
            <EventHeroInfoBox heroInfoList={props.pageHeroData.heroInfo} />
          </div>
          <EventListSection
            sectionData={props.eventListSectionData}
            locationSlug={props.locationSlug}
          />
        </OldPaperTextureBgSection>
        <DarkBgKeyPatternBgSection>
          <MoreEscapeGameCarouselSection
            sectionData={props.escapeRoomCarouselSectionData}
            locationSlug={props.locationSlug}
          />
          <MobileEscapeGameRootHomeSection locationSlug={props.locationSlug} />
          <EscapeGameGallerySection
            sectionData={props.gallerySectionData}
            locationSlug={props.locationSlug}
          />
          <EventTestimonialCarouselSection
            sectionData={props.testimonialSectionData}
            locationSlug={props.locationSlug}
          />
        </DarkBgKeyPatternBgSection>
        <EventFaqSection
          sectionData={props.faqSectionData}
          locationSlug={props.locationSlug}
        />
      </div>
      <LocationFooter
        locationName={props.locationName}
        locationSlug={props.locationSlug}
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await getLocationSlugUrl();

  const paths = res.map((slug) => {
    return {
      params: { locationSlug: slug.locationSlug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  /* let res = null;
  let errFlag = true;

  try {
    res = await await getLocationEvenstListPageData(
      context.params.locationSlug
    );
  } catch (error) {
    console.log("reponse err. page not found");
    errFlag = false;
  }
  if (!errFlag) {
    return {
      redirect: {
        permanent: false, // or true
        destination: "/404",
      },
    };
  }
  const DATA = res;*/
  const DATA = await locationEvenstListPageData(context.params.locationSlug);
  console.log(DATA.pageHeroData);
  //  console.log("Location: " + context.params.locationSlug);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,

      locationName: DATA.locationName,
      locationSlug: DATA.locationSlug,
      isPublished: DATA.isPublished,
      totalLocations: DATA.totalLocations,
      locationInfo: DATA.locationInfo,
      allBooking: DATA.allBooking,
      escapeGamePartyList: DATA.partyBooking,
      eventBooking: DATA.eventBooking,
      businessHours: DATA.businessHours,
      holidayHours: DATA.holidayHours,
      hasMobileEscapeRoom: DATA.hasMobileEscapeRoom,
      giftBooking: DATA.giftBooking,
      pageMeta: DATA.pageMeta,
      //============v2
      pageHeroData: DATA.pageHeroData,
      eventListSectionData: DATA.eventListSectionData,
      // partyPackageSectionData: DATA.partyPackageSectionData,
      escapeRoomCarouselSectionData: DATA.escapeRoomCarouselSectionData,
      gallerySectionData: DATA.gallerySectionData,
      testimonialSectionData: DATA.testimonialSectionData,
      faqSectionData: DATA.faqSectionData,
      //============v1
      pageData: DATA.pageData,

      eventListData: DATA.eventListData,

      eventFaq: [
        {
          id: 1,
          group: "event",
          category: "event",
          ques: "Can you accommodate large events?",
          ans: [
            "Absolutely! We love hosting large parties and corporate events. While we may not be able to accommodate your entire group into one room, we can set your group up into multiple teams to start all at the same time. Full facility capacity varies, but we have successfully hosted groups as large as several hundred people!",
          ],
        },
        {
          id: 2,
          group: "event",
          category: "event",
          ques: "How much does an escape room cost?",
          ans: [
            "Our escape room pricing starts at $26.99/person (plus tax and fees in those states that it applies) for one escape room experience when you have a group of 7 or more people. Children 6 and under are free with a paying adult. To learn more about our detailed pricing <a class='text-red-600 hover:text-red-700' href='/pricing'>Click Here</a>.",
          ],
        },
        {
          id: 3,
          group: "event",
          category: "event",
          ques: "How long is a party?",
          ans: [
            "A typical party can last anywhere between 2-3 hours. We are flexible to tailor the experience for any duration and budget that fits your needs.",
          ],
        },
        {
          id: 4,
          group: "event",
          category: "event",
          ques: "Can I bring my own food?",
          ans: [
            "We offer our standard pizza package option and can also offer a custom sandwich platter package or catering option in our separate party room for your party to enjoy after their escape room experience.",
            "<p class='mt-2 md:mt-3'>Guests are permitted to bring their own store-bought or commercially prepared foods with the rental of the party room. Please contact us for more information.</p>",
          ],
        },
      ],
    },
    revalidate: 12,
  };
};

export default LocationEvents;
