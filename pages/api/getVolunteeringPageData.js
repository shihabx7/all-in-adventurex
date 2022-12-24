import { getTotal } from "./AllDataList/getTotal"
export const getVolunteeringPageData=()=>{

    const volunteeringPageData={
        "locationlist":getTotal().locationlist,
         "activitylistSlug":getTotal().activitylistSlug,
          "eventlistSlug":getTotal().eventlistSlug,
          "virtualgameListSlug":getTotal().virtualgameSlug,
          "pagemeta":{
  
            "title":"Volunteering | All In Together | All In Adventures",
            "description":"At All In Adventures, we believe volunteering is a two-way street that benefits both the organization and the volunteer.",
            "keywords":"escape room volunteering, all in adventures volunteering, mystery room volunteering",
            "url":"/volunteering",
            "metaindex":true,
            "metaimg":"/assets/gn-mobile-hero/allinadventures-volunteering-hero.jpg"
          },
          "pagedata": {
                        "pagetitle":"VOLUNTEERING - ALL IN TOGETHER",
                        "pagesubtitle":"At All In Adventures, we believe volunteering is a two-way street that benefits both the organization and the volunteer. It is an instrumental force in promoting positive and sustainable growth within communities.",
                         
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/allinadventures-volunteering-hero.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/allinadventures-volunteering-hero.jpg"
          },

    }

    return volunteeringPageData

}