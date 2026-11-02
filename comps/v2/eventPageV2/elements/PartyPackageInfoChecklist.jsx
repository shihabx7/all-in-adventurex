import { FiCheck } from "react-icons/fi";

export default function PartyPackageInfoChecklist({ packageInfo, teamSize }) {
  const setTeamSize = (listItem) => {
    let str = listItem.toString();
    // let sz = tsize.toString();
    let reTxt = str.replaceAll("[TEAMSIZE]", teamSize);
    return reTxt;
  };
  return (
    <div className="package-info-box">
      <div className="package-title">
        <h3 className="package-title text-[1.25rem] md:text-[1.2rem] xl:text-[1.35rem] font-semibold text-white uppercase font-os">
          {packageInfo.title ? packageInfo.title : "Package Includes"}
        </h3>
      </div>
      {packageInfo.infoList && (
        <div className="package-info-list text-sm xl:text-[.95rem] text-[#DBDBDB] mt-3 xl:mt-4">
          {packageInfo.infoList.map((item, index) => {
            return (
              <div key={index} className="mt-4 flex items-start">
                <div className="text-[#D4B56A] mt-1 mr-2 flex-shrink-0">
                  <FiCheck />
                </div>
                <div> {setTeamSize(item)}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
