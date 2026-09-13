export default function PinedJobPostCard({ job }) {
  return (
    <div className="pined-job-card  rounded-[10px] bg-[#211906] px-4 py-5 sm:p-6  md:p-8  2xl:p-16">
      <div className="job-info flex items-center gap-2 md:gap-3 lg:gap-4 text-[#EFA13A] text-[.8rem] sm:text-[.9rem] md:text-[1.05rem] leading-[1]">
        <p>Hiring</p>
        <div className="w-1 h-1 bg-[#66706C] rounded-full"></div>
        <p>Part-Time</p>
        <div className="w-1 h-1 bg-[#66706C] rounded-full"></div>
        <p>On-Site</p>
        <div className="w-1 h-1 bg-[#66706C] rounded-full"></div>
        <p>All Locations</p>
      </div>
      <div className="job-title my-6 md:my-8  xl:my-10 ">
        <h3 className="text-[2rem] sm:text-[2.15rem] md:text-[2.5rem] lg:text-[3rem] leading-[1] font-bold text-white">
          Associate
        </h3>
        <p className="text-base md:text-[1.1rem]  xl:text-[1.15rem] text-[#B2C2C0] mt-3 md:mt-4 lg:mt-5">
          Our part-time Associate role is open at every location, all the time.
          Jump in on the guest floor, run live games, and deliver the
          guest-obsessed experience we're known for.
        </p>
      </div>
      <div className="job-cta-row flex items-center space-x-4 md:space-x-5 pt-2 ">
        <button className="inline-block border border-white rounded-full bg-transparent px-7 py-2  md:px-6 md:py-2.5 lg:py-3  xl:px-8  text-base md:text-[1.1rem] text-white font-medium hover:bg-red-700 hover:border-red-700 transition-all duration-300">
          Learn More
        </button>
        <a href="/careers/apply#job-application"  className="inline-block border border-red-600 rounded-full bg-red-600 px-7 py-2  md:px-6 md:py-2.5 lg:py-3  xl:px-8  text-base md:text-[1.1rem] text-white font-medium hover:bg-red-700 hover:border-red-700 transition-all duration-300">
          Apply Now
        </a>
      </div>
    </div>
  );
}
