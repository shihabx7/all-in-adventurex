import EventDbtn from "../util/EventDbtn"
import GameDtBtn from "../util/GameDtBtn"
import GameTitleSeparator from "../util/GameTitleSeparator"

const EventDetails=(props)=>{


    return (
        <div className="event-detail relative"
        style={{background:"url('/assets/game-dt-bg.jpg')"}}
        >
            <div className="absolute top-0 left-0 w-full"><img className="w-full" src="/assets/game-home-or1.jpg"></img></div>

                 <div className="content-container max-w-7xl mx-auto py-16 md:py-24 lg:py-36 relative z-30 px-4">
            {/*===============================event row -1 WHY BOOK A PARTY WITH ALL IN ADVENTURE?================= */}
                    <div className="event-dt-row flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center">
                            <div className="event-dt-col w-full md:w-[47%] order-2 md:order-1"> 
                                <div className="event-dt-desc py-4 md:py-0">
                                     <p className="md:text-lg text-[#938056] uppercase leading-[1]">{props.eventname}</p>
                                     <GameTitleSeparator title={"WHY BOOK A "+props.eventname+" WITH ALL IN ADVENTURE?"} color="golden-text" weight="font-bold"></GameTitleSeparator>
                                    <p className="mt-4 md:mt-6 lg:mt-8 md:text-[18px] lg:text-[20px] text-gray-700">
                                        {

                                                props.eventdata.why_book
                                    }</p>
                                    <div className="event-notice mt-4 md:mt-6 lg:mt-8"> 
                                            <EventDbtn link="#eventform" label="BOOK YOUR PARTY NOW"/>
                                           
                                    </div>
                                </div>
                            </div>
                            <div className="event-dt-col w-full md:w-[47%] order-1 md:order-2"> 
                                <div className="event-dt-img">
                                    <img className="rounded drop-shadow" src={props.eventdata.why_book_img}></img>
                                </div>
                            </div>
                        
                     </div>
            {/*===============================event row -1 WHY BOOK A PARTY WITH ALL IN ADVENTURE?================= */}
            {/*===============================event row WHAT WE OFFER?================= */}
            <div className="event-dt-row flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between py-8 md:py-20 lg:py-28 items-center">

                           <div className="event-dt-col w-full md:w-[47%]"> 
                                <div className="event-dt-img rounded">
                                    <img className="rounded drop-shadow" src={props.eventdata.offer_img}></img>
                                </div>
                            </div>
                            <div className="event-dt-col w-full md:w-[47%]"> 
                                <div className="event-dt-desc">
                                     <p className="md:text-lg text-[#938056] leading-[1] uppercase">{props.eventname}</p>
                                     <GameTitleSeparator title="WHAT WE OFFER?" color="golden-text" weight="font-bold"></GameTitleSeparator>
                                    <p className="mt-4 md:mt-6 lg:mt-8 md:text-[18px] lg:text-[20px] text-gray-700">
                                        {
                                        props.eventdata.offer
                                    }</p>
                                    <div className="event-notice mt-4 md:mt-6 lg:mt-8"> 
                                    <p className="md:text-lg text-[#938056] md:mb-1 uppercase">{props.activityname}</p>
                                             
                                            <EventDbtn link="#eventform" label="BOOK YOUR PARTY NOW"/>   
                                    </div>
                                </div>
                            </div>
                            
                        
                     </div>
            {/*===============================event row -1 WHAT WE OFFER?================= */}
            {/*===============================event row -1 WHAT YOU CAN EXPECT FROM AN ESCAPE ROOM + PARTY?================= */}
            <div className="event-dt-row flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center">
                            <div className="event-dt-col w-full md:w-[47%] order-2 md:order-1"> 
                                <div className="event-dt-desc py-4 md:py-0">
                                    <p className="md:text-lg text-[#938056] leading-[1] uppercase">{props.eventname}</p>
                                     <GameTitleSeparator title={"WHAT YOU CAN EXPECT FROM AN ESCAPE ROOM "+props.eventname} color="golden-text" weight="font-bold"></GameTitleSeparator>
                                    <p className="mt-4 md:mt-6 lg:mt-8 md:text-[18px] lg:text-[20px] text-gray-700">
                                        {
                                            
                                        props.eventdata.what_expect
                                    }
                                        
                                    </p>
                                    <div className="event-notice mt-4 md:mt-6 lg:mt-8"> 
                                    <EventDbtn link="#eventform" label="BOOK YOUR PARTY NOW"/>   
                                             
                                    </div>
                                </div>
                            </div>
                            <div className="event-dt-col w-full md:w-[47%] order-1 md:order-2"> 
                                <div className="event-dt-img">
                                    <img className="rounded drop-shadow" src={props.eventdata.what_expect_img}></img>
                                </div>
                            </div>
                        
                     </div>
            {/*===============================event row -1 WHAT YOU CAN EXPECT FROM AN ESCAPE ROOM + PARTY?================= */}
                 </div>

            <div className="absolute bottom-0 left-0 w-full"><img className="w-full" src="/assets/game-home-or2.jpg"></img></div>

        </div>
    )
}

export default EventDetails