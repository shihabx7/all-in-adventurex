import { getTotal } from "./AllDataList/getTotal"
export const getJobApplicationData=()=>{

    const getJobApplicationData={
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
                        "pagetitle":"Employment Application",
                        "pagesubtitle":"Interested in joining our super engaged, guest-centric team of associates? Fill out the application form below to be considered for employment.",
                         
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/allinadventures-career-hero.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/allinadventures-career-hero.jpg",
          },

    }

    return getJobApplicationData

}