import { useRef, useState,useEffect } from "react"
import EventDbtn from "../util/EventDbtn"
import GameDtBtn from "../util/GameDtBtn"
import GameTitleSeparator from "../util/GameTitleSeparator"
import { FiXSquare } from "react-icons/fi";

const EventDetails=(props)=>{

    const [showPack, setShowPack]=useState(false)
    const showToast=()=>{
        setShowPack(true)
    }
    const closeToast=()=>{
        setShowPack(false)
    }
    const ref=useRef()
    useEffect(() => {
        const checkIfClickedOutside = e => {
         
          if (showPack && ref.current && !ref.current.contains(e.target)) {
            setShowPack(false)
          }
        }
        
    
        document.addEventListener("mouseup", checkIfClickedOutside)
    
        return () => {
          
          document.removeEventListener("mouseup", checkIfClickedOutside)
        }
      }, [showPack]);

    return (
        <div className="event-detail relative"
        style={{background:"url('/assets/game-dt-bg.jpg')"}}
        >
            <div className="pl-or pl-or-1 absolute top-0 left-0 z-10"><img src="/assets/pl-bgi-1.png"></img></div>
            <div className="pl-or pl-or-3 absolute top-0 right-0 z-10"><img src="/assets/pl-bgi-3.png"></img></div>
            <div className="pl-or pl-or-2 absolute bottom-0 left-0 z-10"><img src="/assets/pl-bgi-2.png"></img></div>
            <div className="pl-or pl-or-4 absolute bottom-0 right-0 z-10"><img src="/assets/pl-bgi-4.png"></img></div>
            <div className="absolute top-0 left-0 w-full"><img className="w-full" src="/assets/game-home-or1.jpg"></img></div>

                 <div className="content-container max-w-7xl mx-auto py-16 md:py-24 lg:py-36 relative z-30 px-4">
            {/*===============================event row -1 WHY BOOK A PARTY WITH ALL IN ADVENTURE?================= */}
                    <div className="event-dt-row flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center">
                            <div className="event-dt-col w-full md:w-[47%] order-2 md:order-1"> 
                                <div className="event-dt-desc py-4 md:py-0">
                                     <p className="md:text-lg text-[#938056] uppercase leading-[1]">{props.eventname}</p>
                                     <GameTitleSeparator title={"WHY ALL IN ADVENTURES FOR YOUR "+props.eventname} color="golden-text" weight="font-bold"></GameTitleSeparator>
                                    <p className="mt-3 md:mt-3 lg:mt-4 md:text-[18px] lg:text-[20px] text-gray-700">
                                        {

                                                props.eventdata.why_book
                                    }</p>
                                    <div className="event-notice mt-4 md:mt-6 lg:mt-8"> 
                                            <EventDbtn link="#eventform" label="INQUIRE NOW"/>
                                           
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
                                     <GameTitleSeparator title={"WHAT WE OFFER TO MAKE YOUR "+props.eventname+" MEMORABLE"} color="golden-text" weight="font-bold"></GameTitleSeparator>
                                    <p className="mt-3 md:mt-3 lg:mt-4 md:text-[18px] lg:text-[20px] text-gray-700">
                                        {
                                        props.eventdata.offer
                                    }</p>
                                    <div className="relative"> 
                                        <p className="mt-2 md:mt-2 lg:mt-3 md:text-[18px] lg:text-[20px] text-gray-700">Also, there are two optional packages for a 2-hours party room rental. Both packages offer a FREE $35 gift card for the guest of honor and provide basic supplies such as plates, napkins, and utensils. 
                                        <span onClick={showToast} className="cursor-pointer text-blue-600 hover:text-blue-700 hover:cursor-pointer"> See package details</span></p>
                                    <div className=" w-full bg-[#111111]  rounded absolute bottom-8 right-0 shadow-md" ref={ref}>
                                       {
                                        showPack &&
                                        <div className="pt-8 pb-4 px-4 md:p-6 lg:p-8 relative z-20"> 
                                            <div onClick={closeToast}  className="close-toast absolute top-[2px] right-[2px] text-[#dddddd] text-2xl hover:text-gold hover:cursor-pointer"><FiXSquare/> </div>
                                            <div className="mb-3 relative z-10">
                                              <p className="text-[#eeeeee]"><span className="golden-text font-medium">Package 1:</span> You can reserve our party room for a flat fee of $75 + Tax and cater your own food for your event. There's no minimum guest requirement; max varies.</p>
                                            </div>
                                             <div >
                                              <p className="text-[#eeeeee] relative z-10"><span className="golden-text font-medium">Package 2:</span> Let us do the work! We will order and pick up your food plus prepare your event for $18.99 per person. This package includes FREE Party Room rental with a minimum of 6 guests; max varies. Our Standard Package includes Pizza, Cookie Cake, and a drink for each guest (may vary based on item availability). Additional catering options may available, ask for our </p>
                                            </div>
                                         <div className="h-[60px] w-[60px] rotate-45 absolute bottom-0 left-0 right-0 mx-auto bg-[#111111] z-0">

                                         </div>
                                      </div>
                                       }
                                       
                                    </div>
                                    </div>
                                    <div className="event-notice mt-4 md:mt-6 lg:mt-8"> 
                                    <p className="md:text-lg text-[#938056] md:mb-1 uppercase">{props.activityname}</p>
                                             
                                            <EventDbtn link="#eventform" label="INQUIRE NOW"/>   
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
                                    <p className="mt-3 md:mt-3 lg:mt-4 md:text-[18px] lg:text-[20px] text-gray-700">
                                        {
                                            
                                        props.eventdata.what_expect
                                    }
                                        
                                    </p>
                                    <div className="event-notice mt-4 md:mt-6 lg:mt-8"> 
                                    <EventDbtn link="#eventform" label="INQUIRE NOW"/>   
                                             
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