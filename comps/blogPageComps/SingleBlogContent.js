import { FacebookShareButton, TwitterShareButton,EmailShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
const SingleBlogContent=(props)=>{


    return(
        <> 
        <div className="sbl-desc"  dangerouslySetInnerHTML={{ __html: props.blogdesc.join('') }}> 
              

                    
        </div>
         {/* =============================share btn=========================================== */}
         <div className="blog-share-btn-cont md:hidden"> 
         <div className="bg-[#fbf0d9] p-2 flex space-x-4 items-center"> 
             <div className="share-item pr-4"> 
               <p className="font-os font-medium"> SHARE NOW</p>
             </div>
             <div className="share-item"> 
             <FacebookShareButton
                 url={"https://allinadventures.com"+props.pagedata.shareurl}
                 quote={props.pagedata.pagetitle}
                 hashtag={"#hashtag"}
                 description={props.pagedata.description }
                 className="Demo__some-network__share-button"
               >
                 <FacebookIcon size={28}  /> 
               </FacebookShareButton>
             </div>
             <div className="share-item"> 
             <TwitterShareButton
                 title={props.pagedata.pagetitle }
                 url={"https://allinadventures.com"+props.pagedata.shareurl}
                 hashtags={["hashtag1", "hashtag2"]}
               >
                 <TwitterIcon size={28} />
               </TwitterShareButton>
             </div>
         </div>
     </div>
      {/* =============================share btn=========================================== */}
      </>
    )
}

export default SingleBlogContent