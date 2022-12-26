import Link from "next/link";
import LocationBtn from "../util/LocationBtn";

const FranchiseHero=(props)=>{

    return(
        <div className='home-hero' style={
            {
                background:"url('"+props.pagedata.coverimageL+"')"
            }
           }>
        <div className='home-hero-holder '> 
        <div className="homehero-img w-full min-h-[220px] md:hidden">
                  <img src={props.pagedata.coverimageM}></img>
             </div>
            <div className='max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-20 md:py-20 lg:py-32 xl:py-40 relative z-10'>
                <div className="page-benar-info"> 
                
                 <p className=' md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-white text-center'>JOIN THE U.S. ESCAPE ROOM LEADER </p> 
                 <h1 className='golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os uppercase'>{
                 
                        props.pagedata.pagetitle 
                 
                 } </h1>
                 <p className='text-gray-100 max-w-[760px] mx-auto text-center lg:text-lg'>{props.pagedata.pagesubtitle } </p>
                 </div>
                <div className="max-w-md mx-auto mt-8 ">

                        {/*============location search btn==========*/}
                       
                            <a href={'/franchise-contact'} className="bg-red-600 hover:bg-red-700 rounded-full py-3 px-8 lg:py-4 lg:px-12 max-w-sm block mx-auto text-white text-lg text-center ">{props.label}</a>
                        
                      
                         {/*============location search btn==========*/}


                </div>
               
                
          
            </div>
        </div>
        </div>
    )
}

export default FranchiseHero;