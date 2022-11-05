import { getTotal } from "./AllDataList/getTotal"

export const getContactPageData=()=>{

    const contactPageData={
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
            "pagetitle":"ALL IN ADVENTURES CORPORATE CONTACT",
            "pagesubtitle":'To contact any of our specific stores, "Choose Your Location" first, then click on the top-right corner menu and click the "Contact Store" link. The whole purpose of this contact form is ONLY corporate related communication.',
            "totalLocation":"28",
            "coverimageL":"/assets/gn-desktop-hero/allinadventures-corporate-contact-hero.jpg",
            "coverimageM":"/assets/gn-mobile-hero/allinadventures-corporate-contact-hero.jpg",
            "totalLocations":getTotal().totalLocations,
           
        }
    
    }

    return contactPageData
   

}

