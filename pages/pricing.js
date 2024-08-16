import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page template=============
import { getPricingPageData } from "./api/getPricingPageData";
import PricingPageHero from "../comps/pricingPageComps/PricingPageHero";
import PriceForLargerGroup from "../comps/pricingPageComps/PriceForLargerGroup";
import PriceInperson from "../comps/pricingPageComps/PriceInperson";
import PricingNextGen from "../comps/pricingPageComps/PricingNextGen";
import PricingQuest from "../comps/pricingPageComps/PricingQuest";
import PricingOthersGame from "../comps/pricingPageComps/PricingOthersGame";

import PricingEvents from "../comps/pricingPageComps/PricingEvents";
import PricingGiftCard from "../comps/pricingPageComps/PricingGiftCard";

import Seofields from "../comps/util/SeoFields";

const Pricing = (props) => {
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
        className="main-content nobtn-main-content bg-center relative"
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

        <PricingPageHero pageData={props.pageData} />
        <PriceInperson pricing={props.inpersonpricing} />
        <PricingNextGen pricing={props.nextgenpricing} />
        <PricingQuest pricing={props.questgenpricing} />
        <PricingOthersGame />
        <PricingEvents />
        <PricingGiftCard />
        {/*<PrivcingVirtualGames/>*/}
        <PriceForLargerGroup />

        {/* =========================================================================================main content ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default Pricing;

export const getStaticProps = async () => {
  const DATA = await getPricingPageData();

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,

      totalLocations: DATA.totalLocations,
      pageData: DATA.pageData,
      pagemeta: DATA.pageMeta,
      inpersonpricing: DATA.inpersonpricing,
      nextgenpricing: DATA.nextgenpricing,
      questgenpricing: DATA.questgenpricing,
      faqlist: DATA.faqlist,
    },
    revalidate: 30,
  };
};
