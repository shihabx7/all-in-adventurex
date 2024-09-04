const JobRoleList = (props) => {
  return (
    <div className="job-roles">
      {props.jobRoles.map((item, index) => {
        return (
          <div
            key={index + 1}
            className="flex  lg:text-lg text-[#464646] mt-3 md:mt-3 lg:mt-4 justify-between"
          >
            <div className="mt-[6px] w-[20px] lg:w-[24px]">
              <img src="/assets/svg/star-bullet.svg"></img>
            </div>
            <div
              className="w-[94%] lg:w-[96%] lg:text-lg"
              dangerouslySetInnerHTML={{ __html: item.role }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default JobRoleList;
