import TitleSeparator from '../util/TitleSeparator'
import { FiX } from "react-icons/fi"
import { FaAngleRight } from "react-icons/fa"
import Link from 'next/link';
import { useEffect, useState } from 'react';

const LocationMenuX=(props)=>{
   
       const closelocmenu=()=>{
     
        document.getElementById('locmenu').classList.add('hidden')
       }

    

    return(

        <div className="loc-menu bg-dark fixed w-full h-full overflow-scroll" style={
            {
              backgroundImage : "url(/assets/submenu-bg.png),linear-gradient(#111111,#111111)",
            }
           }>
            <div onClick={closelocmenu} id="locclose" className="location-close-box flex justify-end pt-1 px-2 md:px-4 text-gray-400 text-xl md:text-2xl lg:text-3xl">  
                 <span className='inline-block p-1 border-2 border-gray-500 rounded-full cursor-pointer hover:border-light-gold hover:text-gold'><FiX/></span>
            </div>
            <div className='loc-menu-content px-4'> 
                <TitleSeparator title='CHOOSE YOUR VENUE' color='text-white' weight='font-semibold'/>
                <div className='loc-menu-grid max-w-6xl mx-auto mt-4 pb-8'> 
                {/*==================location xcolumn======================*/}
                    {
                        props.locationlist.map((loc)=>{

                                return(
                                    <div key={loc.id} className='loc-menu-box '>
                                    {/*==================location NEW YORK======================*/}
                                    <div className='loc-menu-head mb-2'>
                                        <h3 className='text-light-gold text-xl md:text-2xl font-bold'><span className='inline-block pb-1 border-b border-light-gold'>{loc.state_name}</span></h3>
                                     </div>
                                         <div className='loc-item-box py-2 border-dark-coffee'>
                                            {
                                                loc.cities.map((item)=>{

                                                    return(
                                                        <div key={loc.id+item.id} className=' loc-item py-2 border-b border-dark-coffee'>
                                                               
                                                                    <a href={"/locations/"+item.slug} className='loc-link'> 
                                                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                                                            <span className='golden-text'>{item.city}, {loc.state}</span>
                                                                            <span className='text-gold'><FaAngleRight/></span>
                                                                        </div>
                                                                        <div className='text-gray-500  text-sm md:text-base '>{item.mall}</div>

                                                                    </a>
                                                                
                                                         </div>
                                                    )
                                                })
                                            }
                                             
                                      </div>
            
                                </div>
                                )
                        })
                    }
                   
                {/*==================location xcolumn======================*/}
           

                </div>
            </div>

        </div>
    );
}

export default LocationMenuX;