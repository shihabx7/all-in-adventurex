import Head from "next/dist/shared/lib/head";
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page template=============
import FranchiseHero from '../comps/franchisePageComps/FranchiseHero';
import { getFranchisePageData } from './api/getFranchisePageData';
import FranchiseModel from "../comps/franchisePageComps/FranchiseModel";
import FranchiseTestimonials from "../comps/franchisePageComps/FranchiseTestimonials";
import WhyAllinAdventure from "../comps/franchisePageComps/WhyAllinAdventure";
import ProjectTimeLine from "../comps/franchisePageComps/ProjectTimeLine";
import KeytoSuccess from "../comps/franchisePageComps/KeytoSuccess";

const franchise  = (props) => {
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
                 <title>All in adventure | Franchise</title>
                  <meta name="description" content="All in adventure escape games" />
        
          </Head>
           <Homenav locationlist={props.locationlist}
           activitylist={props.activitylist}
           eventlist={props.eventlist}/>
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
         {
            console.log(props)
         }
         <FranchiseHero pagedata={props.pagedata} label="INQUIRY NOW" linkloc="/franchise-contact"/>
         <FranchiseModel/>
         <FranchiseTestimonials/>
         <WhyAllinAdventure/>
         <ProjectTimeLine/>
         <KeytoSuccess/>



  {/* =========================================================================================main content ======== end */}
        </div>
  
          <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
          </>
    )
}

export default franchise 

export const getStaticProps=async()=>{

    const franchisePageData=await getFranchisePageData()

    return{
        props:{

            pagedata:franchisePageData.pagedata,
            pagemeta:franchisePageData.pagemeta,
            locationlist:franchisePageData.locationlist,
            activitylist:franchisePageData.activitylistSlug,
            eventlist:franchisePageData.eventlistSlug
        },
        revalidate:30
    }
}