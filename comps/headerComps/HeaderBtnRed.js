import Link from "next/link"


const HeaderBtnRed =(props)=>{

    return(

        <div className='heade-btn'> 
                
         <button className={props.btnbg+' cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300'}>{props.btntext}</button>
                  

        </div>
    )
}
export default HeaderBtnRed;