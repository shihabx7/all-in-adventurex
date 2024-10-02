import { useState } from "react";
import TitleSeparator from "../util/TitleSeparator";
import MainFaqs from "./MainFaqs";

const AllFaq = (props) => {
  const [showFaq, setShowFaq] = useState(null);

  // console.log(faqArr)
  // console.log(faqgroup)

  return (
    <div className="all-faq relative bg-black py-16 md:py-24 lg:py-32 px-4 overflow-hidden mt-[-60px] md:mt-[0px]">
      <div className="gift-lt max-w-[72px] md:max-w-[120px] lg:max-w-[130px] opacity-[0.4] absolute top-0 left-0">
        <img className="w-full" src="/assets/faq-q.png"></img>
      </div>
      <div className="gift-rt absolute">
        <img src="/assets/Compas-brown.png"></img>
      </div>
      <div
        className="max-w-7xl mx-auto relative z-30"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="section-title mb-8 md:mb-12">
          <TitleSeparator
            title="EVERYTHING YOU NEED TO KNOW"
            color="text-gold"
            weight="font-bold"
          />
          <p className="mt-4 text-gray-100 max-w-2xl mx-auto text-center lg:text-lg">
            Browse through these FAQs to find answers to commonly raised
            questions. If you don't see what's on your mind, reach out to us
            anytime on phone or email.
          </p>
        </div>

        {props.faqGroup.map((group, index) => {
          return (
            <div
              key={index + 1}
              className="faq-container py-4 md:py-8 max-w-6xl mx-auto  transition duration-150 ease-in "
            >
              <div className="faq-group-title text-gold pb-2 md:pb-6 lg:pb-8">
                <h2 className="text-[24px] md:text-2xl lg:text-3xl font-bold font-os uppercase">
                  {group.faqGroupLabel}
                </h2>
              </div>
              <div className="faq-box">
                <MainFaqs faqList={group.faqs} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllFaq;
