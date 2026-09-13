export default function JobCompetencies({ job }) {
  const tagArr = [
    "Attention to Detail",
    "Friendliness",
    "Professionalism",
    "Service & Sales Orientation",
    "High Integrity",
    "High Motivation",
    "A Positive “All In” Attitude",
    "Instills Trust",
  ];
  return (
    <div className="career-competencies bg-[#211906] rounded-[10px] relative z-20">
      <div className="max-w-[960px] mx-auto  px-4 xm:px-6 md:px-10 py-8 xm:py-10 md:py-16">
        <h2 className="text-gold text-[1.75rem] md:text-[2.45rem] lg:text-[2.5rem] 2xl:text-[2.75rem] leading-[1.2] font-os font-bold uppercase text-center">
          Skills, Traits & Key Competencies
        </h2>
        <p className="text-[#C5C5C5] lg:text-lg 3xl:text-[1.2rem] text-center mt-3 md:mt-5 mb-8 md:mb-12">
          We are eager to connect with proactive individuals who are dedicated
          to providing high-quality service. If you bring a positive attitude,
          adaptability, and the vibrant energy necessary to expertly support our
          guests' needs, we want you on our team. If you are also motivated to
          learn and appreciate a company that encourages professional growth, we
          welcome you to join us and advance your career here.
        </p>
        <div className="job-compitence-tags max-w-[780px] mx-auto flex flex-wrap sm:justify-center items-center gap-2 md:gap-3 lg:gap-4">
          {tagArr.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-[#1A1200] border border-[#423109] px-5 py-1.5 text-xs  md:text-sm text-[#D9D9D9]"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
