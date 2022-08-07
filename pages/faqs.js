import Head from "next/dist/shared/lib/head";
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
import { getAllFaq } from "./api/getAllFaq";
import GameHomeHero from "../comps/activitiyPageComps/GameHomeHero";
import AllFaq from "../comps/faqComps/AllFaq";


const faqs=(props)=>{



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
                 <title>All in adventure | Faqs</title>
                  <meta name="description" content="All in adventure escape games" />
        
          </Head>
           <Homenav/>
              {/* =======header content ======== end */}
    
     {/* =========================================================================================main content ======== end */}
    <div id="mainContent" className='main-content nobtn-main-content bg-center' style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }}>
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
         <AllFaq faqlist={props.faqlist}/>
          
  

  {/* =========================================================================================main content ======== end */}
        </div>
  
          <Footer/>
          </>
    )


}

export default faqs

export const getStaticProps=async()=>{

  const faqlist=await getAllFaq()

  return{
    props:{
      pagemeta:faqlist.pagemeta,
      pagedata:faqlist.pagedata,
      faqlist:faqlist.faqlist
    }
  }
}