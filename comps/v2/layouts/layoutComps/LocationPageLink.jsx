
export default function LocationPageLink ({locationList}) { 

    return (<>

        {locationList.map((stateItem,index) => {
              return (
                <div key={index+1} className="loc-menu-box ">
                  {/*==================location NEW YORK======================*/}
                  <div className="loc-menu-head ">
                    <h3 className="text-[#aaaaaa] text-[1.06rem] md:text-[1.15rem] xl:md:text-[1.2rem] font-bold">
                      <span className="inline-block  ">
                        {stateItem.stateName}
                      </span>
                    </h3>
                  </div>
                  <div className="loc-item-box py-0 border-[#191919] ">
                    {stateItem.locations.map((item,index) => {
                      return (
                        <div
                          key={index+2}
                          className=" loc-item py-2 border-b border-[#191919]"
                        >
                          <a
                            href={`/locations/${item.locationSlug}`}
                            className="loc-link block text-[#7b7b7b] hover:text-[#D8C695] "
                          >
                            <span className="loc-name  lg:text-lg">{item.locationName}</span>
                             <br></br>
                            <span className="loc-mall text-sm">{item.mall}</span>
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