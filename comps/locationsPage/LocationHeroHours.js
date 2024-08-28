const getAddress = (address, state, zip, city) => {
  var locState = state.split(",");
  var st = locState[locState.length - 1].trim().toString().toUpperCase();

  var add = address + ", " + city + ", " + st + " " + zip;
  return add;
};
const removeTags = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/(<([^>]+)>)/gi, "");
};
const getDirection = (address, state, zip, city) => {
  var addr = address.toString().split(" ").join("+") + ",";
  var stArr = state.toString().split(",");
  var ct = city + ",";
  var st = stArr[stArr.length - 1].trim().toString().toUpperCase();

  var zp = zip + ",";

  var gslug = addr + "+" + ct + "+" + st + "+" + zp + "+" + "USA";

  //console.log(st);
  var gUrl = "https://www.google.com/maps/dir//" + gslug;

  return gUrl;
};

const formateDate = (dt) => {
  let dtArr = dt.split("-");
  return dtArr[1] + "-" + dtArr[2] + "-" + dtArr[0];
};
const LocationHeroHours = (props) => {
  return (
    <div>
      <div className="loc-info-tbl mt-8">
        {/*======================Store map===== */}
        <div className="store-map locinfo-row border-y border-[#D2C6AA] py-2 px-2 lg:py-3">
          <div className="flex space-x-2 md:items-center md:text-lg ">
            <div className="loc-dt-icon  md:w-auto">
              <img
                className="w-[24px]"
                alt="AllinAdventures Escape Room Map Direction"
                src="/assets/svg/event-icon-pin.svg"
              ></img>
            </div>
            <div className="loc-dt-text text-[#232323] flex-1">
              <a
                target="_blank"
                href={getDirection(
                  props.locationInfo.address,
                  props.locationInfo.state,
                  props.locationInfo.zip,
                  props.locationInfo.cityName
                )}
                className="hover:text-blue-800"
              >
                <span className="font-medium text-blue-600">Store Map: </span>
                {getAddress(
                  props.locationInfo.address,
                  props.locationInfo.state,
                  props.locationInfo.zip,
                  props.locationInfo.cityName
                )}
              </a>
            </div>
          </div>
        </div>
        {/*======================Store +map end===== */}
        {/*======================Store Direction===== */}
        <div className="direction locinfo-row border-b border-[#D2C6AA] py-2 px-2 lg:py-3">
          <div className="flex items-start space-x-2  md:text-lg ">
            <div className="loc-dt-icon  md:w-auto flex items-center space-x-2">
              <img
                className="w-[24px]"
                src="/assets/svg/util/store_direction.svg"
              ></img>
              <span>
                <b>Direction: </b>
              </span>
            </div>
            <div className="loc-dt-text text-[#232323] flex-1">
              <div className="flex ">
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.locationInfo.direction,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/*======================Store Direction end===== */}
        {/*======================Store email phone ===== */}
        <div className="locinfo-row border-b border-[#D2C6AA] py-2 px-2 lg:py-3">
          <div className="flex  flex-col md:flex-row justify-between md:space-x-1 space-y-2 md:space-y-0 md:items-center md:text-lg ">
            <div className="flex space-x-2 items-center md:w-[50%]">
              <div className="loc-dt-icon">
                <img
                  className="w-[24px]"
                  alt="AllinAdventures Escape Room phone number"
                  src="/assets/svg/util/event-icon-phone.svg"
                ></img>
              </div>
              <div className="loc-dt-text text-[#232323] md:text-lg flex-1">
                <p>
                  <a
                    className="md:text-lg hover:text-blue-700"
                    href={"tel:" + props.locationInfo.phone}
                  >
                    {props.locationInfo.phone}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex space-x-2 items-center md:w-[50%]">
              <div className="loc-dt-icon">
                <img
                  className="w-[24px]"
                  alt="AllinAdventures Escape Room email"
                  src="/assets/svg/event-icon-email.svg"
                ></img>
              </div>
              <div className="loc-dt-text">
                <p>
                  <a
                    className="md:text-lg hover:text-blue-700"
                    href={
                      "mailto:" +
                      props.locationInfo.storeEmail.toString().toLowerCase()
                    }
                  >
                    {props.locationInfo.storeEmail}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*======================Store email phone end===== */}
        {/*======================Store parking+wheelchair  ===== */}
        <div className="locinfo-row  py-2 px-2 lg:py-3">
          <div className="flex  flex-col md:flex-row justify-between md:space-x-1 space-y-2 md:space-y-0 md:items-center md:text-lg ">
            <div className="flex space-x-2 items-center md:w-[50%]">
              <div className="loc-dt-icon">
                <img
                  className="w-[24px]"
                  alt="AllinAdventures Escape Room Parking"
                  src="/assets/svg/event-icon-parking.svg"
                ></img>
              </div>
              <div className="loc-dt-text md:text-lg flex-1">
                <p>{props.locationInfo.parking}</p>
              </div>
            </div>
            <div className="flex space-x-2 items-center md:w-[50%]">
              <div className="loc-dt-icon">
                <img
                  className="w-[24px]"
                  alt="AllinAdventures Escape Room Wheelchair Accessibility"
                  src="/assets/svg/event-icon-chair.svg"
                ></img>
              </div>
              <div className="loc-dt-text md:text-lg flex-1">
                <p>
                  {props.locationInfo.wheelChairAccessibility
                    ? "Wheelchair Accessibility"
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*======================Store parking+wheelchair  end===== */}
      </div>
      {/*======================business hours and holiday  table===== */}
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
            {/*======================business hours  table===== */}
            {props.businessHours ? (
              <table className="bhour-row table-auto border-collapse  text-[#464646] w-full">
                <tbody>
                  <tr>
                    <td className=" capitalize px-2 py-1 font-medium ">Day</td>
                    <td className=" px-2 py-1 font-medium ">Open</td>
                    <td className=" px-2 py-1 font-medium ">Close</td>
                  </tr>
                  {props.businessHours.map((hours) => {
                    return (
                      <tr key={hours.id}>
                        <td className="capitalize px-2 py-1 text-sm lg:text-base">
                          {hours.day}
                        </td>
                        <td className="px-2 py-1 text-sm lg:text-base">
                          {!hours.isClosed ? hours.openHour : "-"}
                        </td>
                        <td className="px-2 py-1 text-sm lg:text-base ">
                          {!hours.isClosed ? hours.closeHour : "-"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <p className="text-center pt-8 font-medium text-xl text-[#222222]">
                No Business Hours Found
              </p>
            )}
            {/*======================business hours  table end===== */}
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
            {/*======================Holiday Hours  table===== */}
            {props.holidayHours ? (
              <table className="bhour-row table-auto border-collapse text-[#464646] w-full">
                <tbody>
                  <tr>
                    <td className="capitalize px-2 py-1 font-medium">
                      Holiday
                    </td>
                    <td className="capitalize px-2 py-1 font-medium">Date</td>
                    <td className="px-2 py-1 font-medium">Open</td>
                    <td className="px-2 py-1 font-medium">Close</td>
                  </tr>
                  {props.holidayHours.map((holiday, index) => {
                    return (
                      <tr key={holiday.id}>
                        <td className="capitalize px-2 py-1 text-xs md:text-sm lg:text-base">
                          {holiday.holidayName}
                        </td>
                        <td className="capitalize px-2 py-1 text-xs md:text-sm lg:text-base">
                          {formateDate(holiday.date)}
                        </td>
                        <td className="px-2 py-1 text-xs md:text-sm lg:text-base">
                          {holiday.stratTime}
                        </td>
                        <td className="px-2 py-1 text-xs md:text-sm lg:text-base ">
                          {holiday.closeTime}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <p className="text-center pt-8 font-medium text-xl text-[#222222]">
                No Holiday Hours Found
              </p>
            )}
            {/*======================Holiday Hours table end===== */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHeroHours;
