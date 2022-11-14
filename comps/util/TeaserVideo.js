import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"

const TeaserVideo=(props)=>{

    return(
                <div className="game-video-box pb-[57%]  w-[100%] md:w-[740px] lg:w-[840px] mx-auto shadow-lg relative"> 
                             <iframe className="absolute w-full h-full top-0 left-0"
                              src={"https://www.youtube.com/embed/"+props.videoid+"?autoplay=1"}
                              title="Treasure Island 1881 // Reality Escape Game" 
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen>
                                
                             </iframe>

                </div>

    )
}

export default TeaserVideo