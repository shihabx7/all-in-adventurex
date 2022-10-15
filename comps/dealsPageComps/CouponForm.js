import { useState } from "react";
import { BsFillCheckCircleFill,BsCheck } from "react-icons/bs";
const CouponForm=(props)=>{

    const [showCoupon,setShowcoupon]=useState(false)

     /*============= coupon form function ===============*/
    const showcouponnow=(e)=>{

        e.preventDefault()
        const namePatt=/^[A-Za-z ]+$/

        const name=document.getElementById('name'+props.id)
        const email=document.getElementById('email'+props.id)
        const nameErr=document.getElementById('err-name'+props.id)
        

        console.log(email.value)
       

        if(name.value!=''  && email.value!=''){

            if(name.value.length > 2 && name.value.match(namePatt))
            {
                setShowcoupon(true)
                nameErr.classList.add('hidden')
                name.classList.add('border-0')
                 name.classList.add('event-input')
                name.classList.remove('border-1')
                name.classList.remove('border-[#DB2427]')
            }
            else{
                nameErr.classList.remove('hidden')
                name.classList.remove('border-0')
                 name.classList.remove('event-input')
                name.classList.add('border-1')
                name.classList.add('border-[#DB2427]')
            }
            

           
        }

        else{
            

            name.classList.remove('border-0')
            name.classList.remove('event-input')
            name.classList.add('border-1')
            name.classList.add('border-[#DB2427]')

            email.classList.remove('border-0')
            email.classList.remove('event-input')
            email.classList.add('border-1')
            email.classList.add('border-[#DB2427]')
         
        }

        
    }
    /*============= coupon form function ===============*/
    /**============copy to clipboard==================== */
    const copyCoupon=()=>{
       

        const couponId=document.getElementById('coupon'+props.id)

        if (document.body.createTextRange) {
            const range = document.body.createTextRange();
            range.moveToElementText(couponId);
            range.select();
        } else if (window.getSelection) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(couponId);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.warn("Could not select text in node: Unsupported browser.");
        }
        navigator.clipboard.writeText(couponId.outerText);
       
    }

    /**============copy to clipboard==================== */
    return(
        <div className="couponcard bg-[#FFF3D8] border border-[#DAC89F] drop-shadow-sm my-4">
            {/* ==================coupon desc============================= */}
            <div className="copoun-desc-box px-4 py-4 md:px-6 md:py-6">
                <div className="coupon-title">
                    <p className="text-lg text-[#938056]">DEALS AND COUPONS</p>
                    <h2 className="golden-text font-os font-bold text-2xl md:text-3xl lg:text-4xl">{props.coupon.coupon_title}</h2>
                </div>
                <div className="coupon-desc mt-4 md:mt-4">
                    <p className="text-lg text-[#464646] lg:text-lg">{props.coupon.coupon_desc}</p>
                    {
                        props.coupon.social &&
                        <div className="flex space-x-4 md:space-x-8 my-4">
                            <a href="https://www.facebook.com/allinadventure/" target="_blank" className="cup-social transition duration-300 ease-out hover:drop-shadow-lg hover:scale-105 hover:ease-in">
                                <img className="w-[36px] md:w-[42px]" src="/assets/svg/facebook-coupon-icon.svg"></img>                                
                            </a>
                            <a href="https://www.instagram.com/all_in_adventures/" target="_blank" className="cup-social transition duration-300 ease-out hover:drop-shadow-lg hover:scale-105 hover:ease-in">
                                <img className="w-[36px] md:w-[42px]" src="/assets/svg/instagram-coupon-icon.svg"></img>                                
                            </a>
                        </div>
                    }
                    { props.coupon.coupon_point_list &&
                    <ul className="star-list pl-6 lg:text-lg text-[#464646] mt-4" >
                        {
                            
                            props.coupon.coupon_point_list.map((point)=>{

                                return(
                                    <li key={point.id} className="my-2">
                                        {point.point}
                                    </li>
                                )
                                
                            })
                        }
                        
                       
                    </ul>
                     }
                </div>

            </div>
            {/* ==================coupon desc============================= */}
            {/* ==================coupon from============================= */}
            <div className="copoun-form-box bg-[#F4E6C3] flex justify-between flex-col  md:flex-row space-y-2 space-x-0 md:space-y-0  md:space-x-2 ">
                <div className="md:w-1/3 coupon-offer-col bg-[#000000]  text-center">
                    <div className="py-12">
                        <p className="golden-text text-[64px] font-bold font-os leading-[1.2]">{props.coupon.coupon_offer_off}</p>
                        <p className="golden-text text-[48px] font-os uppercase">off</p>
                    </div>
                    <div className="bg-[#DAC89F] py-2 text-[#464646] md:text-lg">COUPON CODE</div>
                </div>
                <div className="coupon-form-col md:w-2/3 px-4 flex flex-col justify-between ">
                        <div className="coupon-form-top flex justify-between items-center mt-2 md:mt-4">
                            <div className="coupon-varified flex space-x-2 items-center uppercase text-[#A78849] text-sm md:text-base"><span className="text-lg md:text-xl"><BsFillCheckCircleFill/></span><span>VERIFIED</span></div>
                            <div className="coupon-varified flex space-x-1 items-center text-[#71603D] text-xs md:text-sm"><span className="text-xl"><BsCheck/></span><span>Last user saved <span className="font-medium">$25.87</span> 20 min ago</span></div>
                        </div>
                        <div className="coupon-code-col mb-4 md:mb-0 mt-4 max-w-[260px] md:max-w-[280px] inline-block relative">
                            <div className="coupon-code-box flex space-x-2 items-center justify-end  py-2 px-2 border-2 border-dashed border-[#E4CB98] rounded bg-[#FDF1D3] drop-shadow-md">
                                    <div id={"coupon"+props.id} className="text-xl md:text-2xl text-[#DB2427] font-medium text-center px-4"
                                    style={{
                                        width: showCoupon ? "100%":"auto"
                                    }}
                                    >
                                           {props.coupon.coupon_code}
                                    </div>
                                    {
                                        showCoupon &&
                                        <button onClick={copyCoupon} className="px-4 py-2 bg-[#E4CB98] rounded text-xs md:text-base font-medium hover:bg-golden-alt focus:bg-golden-alt">
                                        COPY
                                        </button>
                                    }
                                   
                                   
                            </div>
                            {
                                !showCoupon &&
                                <div className="flex items-center justify-center coupon-hider absolute top-0 left-0 h-full rounded-l w-[80%] bg-golden text-center text-white ">
                                     <p className="lg:text-lg">Show Coupon Code</p> 
                            </div>
                            }
                            
                        </div>
                        <form onSubmit={(e)=>showcouponnow(e)} className="pb-8 md:pb-4"> 
                        <div className="coupon-form-row  flex flex-col md:flex-row  space-y-3 md:space-y-0 md:space-x-4 md:items-end">
                               
                                <div className="coupon-form-col md:w-1/3">
                                        <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your name? *</p>
                                        <input id={"name"+props.id} type="text" className="w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your name" required></input>
                                        
                                </div>
                                <div className="coupon-form-col md:w-1/3">
                                         <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your email? *</p>
                                        <input id={"email"+props.id} type="email" className=" w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your Email" required></input>
                                </div>
                                <div className="coupon-form-col md:w-1/3">
                                    {
                                        showCoupon &&
                                        <p className="  success-coupon md:text-xs text-[#DB2122] mb-2 flex items-center space-x-1">
                                                <span className="text-xl"><BsCheck/></span><span>Success! Enjoy your discount</span>
                                            </p>
                                    }
                                        
                                        <button type="submit" className="text-white mt-2 md:mt-0 font-medium py-3 w-full bg-red-600 hover:bg-red-700 rounded-full">SHOW COUPON</button>
                                       
                                </div>
                               

                        </div>
                        <div className="from-err mt-2 text-xs md:text-base">
                             <p id={"err-name"+props.id} className="err-coupon md:text-xs text-[#DB2122] hidden">invalid Name</p>
                        </div>
                        
                        </form>
                </div>

            </div>
            {/* ==================coupon form============================= */}

        </div>
    )
}

export default CouponForm