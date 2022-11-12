import TitleSeparator from "../util/TitleSeparator"
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa"

import PysicalCarousel from "./PysicalCarousel";
const PysicalEscape=(props)=>{
  
    return(
        <div className="pysicalescape bg-black relative pb-4">
          <div className="inp vr-lt absolute top-0 left-0"> 
          <img src="/assets/vr-rocket.png"></img>
        </div>
        <div className="inp vr-rt absolute top-0 right-0 z-20"> 
          <img src="/assets/vr-superman.png"></img>
        </div>
          
        
        <div className="max-w-7xl mx-auto pt-4 md:pt-8 px-4 relative z-20 ">
             
             {props.city && 
              <>
                <TitleSeparator title={'OTHER IN PERSON GAMES in'+props.city+' '+props.state} color='golden-text' weight='font-bold'/>
              </>
            }
            {!props.city && 
             
                <TitleSeparator title='OTHER IN PERSON GAMES' color='golden-text' weight='font-bold'/>
              
            }
             <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-12 lg:mb-16">
                    <p className="text-gray-200 md:px-8">More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>
                   
                
                </div>
        </div>
        <div className="slider-box pb-4 md:pb-8 relative">  
            <PysicalCarousel othergames={props.othergames} locationslug={props.locationslug} bookingData={props.bookingData}/>
        </div>
        <div className="view-all flex justify-center pt-8 md:pt-16 pb-4 md:pb-12 lg:pb-16">
           {
            props.locationslug &&
              <Link href={"/"+props.locationslug+"/activities#others-physical-games"}> 
              <a className="flex lg:text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"><span>View all other in person games</span> <FaAngleRight/></a>
            </Link>
           }
            {
            !props.locationslug &&
              <Link href={"/activities#others-physical-games"}> 
              <a className="flex lg:text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"><span>View all other in person games</span> <FaAngleRight/></a>
            </Link>
           }
            
         </div>
    </div>
    );
}

export default PysicalEscape;
