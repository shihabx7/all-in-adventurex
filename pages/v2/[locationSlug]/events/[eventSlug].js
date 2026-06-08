import { fetchLocationEvents } from "../../../api/DynamicLocations/locationSlugUtil";
import { getLocationSlugUrl } from "../../../api/Locations/getLocationSlugUrls";
import getRootEventSlugs from "../../../api/v2/root/rootEventSlugs";
import { locationEventPageData } from "../../../api/v2/locations/locationEventPageData";

import Script from "next/script";

import LocationNav from "../../../../comps/locationsPage/LocationNav";
import LocationFooter from "../../../../comps/locationsPage/LocationFooter";
import PageSeo from "../../../../comps/util/PageSeo";
import DynamicPageBread from "../../../../comps/util/DynamicPageBread";

// ==================v2
import EventPageHero from "../../../../comps/v2/eventPage/sections/EventPageHero";
import EventHeroInfoBox from "../../../../comps/v2/eventPage/EventHeroInfoBox";
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
import OurFacilitiesSection from "../../../../comps/v2/eventPage/sections/OurFacilitiesSection";

//===================v1
import EventLocHero from "../../../../comps/eventPageComps/EventLocHero";
import EventLocDetails from "../../../../comps/eventPageComps/EventLocDetails";
import EventBookingSection from "../../../../comps/eventPageComps/EventBookingSection";
import EventBookingPartySection from "../../../../comps/eventPageComps/EventBookingPartySection";
import EventContact from "../../../../comps/eventPageComps/EventContact";
import EventReview from "../../../../comps/eventPageComps/EventReview";

const LocSingleEvent = (props) => {
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
        eventSlug={props.eventSlug}
        allBooking={props.allBooking}
        activeGameBooking={props.activeGameBooking}
        hasMobileEscapeRoom={props.hasMobileEscapeRoom}
        giftBooking={props.giftBooking}
      />
      <div id="mainContent" className="main-content">
        {/* =======header content and breadcum======== */}
        <DynamicPageBread
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          eventSlug={props.eventSlug}
          eventName={props.eventName}
        />

        {/* =======header content and======== end */}
        <EventPageHero
          pageHeroData={props.pageHeroData}
          locationSlug={props.locationSlug}
        />

        <OldPaperTextureBgSection>
          <div className="mt-[-104px] rm:mt-[-128px] md:mt-0 md:absolute w-full left-0 md:top-[-140px]  lg:top-[-130px]  xl:top-[-120px] z-30">
            <EventHeroInfoBox heroInfoList={props.pageHeroData.heroInfo} />
          </div>
          <EventDetailSection sectionData={props.eventDetailSectionData} />
          <PartyPackageSection sectionData={props.partyPackageSectionData} />
        </OldPaperTextureBgSection>
        <DarkBgKeyPatternBgSection>
          <MoreEscapeGameCarouselSection
            sectionData={props.escapescapeRoomCarouselSectionData}
          />
          <MobileEscapeGameRootHomeSection locationSlug={props.locationSlug} />
          <EscapeGameGallerySection sectionData={props.gallerySectionData} />
          <EventTestimonialCarouselSection
            sectionData={props.testimonialSectionData}
          />
        </DarkBgKeyPatternBgSection>
        <EventFaqSection sectionData={props.faqSectionData} />
        <OurFacilitiesSection
          sectionData={props.ourFacilitiesSectionData}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          mapInfo={props.mapInfo}
        />

        {/* ===========Page Content here=========*/}
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

export default LocSingleEvent;

export const getStaticPaths = async () => {
  //const locationSlugList = apiUrl + "locations?sort[0]=priority:asc";
  //const resLocations = await fetch(locationSlugList, apiSetting);
  //const locationsObj = await resLocations.json();
  // const locations = locationsObj.data;
  const locations = await getLocationSlugUrl();

  let paths = [];

  for (const location of locations) {
    const events = await getRootEventSlugs();
    const eventPaths = events.map((event) => ({
      params: {
        locationSlug: location.locationSlug,
        eventSlug: event.eventSlug,
      },
    }));
    paths = paths.concat(eventPaths);
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  /*let res = null;
  let errFlag = true;

  try {
    res = await getLocationEventPageData(
      context.params.locationSlug,
      context.params.eventSlug
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
  const DATA = await locationEventPageData(
    context.params.locationSlug,
    context.params.eventSlug
  );
  //  console.log(DATA.partyPackageSectionData);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      // locations info
      isPublished: DATA.isPublished,
      totalLocations: DATA.totalLocations,
      locationInfo: DATA.locationInfo,
      locationName: DATA.locationName,
      locationSlug: DATA.locationSlug,
      eventName: DATA.eventName,
      eventSlug: DATA.eventSlug,
      activeGameBooking: DATA.activeGameBooking,
      eventBooking: DATA.eventBooking,
      allBooking: DATA.allBooking,
      escapeGamePartyList: DATA.partyBooking,
      mapInfo: DATA.mapInfo,
      businessHours: DATA.businessHours,
      holidayHours: DATA.holidayHours,
      partyBooking: DATA.partyBooking,
      pageMeta: DATA.pageMeta,
      //==================v2
      pageHeroData: DATA.pageHeroData,
      partyPackageSectionData: DATA.partyPackageSectionData,
      eventDetailSectionData: DATA.eventDetailSectionData,
      escapescapeRoomCarouselSectionData:
        DATA.escapescapeRoomCarouselSectionData,
      gallerySectionData: DATA.gallerySectionData,
      testimonialSectionData: DATA.testimonialSectionData,
      faqSectionData: DATA.faqSectionData,
      ourFacilitiesSectionData: DATA.ourFacilitiesSectionData,
      //===============================v1
      pageData: DATA.pageData,
      eventDetaliData: DATA.eventDetaliData,
      eventTestimonialData: DATA.eventTestimonialData,
      giftBooking: DATA.giftBooking,
      hasMobileEscapeRoom: DATA.hasMobileEscapeRoom,
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
