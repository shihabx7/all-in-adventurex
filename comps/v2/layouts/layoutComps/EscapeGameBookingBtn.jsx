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
            <div className="loc-menu-head mb-2">
              <h3 className="text-light-gold text-xl md:text-2xl font-bold">
                <span className="inline-block pb-1 border-b border-light-gold">
                  {stateItem.stateName}
                </span>
              </h3>
            </div>
            <div className="loc-item-box py-2 border-dark-coffee">
              {stateItem.locations.map((item, index) => {
                return (
                  <div
                    key={index + 2}
                    className=" loc-item py-2 border-b border-dark-coffee"
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        bookGame(item.bookingInfo);
                      }}
                      className="loc-link block golden-text md:text-lg"
                    >
                      {item.locationName}
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
