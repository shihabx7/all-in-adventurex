import LocationBtn from "../util/LocationBtn";
import { FacebookShareButton, TwitterShareButton,EmailShareButton } from "react-share";
import { FacebookIcon, TwitterIcon,EmailIcon } from "react-share";
import { useState,useCallback,useEffect } from "react";
const SingleBlogHero=(props)=>{
  const [scrollY, setScrollY] = useState(0);
  const onScroll = useCallback(event => {
    const headerHeight=document.getElementById('header').offsetHeight

    const wW=screen.width
    //const heroHeight=document.querySelector('.single-blog-hero').offsetHeight
   // const contentHeight=document.querySelector('.sbl-desc').offsetHeight
   const heroHeight=document.getElementById('sblh').offsetHeight
    const contentHeight=document.getElementById('sbld').offsetHeight
    const relatedHeight=document.getElementById('related-blog').offsetHeight
    const totalHeigth=headerHeight+heroHeight+contentHeight
    const desktopShare=document.getElementById('dsk-share')
    const { pageYOffset, scrollY } = window;
    
console.log(wW)
   if(wW>1000){

   
    if(scrollY>totalHeigth){
      desktopShare.classList.remove('md:block')
      desktopShare.classList.add('hidden')

    }
    else{
      desktopShare.classList.remove('hidden')
      desktopShare.classList.add('md:block')
    }
  }
    
   // console.log("headerHeight", headerHeight, "heroHeight", heroHeight,'content',contentHeight, 'total',totalHeigth);
    //console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
}, []);

useEffect(() => {
  //add eventlistener to window
  window.addEventListener("scroll", onScroll, { passive: true });
  // remove event on unmount to prevent a memory leak with the cleanup
  return () => {
     window.removeEventListener("scroll", onScroll, { passive: true });
  }
}, []);

    return (
   
    <div id="sblh" className="single-blog-hero" style={{
        background:"linear-gradient(0deg, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.88)), url('/assets/blogs/single-blog-bg.png')",
        backgroundSize:"cover"
        

    }}> 
     <div className='sbl-home-hero-holder '> 
        
        <div className='max-w-7xl  mx-auto px-4 pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 relative z-20'>
          {/* =============================share btn=========================================== */}
            <div id="dsk-share" className="blog-share-btn-cont fixed top-[300px]  z-20 hidden md:block"> 
                <div className="bg-[#fbf0d9] p-2 pb-1 flex flex-col "> 
                    <div className="share-item-desk"> 
                    <FacebookShareButton
                        url={"https://allinadventures.com"+props.pagedata.shareurl}
                        quote={props.pagedata.pagetitle}
                        hashtag={"#All_in_adventures_escape_room"}
                        description={props.pagedata.description }
                        className="Demo__some-network__share-button"
                      >
                        <FacebookIcon size={32}  /> 
                      </FacebookShareButton>
                    </div>
                    <div className="share-item-desk mb-[4px] mt-[2px]"> 
                    <TwitterShareButton
                        title={props.pagedata.pagetitle }
                        via={"All in adventures"}
                        url={"https://allinadventures.com"+props.pagedata.shareurl}
                        hashtags={["Escape_room", "Escape_room_games","Escape_room_blog","All_in_adventures_escape_room"]}
                        related={["AllinAdventure"]}
                      >
                        <TwitterIcon size={32} />
                      </TwitterShareButton>
                      </div>
                      <div className="share-item-desk"> 
                      <EmailShareButton
                      subject={props.pagedata.pagetitle }
                      body={props.pagedata.description}
                      url={"https://allinadventures.com"+props.pagedata.shareurl}
                     > 
                        <EmailIcon size={32} />
                      </EmailShareButton>
                    </div>
                </div>
            </div>
             {/* =============================share btn=========================================== */}
            <div className="page-benar-info"> 
            
           
             <h1 className='text-[#ffffff] font-bold text-center text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-8 font-os uppercase max-w-[1000px] mx-auto'>
             
             {props.pagedata.pagetitle }
             
              </h1>
             <div className="max-w-md mx-auto mt-4 md:mt-8 pb-8">

                {/*============location search btn==========*/}
                <LocationBtn borderbg='bg-red-600' borderbghover='bg-red-900' innerbg='bg-white' innerborder='border-white' innerbghover='bg-grey-200' innerborderhover='border-gray-200' color="text-black"/>
                 {/*============location search btn==========*/}


                </div>

                <div id="sbl-ftimg" className="sbl-ft-img-box  mx-auto pt-2 md:pt-4">
                    <img className="blog-ft-shadow sbl-ft-img mb-[-38%] md:mb-[-35%] mx-auto " src={props.pagedata.ftimg}></img>

                </div>
           
             </div>
           
          
            
          
        </div>
    </div>


    </div>
         
         )

}

export default SingleBlogHero