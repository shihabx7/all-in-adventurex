import TitleSeparator from "../util/TitleSeparator"
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa"

import PysicalCarousel from "./PysicalCarousel";
const PysicalEscape=()=>{

    return(
        <div className="pysicalescape bg-black relative pb-4">
        <div className="inp py-lt absolute left-0"> 
          <img src="/assets/py-space.png"></img>
        </div>
        <div className="inp py-rt absolute right-0"> 
          <img src="/assets/py-planet.png"></img>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 px-4 ">
             <TitleSeparator title='OTHERS PHYSICAL GAMES' color='golden-text' weight='font-bold'/>
             <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-16">
                    <p className="text-gray-200 md:px-8">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                </div>
        </div>
        <div className="slider-box pb-4 md:pb-8 relative">  
            <PysicalCarousel/>
        </div>
        <div className="view-all flex justify-center pt-8 pb-16">
            <Link href="#"> 
              <a className="flex lg:text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"><span>View all others physical games</span> <FaAngleRight/></a>
            </Link>
         </div>
    </div>
    );
}

export default PysicalEscape;
