
import Homenav from "../../comps/Homenav";
import Footer from "../../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";

import Seofields from "../../comps/util/SeoFields";

import { getBlogSlug } from "../api/blog/getBlogSlug";
import { getSingleBlogData } from "../api/blog/getSingleBlogData";
import SingleBlogHero from "../../comps/blogPageComps/SingleBlogHero";
import { useEffect, useState } from "react";
import SingleBlogContent from "../../comps/blogPageComps/SingleBlogContent";
import BlogInfo from "../../comps/blogPageComps/BlogInfo";
import BlogSideBar from "../../comps/blogPageComps/BlogSideBar";
import RelatedBlogs from "../../comps/blogPageComps/RelatedBlogs";

const SingleBlog=(props)=>{
    const [blpadding,setBlpadding]=useState('100px')
    useEffect(()=>{
        const blpadel=document.querySelector('#sbl-content')
        const ftimgheight=document.querySelector("#sbl-ftimg").offsetHeight

        const pt=Math.floor(ftimgheight/2)+'px'
        setBlpadding(pt)

    },[])

    const toTitleCase=(title)=>{
        const titlefres=title.replace(/-/g,' ')
        const btitle=titlefres.split(' ').map((word)=>{return (word.charAt(0).toUpperCase() + word.slice(1))}).join(" ") // breadcum title capitalize
        var bret=btitle 
        if(bret.length>15){
            bret=bret.substring(0, 20).trim()+"..."
        }
          return (
            
            <div className='bitem flex items-center'><span>{bret}</span> <span className='bsep text-gold'><FiChevronRight/></span></div>
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
         
         <SingleBlogHero pagedata={props.pagedata}/>

{/* =========================================================================================main content ======== end */}
</div>
{/*=========================== blog content area===================*/}
<div className="single-blog-content-holder bg-[#FFFCEB]" style={{paddingTop:blpadding}}> 
            <div id="sbl-content-box" className="blog-container max-w-[1060px] mx-auto px-4 ">
              <div className="flex sbl-content flex-col md:flex-row justify-between space-x-0 space-y-2 md:space-y-0 md:space-x-8 lg:space-x-12"> 
                <div className="sbl-main max-w-[700px] pb-16 border-b border-[#c4c4c4]"> 
                <BlogInfo bloginfo={props.bloginfo}/>
                  <SingleBlogContent blogdesc={props.blogdesc} pagedata={props.pagedata}/>
                </div>
                <div className="sbl-sidebar md:h-screen md:sticky md:top-10">
                <BlogSideBar/>
                </div>

              </div>

            
            </div>


</div>
{/*===========================related blog area===================*/}
<RelatedBlogs relatedblogdata={props.relatedblogdata}/>

  <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
  </>
      )
}

export default SingleBlog


export const getStaticPaths=async()=>{
    const res= await getBlogSlug();
  
    const paths=res.map(blogslug=>{
            return {
                params:{blogSlug: blogslug.slug.toString()}
            }
    } )
  
    return {
        paths,
        fallback:false,
        
    }
  
  }
  
  export const getStaticProps=async(context)=>{
  
    const singleBlogData=await getSingleBlogData(context.params.blogSlug)
  
    return{
        props:{
          pagemeta:singleBlogData.pagemeta,
          pagedata:singleBlogData.pagedata,
          bloginfo:singleBlogData.bloginfo,
          blogdesc:singleBlogData.blogdesc,
          relatedblogdata:singleBlogData.relatedblogdata,
          locationlist:singleBlogData.locationlist,
           activitylist:singleBlogData.activitylistSlug,
          eventlist:singleBlogData.eventlistSlug
          
  
  
        },
        revalidate: 30
    }
  
  }
