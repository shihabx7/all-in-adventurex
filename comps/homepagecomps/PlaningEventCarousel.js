
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const PlaningEventCarousel=({events})=>{
 

  const showLocation=()=>{

    document.getElementById('locmenu').classList.remove('hidden')
    
  }
  const showDescription=(description)=>{
    const cutDescription=description.slice(0, 40)+" ...";
    return cutDescription
} 
    const responsive = {
        desktoplg: {
            breakpoint: { max: 4000, min: 1440 },
            items: 5,
            slidesToSlide: 1,
            partialVisibilityGutter: 30
          },
        desktop: {
          breakpoint: { max: 1440, min: 1024 },
          items: 3,
          slidesToSlide: 1,
          partialVisibilityGutter: 24
        },
        tablet: {
          breakpoint: { max: 1024, min: 520 },
          items: 2,
          slidesToSlide:1,
          partialVisibilityGutter: 20
        },
        mobile: {
          breakpoint: { max: 520, min: 0 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 60
        }
      };
    return (
    <div className="full-carousel planning-event-carousel  "> 
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
    // autoPlaySpeed={5000}
     keyBoardControl={true}
     customTransition=".5s ease-in-out"
     transitionDuration={500}
     containerClass="carousel-container"
     removeArrowOnDeviceType={["tablet", "mobile"]}
     //deviceType={this.props.deviceType}
     dotListClass="custom-dot-list-style"
     itemClass="game-carousel-card px-2 lg:px-3 py-4 md:py-8"
     renderDotsOutside={true}
     partialVisible={true}
   >

    {
        events.map((event)=>{

          return(
            <div key={event.id} className="text-white bg-gray-300 game-slider-card card-border" style={{
              background:"url('"+event.bgimg+"')"
            }}>
              <div className="card-container">
                  <div className="card-head plan-title flex justify-center pt-8 pb-8 px-4">
                      <div className="card-info text-center ">
                        <h3 className="text-center text-xl lg:text-2xl font-bold uppercase text-white">{event.title}</h3>
                      </div>
                   
                  </div>
                  <div className="card-gap py-10"> 
       
                  </div>
                  <div className="card-bottom p-4 pt-12"> 
                      <div className="card-game-desc text-center">
                          
                          <p className="text-gray-200 lg:text-lg">{showDescription(event.description)}</p>
                      </div>
                      <div className="card-game-link mt-4 text-center">
                          <button onClick={showLocation} className="border max-w-[200px] card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                          <Link href={"/events/"+event.slug}>
                            <a className="border max-w-[200px] block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE
                            </a>
                          </Link>
                      </div>
                      
                   </div>
              </div>
       
            </div>
          )
        })

    }
     {/*====== slide 1========= */}
    
      
   </Carousel>
   </div>
    )
}

export default PlaningEventCarousel;