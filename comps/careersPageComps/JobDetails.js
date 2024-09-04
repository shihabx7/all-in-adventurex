import JobRoleList from "./JobRoleList";
import JobRoleNotice from "./JobRoleNotice";
import JobKeyCompetencies from "./JobKeyCompetencies";
import JobTraits from "./JobTraits";
import JobRequirements from "./JobRequirements";

const formateSubtitle = (jobname) => {
  const v = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  const fistChar = jobname.charAt(0);
  if (v.includes(fistChar)) {
    return "AS an " + jobname + " you will:";
  }
  return "AS a " + jobname + " you will:";
};
const JobDetails = (props) => {
  return (
    <div className=" relative overflow-hidden bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      {/*======================= boder img============== */}
      <div className="sec-divider-top w-full absolute top-0 left-0 ">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
        ></img>
        <img
          className="w-full rotate-180 md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
        ></img>
        <img
          className="w-full  md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      {/*======================= boder img end============== */}
      {/** =======ornamental icon===== */}
      <div className="pl-or pl-or-1 absolute top-0 left-0">
        <img src="/assets/pl-bgi-1.png"></img>
      </div>
      <div className="htb-bg-icon htb-bg-3 absolute">
        <img src="/assets/Navigation.png"></img>
      </div>
      <div className="htb-bg-icon htb-bg-2 absolute">
        <img src="/assets/Compas-brown.png"></img>
      </div>
      <div className="htb-bg-icon htb-bg-4 absolute">
        <img src="/assets/Skull.png"></img>
      </div>

      <div className="section-container max-w-7xl mx-auto  py-16 md:py-20 lg:py-28 relative z-30 ">
        <div className="section-row flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8 ">
          {/*==========================about the role====================== */}
          <div className="section-col md:w-2/3 pb-8 md:pb-0 px-4">
            <h2 className="dark-gold text-3xl md:text-4xl lg:text-5xl font-os font-bold uppercase">
              {props.jobAboutSectionData.sectionTitle
                ? props.jobAboutSectionData.sectionTitle
                : "ABOUT THE ROLE"}
            </h2>
            <p className="text-lg md:text[20px] lg:text-[24px] text-[#464646] font-medium mt-2 md:mt-4">
              {props.jobAboutSectionData.sectionSubTitle
                ? props.jobAboutSectionData.sectionSubTitle + ":"
                : formateSubtitle(props.jobName)}
            </p>

            <div className="abt-role mt-4 md:mt-6 lg:mt-8 text-lg ">
              <JobRoleList jobRoles={props.jobAboutSectionData.jobRoles} />
            </div>
            <div className="job-dt-bottom-link mt-6 lg:mt-8">
              <JobRoleNotice />
            </div>
          </div>
          {/*==========================about the role end====================== */}
          {/*==========================KEY COMPETENCIES NEEDED,DESIRED TRAITS, REQUIREMENTS FOR CONSIDERATION====================== */}
          <div className="section-col md:w-1/3">
            <div className="job-side-bar bg-[#F4E6C3] px-4 py-12 md:py-12 md:px-6 lg:py-16 lg:px-8 rounded-lg">
              {/*================== COMPETENCIES=============*/}
              <div className="side-bar-wd">
                {props.keyCompetencies ? (
                  <JobKeyCompetencies keyCompetencies={props.keyCompetencies} />
                ) : (
                  <></>
                )}
              </div>
              {/*================== COMPETENCIES end=============*/}
              {/*================== trait=============*/}
              <div className="side-bar-wd mt-8 lg:mt-12">
                {props.desiredTraits ? (
                  <JobTraits desiredTraits={props.desiredTraits} />
                ) : (
                  <></>
                )}
              </div>
              {/*================== trait end=============*/}
              {/*================== trait=============*/}
              <div className="side-bar-wd mt-8 lg:mt-12">
                {props.desiredTraits ? (
                  <JobRequirements requirements={props.requirements} />
                ) : (
                  <></>
                )}
              </div>
              {/*================== trait end=============*/}
            </div>
          </div>
          {/*==========================KEY COMPETENCIES NEEDED,DESIRED TRAITS, REQUIREMENTS FOR CONSIDERATION end====================== */}
        </div>
        {/**============WANT TO JOIN OUR TEAM?====================== */}
        <div className="section-row text-center pt-20">
          <h2 className="dark-gold text-3xl md:text-3xl lg:text-4xl font-os font-bold mb-8">
            WANT TO JOIN OUR TEAM?
          </h2>

          <a
            href="/careers"
            className="inline-block rounded-full border-2 border-red-700 hover:bg-red-700 text-[#111111] hover:text-white py-3 px-12"
          >
            VIEW ALL JOB POSITIONS
          </a>
        </div>
        {/**============WANT TO JOIN OUR TEAM?====================== */}
      </div>
    </div>
  );
};

export default JobDetails;
