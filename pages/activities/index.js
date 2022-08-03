import Head from "next/dist/shared/lib/head";
import Homenav from "../../comps/Homenav";
import Footer from "../../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
import GameHomeHero from "../../comps/activitiyPageComps/GameHomeHero";
import GameList from "../../comps/activitiyPageComps/GameList";
import { getAllActivity } from "../api/getAllActivity";


const activityData={
    pagedata:{
        totalLocation:"28",
        coverimageL:"/assets/home-benar-bg.jpg",
        coverimageM:"/assets/home-hero.jpg",
        totalLocations:28,
        totalUniqueGames:"11",
        totalFiveStarReview:"90k",
        totalPlayerEscaped:"60k",
        activityname:"ALL ESCAPE ROOM AND ACTIVITIES",
    },
}

const viewAllActivities=(props)=>{

      /* custom breadcum code */
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
                 <title>All in adventure Activities</title>
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
         
   

            <GameHomeHero pagedata={activityData.pagedata}/>
            <GameList activitylist={props.activitylist}/>
            
          {console.log(props)}
  


  {/* =========================================================================================main content ======== end */}
        </div>
  
          <Footer/>
          </>
      )
}

export default viewAllActivities;


export const getStaticProps = async()=>{

    const allActivity=await getAllActivity();
    
    return{
      props:{
        pagemeta:allActivity.pagemeta,
        pagedata:allActivity.pagedata,
        activitylist:allActivity.activity_list


      },
      revalidate: 30
  }
}