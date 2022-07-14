
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PlaningEventCarousel=()=>{

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
     customTransition="all .5 ease-in-out"
     transitionDuration={500}
     containerClass="carousel-container"
     removeArrowOnDeviceType={["tablet", "mobile"]}
     //deviceType={this.props.deviceType}
     dotListClass="custom-dot-list-style"
     itemClass="game-carousel-card px-2 lg:px-3 py-4 md:py-8"
     renderDotsOutside={true}
     partialVisible={true}
   >
     {/*====== slide 1========= */}
     <div className="text-white bg-gray-300 game-slider-card card-border" style={{
       background:"url('/assets/sl-event-1.jpg')"
     }}>
       <div className="card-container">
           <div className="card-head plan-title flex justify-center pt-8 pb-8 px-4">
               <div className="card-info text-center ">
                 <h3 className="text-center text-xl lg:text-2xl font-bold uppercase text-white">PHYSICAL TEAM BUILDING ACTIVITES</h3>
               </div>
            
           </div>
           <div className="card-gap py-10"> 

           </div>
           <div className="card-bottom p-4 pt-12"> 
               <div className="card-game-desc text-center">
                   
                   <p className="text-gray-200 lg:text-lg">Once you complete your purchase you will be sent an</p>
               </div>
               <div className="card-game-link mt-4 text-center">
                   <button className="border card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                   <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
               </div>
               
            </div>
       </div>

     </div>
     {/*====== slide 2========= */}
     <div className="text-white bg-gray-300 game-slider-card  card-border" style={{
       background:"url('/assets/sl-event-1.jpg')"
     }}>
       <div className="card-container">
           <div className="card-head plan-title flex justify-center pt-8 pb-8 px-4">
               <div className="card-info text-center ">
                 <h3 className="text-center text-xl lg:text-2xl font-bold uppercase text-white">PHYSICAL TEAM BUILDING ACTIVITES</h3>
               </div>
            
           </div>
           <div className="card-gap py-10"> 

           </div>
           <div className="card-bottom p-4 pt-12"> 
               <div className="card-game-desc text-center">
                   
                   <p className="text-gray-200 lg:text-lg">Once you complete your purchase you will be sent an</p>
               </div>
               <div className="card-game-link mt-4 text-center">
                   <button className="border card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                   <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
               </div>
               
            </div>
       </div>

     </div>
      {/*====== slide 3========= */}
      <div className="text-white bg-gray-300 game-slider-card  card-border" style={{
       background:"url('/assets/sl-event-2.jpg')"
     }}>
       <div className="card-container">
           <div className="card-head plan-title flex justify-center pt-8 pb-8 px-4">
               <div className="card-info text-center ">
                 <h3 className="text-center text-xl lg:text-2xl font-bold uppercase text-white">BIRTHDAY PARTIES</h3>
               </div>
            
           </div>
           <div className="card-gap py-10"> 

           </div>
           <div className="card-bottom p-4 pt-12"> 
               <div className="card-game-desc text-center">
                   
                   <p className="text-gray-200 lg:text-lg">Once you complete your purchase you will be sent an</p>
               </div>
               <div className="card-game-link mt-4 text-center">
                   <button className="border card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                   <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
               </div>
               
            </div>
       </div>

     </div>
      {/*====== slide 4========= */}
      <div className="text-white bg-gray-300 game-slider-card  card-border" style={{
       background:"url('/assets/sl-event-3.jpg')"
     }}>
       <div className="card-container">
           <div className="card-head plan-title flex justify-center pt-8 pb-8 px-4">
               <div className="card-info text-center ">
                 <h3 className="text-center text-xl lg:text-2xl font-bold uppercase text-white">PARTIES &amp; EVENTS FOR FAMILIES</h3>
               </div>
            
           </div>
           <div className="card-gap py-10"> 

           </div>
           <div className="card-bottom p-4 pt-12"> 
               <div className="card-game-desc text-center">
                   
                   <p className="text-gray-200 lg:text-lg">Once you complete your purchase you will be sent an</p>
               </div>
               <div className="card-game-link mt-4 text-center">
                   <button className="border card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                   <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
               </div>
               
            </div>
       </div>

     </div>
      {/*====== slide 5========= */}
      <div className="text-white bg-gray-300 game-slider-card  card-border" style={{
       background:"url('/assets/sl-event-4.jpg')"
     }}>
       <div className="card-container">
           <div className="card-head plan-title flex justify-center pt-8 pb-8 px-4">
               <div className="card-info text-center ">
                 <h3 className="text-center text-xl lg:text-2xl font-bold uppercase text-white">VIRTUAL TEAM BUILDING ACTIVITES</h3>
               </div>
            
           </div>
           <div className="card-gap py-10"> 

           </div>
           <div className="card-bottom p-4 pt-12"> 
               <div className="card-game-desc text-center">
                   
                   <p className="text-gray-200 lg:text-lg">Once you complete your purchase you will be sent an</p>
               </div>
               <div className="card-game-link mt-4 text-center">
                   <button className="border card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                   <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
               </div>
               
            </div>
       </div>

     </div>
      {/*====== slide 6========= */}
      <div className="text-white bg-gray-300 game-slider-card  card-border" style={{
       background:"url('/assets/sl-event-5.jpg')"
     }}>
       <div className="card-container">
           <div className="card-head plan-title flex justify-center pt-8 pb-8 px-4">
               <div className="card-info text-center ">
                 <h3 className="text-center text-xl lg:text-2xl font-bold uppercase text-white">BACHELORETTE PARTIES</h3>
               </div>
            
           </div>
           <div className="card-gap py-10"> 

           </div>
           <div className="card-bottom p-4 pt-12"> 
               <div className="card-game-desc text-center">
                   
                   <p className="text-gray-200 lg:text-lg">Once you complete your purchase you will be sent an</p>
               </div>
               <div className="card-game-link mt-4 text-center">
                   <button className="border card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                   <button className="border block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</button>
               </div>
               
            </div>
       </div>

     </div>
      
   </Carousel>
   </div>
    )
}

export default PlaningEventCarousel;