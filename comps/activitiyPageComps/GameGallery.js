import TitleSeparator from "../util/TitleSeparator"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const GameGallery=(props)=>{

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
          partialVisibilityGutter: 40
        }
      };


    return (

        <div className="game-gallery " style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }}> 
            <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-28 px-4"> 
                <div className="s-title"> 
                     
                    <TitleSeparator title="OUR ALL GAME IMAGES" color="golden-text" weight="font-bold"/>
                    <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-16">
                                 <p className="text-gray-700 md:px-8">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                    </div>
                </div>
                <div className="hidden md:block game-gallery"> 
                    <div className="grid md:grid-cols-3 gap-4">
                        {
                            props.galleryitem.map((item)=>{

                                return(
                                    <div key={item.id} className="game-gl-item cursor-pointer shadow-lg borderr-2 border-transparent hover:border-2 hover:border-[#D3A54F]"> 
                                    <img src={
                                        item.img
                                    }></img>
                                </div>
                                )
                            })
                        }

                    </div>

                </div>
                {/*============== gallery slider========== */}
                <div className="game-gallery-slider md:hidden"> 
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
                       dotListClass="custom-dot-list-style"
                       itemClass="game-carousel-card game-gallery-carousel px-2 lg:px-3 py-4 md:py-8"
                       renderDotsOutside={true}
                       partialVisible={true}

                     >
                             {
                            props.galleryitem.map((item)=>{

                                return(
                                    <div key={item.id} className="game-gl-item"> 
                                    <img src={
                                        item.img
                                    }></img>
                                </div>
                                )
                            })
                        }

                     </Carousel>
             
                </div>

                {/* ===============gallery slider============= */}

            </div>

        </div>
    )
}

export default GameGallery