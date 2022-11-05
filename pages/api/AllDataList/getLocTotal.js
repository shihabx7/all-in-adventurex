import { getALlActivityList } from "../getAllActivityList"
import { getLocationActivitySlugList } from "../LocationIndData/getLocationActivitySlugList"
import { getLocationEventSlugList } from "../LocationIndData/getLocationEventSlugList"
import { getVirtualGameSlug } from "../VirtualGames/getVirtualGameSlug"
import { getLocationsPageData } from "../getLocationsPageData"

export const totalLocation=()=>{
    var locdata= getLocationsPageData().states
    var total=0
    
    for(var i=0;i<locdata.length;i++){
            total=total+locdata[i].cities.length
    }

    return total

}
const uniqueGames=getALlActivityList().length


export const getLocTotal=(locationslug)=>{

    const totalData={
       
        "totalLocations":totalLocation(),
        "uniqueGames":uniqueGames,
        "locUniqueGames":getLocationActivitySlugList(locationslug).length,
        "locToalPlayerEscape":"30k+",
        "locTotalReview":"5K+",
        "toalPlayerEscape":"9M+",
        "totalReview":"750K+",
        "locationlist":getLocationsPageData().states,
        "activitylistSlug":getLocationActivitySlugList(locationslug),
        "eventlistSlug":getLocationEventSlugList(locationslug),
        "virtualgameSlug":getVirtualGameSlug()
    }

    return totalData
}