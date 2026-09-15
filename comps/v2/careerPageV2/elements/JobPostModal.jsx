import { FaRegTimesCircle } from "react-icons/fa";
import { GrClose } from "react-icons/gr";


import { FiMapPin, FiMonitor } from "react-icons/fi";
import { PiBriefcaseLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
export default function JobPostModal({ setShowJobModal }) {
  const closeJobDetails = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setShowJobModal(false);
  };
  return (
    <div className="job-desc-modal full-sceen-view-modal top-0 left-0 bg-[#211906]/20 pt-4 fixed w-full h-screen  overflow-x-hidden overflow-y-scroll z-[100000]">
      <div className="w-full min-h-full flex flex-col justify-center items-center">
        <div className="modal-content max-w-[800px] bg-[#FBF7EE] border-2 border-[#FBF7EE] rounded-lg ">
          <div className="job-modal-head bg-[#211906] p-3 pt-0 rm:p-4 rm:pt-0 sm:p-5 sm:pt-0 lg:p-6 lg:pt-0 rounded-t-lg ">
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
                Management
              </p>
              <h3 className="text-[1.75rem] sm:text-[2.15rem] md:text-[2.25rem] lg:text-[2.5rem] leading-[1] font-bold text-white">
                Store Manager
              </h3>
            </div>

            <div className="job-tages text-xs md:text-sm flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-8">
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
          </div>
          <div className="job-modal-bottom p-3 rm:p-4 sm:p-5 lg:p-6">
            <div className="job-desc text-[#282828] text-sm sm:text-base lg:text-[1.1rem] ">
              This is a great opportunity for anyone excited for the chance to
              grow and develop with a startup company that is looking to change
              the face of how people interact socially through live games and
              activities.
            </div>
            <div className="job-roles mt-3 rm:mt-4 md:mt-6">
              <h2 className="font-semibold text-[1.5rem] md:text-[1.75rem]">
                About the role
              </h2>
              <div className="role-list-box mt-2 md:mt-3">
                <ul className="rol-list  list-disc  flex flex-col space-y-4 text-[#282828] text-base sm:text-[1.1rem] lg:text-[1.15rem] leading-[1.6] pl-5 sm:pl-6">
                  <li>
                    Inspire your team to achieve success by ensuring the overall
                    satisfaction of our guests
                  </li>
                  <li>
                    Manage the day-to-day operations and nancial success of the
                    store including growing sales through local store marketing
                    efforts
                  </li>
                  <li>
                    Provide outstanding guest satisfaction using professional
                    communication
                  </li>
                  <li>
                    You and your team will greet new guests as they arrive for
                    their scheduled appointments, or simply stop in to inquire
                    about the experience
                  </li>
                  <li>
                    Good verbal skills are important as you will be informing
                    guests about the overall experience, theme options, and
                    safety rules and regulations
                  </li>
                  <li>
                    Even if they beg, you won't give away clues, but you could
                    be asked to interpret a theme's overall mission to help our
                    guests get moving
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
