
import { getTotal } from "./AllDataList/getTotal"
const getErrPageData=()=>{
    const data={
        "locationlist":getTotal().locationlist,
        "activitylistSlug":getTotal().activitylistSlug,
         "eventlistSlug":getTotal().eventlistSlug,
         "virtualgameListSlug":getTotal().virtualgameSlug,
         "pagemeta":{
  
          "title":"No Page Found | All In Adventures | Formerly Mystery Room",
          "description":"It looks like you've reached a URL that doesn't exist. Please use the navigation above or search below to find your way back to our a-maize-ing website.",
          "keywords":"404, error",
          "url":"/404",
          "metaindex":false,
          "metaimg":"/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg"
        },
             
            "pagedata": {
                          
              "pagetitle":"TERMS OF SERVICE",
              "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
           
              "coverimageL":"/assets/home-benar-bg.jpg",
              "coverimageM":"/assets/home-hero.jpg",
              "totalLocations": getTotal().totalLocations,
            }
      }
  
      return data

}

export default getErrPageData

