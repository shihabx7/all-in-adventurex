import { bookingList } from "./bookingList"
import { getLocationsPageData } from "../getLocationsPageData"
import { getLocationActivitySlugList } from "./getLocationActivitySlugList"
import { getLocationEventSlugList } from "./getLocationEventSlugList"
export const getLocationIndContactPageData=(locationslug)=>{

    const bookinData=bookingList('',locationslug)
    const locData=getLocationsPageData()

    const locationName=(slug)=>{
            var locs=slug.split('-')
            var st=locs[locs.length-1]
            locs=locs.slice(0,-1).join(' ')
            return locs+', '+st
    }
    const getLocSpec=(slug)=>{
        var i=0
        var j=0
        for(i=0;i<locData.states.length;i++){
          for(j=0;j<locData.states[i].cities.length;j++){
            if(locData.states[i].cities[j].slug==slug){
              return locData.states[i].cities[j]
            }
           
          }
          
        }
     }

    const contactPageData={
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":"CONTACT "+locationslug.split('-').join(' ')+" STORE",
            "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
            "totalLocation":"28",
            "locationslug":getLocSpec(locationslug).slug,
            "mall":getLocSpec(locationslug).mall,
            "location_name":locationName(locationslug),
            "coverimageL":"/assets/home-benar-bg.jpg",
            "coverimageM":"/assets/home-hero.jpg",
           
            "bookingall":{
                "shortname":bookinData.shortname,
            },

            
           
        },
        "contactdata":getLocSpec(locationslug),
        "activitylist":getLocationActivitySlugList(locationslug),
        "eventlist":getLocationEventSlugList(locationslug),
    
    }

    return contactPageData
   

}



