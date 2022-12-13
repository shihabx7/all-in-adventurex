import Link from "next/link"


const HeaderBtnTrans =(props)=>{
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

        <div  className='heade-btn'> 
        {
             (props.locationslug && props.eventbooking) && 
             <div> 
                {
                    props.eventbooking.eventstatus==true &&
                    <button onClick={()=>{bookGame(props.eventbooking)}} className='bg-transparent cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border-[2px] border-red-600 hover:border-red-700 transition duration-300'>BOOK A PARTY</button>

                }
                {
                    props.eventbooking.eventstatus==false &&
                    <a href={"/"+props.locationslug+"/events"} className='bg-transparent cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2.5 px-6 border-[2px] border-red-600 hover:border-red-700 transition duration-300'>
                          BOOK A PARTY
                      </a>

                }
             </div> 


        }

        {
            (props.locationslug && !props.eventbooking) && 
            <a href={"/"+props.locationslug+"/events"} className='bg-transparent cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2.5 px-6 border-[2px] border-red-600 hover:border-red-700 transition duration-300'>
                    {props.btntext}
            </a>
        }
               {
            !props.locationslug &&
            <button onClick={showloc} className='bg-transparent cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border-[2px] border-red-600 hover:border-red-700 transition duration-300'>{props.btntext}</button>
        } 
         
                  

        </div>
    )
}
export default HeaderBtnTrans;