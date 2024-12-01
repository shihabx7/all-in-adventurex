import EscapeGameList from "./EscapeGameList";
import OtherGameList from "./OtherGameList";
import MobileEscapeGameList from "./MobileEscapeGameList";

const ActivityLocList = (props) => {
  return (
    <>
      <div className=" relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
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
        <div className="all-games-container max-w-7xl mx-auto relative  z-30 pt-[110px] pb-16 md:py-20 lg:py-28 px-4">
          {/**=========================================escape games list============== */}
          <EscapeGameList
            isPublished={props.isPublished}
            locationSlug={props.locationSlug}
            escapeGames={props.activityData.escapeGames}
          />
          {/**=========================================escape games list end============== */}
          {/**=========================================other in person games============== */}
          {props.activityData.otherGames.activityList.length > 0 ? (
            <OtherGameList
              isPublished={props.isPublished}
              locationSlug={props.locationSlug}
              otherGames={props.activityData.otherGames}
            />
          ) : (
            <></>
          )}
          {props.hasMobileEscapeRoom && <MobileEscapeGameList />}

          {/**=========================================other in person games end============== */}
          <div className="link-btn mt-8 md:mt-16">
            {props.locationSlug ? (
              <a
                href={"/" + props.locationSlug + "/events"}
                className="border-2 max-w-[280px] text-center block  mx-auto  border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
              >
                VIEW ALL EVENTS
              </a>
            ) : (
              <a
                href="/events"
                className="border-2 max-w-[280px] text-center block  mx-auto  border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
              >
                VIEW ALL EVENTS
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityLocList;
