import TitleSeparator from "../util/TitleSeparator"
import FaqList from "../faqComps/FaqList"
import Link from "next/dist/client/link"
import { FiChevronRight} from "react-icons/fi";


const DealsFaqs=(props)=>{

    return(
        <div className="reward-faq relative bg-black py-16 md:py-24 lg:py-32 px-4 overflow-hidden" style={{
    
            background:'url("/assets/svg/gift-bg.svg"), linear-gradient(65deg, rgb(0, 0, 0), rgb(0, 0, 0))',
            backgroundPosition:"bottom center,center center",
            backgroundRepeat:"no-repeat"
        }}>
            <div className="gift-lt max-w-[72px] md:max-w-[120px] lg:max-w-[130px] opacity-[0.4] absolute top-0 left-0"><img className="w-full" src="/assets/faq-q.png"></img></div>
            <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
            <div className="max-w-[990px] mx-auto relative z-30">
                <div className="section-title mb-8 md:mb-12">
                    <TitleSeparator title="FREQUENTLY ASKED QUESTIONS" color="golden-text" weight="font-bold"/>
                  
    
                </div>
    
                   
                    <FaqList faqlist={props.faqlist}/>
                    <div className="gl-bottom-link mt-12 text-center">
                          
                              <a href="/faqs" className="flex text-lg justify-center space-x-1 font-medium items-center text-red-600 hover:text-red-700">
                               <span>Read more FAQ's </span>
                               <span><FiChevronRight/></span> 
                                </a>
                          
                        </div>
    
    
                           
    
    
            </div>
            
    
        </div>
    )
    }
    
    export default DealsFaqs