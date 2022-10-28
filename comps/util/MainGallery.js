import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MainGallery=(props)=>{

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


    return(
            <div className="mt-4 md:mt-8 lg:mt-12">
                {/*============== gallery pc view ===============*/}
                    <div className="hidden md:block game-gallery"> 
                    <div className="grid md:grid-cols-3 gap-4">
                        {
                            props.galleryitem.map((item)=>{

                                
                                return(
                                    item.category==props.category &&
                                    <div key={item.id} className="game-gl-item cursor-pointer shadow-lg border-2 border-transparent hover:border-2 hover:border-[#D3A54F]"> 
                                    <img src={
                                        item.gallery_img
                                    }></img>
                                </div>
                                )
                            })
                        }

                    </div>

                </div>
                {/*============== gallery pc view ===============*/}
                {/*============== gallery pc view ===============*/}
                  <div className="main-gallery game-gallery-slider slider md:hidden">
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
                                    item.category==props.category &&
                                    <div key={item.id} className="game-gl-item"> 
                                    <img src={
                                        item.gallery_img
                                    }></img>
                                </div>
                                )
                            })
                        }

                     </Carousel>

                        </div>

                {/*============== gallery pc view ===============*/}

            </div>
        
    )

}

export default MainGallery