import getYextLocationData from "./getYextLocationData"
import getYextReviewData from "./getYextReviewData"

import { getTotal } from "../AllDataList/getTotal"

const statelist={
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}

// check state exist or not
const checkState=(entitiesArr,state)=>{

    var j
    var f=0
        for(j=0;j<entitiesArr.length;j++){
            if (entitiesArr[j].state===state){
                f= j+1
            } 
        }
        return f
   
}
// formate bussiness hour 
const formatHour=(hour)=>{
   
    var dHour=hour.split(':')
    var mHour=parseInt(dHour[0])
    var mMin=parseInt(dHour[1])
    var ampm
    var rethour
    if(mHour>12)
    {
        mHour=mHour-12
        
        ampm=" pm"
    }
   else if(mHour==12){
        
        ampm=" pm"
    }
    else{
        ampm=" am"
    }
    if(mMin>0){
        rethour=mHour.toString()+':'+mMin.toString()+ampm
    }
    else{
        rethour=mHour.toString()+ampm
    }

    return rethour
}
// get Location structured   bussiness hour 
const getCityHour=(hours)=>{
var hArr=[]
var dayArr=Object.keys(hours)

var k 
for(k=0;k<dayArr.length;k++){

  var hdata= {

        "day":dayArr[k],
        "open":hours[dayArr[k]].isClosed? "":formatHour(hours[dayArr[k]]['openIntervals'][0].start),
        "close":hours[dayArr[k]].isClosed? "":formatHour(hours[dayArr[k]]['openIntervals'][0].end),
        "dayoff":hours[dayArr[k]].isClosed? hours[dayArr[k]].isClosed:false
      }
      hArr.push(hdata)
}

return hArr

}
// formate phone number 
const formatPhone=(phone)=>{
    var phnArr=phone.split('')
    var countryCode=phnArr[0]+phnArr[1]
    var nPort1=phnArr[2]+phnArr[3]+phnArr[4]
    var nPort2=phnArr[5]+phnArr[6]+phnArr[7]
    var nPort3=phnArr[8]+phnArr[9]+phnArr[10]+phnArr[11]
    
    return countryCode+' '+nPort1+'-'+nPort2+'-'+nPort3
    }
// structure Location data 
const formatData=(entities)=>{

var retArr=[]

var i
var stateId=1
var cityId=1
for(i=0;i<entities.length;i++){

    if(!entities[i].closed && entities[i].googlePlaceId){
        if(retArr.length>0){
            var ck=checkState(retArr,entities[i].address.region)
            if(ck<1){
                var stateData={
                    "id":stateId,
                     "state":entities[i].address.region,
                    "state_name":statelist[entities[i].address.region],
                    "cities":[
                        {
                            "id":cityId,
                            "locationId":entities[i].meta.id,
                            "name":entities[i].name,
                            "googlePlaceId": entities[i].googlePlaceId,
                            "city":entities[i].address.city,
                            "region":entities[i].address.region,
                            "publish_status":entities[i].c_activeInAnswers,
                            "position": { lat: entities[i].cityCoordinate.latitude, lng:entities[i].cityCoordinate.longitude},
                            "address":entities[i].address.line1,
                            "address2":entities[i].address.line2? entities[i].address.line2:"",
                            "zip":entities[i].address.postalCode,
                            "phone":formatPhone(entities[i].mainPhone),
                            "hours":getCityHour(entities[i].hours),
                            "videolink":entities[i].mainPhone,
                        }
                    ]

                }
                retArr.push(stateData)
                stateId++
                cityId++

            }
            else{
                var cityData={
                            "id":cityId,
                            "locationId":entities[i].meta.id,
                            "name":entities[i].name,
                            "googlePlaceId": entities[i].googlePlaceId,
                            "city":entities[i].address.city,
                            "region":entities[i].address.region,
                            "publish_status":entities[i].c_activeInAnswers,
                            "position": { lat: entities[i].cityCoordinate.latitude, lng:entities[i].cityCoordinate.longitude },
                            "address":entities[i].address.line1,
                            "address2":entities[i].address.line2? entities[i].address.line2:"",
                            "zip":entities[i].address.postalCode,
                            "phone":formatPhone(entities[i].mainPhone),
                            "hours":getCityHour(entities[i].hours),
                            "videolink":entities[i].mainPhone,
                }
                retArr[ck-1].cities.push(cityData)
                cityId++
            }
        }
        else{
            var newstateData={
                "id":stateId,
               
                 "state":entities[i].address.region,
                "state_name":statelist[entities[i].address.region],
                "cities":[
                    {
                        "id":stateId,
                        "locationId":entities[i].meta.id,
                        "name":entities[i].name,
                        "googlePlaceId": entities[i].googlePlaceId,
                        "city":entities[i].address.city,
                        "region":entities[i].address.region,
                        "publish_status":entities[i].c_activeInAnswers,
                        "position": { lat: entities[i].cityCoordinate.latitude, lng:entities[i].cityCoordinate.longitude },
                        "address":entities[i].address.line1,
                        "address2":entities[i].address.line2? entities[i].address.line2:"",
                        "zip":entities[i].address.postalCode,
                        "phone":formatPhone(entities[i].mainPhone),
                        "hours":getCityHour(entities[i].hours),
                        "videolink":entities[i].videos[0].video.url,

                    }
                ]

            }
            retArr.push(newstateData)
            stateId++
            cityId++
        }
        }
       
}

return retArr
}



// structure yext api data to use in website+++++++++++++++++++++++
const getStructuredYextData=async()=>{

    const apiLocationData=await getYextLocationData()
    const locationEntities=apiLocationData.response.entities
    const totalLocations=apiLocationData.response.count

    const apiReviewsData=await getYextReviewData()
    const reviewsEntities=apiReviewsData.response.reviews
    const totalReview=(apiReviewsData.response.count/1000).toFixed()+'K+'
  // const totalReview=getFivestarRev(reviewsEntities)
    const totalAvgRating=apiReviewsData.response.averageRating.toFixed(1)


   

    const retdata={
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
                        "pagetitle":"Test",
                        "pagesubtitle":"At All In Adventures, we believe volunteering is a two-way street that benefits both the organization and the volunteer. It is an instrumental force in promoting positive and sustainable growth within communities.",
                       
                        "totalLocations":totalLocations,
                        "totalUniqueGames":16,
                        "totalPlayerEscaped":"1M+",
                        "totalFiveStarReview":totalReview,
                        "totalAvgRating":totalAvgRating,
                        "coverimageL":"/assets/gn-desktop-hero/allinadventures-volunteering-hero.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/allinadventures-volunteering-hero.jpg"
          },
         "states":formatData(locationEntities)
    }

    //console.log(retdata.states)
  return retdata
}

export default getStructuredYextData

