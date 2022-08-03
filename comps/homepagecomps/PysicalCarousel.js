import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const PysicalCarousel=({othergames})=>{

  const showLocation=()=>{
       
    //setGamSlug(slug)
    document.getElementById('locmenu').classList.remove('hidden')
    
  }
  const showDescription=(description)=>{
    const cutDescription=description.slice(0, 100);
    return cutDescription
} 
    const responsive = {
        desktoplg: {
            breakpoint: { max: 4000, min: 1440 },
            items: 4,
            slidesToSlide: 1,
            partialVisibilityGutter: 0
          },
        desktop: {
          breakpoint: { max: 1440, min: 1024 },
          items: 4,
          slidesToSlide: 1,
          partialVisibilityGutter: 0
        },
        tablet: {
          breakpoint: { max: 1024, min: 520 },
          items: 3,
          slidesToSlide:1,
          partialVisibilityGutter:20
        },
        mobile: {
          breakpoint: { max: 520, min: 0 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 40
        }
      };
    return (
    <div className="full-carousel md:max-w-[88%] lg:max-w-[1366px] mx-auto pysicalescapecarousel"> 
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
     containerClass="carousel-container"
     removeArrowOnDeviceType={["tablet", "mobile"]}
     //deviceType={this.props.deviceType}
     dotListClass="custom-dot-list-style physical-escape-dots"
     itemClass="game-carousel-card px-2 lg:px-3 py-4 md:py-8"
     renderDotsOutside={true}
     partialVisible={true}
    
   >
    {
      othergames.map((othergame)=>{

        return(
          <div key={othergame.id} className="text-white bg-gray-300 game-slider-card card-border" style={{
            background:"url('"+othergame.bgimg+"')"
          }}>
            <div className="card-container">
                <div className="card-head flex justify-between items-center p-4 pb-8">
                    <div className="card-info">
                    <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/inperson.svg"></img></span><span className="text-sm">{othergame.type}</span>  </p>
                        <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm">{othergame.age}</span>  </p> 
                        <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm">{othergame.duration} Minutes</span>  </p>
                        <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm">{othergame.minplayers}-{othergame.maxplayers} Players</span>  </p>
                    </div>
                    <div className="card-ribbon">
                            <div className="inline-block text-center py-2 px-4 bg-red-600">
                                <p className="text-lg text-white">FROM</p>
                                <p className="text-3xl text-white font-bold">{othergame.price}</p>
                            </div>
                    </div>
                </div>
                <div className="card-gap py-10"> 
     
                </div>
                <div className="card-bottom p-4 pt-12"> 
                    <div className="card-game-desc text-center">
                        <h3 className="card-game-title text-2xl lg:text-3xl font-bold uppercase text-white">{othergame.title}</h3>
                        <p className="text-gray-200 lg:text-lg">{showDescription(othergame.description)}</p>
                    </div>
                    <div className="card-game-link mt-4 text-center">
                        <button className="border max-w-[200px] card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                        <Link href={"/activities/"+othergame.slug}> 
                             <a className="border max-w-[200px] block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</a>
                        </Link>
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

export default PysicalCarousel