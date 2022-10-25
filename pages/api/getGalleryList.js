import { getTotal } from "./AllDataList/getTotal"
export const getGalleryList=()=>{



    const galleryList={
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
        "pagetitle":"ALL IN ADVENTURES CUSTOMER GALLERY",
        "pagesubtitle":"Look at some fun-filled photos of our customers after their escape room and other gaming experiences at All In Adventures.",
      
        "coverimageL":"/assets/gn-desktop-hero/allinadventures-customer-gallery-hero.jpg",
        "coverimageM":"/assets/gn-mobile-hero/allinadventures-customer-gallery-hero.jpg",
        "totalLocations":getTotal().totalLocations,
        
    },
    
       "gallery":[

            {
              "id":1,
              "type":"inperson",
              "category":"escapegame",
              "gallery_img":"/assets/all-gallery/allinadventures-treasure-island-gallery-4.jpg"
             },
             {
              "id":2,
              "type":"inperson",
              "category":"escapegame",
              "gallery_img":"/assets/all-gallery/allinadventures-superheros-adventure-gallery-2.jpg"
             },
             {
              "id":3,
              "type":"inperson",
              
              "category":"escapegame",
              "gallery_img":"/assets/all-gallery/allinadventures-hollywood-premiere-gallery-5.jpg"
              
             },
             {
              "id":4,
              "type":"inperson",
              "category":"escapegame",
              "gallery_img":"/assets/all-gallery/allinadventures-sherlocks-library-gallery-1.jpg"
             },

             {
              "id":5,
              "type":"inperson",
              "category":"escapegame",
              "gallery_img":"/assets/all-gallery/allinadventures-black-ops-gallery-4.jpg"
             },
             {
              "id":6,
              "type":"inperson",
              "category":"escapegame",
              "gallery_img":"/assets/all-gallery/allinadventures-escape-from-alcatraz-gallery-1.jpg"
             },
             {
              "id":7,
              "type":"inperson",
              "category":"escapegame",
              "gallery_img":"/assets/all-gallery/allinadventures-events-team-building-testimonials-1.jpg"
             },

             {
              "id":8,
              "type":"inperson",
              "category":"escapegame",
              "gallery_img":"/assets/all-gallery/allinadventures-houdinis-magic-cell-gallery-2.jpg"
             },
             {
              "id":9,
              "type":"inperson",
              "category":"escapegame",
              "gallery_img":"/assets/all-gallery/allinadventures-events-team-building-testimonials-7.jpg"
             },
             //==========================================================event gl list
             {
              "id":10,
              "type":"inperson",
              "category":"events",
              "gallery_img":"/assets/all-gallery/allinadventures-events-bachelorette-parties-testimonials-1.jpg"
             },
             {
              "id":11,
              "type":"inperson",
              "category":"events",
              "gallery_img":"/assets/all-gallery/allinadventures-events-bachelorette-parties-testimonials-2.jpg"
             },
             {
              "id":12,
              "type":"inperson",
              "category":"events",
              "gallery_img":"/assets/all-gallery/allinadventures-events-birthday-party-testimonials-3.jpg"
              
             },
             {
              "id":13,
              "type":"inperson",
              "category":"events",
              "gallery_img":"/assets/all-gallery/allinadventures-events-gender-reveal-party-testimonials-4.jpg"
             
             },

             {
              "id":14,
              "type":"inperson",
              "category":"events",
              "gallery_img":"/assets/all-gallery/allinadventures-events-graduation-party-testimonials-5.jpg"
              
             },
             {
              "id":15,
              "type":"inperson",
              "category":"events",
              "gallery_img":"/assets/all-gallery/allinadventures-events-private-parties-testimonials-6.jpg"
             },
             {
              "id":16,
              "type":"inperson",
              "category":"events",
              "gallery_img":"/assets/all-gallery/allinadventures-events-team-building-testimonials-7.jpg"
             },

             {
              "id":17,
              "type":"inperson",
              "category":"events",
              "gallery_img":"/assets/all-gallery/Allinadventures-gallery-Details-Page---Gallery-Images-8.jpg"
             },
             {
              "id":18,
              "type":"inperson",
              "category":"events",
              "gallery_img":"/assets/all-gallery/Allinadventures-gallery-Details-Page----Gallery-Images-9.jpg"
             },
             //==========================================================other inperson  gl list
             {
              "id":19,
              "type":"inperson",
              "category":"others",
              "gallery_img":"/assets/all-gallery/allinadventures-axe-throwing-gallery-1.jpg"
             },
             {
              "id":20,
              "type":"inperson",
              "category":"others",
              "gallery_img":"/assets/all-gallery/allinadventures-beat-the-seat-gallery-2.jpg"
             },
             {
              "id":21,
              "type":"inperson",
              "category":"others",
              "gallery_img":"/assets/all-gallery/allinadventures-game-show-room-gallery-3.jpg"
              
             },
             {
              "id":22,
              "type":"inperson",
              "category":"others",
              "gallery_img":"/assets/all-gallery/allinadventures-game-show-room-gallery-4.jpg"
             
             },

             {
              "id":23,
              "type":"inperson",
              "category":"others",
              "gallery_img":"/assets/all-gallery/allinadventures-beat-the-seat-gallery-5.jpg"
              
             },
             {
              "id":24,
              "type":"inperson",
              "category":"others",
              "gallery_img":"/assets/all-gallery/allinadventures-beat-the-seat-gallery-6.jpg"
             },
             {
              "id":25,
              "type":"inperson",
              "category":"others",
              "gallery_img":"/assets/all-gallery/allinadventures-beat-the-seat-gallery-7.jpg"
             },

             {
              "id":26,
              "type":"inperson",
              "category":"others",
              "gallery_img":"/assets/all-gallery/allinadventures-game-show-room-gallery-8.jpg"
             },
             {
              "id":27,
              "type":"inperson",
              "category":"others",
              "gallery_img":"/assets/all-gallery/allinadventures-game-show-room-gallery-9.jpg"
             },
             //==========================================================other inperson  gl list
             {
              "id":28,
              "type":"virtual",
              "category":"virtual",
              "gallery_img":"/assets/all-gallery/allinadventures-virtual-escape-room-aztec-gallery-1.jpg"
             },
             {
              "id":29,
              "type":"virtual",
              "category":"virtual",
              "gallery_img":"/assets/all-gallery/allinadventures-virtual-escape-room-japan-gallery-2.jpg"
             },
             {
              "id":30,
              "type":"virtual",
              "category":"virtual",
              "gallery_img":"/assets/all-gallery/allinadventures-virtual-escape-room-japan-gallery-3.jpg"
              
             },
             {
              "id":31,
              "type":"virtual",
              "category":"virtual",
              "gallery_img":"/assets/all-gallery/allinadventures-virtual-escape-room-madness-gallery-4.jpg"
             
             },

             {
              "id":32,
              "type":"virtual",
              "category":"virtual",
              "gallery_img":"/assets/all-gallery/allinadventures-virtual-game-show-room-gallery-5.jpg"
              
             },
             {
              "id":33,
              "type":"virtual",
              "category":"virtual",
              "gallery_img":"/assets/all-gallery/allinadventures-virtual-escape-room-zombie-apocalypse-gallery-6.jpg"
             },
             {
              "id":34,
              "type":"virtual",
              "category":"virtual",
              "gallery_img":"/assets/all-gallery/allinadventures-virtual-game-show-room-gallery-7.jpg"
             },

             {
              "id":35,
              "type":"virtual",
              "category":"virtual",
              "gallery_img":"/assets/all-gallery/allinadventures-virtual-escape-room-prison-gallery-8.jpg"
             },
             {
              "id":36,
              "type":"virtual",
              "category":"virtual",
              "gallery_img":"/assets/all-gallery/allinadventures-virtual-game-show-room-gallery-9.jpg"
             },


       ] 

    
}

return galleryList
}