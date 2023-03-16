
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const PlaningEventCarousel=(props)=>{
 

  const showLocation=()=>{
    const body = document.getElementsByTagName('body')[0];
        body.classList.add('overflow-hidden')
    document.getElementById('locmenu').classList.remove('hidden')
    
  }
  const showDescription=(description)=>{
    if(description.length>144){
      const cutDescription=description.slice(0, 130)+" ...";
      return cutDescription
    }
 
    return description
    
}
const bookGame=(bookingData)=>{
  FH.open({
    shortname: bookingData.shortname,
    fallback: 'simple', 
    fullItems: 'yes', 
   flow:  bookingData.flow, 
    view: {item:bookingData.item}
  });
}
    const responsive = {
      desktoplg: {
        breakpoint: { max: 4000, min: 1640 },
        items: 5,
        slidesToSlide: 1,
        partialVisibilityGutter: 0
      },
      desktopmd: {
        breakpoint: { max: 1640, min: 1440 },
        items: 4,
        slidesToSlide: 1,
        partialVisibilityGutter: 0
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
          partialVisibilityGutter: 24
        },
        mobile: {
          breakpoint: { max: 520, min: 0 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 20
        }
      };
    return (
    <div className="full-carousel planning-event-carousel inp-car ev-car"> 
    <Carousel
     swipeable={true}
     draggable={true}
     showDots={true}
     arrows={true}
     
     responsive={responsive}
     ssr={true} // means to render carousel on server-side.
     infinite={false}
    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
    autoPlay={ false }
    // autoPlaySpeed={5000}
     keyBoardControl={true}
     customTransition=".5s ease-in-out"
     transitionDuration={500}
     containerClass="carousel-container"
     //removeArrowOnDeviceType={["tablet", "mobile"]}
     //deviceType={this.props.deviceType}
     dotListClass="custom-dot-list-style"
     itemClass="game-carousel-card px-2 lg:px-3 py-4 md:py-8"
     renderDotsOutside={true}
     partialVisible={true}
   >

    {
        props.events.map((event)=>{

          return(
            <div key={event.id} className="text-white bg-gray-300 game-slider-card card-border event-card bg-cover" >
              <div className="card-container" style={{
              background:"url('"+event.bgimg+"')"
            }}>
                  <div className="card-head plan-title flex justify-center pt-8 pb-8 px-4">
                      <div className="card-info text-center ">
                        <h3 className="text-center text-2xl lg:text-3xl font-bold uppercase text-white">{event.title}</h3>
                      </div>
                   
                  </div>
                  <div className="card-gap py-4 lg:py-8"> 
       
                  </div>
                  <div className="card-bottom p-4 pt-4 md:pt-10 lg:pt-12"> 
                      <div className="h-[80px] md:h-[90px] lg:h-[100px] 2xl:h-[92px] text-center">
                          
                          <p className="text-gray-200 lg:text-lg">{showDescription(event.description)}</p>
                      </div>
                      <div className="card-game-link mt-4 text-center">
                      {
                            (props.locationslug && props.eventbooking) &&
                            <> 
                            {
                              props.eventbooking.eventstatus==true &&
                              <button onClick={()=>{bookGame(props.eventbooking)}} className="border max-w-[200px] block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                            }
                            {
                              props.eventbooking.eventstatus==false &&
                            <a  href={"/"+props.locationslug+"/events/"+event.slug+"#eventform"} className="border max-w-[200px] block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW
                            </a>
                            }
                            </>
                         
                          }
                         
                          {
                            !props.locationslug &&

                            <button onClick={showLocation} className="border max-w-[200px] card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                          }
                         
                          {
                            props.locationslug &&

                            
                            <a href={"/"+props.locationslug+"/events/"+event.slug} className="border max-w-[200px] block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE
                            </a>
                        
                          }
                          {
                            !props.locationslug &&
                         
                            <a  href={"/events/"+event.slug} className="border max-w-[200px] block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE
                            </a>
                          
                          }
                          
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