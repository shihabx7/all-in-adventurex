import Link from "next/link";
import LocationBtn from "../util/LocationBtn";

const CareerHero=(props)=>{

    return(
        <div className='home-hero' style={
            {
                background:"url('"+props.pagedata.coverimageL+"')"
            }
           }>
        <div className='home-hero-holder '> 
        <div className="homehero-img md:hidden min-h-[66%] bg-[#111111]">
                  <img src={props.pagedata.coverimageM}></img>
             </div>
            <div className='max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-20 md:py-20 lg:py-32 xl:py-40 relative z-10'>
                <div className="page-benar-info"> 
                
                 
                 <h1 className='golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os uppercase'>{props.pagedata.pagetitle}</h1>
                 <p className='text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg'>{props.pagedata.pagesubtitle} </p>
                 </div>
                <div className="max-w-md mx-auto mt-8 ">

                        {/*============alljob-  btn==========*/}
                        {
                            props.btnid &&
                            <a href={"#"+props.btnid} className="block py-3 px-10 bg-red-600 hover:bg-red-700 text-white text-center md:text-lg rounded-full">VIEW ALL JOB POSITIONS</a>

                        }
                        {
                            (props.jobname && props.jobid) &&
                            
                                <a href={"/careers/apply#"+props.jobid} className="block py-3 px-10 bg-red-600 hover:bg-red-700 text-white text-center md:text-lg rounded-full">SUBMIT YOUR APPLICATION</a>
                         
                            
                        }
                        {
                            (props.jobname && !props.jobid) &&
                            
                                <a href={"/careers/apply"} className="block py-3 px-10 bg-red-600 hover:bg-red-700 text-white text-center md:text-lg rounded-full">SUBMIT YOUR APPLICATION</a>
                         
                            
                        }
                           
                         {/*============alljob search btn==========*/}


                </div>
               
            </div>
        </div>
        </div>
    )
}

export default CareerHero;