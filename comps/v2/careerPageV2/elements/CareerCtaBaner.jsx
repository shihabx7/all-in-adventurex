import Image from "next/image";
export default function CareerCtaBaner({ job }) {
  return (
    <div className="career-cta-baner bg-[#191919] rounded-[10px] border border-[#894f03] drop-shadow-md relative">
      <div className="baner-bg-img w-full h-full absolute ">
        <Image
          src="/assets/career-page/career-cta-baner-bg.jpg"
          alt="all in adventures career"
          layout="fill"
          objectFit="cover"
          className="rounded-[10px]"
        />
      </div>
      <div className="content-box rounded-[10px] bg-black/80 relative ">
        <div className="max-w-[840px] mx-auto  px-4 xm:px-6 md:px-10 py-8 xm:py-10 md:py-12 lg:py-16">
          <h2 className="text-gold text-2xl md:text-[2rem] lg:text-[2.5rem] 2xl:text-[2.75rem] leading-[1.2] font-os font-bold uppercase text-center">
            Don't see your perfect fit right now?
          </h2>
          <p className="text-[#FFFFFF] lg:text-lg 3xl:text-[1.2rem] text-center max-w-[740px] mx-auto mt-3 md:mt-3 lg:mt-5">
            We're always looking for talented people. Apply now and let us know
            how you can contribute — we'll keep you in mind as new roles open
            up.
          </p>
          <div className="cta-btn-row flex justify-center items-center mt-6 md:mt-8">
            <a href="/careers/apply#job-application" className="inline-block border border-red-600 rounded-full bg-red-600 px-10 py-2.5 sm:px-12 md:px-14 md:py-3.5 lg:py-4  xl:px-16  text-base md:text-[1.2rem] xl:text-[1.25rem] text-white font-medium hover:bg-red-700 hover:border-red-700 transition-all duration-300">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
