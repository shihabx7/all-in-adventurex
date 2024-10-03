import { useState, useEffect } from "react";
const TestimonialList = (props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="main-tes-box max-w-[990px] mx-auto">
      {props.testimonialsList.map((testimonial, index) => {
        return (
          <div
            itemProp={isClient ? "itemReviewed" : undefined}
            itemScope={isClient}
            itemType={isClient ? "https://schema.org/Game" : undefined}
            key={index + 1}
            className="drop-shadow-lg md:bg-black flex flex-col md:flex-row md:space-x-2 lg:space-x-4 my-8 items-center justify-between"
          >
            <div className="main-tes-img px-4 md:px-0 md:w-[39%] mb-[-40%] md:mb-0 relative z-30">
              <img
                className="w-full"
                itemProp={isClient ? "image" : undefined}
                src={testimonial.testimonialImage.url}
                alt={testimonial.testimonialImage.alt}
              ></img>
            </div>
            <div className="main-tes-desc text-center md:text-left bg-black md:w-[60%] px-4 pb-6 pt-[46%] md:py-2 md:px-2">
              <div className="main-tes-rev-star">
                <meta itemProp="ratingValue" content="5"></meta>
                <img
                  itemProp={isClient ? "image" : undefined}
                  className="mx-auto md:mx-0"
                  src="https://allinadventures.com/assets/reviews/rev-5star.svg"
                ></img>
              </div>
              <h2
                itemProp={isClient ? "name" : undefined}
                className="text-white font-medium text-[20px] md:text-[24px] mb-2"
              >
                {testimonial.title}
              </h2>
              <p
                itemProp={isClient ? "reviewBody" : undefined}
                className="text-gold italic font-cr"
              >
                {testimonial.description}
              </p>
              <p className="text-[#AFAFAF] mt-4">
                <span
                  itemProp={isClient ? "author" : undefined}
                  itemScope={isClient}
                  itemType={isClient ? "https://schema.org/Person" : undefined}
                >
                  <span itemProp={isClient ? "name" : undefined}>
                    {testimonial.author}
                  </span>
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialList;
