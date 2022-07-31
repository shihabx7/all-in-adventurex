import Homenav from "./Homenav";
import Footer from "./Footer";
import Script from "next/script";

const Layout=({children})=>{
    return(
       <div className="content">
           
        
            <Homenav /> 
                {children}
            <Footer/>
            <Script src="/custom.js"></Script>
            </div>

    )
}

export default Layout;