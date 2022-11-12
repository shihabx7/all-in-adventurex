import { bookingList } from "./bookingList"
import { getLocationsPageData } from "../getLocationsPageData"
import { getLocationActivitySlugList } from "./getLocationActivitySlugList"
import { getLocationEventSlugList } from "./getLocationEventSlugList"
import { getLocTotal } from "../AllDataList/getLocTotal"
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

     const locnameMod=(locname)=>{
      var spLoc=locname.split("-")
      if(spLoc[0]=="n"){
        spLoc[0]=spLoc[0]+"."
      }
      var ret=spLoc.join(' ')
      return ret
    }

    const getLocationSearchName=(slug)=>{
      var locs=slug.split("-")
      if(locs[0]=="n"){
        locs[0]="n."
      }
      var st=locs[locs.length-1].toString()
      locs=locs.slice(0,-1)
      locs=locs.join(' ')

      return locs+", "+st
   }
    const contactPageData={
        "pagemeta":{

            "title":"All in adventure contact store | escape room in "+locnameMod(locationslug),
            "description":"Contact escape room in "+locnameMod(locationslug),
            "keywords":"escape room, escape room contact, escape room in "+locnameMod(locationslug)
          },
           
        "pagedata":{
            "pagetitle":"CONTACT ALL IN ADVENTURES "+locnameMod(locationslug)+" STORE",
            "pagesubtitle":"Our team is here to help you. Contact us with any questions you have about an upcoming or previous experience. Before reaching out, we recommend you check our <a href=\"/faqs\" class=\"text-gold hover:text-blue-700\">FAQs</a> page first to see if your question has been answered.",
            
            "locationslug":getLocSpec(locationslug).slug,
            "mall":getLocSpec(locationslug).mall,
            "location_name":locnameMod(locationslug),
            "coverimageL":"/assets/allinadventures-store-contact-hero.jpg",
            "coverimageM":"/assets/gn-mobile-hero/allinadventures-store-contact-hero.jpg",
           
            "bookingall":{
                "shortname":bookinData.shortname,
            },

            
           
        },
        "contactdata":getLocSpec(locationslug),
        "activitylist":getLocTotal(locationslug).activitylistSlug,
        "eventlist":getLocTotal(locationslug).eventlistSlug,
        "locationlist":getLocTotal(locationslug).locationlist,
        "totalLocations":getLocTotal(locationslug).totalLocations,
    }

    return contactPageData
   

}



