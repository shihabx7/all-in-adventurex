
import { getALlActivityList } from "../getAllActivityList"
import { getAllEventList } from "../getAllEventList"
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

export const getTotal=()=>{

    const totalData={

        "totalLocations":totalLocation(),
        "uniqueGames":uniqueGames,
        "toalPlayerEscape":"9M+",
        "totalReview":"750K+",
        "locationlist":getLocationsPageData().states,
        "activitylistSlug":getALlActivityList(),
        "eventlistSlug":getAllEventList(),
        "virtualgameSlug":getVirtualGameSlug()
    }

    return totalData
}