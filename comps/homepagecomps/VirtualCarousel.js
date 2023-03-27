import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
const VirtualCarousel=({virtualgames})=>{
 
  const showLocation=()=>{
    const body = document.getElementsByTagName('body')[0];
        body.classList.add('overflow-hidden')
    document.getElementById('locmenu').classList.remove('hidden')
    
  }
  const showDescription=(description)=>{
    if(description.length>144){
      const cutDescription=description.slice(0, 144)+" ...";
      return cutDescription
    }
 
    return description
    
}
const openBooking=(booking)=>{
  FH.open({
    shortname: booking.shortname,
    fallback: 'simple', 
    fullItems: 'yes', 
    flow: booking.flow, 
    view: { item: booking.item }
  });
}
 
    const responsive = {
        desktoplg: {
            breakpoint: { max: 4000, min: 1440 },
            items: 2,
            slidesToSlide: 1,
            partialVisibilityGutter: 0
          },
        desktop: {
          breakpoint: { max: 1440, min: 1024 },
          items: 2,
          slidesToSlide: 1,
          partialVisibilityGutter: 0
        },
        tablet: {
          breakpoint: { max: 1024, min: 640 },
          items: 2,
          slidesToSlide:1,
          partialVisibilityGutter: 0
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 0
        }
      };
    return (
    <div className="full-carousel v-slider-home inp-car md:max-w-[100%] lg:max-w-[62%] 2xl:max-w-[41%] mx-auto md:pb-8"> 
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
    // removeArrowOnDeviceType={["tablet", "mobile"]}
     //deviceType={this.props.deviceType}
     dotListClass="custom-dot-list-style vr-dots"
     itemClass="game-carousel-card px-2 lg:px-3 py-4 md:py-8"
     renderDotsOutside={true}
     partialVisible={true}
   >
     {/*====== slide 1========= */}

     {
        virtualgames.map((virtualgame)=>{

          return(
            <div key={virtualgame.id} className="text-white bg-gray-300 game-slider-card mb-shadow card-border" style={{
              background:"url('"+virtualgame.bgimg+"')"
            }}>
              <div className="card-container">
                  <div className="card-head flex justify-between items-center p-4 md:pb-8">
                      <div className="card-info">
                          <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/virtual-icon.svg"></img></span><span className="text-sm">{virtualgame.type}</span>  </p>
                          <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm">{virtualgame.age}</span>  </p> 
                          <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm">{virtualgame.duration} Minutes</span>  </p>
                          <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm">{virtualgame.minplayers}-{virtualgame.maxplayers} Players</span>  </p>
                      </div>
                      <div className="card-ribbon">
                              <div className="inline-block text-center py-2 px-4 bg-red-600">
                                  <p className="text-md text-white">{virtualgame.category=="showroom"? "PER PERSON":"PER GROUP"}</p>
                                  <p className="text-3xl text-white font-bold">${virtualgame.price}</p>
                              </div>
                      </div>
                  </div>
                  <div className="card-gap py-5 md:py-8 lg:py-10"> 
       
                  </div>
                  <div className="card-bottom p-4 pt-8"> 
                      <div className="card-game-desc h-[170px] md:h-[160px] lg:h-[200px] 2xl:h-[204px] text-center">
                          <h3 className="card-game-title text-2xl lg:text-3xl font-bold uppercase text-white">{virtualgame.title}</h3>
                          <p className="text-gray-200 lg:text-lg">{ showDescription(virtualgame.description)}</p>
                      </div>
                      <div className="card-game-link text-center">
                         
                          {
                           virtualgame.bookinglink &&
                           <a target="_blank" href={virtualgame.bookinglink} className="border block max-w-[200px] mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</a>
                          }
                          {
                           virtualgame.booking &&
                           <button onClick={()=>openBooking(virtualgame.booking)} className="border block max-w-[200px] mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                          }
                         
                             <a href={"/"+virtualgame.slug } className="border max-w-[200px] block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</a>
                        
                      </div>
                      
                   </div>
              </div>
       
            </div>
          )
          


        })
     }
     

    
      
   </Carousel>
   </div>
    )
}

export default VirtualCarousel;