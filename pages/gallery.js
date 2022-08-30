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
           <Head>
                 <title>All in adventure | Gallery</title>
                  <meta name="description" content="All in adventure escape games" />
        
          </Head>
           <Homenav/>
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
           {/* =======inperson gallery========  */}
                <div className="inperson-gallery">
                   <div className="section-title  text-center max-w-[600px] mx-auto">
                        <p className="uppercase">CUSTOMER GALLERY</p>
                        <TitleSeparator title="IN PERSON ESCAPE GAMES" color="golden-text" weight="font-bold"/>
                        <p className="text-gray-700 md:px-8 md:text-lg">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                    </div>

                    <MainGallery category="escapegame" galleryitem={props.gallerylist}/>
                    <div className="gl-bottom-link mt-12 text-center">
                      <Link href="/activities">
                          <a className="flex lg:text-lg justify-center space-x-1 font-medium items-center text-red-500 hover:text-red-700">
                           <span>View all In person escape rooms </span>
                           <span><FiChevronRight/></span> 
                            </a>
                      </Link>
                    </div>

                </div>
                {/* =======inperson gallery========  end*/}
                {/* =======event gallery========  */}
                <div className="event-gallery my-16 md:my-20 lg:my-28">
                   <div className="section-title  text-center max-w-[600px] mx-auto">
                        <TitleSeparator title="EVENTS AND PARTIES" color="golden-text" weight="font-bold"/>
                        <p className="text-gray-700 md:px-8 md:text-lg">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                    </div>

                    <MainGallery category="escapegame" galleryitem={props.gallerylist}/>
                    <div className="gl-bottom-link mt-12 text-center">
                      <Link href="/events">
                          <a className="flex lg:text-lg justify-center space-x-1 font-medium items-center text-red-500 hover:text-red-700">
                           <span>View all Events </span>
                           <span><FiChevronRight/></span> 
                            </a>
                      </Link>
                    </div>

                </div>

            {/* =======event gallery========  end*/}
            {/* =======OTHERS GAMES AND ACTIVITES========  */}
            <div className="other-games-gallery my-16 md:my-20 lg:my-28">
                   <div className="section-title  text-center max-w-[600px] mx-auto">
                        <TitleSeparator title="OTHERS GAMES AND ACTIVITES" color="golden-text" weight="font-bold"/>
                        <p className="text-gray-700 md:px-8 md:text-lg">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                    </div>

                    <MainGallery category="escapegame" galleryitem={props.gallerylist}/>
                    <div className="gl-bottom-link mt-12 text-center">
                      <Link href="/activities#others-physical-games">
                          <a className="flex lg:text-lg justify-center space-x-1 font-medium items-center text-red-500 hover:text-red-700">
                           <span>View all others physical games </span>
                           <span><FiChevronRight/></span> 
                            </a>
                      </Link>
                    </div>

                </div>

            {/* =======OTHERS GAMES AND ACTIVITES========  end*/}
            {/* =======VIRTUAL GAMES========  */}
            <div className="virtual-gallery ">
                   <div className="section-title  text-center max-w-[600px] mx-auto">
                        <TitleSeparator title="VIRTUAL GAMES" color="golden-text" weight="font-bold"/>
                        <p className="text-gray-700 md:px-8 md:text-lg">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                    </div>

                    <MainGallery category="escapegame" galleryitem={props.gallerylist}/>
                    <div className="gl-bottom-link mt-12 text-center">
                      <Link href="/virtual-games">
                          <a className="flex lg:text-lg justify-center space-x-1 font-medium items-center text-red-500 hover:text-red-700">
                           <span>View all virtual games </span>
                           <span><FiChevronRight/></span> 
                            </a>
                      </Link>
                    </div>

                </div>

            {/* =======VIRTUAL GAMES========  end*/}
                 </div>

             <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>
         </div>

        

 
     {
      console.log(props)
     }
          
  

  {/* =========================================================================================main content ======== end */}
        </div>
  
          <Footer/>
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
      gallerylist:gallerylist.gallery
    }
  }
}