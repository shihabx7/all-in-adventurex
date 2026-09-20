import { FaRegTimesCircle } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import { FiMapPin, FiMonitor } from "react-icons/fi";
import { PiBriefcaseLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";

export default function JobPostModal({
  setShowJobModal,
  setActiveModalItem,
  jobData,
}) {
  const closeJobDetails = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setShowJobModal(false);
    setActiveModalItem(-1);
  };
  return (
    <div className="job-modal-box full-sceen-view-modal top-0 left-0 bg-[#211906]/20 pt-4 fixed w-full h-screen  overflow-x-hidden overflow-y-scroll z-[100000]">
      <div className="w-full min-h-full flex flex-col justify-center items-center">
        <div className="modal-content max-w-[800px] bg-[#FBF7EE] border-2 border-[#FBF7EE] rounded-lg rleative">
          <div className="job-modal-head bg-[#211906] p-3 pt-0 rm:p-4 rm:pt-0 sm:p-5 sm:pt-0 lg:p-6 lg:pt-0 rounded-t-lg sticky">
            <div className="flex justify-end close-btn pt-4">
              <button
                onClick={closeJobDetails}
                className="inline-block border border-white text-white bg-transparent hover:bg-red-700 hover:border-red-700 text-[1.15rem] md:text-[1.5rem] rounded-full leading-[1] p-2"
              >
                <GrClose />
              </button>
            </div>
            <div className="job-title">
              <p className="job-dept uppercase text-[#EFA13A] text-sm md:text-base">
                {jobData.jobType}
              </p>
              <h3 className="text-[1.75rem] sm:text-[2.15rem] md:text-[2.25rem] lg:text-[2.5rem] leading-[1] font-bold text-white mt-1 md:mt-2">
                <span className="uppercase">{jobData.positionName} </span>
                <span className="text-[1.15rem] md:text-[1.3rem] lg:text-[1.5rem]">
                  {jobData.mall
                    ? "- " + jobData.mall + ", " + jobData.jobLocation
                    : ""}
                </span>
              </h3>
            </div>

            <div className="job-tages text-xs md:text-sm flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-8">
              <div className="tag-item  flex items-center gap-1 rounded-md bg-[#EFE8DC] text-[#383838] px-3 sm:px-4 py-2">
                <FiMapPin />
                <p>{jobData.jobLocation}</p>
              </div>
              <div className="tag-item  flex items-center gap-1 rounded-md bg-[#EFE8DC] text-[#383838] px-3 sm:px-4 py-2">
                <PiBriefcaseLight />
                <p>{jobData.schedule}</p>
              </div>
              <div className="tag-item  flex items-center gap-1 rounded-md bg-[#EFE8DC] text-[#383838] px-3 sm:px-4 py-2">
                <FiMonitor />
                <p>{jobData.workPlace}</p>
              </div>
              <div className="tag-item  flex items-center gap-1 rounded-md bg-[#EFE8DC] text-[#383838] px-3 sm:px-4 py-2">
                <GoPerson />
                <p>{jobData.openingFor} Opening</p>
              </div>
            </div>
          </div>
          <div className="job-modal-bottom p-3 rm:p-4 sm:p-5 lg:p-6">
            <div
              className="job-modal-desc text-[#282828] text-sm sm:text-base lg:text-[1.1rem] "
              dangerouslySetInnerHTML={{
                __html: jobData.description,
              }}
            ></div>
            <div className="mt-6 md:mt-8 lg:mt-10 apply-btn">
              <a
                href="/careers/apply"
                className="inline-block border border-red-600 rounded-full bg-red-600 px-8 py-2 lg:py-2.5  xl:px-14  text-base md:text-[1.1rem] text-white font-medium hover:bg-red-700 hover:border-red-700 transition-all duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
