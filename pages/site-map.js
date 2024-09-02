import { getSitemapData } from "./api/getSitemapData";
import PageSeo from "../comps/util/PageSeo";
import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";

import SiteMapHero from "../comps/siteMapsComps/SiteMapHero";
import StaticLinkLeft from "../comps/siteMapsComps/StaticLinkLeft";
import AllEscapeRoomsLink from "../comps/siteMapsComps/AllEscapeRoomsLink";
import AllOtherGamesLink from "../comps/siteMapsComps/AllOtherGamesLink";
import AllEventsLink from "../comps/siteMapsComps/AllEventsLink";
import AllLocationsLink from "../comps/siteMapsComps/AllLocationsLink";
import RightMenuLink from "../comps/siteMapsComps/RightMenuLink";

export default function Sitemap(props) {
  return (
    <>
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
      />

      <div id="mainContent" className="main-content bg-[#FFF7EA]">
        <SiteMapHero />
        <div className="max-w-[800px] mx-auto pt-2 pb-8 md:py-16 px-8 relative z-10">
          <StaticLinkLeft />
          <AllEscapeRoomsLink escapeGameSlugList={props.escapeGameSlugList} />
          <AllOtherGamesLink otherGameSlugList={props.otherGameSlugList} />
          <AllEventsLink eventSlugList={props.eventSlugList} />
          <AllLocationsLink siteMapLocationsList={props.siteMapLocationsList} />
          <RightMenuLink
            blogLinkList={props.blogLinkList}
            blogCategoryList={props.blogCategoryList}
            careersLinkList={props.careersLinkList}
          />
        </div>
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const DATA = await getSitemapData();
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
      siteMapLocationsList: DATA.siteMapLocationsList,
      blogLinkList: DATA.blogLinkList,
      blogCategoryList: DATA.blogCategoryList,
      careersLinkList: DATA.careersLinkList,
    },

    // - At most once every 10 seconds
    revalidate: 12,
  };
};
