
import TitleSeparator from "../util/TitleSeparator"
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa"
import VirtualCarousel from "./VirtualCarousel";

const VirtualEscapeSlider=(props)=>{
   // console.log("virtual:")
    //console.log(virtualgames)
    return (<div className="vr-slider bg-black relative pb-16 md:pb-24 lg:pb-28 z-20" style={
      {
          backgroundImage :  "linear-gradient(65deg,rgba(0, 0, 0,.40),rgba(0, 0, 0,.30)),url('/assets/svg/pyescape-bg.svg')"
      }}>
        {
          !props.bgicon &&
          <div className="inp py-lt absolute left-0 z-20"> 
              <img src="/assets/py-space.png"></img>
        </div>
        }
        {
          !props.bgicon &&
          <div className="inp py-rt absolute right-0 z-20"> 
          <img src="/assets/py-planet.png"></img>
        </div>
        }
        
        
        
        <div className="max-w-7xl mx-auto pt-8 px-4 relative z-40">
             <TitleSeparator title='VIRTUAL / REMOTE GAMES' color='golden-text' weight='font-bold'/>
             <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-12 lg:mb-16">
                    <p className="text-gray-200 md:px-8">Enjoy the adventure and thrills of an escape room and game show room with friends and family from all different parts of the world without needing to gather in person.</p>
                </div>
        </div>
        <div className="slider-box pb-4 md:pb-0 relative">  
            <VirtualCarousel virtualgames={props.virtualgames}/>
        </div>
       <div className="view-all flex justify-center pt-8 md:pt-12 lg:pt-16">
            <Link href="/virtual-games/"> 
              <a className="flex lg:text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"><span>View all virtual / remote games</span> <FaAngleRight/></a>
            </Link>
         </div>
    </div>
    )
}

export default VirtualEscapeSlider;