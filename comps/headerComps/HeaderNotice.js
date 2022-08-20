
import { useState } from "react";
import { FiExternalLink,FiX } from "react-icons/fi";
const HeaderNotice=()=>{

    const [showNotice,setShownotice]=useState(true)
    const closeNotice=()=>{
        setShownotice(false)
    }
        return(
            showNotice &&
            <div className="header-notice py-2 bg-[#564B31]">
                    <div className="max-w-7xl mx-auto ">
                        <div className="header-notice-box flex justify-between items-center px-2  md:px-4">
                            <div className="header-notice-text flex space-x-1 md:space-x-2 items-center">
                                <img className="max-w-[24px] md:max-w-[30px] lg:max-w-[36px]"  src="/assets/svg/header-notice-icon.svg"></img>
                                <p className="text-[#FFEFCD] text-xs md:text-base lg:text-lg">Mystery Room is now All In Adventures.</p>
                                <div>
                                <a href="#" target="_blank" className='golden-text  flex space-x-1 md:space-x-2 items-center text-xs md:text-base lg:text-lg'><span>Learn more</span> <span className='md:text-lg text-gold'><FiExternalLink/></span></a>
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