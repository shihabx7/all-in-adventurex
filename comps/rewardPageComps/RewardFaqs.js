import TitleSeparator from "../util/TitleSeparator"
import FaqList from "../faqComps/FaqList"
import Link from "next/dist/client/link"
import { FiChevronRight} from "react-icons/fi";

const RewardFaqs=(props)=>{

return(
    <div className="reward-faq relative bg-black py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
        <div className="gift-lt max-w-[72px] md:max-w-[120px] lg:max-w-[130px] opacity-[0.4] absolute top-0 left-0"><img className="w-full" src="/assets/faq-q.png"></img></div>
        <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
        <div className="max-w-[990px] mx-auto relative z-30">
            <div className="section-title mb-8 md:mb-12">
                <TitleSeparator title="FREQUENTLY ASKED QUESTIONS" color="golden-text" weight="font-bold"/>
                <p className="mt-4 text-gray-100 max-w-2xl mx-auto text-center lg:text-lg">Browse the rewards program FAQs to find answers to commonly asked questions. If you don't see what's on your mind, reach out to us anytime via phone or by email.</p>

            </div>

               
                <FaqList faqlist={props.faqlist}/>
                <div className="gl-bottom-link mt-12 text-center">
                      <Link href="/faqs">
                          <a className="flex lg:text-lg justify-center space-x-1 font-medium items-center text-red-500 hover:text-red-700">
                           <span>Read more FAQ's </span>
                           <span><FiChevronRight/></span> 
                            </a>
                      </Link>
                    </div>


                       


        </div>
        

    </div>
)
}

export default RewardFaqs