import TitleSeparator from "../util/TitleSeparator"
import InpersonCarousel from "./InpersonCarousel";
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa"
import { GiExitDoor } from "react-icons/gi";





const InpersonEscapeSlider =(props)=>{

    //console.log(props.inpersongames)

    return (<div className="inpsliderhome bg-black relative pb-4">
        <div className="inp inp-lt absolute top-0 left-0"> 
          <img src="/assets/inperson-angel-bg.png"></img>
        </div>
        <div className="inp inp-rt absolute top-0 right-0"> 
          <img src="/assets/inperson-space-bg.png"></img>
        </div>
        <div className="inp inp-lb absolute bottom-8 left-0"> 
          <img src="/assets/inperson-rock-bg.png"></img>
        </div>
        <div className="inp inp-rb absolute bottom-12 right-0"> 
          <img src="/assets/inperson-planet-bg.png"></img>
        </div>
        <div className="max-w-7xl mx-auto pt-16 md:pt-28 px-4 z-20 relative">
             <TitleSeparator title='IN PERSON ESCAPE ROOMS' color='golden-text' weight='font-bold'/>
             <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-16">
                    <p className="text-gray-200 md:px-8">Team up with your friends, family, kids (age 6+) or co-workers for an adrenaline filled 50-60 minutes real life immersive escape game experience!</p>
                    <div className="mt-2 md:mt-4 escape-flow flex justify-center items-center space-x-.9 md:space-x-1 text-[18px] golden-text font-medium md:text-xl">

                        <div>Locked In</div><span className="text-gold"><FaAngleRight/></span>
                        <div className="hidden md:block">Crack Codes</div><span className="text-gold hidden md:block"><FaAngleRight/></span>
                        <div>Solve Puzzles</div><span className="text-gold"><FaAngleRight/></span>
                        <div>Escape</div><span><img className="ml-2 w-[28px] md:w-[36px] lg:w-[40px]" src="/assets/svg/inperson.svg"></img></span>
                        </div>
                
                </div>
                
        </div>
        <div className="slider-box pb-4 md:pb-8 relative">  
        <InpersonCarousel inpersongames={props.inpersongames} locationslug={props.locationslug} bookingData={props.bookingData}/>
        </div>
        <div className="view-all flex justify-center pt-8 md:pt-12 lg:pt-16 pb-16">
          {
            props.locationslug &&
            <Link href={"/"+props.locationslug+"/activities/"}> 
            <a className="flex lg:text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"><span>View all In person escape rooms</span> <FaAngleRight/></a>
          </Link>
          }
          { !props.locationslug &&
             <Link href={"/activities/"}> 
             <a className="flex lg:text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"><span>View all in person escape rooms</span> <FaAngleRight/></a>
           </Link>
          }
           
         </div>
    </div>
    )

}

export default InpersonEscapeSlider