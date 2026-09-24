import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";

import { FiMapPin, FiMonitor } from "react-icons/fi";
import { PiBriefcaseLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";

export default function AssJobModal({ pinJobData, setShowPinJobModal }) {
  const [jobTags, setJobTags] = useState([]);

  useEffect(() => {
    const st = pinJobData.commaSeparetedTags.toString();
    const stArr = st.split(",");
    setJobTags(stArr);
  }, []);

  const closeJobDetails = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setShowPinJobModal(false);
  };
  return (
    <div className="job-pin-modal-box full-sceen-view-modal top-0 left-0 bg-[#211906]/20 md:mt-5 fixed w-full h-screen z-[100000]">
      <div className="w-full h-full flex flex-col justify-center  items-center">
        <div className="modal-content max-w-[800px]  h-full  overflow-x-hidden overflow-y-scroll rounded-lg rleative">
          <div className="job-modal-head bg-[#211906] p-3 pt-0 rm:p-4 rm:pt-0 sm:p-5 sm:pt-0 lg:p-6 lg:pt-0 rounded-t-lg sticky top-0">
            <div className="flex justify-end close-btn pt-4">
              <button
                onClick={closeJobDetails}
                className="inline-block border border-white text-white bg-transparent hover:bg-red-700 hover:border-red-700 text-[1.15rem] md:text-[1.5rem] rounded-full leading-[1] p-2"
              >
                <GrClose />
              </button>
            </div>
            <div className="job-title">
              {jobTags.length > 0 && (
                <div className="job-info flex items-center gap-1.5 rm:gap-2 md:gap-3 lg:gap-4 text-[#EFA13A] text-[.8rem] sm:text-[.9rem] md:text-[1.05rem] leading-[1]">
                  {jobTags.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 rm:gap-2 md:gap-3 lg:gap-4"
                      >
                        <p>{item.trim()}</p>
                        {index < jobTags.length - 1 && (
                          <div className="w-1 h-1 bg-[#66706C] rounded-full"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              {jobTags.length <= 0 && (
                <div className="job-info flex items-center gap-1.5 rm:gap-2 md:gap-3 lg:gap-4 text-[#EFA13A] text-[.8rem] sm:text-[.9rem] md:text-[1.05rem] leading-[1]">
                  <p>Hiring</p>
                  <div className="w-1 h-1 bg-[#66706C] rounded-full"></div>
                  <p>Part-Time</p>
                  <div className="w-1 h-1 bg-[#66706C] rounded-full"></div>
                  <p>On-Site</p>
                  <div className="w-1 h-1 bg-[#66706C] rounded-full"></div>
                  <p>All Locations</p>
                </div>
              )}
              <h3 className="text-[1.75rem] sm:text-[2.15rem] md:text-[2.25rem] lg:text-[2.5rem] leading-[1] font-bold text-white mt-4 md:mt-6">
                {pinJobData.jobTitle}
              </h3>
            </div>

            <div className="text-[.94rem] rm:text-sm zm:text-base md:text-[1.1rem] xl:text-[1.15rem] text-[#B2C2C0] mt-5 md:mt-4 lg:mt-6">
              {pinJobData.cardText}
            </div>
          </div>
          <div className="job-modal-bottom rounded-t-lg bg-[#FBF7EE] p-3 rm:p-4 sm:p-5 lg:p-6">
            <div
              className="job-modal-desc text-[#282828] text-sm sm:text-base lg:text-[1.1rem] "
              dangerouslySetInnerHTML={{
                __html: pinJobData.description,
              }}
            ></div>
            <div className="mt-7 pb-9 sm:pb-10 md:mt-10 md:pb-8 apply-btn">
              <a
                href="/careers/apply"
                className="inline-block border border-red-600 rounded-full bg-red-600 px-12 py-2.5 sm:py-3 sm:px-14  lg:px-16  text-base md:text-[1.1rem] text-white font-medium hover:bg-red-700 hover:border-red-700 transition-all duration-300"
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
