import Link from "next/link"


const HeaderBtnRed =(props)=>{

    return(

        <div className='heade-btn'> 
                
                                 <p className={props.btnbg+' cursor-pointer  rounded font-medium text-white  hover:bg-dark-red  py-3 px-8 border border-red-500 hover:border-dark-red transition duration-300'}>{props.btntext}</p>
                  

        </div>
    )
}
export default HeaderBtnRed;