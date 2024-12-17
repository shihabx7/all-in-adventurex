import JobApplicationForms from "../multiFormComps/JobApplicationForms";
import TitleSeparator from "../util/TitleSeparator";
const JobApplication = (props) => {
  return (
    <div
      id="job-application"
      className="c-contact py-16 md:py-20 lg:py-28  bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]"
    >
      <div className="section-container max-w-7xl mx-auto relative z-30">
        <div className="section-title px-4">
          <TitleSeparator
            title="PART 1: APPLY HERE"
            color="dark-gold"
            weight="font-bold"
          />
          <div className="md:text-lg mx-auto text-center mt-4 md:mt-6 mb-6 md:mb-8 lg:mb-8 lg:max-w-[1004px]">
            <p className="text-gray-700 md:px-8">
              This application form is <b>Part 1</b> of the job application
              process. After submitting, you'll be automatically redirected to{" "}
              <b>Part 2</b>, a required questionnaire. To ensure your
              application is reviewed, you must complete the short (3 - 5
              minute) questionnaire. Applications without a completed
              questionnaire will not be considered.
            </p>
          </div>
        </div>
        <div className="job-form-container max-w-[930px] mx-auto bg-[#F4E6C3] py-8 px-4 lg:p-8 rounded drop-shadow">
          <JobApplicationForms locationlist={props.locationlist} />
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
