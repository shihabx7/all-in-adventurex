export default function CateringInfo({ packageInfo, teamSize }) {
  const setPizzaNumber = (listItem) => {
    let str = listItem.toString();
    let tmz = parseInt(teamSize, 10);
    let pizzaNum = tmz > 8 ? "3" : "2";
    let reTxt = str.replaceAll("[PIZZA]", pizzaNum);
    return reTxt;
  };
  return (
    <div className="package-info-box">
      <div className="package-title">
        <h3 className="package-title text-[1.25rem] md:text-[1.2rem] xl:text-[1.35rem] font-semibold text-[#D4B56A] uppercase font-os">
          {packageInfo.title ? packageInfo.title : "CATERING PACKAGE"}
        </h3>
      </div>
      <div className="package-price  ">
        {packageInfo.price && (
          <div className="flex justify-start items-center space-x-3 ">
            <div className="font-bold text-[2.875rem] md:text-[3rem] lg:text-[3.5rem] font-os text-white leading-[1] my-3">
              ${packageInfo.price}
            </div>
            <div className="max-w-[124px] text-[.82rem] md:text-sm text-[#A7B0C8] mt-2">
              flat, + tax for the whole group
            </div>
          </div>
        )}
        {packageInfo.priceFor && (
          <div className="text-sm xl:text-[.95rem] text-[#D4B56A] ">
            {packageInfo.priceFor}
          </div>
        )}
      </div>
      {packageInfo.offerList && (
        <div className="catering-offer-list flex flex-wrap  mt-2">
          {packageInfo.offerList.map((item, index) => {
            return (
              <div key={index} className="bg-[#ffffff]/10 border border-[#ffffff]/20 rounded-full py-1 px-2 md:px-1.5  lg:py-1.5 lg:px-3 text-[.66rem]  rm:text-xs md:text-[.66rem] lg:text-xs xl:text-[.82rem] text-[#ffffff] mr-2 md:mr-1 lg:mr-1.5 xl:mr-2 mt-2">
                 {setPizzaNumber(item)}
              </div>
            );
          })}
        </div>
      )}
      <div className="text-sm xl:text-[.875rem] text-[#A7B0C8] mt-4 xl:mt-5">
        {packageInfo.extraGuest}
      </div>
    </div>
  );
}
