import { getTotal } from "./AllDataList/getTotal"
export const getWhatisEscape=()=>{

    const getYear=()=>{
        const d = new Date();
    const year = d.getFullYear();

    return year
    }

    const whatiseEscapePageData={
        "locationlist":getTotal().locationlist,
         "activitylistSlug":getTotal().activitylistSlug,
          "eventlistSlug":getTotal().eventlistSlug,
          "virtualgameListSlug":getTotal().virtualgameSlug,
          "pagemeta":{
  
            "title":"What is an Escape Room | Everything You Need To Know in "+getYear(),
            "description":'An escape room is an exciting and adventurous (live) game in which participants are "locked" into a themed room with their team to solve puzzles.',
            "keywords":"what is an escape room, about escape room, escape room definition, what you need to know about escape room, everything you need to know about escape room, escape room what is it, what is a virtual escape room, what is escape room about, what is this escape room, what are escape rooms like, what happens in escape room, what is virtual escape room, what is an online escape room, what is an escape game, escape room what to expect, what does an escape room look like, what do you do in escape rooms, what to expect in an escape room, what is a panic room game, what do escape rooms look like, escape rooms what are they, what is an escape room game, what is an escape, what do you do in an escape room, what to wear to an escape room,",
            "url":"/franchise",
            "metaindex":true,
            "metaimg":"/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg"
          },
           
          "pagedata": {
                        "pagetitle":"ESCAPE ROOMS: EVERYTHING YOU NEED TO KNOW IN "+getYear(),
                        "pagesubtitle":"",
                         
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/All-In-Adventures-Generic-Hero-Image-Desktop.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg"
          },

    }

    return whatiseEscapePageData

}