import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import ThankYouBox from "../comps/util/ThankYouBox";

import { getThankYouEventPageData } from "./api/getThankYouEventPageData";
import Seofields from "../comps/util/SeoFields";
const ThankYou = (props) => {
  return (
    <>
      <Seofields meta={props.pagemeta} />
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
        <ThankYouBox />
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
  const DATA = await getThankYouEventPageData();

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,
      pagedata: DATA.pageData,
      pagemeta: DATA.pageMeta,
    },
  };
};
