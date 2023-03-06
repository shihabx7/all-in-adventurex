import { FacebookShareButton, TwitterShareButton,EmailShareButton } from "react-share";
import { FacebookIcon, TwitterIcon,EmailIcon } from "react-share";
const SingleBlogContent=(props)=>{


    return(
        <div> 
        <div className="sbl-desc"  dangerouslySetInnerHTML={{ __html: props.blogdesc.join('') }}> 
              

                    
        </div>
         {/* =============================share btn=========================================== */}
         <div className="blog-share-btn-cont md:hidden"> 
         <div className="bg-[#fbf0d9] p-2 flex space-x-2 items-center"> 
             <div className="share-item pr-4"> 
               <p className="font-os font-medium share-hd">SHARE NOW</p>
             </div>
             <div className="share-item"> 
                    <FacebookShareButton
                        url={"https://allinadventures.com"+props.pagedata.shareurl}
                        quote={props.pagedata.pagetitle}
                        hashtag={"#All_in_adventures_escape_room"}
                        description={props.pagedata.description }
                        className="Demo__some-network__share-button"
                      >
                        <FacebookIcon size={28}  /> 
                      </FacebookShareButton>
                    </div>
                    <div className="share-item"> 
                    <TwitterShareButton
                        title={props.pagedata.pagetitle }
                        via={"All in adventures"}
                        url={"https://allinadventures.com"+props.pagedata.shareurl}
                        hashtags={["Escape_room", "Escape_room_games","Escape_room_blog","All_in_adventures_escape_room"]}
                        related={["AllinAdventure"]}
                      >
                        <TwitterIcon size={28} />
                      </TwitterShareButton>
                      </div>
                      <div className="share-item"> 
                      <EmailShareButton
                      subject={props.pagedata.pagetitle }
                      body={props.pagedata.description}
                      url={"https://allinadventures.com"+props.pagedata.shareurl}
                     > 
                        <EmailIcon size={28} />
                      </EmailShareButton>
                    </div>
         </div>
     </div>
      {/* =============================share btn=========================================== */}
      </div>
    )
}

export default SingleBlogContent