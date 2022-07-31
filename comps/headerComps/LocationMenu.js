import TitleSeparator from '../util/TitleSeparator'
import { FiX } from "react-icons/fi"
import { FaAngleRight } from "react-icons/fa"
import Link from 'next/link';
import { useEffect, useState } from 'react';

const LocationMenu=()=>{
   
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-4 md:gap-y-0 md:gap-x-8 max-w-6xl mx-auto mt-4 pb-8'> 
                {/*==================location xcolumn======================*/}
                    <div className='loc-menu-col'>
                        {/*==================location NEW YORK======================*/}
                        <div className='loc-menu-head mb-2'>
                            <h3 className='text-light-gold text-xl md:text-2xl font-bold'><span className='inline-block pb-1 border-b border-light-gold'>NEW YORK</span></h3>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Albany, NY</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Crossgates Mall</div>

                                    </a>
                                </Link>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Buffalo, NY</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500 text-sm md:text-base '>Walden Galleria Mall</div>

                                    </a>
                                </Link>
                         </div>
                         
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Middletown, NY</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500 text-sm md:text-base'>Galleria at Crystal Run</div>

                                    </a>
                                </Link>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Syracuse, NY</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500 text-sm md:text-base '>Destiny USA Mall</div>

                                    </a>
                                </Link>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Watertown, NY</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500 text-sm md:text-base '>Salmon Run Mall</div>

                                    </a>
                                </Link>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>West Nyack, NY</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500 text-sm md:text-base'>Palisades Center</div>

                                    </a>
                                </Link>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Yorktown Heights, NY</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500 text-sm md:text-base'>Jefferson Valley Mall</div>

                                    </a>
                                </Link>
                         </div>
                         {/*==================location NORTH CAROLINA======================*/}
                         <div className='loc-menu-head mb-2 mt-4 md:mt-8'>
                            <h3 className='text-light-gold text-xl md:text-2xl font-bold'><span className='inline-block pb-1 border-b border-light-gold'>NORTH CAROLINA</span></h3>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Raleigh, NC</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500 text-sm md:text-base'>Triangle Town Center</div>

                                    </a>
                                </Link>
                         </div>

                    </div>
                {/*==================location xcolumn======================*/}
                    <div className='loc-menu-col '>
                            {/*==================location MASSACHUSETTS======================*/}
                        <div className='loc-menu-head mb-2'>
                            <h3 className='text-light-gold text-xl md:text-2xl font-bold'><span className='inline-block pb-1 border-b border-light-gold'>MASSACHUSETTS</span></h3>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Hadley, MA</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Crossgates Mall</div>

                                    </a>
                                </Link>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Holyoke, MA</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Holyoke Mall</div>

                                    </a>
                                </Link>
                                
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Kingston, MA</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Kingston Collection</div>

                                    </a>
                                </Link>
                                
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>N. Attleborough, MA</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Emerald Square Mall</div>

                                    </a>
                                </Link>
                                
                         </div>
                            {/*==================location MARYLAND======================*/}
                         <div className='loc-menu-head mb-2 mt-4 md:mt-8'>
                            <h3 className='text-light-gold text-xl md:text-2xl font-bold'><span className='inline-block pb-1 border-b border-light-gold'>MARYLAND</span></h3>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Bowie, MD</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Bowie Town Center</div>

                                    </a>
                                </Link>
                                
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>White Marsh, MD</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>White Marsh Mall</div>

                                    </a>
                                </Link>
                                
                         </div>
                            {/*==================location VIRGINIA======================*/}
                         <div className='loc-menu-head mb-2 mt-4 md:mt-8'>
                            <h3 className='text-light-gold text-xl md:text-2xl font-bold'><span className='inline-block pb-1 border-b border-light-gold'>VIRGINIA</span></h3>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Roanoke, VA</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Valley View</div>

                                    </a>
                                </Link>
                                
                         </div>
                     </div>
                     {/*==================location xcolumn======================*/}
                    <div className='loc-menu-col'>
                        {/*==================location CONNECTICUT======================*/}
                        <div className='loc-menu-head mb-2'>
                            <h3 className='text-light-gold text-xl md:text-2xl font-bold'><span className='inline-block pb-1 border-b border-light-gold'>CONNECTICUT</span></h3>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Milford, CT</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Connecticut Post Mall</div>

                                    </a>
                                </Link>
                                
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Manchester, CT</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Buckland</div>

                                    </a>
                                </Link>
                                
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Waterbury, CT</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Brass Mills Mall</div>

                                    </a>
                                </Link>
                                
                         </div>

                         <div className='loc-menu-head mb-2 mt-4 md:mt-8'>
                            <h3 className='text-light-gold text-xl md:text-2xl font-bold'><span className='inline-block pb-1 border-b border-light-gold'>OHIO</span></h3>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Columbus, OH</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Polaris Fashion Place</div>

                                    </a>
                                </Link>
                                
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Mentor, OH</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Great Lakes Mall</div>

                                    </a>
                                </Link>
                                
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Dayton, OH</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Dayton Mall</div>

                                    </a>
                                </Link>
                                
                         </div>

                         <div className='loc-menu-head mb-2 mt-4 md:mt-8'>
                            <h3 className='text-light-gold text-xl md:text-2xl font-bold'><span className='inline-block pb-1 border-b border-light-gold'>TEXAS</span></h3>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Austin, TX</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>TBD</div>

                                    </a>
                                </Link>
                                
                         </div>

                    </div>
                     {/*==================location xcolumn======================*/}
                    <div className='loc-menu-col'>
                        <div className='loc-menu-head mb-2'>
                            <h3 className='text-light-gold text-xl md:text-2xl font-bold'><span className='inline-block pb-1 border-b border-light-gold'>NEW JERSEY</span></h3>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>East Brunswick, NJ</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Brunswick Square</div>

                                    </a>
                                </Link>
                                
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Rockaway, NJ</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Rockaway Townsquare</div>

                                    </a>
                                </Link>
                                
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Woodbridge, NJ</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Woodbridge Mall</div>

                                    </a>
                                </Link>
                                
                         </div>
                         <div className='loc-menu-head mb-2 mt-4 md:mt-8'>
                            <h3 className='text-light-gold text-xl md:text-2xl font-bold'><span className='inline-block pb-1 border-b border-light-gold'>PENNSYLVNIA</span></h3>
                         </div>
                         
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Bensalem, PA</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Neshaminy Mall</div>

                                    </a>
                                </Link>
                                
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Selinsgrove, PA</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Susquehanna Mall</div>

                                    </a>
                                </Link>
                                
                         </div>
                         <div className='loc-menu-head mb-2 mt-4 md:mt-8'>
                            <h3 className='text-light-gold text-xl md:text-2xl font-bold'><span className='inline-block pb-1 border-b border-light-gold'>GEORGIA</span></h3>
                         </div>
                         <div className='loc-item py-2 border-b border-dark-coffee'>
                                <Link href="#"> 
                                    <a className='loc-link'> 
                                        <div className='flex space-x-1 items-center md:text-lg'> 
                                            <span className='golden-text'>Lawrenceville, GA</span>
                                            <span className='text-gold'><FaAngleRight/></span>
                                        </div>
                                        <div className='text-gray-500  text-sm md:text-base '>Sugarloaf Mills Mall</div>

                                    </a>
                                </Link>
                                
                         </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default LocationMenu;