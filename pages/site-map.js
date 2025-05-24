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
          <div>
            <ul className="site-map-link-group list-disc">
              <li className="my-2">
                <a
                  href={"/mobile-escape-room"}
                  className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
                >
                  Mobile Escape Room
                </a>
              </li>
            </ul>
          </div>
          <AllOtherGamesLink otherGameSlugList={props.otherGameSlugList} />
          <AllEventsLink eventSlugList={props.eventSlugList} />
          <AllLocationsLink siteMapLocationsList={props.siteMapLocationsList} />
          <div>
            <ul className="site-map-link-group list-disc">
              <li className="my-2">
                <a
                  href={"/buffalo-ny/activities/mobile-escape-room"}
                  className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
                >
                  Mobile Escape Room - Buffalo NY
                </a>
              </li>
              <li className="my-2">
                <a
                  href={"/rochester-ny/activities/mobile-escape-room"}
                  className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
                >
                  Mobile Escape Room - Rochester NY
                </a>
              </li>
              <li className="my-2">
                <a
                  href={"/winston-salem-nc/activities/mobile-escape-room"}
                  className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
                >
                  Mobile Escape Room - Winston-salem NC
                </a>
              </li>
              <li className="my-2">
                <a
                  href={"/greensboro-nc/activities/mobile-escape-room"}
                  className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
                >
                  Mobile Escape Room - Greensboro NC
                </a>
              </li>
            </ul>
          </div>
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
