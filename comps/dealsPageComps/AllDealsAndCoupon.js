import CouponForm from "./CouponForm"

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
                   
                </div>

             <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>
        </div>
    )

}

export default AllDealsAndCoupon