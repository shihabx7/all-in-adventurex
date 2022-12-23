
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import ThankYouBox from "../comps/util/ThankYouBox";
import { getThankYouFransPageData } from "./api/getThankYouFransPageData";
import Seofields from '../comps/util/SeoFields';
const ThankYou=(props)=>{

 
    return(
                <>
                    <Seofields meta={props.pagemeta}/>
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

    const tdata=await getThankYouFransPageData()

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