import { getTotal } from "./AllDataList/getTotal"
export const getVolunteeringPageData=()=>{

    const volunteeringPageData={
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
                        "pagetitle":"VOLUNTEERING - ALL IN TOGETHER",
                        "pagesubtitle":"At All In Adventures, we believe volunteering is a two-way street that benefits both the organization and the volunteer. It is an instrumental force in promoting positive and sustainable growth within communities.",
                         
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/allinadventures-volunteering-hero.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/allinadventures-volunteering-hero.jpg"
          },

    }

    return volunteeringPageData

}