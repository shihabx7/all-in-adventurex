const getAddress = (address, slug, zip, city) => {
  var scity = slug.split("-");
  var st = scity[scity.length - 1].toString().toUpperCase();

  var add = address + ", " + city + ", " + st + " " + zip;
  return add;
};
const locState = (slug) => {
  var scity = slug.split("-");
  var st = scity[scity.length - 1].toString().toUpperCase();
  return st;
};
const getDirection = (address, slug, zip, city) => {
  var addr = address.toString().split(" ").join("+") + ",";
  var stArr = slug.toString().split("-");
  var ct = city + ",";
  var stlen = stArr.length - 1;
  var st = stArr[stlen];
  st = st.toString().toUpperCase();
  var zp = zip + ",";

  var gslug = addr + "+" + ct + "+" + st + "+" + zp + "+" + "USA";

  //console.log(st);
  var gUrl = "https://www.google.com/maps/dir//" + gslug;

  return gUrl;
};
const LocationHours = (props) => {
  return (
    <div>
      <div className="loc-info-tbl mt-8">
        <div className="store-map locinfo-row border-y border-[#D2C6AA] py-2 px-2 lg:py-3">
          <div className="flex space-x-2 md:items-center md:text-lg ">
            <div className="loc-dt-icon  md:w-auto">
              <img
                className="w-[24px]"
                src="/assets/svg/event-icon-pin.svg"
              ></img>
            </div>
            <div className="loc-dt-text text-[#232323] flex-1">
              <a
                target="_blank"
                href={getDirection(
                  props.locdetail.address,
                  props.locdetail.slug,
                  props.locdetail.zip,
                  props.locdetail.city
                )}
                className="hover:text-blue-800"
              >
                <span className="font-medium text-blue-600">Store Map: </span>
                {getAddress(
                  props.locdetail.address,
                  props.locdetail.slug,
                  props.locdetail.zip,
                  props.locdetail.city
                )}
              </a>
            </div>
          </div>
        </div>
        <div className="direction locinfo-row border-b border-[#D2C6AA] py-2 px-2 lg:py-3">
          <div className="flex space-x-2  md:text-lg ">
            <div className="loc-dt-icon  md:w-auto ">
              <img
                className="w-[24px]"
                src="/assets/svg/util/store_direction.svg"
              ></img>
            </div>
            <div className="loc-dt-text text-[#232323] flex-1">
              <div>
                <span>
                  <b>Direction: </b>
                </span>
                <span> {props.locdetail.entry_guid}</span>
              </div>
              {props.locdetail.entry_guid2 && (
                <div className="mt-2">
                  <span>{props.locdetail.entry_guid2}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="locinfo-row border-b border-[#D2C6AA] py-2 px-2 lg:py-3">
          <div className="flex  flex-col md:flex-row justify-between md:space-x-1 space-y-2 md:space-y-0 md:items-center md:text-lg ">
            <div className="flex space-x-2 items-center md:w-[50%]">
              <div className="loc-dt-icon">
                <img
                  className="w-[24px]"
                  src="/assets/svg/util/event-icon-phone.svg"
                ></img>
              </div>
              <div className="loc-dt-text text-[#232323] md:text-lg flex-1">
                <p>
                  <a
                    className="md:text-lg hover:text-blue-700"
                    href={"tel:" + props.locdetail.phone}
                  >
                    {props.locdetail.phone}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex space-x-2 items-center md:w-[50%]">
              <div className="loc-dt-icon">
                <img
                  className="w-[24px]"
                  src="/assets/svg/event-icon-email.svg"
                ></img>
              </div>
              <div className="loc-dt-text">
                <p>
                  <a
                    className="md:text-lg hover:text-blue-700"
                    href={
                      "mailto:" + props.locdetail.email.toString().toLowerCase()
                    }
                  >
                    {props.locdetail.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="locinfo-row  py-2 px-2 lg:py-3">
          <div className="flex  flex-col md:flex-row justify-between md:space-x-1 space-y-2 md:space-y-0 md:items-center md:text-lg ">
            <div className="flex space-x-2 items-center md:w-[50%]">
              <div className="loc-dt-icon">
                <img
                  className="w-[24px]"
                  src="/assets/svg/event-icon-parking.svg"
                ></img>
              </div>
              <div className="loc-dt-text md:text-lg flex-1">
                <p>{props.locdetail.mall} Parking </p>
              </div>
            </div>
            <div className="flex space-x-2 items-center md:w-[50%]">
              <div className="loc-dt-icon">
                <img
                  className="w-[24px]"
                  src="/assets/svg/event-icon-chair.svg"
                ></img>
              </div>
              <div className="loc-dt-text md:text-lg flex-1">
                <p>Wheelchair Accessibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="loc-hrs-tbl flex flex-col  md:flex-row border-y border-[#D2C6AA]">
        <div className="loc-tb-hrs md:min-w-[46%] ">
          <div className="pt-2 pb-2 px-2 md:px-2 md:py-3 lg:px-4 tbl-h border-b border-[#D2C6AA]">
            <h3 className="text-[#232323] font-medium lg:text-lg">
              Standard Business Hours
            </h3>
            <p className="font-thin text-sm lg:text-base">
              Hours may vary sometimes
            </p>
          </div>
          <div className="tbl-cont px-2 md:px-1 lg:px-2 py-2 ">
            {props.locdetail.hours && (
              <table className="bhour-row table-auto border-collapse  text-[#464646] w-full">
                <tbody>
                  <tr>
                    <td className=" capitalize px-2 py-1 font-medium text-sm lg:text-base">
                      Day
                    </td>
                    <td className=" px-2 py-1 font-medium text-sm lg:text-base">
                      Open
                    </td>
                    <td className=" px-2 py-1 font-medium text-sm lg:text-base">
                      Close
                    </td>
                  </tr>
                  {props.locdetail.hours.map((hours, index) => {
                    return (
                      <tr key={index}>
                        <td className="capitalize px-2 py-1 text-sm lg:text-base">
                          {hours.day}
                        </td>
                        <td className="px-2 py-1 text-sm lg:text-base">
                          {hours.open}
                        </td>
                        <td className="px-2 py-1 text-sm lg:text-base ">
                          {hours.close}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div className="loc-tb-hrs md:min-w-[54%] md:border-l border-[#D2C6AA]">
          <div className="pt-2 pb-2 px-2 md:px-2 md:py-3 lg:px-4 tbl-h border-t md:border-t-0 border-b border-[#D2C6AA]">
            <h3 className="text-[#232323] font-medium lg:text-lg">
              Holiday Hours
            </h3>
            <p className="font-thin text-sm lg:text-base">
              Hours may vary sometimes
            </p>
          </div>
          <div className="tbl-cont px-2 md:px-1 lg:px-2 py-2 ">
            {props.locdetail.holiday_hours ? (
              <table className="bhour-row table-auto border-collapse  text-[#464646] w-full">
                <tbody>
                  <tr>
                    <td className=" capitalize px-2 py-1 font-medium">
                      Holyday
                    </td>
                    <td className=" capitalize px-2 py-1 font-medium">Date</td>
                    <td className=" px-2 py-1 font-medium">Open</td>
                    <td className=" px-2 py-1 font-medium">Close</td>
                  </tr>
                  {props.locdetail.holiday_hours.map((holiday, index) => {
                    return (
                      <tr key={index}>
                        <td className="  capitalize px-2 py-1 text-xs md:text-sm lg:text-base">
                          {holiday.holiday_name}
                        </td>
                        <td className="  capitalize px-2 py-1 text-xs md:text-sm lg:text-base">
                          {holiday.date}
                        </td>
                        <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                          {holiday.open ? holiday.open : "Closed"}
                        </td>
                        <td className="px-2 py-1 text-xs md:text-sm lg:text-base ">
                          {holiday.close ? holiday.close : "-"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <table className="bhour-row table-auto border-collapse  text-[#464646] w-full">
                <tbody>
                  <tr>
                    <td className=" capitalize pl-2 py-1 font-medium text-sm lg:text-base">
                      Holyday
                    </td>
                    <td className=" capitalize px-2 py-1 font-medium text-sm lg:text-base">
                      Date
                    </td>
                    <td className=" px-2 py-1 font-medium text-sm lg:text-base">
                      Open
                    </td>
                    <td className=" px-2 py-1 font-medium text-sm lg:text-base">
                      Close
                    </td>
                  </tr>

                  <tr>
                    <td className="  capitalize pl-2 py-1 text-sm lg:text-base">
                      Thanksgiving
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      11/23/23
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      --
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      Close
                    </td>
                  </tr>

                  <tr>
                    <td className="  capitalize pl-2 py-1 text-sm lg:text-base">
                      Christmas Eve
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      12/24/23
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      11am - 5pm
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      --
                    </td>
                  </tr>

                  <tr>
                    <td className="  capitalize pl-2 py-1 text-sm lg:text-base">
                      Christmas Day
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      11/23/23
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      --
                    </td>
                    <td className="px-2 py-1  text-xs md:text-sm lg:text-base">
                      Close
                    </td>
                  </tr>
                  <tr>
                    <td className="  capitalize pl-2 py-1 text-sm lg:text-base">
                      New Year's Eve{" "}
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      12/31/23
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      11am - 5pm
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      --
                    </td>
                  </tr>
                  <tr>
                    <td className="  capitalize pl-2 py-1 text-sm lg:text-base">
                      New Year's Day
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      01/01/24
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      11am - 5pm
                    </td>
                    <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                      --
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHours;
