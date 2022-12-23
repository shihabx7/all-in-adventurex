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
      var st=spLoc[spLoc.length-1].toString()
      spLoc=spLoc.slice(0,-1)
      spLoc=spLoc.join(' ')
      
      var ret=spLoc+", "+st
      return ret
    }

    const capCity=(locname)=>{
      var spLoc=locname.split("-")
      if(spLoc[0]=="n" || spLoc[0]=="N"){
        spLoc[0]='North'
      }
      var st=spLoc[spLoc.length-1].toString()
      spLoc=spLoc.slice(0,-1)
      var x

      for(x=0;x<spLoc.length;x++){

          var upc=spLoc[x].charAt(0).toUpperCase()
          var nnsp=spLoc[x].substring(0,0) + upc + spLoc[x].substring(0+1)
          spLoc[x]= nnsp
      }
      spLoc=spLoc.join(' ')
      
      var ret=spLoc+" "+st.toUpperCase()
      return ret
    }
    const lowCity=(locname)=>{
      var spLoc=locname.split("-")
      if(spLoc[0]=="n" || spLoc[0]=="N"){
        spLoc[0]='North'
      }
     
      spLoc=spLoc.join(' ')
      
     
      return spLoc
    }

    const capMall=(mall)=>{
      var mallArr=mall.split(' ')
      var appArr=['to','at','in','for','of','it','a','an']
     
      var y
  
      for(y=0;y<mallArr.length;y++){
        if(!appArr.includes(mallArr[y]) && mallArr[y]!='USA'){
          if(mallArr[y]=='usa'){
            mallArr[y]==mallArr[y].toUpperCase()
          }
          var upc=mallArr[y].charAt(0).toUpperCase()
          var nnsp=mallArr[y].substring(0,0) + upc + mallArr[y].substring(0+1)
          
          mallArr[y]= nnsp
        }
        
          
      }
      var capmall=mallArr.join(' ')
  
     return capmall
     }
    const contactPageData={
        "pagemeta":{

            "title":"Contact Store - All In Adventures in "+capCity(locationslug),
            "description":"Our team is here to help you. Contact our store in "+capCity(locationslug)+" at "+capMall(getLocSpec(locationslug).mall)+" with any questions you have about an upcoming or previous experience.",
            "keywords":"all in adventures albany ny, allinadventures "+lowCity(locationslug)+", all in adventure "+lowCity(locationslug)+", allinadventure "+lowCity(locationslug)+", mystery room "+lowCity(locationslug)+", mysteryroom "+lowCity(locationslug)+", mystery rooms "+lowCity(locationslug)+", mysteryrooms "+lowCity(locationslug)+", escape room near me "+lowCity(locationslug)+", escape rooms near me "+lowCity(locationslug)+", escape rooms "+lowCity(locationslug)+", escaperooms "+lowCity(locationslug)+",escape room near by "+lowCity(locationslug)+", escape room albany ny, escaperoom "+lowCity(locationslug)+", escape games "+lowCity(locationslug)+", escapegames "+lowCity(locationslug)+", escape game "+lowCity(locationslug)+", escapegame "+lowCity(locationslug)+", family friendly escape rooms "+lowCity(locationslug)+", kids friendly escape rooms "+lowCity(locationslug)+", birthday party "+lowCity(locationslug)+", birthday party places "+lowCity(locationslug)+", birthday party venue "+lowCity(locationslug)+", team building "+lowCity(locationslug)+", team building activities "+lowCity(locationslug)+",",
            "url":"/"+locationslug+"/contact-store",
            "metaindex":true,
            "metaimg":"/assets/gn-mobile-hero/allinadventures-store-contact-hero.jpg"
          },
           
        "pagedata":{
            "pagetitle":"CONTACT ALL IN ADVENTURES "+locnameMod(locationslug)+" STORE",
            "pagesubtitle":"Our team is here to help you. Contact us with any questions you have about an upcoming or previous experience. Before reaching out, we recommend you check our <a href=\"/faqs\" class=\"text-gold hover:text-blue-700\">FAQs</a> page first to see if your question has been answered.",
            "publish_status":getLocTotal(locationslug).publish_status,
            "locationslug":getLocSpec(locationslug).slug,
            "mall":getLocSpec(locationslug).mall,
            "location_name":locnameMod(locationslug),
            "coverimageL":"/assets/allinadventures-store-contact-hero.jpg",
            "coverimageM":"/assets/gn-mobile-hero/allinadventures-store-contact-hero.jpg",
           
            "bookingall":{
                "shortname":bookinData.shortname,
            },
            "eventbooking":{

              "shortname":bookinData.shortname,
                 "item" :bookinData["party-package"].item,
                 "flow" :bookinData["party-package"].flow,
                 "eventstatus":bookinData["party-package"].eventstatus,
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



