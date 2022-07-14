
import TitleSeparator from "../util/TitleSeparator"
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa"
import VirtualCarousel from "./VirtualCarousel";

const VirtualEscapeSlider=()=>{

    return (<div className="inpsliderhome bg-black relative pb-4">
        <div className="inp vr-lt absolute top-0 left-0"> 
          <img src="/assets/vr-rocket.png"></img>
        </div>
        <div className="inp vr-rt absolute top-0 right-0"> 
          <img src="/assets/vr-superman.png"></img>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 px-4 ">
             <TitleSeparator title='VIRTUAL ESCAPE ROOMS' color='golden-text' weight='font-bold'/>
             <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-16">
                    <p className="text-gray-200 md:px-8">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                </div>
        </div>
        <div className="slider-box pb-4 md:pb-8 relative">  
            <VirtualCarousel/>
        </div>
        <div className="view-all flex justify-center py-16">
            <Link href="#"> 
              <a className="flex lg:text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"><span>View all virtual escape rooms</span> <FaAngleRight/></a>
            </Link>
         </div>
    </div>
    )
}

export default VirtualEscapeSlider;