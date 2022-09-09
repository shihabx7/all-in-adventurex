import Link from "next/link"


const GameDtBtn=(props)=>{
   
    
      const showloc=()=>{
        document.getElementById('locmenu').classList.remove('hidden')
      }

      const bookGame=(bookingData)=>{
        FH.open({
          shortname: bookingData.shortname,
          fallback: 'simple', 
          fullItems: 'yes', 
         flow:  bookingData.flow, 
          view: {item:bookingData.item}
        });
      }

    return(
        props.bookingdata?
        <div className="inline-block bg-golden hover:bg-golden-alt  search-loc hover:cursor-pointer hover:shadow boder-p rounded-full"> 
             <div className="bg-[#FEF6E9] hover:bg-golden-alt  rounded-full items-center  text-[#424242] md:text-lg gont-medium">
                 
                        <button onClick={()=>bookGame(props.bookingdata)} className="block py-2 px-6  md:py-3 md:px-8">{props.label}</button>
                 
    
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

export default GameDtBtn;

