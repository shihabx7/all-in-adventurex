import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import Custom404Err from "../comps/util/Custom404Err";
import getErrPageData from "./api/getErrPageData";

import Seofields from "../comps/util/SeoFields";
const Custom404 = (props) => {
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
        <Custom404Err />
      </div>
      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default Custom404;

export const getStaticProps = async () => {
  const DATA = await getErrPageData();

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
