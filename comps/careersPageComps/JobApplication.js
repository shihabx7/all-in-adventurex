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
            title="APPLY HERE"
            color="dark-gold"
            weight="font-bold"
          />
          <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-6 mb-6 md:mb-8 lg:mb-8">
            <p className="text-gray-700 md:px-8">
              Fill out the application form below to be considered for
              employment.
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
