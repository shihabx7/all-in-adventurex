import { getTotal } from "./AllDataList/getTotal"

export const getContactPageData=()=>{

    const contactPageData={
        "locationlist":getTotal().locationlist,
         "activitylistSlug":getTotal().activitylistSlug,
          "eventlistSlug":getTotal().eventlistSlug,
          "virtualgameListSlug":getTotal().virtualgameSlug,
          "pagemeta":{
  
            "title":"Corporate Contact | All In Adventures | Formerly Mystery Room",
            "description":"The whole purpose of this contact form is ONLY corporate related communication. Fill out the form below and our corporate team will be in touch shortly.",
            "keywords":"all in adventures corporate contact, mystery room corporate contact,",
            "url":"/corporate-contact",
            "metaindex":true,
            "metaimg":"/assets/gn-mobile-hero/allinadventures-corporate-contact-hero.jpg"
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

