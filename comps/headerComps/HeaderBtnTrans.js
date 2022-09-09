import Link from "next/link"


const HeaderBtnTrans =(props)=>{
    const showloc=()=>{
        document.getElementById('locmenu').classList.remove('hidden')
      }
    return(

        <div  className='heade-btn'> 

        {
            props.locationslug &&
            <a href={"/"+props.locationslug+"/events#eventform"} className='bg-transparent cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2.5 px-6 border border-red-600 hover:border-red-700 transition duration-300'>
                    {props.btntext}
            </a>
        }
               {
            !props.locationslug &&
            <button onClick={showloc} className='bg-transparent cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300'>{props.btntext}</button>
        } 
         
                  

        </div>
    )
}
export default HeaderBtnTrans;