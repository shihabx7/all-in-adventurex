import Link from "next/link"
import { ImPlay3 } from "react-icons/im";

const OhterGameSubmenu=(props)=>{

  

    return(
        <>
        {
            props.locationslug &&
            <>{

                        
                props.activitylist.map((activity)=>{

                        return(
                            activity.category=="other" &&
                                    <>
                                        <a href={"/"+props.locationslug+"/activities/"+activity.activity_slug} className="flex items-center space-x-1 my-1">
                                        <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">{activity.activity_name}</span>
                                     </a>
                                    </>
                        )

                })
                      
            } 
                    
                             
        </>
        }
        {
            !props.locationslug &&
            <>
                                        <a href="/activities/beat-the-seat" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Beat The Seat</span>
                                             </a>
                                    
                                    
                                             <a href="/activities/game-show-room" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Game Show Room</span>
                                             </a>
                                   
                                    
                                             <a href="/activities/axe-throwing" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Axe Throwing</span>
                                             </a>
                                  
                                             <a href="/activities/virtual-reality" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Virtual Reality</span>
                                             </a>
            </>
        }
                                
                                             
                                   
                                    

                                    
        </>
    )
}

export default OhterGameSubmenu