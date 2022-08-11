import Head from "next/dist/shared/lib/head";
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page template=============

import GameHomeHero from "../comps/activitiyPageComps/GameHomeHero";
import { getGiftCardPageData } from "./api/getGiftCardPageData";
import BuyGiftCards from "../comps/giftCardPageComps/BuyGiftCards";
import WhyAdvGiftCards from "../comps/giftCardPageComps/WhyAdvGiftCards";
import GiftFaq from "../comps/giftCardPageComps/GiftFaq";

const giftCard=(props)=>{
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
                 <title>All in adventure | Gift Cards</title>
                  <meta name="description" content="All in adventure escape games" />
        
          </Head>
           <Homenav/>
              {/* =======header content ======== end */}
    
     {/* =========================================================================================main content ======== end */}
    <div id="mainContent" className='main-content nobtn-main-content bg-center' >
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
         <GameHomeHero gametotal="not" pagedata={props.pagedata}/>
         <BuyGiftCards/>
          <WhyAdvGiftCards/>
          <GiftFaq faqlist={props.faqlist}/>



  {/* =========================================================================================main content ======== end */}
        </div>
  
          <Footer/>
          </>
    )

}

export default giftCard

export const getStaticProps=async()=>{

    const giftpagedataData=await getGiftCardPageData()
  
    return {
      props:{
        pagemeta:giftpagedataData.pagemeta,
        pagedata:giftpagedataData.pagedata,
        faqlist:giftpagedataData.gift_faq
      }
    }
  }