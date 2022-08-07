import { useEffect,useState } from "react";
import { BiMap } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";




const LocationBtnH=(props)=>{
   
    
      const showloc=()=>{
        document.getElementById('locmenu').classList.remove('hidden')
      }

    return(
        <div onClick={showloc} className="bg-golden hover:bg-golden-alt  home-nav-search  search-loc hover:cursor-pointer hover:shadow boder-p rounded-full" > 
        <div className="border-2 bg-coffee-light border-black  hover: flex space-x-2 justify-between md:space-x-20  rounded-full items-center  md:border-4 p-2 md:p-2 text-white ">
                <div className=" text-white nav-search-l flex space-x-2 items-center">
                     <span className="text-xl md:text-2xl"> <BiMap/></span>
                    <span className="text-xs font-medium md:text-base uppercase"> {props.location? props.location:" CHOOSE YOUR LOCATION" }</span>
                </div> 
                 <div className="text-white  nav-search-r">
                     <span className="text-xl md:text-2xl">  <FaAngleDown/></span>
                </div>   
    
        </div>
    </div>

    )

    
}

export default LocationBtnH;