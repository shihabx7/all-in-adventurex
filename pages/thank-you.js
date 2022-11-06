import Head from "next/dist/shared/lib/head";
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import ThankYouBox from "../comps/util/ThankYouBox";
import { getThankYouPageData } from "./api/getThankYouPageData";
const ThankYou=(props)=>{

 
    return(
                <>
                    <Head>
                           <title>All in adventure | Thank you</title>
                              <meta name="description" content="All in adventure escape games" />
        
                     </Head>
                     <Homenav  locationlist={props.locationlist}
            activitylist={props.activitylist}
            eventlist={props.eventlist}/>
                     <ThankYouBox/>
                     <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
                </>
    )
}

export default ThankYou

export const getStaticProps=async()=>{

    const tdata=await getThankYouPageData()

    return {
        props:{
            pagedata:tdata.pagedata,
            pagemeta:tdata.pagemeta,
            locationlist:tdata.locationlist,
            activitylist:tdata.activitylistSlug,
             eventlistSlug:tdata.eventlistSlug,
        }
    }
}