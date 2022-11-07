import { getALlActivityList } from "./getAllActivityList"
import { getAllEventList } from "./getAllEventList"
import { getVirtualGameSlug } from "./VirtualGames/getVirtualGameSlug"


 export const getLocationsPageData =  () => {

    const data=
       {
        "activitylistSlug":getALlActivityList(),
        "eventlistSlug":getAllEventList(),
        "virtualgameSlug":getVirtualGameSlug(),
        
         "states":[
            //========================================== ============1 Ny Satate
                     {
                        "id":1,
                        "state":"NY",
                        "state_name":"NEW YORK",
                        "cities":[
                                    {
                                        "id":1,
                                        "city":"Albany",
                                        "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                        "address":"1 Crossgates Mall",
                                        "zip":"12203",
                                        "fivestar":"5610",
                                        "phone":"+1 518-240-8243",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-albany-ny-crossgates-mall-hero.jpg',
                                        "mall":"Crossgates Mall",
                                        "alt":'allinadventures-escape-room-albany-ny-crossgates-mall-hero',
                                        "slug":"albany-ny",
                                        "email":"Store103@Allinadventures.com",
                                        "position": { lat: 42.694650871225996, lng: -73.84925962422682 },
                                        "hours":[
                              
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


                                    
                                                 ]
                                    },
                                    {
                                        "id":2,
                                        "city":"Buffalo",
                                        "address":"1 Walden Galleria b108",
                                        "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                        "zip":"14225", 
                                        "fivestar":"4130",
                                        "phone":"+1 716-216-0404",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-buffalo-ny-walden-galleria-mall-hero.jpg',
                                        "mall":"Walden Galleria",
                                        "alt":'allinadventures-escape-room-buffalo-ny-walden-galleria-mall-hero',
                                        "slug":"buffalo-ny",
                                        "email":"Store108@Allinadventures.com",
                                        "position": { lat: 42.918199478928365, lng: -78.76365703939328 }, 
                                        "hours":[
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
                                    
                                                 ]
                                    },
                                    {
                                        "id":3,
                                        "city":"Middletown",
                                        "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                        "address":"1 Galleria Dr a211",
                                        "slug":"middletown-ny",
                                        "zip":"10941",
                                        "fivestar":"5264",
                                        "phone":"+1 845-202-9010",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-middletown-ny-galleria-at-crystal-run-mall-hero.jpg',
                                        "mall":"Crystal Run Mall",
                                        "alt":'allinadventures-escape-room-middletown-ny-galleria-at-crystal-run-mall-hero',
                                        "email":"Store105@Allinadventures.com",
                                        "position": { lat: 41.45901376711506, lng: -74.36864051972913}, 
                                        "hours":[
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

                                    
                                       ]
                                    },
                                    {
                                        "id":4,
                                        "city":"Syracuse",
                                        "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                        "slug":"syracuse-ny",
                                        "address":" 9090 Destiny USA Drive",
                                        "zip":"13204",
                                        "fivestar":"3670",
                                        "phone":"+1 315-423-5000",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-syracuse-ny-destiny-usa-mall-hero.jpg',
                                        "mall":"Destiny USA Mall",
                                        "alt":'allinadventures-escape-room-syracuse-ny-destiny-usa-mall-hero',
                                        "email":"Store107@Allinadventures.com",
                                        "position": { lat: 43.06932097705075, lng: -76.1709514598213},  
                                        "hours":[
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

                                    
                                      ]
                                    },
                                    {
                                      "id":5,
                                      "city":"Watertown",
                                      "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                      "address":"21182 Salmon Run Mall Loop W",
                                      "slug":"watertown-ny",
                                      "zip":"13601",
                                      "fivestar":"5020",
                                      "phone":"+1 315-965-8010",
                                      "coverimg":'/assets/mapcard/allinadventures-escape-room-watertown-ny-salmon-run-mall-hero.jpg',
                                      "mall":"Salmon Run Mall",
                                      "alt":'allinadventures-escape-room-watertown-ny-salmon-run-mall-hero',
                                      "email":"Store106@Allinadventures.com",
                                      "position": { lat: 43.97758505149379, lng: -75.95263770212158},
                                      "hours":[
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

                                  
                                    ]
                                  },
                                  {
                                    "id":6,
                                    "city":"West Nyack",
                                    "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                    "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                    "slug":"west-nyack-ny",
                                    "address":"3681 Palisades Center Dr",
                                    "zip":"10994",
                                    "fivestar":"4124",
                                    "phone":"+1 845-208-2919",
                                    "coverimg":'/assets/mapcard/allinadventures-escape-room-west-nyack-ny-palisades-mall-hero.jpg',
                                    "mall":"Palisades Center Mall",
                                    "alt":'allinadventures-escape-room-west-nyack-ny-palisades-mall',
                                    "email":"Store101@Allinadventures.com",
                                    "position": { lat: 43.97758505149379, lng: -75.95263770212158}, 
                                    "hours":[
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

                                
                                  ]
                                },
                                {
                                  "id":7,
                                  "city":"Poughkeepsie",
                                  "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                  "entry_guid":"Upstairs from 110 Grill.",
                                  "slug":"poughkeepsie-ny",
                                  "address":"Poughkeepsie Galleria, 2001 South Rd",
                                  "zip":"12601",
                                  "fivestar":"3027",
                                  "phone":"+1 845-208-2919",
                                  "coverimg":'/assets/mapcard/Poughkeepsie-ny-poughkeepsie-galleria.jpg',
                                  "mall":"Poughkeepsie Galleria Mall",
                                  "alt":'allinadventures-escape-room-west-nyack-ny-palisades-mall',
                                  "email":"store149@allinadventures.com",
                                  "position": { lat: 41.626240482899284, lng: -73.92067928923845}, 
                                  "hours":[
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

                              
                                ]
                              }

                                ]
                    },
              //========================================== ============1 Ny Satate end
              //========================================== 2 NORTH CAROLINA
                    {
                        "id":2,
                        "state":"NC",
                        "state_name":"NORTH CAROLINA",
                        "cities":[
                          {
                            "id":1,
                            "city":"Raleigh",
                            "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                            "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                            "slug":"raleigh-nc",
                            "address":"5959 Triangle Town Blvd Space EU 2113",
                            "zip":27616,
                            "fivestar":5231,
                            
                            "phone":"+1 919-205-5008",
                            "coverimg":'/assets/mapcard/allinadventures-escape-room-raleigh-nc-triangle-town-center-mall-hero.jpg',
                            "mall":"Triangle Town Center Mall",
                            "alt":'allinadventures-escape-room-raleigh-nc-triangle-town-center-mall',
                            "email":"Store123@Allinadventures.com",
                            "position": { lat: 35.87108885072849, lng: -78.5746156605905},
                            "hours":[
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



                        
                             ]
                          },
                        ]
                    },
               //========================================== 2 NORTH CAROLINA end
                     //========================================== 3 PENNSYLVANIA
                    {
                        "id":3,
                        "state":"PA",
                        "state_name":"PENNSYLVANIA",
                        "cities":[
                            
                                     {
                                        "id":1,
                                        "city":"Bensalem",
                                        "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                        "slug":"bensalem-pa",
                                        "address":"707 Neshaminy Mall Space 672",
                                        "zip":19020,
                                        "fivestar":4483,
                                        "phone":"+1 267-227-1101",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-bensalem-pa-neshaminy-mall-hero.jpg',
                                        "mall":"Neshaminy Mall",
                                        "alt":'allinadventures-escape-room-bensalem-pa-neshaminy-mall-hero',
                                        "email":"Store130@Allinadventures.com",
                                        "position": { lat: 40.14369469629309, lng: -74.95479885308148},
                                        "hours":[
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
        
                                    
                                           ]
                                       }
                                ]
                    },
              //========================================== 3 PENNSYLVANIA end
                    //========================================== 4 MASSACHUSETTS
                    {
                        "id":4,
                        "state":"MA",
                        "state_name":"MASSACHUSETTS",
                        "cities":[
                                    {
                                        "id":1,
                                        "city":"Hadley",
                                        "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                        "slug":"hadley-ma",
                                        "address":"367 Russell St A07",
                                        "zip":"01035",
                                        "fivestar":4870,
                                        "phone":"+1 413-8259777",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-hadley-ma-hampshire-mall-hero.jpg',
                                        "mall":"Hampshire Mall",
                                        "alt":'allinadventures-escape-room-hadley-ma-hampshire-mall-hero',
                                        "email":"Store113@Allinadventures.com",
                                        "position": { lat: 42.36108594695472, lng: -72.54765208077018},
                                        "hours":[
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

                                    
                                      ]
                                    },
                                    {
                                      "id":2,
                                      "city":"Holyoke",
                                      "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                      "slug":"holyoke-ma",
                                      "address":"Holyoke Mall, 50 Holyoke St",
                                      "zip":"01035",
                                      
                                      "fivestar":"3924",
                                      "phone":"+1 413-200-9777",
                                      "coverimg":'/assets/mapcard/allinadventures-escape-room-holyoke-ma-holyoke-mall-hero.jpg',
                                      "mall":"Holyoke Mall",
                                      "alt":'allinadventures-escape-room-holyoke-ma-holyoke-mall-hero',
                                      "email":"Store114@Allinadventures.com",
                                      "position": { lat: 42.173237321123935, lng: -72.63991905070128},
                                      "hours":[
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

                                  
                                    ]
                                  },
                                  {
                                    "id":3,
                                    "city":"Kingston",
                                    "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                    "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                    "slug":"kingston-ma",
                                    "address":"101 Kingston Collection Way",
                                    "zip":"02364",
                                    
                                    "fivestar":6010,
                                    "phone":"+1 781-236-4933",
                                    "coverimg":'/assets/mapcard/allinadventures-escape-room-kingston-ma-kingston-collection-mall-hero.jpg',
                                    "mall":"Kingston Collection Mall",
                                    "alt":'allinadventures-escape-room-kingston-ma-kingston-collection-mall-hero',
                                    "email":"Store102@Allinadventures.com",
                                    "position": { lat: 41.973979082363485, lng: -70.71796156179091},
                                    "hours":[
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

                                
                                  ]
                                },
                                {
                                  "id":4,
                                  "city":"N Attleborough",
                                  "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                   "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                  "slug":"n-attleborough-ma",
                                  "address":"999 S Washington St",
                                  "zip":"02760",
                                  
                                  "fivestar":5423,
                                  "phone":"+1 508-695-3100",
                                  "coverimg":'/assets/mapcard/allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero.jpg',
                                  "mall":"Emerald Square Mall",
                                  "alt":'allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero',
                                  "email":"Store102@Allinadventures.com",
                                  "position": { lat: 41.95085653943048, lng: -71.35152473980524},
                                  "hours":[
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

                              
                                ]
                              },
                                ]
                    },
                       //========================================== 4 MASSACHUSETTS end
                    //========================================== 5 CONNECTICUT
                    {
                        "id":5,
                        "state":"CT",
                        "state_name":"CONNECTICUT",
                        "cities":[
                                    {
                                        "id":1,
                                        "city":"Milford",
                                        "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                        "slug":"milford-ct",
                                        "address":"1201 Boston Post Rd",
                                        "zip":'06460',
                                       
                                        "fivestar":"5185",
                                        "phone":"+1 203-290-1916",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-milford-ct-connecticut-post-mall-hero.jpg',
                                        "mall":"Connecticut Post Mall",
                                        "alt":'allinadventures-escape-room-milford-ct-connecticut-post-mall',
                                        "email":"Store109@Allinadventures.com",
                                        "position": { lat: 41.23618337923384, lng: -73.03556385987913}, 
                                        "hours":[
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

                                    
                                        ]
                                    },
                                    {
                                      "id":2,
                                      "city":"Manchester",
                                      "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                      "slug":"manchester-ct",
                                      "address":"194 Buckland Hills Dr Space 2002",
                                      "zip":'06042',
                                     
                                      "fivestar":4314,
                                      "phone":"+1 860-414-3606",
                                      "coverimg":'/assets/mapcard/allinadventures-escape-room-manchester-ct-buckland-hills-mall-hero.jpg',
                                      "mall":"Buckland Hills Mall",
                                      "alt":'allinadventures-escape-room-manchester-ct-buckland-hills-mall-hero',
                                      "email":"Store121@Allinadventures.com",
                                      "position": { lat: 41.811417406121315, lng: -72.54741454441613},
                                      "hours":[
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

                                  
                                      ]
                                  },
                                  {
                                    "id":3,
                                    "city":"Waterbury",
                                    "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                    "slug":"waterbury-ct",
                                    "address":"495 Union St # 1158",
                                    "zip":'06706',
                                   
                                    "fivestar":4753,
                                    "phone":"+1 203-303-4414",
                                    "coverimg":'/assets/mapcard/allinadventures-escape-room-waterbury-ct-brass-mills-mall-hero.jpg',
                                    "mall":"Brass Mills Mall",
                                    "alt":'allinadventures-escape-room-waterbury-ct-brass-mills-mall-hero',
                                    "email":"Store133@Allinadventures.com",
                                    "position": { lat: 41.55358939724869, lng: -73.02502768474506}, 
                                    "hours":[
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

                                
                                    ]
                                }
                                ]
                    },
   //========================================== 5 CONNECTICUT end
       //========================================== 6 Marryland
                 
                    {
                        "id":6,
                        "state":"MD",
                        "state_name":"MARYLAND",
                        "cities":[
                                    {
                                        "id":1,
                                        "city":"Bowie",
                                        "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                        "slug":"bowie-md",
                                        "address":"15421 Emerald Way",
                                        "zip":'20716',
                                         "fivestar":5330,
                                        "phone":"+1 240-245-6911",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-bowie-md-bowie-town-center-mall-hero.jpg',
                                        "mall":"Bowie Town Center Mall",
                                        "alt":'allinadventures-escape-room-bowie-md-bowie-town-center-mall-hero',
                                        "email":"Store145@Allinadventures.com",
                                        "position": { lat: 38.944309962794854, lng: -76.73636950227818},  
                                        "hours":[
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

                                    
                                                 ]
                                    },
                                    {
                                      "id":2,
                                      "city":"White Marsh",
                                      "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                      "slug":"white-marsh-md",
                                      "address":"8200 Perry Hall Blvd #2005",
                                      "zip":'21236',
                                       "fivestar":5455,
                                      "phone":"+1 410-441-5955",
                                      "coverimg":'/assets/mapcard/allinadventures-escape-room-white-marsh-md-white-marsh-mall-hero.jpg',
                                      "mall":"White Marsh Mall",
                                      "alt":'allinadventures-escape-room-white-marsh-md-white-marsh-mall-hero',
                                      "email":"Store118@Allinadventures.com",
                                      "position": { lat: 39.37957021829345, lng: -76.46891952269905},
                                      "hours":[
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

                                  
                                 ]
                                  }
                                ]
                    },
                    //========================================== 6 Maryland end
            //========================================== New jarsey
                    {
                        "id":7,
                        "state":"NJ",
                        "state_name":"NEW JERSEY",
                        "cities":[
                                    {
                                        "id":1,
                                        "city":"East Brunswick",
                                        "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                        "slug":"east-brunswick-nj",
                                        "address":"1 welder garden",
                                        "zip":'08816',

                                        "fivestar":3820,
                                        "phone":"+1 732-201-7285",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-east-brunswick-nj-brunswick-square-mall-hero.jpg',
                                        "mall":"Brunswick Square Mall",
                                        "alt":'aallinadventures-escape-room-east-brunswick-nj-brunswick-square-mall',
                                        "email":"Store148@Allinadventures.com",
                                        "position": { lat: 40.42998776602108, lng: -74.38402078940565},
                                        "hours":[
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

                                    
                                      ]
                                    },
                                    {
                                      "id":2,
                                      "city":"Rockaway",
                                      "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                      "slug":"rockaway-nj",
                                      "address":"301 Mt Hope Ave",
                                      "zip":'07866',

                                      "fivestar":4504,
                                      "phone":"+1 862-203-5394",
                                      "coverimg":'/assets/mapcard/allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall-hero.jpg',
                                      "mall":"Rockaway Townsquare Mall",
                                      "alt":'allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall',
                                      "email":"Store112@Allinadventures.com",
                                      "position": { lat: 40.912492907069215, lng: -74.55436310565122}, 
                                      "hours":[
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
                                  
                                    ]
                                  },
                                  {
                                    "id":3,
                                    "city":"Woodbridge",
                                    "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                                    "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                    "slug":"woodbridge-nj",
                                    "address":"250 Woodbridge Center Dr",
                                    "zip":'07095',

                                    "fivestar":3635,
                                    "phone":"+1 732-3-2772",
                                    "coverimg":'/assets/mapcard/allinadventures-escape-room-woodbridge-nj-woodbridge-mall-hero.jpg',
                                    "mall":"Woodbridge Mall",
                                    "alt":'allinadventures-escape-room-woodbridge-nj-woodbridge-mall-hero',
                                    "email":"Store128@Allinadventures.com",
                                    "position": { lat: 40.561122974306876, lng: -74.29765370334478}, 
                                    "hours":[
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
                                  ]
                                }

                                ]
                    },
             //========================================== New jarsey end
                    //========================================== 8 texas
                    {
                        "id":8,
                        "state":"TX",
                        "state_name":"TEXAS",
                        "cities":[
                          {
                            "id":3,
                            "city":"Austin",
                            "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                            "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                            "slug":"austin-tx",
                            "address":"250 texas austin",
                            "zip":'07095',

                            "fivestar":3635,
                            "phone":"+1 732-351-2772",
                            "coverimg":'/assets/mapcard/allinadventures-escape-room-austin-texas.jpg',
                            "mall":"Texas Mall",
                            "alt":'allinadventures-escape-room-austin-texas',
                            "email":"Store129@Allinadventures.com",
                            "position": { lat: 30.28150379742751, lng: -97.7383824501323},
                            "hours":[
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
                          ]
                        }
                        ]
                    },
                    //========================================== 8 texas
                    //========================================== 9 VIRGINIA
                    {
                        "id":9,
                        "state":"VA",
                        "state_name":"VIRGINIA",
                        "cities":[
                          {
                            "id":1,
                            "city":"Roanoke",
                            "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                            "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                            "slug":"roanoke-va",
                            "address":"250 Woodbridge Center Dr",
                            "zip":'24012',

                            "fivestar":4982,
                            "phone":"+1 540-920-2253",
                            "coverimg":'/assets/mapcard/allinadventures-escape-room-roanoke-va-valley-view-mall-hero.jpg',
                            "mall":"Valley View Mall",
                            "alt":'allinadventures-escape-room-roanoke-va-valley-view-mall-hero',
                            "email":"Store129@Allinadventures.com",
                            "position": { lat: 37.30926890765125, lng: -79.96414296359808},
                            "hours":[
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
                          ]
                        }
                                ]
                    },
                    //========================================== 10 OHIO
                    {
                        "id":10,
                        "state":"OH",
                        "state_name":"OHIO",
                        "cities":[
                          {
                            "id":1,
                            "city":"Columbus",
                            "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                            "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                            "slug":"columbus-oh",
                            "address":"1500 Polaris Pkwy Space 2252",
                            "zip":'43240',

                            "fivestar":4863,
                            "phone":"+1 614-839-5858",
                            "coverimg":'/assets/mapcard/allinadventures-escape-room-columbus-oh-polaris-fashion-place-mall-hero.jpg',
                            "mall":"Polaris Fashion Place mall",
                            "alt":'allinadventures-escape-room-columbus-oh-polaris-fashion-place-mall-hero',
                            "email":"Store147@Allinadventures.com",
                            "position": { lat: 40.15019562598685, lng: -82.98034309378431}, 
                            "hours":[
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
                          ]
                        },
                        {
                          "id":2,
                          "city":"Mentor",
                          "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                          "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                          "slug":"mentor-oh",
                          "address":"7850 Mentor Ave #1050a",
                          "zip":'44060',

                          "fivestar":4863,
                          "phone":"+1 440-484-5373",
                          "coverimg":'/assets/mapcard/allinadventures-escape-room-mentor-oh-great-lakes-mall-hero.jpg',
                          "mall":"Great Lakes Mall",
                          "alt":'allinadventures-escape-room-mentor-oh-great-lakes-mall',
                          "email":"Store143@Allinadventures.com",
                          "position": { lat: 41.66255323325249, lng: -81.35798410389197},
                          "hours":[
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
                        ]
                      },
                      {
                        "id":3,
                        "city":"Dayton",
                        "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                        "slug":"dayton-oh",
                        "address":"2700 Miamisburg Centerville Rd Space 300",
                        "zip":'45459',

                        "fivestar":4610,
                        "phone":"+1 937-240-0913",
                        "coverimg":'/assets/mapcard/allinadventures-escape-room-dayton-oh-dayton-mall-hero.jpg',
                        "mall":"Dayton Mall",
                        "alt":'allinadventures-escape-room-dayton-oh-dayton-mall-hero',
                        "email":"Store146@Allinadventures.com",
                        "position": { lat: 39.63934536750076, lng: -84.22165216910368},
                        "hours":[
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
                      ]
                    }
                     ]
                    },
                    //========================================== 11 GEORGIA
                    {
                        "id":11,
                        "state":"GA",
                        "state_name":"GEORGIA",
                        "cities":[
                          {
                            "id":1,
                            "city":"Lawrenceville",
                            "city_include":"Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield",
                            "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                            "slug":"lawrenceville-ga",
                            "address":"5900 Sugarloaf Pkwy Unit 134",
                            "zip":'30043',
    
                            "fivestar":"5424",
                            "phone":"+1 678-847-5002",
                            "coverimg":'/assets/mapcard/allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall-hero.jpg',
                            "mall":"Sugarloaf Mills Mall",
                            "alt":'allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall-hero',
                            "email":"Store100@Allinadventures.com",
                            "position": { lat: 33.986421448068036, lng: -84.08483070501663},
                            "hours":[
                               
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
                          ]
                        }
                         ]
                    }
                    //========================================== 11 ga end

                ]

                             
        }
      
    

      

      return data

};


  