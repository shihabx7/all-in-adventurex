import Footer from "../../../comps/Footer";
import Homenav from "../../../comps/Homenav";

import BreadcumNew from "../../../comps/util/BreadcumNew";
import { getSingleEventPageData } from "../../api/LocationIndData/getSingleEventPageData";
import { getLocationEventSlugList } from "../../api/LocationIndData/getLocationEventSlugList";
import EventLocHero from "../../../comps/eventPageComps/EventLocHero";
import EventDetails from "../../../comps/eventPageComps/EventDetails";
import EventContact from "../../../comps/eventPageComps/EventContact";

import Seofields from "../../../comps/util/SeoFields";
import BookYourEvent from "../../../comps/eventPageComps/BookYourEvent";
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
            <BookYourEvent
              bookingall={
                props.pagedata.bookingall ? props.pagedata.bookingall : false
              }
              eventbooking={
                props.pagedata.eventbooking
                  ? props.pagedata.eventbooking
                  : false
              }
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
        location="hadley, ma"
        locationlist={props.locationlist}
        totallocations={props.pagedata.totalLocations}
      />
    </>
  );
};

export default LocationSingleEvent;

export const getStaticPaths = async () => {
  const res = await getLocationEventSlugList("hadley-ma");

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
    "hadley-ma"
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
