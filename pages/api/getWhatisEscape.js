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

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
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