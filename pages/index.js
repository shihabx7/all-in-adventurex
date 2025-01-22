import { getHomePageData } from "./api/getHomePageData";
import PageSeo from "../comps/util/PageSeo";
import SinglePageSeo from "../comps/util/SinglePageSeo";

import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import { useState } from "react";
import HomeHero from "../comps/homepagecomps/HomeHero";
import HomeHeroNew from "../comps/homepagecomps/HomeHeroNew";
import PageVideoHome from "../comps/homepagecomps/PageVideoHome";
import EscaeGameSlider from "../comps/homepagecomps/EscaeGameSlider";
import OtherGameSlider from "../comps/homepagecomps/OtherGameSlider";
import EventSlider from "../comps/homepagecomps/EventSlider";
import GiftCards from "../comps/homepagecomps/GiftCards";
import WhatIsEscape from "../comps/homepagecomps/WhatIsEscape";
import WhoCanplay from "../comps/homepagecomps/WhoCanPlay";
import TestimonialSlider from "../comps/homepagecomps/TestimonialSlider";
import UnlimitedEscapeRoomHome from "../comps/unlimitedEscapeRoom/UnlimitedEscapeRoomHome";
import UnlimitedEscapeGameMenu from "../comps/unlimitedEscapeRoom/unlimitedEscapeGameMenu";

export default function Home(props) {
  const [showUerBookingList, setShowUerBookingList] = useState(false);
  return (
    <>
      {showUerBookingList && (
        <div className="uermenu">
          <UnlimitedEscapeGameMenu
            locationSlugList={props.locationSlugList}
            setShowUerBookingList={setShowUerBookingList}
          />
        </div>
      )}
      <SinglePageSeo meta={props.pageMeta} />
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
      />

      <div id="mainContent" className="main-content">
        <HomeHeroNew pageData={props.pageData} />
        <PageVideoHome pageVideo={props.pageVideo} />
        <EscaeGameSlider escapeGameList={props.escapeGameList} />
        {props.otherGameList.hasGames ? (
          <OtherGameSlider otherGameList={props.otherGameList} />
        ) : (
          <></>
        )}
        {
          <UnlimitedEscapeRoomHome
            setShowUerBookingList={setShowUerBookingList}
          />
        }
        <EventSlider eventList={props.eventList} />
        <GiftCards locationSlugList={props.locationSlugList} />
        <WhatIsEscape />
        <WhoCanplay />
        <TestimonialSlider testimonialList={props.testimonialList} />
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const DATA = await getHomePageData();
  //console.log(data);
  return {
    props: {
      // locationlist: DATA.locationlist,
      // eventlistSlug: DATA.eventlistSlug,
      // activitylistSlug: DATA.activitylistSlug,
      totalLocations: DATA.totalLocations,
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      pageVideo: DATA.pageVideo,
      escapeGameList: DATA.escapeGameList,
      otherGameList: DATA.otherGameList,
      eventList: DATA.eventList,
      testimonialList: DATA.testimonialList,
    },

    // - At most once every 10 seconds
    revalidate: 12,
  };
};
