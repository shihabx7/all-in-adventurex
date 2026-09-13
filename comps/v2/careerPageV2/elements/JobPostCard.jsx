import { FiMapPin, FiMonitor } from "react-icons/fi";
import { PiBriefcaseLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";

export default function JobPostCard({ job }) {
  return (
    <div className="job-card border border-[#E9DFCF]  rounded-[10px] bg-white/70 px-4 py-5 sm:p-6  md:p-5 lg:p-6  xl:p-8">
      <div className="job-card-head">
        <p className="text-[#895003] font-semibold uppercase text-xs md:text-[.9rem] leading-[1] mb-2 md:mb-3">
          Management
        </p>
        <h2 className="text-[1.75rem] md:text-[1.875rem] lg:text-[2rem] leading-[1.25] font-bold text-[#1D2321]">
          Store Manager
        </h2>
      </div>
      <div className="card-tags flex flex-wrap items-center gap-1.5 md:gap-2 text-[#EFA13A] text-xs md:text-sm my-6 md:my-7 lg:my-8">
        <div className="tag-item  flex items-center gap-1 rounded-md bg-[#EFE8DC] text-[#383838] px-3 sm:px-4 py-2">
          <FiMapPin />
          <p>Albany, NY</p>
        </div>
        <div className="tag-item  flex items-center gap-1 rounded-md bg-[#EFE8DC] text-[#383838] px-3 sm:px-4 py-2">
          <PiBriefcaseLight />
          <p>Full-Time</p>
        </div>
        <div className="tag-item  flex items-center gap-1 rounded-md bg-[#EFE8DC] text-[#383838] px-3 sm:px-4 py-2">
          <FiMonitor />
          <p>On-site</p>
        </div>
        <div className="tag-item  flex items-center gap-1 rounded-md bg-[#EFE8DC] text-[#383838] px-3 sm:px-4 py-2">
          <GoPerson />
          <p>1 Opening</p>
        </div>
      </div>
      <div className="card-btn flex items-center space-x-3 md:space-x-4">
        <button className="inline-block border border-[#DFD7CB] rounded-full bg-transparent px-6 py-2 lg:py-2.5  xl:px-7  text-base md:text-[1.1rem] text-[#1D2321] font-medium hover:text-white hover:bg-red-700 hover:border-red-700 transition-all duration-300">
          Learn More
        </button>
        <a href="/careers/apply#job-application" className="inline-block border border-red-600 rounded-full bg-red-600 px-6 py-2 lg:py-2.5  xl:px-7  text-base md:text-[1.1rem] text-white font-medium hover:bg-red-700 hover:border-red-700 transition-all duration-300">
          Apply Now
        </a>
      </div>
    </div>
  );
}
