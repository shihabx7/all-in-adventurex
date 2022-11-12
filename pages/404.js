import Head from "next/dist/shared/lib/head";
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import Custom404Err from "../comps/util/Custom404Err";
import getErrPageData from "./api/getErrPageData";
const Custom404=(props)=>{

 
    return(
                <>
                    <Head>
                           <title>All in adventure | Page not found</title>
                              <meta name="description" content="All in adventure escape games" />
        
                     </Head>
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
    console.log(tdata)

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