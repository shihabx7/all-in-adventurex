import { getLocationsPageData } from "../getLocationsPageData"
import { bookingList } from "./bookingList"
import { getLocationActivitySlugList } from "./getLocationActivitySlugList"
import { getLocationEventSlugList } from "./getLocationEventSlugList"
import { getLocTotal } from "../AllDataList/getLocTotal"

export const getLocationIndGiftPageData=(locationslug)=>{
    var locd=locationslug.toString().split('-')
    var locstat= locd[locd.length-1]
    var locdx=locd.slice(0, -1).join('')

    const locationname=locdx+", "+locstat

    var locsdata= getLocationsPageData().states
    var locData=getLocationsPageData()
    const totalLocation=()=>{
        
        var total=0
        
        for(var i=0;i<locsdata.length;i++){
                total=total+locsdata[i].cities.length
        }
    
          return total
    
        }
        const getLocSpec=(slug)=>{
            var i=0
            var j=0
            for(i=0;i<locData.states.length;i++){
              for(j=0;j<locData.states[i].cities.length;j++){
                if(locData.states[i].cities[j].slug==slug){
                  return locData.states[i].cities[j]
                }
               
              }
              
            }
         }

         const cityName=(loc)=>{
          var ctname=loc.split("-")
          var st=ctname[ctname.length-1].toUpperCase()
          var ct=''
      
          if(ctname.length>2){
              for(var i=0;i<ctname.length-2 ;i++){
                  ct=ctname[i].charAt(0).toUpperCase()+ctname[i].slice(1)+' '
              }
          }
          else{
              ct=ctname[0].charAt(0).toUpperCase()+ctname[0].slice(1)+' '
          }
      
          return ct+st
      }

    const giftcardData={

      "activitylist":getLocTotal(locationslug).activitylistSlug,
      "eventlist":getLocTotal(locationslug).eventlistSlug,
      "locationlist":getLocTotal(locationslug).locationlist,
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":"BUY "+cityName(locationslug)+" ESCAPE ROOM GIFT CARDS",
            "pagesubtitle":"Birthdays, holidays, surprises and everything in between – we've got your gift needs covered. Recipients can choose from all available in-person games when they redeem their escape room gift cards, and they can be used any time with any group. Our gift cards never expire!",
            
            "coverimageL":"/assets/gn-desktop-hero/allinadventures-gift-cards-hero.jpg",
            "coverimageM":"/assets/gn-mobile-hero/allinadventures-gift-cards-hero.jpg",
            "location_name":locationname,
            "locationslug":locationslug,
            "mall":getLocSpec(locationslug).mall,
            "totalLocations":totalLocation(),
            "bookingdata":bookingList("gift-card",locationslug)
           
        },
        "gift_faq":[
          {
                      "id":1,
                      "group":"GIFT_CARDS",
                      "category":"gift",
                      "ques":"How to purchase your Gift Cards?",
                      "ans":[
                          "Choose the Location. Then, select the gift card amount, fill out the requested details and purchase the gift card.",
                          "<p class=\"mt-2 lg:mt-3\">Once you complete your purchase, you will be sent an email with the gift card number. If you are giving the card as a gift, follow the directions in your confirmation email to send them through email directly to the recipient. If you prefer a physical gift card, please visit your local store.</p>",
                          "<p class=\"mt-2 lg:mt-3\"><span class=\"underline underline-offset-4 font-medium\">Please note:</span> If you have not received your gift card(s), please check your spam folder.</p>"
                      ]
                      

                },
                {
                  "id":2,
                  "group":"GIFT_CARDS",
                  "category":"gift",
                  "ques":"How do I redeem the gift cards?",
                  "ans":[
                      "Gift card holders can redeem the card online at www.allinadventures.com or directly in-store where the gift card was purchased. Contact us directly at your local store or call our customer service team at ",
                      "<a href=\"tel:844-502-5546\" class=\"text-blue-600 hover:text-blue-700\">844-502-5546</a> to redeem it over the phone."
                  ]
                  

              },
               {
              "id":3,
              "group":"GIFT_CARDS",
              "category":"gift",
              "ques":"Do gift cards expire?",
              "ans":[
                  "Our gift cards never expire from the day of issue."
              ]
              

               },
               {
                  "id":4,
                  "group":"GIFT_CARDS",
                  "category":"gift",
                  "ques":"Do we need to make a reservation to use a gift card?",
                  "ans":[
                      "No reservation is needed but we always suggest making a reservation beforehand to ensure you get the experience and time slot that you prefer. Walk-ins are available but availability is not guaranteed."
                  ]
                  
  
                   },
                   {
                      "id":5,
                      "group":"GIFT_CARDS",
                      "category":"gift",
                      "ques":"What happens if I prepay for my reservation in advance?",
                      "ans":[
                          "If you prepaid for your reservation, your payment will be refunded when you present your gift card on Location."
                      ]
                      
      
                       },
                       {
                          "id":6,
                          "group":"GIFT_CARDS",
                          "category":"gift",
                          "ques":"Can I get a physical gift card instead of an electronic one?",
                          "ans":[
                              "Physical gift cards can be provided at our Location."
                          ]
                          
          
                           },
                   
      ]
    }

    return giftcardData
}

const locationGiftData={
    "albany-ny":{

    }
}