import Footer from "../../../comps/Footer";
import Homenav from "../../../comps/Homenav";

import { getLocationIndActivityList } from "../../api/LocationIndData/getLocationIndActivityList";
import GameLocHero from "../../../comps/activitiyPageComps/GameLocHero";
import GameLocList from "../../../comps/activitiyPageComps/GameLocList";
import BreadcumNew from "../../../comps/util/BreadcumNew";
import Seofields from "../../../comps/util/SeoFields";

const LocActivity = (props) => {
  const getLoc = (slug) => {
    var locname = slug.split("-");
    var st = locname[locname.length - 1].toString();

    locname = locname.slice(0, -1);
    locname = locname.join(" ");
    return locname + ", " + st;
  };

  /* custom breadcum code */

  /* customizing breadcum */

  return (
    <>
      <Seofields meta={props.pagemeta} />
      <Homenav
        locationslug={props.pagedata.locationslug}
        bookingall={props.pagedata.bookingall}
        eventbooking={props.pagedata.eventbooking}
        location={getLoc(props.pagedata.locationslug)}
        activitylist={props.activitylistSlug}
        eventlist={props.eventlistSlug}
        locationlist={props.locationlist}
      />
      <div id="mainContent" className="main-content">
        {/* =======header content and breadcum======== */}

        <div className="breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]">
          <BreadcumNew />
        </div>

        {/* =======header content and breadcum======== end */}
        {/* ===========Page Content here========= */}
        <GameLocHero
          pagedata={props.pagedata}
          locdetail={props.pagedata.locdetail}
        />
        <GameLocList
          activitylist={props.activitylist}
          locationslug={props.pagedata.locationslug}
          bookingdata={props.bookingdata}
        />
      </div>

      <Footer
        location={getLoc(props.pagedata.locationslug)}
        locationlist={props.locationlist}
        totallocations={props.pagedata.totalLocations}
      />
    </>
  );
};

export default LocActivity;

export const getStaticProps = async (context) => {
  const locationHomedata = getLocationIndActivityList("hadley-ma");

  return {
    props: {
      pagedata: locationHomedata.pagedata,
      pagemeta: locationHomedata.pagemeta,
      activitylist: locationHomedata.activity_list,
      bookingdata: locationHomedata.bookingdata,
      activitylistSlug: locationHomedata.activitylist,
      eventlistSlug: locationHomedata.eventslist,
      locationlist: locationHomedata.locationlist,
    },
    revalidate: 30,
  };
};
