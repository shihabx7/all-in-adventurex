
import { useState,useEffect } from "react";
import { FiExternalLink,FiX } from "react-icons/fi";
import { getCookies,getCookie, setCookie, deleteCookie } from 'cookies-next';
const HeaderNotice=()=>{

    const [showNotice,setShownotice]=useState(false)
    const closeNotice=()=>{
        setCookie('header-notice', true,{
            path: "/",
            maxAge: 3600, // Expires after 1hr
            sameSite: true,
            });
        setShownotice(false)
      
    }
    useEffect(() => {
        const coc=getCookie('header-notice')
        if(!coc){
            setShownotice(true)   
        }
       
      },[]);

        return(
            showNotice &&
            <div className="header-notice py-2 bg-[#564B31]">
                    <div className="max-w-7xl mx-auto ">
                        <div className="header-notice-box flex justify-between items-center px-2  md:px-4">
                            <div className="header-notice-text flex space-x-1 md:space-x-2 items-center">
                                <img className="max-w-[24px] md:max-w-[30px] lg:max-w-[36px]"  src="/assets/svg/header-notice-icon.svg"></img>
                                <p className="text-[#FFEFCD] text-xs md:text-base lg:text-lg">Mystery Room is now All In Adventures.</p>
                                <div>
                                <a href="/mysteryroom-rebranding" target="_blank" className='golden-text  flex space-x-1 md:space-x-2 items-center text-xs md:text-base lg:text-lg'><span>Learn more</span> <span className='md:text-lg text-gold'><FiExternalLink/></span></a>
                                </div>
                            </div>
                            <div className="header-notice-close flex items-center">
                                <button onClick={()=>closeNotice()} className="text-gold text-2xl md:text-4xl">
                                    <FiX/>
                                </button>

                            </div>
                        </div>

                    </div>
            </div>
        )
}

export default HeaderNotice