import Link from "next/link"


const EventDbtn=(props)=>{
   
    
      const showloc=()=>{
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('overflow-hidden')
        document.getElementById('locmenu').classList.remove('hidden')
      }

    

    return(
        props.link?
        <div className="inline-block bg-golden hover:bg-golden-alt  search-loc hover:cursor-pointer hover:shadow boder-p rounded-full"> 
             <div className="bg-[#FEF6E9] hover:bg-golden-alt  rounded-full items-center  text-[#424242] md:text-lg gont-medium">
                 
                       
                        <Link href={props.link}>
                            <a className="block py-2 px-6  md:py-3 md:px-8">{props.label}</a>
                        </Link>
                 
    
            </div>
         </div>
        :
        <div onClick={showloc} className="inline-block bg-golden hover:bg-golden-alt  search-loc hover:cursor-pointer hover:shadow boder-p rounded-full"> 
             <div className="bg-[#FEF6E9] hover:bg-golden-alt  rounded-full items-center py-2 px-6 md:py-3 md:px-8 text-[#424242] md:text-lg gont-medium">
                    {props.label}
    
            </div>
         </div>
         
         




    )

    
}

export default EventDbtn;

