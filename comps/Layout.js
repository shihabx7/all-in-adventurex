import Homenav from "./Homenav";
import Footer from "./Footer";

const Layout=({children})=>{
    return(
       <div className="content">
           
        
            <Homenav /> 
                {children}
            <Footer/>

            </div>

    )
}

export default Layout;