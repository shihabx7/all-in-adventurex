import Head from "next/dist/shared/lib/head";
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import ThankYouBox from "../comps/util/ThankYouBox";
const ThankYou=()=>{

 
    return(
                <>
                    <Head>
                           <title>All in adventure | Thank you</title>
                              <meta name="description" content="All in adventure escape games" />
        
                     </Head>
                     <Homenav/>
                     <ThankYouBox/>
                     <Footer/>
                </>
    )
}

export default ThankYou