
export default function LocationPageLink ({locationList}) { 

    return (<>

        {locationList.map((stateItem,index) => {
              return (
                <div key={index+1} className="loc-menu-box ">
                  {/*==================location NEW YORK======================*/}
                  <div className="loc-menu-head mb-2">
                    <h3 className="text-light-gold text-xl md:text-2xl font-bold">
                      <span className="inline-block pb-1 border-b border-light-gold">
                        {stateItem.stateName}
                      </span>
                    </h3>
                  </div>
                  <div className="loc-item-box py-2 border-dark-coffee">
                    {stateItem.locations.map((item,index) => {
                      return (
                        <div
                          key={index+2}
                          className=" loc-item py-2 border-b border-dark-coffee"
                        >
                          <a
                            href={`/locations/${item.locationSlug}`}
                            className="loc-link block golden-text md:text-lg"
                          >
                            {item.locationName} <br></br>
                            <span className="text-gray-500 text-sm md:text-base ">{item.mall}</span>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
    </>)
 };