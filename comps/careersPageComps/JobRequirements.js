const JobRequirements = (props) => {
  return (
    <div className="job-requirements">
      <h3 className="text-xl md:text-2xl font-os text-[#111111] ">
        REQUIREMENTS FOR CONSIDERATION
      </h3>
      <div className="abt-trait mt-4 md:mt-6 lg:mt-6 text-lg">
        {props.requirements.map((item, index) => {
          return (
            <div
              key={index + 1}
              className="flex  lg:text-lg text-[#464646] mt-3 md:mt-3 lg:mt-4 justify-between"
            >
              <div className="mt-[6px] w-[20px] lg:w-[24px]">
                <img src="/assets/svg/star-bullet.svg"></img>
              </div>
              <div className="w-[94%] lg:text-lg">{item.requirements}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobRequirements;
