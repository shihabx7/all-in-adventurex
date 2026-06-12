export default function PartyPackageListBox({ boxItem }) {
  return (
    <div className="package-item-box">
      <div className="package-title">
        <h3 className="xl:text-lg font-semibold text-white">
          {boxItem.infoTitle ? boxItem.infoTitle : "Escape Room Party Package"}
        </h3>
      </div>
      {boxItem.infoList && (
        <div className="box-list">
          <ul className="list-disc text-sm xl:text-base text-[#adadad] mt-3 xl:mt-4 pl-4 xl:pl-6">
            {boxItem.infoList.map((item, index) => {
              return (
                <li key={index} className="my-3">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
