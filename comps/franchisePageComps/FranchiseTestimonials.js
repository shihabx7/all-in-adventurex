import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FranchiseTestimonials=()=>{

    const responsive = {
        desktoplg: {
            breakpoint: { max: 4000, min: 1440 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 0
          },
        desktop: {
          breakpoint: { max: 1440, min: 1024 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 520 },
          items: 1,
          slidesToSlide:1,
          partialVisibilityGutter: 0
        },
        mobile: {
          breakpoint: { max: 520, min: 0 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 0
        }
      }

    return(
        <div className="fran-tes bg-cover" style={{backgroundImage:"url('/assets/franchise-slider-bg.jpg')"}}>

                <div className="max-w-[900px] mx-auto py-16 md:py-2 lg:py-28 px-4 "> 
                    <div className="franchise-sl-box relative">
                    <Carousel
                         swipeable={true}
                         draggable={true}
                         showDots={true}
                         arrows={false}

                         responsive={responsive}
                         ssr={true} // means to render carousel on server-side.
                         infinite={true}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlay={ false }

                         keyBoardControl={true}
                         customTransition=".5s ease-in-out"
                         transitionDuration={500}
                         containerClass="carousel-container w-full"
                         removeArrowOnDeviceType={["tablet", "mobile"]}
                         //deviceType={this.props.deviceType}
                         dotListClass="custom-dot-list-style"
                         itemClass="frans-car-item pb-3 px-4"
                         renderDotsOutside={true}
                         partialVisible={true}

                       >
                        {/**============sl-1=================== */}
                            <div className="franchise-sl py-8 px-4 lg:py-12 md:px-8 lg:px-12 border border-[#D1B06F] rounded-xl bg-[#FFF7E2]">
                                    <div className="frans-tes-logo">
                                            <img className="max-w-[120px] mx-auto" src="/assets/svg/logo.svg"></img>
                                    </div>
                                    <div className="frans-tes-desc text-center mt-6 lg:mt-8">
                                        <p className="text-lg md:text-[20px] lg:text-[22px] lg:leading-[1.5] text-[#333333]">
                                        <span className="underline underline-offset-2 font-medium">"All In Adventures has been a great decision for us</span> . As we looked for a business to start,
                                         our primary consideration was that we wanted to be in a growing industry like escape rooms.
                                          Running the business has been straight forward without any surprises. We got all the systems
                                           and processes in place in every stage of our business from launcging to day-to-day operation.
                                            The team is always looking to improve the brand, continually striving for better,
                                             so we can build a really successful business."
                                        </p>
                                    </div>
                                    <div className="frans-tes-auth mt-6 lg:mt-8">
                                            <p className="text-sm md:text-lg text-[#333333] font-thin text-center">John R. | All In Adventures | Albany, NY</p>
                                    </div>

                            </div>
                            {/**============sl-2=================== */}
                            <div className="franchise-sl py-8 px-4 lg:py-12 md:px-12 lg:px-16 border border-[#D1B06F] rounded-xl bg-[#FFF7E2]">
                                    <div className="frans-tes-logo">
                                            <img className="max-w-[120px] mx-auto" src="/assets/svg/logo.svg"></img>
                                    </div>
                                    <div className="frans-tes-desc text-center mt-6 lg:mt-8">
                                        <p className="text-lg md:text-[20px] lg:text-[22px] lg:leading-[1.5] text-[#333333]">
                                        The presentation was on a completely different level. 
                                        others were just an online chat or phone call. <span className="underline underline-offset-2 font-medium">
                                        Getting to know the people at ALL IN ADVENTURES made them stand out,
                                             </span> 
                                        they were personal, trusting and fun to talk to. Getting to 
                                        know the people at ALL IN ADVENTURES made them stand out,
                                        </p>
                                    </div>
                                    <div className="frans-tes-auth mt-6 lg:mt-8">
                                            <p className="text-sm md:text-lg text-[#333333] font-thin text-center">C. Jhon (Owner) - ALL IN ADVENTURE - ALBANY, NY</p>
                                    </div>

                            </div>
                            {/**============sl-3=================== */}
                            <div className="franchise-sl py-8 px-4 lg:py-12 md:px-12 lg:px-16 border border-[#D1B06F] rounded-xl bg-[#FFF7E2]">
                                    <div className="frans-tes-logo">
                                            <img className="max-w-[120px] mx-auto" src="/assets/svg/logo.svg"></img>
                                    </div>
                                    <div className="frans-tes-desc text-center mt-6 lg:mt-8">
                                        <p className="text-lg md:text-[20px] lg:text-[22px] lg:leading-[1.5] text-[#333333]">
                                        The presentation was on a completely different level. 
                                        others were just an online chat or phone call. <span className="underline underline-offset-2 font-medium">
                                        Getting to know the people at ALL IN ADVENTURES made them stand out,
                                             </span> 
                                        they were personal, trusting and fun to talk to. Getting to 
                                        know the people at ALL IN ADVENTURES made them stand out,
                                        </p>
                                    </div>
                                    <div className="frans-tes-auth mt-6 lg:mt-8">
                                            <p className="text-sm md:text-lg text-[#333333] font-thin text-center">C. Jhon (Owner) - ALL IN ADVENTURE - ALBANY, NY</p>
                                    </div>

                            </div>
                    
                    </Carousel>
                    </div>

                </div>
            
        </div>
    )

}

export default FranchiseTestimonials