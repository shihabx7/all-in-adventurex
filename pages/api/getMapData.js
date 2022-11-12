import { getLocationsPageData } from "./getLocationsPageData"
export const getMapData =()=>{

 const getState=(slug)=>{

  const slArr=slug.split('-')
  return slArr[slArr.length-1].toUpperCase()
 }
  
  const loc=getLocationsPageData().states
  const extractData=(locData)=>{
    const retData=[]
    var i 
    var j
    var count=1
    var tempData

    for(i=0;i<locData.length;i++){
      for(j=0;j<locData[i].cities.length;j++){

        tempData={
          id: count,
          name: "All in Adventures",
          position: locData[i].cities[j].position, 
          info:{
            coverimg:locData[i].cities[j].coverimg,
            alt:locData[i].cities[j].alt,
            riview:locData[i].cities[j].total_rev,
            avg_rev:locData[i].cities[j].avg_rev,
            city:locData[i].cities[j].city,
            state:getState(locData[i].cities[j].slug),
            zip:locData[i].cities[j].zip,
            country:'USA',
            address:locData[i].cities[j].address,
            mall:locData[i].cities[j].mall,
            phone:locData[i].cities[j].phone,
            email:locData[i].cities[j].email,
            b_hours:locData[i].cities[j].hours
          }
         
          
        }
        
        retData.push(tempData)
        count++

      }
    }

    return retData

  }
  const dd=extractData(loc)
  console.log(loc)

    const mapData=[
    // ny list
        {
           
          id: 1,
          name: "All in Adventures",
          position: { lat: 42.694650871225996, lng: -73.84925962422682 },
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-albany-ny-crossgates-mall-hero.jpg',
              alt:'allinadventures-escape-room-albany-ny-crossgates-mall-hero',
              riview:'5610',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"saturday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"sunday",
                  "open":"11 am",
                  "close":"6 pm"

                }

              ],
              city:'Albeny',
              state:'NY',
              zip:"12203",
              country:'USA',
              address:'1 Crossgates Mall Rd D212',
              mall:'Crossgates Mall',
              phone:'+1 518-240-8243',
              email:'Store103@Allinadventures.com',
              web:'https://allinadventures.com/'
      
          }
        },
        {
           
          id: 2,
          name: "All in Adventures",
          position: { lat: 42.918199478928365, lng: -78.76365703939328 }, 
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-buffalo-ny-walden-galleria-mall-hero.jpg',
              alt:'allinadventures-escape-room-buffalo-ny-walden-galleria-mall',
              riview:'4130',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {
                  "day":"tuesday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {
                  "day":"wednesday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {
                  "day":"thursday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"friday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"saturday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"sunday",
                  "open":"11 am",
                  "close":"6 pm"

                }

              ],

          city:'Buffalo',
          state:'NY',
          zip:14225,
          country:'USA',
          address:'1 Walden Galleria b108',
          mall:'Walden Galleria Mall',
          phone:'+1 716-216-0404',
          email:'Store108@Allinadventures.com',
             
      
          }
        },
        {
           
          id: 3,
          name: "All in Adventures",
          position: { lat: 41.45901376711506, lng: -74.36864051972913}, 
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-middletown-ny-galleria-at-crystal-run-mall-hero.jpg',
              alt:'allinadventures-escape-room-middletown-ny-galleria-at-crystal-run-mall',
              riview:'5264',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"11 am",
                  "close":"7 pm"

                },
                {
                  "day":"tuesday",
                  "open":"11 am",
                  "close":"7 pm"

                },
                {
                  "day":"wednesday",
                  "open":"11 am",
                  "close":"7 pm"

                },
                {
                  "day":"thursday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"friday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"saturday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"sunday",
                  "open":"11 am",
                  "close":"6 pm"

                }

              ],

          city:'Middletown',
          state:'NY',
          zip:10941,
          country:'USA',
          address:'1 Galleria Dr a211',
          mall:'Crystal Run Mall',
          phone:'+1 845-202-9010',
          email:'Store105@Allinadventures.com',
             
      
          }
        },
        {
           
          id: 4,
          name: "All in Adventures",
          position: { lat: 43.06932097705075, lng: -76.1709514598213},  
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-syracuse-ny-destiny-usa-mall-hero.jpg',
              alt:'allinadventures-escape-room-syracuse-ny-destiny-usa-mall',
              riview:'3670',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {
                  "day":"tuesday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {
                  "day":"wednesday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {
                  "day":"thursday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"friday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"saturday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"sunday",
                  "open":"11 am",
                  "close":"6 pm"

                }

              ],

          city:'Syracuse',
          state:'NY',
          zip:13204,
          country:'USA',
          address:'9090 Destiny USA Dr',
          mall:'Destiny USA Mall',
          phone:'+1 315-423-5000',
          email:'Store107@Allinadventures.com',
             
      
          }
        },
        {
           
          id: 5,
          name: "All in Adventures",
          position: { lat: 43.97758505149379, lng: -75.95263770212158},  
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-watertown-ny-salmon-run-mall-hero.jpg',
              alt:'allinadventures-escape-room-watertown-ny-salmon-run-mall',
              riview:'5020',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"saturday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"sunday",
                  "open":"11 am",
                  "close":"6 pm"

                }

              ],

          city:'Watertown',
          state:'NY',
          zip:13601,
          country:'USA',
          address:'21182 Salmon Run Mall Loop W',
          mall:'Salmon Run Mall',
          phone:'+1 315-965-8010',
          email:'Store106@Allinadventures.com',
             
      
          }
        },
        {
           
          id: 6,
          name: "All in Adventures",
          position: { lat: 41.099108396410415, lng: -73.95505304454272},  
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-west-nyack-ny-palisades-mall-hero.jpg',
              alt:'allinadventures-escape-room-west-nyack-ny-palisades-mall',
              riview:'4124',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"12 am",
                  "close":"9 pm"

                },
                {   
                  "day":"saturday",
                  "open":"12 am",
                  "close":"9 pm"

                },
                {   
                  "day":"sunday",
                  "open":"11 am",
                  "close":"7 pm"

                }

              ],

          city:'West Nyack',
          state:'NY',
          zip:10994,
          country:'USA',
          address:'3681 Palisades Center Dr',
          mall:'Palisades Center Mall',
          phone:'+1 845-208-2919',
          email:'Store101@Allinadventures.com',
             
      
          }
        },
        // ny list end
        // Nc list
        {
           
          id: 7,
          name: "All in Adventures",
          position: { lat: 35.87108885072849, lng: -78.5746156605905},
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-raleigh-nc-triangle-town-center-mall-hero.jpg',
              alt:'allinadventures-escape-room-raleigh-nc-triangle-town-center-mall',
              riview:'5231',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"12 am",
                  "close":"9 pm"

                },
                {   
                  "day":"saturday",
                  "open":"10 am",
                  "close":"9 pm"

                },
                {   
                  "day":"sunday",
                  "open":"12 am",
                  "close":"6 pm"

                }

              ],

          city:'Raleigh',
          state:'NC',
          zip:27616,
          country:'USA',
          address:'5959 Triangle Town Blvd Space EU 2113',
          mall:'Triangle Town Center Mall',
          phone:'+1 919-205-5008',
          email:'Store123@Allinadventures.com',
             
      
          }
        },
        //Nc List End
         // Pa list
         {
           
          id: 8,
          name: "All in Adventures",
          position: { lat: 40.14369469629309, lng: -74.95479885308148},
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-bensalem-pa-neshaminy-mall-hero.jpg',
              alt:'allinadventures-escape-room-bensalem-pa-neshaminy-mall',
              riview:'4483',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"saturday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"sunday",
                  "open":"12 am",
                  "close":"6 pm"

                }

              ],

          city:'Bensalem',
          state:'PA',
          zip:19020,
          country:'USA',
          address:'707 Neshaminy Mall Space 672',
          mall:'Neshaminy Mall',
          phone:'+1 267-227-1101', 
          email:'Store130@Allinadventures.com',
          }
        },
        //PA List End
         // Ma list
         {
           
          id: 9,
          name: "All in Adventures",
          position: { lat: 42.36108594695472, lng: -72.54765208077018},
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-hadley-ma-hampshire-mall-hero.jpg',
              alt:'allinadventures-escape-room-hadley-ma-hampshire-mall',
              riview:'4870',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"saturday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"sunday",
                  "open":"12 am",
                  "close":"6 pm"

                }

              ],

          city:'Hadley',
          state:'MA',
          zip: "01035",
          country:'USA',
          address:'367 Russell St A07',
          mall:'Hampshire Mall',
          phone:'+1 413-825-9777', 
          email:'Store113@Allinadventures.com',
          }
        },
        {
           
          id: 10,
          name: "All in Adventures",
          position: { lat: 42.173237321123935, lng: -72.63991905070128}, 
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-holyoke-ma-holyoke-mall-hero.jpg',
              alt:'allinadventures-escape-room-holyoke-ma-holyoke-mall',
              riview:'3924',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"saturday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"sunday",
                  "open":"12 am",
                  "close":"6 pm"

                }

              ],

          city:'Holyoke',
          state:'MA',
          zip: "01035",
          country:'USA',
          address:'Holyoke Mall, 50 Holyoke St',
          mall:'Holyoke Mall',
          phone:'+1 413-200-9777', 
          email:'Store114@Allinadventures.com',
          }
        },
        {
           
          id: 11,
          name: "All in Adventures",
          position: { lat: 41.973979082363485, lng: -70.71796156179091},
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-kingston-ma-kingston-collection-mall-hero.jpg',
              alt:'allinadventures-escape-room-kingston-ma-kingston-collection-mall',
              riview:'6010',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"saturday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"sunday",
                  "open":"11 am",
                  "close":"6 pm"

                }

              ],

          city:'Kingston',
          state:'MA',
          zip: "02364",
          country:'USA',
          address:'101 Kingston Collection Way',
          mall:'Kingston Collection Mall',
          phone:'+1 781-236-4933', 
          email:'Store102@Allinadventures.com',
          }
        },
        {
           
          id: 12,
          name: "All in Adventures",
          position: { lat: 41.95085653943048, lng: -71.35152473980524},
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero.jpg',
              alt:'allinadventures-escape-room-north-attleborough-ma-emerald-square-mall',
              riview:'5423',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"saturday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"sunday",
                  "open":"11 am",
                  "close":"6 pm"

                }

              ],

          city:'North Attleboro',
          state:'MA',
          zip: "02760",
          country:'USA',
          address:'999 S Washington St',
          mall:'Emerald Square Mall',
          phone:'+1 508-695-3100', 
          email:'Store110@Allinadventures.com',
          }
        },
        //Ma List End
         // CT list
         {
           
          id: 13,
          name: "All in Adventures",
          position: { lat: 41.23618337923384, lng: -73.03556385987913}, 
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-milford-ct-connecticut-post-mall-hero.jpg',
              alt:'allinadventures-escape-room-milford-ct-connecticut-post-mall',
              riview:'5185',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"saturday",
                  "open":"10 am",
                  "close":"9 pm"

                },
                {   
                  "day":"sunday",
                  "open":"11 am",
                  "close":"6 pm"

                }

              ],

          city:'Milford',
          state:'CT',
          zip:'06460',
          country:'USA',
          address:'1201 Boston Post Rd',
          mall:'Connecticut Post Mall',
          phone:'+1 203-290-1916', 
          email:'Store109@Allinadventures.com',
          }
        },
        {
           
          id: 14,
          name: "All in Adventures",
          position: { lat: 41.811417406121315, lng: -72.54741454441613},
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-manchester-ct-buckland-hills-mall-hero.jpg',
              alt:'allinadventures-escape-room-manchester-ct-buckland-hills-mall-hero',
              riview:'4314',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"12 am",
                  "close":"9 pm"

                },
                {
                  "day":"tuesday",
                  "open":"12 am",
                  "close":"9 pm"

                },
                {
                  "day":"wednesday",
                  "open":"12 am",
                  "close":"9 pm"

                },
                {
                  "day":"thursday",
                  "open":"12 am",
                  "close":"9 pm"

                },
                {   
                  "day":"friday",
                  "open":"12 am",
                  "close":"9 pm"

                },
                {   
                  "day":"saturday",
                  "open":"12 am",
                  "close":"9 pm"

                },
                {   
                  "day":"sunday",
                  "open":"12 am",
                  "close":"6 pm"

                }

              ],

          city:'Manchester',
          state:'CT',
          zip:'06042',
          country:'USA',
          address:'194 Buckland Hills Dr Space 2002',
          mall:'Buckland Hills Mall',
          phone:'+1 860-414-3606', 
          email:'Store121@Allinadventures.com',
          }
        },
        {
           
          id: 15,
          name: "All in Adventures",
          position: { lat: 41.55358939724869, lng: -73.02502768474506}, 
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-waterbury-ct-brass-mills-mall-hero.jpg',
              alt:'allinadventures-escape-room-waterbury-ct-brass-mills-mall',
              riview:'4753',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"3 pm",
                  "close":"7 pm"

                },
                {
                  "day":"tuesday",
                  "open":"3 pm",
                  "close":"7 pm"

                },
                {
                  "day":"wednesday",
                  "open":"3 pm",
                  "close":"7 pm"

                },
                {
                  "day":"thursday",
                  "open":"3 pm",
                  "close":"7 pm"

                },
                {   
                  "day":"friday",
                  "open":"3 pm",
                  "close":"8 pm"

                },
                {   
                  "day":"saturday",
                  "open":"1 pm",
                  "close":"8 pm"

                },
                {   
                  "day":"sunday",
                  "open":"1 pm",
                  "close":"6 pm"

                }

              ],

          city:'Waterbury',
          state:'CT',
          zip:'06706',
          country:'USA',
          address:'495 Union St # 1158',
          mall:'Brass Mills Mall',
          phone:'+1 203-303-4414', 
          email:'Store133@Allinadventures.com',
          }
        },
        //CT List End
        // NJ list
        {
           
          id: 16,
          name: "All in Adventures",
          position: { lat: 40.42998776602108, lng: -74.38402078940565},
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-east-brunswick-nj-brunswick-square-mall-hero.jpg',
              alt:'allinadventures-escape-room-east-brunswick-nj-brunswick-square-mall',
              riview:'3820',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"2 pm",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"2 pm",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"2 pm",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"2 pm",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"2 pm",
                  "close":"8 pm"

                },
                {   
                  "day":"saturday",
                  "open":"12 pm",
                  "close":"8 pm"

                },
                {   
                  "day":"sunday",
                  "open":"12 pm",
                  "close":"6 pm"

                }

              ],

          city:'East Brunswick',
          state:'NJ',
          zip:'08816',
          country:'USA',
          address:'Brunswick Square, 755 NJ-18',
          mall:'Brunswick Square Mall',
          phone:'+1 732-201-7285', 
          email:'Store148@Allinadventures.com',
          }
        },
        {
           
          id: 17,
          name: "All in Adventures",
          position: { lat: 40.912492907069215, lng: -74.55436310565122}, 
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall-hero.jpg',
              alt:'allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall',
              riview:'4504',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"12 am",
                  "close":"9 pm"

                },
                {   
                  "day":"saturday",
                  "open":"12 am",
                  "close":"9 pm"

                },
                {   
                  "day":"sunday",
                  "open":"12 am",
                  "close":"6 pm"

                }

              ],

          city:'Rockaway',
          state:'NJ',
          zip:'07866',
          country:'USA',
          address:'301 Mt Hope Ave',
          mall:'Rockaway Townsquare Mall',
          phone:'+1 862-203-5394', 
          email:'Store112@Allinadventures.com',
          }
        },
        {
           
          id: 18,
          name: "All in Adventures",
          position: { lat: 40.561122974306876, lng: -74.29765370334478}, 
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-woodbridge-nj-woodbridge-mall-hero.jpg',
              alt:'allinadventures-escape-room-woodbridge-nj-woodbridge-mall',
              riview:'3635',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"12 pm",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"12 pm",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"12 pm",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"12 pm",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"1 pm",
                  "close":"9 pm"

                },
                {   
                  "day":"saturday",
                  "open":"12 pm",
                  "close":"8 pm"

                },
                {   
                  "day":"sunday",
                  "open":"12 pm",
                  "close":"6 pm"

                }

              ],

          city:'Woodbridge',
          state:'NJ',
          zip:'07095',
          country:'USA',
          address:'250 Woodbridge Center Dr',
          mall:'Woodbridge Mall',
          phone:'+1 732-351-2772', 
          email:'Store128@Allinadventures.com',
          }
        },
        //NJ List End
         // MARYLAND md list
         {
           
          id: 19,
          name: "All in Adventures",
          position: { lat: 38.944309962794854, lng: -76.73636950227818},  
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-bowie-md-bowie-town-center-mall-hero.jpg',
              alt:'allinadventures-escape-room-bowie-md-bowie-town-center-mall',
              riview:'5330',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"12 pm",
                  "close":"9 pm"

                },
                {
                  "day":"tuesday",
                  "open":"12 pm",
                  "close":"9 pm"

                },
                {
                  "day":"wednesday",
                  "open":"12 pm",
                  "close":"9 pm"

                },
                {
                  "day":"thursday",
                  "open":"12 pm",
                  "close":"9 pm"

                },
                {   
                  "day":"friday",
                  "open":"12 pm",
                  "close":"9 pm"

                },
                {   
                  "day":"saturday",
                  "open":"12 pm",
                  "close":"9 pm"

                },
                {   
                  "day":"sunday",
                  "open":"12 pm",
                  "close":"6 pm"

                }

              ],

          city:'Bowie',
          state:'MD',
          zip:'20716',
          country:'USA',
          address:'15421 Emerald Way',
          mall:'Bowie Town Center Mall',
          phone:'+1 240-245-6911', 
          email:'Store145@Allinadventures.com',
          }
        },
        {
           
          id: 20,
          name: "All in Adventures",
          position: { lat: 39.37957021829345, lng: -76.46891952269905},
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-white-marsh-md-white-marsh-mall-hero.jpg',
              alt:'allinadventures-escape-room-white-marsh-md-white-marsh-mall',
              riview:'5455',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"saturday",
                  "open":"12 am",
                  "close":"8 pm"

                },
                {   
                  "day":"sunday",
                  "open":"12 am",
                  "close":"6 pm"

                }

              ],

          city:'White Marsh',
          state:'MD',
          zip:'21236',
          country:'USA',
          address:'8200 Perry Hall Blvd #2005',
          mall:'White Marsh Mall',
          phone:'+1 410-441-5955', 
          email:'Store118@Allinadventures.com',
          }
        },
         // MARYLAND md list end
          // VA  list
        {
           
          id: 21,
          name: "All in Adventures",
          position: { lat: 37.30926890765125, lng: -79.96414296359808},
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-roanoke-va-valley-view-mall-hero.jpg',
              alt:'allinadventures-escape-room-roanoke-va-valley-view-mall',
              riview:'4982',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {
                  "day":"tuesday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {
                  "day":"wednesday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {
                  "day":"thursday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"friday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"saturday",
                  "open":"11 am",
                  "close":"9 pm"

                },
                {   
                  "day":"sunday",
                  "open":"12 pm",
                  "close":"6 pm"

                }

              ],

          city:'Roanoke',
          state:'VA',
          zip:'24012',
          country:'USA',
          address:'250 Woodbridge Center Dr',
          mall:'Valley View Mall',
          phone:'+1 540-920-2253', 
          email:'Store129@Allinadventures.com',
          }
        },
        //VA List End
         // GA md list
         {
           
          id: 22,
          name: "All in Adventures",
          position: { lat: 33.986421448068036, lng: -84.08483070501663},
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall-hero.jpg',
              alt:'allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall',
              riview:'5424',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"10 am",
                  "close":"9 pm"

                },
                {   
                  "day":"saturday",
                  "open":"10 am",
                  "close":"9 pm"

                },
                {   
                  "day":"sunday",
                  "open":"11 am",
                  "close":"6 pm"

                }

              ],

          city:'Lawrenceville',
          state:'GA',
          zip:'30043',
          country:'USA',
          address:'5900 Sugarloaf Pkwy Unit 134',
          mall:'Sugarloaf Mills Mall',
          phone:'+1 678-847-5002', 
          email:'Store100@Allinadventures.com',
          }
        },
        //GA List End
         // OH  list
         {
           
          id: 23,
          name: "All in Adventures",
          position: { lat: 40.15019562598685, lng: -82.98034309378431}, 
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-columbus-oh-polaris-fashion-place-mall-hero.jpg',
              alt:'allinadventures-escape-room-columbus-oh-polaris-fashion-place-mall',
              riview:'4863',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"saturday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"sunday",
                  "open":"12 pm",
                  "close":"6 pm"

                }

              ],

          city:'Columbus',
          state:'OH',
          zip:'43240',
          country:'USA',
          address:'1500 Polaris Pkwy Space 2252',
          mall:'Polaris Fashion Place Mall',
          phone:'+1 614-839-5858', 
          email:'Store147@Allinadventures.com',
          }
        },
        {
           
          id: 24,
          name: "All in Adventures",
          position: { lat: 41.66255323325249, lng: -81.35798410389197},
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-mentor-oh-great-lakes-mall-hero.jpg',
              alt:'allinadventures-escape-room-mentor-oh-great-lakes-mall',
              riview:'3675',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"12 pm",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"12 pm",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"12 pm",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"12 pm",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"12 pm",
                  "close":"8 pm"

                },
                {   
                  "day":"saturday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"sunday",
                  "open":"11 am",
                  "close":"6 pm"

                }

              ],

          city:'Mentor',
          state:'OH',
          zip:'44060',
          country:'USA',
          address:'7850 Mentor Ave #1050a',
          mall:'Great Lakes Mall',
          phone:'+1 440-484-5373', 
          email:'Store143@Allinadventures.com',
          }
        },
        {
           
          id: 25,
          name: "All in Adventures",
          position: { lat: 39.63934536750076, lng: -84.22165216910368},
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-dayton-oh-dayton-mall-hero.jpg',
              alt:'allinadventures-escape-room-dayton-oh-dayton-mall',
              riview:'4610',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"1 pm",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"1 pm",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"1 pm",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"1 pm",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"1 pm",
                  "close":"8 pm"

                },
                {   
                  "day":"saturday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"sunday",
                  "open":"12 pm",
                  "close":"6 pm"

                }

              ],

          city:'Dayton',
          state:'OH',
          zip:'45459',
          country:'USA',
          address:'2700 Miamisburg Centerville Rd Space 300',
          mall:'Dayton Mall',
          phone:'+1 937-240-0913', 
          email:'Store146@Allinadventures.com',
          }
        },
        //OH List End
        // tx md list
       /* {
           
          id: 26,
          name: "All in Adventures",
          position: { lat: 30.28150379742751, lng: -97.7383824501323},
          
     
          info:{ 
              coverimg:'/assets/mapcard/allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall-hero.jpg',
              alt:'allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall',
              riview:'5424',
              
              b_hours:[
                
                {
                  "day":"monday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"tuesday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"wednesday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {
                  "day":"thursday",
                  "open":"11 am",
                  "close":"8 pm"

                },
                {   
                  "day":"friday",
                  "open":"10 am",
                  "close":"9 pm"

                },
                {   
                  "day":"saturday",
                  "open":"10 am",
                  "close":"9 pm"

                },
                {   
                  "day":"sunday",
                  "open":"11 am",
                  "close":"6 pm"

                }

              ],

          city:'Austin',
          state:'Tx',
          zip:'30043',
          country:'USA',
          address:'5900 Sugarloaf Pkwy Unit 134',
          mall:'Sugarloaf Mills Mall',
          phone:'(678) 8475002', 
          email:'Store104@Allinadventures.com',
          }
        }, */
        //TX List End
        // ny Poughkeepsie list
       {
           
          id: 27,
          name: "All in Adventures",
          position: { lat: 41.626240482899284, lng: -73.92067928923845},
          
     
          info:{ 
              coverimg:'/assets/mapcard/Poughkeepsie-ny-poughkeepsie-galleria.jpg',
              alt:'allinadventures-escape-room-Poughkeepsie-ny',
              riview:'3027',
              
              b_hours:[
                {
                  "day":"monday",
                  "open":"10 am",
                  "close":"9.30 pm"

                },
                {
                  "day":"tuesday",
                  "open":"10 am",
                  "close":"9.30 pm"

                },
                {
                  "day":"wednesday",
                  "open":"10 am",
                  "close":"9.30 pm"

                },
                {
                  "day":"thursday",
                  "open":"10 am",
                  "close":"9.30 pm"

                },
                {   
                  "day":"friday",
                  "open":"10 am",
                  "close":"9.30 pm"

                },
                {   
                  "day":"saturday",
                  "open":"10 am",
                  "close":"9.30 pm"

                },
                {   
                  "day":"sunday",
                  "open":"11 am",
                  "close":"6 pm"

                }

          
            ],

          city:'Poughkeepsie',
          state:'NY',
          zip:'12601',
          country:'USA',
          address:'Poughkeepsie Galleria, 2001 South Rd',
          mall:'Poughkeepsie Galleria Mall',
          phone:'+1 845-208-2919', 
          email:'store149@allinadventures.com',
          }
        }, 
        //ny Poughkeepsie List End
      
       
      ]
return dd      



}