import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const MegFaqlist = ({ faqList }) => {
  const [faqAns, setFaqAns] = useState(0);

  const showAns = (id) => {
    if (faqAns != id) {
      setFaqAns(id);
    } else {
      setFaqAns(0);
    }
  };

  return (
    <div className="faq-liscont">
      {faqList.map((item) => {
        return (
          <div key={item.id} className="faq-panel">
            <div
              onClick={() => showAns(item.id)}
              className="group faq-q flex items-center space-x-2 justify-between text-[#311D00] cursor-pointer py-3 md:py-4 px-2 md:px-4 lg:px-6  "
            >
              <div className="faq-ques-title flex space-x-1 md:space-x-2 ">
                <div className=" block text-[#CA9342] group-hover:text-[#A17533] text-2xl md:text-4xl font-medium">
                  Q.{" "}
                </div>
                <div className="group-hover:text-[#311D00] block  mt-[6px] md:mt-[10px] lg:mt-[6px] text-[17px] md:text-[20px] lg:text-[24px] font-medium">
                  {item.ques}{" "}
                </div>
              </div>
              <div className="faq-icon text-[#CA9342] text-[20px] md:text-3xl">
                {faqAns == item.id ? <FiChevronUp /> : <FiChevronDown />}
              </div>
            </div>
            <div className="faq-a text-white border-b-[1px] border-[#D9CDB6]">
              {faqAns == item.id && (
                <div className="faq-ans-box  py-6 px-2 md:px-4 lg:px-6 flex space-x-1 md:space-x-2 ">
                  <div className="text-[#A17533] text-2xl md:text-4xl font-medium">
                    A.{" "}
                  </div>
                  <div className="text-[16px] md:text-[18px] lg:text-[20px] mt-2 md:mt-3 text-[#311D00]">
                    <div
                      className="product-des"
                      dangerouslySetInnerHTML={{ __html: item.ans }}
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
};

export default MegFaqlist;
