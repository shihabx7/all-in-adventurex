import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"
import { FaPlay } from "react-icons/fa";
import { useState } from "react";


const VgameVideo=(props)=>{

    const[playVid,setPlayVid]=useState(false)

    const startVid=()=>{
        setPlayVid(true)
    }

    return(
        <div className="game-video relative" style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }}> 
            <div className="max-w-7xl mx-auto pb-16 md:pb-20 lg:pb-28 px-4 relative z-30"> 
                <div className="s-title"> 
                    <TitleSeparator title="GAME TRAILER" color="golden-text" weight="font-bold"/>
                    <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-16">
                                 <p className="text-gray-700 md:px-8">Watch a sneak peek of the thrills and drama from {props.shortname? props.shortname:props.activityname+" virtual escape room"}.</p>
                    </div>
                </div>
                <div className="bg-[#000000] game-video-box pb-[57%] md:pb-[416px] lg:pb-[472px] w-[100%] md:w-[740px] lg:w-[840px] mx-auto shadow-lg relative">
                            {
                                !playVid &&
                                <div className="vid-tumb absolute top-0 left-0 w-full h-full overflow-hidden">
                                <div className="vid-thubb-play relative w-full h-full"> 
                                        <img className="w-full" src="/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"/>
                                        <div onClick={()=>{setPlayVid(true)}} className="cursor-pointer text-[28px] md:text-[36px] lg:text-[44px] vid-play-btn w-[60px] h-[60px] md:w-[96px] md:h-[96px] lg:w-[104px] lg:h-[104px] rounded-full bg-[#000000] text-red-600 z-10 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center" style={{margin:"auto"}}>
                                                <FaPlay/>
                                        </div>
                                </div>
                                
                            </div> 
                            }
                            
                            {
                                playVid &&
                                <iframe className="absolute w-full h-full top-0 left-0"
                                src={"https://www.youtube.com/embed/"+props.videoid+"?autoplay=1"} 
                                title="Treasure Island 1881 // Reality Escape Game" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                                  
                               </iframe>

                            }
                            

               
                </div>
                <div className="game-b-btnbox mt-8 md:mt-16 lg:mt-20">
                        
                             <div className="game-btn-all ">
                                 <Link href="/virtual-games/" hpassHref>
                                   <a className="max-w-[290px] md:max-w-[320px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center">View All Virtual Games</a>
                                 </Link>
                                 <Link href="/activities/" hpassHref>
                                     <a className="max-w-[290px] md:max-w-[320px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-[#424242] hover:text-white font-medium border-2 border-red-600 hover:border-red-700 hover:bg-red-700 rounded-full text-center">View All Escape Games</a>
                                  </Link>
                             </div>

                        

                </div>
                

            </div>
            <div className="game-ob-b w-full absolute bottom-0 left-0">
                    <img src="/assets/game-home-or2.jpg">
                        
                    </img>
                    
                 </div>

        </div>
    )
}

export default VgameVideo