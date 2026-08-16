import { useState } from "react";
import { getCorporateContactPageData } from "./api/getCorporateContactPageData";

// page template=============
import RootNav from "../comps/RootNav";
import RootFooter from "../comps/RootFooter";
import PageBread from "../comps/util/PageBread";
import SinglePageSeo from "../comps/util/SinglePageSeo";
import CorContactHero from "../comps/contactComps/CorContactHero";
import CorContact from "../comps/contactComps/CorContact";
//===================================v2
import ContactPageRootHero from "../comps/v2/contactPageV2/ContactPageRootHero";
import CorContactInfoSection from "../comps/v2/contactPageV2/CorContactInfoSection";
import ContactModalSection from "../comps/v2/contactPageV2/ContactModalSection";

const CorContactPage = (props) => {
  const [showModalForm, setShowFormModalForm] = useState(false);
  return (
    <>
      {/* =======header content======== */}
      <SinglePageSeo meta={props.pageMeta} />
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
        contactBtn={true}
      />
      {/* =======header content ======== end */}
      {showModalForm && (
        <>
          <ContactModalSection
            setShowFormModalForm={setShowFormModalForm}
            locationList={props.locationList}
          />
        </>
      )}
      {/* =========================================================================================main content ======== end */}
      <div
        id="mainContent"
        className="main-content "
      >
        {/* =======breadcum content and breadcum========  */}
        <PageBread />
        {/* =======breadcum content and breadcum root page template
        <CorContactHero
          pageData={props.pageData}
          totalLocations={props.totalLocations}
        />
       ====================================================v2 */}
        <ContactPageRootHero
          pageData={props.pageData}
          totalLocations={props.totalLocations}
          setShowFormModalForm={setShowFormModalForm}
        />
        <CorContactInfoSection contactData={props.contactData} />
        {/* =========================================================================================main content
        
       
        <CorContact contactData={props.contactData} />
        ======== end */}
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default CorContactPage;

export const getStaticProps = async () => {
  const DATA = await getCorporateContactPageData();
  //console.log(JSON.stringify(DATA.locationList[0]));
  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      locationList: DATA.locationList,
      totalLocations: DATA.totalLocations,
      pageMeta: DATA.pageMeta,
      pageData: DATA.pageData,
      contactData: DATA.contactData,
    },
    revalidate: 60,
  };
};
