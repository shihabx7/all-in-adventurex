import Link from "next/link"
const UseFullLinks=(props)=>{

    return(
        <> <h3 className='golden-text text-2xl font-bold text-center'>USEFUL LINKS</h3>
        <div className='usefull-link-box block text-center md:flex flex-wrap  space-x-2 md:space-x-3 lg:space-x-4 justify-center items-center py-4 pb-0 md:py-6 lg:py-8'> 
        <div className='usefull-link  inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2'> 
             
                <a href="/locations" className='text-gray-400  text-sm  lg:text-base'>All Locations</a>
            
        </div>
        <div className='hidden lg:block text-gray-400 text-2xl'> 
        <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2'>
            {
                props.locationslug &&
            
                     <a href={"/"+props.locationslug+"/activities"} className='text-gray-400 text-sm  lg:text-base '>Escape Games</a>
          
            } 
             {
                !props.locationslug &&
               
                     <a href="/activities" className='text-gray-400 text-sm  lg:text-base '>Escape Games</a>
                
            } 
            
        </div>
        <div className='hidden lg:block text-gray-400 text-2xl'> 
        <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2'> 
            {
                props.locationslug &&
               
                <a href={"/"+props.locationslug+"/events"} className='text-gray-400 text-sm  lg:text-base'>Events and Parites</a>
           
            } 
            {
                !props.locationslug &&
               
                <a href="/events" className='text-gray-400 text-sm  lg:text-base'>Events and Parites</a>
             
            } 

            
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
        <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2'> 

         {
                props.locationslug &&
                 
                <a href={"/"+props.locationslug+"/activities#others-physical-games"} className='text-gray-400 text-sm  lg:text-base'>Others Games</a>
          
            } 
            {
                !props.locationslug &&
                
                <a href="/activities#others-physical-games" className='text-gray-400 text-sm  lg:text-base'>Other Games</a>
            
            }
            
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
        <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        
       
        <div className='usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2'> 
             {
                props.locationslug &&
                    
                         <a href={"/"+props.locationslug+"/gift-cards"} className='text-gray-400 text-sm  lg:text-base'>Gift Cards</a>
                    
            } 
             {
                !props.locationslug &&
                    
                         <a href="/gift-cards" className='text-gray-400 text-sm  lg:text-base'>Gift Cards</a>
                   
            } 
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
        <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2'> 
          
                <a href="/virtual-games" className='text-gray-400 text-sm  lg:text-base'>Virtual Games</a>
            
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
        <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2'> 
       
                <a href="/testimonials" className='text-gray-400 text-sm  lg:text-base'>Testimonials</a>
          
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
        <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2'> 
            <Link href="/gallery"> 
                <a className='text-gray-400 text-sm  lg:text-base'>Gallery</a>
            </Link>
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
        <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2'> 
            <Link href="/rewards-program"> 
                <a className='text-gray-400 text-sm  lg:text-base'>Rewards Pogram</a>
            </Link>
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
            <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2'> 
            <Link href="/pricing"> 
                <a className='text-gray-400 text-sm  lg:text-base'>Pricing</a>
            </Link>
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
            <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2'> 
            <Link href="/deals-coupons"> 
                <a className='text-gray-400 text-sm  lg:text-base'>Deals and Coupons</a>
            </Link>
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
            <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
       
        <div className='usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2'> 
            <Link href="/faqs"> 
                <a className='text-gray-400 text-sm  lg:text-base'>FAQs</a>
            </Link>
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
            <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
      <div className='usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2'> 
            <Link href="/covid-19"> 
                <a className='text-gray-400 text-sm  lg:text-base'>Covid-19</a>
            </Link>
        </div>  
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
            <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2'> 
            <Link href="/about"> 
                <a className='text-gray-400 text-sm  lg:text-base'>About</a>
            </Link>
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
            <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2'> 
            <Link href="/careers"> 
                <a className='text-gray-400 text-sm  lg:text-base'>Careers</a>
            </Link>
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
            <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2'> 
            <Link href="/franchise"> 
                <a className='text-gray-400 text-sm  lg:text-base'>Franchise</a>
            </Link>
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
            <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2'> 
            <Link href="/volunteering"> 
                <a className='text-gray-400 text-sm  lg:text-base'>Volunteering</a>
            </Link>
        </div>
        <div className=' hidden lg:block text-gray-400 text-2xl'> 
            <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
        </div>
        <div className='usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2'> 
            <Link href="/corporate-contact"> 
                <a className='text-gray-400 text-sm  lg:text-base'>Corporate Contact</a>
            </Link>
        </div>
        
    </div>
    </>
    )

}

export default UseFullLinks