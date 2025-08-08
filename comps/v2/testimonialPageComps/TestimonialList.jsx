import { useState, useEffect } from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const TestimonialList = (props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="my-10 max-w-[760px] lg:max-w-[1000px]  xl:max-w-[1190px] mx-auto md:px-2">
      <div
        className="main-tes-box columns-1 md:columns-2 lg:columns-3 gap-6]]'
       space-y-6 lg:gap-5 lg:space-y-5 gap-5 space-y-5 xl:gap-6 xl:space-y-6"
      >
        {props.testimonialsList.map((testimonial, index) => {
          return (
            <div
              key={index + 1}
              className="tgx break-inside-avoid testi-grid-item bg-black rounded-[12px] "
            >
              <div className="testi-img">
                <img
                  className=" rounded-t-[12px] "
                  src={testimonial.testimonialImage.url}
                  alt={testimonial.testimonialImage.alt}
                ></img>
              </div>
              <div className="main-tes-desc  py-5 px-4 lg:py-5 lg:px-3 xl:py-6 xl:px-5 ">
                <p className="text-gray-300">{index + 1}</p>
                <div className="main-tes-rev-star flex item-center space-x-2 mb-2">
                  <img
                    className=" h-[20px]"
                    alt="five star rating icon"
                    src="/assets/testimonials/google-icon.svg"
                  ></img>
                  <img
                    className=" h-[16px]"
                    alt="five star rating icon"
                    src="/assets/testimonials/five-star-rating.svg"
                  ></img>
                </div>
                <h2 className="text-white font-medium text-[20px] md:text-[24px] leading-[1.15] mb-3">
                  {testimonial.title}
                </h2>
                <p className="text-[#e0bf62] italic font-cr xl:text-[17px]">
                  {testimonial.description}
                </p>
                <div className="testi-meta flex justify-between items-end mt-4">
                  <div>
                    <p className="text-[#d0d0d0] ">{testimonial.author}</p>
                    <p className="text-[#929292] ">
                      {testimonial.authorLocation
                        ? testimonial.authorLocation
                        : "East Brunswick, NJ"}
                    </p>
                  </div>
                  <div className="">
                    <a
                      className="text-[#929292]  w-full hover:text-[#e0bf62] flex flex-nowrap justify-end items-center space-x-1"
                      href="#"
                    >
                      <span>See Originals </span>
                      <span>
                        <RiExternalLinkLine />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialList;
