import { getTotal } from "./AllDataList/getTotal"
export const getThankYouPageData=()=>{

    const data={
      "locationlist":getTotal().locationlist,
      "activitylistSlug":getTotal().activitylistSlug,
       "eventlistSlug":getTotal().eventlistSlug,
       "virtualgameListSlug":getTotal().virtualgameSlug,
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
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