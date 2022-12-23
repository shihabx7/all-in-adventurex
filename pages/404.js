
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import Custom404Err from "../comps/util/Custom404Err";
import getErrPageData from "./api/getErrPageData";

import Seofields from "../comps/util/Seofields";
const Custom404=(props)=>{

 
    return(
                <>
                    <Seofields meta={props.pagemeta}/>
                     <Homenav locationlist={props.locationlist}
            activitylist={props.activitylist}
            eventlist={props.eventlist}/>
                     <Custom404Err/>
                     <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
                </>
    )
}

export default Custom404

export const getStaticProps=async()=>{

    const tdata=await getErrPageData()
 

    return {
        props:{
            pagedata:tdata.pagedata,
            pagemeta:tdata.pagemeta,
            locationlist:tdata.locationlist,
            activitylist:tdata.activitylistSlug,
            eventlist:tdata.eventlistSlug,
        }
    }
}