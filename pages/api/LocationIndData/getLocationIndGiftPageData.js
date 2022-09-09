import { getLocationsPageData } from "../getLocationsPageData"
import { bookingList } from "./bookingList"
import { getLocationActivitySlugList } from "./getLocationActivitySlugList"
import { getLocationEventSlugList } from "./getLocationEventSlugList"

export const getLocationIndGiftPageData=(locationslug)=>{
    var locd=locationslug.toString().split('-')
    var locstat= locd[locd.length-1]
    var locdx=locd.slice(0, -1).join('')

    const locationname=locdx+", "+locstat

    var locsdata= getLocationsPageData().states
    var locData=getLocationsPageData()
    const totalLocation=()=>{
        
        var total=0
        
        for(var i=0;i<locsdata.length;i++){
                total=total+locsdata[i].cities.length
        }
    
          return total
    
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

    const giftcardData={

      "activitylist":getLocationActivitySlugList(locationslug),
      "eventlist":getLocationEventSlugList(locationslug),
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":"ALL IN ADVENTURE GIFT CARDS",
            "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
            "totalLocation":"28",
            "coverimageL":"/assets/home-benar-bg.jpg",
            "coverimageM":"/assets/home-hero.jpg",
            "location_name":locationname,
            "locationslug":locationslug,
            "mall":getLocSpec(locationslug).mall,
            "totalLocations":totalLocation(),
            "bookingdata":bookingList("gift-card",locationslug)
           
        },
        "gift_faq":[
            {
                        "id":1,
                        "group":"getting_started",
                        "category":"all",
                        "ques":"What is All In Adventure?",
                        "ans":"All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes.",
                        

                  },
                  {
                    "id":2,
                    "category":"all",
                    "group":"getting_started",
                    "ques":"How long will the experience last?",
                    "ans":"All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes.",
                    

                     },
                     {
                        "id":3,
                        "category":"all",
                        "group":"getting_started",
                        "ques":"What skills do I need to play?",
                        "ans":"All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes.",
                        
    
                         },
                         {
                            "id":4,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"May I leave the room in the middle of the game?",
                            "ans":"All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes.",
                         },
        ]
    }

    return giftcardData
}

const locationGiftData={
    "albany-ny":{

    }
}