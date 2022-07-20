import TitleSeparator from "../util/TitleSeparator"
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa"
import HomeReviewCarousel from "./HomeReviewCarousel";

const HomeReviewSlider=()=>{

    return (<div className="homereview relative py-16 md:py-20 lg:py-28 overflow-hidden">
   {/** =======ornamental icon===== */}
      <div className="pl-or pl-or-1 absolute top-0 left-0"> 
          <img src="/assets/pl-bgi-1.png"></img>
      </div>
      <div class="htb-bg-icon htb-bg-3 absolute"><img src="/assets/Navigation.png"></img></div>
      <div class="htb-bg-icon htb-bg-2 absolute"><img src="/assets/Compas-brown.png"></img></div>
      <div class="htb-bg-icon htb-bg-4 absolute"><img src="/assets/Skull.png"></img></div>

    {/** =======ornamental icon end===== */}
    <div className="max-w-7xl mx-auto  px-4 relative z-20 ">
         <TitleSeparator title='REVIEWS' color='golden-text' weight='font-bold'/>
         <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-16">
                <p className="text-gray-700 md:px-8">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
            </div>
    </div>
    <div className="slider-box pb-4 md:pb-8 relative">  
    <HomeReviewCarousel/>
    </div>
    <div className="view-all flex justify-center pt-8 md:pt-12 lg:pt-16">
        <Link href="#"> 
          <a className="flex lg:text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"><span>See all reviews</span> <FaAngleRight/></a>
        </Link>
     </div>
</div>
)


}

export default HomeReviewSlider;