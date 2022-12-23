
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page template=============
import { getAnswerPageData } from "./api/getAnswerPageData";
import GameHomeHero  from "../comps/activitiyPageComps/GameHomeHero";
import HintAns from "../comps/util/HintAns";
import Seofields from "../comps/util/Seofields";



const Answers=(props)=>{
    /* customizing breadcum */
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
           <Seofields meta={props.pagemeta}/>
          
           <Homenav 
           locationlist={props.locationlist}
           activitylist={props.activitylist}
           eventlist={props.eventlist}
           />
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
         

      
        <GameHomeHero gametotal="not" pagedata={props.pagedata}/>
        <HintAns hintlist={props.hintlist}/>
       
   

  {/* =========================================================================================main content ======== end */}
        </div>
  
          <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
          </>
    )
}

export default Answers

export const getStaticProps=async()=>{

    const ansData=await getAnswerPageData()

    return{
        props:{
            pagedata:ansData.pagedata,
            pagemeta:ansData.pagemeta,
            locationlist:ansData.locationlist,
            activitylist:ansData.activitylistSlug,
            eventlist:ansData.eventlistSlug,
            hintlist:ansData.hintlist
            
        },
        revalidate:30
    }
}