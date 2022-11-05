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

    const contactPageData={
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":"CONTACT ALL IN ADVENTURES "+locationslug.split('-').join(' ')+" STORE",
            "pagesubtitle":"Our team is here to help you. Contact us with any questions you have about an upcoming or previous experience. Before reaching out, we recommend you check our <a href=\"/faq\" class=\"text-gold hover:text-blue-700\">FAQs</a> page first to see if your question has been answered.",
            
            "locationslug":getLocSpec(locationslug).slug,
            "mall":getLocSpec(locationslug).mall,
            "location_name":locationName(locationslug),
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



