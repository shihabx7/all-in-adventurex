import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function EventFaqListView({ faqList }) {
  const [faqAns, setFaqAns] = useState(0);

  const showAns = (id) => {
    if (faqAns != id) {
      setFaqAns(id);
    } else {
      setFaqAns(-1);
    }
  };

  return (
    <div className="faq-list-box">
      {faqList.map((item, index) => {
        return (
          <div key={index} className="faq-panel">
            <div
              onClick={() => showAns(index)}
              className="group faq-q flex items-center space-x-2 justify-between text-[#311D00] cursor-pointer py-3 md:py-4 px-2 md:px-4 lg:px-6  "
            >
              <div className="faq-ques-title flex space-x-1 md:space-x-2 ">
                <div className=" block text-[#CA9342] group-hover:text-[#A17533] text-2xl md:text-4xl font-medium">
                  Q.{" "}
                </div>
                <div className="group-hover:text-[#A17533] block font-medium  mt-[6px] md:mt-[10px] lg:mt-[6px] text-[17px] md:text-[20px] lg:text-[22px]">
                  {item.question}{" "}
                </div>
              </div>
              <div className="faq-icon text-gold text-[20px] md:text-3xl">
                {faqAns == index ? <FiChevronUp /> : <FiChevronDown />}
              </div>
            </div>
            <div className="faq-a text-white border-b-[1px] border-[#D9CDB6]">
              {faqAns == index && (
                <div className="faq-ans-box  py-6 px-2 md:px-4 lg:px-6 flex space-x-1 md:space-x-2 ">
                  <div className="text-[#A17533] text-2xl md:text-4xl font-medium">
                    A.{" "}
                  </div>
                  <div className="text-[16px] md:text-[18px] xl:text-[19px] mt-2 md:mt-3 text-[#311D00]">
                    <div
                      className="product-des"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
