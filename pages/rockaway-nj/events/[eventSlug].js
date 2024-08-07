import Footer from "../../../comps/Footer";
import Homenav from "../../../comps/Homenav";

import BreadcumNew from "../../../comps/util/BreadcumNew";
import { getSingleEventPageData } from "../../api/LocationIndData/getSingleEventPageData";
import { getLocationEventSlugList } from "../../api/LocationIndData/getLocationEventSlugList";
import EventLocHero from "../../../comps/eventPageComps/EventLocHero";
import EventDetails from "../../../comps/eventPageComps/EventDetails";
import EventContact from "../../../comps/eventPageComps/EventContact";
import HomeReviewSlider from "../../../comps/homepagecomps/HomeReviewSlider";
import Seofields from "../../../comps/util/SeoFields";
import BookYourEvent from "../../../comps/eventPageComps/BookYourEvent";
import BookYourEvent3 from "../../../comps/eventPageComps/BookYourEvent3";
import EventReview from "../../../comps/eventPageComps/EventReview";
import EventRootReview from "../../../comps/eventPageComps/EventRootReview";
const LocationSingleEvent = (props) => {
  return (
    <>
      <Seofields meta={props.pagemeta} />
      <Homenav
        locationslug={props.pagedata.locationslug}
        eventslug={props.pagedata.event_slug}
        bookingall={props.pagedata.bookingall}
        eventbooking={props.pagedata.eventbooking}
        location={props.pagedata.location_serach_name}
        activitylist={props.activitylist}
        eventlist={props.eventlist}
        locationlist={props.locationlist}
        publish_status={props.pagedata.publish_status}
      />
      <div id="mainContent" className="main-content">
        {/* =======header content and breadcum======== */}

        <div className="breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]">
          <BreadcumNew
            gameslug={props.pagedata.slug}
            locationslug={props.pagedata.locationslug}
            pagetype={"events"}
          />
        </div>
        <div className="text-red">{props.slug}</div>
        {/* =======header content and breadcum======== end */}
        {/* ===========Page Content here========= */}
        <EventLocHero
          pagedata={props.pagedata}
          eventbooking={props.pagedata.eventbooking}
          locdetail={props.pagedata.locdetail}
        />
        <EventDetails
          eventdata={props.eventdata}
          eventname={props.pagedata.eventname}
          eventbooking={props.pagedata.eventbooking}
          bookingall={props.pagedata.bookingall}
        />
        {props.pagedata.event_slug != "date-night" && (
          <>
            <BookYourEvent3
              publish_status={props.pagedata.publish_status}
              bookingall={
                props.pagedata.bookingall ? props.pagedata.bookingall : false
              }
              eventbooking={
                props.pagedata.eventbooking
                  ? props.pagedata.eventbooking
                  : false
              }
              escapeGamePartyList={[
                {
                  partyName: "Escape From Alcatraz",
                  slideText:
                    "Our Party Package offers an exciting Escape From Alcatraz escape room experience for up to 12 guests for one hour plus a two-hour rental of the party room. We'll provide basic supplies like plates, napkins, and utensils. Plus, you'll receive free digital All In Adventures birthday invitations that you can print.",

                  sliderImage: {
                    url: "/assets/events/all-in-adventures-book-your-event-option1.jpg",
                    alt: "book your adventure",
                    width: "800",
                    height: "460",
                  },
                  bookingData: {
                    shortName: "mysteryroom-rockaway",
                    flow: "663016",
                    item: "559986",
                  },
                },
                {
                  partyName: "Zombie Apocalypse",
                  slideText:
                    "Our Party Package offers an exciting Zombie Apocalypse escape room experience for up to 8 guests for one hour plus a two-hour rental of the party room. We'll provide basic supplies like plates, napkins, and utensils. Plus, you'll receive free digital All In Adventures birthday invitations that you can print.",

                  sliderImage: {
                    url: "/assets/events/all-in-adventures-book-your-event-option2.jpg",
                    alt: "book your adventure",
                    width: "800",
                    height: "460",
                  },
                  bookingData: {
                    shortName: "mysteryroom-rockaway",
                    flow: "663016",
                    item: "560026",
                  },
                },
                {
                  partyName: "Treasure Island",
                  slideText:
                    "Our Party Package offers an exciting Treasure Island escape room experience for up to 8 guests for one hour plus a two-hour rental of the party room. We'll provide basic supplies like plates, napkins, and utensils. Plus, you'll receive free digital All In Adventures birthday invitations that you can print.",

                  sliderImage: {
                    url: "/assets/events/all-in-adventures-book-your-event-option3.jpg",
                    alt: "book your adventure",
                    width: "800",
                    height: "460",
                  },
                  bookingData: {
                    shortName: "mysteryroom-rockaway",
                    flow: "663016",
                    item: "559997",
                  },
                },
              ]}
            />
            <EventContact
              contactdata={props.contactdata}
              eventname={props.pagedata.event_name}
              eventslug={props.pagedata.event_slug}
              locationlist={props.locationlist}
              eventlist={props.eventlist}
              eventFaq={props.eventFaq}
            />
          </>
        )}
        {props.pagedata.event_slug != "date-night" ? (
          <EventReview reviews={props.reviews} />
        ) : (
          <EventRootReview reviews={props.reviews} />
        )}
      </div>

      <Footer
        location="rockaway, nj"
        locationlist={props.locationlist}
        totallocations={props.pagedata.totalLocations}
      />
    </>
  );
};

export default LocationSingleEvent;

export const getStaticPaths = async () => {
  const res = await getLocationEventSlugList("rockaway-nj");

  const paths = res.map((eventSlug) => {
    return {
      params: { eventSlug: eventSlug.event_slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const eventsingleData = getSingleEventPageData(
    context.params.eventSlug,
    "rockaway-nj"
  );

  return {
    props: {
      pagedata: eventsingleData.pagedata,
      pagemeta: eventsingleData.pagemeta,
      eventdata: eventsingleData.eventdata,
      reviews: eventsingleData.reviews,
      contactdata: eventsingleData.contactdata,
      activitylist: eventsingleData.activitylist,
      eventlist: eventsingleData.eventlist,
      locationlist: eventsingleData.locationlist,
      eventFaq: eventsingleData.event_faq,
    },
    revalidate: 30,
  };
};
