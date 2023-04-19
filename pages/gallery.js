import Head from "next/dist/shared/lib/head";
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
import { getGalleryList } from "./api/getGalleryList";
import GameHomeHero from "../comps/activitiyPageComps/GameHomeHero";
import TitleSeparator from "../comps/util/TitleSeparator";
import MainGallery from "../comps/util/MainGallery";
import Link from "next/link";

import Seofields from "../comps/util/SeoFields";

const gallery=(props)=>{



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
           <Homenav locationlist={props.locationlist}
           activitylist={props.activitylist}
           eventlist={props.eventlist}/>
              {/* =======header content ======== end */}
    
     {/* =========================================================================================main content ======== end */}
    <div id="mainContent" className='main-content nobtn-main-content bg-center bg-repeat-y' style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }}>
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
        
         <div className="gallery-section py-16 md:py-20 lg:py-28 relative" style={{backgroundImage:"url('/assets/game-dt-bg.jpg')"}}>
            <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>
              <div className="section-container max-w-7xl mx-auto relative z-30">
           {/* =======customer  gallery========  */}
                <div className="inperson-gallery">
                   <div className="section-title  text-center max-w-[800px] mx-auto px-4 md:px-0">
                        <p className="uppercase">CUSTOMER GALLERY</p>
                        <TitleSeparator title="IN-PERSON ESCAPE ROOM GAMES" color="golden-text" weight="font-bold"/>
                        <p className="text-gray-700 md:px-8 md:text-lg">Escape rooms are one of the hottest trends in entertainment today. Players must work together to find hidden clues, solve puzzles, crack codes, complete tasks, and escape before time runs out!</p>
                    </div>

                    <MainGallery category="escapegame" galleryitem={props.gallerylist}/>
                    <div className="gl-bottom-link mt-12 text-center">
                        <Link href="/activities"> 
                          <a className="flex text-lg justify-center space-x-1 font-medium items-center text-red-600 hover:text-red-700">
                           <span>View all in-person escape rooms</span>
                           <span><FiChevronRight/></span> 
                            </a>
                        </Link>
                    </div>

                </div>
                {/* =======inperson gallery========  end*/}
                {/* =======event gallery========  */}
                <div className="event-gallery my-16 md:my-20 lg:my-28">
                   <div className="section-title  text-center max-w-[800px] mx-auto px-4 md:px-0">
                        <TitleSeparator title="EVENTS AND PARTIES" color="golden-text" weight="font-bold"/>
                        <p className="text-gray-700 md:px-8 md:text-lg">We&apos;ve hosted over 10,000 birthday parties and team-building events over the years. With more escape room themes and options being constantly added, we are always looking for ways to make your event memorable.</p>
                    </div>

                    <MainGallery category="events" galleryitem={props.gallerylist}/>
                    <div className="gl-bottom-link mt-12 text-center">
                        <Link href="/events"> 
                          <a  className="flex text-lg justify-center space-x-1 font-medium items-center text-red-600 hover:text-red-700">
                           <span>View all events and parties </span>
                           <span><FiChevronRight/></span> 
                            </a>
                            </Link>
                    </div>

                </div>

            {/* =======event gallery========  end*/}
            {/* =======OTHERS GAMES AND ACTIVITES========  */}
            <div className="other-games-gallery my-16 md:my-20 lg:my-28">
                   <div className="section-title  text-center max-w-[800px] mx-auto px-4 md:px-0">
                        <TitleSeparator title="OTHER GAMES AND ACTIVITIES" color="golden-text" weight="font-bold"/>
                        <p className="text-gray-700 md:px-8 md:text-lg">All In Adventures is more than an escape room place. Join us to experience more fun activities, including Game Show Rooms, Beat the Seat and Axe Throwing.</p>
                    </div>

                    <MainGallery category="others" galleryitem={props.gallerylist}/>
                    <div className="gl-bottom-link mt-12 text-center">
                        <Link href="/activities#others-physical-games"> 
                          <a  className="flex text-lg justify-center space-x-1 font-medium items-center text-red-600 hover:text-red-700">
                           <span>View all other in-person games</span>
                           <span><FiChevronRight/></span> 
                            </a>
                            </Link>
                    </div>

                </div>

            {/* =======OTHERS GAMES AND ACTIVITES========  end*/}
            {/* =======VIRTUAL GAMES========  */}
            <div className="virtual-gallery ">
                   <div className="section-title  text-center max-w-[800px] mx-auto px-4 md:px-0">
                        <TitleSeparator title="VIRTUAL GAMES" color="golden-text" weight="font-bold"/>
                        <p className="text-gray-700 md:px-8 md:text-lg">We offer a new way to stay connected while apart. For unlimited players, any time, anywhere. Your team will work together on Zoom, and a game master will broadcast live from the game show room.</p>
                    </div>

                    <MainGallery category="virtual" galleryitem={props.gallerylist}/>
                    <div className="gl-bottom-link mt-12 text-center">
                        <Link href="/virtual-games/virtual-game-show-room"> 
                          <a  className="flex text-lg justify-center space-x-1 font-medium items-center text-red-600 hover:text-red-700">
                           <span>View virtual game show room </span>
                           <span><FiChevronRight/></span> 
                            </a>
                            </Link>
                    </div>

                </div>

            {/* =======VIRTUAL GAMES========  end*/}
                 </div>

             <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>
         </div>

        


  {/* =========================================================================================main content ======== end */}
        </div>
  
          <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
          </>
    )


}

export default gallery

export const getStaticProps=async()=>{

  const gallerylist=await getGalleryList()

  return{
    props:{
      pagemeta:gallerylist.pagemeta,
      pagedata:gallerylist.pagedata,
      gallerylist:gallerylist.gallery,
      locationlist:gallerylist.locationlist,
      activitylist:gallerylist.activitylistSlug,
      eventlist:gallerylist.eventlistSlug,
    }
  }
}