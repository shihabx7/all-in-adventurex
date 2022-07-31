
import TitleSeparator from "../util/TitleSeparator"
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa"
import PlaningEventCarousel from "./PlaningEventCarousel";

const PlaningEventsSlider=({events})=>{

    console.log("events sl")
  console.log(events)

    return (<div className="planningevent relative py-16 md:py-20 lg:py-28 " style={
        {
            backgroundImage :  "linear-gradient(65deg,rgba(255, 249, 235,.1),rgba(255, 249, 235,.2)),url('/assets/gridbg.jpg')"
        }}>
   {/** =======ornamental icon===== */}
   
      <div className="pl-or pl-or-1 absolute top-0 left-0"> 
          <img src="/assets/pl-bgi-1.png"></img>
      </div>
      <div className="pl-or pl-or-2 absolute bottom-0 left-0"> 
          <img src="/assets/pl-bgi-2.png"></img>
      </div>
      <div className="pl-or pl-or-3 absolute top-0 right-0"> 
          <img src="/assets/pl-bgi-3.png"></img>
      </div>
      <div className="pl-or pl-or-4 absolute bottom-0 right-0"> 
          <img src="/assets/pl-bgi-4.png"></img>
      </div>

    {/** =======ornamental icon end===== */}
    <div className="max-w-7xl mx-auto  px-4 relative z-20 ">
         <TitleSeparator title='PLANNING AN EVENT?' color='golden-text' weight='font-bold'/>
         <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-16">
                <p className="text-gray-700 md:px-8">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
            </div>
    </div>
    <div className="slider-box pb-4 md:pb-8 relative">  
    <PlaningEventCarousel events={events}/>
    </div>
    <div className="view-all flex justify-center pt-8 md:pt-12 lg:pt-16">
        <Link href="/events/"> 
          <a className="flex lg:text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"><span>View all events</span> <FaAngleRight/></a>
        </Link>
     </div>
</div>
)


}

export default PlaningEventsSlider;