import { getTotal } from "./AllDataList/getTotal"
export const getThankYouPageData=()=>{

    const data={
      "locationlist":getTotal().locationlist,
      "activitylistSlug":getTotal().activitylistSlug,
       "eventlistSlug":getTotal().eventlistSlug,
       "virtualgameListSlug":getTotal().virtualgameSlug,
       "pagemeta":{
  
                  "title":"Thank You (Career) | All In Adventures",
                  "description":"Your submission has been received. We will get in touch with you shortly.",
                  "keywords":"thank you career",
                  "url":"/Thank-you-career",
                  "metaindex":false,
                  "metaimg":"/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg"
                },
           
          "pagedata": {
                        
            "pagetitle":"Career",
            "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
         
            "coverimageL":"/assets/home-benar-bg.jpg",
            "coverimageM":"/assets/home-hero.jpg",
            "totalLocations": getTotal().totalLocations,
          }
    }

    return data

}