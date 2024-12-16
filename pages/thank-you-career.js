import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";

import { getThankYouCareerPageData } from "./api/getThankYouCareerPageData";
import ThankYouHero from "../comps/thankYouPagesComs/ThankYouHero";
import ThankYuouCareerHero from "../comps/thankYouPagesComs/ThankYuouCareerHero";

import SinglePageSeo from "../comps/util/SinglePageSeo";
const ThankYou = (props) => {
  return (
    <>
      <SinglePageSeo meta={props.pageMeta} />
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
      />
      <div
        id="mainContent"
        className="main-content nobtn-main-content bg-center"
      >
        <ThankYuouCareerHero pageData={props.pageData} />
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default ThankYou;

export const getStaticProps = async () => {
  const DATA = await getThankYouCareerPageData();

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pageData: DATA.pageData,
      pageMeta: DATA.pageMeta,
    },
  };
};
