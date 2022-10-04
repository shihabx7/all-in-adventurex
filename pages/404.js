import Head from "next/dist/shared/lib/head";
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import Custom404Err from "../comps/util/Custom404Err";
const Custom404=()=>{

 
    return(
                <>
                    <Head>
                           <title>All in adventure | Page not found</title>
                              <meta name="description" content="All in adventure escape games" />
        
                     </Head>
                     <Homenav/>
                     <Custom404Err/>
                     <Footer/>
                </>
    )
}

export default Custom404