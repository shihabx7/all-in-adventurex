import LocationBtn from "../util/LocationBtn";
import { FacebookShareButton, TwitterShareButton,EmailShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
const SingleBlogHero=(props)=>{

    return (
   
    <div className="single-blog-hero" style={{
        background:"linear-gradient(0deg, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.88)), url('/assets/blogs/single-blog-bg.png')",
        backgroundSize:"cover"
        

    }}> 
     <div className='sbl-home-hero-holder '> 
        
        <div className='max-w-7xl  mx-auto px-4 pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 relative z-20'>
            <div className="blog-share-btn-cont fixed top-[300px]  z-20"> 
                <div className="bg-[#fbf0d9] p-3 flex flex-col space-y-1"> 
                    <div className="share-item"> 
                    <FacebookShareButton
                        url={"https://allinadventures.com"+props.pagedata.shareurl}
                        quote={props.pagedata.pagetitle}
                        hashtag={"#hashtag"}
                        description={props.pagedata.description }
                        className="Demo__some-network__share-button"
                      >
                        <FacebookIcon size={36}  /> 
                      </FacebookShareButton>
                    </div>
                    <div className="share-item"> 
                    <TwitterShareButton
                        title={props.pagedata.pagetitle }
                        url={"https://allinadventures.com"+props.pagedata.shareurl}
                        hashtags={["hashtag1", "hashtag2"]}
                      >
                        <TwitterIcon size={36} />
                      </TwitterShareButton>
                    </div>
                </div>
            </div>
            <div className="page-benar-info"> 
            
           
             <h1 className='text-[#ffffff] font-bold text-center text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-8 font-os uppercase max-w-[1000px] mx-auto'>
             
             {props.pagedata.pagetitle }
             
              </h1>
             <div className="max-w-md mx-auto mt-4 md:mt-8 pb-8">

                {/*============location search btn==========*/}
                <LocationBtn borderbg='bg-red-600' borderbghover='bg-red-900' innerbg='bg-white' innerborder='border-white' innerbghover='bg-grey-200' innerborderhover='border-gray-200' color="text-black"/>
                 {/*============location search btn==========*/}


                </div>

                <div id="sbl-ftimg" className="sbl-ft-img-box max-w-[700px] mx-auto">
                    <img className="sbl-ft-img  mb-[-38%]" src={props.pagedata.ftimg}></img>

                </div>
           
             </div>
           
          
            
          
        </div>
    </div>


    </div>
         
         )

}

export default SingleBlogHero