export default function EscapeGameBookingBtn({ locationList }) {
  const bookGame = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };

  return (
    <div>
      {locationList.map((stateItem, index) => {
        return (
          <div key={index + 1} className="loc-menu-box ">
            {/*==================location NEW YORK======================*/}
            <div className="loc-menu-head ">
              <h3 className="text-[#aaaaaa] text-[1.08rem] md:text-[1.13rem] xl:md:text-[1.2rem] font-bold uppercase">
                <span className="inline-block ">
                  {stateItem.stateName}
                </span>
              </h3>
            </div>
            <div className="loc-item-box py-2 border-dark-coffee">
              {stateItem.locations.map((item, index) => {
                return (
                  <div
                    key={index + 2}
                    className=" loc-item py-3 border-b border-[#191919]"
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        bookGame(item.bookingInfo);
                      }}
                      className="loc-btn block text-[#7b7b7b] hover:text-[#D8C695] md:text-lg text-left"
                    >
                      <span className="loc-name block  lg:text-lg font-medium">
                        {item.locationName}
                      </span>
                      <span className="block loc-mall text-sm ">
                        {item.mall}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
