import TitleSeparator from "../util/TitleSeparator"
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa"

import PysicalCarousel from "./PysicalCarousel";
const PysicalEscape=(props)=>{
  
    return(
        <div className="pysicalescape  bg-black game-bg-pattern-dark relative pb-4">
         
          
        
        <div className="max-w-7xl mx-auto pt-4 md:pt-8 px-4 relative z-20 ">
             
             {props.city && 
              <>
                <TitleSeparator title={'OTHER GAMES in '+props.city+' '+props.state} color='text-gold' weight='font-bold'/>
              </>
            }
            {!props.city && 
             
                <TitleSeparator title='OTHER GAMES' color='text-gold ' weight='font-bold'/>
              
            }
             <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-12 lg:mb-16">
                    <p className="text-gray-200 md:px-8">More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>
                   
                
                </div>
        </div>
        <div className="slider-box pb-4 md:pb-8 relative">  
        {
          props.publish &&
          <PysicalCarousel publish={props.publish} othergames={props.othergames} locationslug={props.locationslug} bookingData={props.bookingData}/>
        }
        {
          !props.publish &&
          <PysicalCarousel othergames={props.othergames} locationslug={props.locationslug} bookingData={props.bookingData}/>
        }
            
        </div>
        <div className="view-all flex justify-center pt-8 md:pt-8 pb-4 md:pb-16 lg:pb-20">
           {
            props.locationslug &&
             
              <a href={"/"+props.locationslug+"/activities#others-physical-games"} className="flex relative z-20 font-medium text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"><span>View all other games</span> <FaAngleRight/></a>
            
           }
            {
            !props.locationslug &&
             
              <a href={"/activities#others-physical-games"} className="flex relative z-20 font-medium text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"><span>View all other games</span> <FaAngleRight/></a>
           
           }
            
         </div>
    </div>
    );
}

export default PysicalEscape;
