import { getALlActivityList } from "../getAllActivityList"
import { getLocationActivitySlugList } from "../LocationIndData/getLocationActivitySlugList"
import { getLocationEventSlugList } from "../LocationIndData/getLocationEventSlugList"
import { getVirtualGameSlug } from "../VirtualGames/getVirtualGameSlug"
import { getLocationsPageData } from "../getLocationsPageData"

 const totalLocation=()=>{
    var locdata= getLocationsPageData().states
    var total=0
    
    for(var i=0;i<locdata.length;i++){
            total=total+locdata[i].cities.length
    }

    return total

}
const uniqueGames=getALlActivityList().length
const getlocData=(locationslug)=>{
    var lslug=locationslug
    var localdata= getLocationsPageData().states
    var ret
    var x 
    var y 

    for(x=0;x<localdata.length;x++){
        for(y=0;y<localdata[x].cities.length;y++){
            if(localdata[x].cities[y].slug==lslug)
            {
                ret=localdata[x].cities[y]
            } 

        }
    }
    return ret
}


export const getLocTotal=(locationslug)=>{

    const totalData={
       
        "totalLocations":totalLocation(),
        "uniqueGames":uniqueGames,
        "locUniqueGames":getLocationActivitySlugList(locationslug).length,
        "locToalPlayerEscape":getlocData(locationslug).player_escaped,
        "locTotalReview":getlocData(locationslug).fivestar,
        "publish_status":getlocData(locationslug).publish_status? getlocData(locationslug).publish_status:true,
        "toalPlayerEscape":"9M+",
        "totalReview":"750K+",
        "locationlist":getLocationsPageData().states,
        "activitylistSlug":getLocationActivitySlugList(locationslug),
        "eventlistSlug":getLocationEventSlugList(locationslug),
        "virtualgameSlug":getVirtualGameSlug()
    }

    return totalData
}