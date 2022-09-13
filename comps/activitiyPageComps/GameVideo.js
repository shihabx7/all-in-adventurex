import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"

const GameVideo=(props)=>{

    return(
        <div className="game-video relative" style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }}> 
            <div className="max-w-7xl mx-auto pb-16 md:pb-20 lg:pb-28 px-4 relative z-30"> 
                <div className="s-title"> 
               
                    <TitleSeparator title="GAME TRAILER" color="golden-text" weight="font-bold"/>
                    <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-16">
                                 <p className="text-gray-700 md:px-8">Watch a sneak peek of the thrills and drama from the Escape From Alcatraz escape room.</p>
                    </div>
                </div>
                <div className="game-video-box pb-[57%] md:pb-[416px] lg:pb-[472px] w-[100%] md:w-[740px] lg:w-[840px] mx-auto shadow-lg relative"> 
                             <iframe className="absolute w-full h-full top-0 left-0"
                              src={"https://www.youtube.com/embed/"+props.videoid} 
                              title="Treasure Island 1881 // Reality Escape Game" 
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen>
                                
                             </iframe>

               
                </div>
                <div className="game-b-btnbox mt-8 md:mt-16 lg:mt-20">
                        {
                            props.location?
                            <div className="game-btn-all ">
                            <Link href={"/"+props.location+"/activities/"} hpassHref>
                              <a className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center">VIEW ALL GAMES</a>
                            </Link>
                            <Link href={"/"+props.location+"/events/"} hpassHref>
                                <a className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-[#424242] hover:text-white font-medium border-2 border-red-600 hover:border-red-700 hover:bg-red-700 rounded-full text-center">VIEW ALL EVENTS</a>
                             </Link>
                        </div>
                             :
                             <div className="game-btn-all ">
                                 <Link href="/activities/" hpassHref>
                                   <a className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center">VIEW ALL GAMES</a>
                                 </Link>
                                 <Link href="/events/" hpassHref>
                                     <a className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-[#424242] hover:text-white font-medium border-2 border-red-600 hover:border-red-700 hover:bg-red-700 rounded-full text-center">VIEW ALL EVENTS</a>
                                  </Link>
                             </div>

                        } 

                </div>
                

            </div>
            <div className="game-ob-b w-full absolute bottom-0 left-0">
                    <img src="/assets/game-home-or2.jpg">
                        
                    </img>
                    
                 </div>

        </div>
    )
}

export default GameVideo