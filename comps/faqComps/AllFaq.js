import { useState } from "react"
import TitleSeparator from "../util/TitleSeparator"
import FaqList from "./FaqList"



const AllFaq=(props)=>{

    const[showFaq,setShowFaq]=useState(null)
    const faqlist=props.faqlist

   const faqgroup=  faqlist.reduce((groupname, faq) => {
        const { group } = faq;
        groupname[group] = groupname[group] ?? [];
        groupname[group].push(faq);
        return groupname;
      }, {})
    
      const faqArr=Object.entries(faqgroup)

       // console.log(faqArr)
       // console.log(faqgroup)

    return (

        <div className="all-faq relative bg-black py-16 md:py-24 lg:py-32 px-4 overflow-hidden mt-[-60px] md:mt-[0px]" style={{

            background:'url("/assets/svg/gift-bg.svg"), linear-gradient(65deg, rgb(0, 0, 0), rgb(0, 0, 0))',
            backgroundPosition:"bottom center,center center",
            backgroundRepeat:"no-repeat"
        }}>
            <div className="gift-lt max-w-[72px] md:max-w-[120px] lg:max-w-[130px] opacity-[0.4] absolute top-0 left-0"><img className="w-full" src="/assets/faq-q.png"></img></div>
            <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
            <div className="max-w-7xl mx-auto relative z-30">
                <div className="section-title mb-8 md:mb-12">
                    <TitleSeparator title="FREQUENTLY ASKED QUESTIONS" color="golden-text" weight="font-bold"/>
                    <p className="mt-4 text-gray-100 max-w-2xl mx-auto text-center lg:text-lg">#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend &amp; family today</p>

                </div>

                    {
                     faqArr.map((faq,index)=>{

                        return (
                            <div key={index} className="faq-container py-4 md:py-8 max-w-6xl mx-auto">
                                <div className="faq-group-title golden-text pb-2 md:pb-6 lg:pb-8">
                                      <h2 className="text-[24px] md:text-2xl lg:text-3xl font-bold font-os uppercase">{faq[0].split('_').join(' ')} </h2>  
                                </div>
                                <div className="faq-box ">
                                    <FaqList faqlist={faq[1]}/>
                                </div>
                            </div>
                        )
                     })

                       
                    }


            </div>
            

        </div>
    )

    
}

export default AllFaq