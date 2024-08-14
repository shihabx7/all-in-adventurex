import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
import { getGalleryPageData } from "./api/getGalleryPageData";
import GameHomeHero from "../comps/activitiyPageComps/GameHomeHero";
import TitleSeparator from "../comps/util/TitleSeparator";
import MainGallery from "../comps/util/MainGallery";

import PageLink from "../comps/util/PageLink";

import Seofields from "../comps/util/SeoFields";

const gallery = (props) => {
  const toTitleCase = (title) => {
    const titlefres = title.replace(/-/g, " ");
    const btitle = titlefres
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" "); // breadcum title capitalize

    return (
      <div className="bitem flex items-center">
        <span>{btitle}</span>{" "}
        <span className="bsep text-gold">
          <FiChevronRight />
        </span>
      </div>
    );
  };
  /* customizing breadcum */

  return (
    <>
      {/* =======header content======== */}
      <Seofields meta={props.pagemeta} />
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
      />
      {/* =======header content ======== end */}

      {/* =========================================================================================main content ======== end */}
      <div
        id="mainContent"
        className="main-content nobtn-main-content bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]"
      >
        {/* =======breadcum content and breadcum========  */}
        <div className="breadcums  py-1 md:py-2 bg-[#fffceb]">
          <Breadcrumbs
            replaceCharacterList={[{ from: "-", to: " " }]}
            listClassName="max-w-7xl mx-auto px-2 md:px-4 breadcum-list text-sm md:text-base lg:text-lg"
            inactiveItemClassName="inline-block text-[#6a6a6a] hover:text-red-700"
            activeItemClassName="inline-block text-[#212121]"
            rootLabel="home"
            transformLabel={(title) => {
              return toTitleCase(title);
            }}
          ></Breadcrumbs>
        </div>
        {/* =======breadcum content and breadcum root page template======== end */}
        <GameHomeHero gametotal="not" pagedata={props.pagedata} />

        <div className="gallery-section py-16 md:py-20 lg:py-28 relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
          {/*======================= boder img============== */}
          <div className="sec-divider-top w-full absolute top-0 left-0 ">
            <img
              className="w-full hidden md:block"
              src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
            ></img>
            <img
              className="w-full rotate-180 md:hidden"
              src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
            ></img>
          </div>
          <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
            <img
              className="w-full hidden md:block"
              src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
            ></img>
            <img
              className="w-full  md:hidden"
              src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
            ></img>
          </div>
          {/*======================= boder img end============== */}
          <div className="section-container max-w-7xl mx-auto relative z-30">
            {/* =======customer  gallery========  */}
            <div className="inperson-gallery">
              <div className="section-title  text-center max-w-[800px] mx-auto px-4 md:px-0  ">
                <p className="uppercase md:text-lg">CUSTOMER GALLERY</p>
                <TitleSeparator
                  title="IN-PERSON ESCAPE ROOM GAMES"
                  color="golden-text"
                  weight="font-bold"
                />
                <p className="text-gray-700 md:px-8 md:text-lg mt-3 md:mt-5">
                  Escape rooms are one of the hottest trends in entertainment
                  today. Players must work together to find hidden clues, solve
                  puzzles, crack codes, complete tasks, and escape before time
                  runs out!
                </p>
              </div>

              <MainGallery
                category="escapegame"
                galleryitem={props.gallerylist}
              />
              <div className="gl-bottom-link mt-12 text-center">
                <PageLink
                  link="/activities"
                  label="View all in-person escape rooms"
                />
              </div>
            </div>
            {/* =======inperson gallery========  end*/}
            {/* =======event gallery========  */}
            <div className="event-gallery my-16 md:my-20 lg:my-28">
              <div className="section-title  text-center max-w-[800px] mx-auto px-4 md:px-0">
                <TitleSeparator
                  title="EVENTS AND PARTIES"
                  color="golden-text"
                  weight="font-bold"
                />
                <p className="text-gray-700 md:px-8 md:text-lg mt-3 md:mt-5">
                  We&apos;ve hosted over 10,000 birthday parties and
                  team-building events over the years. With more escape room
                  themes and options being constantly added, we are always
                  looking for ways to make your event memorable.
                </p>
              </div>

              <MainGallery category="events" galleryitem={props.gallerylist} />
              <div className="gl-bottom-link mt-12 text-center">
                <PageLink link="/events" label="View all events and parties" />
              </div>
            </div>

            {/* =======event gallery========  end*/}
            {/* =======OTHERS GAMES AND ACTIVITES========  */}
            <div className="other-games-gallery mt-16 md:mt-20 lg:mt-28 mb-2">
              <div className="section-title  text-center max-w-[800px] mx-auto px-4 md:px-0">
                <TitleSeparator
                  title="OTHER GAMES AND ACTIVITIES"
                  color="golden-text"
                  weight="font-bold"
                />
                <p className="text-gray-700 md:px-8 md:text-lg mt-3 md:mt-5">
                  All In Adventures is more than an escape room place. Join us
                  to experience more fun activities, including Game Show Rooms,
                  Beat the Seat and Axe Throwing.
                </p>
              </div>

              <MainGallery category="others" galleryitem={props.gallerylist} />
              <div className="gl-bottom-link mt-12 text-center">
                <PageLink
                  link="/activities#others-physical-games"
                  label="View all other in-person games"
                />
              </div>
            </div>

            {/* =======OTHERS GAMES AND ACTIVITES========  end*/}
            {/* =======VIRTUAL GAMES========  */}

            {/* =======VIRTUAL GAMES========  end*/}
          </div>
        </div>

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default gallery;

export const getStaticProps = async () => {
  const DATA = await getGalleryPageData();

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,

      totalLocations: DATA.totalLocations,
      pagemeta: DATA.pageMeta,
      pagedata: DATA.pageData,
      gallerylist: DATA.galleryList,
    },
  };
};
