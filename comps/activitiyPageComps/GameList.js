import Link from "next/link"
import TitleSeparator from "../util/TitleSeparator"

const GameList=(props)=>{

    
    const showLocation=()=>{
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('overflow-hidden')

        document.getElementById('locmenu').classList.remove('hidden')
        
      }

      const getOtherActivity=(actlist)=>{
        var i=0
        var act=false

        for(i=0;i<actlist.lenght;i++){
            if(actlist[i].activity_category=="other"){
                 act=true
            }
            return act
        }
      }

    return(
        <div className="all-games relative bg-center bg-cover" style={{backgroundImage:"url('/assets/game-dt-bg.jpg')"}}>
         <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>
            <div className="all-games-container max-w-7xl mx-auto relative  z-30 py-16 md:py-20 lg:py-28 px-4">
                    
                <div className="all-gamelist-box grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-8">
                    <div className="section-title  text-center max-w-[800px] mx-auto">
                        <TitleSeparator title="PLAY REAL-LIFE ESCAPE GAMES" color="golden-text" weight="font-bold"/>
                        <p className="text-gray-700 md:px-8 md:text-lg">2 - 10 participants will enter an escape room and they will have 50 minutes to escape. Hidden riddles and clues throughout the room provide the necessary tools to meet this objective. Can you stay calm as the clock ticks down and the pressure mounts? Can you ESCAPE before time runs out?</p>
                    </div>
                {
                        props.activitylist.map((activity)=>{

                            return(
                                activity.activity_category=="escapegame" &&
                                <div key={activity.id} className="all-game-list bg-center bg-cover p-4 md:p-6 lg:p-8" 
                                        style={{backgroundImage:"linear-gradient(53deg, rgba(0,0,0,0.92),rgba(0,0,0,0.82),rgba(0,0,0,0.62),rgba(0,0,0,0),rgba(0,0,0,0)),url('"+activity.activity_cover_image+"')",
                                        boxShadow:"0px 0px 16px 2px rgba(0,0,0,0.45)"}}>
                                <div className="all-game-list-head flex justify-between">
                                        <div className="all-game-info">
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/inperson.svg"></img></span><span className="text-sm md:text-base drop-shadow">{activity.activity_type}</span>  </p>
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm md:text-base drop-shadow">{activity.age}</span>  </p> 
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm md:text-base drop-shadow">{activity.duration} Minutes</span>  </p>
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm md:text-base drop-shadow">{activity.min_player}-{activity.max_player} Players</span>  </p>

                                        </div>
                                        <div className="card-ribbon">
                                              <div className="inline-block text-center py-2 px-4 bg-red-600">
                                                    <p className="text-lg text-white">FROM</p>
                                                    <p className="text-3xl text-white font-bold">${activity.price}</p>
                                             </div>
                                         </div>
                                 </div>
                                 <div className="all-game-list-gap py-[52px] md:py-[8%] lg:py-[72px]">
                                    
                                 </div>
                                 <div className="all-game-list-bottom">
                                        <div className=" text-center md:text-left">
                                          <h3 className="card-game-title text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white">{activity.activity_name}</h3>
                                          <p className="text-gray-200 lg:text-lg mx-auto md:mx-0 max-w-[700px]">{activity.activity_desc}
                                       </p>
                                         </div>
                                         <div className="card-game-link mt-4 text-left">
                                             <button onClick={showLocation} className="border-2 w-[240px] card-book-btn block md:inline-block mx-auto md:mx-0 border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white">BOOK NOW</button>
                                             <Link href={"/activities/"+activity.activity_slug}> 
                                                                                        
                                              <a className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white">LEARN MORE</a>
                                              </Link>
                                        </div>
                                    
                                 </div>

                        </div>

                            )

                        })

                }
                </div>
{/**=========================================other in person games============== */}

    <div id="others-physical-games" className="pt-20 all-gamelist-box grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-8">
                    <div className="section-title text-center max-w-[800px] mx-auto">
                        <TitleSeparator title="OTHER IN-PERSON GAMES" color="golden-text" weight="font-bold"/>
                        <p className="text-gray-700 md:px-8 md:text-lg">We offer additional fun activities that can double up your adventure experience. Simply come with the desire to play more!</p>
                    </div>
                {
                        props.activitylist.map((activity)=>{
                           
                            return(
                                activity.activity_category=="other" &&
                                <div key={activity.id} className="all-game-list bg-center bg-cover p-4 md:p-6 lg:p-8" 
                                        style={{backgroundImage:"linear-gradient(40deg,rgba(0,0,0,0.82),rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url('"+activity.activity_cover_image+"')",
                                        boxShadow:"0px 0px 16px 2px rgba(0,0,0,0.45)"}}>
                                <div className="all-game-list-head flex justify-between">
                                        <div className="all-game-info">
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/inperson.svg"></img></span><span className="text-sm md:text-base">{activity.activity_type}</span>  </p>
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm md:text-base">{activity.age}</span>  </p> 
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm md:text-base">{activity.duration} Minutes</span>  </p>
                                            <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm md:text-base">{activity.min_player}-{activity.max_player} Players</span>  </p>

                                        </div>
                                        <div className="card-ribbon">
                                              <div className="inline-block text-center py-2 px-4 bg-red-600">
                                                    <p className="text-lg text-white">FROM</p>
                                                    <p className="text-3xl text-white font-bold">${activity.price}</p>
                                             </div>
                                         </div>
                                 </div>
                                 <div className="all-game-list-gap py-[52px] md:py-[8%] lg:py-[72px]">
                                    
                                 </div>
                                 <div className="all-game-list-bottom">
                                        <div className=" text-center md:text-left">
                                          <h3 className="card-game-title text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white">{activity.activity_name}</h3>
                                          <p className="text-gray-200 lg:text-lg mx-auto md:mx-0 max-w-[700px]">{activity.activity_desc}
                                          fill out the number of details.</p>
                                         </div>
                                         <div className="card-game-link mt-4 text-left">
                                             <button onClick={showLocation} className="border-2 w-[240px] card-book-btn block md:inline-block mx-auto md:mx-0 border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white">BOOK NOW</button>
                                             <Link href={"/activities/"+activity.activity_slug}> 
                                                                                        
                                              <a className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white">LEARN MORE</a>
                                              </Link>
                                        </div>
                                    
                                 </div>

                        </div>

                            )

                        })

                }
    </div>

                
    {/**=========================================other in person games end============== */}
                <div className="link-btn mt-8 md:mt-16">
                    {
                        props.locationslug &&
                        <a href={"/"+props.locationslug+"/events"} className="border-2 max-w-[280px] text-center block  mx-auto  border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white">VIEW EVENTS</a>
                    }
                    {
                        !props.locationslug &&
                        <a href="/events" className="border-2 max-w-[280px] text-center block  mx-auto  border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white">VIEW EVENTS</a>
                    }
                    
                </div>
                
            </div>

            <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>

        </div>
    )
}

export default GameList