
import Homenav from "../comps/Homenav"
import Footer from "../comps/Footer";
import Head from "next/head";
import { useState } from "react";

const viewTestimonials=()=>{
   
    
    const setTopPadding=()=>{
        //var headerHeight=document.getElementById("header").offsetHeight;
        console.log("load")
        //setPaddingTop(headerHeight+"px")
        //document.getElementById("mainContent").style.paddingTop=headerHeight+"px";
      }
     
      return (
        <> 
        <Homenav/>
        <div onLoad={setTopPadding} id="mainContent" className='main-content'>
          <Head>
            <title>All in adventure Testimonials</title>
            <meta name="description" content="All in one adventure escape games" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
         <h2>Testimonials</h2>
            
        
        </div>
        <Footer/>
        
        </>
      )
}

export default viewTestimonials