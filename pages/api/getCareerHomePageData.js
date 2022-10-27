import { getTotal } from "./AllDataList/getTotal"
export const getCareerHomePageData=()=>{


    const careerPageData={
        "locationlist":getTotal().locationlist,
        "activitylistSlug":getTotal().activitylistSlug,
         "eventlistSlug":getTotal().eventlistSlug,
         "virtualgameListSlug":getTotal().virtualgameSlug,
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":"CAREERS AT ALL IN ADVENTURES",
            "pagesubtitle":"Passion led us here",
            "coverimageL":"/assets/gn-desktop-hero/allinadventures-career-hero.jpg",
            "coverimageM":"/assets/gn-mobile-hero/allinadventures-career-hero.jpg",
            "totalLocations":getTotal().totalLocations,
          
            
        },
        "jobs":[
            {
                "id":1,
                "job_slug":"associate",
                "job_title":"Associate",
                "short_desc":"This is a great opportunity for anyone excited for the chance to grow and develop with a startup company that is looking to change the face of how people interact socially through live games and activities."
               
            },
            {
                "id":2,
                "job_slug":"store-lead",
                "job_title":"STORE LEAD",
                "short_desc":"This is a great opportunity for anyone excited for the chance to grow and develop with a startup company that is looking to change the face of how people interact socially through live games and activities."
               
            },
            {
                "id":3,
                "job_slug":"assistant-manager",
                "job_title":"ASSISTANT MANAGER",
                "short_desc":"This is a great opportunity for anyone excited for the chance to grow and develop with a startup company that is looking to change the face of how people interact socially through live games and activities."
               
            },
            {
                "id":4,
                "job_slug":"store-manager",
                "job_title":"STORE MANAGER",
                "short_desc":"This is a great opportunity for anyone excited for the chance to grow and develop with a startup company that is looking to change the face of how people interact socially through live games and activities."
               
            },
    
        ]
    
    }

    return  careerPageData
}

