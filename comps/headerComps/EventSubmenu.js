import Link from "next/link"
import { ImPlay3 } from "react-icons/im";

const EventSubmenu=(props)=>{

  

    return(
        <>
        {
            props.locationslug &&
            <>{

                        
                props.eventlist.map((event)=>{

                        return(
                           
                                    <div key={event.id}>
                                        <a href={"/"+props.locationslug+"/events/"+event.event_slug} className="flex items-center space-x-1 my-1">
                                        <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">{event.event_name}</span>
                                     </a>
                                    </div>
                        )

                })
                      
            } 
                    
                             
        </>
        }
        {
            (!props.locationslug && props.eventlist) &&
            <>{

                        
                props.eventlist.map((event)=>{

                        return(
                           
                                    <div key={event.id}>
                                        <a href={"/events/"+event.event_slug} className="flex items-center space-x-1 my-1">
                                        <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">{event.event_name}</span>
                                     </a>
                                    </div>
                        )

                })
                      
            } 
                    
                             
        </>
        }

                {
            (!props.locationslug && !props.eventlist) &&
            <> 
                        <a href="/events/team-building" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Team Building</span>
                                             </a>
                                    
                                  
                                             <a href="/events/birthday-party" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Birthday Party</span>
                                             </a>
                                    
                               
                                             <a href="/events/family-events" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Family Events</span>
                                             </a>
                                    
                                    
                                             <a href="/events/bachelor-party" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Bachelor Party</span>
                                             </a>
                                   
                                   
                                             <a href="/events/bachelorette-party" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Bachelorette Party</span>
                                             </a>
                                    
                                 
                                             <a href="/events/corporate-events" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Corporate Events</span>
                                             </a>
                                   
                                   
                                             <a href="/events/school-events" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">School Events</span>
                                             </a>
                                    
                                   
                                             <a href="/events/private-party" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Private Party</span>
                                             </a>
                                  
                                    
                                             <a href="/events/reunion-party" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Reunion Party</span>
                                             </a>
                                 
                                   
                                             <a href="/events/graduation-party" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Graduation Party</span>
                                             </a>
            </>
        }                
                           
                                             
                                    
                                   
                                    

                                    
        </>
    )
}

export default EventSubmenu