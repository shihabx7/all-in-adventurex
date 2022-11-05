import FaqList from "../faqComps/FaqList"
import TitleSeparator from "../util/TitleSeparator"
const GiftFaq=(props)=>{

    return (

        <div id="gift-faq" className="all-faq relative bg-black py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px]" style={{

            background:'url("/assets/svg/gift-bg.svg"), linear-gradient(65deg, rgb(0, 0, 0), rgb(0, 0, 0))',
            backgroundPosition:"bottom center,center center",
            backgroundRepeat:"no-repeat"
        }}>
            <div className="gift-lt max-w-[72px] md:max-w-[120px] lg:max-w-[130px] opacity-[0.4] absolute top-0 left-0"><img className="w-full" src="/assets/faq-q.png"></img></div>
             <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
                 <div className="max-w-7xl mx-auto relative z-30">
                     <div className="section-title mb-8 md:mb-12">
                          <TitleSeparator title="FREQUENTLY ASKED QUESTIONS" color="golden-text" weight="font-bold"/>
                          <p className="mt-4 text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg">Browse through these FAQs to find answers to commonly raised questions. If you don't see what's on your mind, reach out to us anytime on phone or email.</p>

                      </div>
                    <div className="gift-faq-box max-w-[1000px] mx-auto"> 

                        <FaqList faqlist={props.faqlist}/>

                    </div>
                
                     
                </div>
        </div>
    )

}

export default GiftFaq