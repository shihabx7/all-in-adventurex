
const MainTestimonials=(props)=>{


    return(
        <div className="main-tes-box max-w-[990px] mx-auto">

                {
                    props.testimonials.map((testimonial)=>{

                        return(

                        
                            testimonial.category==props.category &&
                            <div key={testimonial.id} className="drop-shadow-lg md:bg-black flex flex-col md:flex-row md:space-x-2 lg:space-x-4 my-8 items-center justify-between">
                                    <div className="main-tes-img px-4 md:px-0 md:w-[39%] mb-[-40%] md:mb-0 relative z-30">
                                            <img className="w-full" src={testimonial.img}></img>
                                    </div>
                                    <div className="main-tes-desc text-center md:text-left bg-black md:w-[60%] px-4 pb-6 pt-[46%] md:py-2 md:px-2">
                                        <div className="main-tes-rev-star"><img className="mx-auto md:mx-0" src="/assets/reviews/rev-5star.svg"></img></div>
                                        <h2 className="text-white font-medium text-[20px] md:text-[24px] mb-2">{testimonial.title}</h2>
                                        <p className="text-gold italic font-cr">{testimonial.description}</p>
                                        <p className="text-[#AFAFAF] mt-4">{testimonial.author}</p>
                                    </div>

                            </div>
                            )
                    })
                }

        </div>
    )
}

export default MainTestimonials