const JobRoleNotice = (props) => {
  return (
    <div className="job-roles-notice">
      <p className="job-note font-semibold lg:text-lg text-[#464646] mb-6 lg:mb-8">
        If you are interested in applying for this role, please click below to
        complete an employment application and submit your resume for review by
        our recruiting team.
      </p>

      <a
        href={"/careers/apply/"}
        className="inline-block bg-red-600 hover:bg-red-700 text-white lg:text-lg py-3 px-10 md:py-4 md:px-12 rounded-full"
      >
        SUBMIT YOUR APPLICATION
      </a>

      <p className="font-thin text-[#464646] lg:text-lg mt-6 lg:mt-8">
        All in Adventures, LLC. is an equal opportunity employer and
        affirmatively seeks diversity in its workforce. All in Adventures
        recruits qualified applicants and advances in employment its employees
        without regard to race, color, religion, gender, sexual orientation,
        gender identity, gender expression, age, disability, genetic
        information, ethnic or national origin, marital status, veteran status,
        or any other status protected by law.
      </p>
    </div>
  );
};

export default JobRoleNotice;
