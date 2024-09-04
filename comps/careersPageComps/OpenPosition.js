import Link from "next/link";
import TitleSeparator from "../util/TitleSeparator";
const OpenPosition = (props) => {
  return (
    <div
      id="alljobs"
      className="open-positions relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]"
    >
      {/*======================= boder img============== */}

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

      <div className="section-container max-w-7xl mx-auto relative z-30 pb-16 md:pb-20 lg:pb-28 px-4">
        <div className="section-title">
          <TitleSeparator title="BROWSE OUR OPEN POSITIONS" />
          <p className="max-w-[800px] md:text[18px] lg:text-[20px] mx-auto text-center mt-4 md:mt-6 mb-8 md:mb-12 lg:mb-16 text-gray-700">
            Our mission-based culture means our work is challenging and intense,
            but also incredibly rewarding and fun! Does this sound epic to you?
            Join us.
          </p>
        </div>
        <div className="core-box-open-pos grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 lg:gap-8">
          {props.jobCardList.map((job, index) => {
            return (
              <div
                key={index + 1}
                className="core-card rounded-xl bg-[#FDF0D1] px-4 pt-4 pb-6 md:p-6 lg:p-8 flex flex-col space-y-6 justify-between h-full"
              >
                <div className="job-head">
                  <h3 className="text-[#111111] font-semibold text-[1.5rem] md:text-2xl lg:text-3xl ">
                    {job.jobName}
                  </h3>
                  <div
                    className=" md:text[18px] lg:text-[20px] text-[#333333] mt-2 md:mt-2"
                    dangerouslySetInnerHTML={{ __html: job.cardText }}
                  ></div>
                </div>
                <div className="jop-pg-link ">
                  <a
                    href={"/careers/" + job.jobSlug}
                    className="inline-block py-3 px-10 lg:py-4 lg:px-12 bg-red-600 hover:bg-red-700 text-white lg:text-lg rounded-full"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OpenPosition;
