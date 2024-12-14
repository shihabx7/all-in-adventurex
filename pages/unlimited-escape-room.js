import UnlimitedEscapeRoomHero from "../comps/unlimitedEscapeRoom/UnlimitedEscapeRoomHero";
import WhatIsUnlimitedPlayPass from "../comps/unlimitedEscapeRoom/WhatIsUnlimitedPlayPass";
import HowUnlimitedPlayPassWork from "../comps/unlimitedEscapeRoom/HowUnlimitedPlayPassWork";
import CreatUnlimitedDeal from "../comps/unlimitedEscapeRoom/CreatUnlimitedDeal";
import UnlimitedEscapeFaq from "../comps/unlimitedEscapeRoom/UnlimitedEscapeFaq";
const Test = (props) => {
  return (
    <>
      {/* =======header content======== */}

      {/* =======header content ======== end */}

      {/* =========================================================================================main content ======== end */}
      <div
        id="mainContent"
        className="main-content nobtn-main-content bg-center relative"
      >
        {/* =======breadcum content and breadcum========  */}
        <div className="breadcums  py-1 md:py-2 bg-[#fffceb]"></div>
        {/* =======breadcum content and breadcum root page template======== end */}
        <UnlimitedEscapeRoomHero />
        <WhatIsUnlimitedPlayPass />
        <HowUnlimitedPlayPassWork />
        <CreatUnlimitedDeal />
        <UnlimitedEscapeFaq />
        {/* =========================================================================================main content ======== end */}
      </div>
    </>
  );
};

export default Test;
