export default function CancellationInfo({ cancellationInfo }) {
  return (
    <div className="package-cancellation-box">
      <div className="package-title">
        <h3 className="package-title text-[1.25rem] md:text-[1.2rem] xl:text-[1.35rem] font-semibold text-white uppercase font-os">
          {cancellationInfo.title
            ? cancellationInfo.title
            : "CANCELLATIONS & RESCHEDULING"}
        </h3>
      </div>
      {cancellationInfo.infoList && (
        <div className="package-info-list text-sm xl:text-[.95rem] text-[#DBDBDB] mt-4 sm:mt-5 xl:mt-6">
          {cancellationInfo.infoList.map((item, index) => {
            return (
              <div key={index} className="mt-4 sm:mt-4.5 xl:mt-5 flex items-start">
                <div className="text-[#D4B56A]  mr-2 sm:mr-4 md:mr-5 flex-shrink-0">
                  <div className="p-1.5 px-3 bg-[#D4B56A1F] border border-[#D4B56ACC] rounded-md">
                    {item.duration}
                  </div>
                </div>
                <div className="c-info-text">
                  <h4 className="text-[.95rem] sm:text-[1.15rem] text-white font-bold">
                    {item.title}
                  </h4>
                  <p className="text-[.82rem] sm:text-[.94rem] text-[#A7B0C8] mt-1">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
           <div  className="mt-4 sm:mt-4.5 xl:mt-5 flex items-start">
                <div className="text-[#D4B56A]  mr-2 sm:mr-4 md:mr-5 flex-shrink-0">
                  <div className="p-1.5 px-3 bg-[#DC26261F] border border-[#DC2626E5] rounded-md">
                    {cancellationInfo.finalPolicy.duration}
                  </div>
                </div>
                <div className="c-info-text ">
                  <h4 className="text-[.95rem] sm:text-[1.15rem] text-white font-bold">
                    {cancellationInfo.finalPolicy.title}
                  </h4>
                  <p className="text-[.82rem] sm:text-[.94rem] text-[#A7B0C8] mt-1">
                    {cancellationInfo.finalPolicy.text}
                  </p>
                </div>
              </div>
        </div>
      )}
    </div>
  );
}
