
import { BiMap } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Image from 'next/image'
import SvglogoMain from './headerComps/SvglogoMain'
import SvglogoMobile from './headerComps/SvglogoMobile'
import SubMenu from './headerComps/SubMenu'
import LocationMenu from "./headerComps/LocationMenu";
import Link from "next/link"
import { useEffect, useRef, useState} from 'react';



const Homenav=()=>{
    const ref = useRef();
    const [showMe, setShowMe] = useState(false);
    function toggle(){
      setShowMe(!showMe);
    }
    
    useEffect(() => {
        const checkIfClickedOutside = e => {
         
          if (showMe && ref.current && !ref.current.contains(e.target)) {
            setShowMe(false)
          }
        }
    
        document.addEventListener("mouseup", checkIfClickedOutside)
    
        return () => {
          
          document.removeEventListener("mouseup", checkIfClickedOutside)
        }
      }, [showMe]);
    return(
        <> 
        <div Id="locmenu" className="loc-menu-holder">
        <LocationMenu/>
        </div>
        
        
        <header className="bg-coffee w-full z-50">
            <div className="max-w-7xl mx-auto relative" ref={ref}>
                <div className="home-nav-bar flex justify-between items-center py-2 px-2 sm:p-3 lg:py-3 lg:px-0"> 
                    <div className="logo hidden md:block">
                        <Link href="/"> 
                            <a className="flex items-center">
                                <SvglogoMain></SvglogoMain>
                            </a>
                        </Link>
                    </div>
                    <div className="logo md:hidden">
                        <Link href="/"> 
                            <a className="flex items-center">
                                <SvglogoMobile></SvglogoMobile>
                            </a>
                        </Link>
                    </div>
                    <div className="home-nav-search bg-golden hover:bg-golden-alt hover:cursor-pointer hover:shadow boder-p rounded-full"> 
                        <div className="flex space-x-2 md:space-x-20  rounded-full items-center border-2 md:border-4 border-black p-2 md:p-3 text-white bg-coffee-light">
                                <div className="nav-search-l flex space-x-2 items-center">
                                     <span class="text-xl md:text-2xl"> <BiMap/></span>
                                    <span class="text-xs font-medium md:text-base"> CHOOSE YOUR LOCATION</span>
                                </div> 
                                 <div className="nav-search-r">
                                     <span className="text-xl md:text-2xl">  <FaAngleDown/></span>
                                </div>   

                        </div>
                    </div>
                    <div className="home-nav-menu flex items-center space-x-0 md:space-x-14 justify-end "> 
                        <div className="menu-item  text-lg hidden lg:block">
                            <Link href="/escape-rooms">
                                 <a className="font-medium text-white hover:golden-text"> Escape Rooms</a>
                            </Link>
                         </div>
                         <div className="menu-item text-white text-lg hidden lg:block">
                            <Link href="/events"> 
                                <a className="font-medium"> Events</a>
                            </Link>
                         </div>
                         <div className="menu-item text-white text-lg hidden lg:block">
                            <Link href="/Locations"> 
                                <a className="font-medium"> Locations</a>
                            </Link>
                         </div>
                         <div className="menu-item hover:shadow-md hover:cursor-pointer relative" onClick={toggle}>
                            <div className="menu-icon-box p-2 bg-coffee-light"
                                 style={{
                                 display: !showMe?"block":"none"
                             }}> 
                                <span className="block w-7 md:w-8 h-1 bg-golden"></span>
                                <span className="block my-1 w-7 md:w-8 h-1 bg-golden"></span>
                                <span className="block my-1 w-7 md:w-8 h-1 bg-golden"></span>
                                <span className="block w-7 md:w-8 h-1 bg-golden"></span>
                            </div>
                            <div className="menu-icon-box menu-close flex justify-center items-center p-1 px-1 md:px-1.5 bg-coffee-light"
                                    style={{
                                  display: showMe?"block":"none"
                                 }}> 
                           
                               <div className="text-gold text-3xl md:text-4xl"> 
                               <FiX/>

                               </div>
                            </div>
                            
                         </div>
                    </div>
                </div>
                        
                                <div className="submenu-holder absolute top-full right-0 z-40 w-full md:w-auto"> 
                                {showMe &&(
                                     <SubMenu></SubMenu>
                                     )}
                        </div>

                       
                
            </div>
        </header>
        </>
    )
}

export default Homenav;