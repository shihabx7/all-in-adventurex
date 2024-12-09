// pages/[locationSlug]/contact-store.js

import { getLocationSlugUrl } from "../../api/Locations/getLocationSlugUrls";
import { getLocationEvenstListPageData } from "../../api/DynamicLocations/getLocationEvenstListPageData";

import Script from "next/script";
import LocationNav from "../../../comps/locationsPage/LocationNav";
import LocationFooter from "../../../comps/locationsPage/LocationFooter";
import PageSeo from "../../../comps/util/PageSeo";
import DynamicPageBread from "../../../comps/util/DynamicPageBread";
import EventLocListHero from "../../../comps/eventPageComps/EventLocListHero";
import EventLocList from "../../../comps/eventPageComps/EventLocList";
import EventBookingSection from "../../../comps/eventPageComps/EventBookingSection";
import EventBookingPartySection from "../../../comps/eventPageComps/EventBookingPartySection";
import EventContact from "../../../comps/eventPageComps/EventContact";

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
        <EventLocListHero
          pageData={props.pageData}
          isPublished={props.isPublished}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
        />
        <EventLocList
          eventListData={props.eventListData}
          locationSlug={props.locationSlug}
          allBooking={props.allBooking}
        />

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
          locationName={props.locationName}
          locationInfo={props.locationInfo}
          businessHours={props.businessHours}
          holidayHours={props.holidayHours}
          eventFaq={props.eventFaq}
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
  const DATA = await getLocationEvenstListPageData(context.params.locationSlug);
  // console.log(context.params.activitiesSlug);
  //console.log("Location: " + context.params.locationSlug);
  // const DATA = await getLocationsContactPageData(context.params.locationSlug);
  //console.log(DATA);

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
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,

      allBooking: DATA.allBooking,
      escapeGamePartyList: DATA.partyBooking,
      eventBooking: DATA.eventBooking,
      businessHours: DATA.businessHours,
      holidayHours: DATA.holidayHours,
      eventListData: DATA.eventListData,
      hasMobileEscapeRoom: DATA.hasMobileEscapeRoom,
      giftBooking: DATA.giftBooking,
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
