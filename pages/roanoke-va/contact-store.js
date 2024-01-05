import Footer from "../../comps/Footer";
import Homenav from "../../comps/Homenav";
import BreadcumNew from "../../comps/util/BreadcumNew";

import { getLocationIndContactPageData } from "../api/LocationIndData/getLocationIndContactPageData";
import ContactLocHero from "../../comps/activitiyPageComps/ContactLocHero";
import StoreContact from "../../comps/contactComps/StoreContact";
import Seofields from "../../comps/util/SeoFields";

const ViewContactStore = (props) => {
  const getLoc = (slug) => {
    var locname = slug.split("-");
    var st = locname[locname.length - 1].toString();

    locname = locname.slice(0, -1);
    locname = locname.join(" ");
    return locname + ", " + st;
  };

  return (
    <>
      <Seofields meta={props.pagemeta} />
      <Homenav
        locationslug={props.pagedata.locationslug}
        location={getLoc(props.pagedata.locationslug)}
        bookingall={props.pagedata.bookingall}
        eventbooking={props.pagedata.eventbooking}
        activitylist={props.activitylist}
        eventlist={props.eventlist}
        locationlist={props.locationlist}
        publish_status={props.pagedata.publish_status}
      />
      <div id="mainContent" className="main-content">
        {/* =======header content and breadcum======== */}

        <div className="breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]">
          <BreadcumNew />
        </div>

        {/* =======header content and breadcum======== end */}
        {/* ===========Page Content here=========*/}
        <ContactLocHero pagedata={props.pagedata} gametotal="not" />
        <StoreContact contactdata={props.contactdata} />
      </div>

      <Footer
        location={getLoc(props.pagedata.locationslug)}
        locationlist={props.locationlist}
        totallocations={props.totalLocations}
      />
    </>
  );
};

export default ViewContactStore;

export const getStaticProps = async () => {
  const locationContactdata = getLocationIndContactPageData("roanoke-va");

  return {
    props: {
      pagedata: locationContactdata.pagedata,
      pagemeta: locationContactdata.pagemeta,
      contactdata: locationContactdata.contactdata,
      activitylist: locationContactdata.activitylist,
      eventlist: locationContactdata.eventlist,
      locationlist: locationContactdata.locationlist,
      totalLocations: locationContactdata.totalLocations,
    },
    revalidate: 30,
  };
};
