import { getTotal } from "./AllDataList/getTotal"

export const getCovidPageData=()=>{

    const getCovidPageData={
        "locationlist":getTotal().locationlist,
         "activitylistSlug":getTotal().activitylistSlug,
          "eventlistSlug":getTotal().eventlistSlug,
          "virtualgameListSlug":getTotal().virtualgameSlug,
          "pagemeta":{
  
            "title":"Covid-19 | All In Adventures | Formerly Mystery Room",
            "description":"We are taking a very careful and thoughtful approach to reopening and have made many changes to our operations to ensure everyone feels safe and comfortable.",
            "keywords":"covid 19 all in adventures, covid 19 mystery room",
            "url":"/covid-19",
            "metaindex":false,
            "metaimg":"/assets/home-hero.jpg"
          },
     
           
          "pagedata": {
                        
            "pagetitle":"TERMS OF SERVICE",
            "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
            "totalLocation":"28",
            "coverimageL":"/assets/home-benar-bg.jpg",
            "coverimageM":"/assets/home-hero.jpg",
            "totalLocations":getTotal().totalLocations,
            "videoid":"b_Kjdwdg0_o"
          }
    }

    return getCovidPageData

}