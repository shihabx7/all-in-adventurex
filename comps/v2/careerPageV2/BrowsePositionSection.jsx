import { useState, useEffect } from "react";
import JobSearchBar from "./elements/JobSearchBar";
import PinedJobPostCard from "./elements/PinedJobPostCard";
import JobPostCard from "./elements/JobPostCard";
import JobPostModal from "./elements/JobPostModal";
//jobPositionList={props.jobPositionList} jobPositionCardList={props.jobPositionCardList}
export default function BrowsePositionSection({
  jobPositionList,
  jobPositionCardList,
  jobSearchLocationList,
}) {
  const [showJobModal, setShowJobModal] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState(-1);
  const [jobCardList, setJobCardList] = useState(jobPositionCardList);

  const [jobSearchList, setJobSearchList] = useState([]);

  useEffect(() => {
    setShowJobModal(false);
    setActiveModalItem(-1);
    setJobCardList(jobPositionCardList);
  }, []);

  useEffect(() => {
    if (jobSearchList.length > 0) {
      setJobCardList(jobSearchList);
    } else {
      setJobCardList(jobPositionCardList);
    }
    setShowJobModal(false);
    setActiveModalItem(-1);
  }, [jobSearchList]);
  return (
    <>
      {showJobModal && activeModalItem !== -1 && (
        <JobPostModal
          setShowJobModal={setShowJobModal}
          setActiveModalItem={setActiveModalItem}
          jobData={jobCardList[activeModalItem]}
        />
      )}

      <div className="browse-position-section bg-[#FFF9EB] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px] lg:bg-[400px_400px] ">
        <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-24 xl:py-28 3xl:py-32 px-3 lm:px-4 md:px-6 xl:px-4">
          {/*=============================section title============================== */}
          <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12 md:max-w-[860px] lg:max-w-[900px] mx-auto">
            <h2 className="dark-gold py-[2px] text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] leading-[1.2] font-os font-bold uppercase text-center">
              Browse our open positions
            </h2>
            <p className="text-[#2E2E2E] mt-1 md:mt-2 text-center md:text-lg lg:text-xl md:max-w-[700px] mx-auto">
              Our mission-based culture means our work is challenging and
              intense, but also incredibly rewarding and fun! Does this sound
              epic to you? Join us.
            </p>
          </div>
          {/*=============================search bar  setJobCardList={setJobCardList}============================== */}
          <div className="jpb-search-bar">
            <JobSearchBar
              jobPositionList={jobPositionList}
              jobSearchLocationList={jobSearchLocationList}
              setJobSearchList={setJobSearchList}
            />
          </div>
          {/*=============================pin job post card ============================== */}
          <div className="pin-job my-8 md:my-12">
            <PinedJobPostCard />
          </div>
          {/*=============================latest job post card  ============================== */}
          <div className="job-po-card-box min-h-[500px]">
            <div className="latest-job  grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4.5 lg:gap-8">
              {jobCardList.map((item, index) => {
                return (
                  <div key={index} className="jobcard-item h-full">
                    <JobPostCard
                      setShowJobModal={setShowJobModal}
                      setActiveModalItem={setActiveModalItem}
                      itemNo={index}
                      cardData={item}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-[6.5rem] xm:h-[6rem]  md:h-[6.5rem] lg:h-[6rem] 2xl:h-[7rem]"></div>
      </div>
    </>
  );
}
