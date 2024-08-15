import { fetchLocationEvents } from "../../api/DynamicLocations/locationSlugUtil";
import { getLocationSlugUrl } from "../../api/Locations/getLocationSlugUrls";
import { getLocationEventPageData } from "../../api/DynamicLocations/getLocationEventPageData";
import Script from "next/script";

import LocationNav from "../../../comps/locationsPage/LocationNav";
import LocationFooter from "../../../comps/locationsPage/LocationFooter";
import PageSeo from "../../../comps/util/PageSeo";
import DynamicPageBread from "../../../comps/util/DynamicPageBread";
import EventLocHero from "../../../comps/eventPageComps/EventLocHero";
import EventLocDetails from "../../../comps/eventPageComps/EventLocDetails";
import EventBookingSection from "../../../comps/eventPageComps/EventBookingSection";
import EventBookingPartySection from "../../../comps/eventPageComps/EventBookingPartySection";
import EventContact from "../../../comps/eventPageComps/EventContact";
import EventReview from "../../../comps/eventPageComps/EventReview";

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
      />
      <div id="mainContent" className="main-content">
        {/* =======header content and breadcum======== */}
        <DynamicPageBread
          locationName={props.locationName}
          locationSlug={props.locationSlug}
          eventSlug={props.eventSlug}
          eventName={props.eventName}
        />
        <EventLocHero
          pageData={props.pageData}
          isPublished={props.isPublished}
          locationInfo={props.locationInfo}
          activeGameBooking={props.activeGameBooking}
          allBooking={props.allBooking}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
        />
        <EventLocDetails
          eventDetaliData={props.eventDetaliData}
          activeGameBooking={props.activeGameBooking}
          allBooking={props.allBooking}
        />
        {!props.activeGameBooking ? (
          <>
            {props.escapeGamePartyList.length > 0 ? (
              <EventBookingPartySection
                isPublished={props.isPublished}
                allBooking={props.allBooking}
                eventBooking={props.eventBooking}
                escapeGamePartyList={props.escapeGamePartyList}
              />
            ) : (
              <EventBookingSection
                isPublished={props.isPublished}
                allBooking={props.allBooking}
                eventBooking={props.eventBooking}
              />
            )}
            <EventContact
              locationInfo={props.locationInfo}
              businessHours={props.businessHours}
              holidayHours={props.holidayHours}
              eventFaq={props.eventFaq}
            />
          </>
        ) : (
          <>
            <EventReview testimonialData={props.eventTestimonialData} />
          </>
        )}
        {/* =======header content and breadcum======== end */}
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
    const events = await fetchLocationEvents(location.locationSlug);
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
  const DATA = await getLocationEventPageData(
    context.params.locationSlug,
    context.params.eventSlug
  );
  //console.log(DATA);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
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
      businessHours: DATA.businessHours,
      holidayHours: DATA.holidayHours,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      eventDetaliData: DATA.eventDetaliData,
      eventTestimonialData: DATA.eventTestimonialData,
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
    revalidate: 30,
  };
};
