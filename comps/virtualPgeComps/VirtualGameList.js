import Link from "next/link"
import TitleSeparator from "../util/TitleSeparator"
import Script from "next/script"

const VirtualGameList=(props)=>{
    const openBooking=(booking)=>{
        FH.open({
          shortname: booking.shortname,
          fallback: 'simple', 
          fullItems: 'yes', 
          flow: booking.flow, 
          view: { item: booking.item }
        });
      }

    return(
        <>
        <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
        <div className="all-games relative bg-center bg-cover" style={{backgroundImage:"url('/assets/game-dt-bg.jpg')"}}>
         <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>
            <div className="all-games-container max-w-7xl mx-auto relative  z-30 py-16 md:py-20 lg:py-28 px-4">
                    {/*==========================virtual games show room end========================== */}
                <div className="all-gamelist-box show-room grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-8">
                    <div className="section-title  text-center max-w-[800px] mx-auto">
                        <TitleSeparator title="VIRTUAL GAME SHOW ROOM" color="golden-text" weight="font-bold"/>
                        <p className="text-gray-700 md:px-8 md:text-lg">Book your Virtual Game Show experience with a live host. It's like a game show you've seen on TV. You choose which friends, family, or co-workers you want to virtually face-off against - from across the street or across the world. Let's play!</p>
                    </div>
                {
                        props.vgamelist.map((vgame)=>{
                            
                            return(
                                vgame.gametype=="showroom" &&
                                <div key={vgame.id} className="all-game-list bg-center bg-cover p-4 md:p-6 lg:p-8" 
                                        style={{backgroundImage:"linear-gradient(53deg, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url('"+vgame.game_cover_image+"')",
                                        boxShadow:"0px 0px 16px 2px rgba(0,0,0,0.45)"}}>
                                <div className="all-game-list-head flex justify-between">
                                        <div className="all-game-info">
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/virtual-icon.svg"></img></span><span className="text-sm md:text-base">{vgame.game_type}</span>  </p>
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm md:text-base">{vgame.age}</span>  </p> 
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm md:text-base">{vgame.duration} Minutes</span>  </p>
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm md:text-base">{vgame.min_player}-{vgame.max_player} Players</span>  </p>

                                        </div>
                                        <div className="card-ribbon">
                                              <div className="inline-block text-center py-2 px-4 bg-red-600">
                                                    <p className="lg:text-lg text-white">{vgame.gametype=="showroom"? "PER PERSON":"PER GROUP"}</p>
                                                    <p className="text-3xl text-white font-bold">${vgame.price}</p>
                                             </div>
                                         </div>
                                 </div>
                                 <div className="all-game-list-gap py-[52px] md:py-[8%] lg:py-[72px]">
                                    
                                 </div>
                                 <div className="all-game-list-bottom">
                                        <div className=" text-center md:text-left">
                                          <h3 className="card-game-title text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white">{vgame.game_name}</h3>
                                          <p className="text-gray-200 lg:text-lg mx-auto md:mx-0 max-w-[570px]">{vgame.game_desc}
                                       </p>
                                         </div>
                                         <div className="card-game-link mt-4 text-left">
                                            
                                             <button onClick={()=>{openBooking(vgame.booking)}} className="border-2 w-[240px] card-book-btn block md:inline-block mx-auto md:mx-0 border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white">BOOK NOW</button>
                                           
                                                                                        
                                              <a href={"/virtual-games/"+vgame.game_slug} className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white">LEARN MORE</a>
                                           
                                        </div>
                                    
                                 </div>

                                  </div>
                               
                            )

                        })

                }
                </div>  
                {/*==========================virtual games show room end========================== */}
                {/*==========================virtual games========================== */}
                <div className="all-gamelist-box v-games-box grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-8 mt-16 md:mt-20">
                    <div className="section-title  text-center max-w-[800px] mx-auto">
                        <TitleSeparator title="VIRTUAL ESCAPE ROOMS" color="golden-text" weight="font-bold"/>
                        <p className="text-gray-700 md:px-8 md:text-lg">These new generation of escape rooms are exactly like physical escape rooms, but can be played from anywhere in the world via a Zoom call. The Game Master is the team's Avatar, who's physically in a real brick and mortar escape room. Thanks to a live cam, the Game Master acts as each team's eyes, ears, and hands as he follows their directions.</p>
                    </div>
                {
                        props.vgamelist.map((vgame)=>{
                            
                            return(
                                vgame.gametype=="games" &&
                                <div key={vgame.id} className="all-game-list bg-center bg-cover p-4 md:p-6 lg:p-8" 
                                        style={{backgroundImage:"linear-gradient(53deg, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url('"+vgame.game_cover_image+"')",
                                        boxShadow:"0px 0px 16px 2px rgba(0,0,0,0.45)"}}>
                                <div className="all-game-list-head flex justify-between">
                                        <div className="all-game-info">
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/virtual-icon.svg"></img></span><span className="text-sm md:text-base">{vgame.game_type}</span>  </p>
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm md:text-base">{vgame.age}</span>  </p> 
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm md:text-base">{vgame.duration} Minutes</span>  </p>
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm md:text-base">{vgame.min_player}-{vgame.max_player} Players</span>  </p>

                                        </div>
                                        <div className="card-ribbon">
                                              <div className="inline-block text-center py-2 px-4 bg-red-600">
                                                    <p className="lg:text-lg text-white">{vgame.gametype=="showroom"? "PER PERSON":"PER GROUP"}</p>
                                                    <p className="text-3xl text-white font-bold">${vgame.price}</p>
                                             </div>
                                         </div>
                                 </div>
                                 <div className="all-game-list-gap py-[52px] md:py-[8%] lg:py-[72px]">
                                    
                                 </div>
                                 <div className="all-game-list-bottom">
                                        <div className=" text-center md:text-left">
                                          <h3 className="card-game-title text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white">{vgame.game_name}</h3>
                                          <p className="text-gray-200 lg:text-lg mx-auto md:mx-0 max-w-[570px]">{vgame.game_desc}
                                       </p>
                                         </div>
                                         <div className="card-game-link mt-4 text-left">
                                             <a target={"_blank"} href={vgame.bookinglink} className="text-center border-2 w-[240px] card-book-btn block md:inline-block mx-auto md:mx-0 border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white">BOOK NOW</a>
                                           
                                                                                        
                                              <a href={"/virtual-games/"+vgame.game_slug} className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white">LEARN MORE</a>
                                             
                                        </div>
                                    
                                 </div>

                                  </div>
                               
                            )

                        })

                }
                </div>
                {/*==========================virtual games==========================  end*/}
               
                
            </div>
            <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>

        </div>
        </>
    )

}

export default VirtualGameList