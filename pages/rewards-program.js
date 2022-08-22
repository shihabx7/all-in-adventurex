
import Head from "next/dist/shared/lib/head";
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page template=============

import { getRewardPageData } from "./api/getRewardPageData"
import GameHomeHero from "../comps/activitiyPageComps/GameHomeHero";
import RewardsProgram from "../comps/rewardPageComps/RewardsProgram";
import ContactForJoin from "../comps/rewardPageComps/ContactForJoin";
import RewardFaqs from "../comps/rewardPageComps/RewardFaqs";
import EarningPoints from "../comps/rewardPageComps/EarningPoints";

const rewardProgram=(props)=>{
    const toTitleCase=(title)=>{
        const titlefres=title.replace(/-/g,' ')
        const btitle=titlefres.split(' ').map((word)=>{return (word.charAt(0).toUpperCase() + word.slice(1))}).join(" ") // breadcum title capitalize
         
          return (
            
            <div className='bitem flex items-center'><span>{btitle}</span> <span className='bsep text-gold'><FiChevronRight/></span></div>
          )
         }
         /* customizing breadcum */
 
  
      return(
          <>
              {/* =======header content======== */}
           <Head>
                 <title>All in adventure | Rewards Program</title>
                  <meta name="description" content="All in adventure escape games" />
        
          </Head>
           <Homenav/>
              {/* =======header content ======== end */}
    
     {/* =========================================================================================main content ======== end */}
    <div id="mainContent" className='main-content nobtn-main-content bg-center relative' >
           {/* =======breadcum content and breadcum========  */}
           <div className='breadcums  py-1 md:py-2 bg-[#fffceb]'>
             <Breadcrumbs  replaceCharacterList={[{ from: '-', to: ' ' }]} 
                    listClassName="max-w-7xl mx-auto px-2 md:px-4 breadcum-list text-sm md:text-base lg:text-lg" 
                    inactiveItemClassName="inline-block text-[#6a6a6a] hover:text-red-700" 
                    activeItemClassName="inline-block text-[#212121]"  
                    rootLabel="home" 
                    transformLabel={(title) => { return toTitleCase(title)} } >
              </Breadcrumbs>
        </div>
         {/* =======breadcum content and breadcum root page template======== end */}
         {
            console.log(props)
         }

        <GameHomeHero gametotal="not" pagedata={props.pagedata}/>
        <RewardsProgram/>
        <ContactForJoin/>
        <EarningPoints/>
        <RewardFaqs faqlist={props.faqlist}/>
         
       



  {/* =========================================================================================main content ======== end */}
        </div>
  
          <Footer/>
          </>
    )

}

export default rewardProgram

export const getStaticProps=async()=>{

    const rewardPageData=await getRewardPageData()

    return{
        props:{
            pagedata:rewardPageData.pagedata,
            pagemeta:rewardPageData.pagemeta,
            faqlist:rewardPageData.faqlist
        },
        revalidate:30
    }
}