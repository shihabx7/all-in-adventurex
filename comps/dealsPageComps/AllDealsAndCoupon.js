import CouponForm from "./CouponForm"
import CouponDisplay from "./CouponDisplay"

import { FiChevronRight } from "react-icons/fi";
const AllDealsAndCoupon=(props)=>{

    return(
        <div className="our-mission-vission relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
             <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>
                <div className="section-container max-w-5xl mx-auto px-4 py-16 md:py-20 lg:py-28 relative z-30">
                    {
                        props.couponlist.map((coupon)=>{

                            return(
                                <div key={coupon.id} className="copun-adv mb-8 md:mb-12 shadow-md">
                                     <CouponForm id={coupon.id} coupon={coupon}/>
                                </div>
                            )

                        })
                    }
                    <CouponDisplay/>
                    <div className="view-all flex justify-center mt-8">
                            
                              <a href="/rewards-program" className="flex text-lg  justify-center space-x-1 items-center text-red-600 hover:text-red-700 font-medium"><span>Learn more about reward program</span> <FiChevronRight/></a>
                           
                         </div>
                </div>

             <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>
        </div>
    )

}

export default AllDealsAndCoupon