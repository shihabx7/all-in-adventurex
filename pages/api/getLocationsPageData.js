import { getALlActivityList } from "./getAllActivityList"
import { getAllEventList } from "./getAllEventList"
import { getVirtualGameSlug } from "./VirtualGames/getVirtualGameSlug"

 export const getLocationsPageData=()=> {
 
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
                                        "publish_status":true,
                                        "city_include":"Our customers come from many surrounding cities, including Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield and many more!",
                                        "entry_guid":"Use the 2nd floor mall entrance between the J.C.Penney and Pottery Barn, take a left at the escalators. We are located on the right side, between Athleta and Zara, across from Banana Republic.",
                                        "address":"1 Crossgates Mall Rd",
                                        "zip":"12203",
                                        "fivestar":"1200+",
                                        "total_rev":"1603",
                                        "avg_rev":"4.7",
                                        "player_escaped":"35K+",
                                        "phone":"+1 518-240-8243",
                                        "b_uid":"4fc2ae1b62734a6e8d9e85cbd613ca0f",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-albany-ny-crossgates-mall-hero.jpg',
                                        "mall":"Crossgates Mall",
                                        "alt":'allinadventures-escape-room-albany-ny-crossgates-mall-hero',
                                        "slug":"albany-ny",
                                        "email":"store103@allinadventures.com",
                                        "mgremail":"mgr103@allinadventures.com",
                                        "position": { lat: 42.68923100209555, lng: -73.84921468465942 },
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
                                        "publish_status":true,
                                        "address":"1 Walden Galleria",
                                        "city_include":"Our customers come from many surrounding cities, including North Tonawanda, Cheektowaga, Medina, Hamburg, Amherst and many more!",
                                        "entry_guid":"Our store is located on the 1st floor between JC Penny's and Macy's, across from Lord and Taylor.",
                                        "zip":"14225", 
                                        "fivestar":"3900+",
                                        "total_rev":"4279",
                                        "avg_rev":"4.9",
                                        "player_escaped":"31K+",
                                        "phone":"+1 716-216-0404",
                                        "b_uid":"544654148f8b4be487ab85731a26457d",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-buffalo-ny-walden-galleria-mall-hero.jpg',
                                        "mall":"Walden Galleria",
                                        "alt":'allinadventures-escape-room-buffalo-ny-walden-galleria-mall-hero',
                                        "slug":"buffalo-ny",
                                        "email":"store108@allinadventures.com",
                                        "mgremail":"mgr108@allinadventures.com",
                                        "position": { lat: 42.914213620049225, lng: -78.76344044602178 },
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
                                        "publish_status":true,
                                        "city_include":"Our customers come from many surrounding cities, including Vernon, Newton, West Nyack, Poughkeepsie, Newburgh and many more!",
                                        "entry_guid":"Our store is located on the 2nd floor. We are between H&M and American Eagle clothing stores.",
                                        "address":"1 Galleria Dr",
                                        "slug":"middletown-ny",
                                        "zip":"10941",
                                        "fivestar":"500+",
                                        "total_rev":"716",
                                        "avg_rev":"4.7",
                                        "player_escaped":"27K+",
                                        "phone":"+1 845-202-9010",
                                        "b_uid":"c78436588d1e4a02a7b15efc3a428a18",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-middletown-ny-galleria-at-crystal-run-mall-hero.jpg',
                                        "mall":"Galleria at Crystal Run",
                                        "alt":'allinadventures-escape-room-middletown-ny-galleria-at-crystal-run-mall-hero',
                                        "email":"store105@allinadventures.com",
                                        "mgremail":"mgr105@allinadventures.com",
                                        "position": { lat: 41.454179533147965, lng: -74.36946970738413}, 
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
                                        "id":4,
                                        "city":"Syracuse",
                                        "publish_status":true,
                                        "city_include":"Our customers come from many surrounding cities, including Auburn, Oneida, Oswego, New York and many more!",
                                        "entry_guid":"Our store is on the 2nd floor right next to Lindt Chocolate shop.  You can use the entrance by the Cheesecake Factory.",
                                        "slug":"syracuse-ny",
                                        "address":"1 Destiny USA Drive",
                                        "zip":"13204",
                                        "fivestar":"2400+",
                                        "total_rev":"2798",
                                        "avg_rev":"4.8",
                                        "player_escaped":"57K+",
                                        "phone":"+1 315-423-5000",
                                        "b_uid":"57c2d1d5139042a8993b262968364733",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-syracuse-ny-destiny-usa-mall-hero.jpg',
                                        "mall":"Destiny USA",
                                        "alt":'allinadventures-escape-room-syracuse-ny-destiny-usa-mall-hero',
                                        "email":"store107@allinadventures.com",
                                        "mgremail":"mgr107@allinadventures.com",
                                        "position": { lat: 43.06821706293749, lng: -76.17159336874649},
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
                                      "publish_status":true,
                                      "city_include":"Our customers come from many surrounding cities, including Belleville, Clayton, Dexter, Oswego, Limerick and many more!",
                                      "entry_guid":"Our Store is located near Sears and next to Fun on the Run arcade.",
                                      "address":"21182 Salmon Run Mall Loop W",
                                      "slug":"watertown-ny",
                                      "zip":"13601",
                                      "fivestar":"300+",
                                      "total_rev":"430",
                                        "avg_rev":"4.7",
                                      "player_escaped":"12K+",
                                      "phone":"+1 315-965-8010",
                                      "b_uid":"6fb541ac4d0445608e5169c95c142791",
                                      "coverimg":'/assets/mapcard/allinadventures-escape-room-watertown-ny-salmon-run-mall-hero.jpg',
                                      "mall":"Salmon Run Mall",
                                      "alt":'allinadventures-escape-room-watertown-ny-salmon-run-mall-hero',
                                      "email":"store106@allinadventures.com",
                                      "mgremail":"mgr106@allinadventures.com",
                                      "position": { lat: 43.977652923527444, lng: -75.95351031534058}, 
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
                                          "open":"11 am",
                                          "close":"6 pm"
                        
                                        }

                                  
                                    ]
                                  },
                                  {
                                    "id":6,
                                    "city":"West Nyack",
                                    "publish_status":true,
                                    "city_include":"Our customers come from many surrounding cities, including Montclair, Massapequa, White Plains, Morristown, Danbury and many more!",
                                    "entry_guid":"Our store is located on the 3rd floor food court level, just across the hall from 5 Below store.",
                                    "slug":"west-nyack-ny",
                                    "address":"1000 Palisades Center Dr",
                                    "zip":"10994",
                                    "fivestar":"1000+ ",
                                    "total_rev":"1317",
                                     "avg_rev":"4.6",
                                    "player_escaped":"46K+",
                                    "phone":"+1 845-208-2919",
                                    "b_uid":"08695bcfdbd0498d8cd25a03361cf80d",
                                    "coverimg":'/assets/mapcard/allinadventures-escape-room-west-nyack-ny-palisades-mall-hero.jpg',
                                    "mall":"Palisades Center",
                                    "alt":'allinadventures-escape-room-west-nyack-ny-palisades-mall',
                                    "email":"store101@allinadventures.com",
                                    "mgremail":"mgr101@allinadventures.com",
                                    "position": { lat: 41.09906394978139, lng: -73.9550745},
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
                                        "close":"7 pm"
                      
                                      }

                                
                                  ]
                                },
                                {
                                  "id":7,
                                  "city":"Poughkeepsie",
                                  "city_include":"Our customers come from many surrounding cities, including Rotterdam, Troy, Clifton Park, Schenectady, Pittsfield and many more!",
                                  "publish_status":true,
                                  "entry_guid":"Upstairs from 110 Grill.",
                                  "slug":"poughkeepsie-ny",
                                  "address":"2001 South Rd",
                                  "zip":"12601",
                                  "fivestar":"200+",
                                  "total_rev":"361",
                                  "avg_rev":"4.8",
                                  "player_escaped":"8K+",
                                  "phone":"+1 845-218-0002",
                                  "b_uid":"08695bcfdbd0498d8cd25a03361cf80d",
                                  "coverimg":'/assets/mapcard/Poughkeepsie-ny-poughkeepsie-galleria.jpg',
                                  "mall":"Poughkeepsie Galleria",
                                  "alt":'allinadventures-escape-room-west-nyack-ny-palisades-mall',
                                  "email":"store149@allinadventures.com",
                                  "mgremail":"mgr149@allinadventures.com",
                                  "position": { lat: 41.62658537585491, lng: -73.9208724},
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
                            "publish_status":true,
                            "city_include":"Our customers come from many surrounding cities, including Chapel Hill, Morrisville, Carrboro, Cary, Apex, Holly Springs, Zebulon, Wake Forest, Hillsborough, Pittsboro and many more!",
                            "entry_guid":"We are right off exit 17 on Interstate-540, and directly off of Capital Blvd. behind Best Buy. We are attached on the outside of the mall next to Barnes & Noble.",
                            "slug":"raleigh-nc",
                            "address":"5959 Triangle Town Blvd",
                            "zip":"27616",
                            "fivestar":"600+",
                            "total_rev":"737",
                            "avg_rev":"4.6",
                            "player_escaped":"15K+",
                            "phone":"+1 919-205-5008",
                            "b_uid":"32cdb7144e66428bbc9af9393a94d362",
                            "coverimg":'/assets/mapcard/allinadventures-escape-room-raleigh-nc-triangle-town-center-mall-hero.jpg',
                            "mall":"Triangle Town Center",
                            "alt":'allinadventures-escape-room-raleigh-nc-triangle-town-center-mall',
                            "email":"store123@allinadventures.com",
                            "mgremail":"mgr123@allinadventures.com",
                            "position": { lat: 35.866883791061504, lng: -78.57422718465942}, 
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
                                "close":"9 pm"
              
                              },
                              {   
                                "day":"saturday",
                                "open":"10 am",
                                "close":"9 pm"
              
                              },
                              {   
                                "day":"sunday",
                                "open":"12 pm",
                                "close":"6 pm"
              
                              }



                        
                             ]
                          },
                        ]
                    },
               //========================================== 2 NORTH CAROLINA end
                    
                    //========================================== 4 MASSACHUSETTS
                    {
                        "id":4,
                        "state":"MA",
                        "state_name":"MASSACHUSETTS",
                        "cities":[
                                    {
                                        "id":1,
                                        "city":"Hadley",
                                        "publish_status":true,
                                        "city_include":"Our customers come from many surrounding cities, including Easthampton, Windsor Locks, Amherst, Gardner, Northampton and many more!",
                                        "entry_guid":"Our store is located between Pinz and Jo~Ann Fabric, across from Body Spa and Elite Tae Kwon Do.",
                                        "slug":"hadley-ma",
                                        "address":"367 Russell St",
                                        "zip":"01035",
                                        "fivestar":"300+",
                                        "total_rev":"402",
                                        "avg_rev":"4.7",
                                        "player_escaped":"15K+",
                                        "phone":"+1 413-825-9777",
                                        "b_uid":"fd585cfcb0ae4d7f8179dd084d3c7f14",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-hadley-ma-hampshire-mall-hero.jpg',
                                        "mall":"Hampshire Mall",
                                        "alt":'allinadventures-escape-room-hadley-ma-hampshire-mall-hero',
                                        "email":"store113@allinadventures.com",
                                        "mgremail":"mgr113@allinadventures.com",
                                        "position": { lat: 42.35706401455254, lng: -72.54730672272471},
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
                                            "open":"12:30 pm",
                                            "close":"6 pm"
                          
                                          }

                                    
                                      ]
                                    },
                                    {
                                      "id":2,
                                      "city":"Holyoke",
                                      "publish_status":true,
                                      "city_include":"Our customers come from many surrounding cities, including Worcester, Williamsburg, Chesterfield, Easthampton and many more!",
                                        "entry_guid":"Our store is located on the 1st floor across from Baby Gap.",
                                      "slug":"holyoke-ma",
                                      "address":"50 Holyoke St",
                                      "zip":"01035",
                                      
                                      "fivestar":"200+",
                                      "total_rev":"361",
                                      "avg_rev":"4.3",
                                      "player_escaped":"17K+",
                                      "phone":"+1 413-200-9777",
                                      "b_uid":"0c3dbc2e3a7340ba9f598fd150cc38f8",
                                      "coverimg":'/assets/mapcard/allinadventures-escape-room-holyoke-ma-holyoke-mall-hero.jpg',
                                      "mall":"Holyoke Mall",
                                      "alt":'allinadventures-escape-room-holyoke-ma-holyoke-mall-hero',
                                      "email":"store114@allinadventures.com",
                                      "mgremail":"mgr114@allinadventures.com",
                                      "position": { lat: 42.16721653698669, lng: -72.6411134349249},
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
                                          "open":"12:30 pm",
                                          "close":"6 pm"
                        
                                        }

                                  
                                    ]
                                  },
                                  {
                                    "id":3,
                                    "city":"Kingston",
                                    "publish_status":true,
                                    "city_include":"Our customers come from many surrounding cities, including Boston, New Bedford, Plymouth, Falmouth, MA and many more!",
                                    "entry_guid":"Our store is located around the corner from the Target entrance, across from Clark's Outlet and next to Victoria's Secret.",
                                    "slug":"kingston-ma",
                                    "address":"101 Kingston Collection Way",
                                    "zip":"02364",
                                    
                                    "fivestar":"200+",
                                    "total_rev":"384",
                                    "avg_rev":"4.5",
                                    "player_escaped":"23K+",
                                    "phone":"+1 781-236-4933",
                                    "b_uid":"18babca8503848fea92d33ed8f45fa83",
                                    "coverimg":'/assets/mapcard/allinadventures-escape-room-kingston-ma-kingston-collection-mall-hero.jpg',
                                    "mall":" Kingston Collection",
                                    "alt":'allinadventures-escape-room-kingston-ma-kingston-collection-mall-hero',
                                    "email":"store102@allinadventures.com",
                                    "mgremail":"mgr102@allinadventures.com",
                                    "position": { lat: 41.971504359907684, lng: -70.71610091534059},
                                    
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
                                  "id":4,
                                  "city":"N. Attleborough",
                                  "publish_status":true,
                                  "city_include":"Our customers come from many surrounding cities, including Auburn, Boston, New Bedford and many more!",
                                   "entry_guid":"Our store is on the 2nd floor near the Macy's store.",
                                  "slug":"n-attleborough-ma",
                                  "address":"999 S Washington St",
                                  "zip":"02760",
                                  
                                  "fivestar":"200+",
                                  "total_rev":"402",
                                  "avg_rev":"4.7",
                                  "player_escaped":"24K+",
                                  "phone":"+1 508-695-3100",
                                  "b_uid":"8b631dac8b8e4614b1479de58de8fd00",
                                  "coverimg":'/assets/mapcard/allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero.jpg',
                                  "mall":"Emerald Square Mall",
                                  "alt":'allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero',
                                  "email":"store110@allinadventures.com",
                                  "mgremail":"mgr110@allinadventures.com",
                                  "position": { lat: 41.94654504785334, lng: -71.35015866136237},
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
                                      "open":"12 pm",
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
                                        "publish_status":true,
                                        "city_include":"Our customers come from many surrounding cities, including New Haven, Stamford, Danbury, Middletown, and many more! ",
                                        "entry_guid":"Customers can find the store fastest via the Target entrance. Head to the lower-level main corridor, take a left and we are on the right side next to Eblens.",
                                        "slug":"milford-ct",
                                        "address":"1201 Boston Post Rd",
                                        "zip":'06460',
                                       
                                        "fivestar":"1100+",
                                        "total_rev":"1266",
                                        "avg_rev":"4.9",
                                        "player_escaped":"23K+",
                                        "phone":"+1 203-290-1916",
                                        "b_uid":"084e7f2381b04d689960cc4161935ed7",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-milford-ct-connecticut-post-mall-hero.jpg',
                                        "mall":"Connecticut Post Mall",
                                        "alt":'allinadventures-escape-room-milford-ct-connecticut-post-mall',
                                        "email":"store109@allinadventures.com",
                                        "mgremail":"mgr109@allinadventures.com",
                                        "position": { lat:41.23564539065722, lng: -73.03691284602178},
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
                                      "publish_status":true,
                                      "city_include":"Our customers come from many surrounding cities, including Hartford, West Hartford, Middletown, Windsor Locks, Bristol, New Britain and many more!",
                                        "entry_guid":"Our Store is located on the 2nd floor, between Spencer's and Sears. The best entrance to use is the mall entrance between Maggie Mcfly's and Sears.",
                                      "slug":"manchester-ct",
                                      "address":"194 Buckland Hills Dr",
                                      "zip":'06042',
                                     
                                      "fivestar":"300+",
                                      "total_rev":"492",
                                      "avg_rev":"4.5",
                                      "player_escaped":"18K+",
                                      "phone":"+1 860-414-3606",
                                      "b_uid":"d9626bc988b940768ee6bd60acda7340",
                                      "coverimg":'/assets/mapcard/allinadventures-escape-room-manchester-ct-buckland-hills-mall-hero.jpg',
                                      "mall":"The Shoppes at Buckland Hills",
                                      "alt":'allinadventures-escape-room-manchester-ct-buckland-hills-mall-hero',
                                      "email":"store121@allinadventures.com",
                                      "mgremail":"mgr121@allinadventures.com",
                                      "position": { lat: 41.80829777324081, lng: -72.5470819}, 
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
                                    "id":3,
                                    "city":"Waterbury",
                                    "publish_status":true,
                                    "city_include":"Our customers come from many surrounding cities, including New Haven, Stamford, West Hartford, Danbury, Norwalk and many more!",
                                    "entry_guid":"Our Store is located on the 1st floor between FYE and Payless across from Mix Box.",
                                    "slug":"waterbury-ct",
                                    "address":"495 Union St",
                                    "zip":'06706',
                                   
                                    "fivestar":"100+",
                                    "total_rev":"149",
                                    "avg_rev":"4.2",
                                    "player_escaped":"7K+",
                                    "phone":"+1 203-303-4414",
                                    "b_uid":"e3952611b64745dcae29ba286cf13d44",
                                    "coverimg":'/assets/mapcard/allinadventures-escape-room-waterbury-ct-brass-mills-mall-hero.jpg',
                                    "mall":"Brass Mills Center",
                                    "alt":'allinadventures-escape-room-waterbury-ct-brass-mills-mall-hero',
                                    "email":"store133@allinadventures.com",
                                    "mgremail":"mgr133@allinadventures.com",
                                    "position": { lat: 41.55057317796164, lng: -73.02589548465942},
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
    //========================================== 3 PENNSYLVANIA
    {
      "id":3,
      "state":"PA",
      "state_name":"PENNSYLVANIA",
      "cities":[
          
                   {
                      "id":1,
                      "city":"Bensalem",
                      "publish_status":true,
                      "city_include":"Our customers come from many surrounding cities, including Philadelphia, King of Prussia, Doylestown, Princeton, NJ and many more!",
                      "entry_guid":"Our store is located in the AMC wing, across from Modell's Sporting Goods.",
                      "slug":"bensalem-pa",
                      "address":"707 Neshaminy Mall",
                      "zip":"19020",
                      "fivestar":"600+",
                      "total_rev":"864",
                      "avg_rev":"4.6",
                      "player_escaped":"15K+",
                      "phone":"+1 267-227-1101",
                      "b_uid":"d32fa93689b248c28ad3c40691e2ada6",
                      "coverimg":'/assets/mapcard/allinadventures-escape-room-bensalem-pa-neshaminy-mall-hero.jpg',
                      "mall":"Neshaminy Mall",
                      "alt":'allinadventures-escape-room-bensalem-pa-neshaminy-mall-hero',
                      "email":"store130@allinadventures.com",
                      "mgremail":"mgr130@allinadventures.com",
                      "position": { lat: 40.13936888915535, lng: -74.95415301534058},
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
                          "open":"11 pm",
                          "close":"8 pm"
        
                        },
                        {   
                          "day":"sunday",
                          "open":"11 pm",
                          "close":"6 pm"
        
                        }

                  
                         ]
                     }
              ]
  },
//========================================== 3 PENNSYLVANIA end
       //========================================== 6 Marryland
                 
                    {
                        "id":6,
                        "state":"MD",
                        "state_name":"MARYLAND",
                        "cities":[
                                    {
                                        "id":1,
                                        "city":"Bowie",
                                        "publish_status":true,
                                        "city_include":"Our customers come from many surrounding cities, including Glenn Dale, Crofton, Greenbelt, South Laurel, Mitchellville, New Carrollton, Odenton, Beltsville, Laurel, East Riverdale, College Park, Kettering, Largo, Hyattsville, Severn and many more!",
                                        "entry_guid":"Our store is between Barnes & Noble and LA Fitness.",
                                        "slug":"bowie-md",
                                        "address":"15421 Emerald Way",
                                        "zip":'20716',
                                         "fivestar":"500+",
                                         "total_rev":"684",
                                        "avg_rev":"4.7",
                                        "player_escaped":"5K+",
                                        "phone":"+1 240-245-6911",
                                        "b_uid":"c291a32e29f54d8dbafe05d862bc3f2c",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-bowie-md-bowie-town-center-mall-hero.jpg',
                                        "mall":"Bowie Town Center",
                                        "alt":'allinadventures-escape-room-bowie-md-bowie-town-center-mall-hero',
                                        "email":"store145@allinadventures.com",
                                        "mgremail":"mgr145@allinadventures.com",
                                        "position": { lat: 38.94490769636057, lng: -76.73640168465941},  
                                        "hours":[
                                          {
                                            "day":"monday",
                                            "open":"2 pm",
                                            "close":"9 pm"
                          
                                          },
                                          {
                                            "day":"tuesday",
                                            "open":"2 pm",
                                            "close":"9 pm"
                          
                                          },
                                          {
                                            "day":"wednesday",
                                            "open":"2 pm",
                                            "close":"9 pm"
                          
                                          },
                                          {
                                            "day":"thursday",
                                            "open":"2 pm",
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
                                      "publish_status":true,
                                      "city_include":"Our customers come from many surrounding cities, including Perry Hall, Rossville, Middle River, Overlea, Carney, Parkville, Essex, Rosedale, Towson, Joppatowne, Edgewood, Dundalk, Edgemere, Baltimore, Mays Chapel and many more!",
                                        "entry_guid":"Our Store is located on the Upper Level next to JC Penny.",
                                      "slug":"white-marsh-md",
                                      "address":"8200 Perry Hall Blvd",
                                      "zip":'21236',
                                       "fivestar":"700+",
                                       "total_rev":"860",
                                       "avg_rev":"4.7",
                                       "player_escaped":"14K+",
                                      "phone":"+1 410-441-5955",
                                      "b_uid":"ad62a4bc27bf471e80eb1eb90aba7cc5",
                                      "coverimg":'/assets/mapcard/allinadventures-escape-room-white-marsh-md-white-marsh-mall-hero.jpg',
                                      "mall":"White Marsh Mall",
                                      "alt":'allinadventures-escape-room-white-marsh-md-white-marsh-mall-hero',
                                      "email":"store118@allinadventures.com",
                                      "mgremail":"mgr118@allinadventures.com",
                                      "position": { lat: 39.376232633607614, lng: -76.4684810846594},
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
                                          "open":"12 pm",
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
                                        "publish_status":true,
                                        "city_include":"Our customers come from many surrounding cities, including South River, Sayreville, North Brunswick, New Brunswick, Highland Park, Old Bridge, Edison, Somerset, Metuchen, Fords, Perth Amboy, South Plainfield, Woodbridge, Iselin, Middlesex and many more!",
                                        "entry_guid":"Our store is between Panera and JC Penny.",
                                        "slug":"east-brunswick-nj",
                                        "address":"755 NJ-18",
                                        "zip":'08816',

                                        "fivestar":"100+",
                                        "total_rev":"142",
                                        "avg_rev":"4.6",
                                        "player_escaped":"3K+",
                                        "phone":"+1 732-201-7285",
                                        "b_uid":"981474b9a9994946afa7fcc7fdcef69d",
                                        "coverimg":'/assets/mapcard/allinadventures-escape-room-east-brunswick-nj-brunswick-square-mall-hero.jpg',
                                        "mall":"Brunswick Square",
                                        "alt":'aallinadventures-escape-room-east-brunswick-nj-brunswick-square-mall',
                                        "email":"store148@allinadventures.com",
                                        "mgremail":"mgr148@allinadventures.com",
                                        "position": { lat: 40.42413145507812, lng: -74.3825894306812}, 
                                        "hours":[
                                          {
                                            "day":"monday",
                                            "open":"12 pm",
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
                                            "open":"12 pm",
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
                                      "publish_status":true,
                                      "city_include":"Our customers come from many surrounding cities, including Andover, Dover, Livingston, Morristown, Newark, New Jersey and many more!",
                                        "entry_guid":"Our store is on the lower level near the mall entrance by JC Penny.",
                                      "slug":"rockaway-nj",
                                      "address":"301 Mt Hope Ave",
                                      "zip":'07866',

                                      "fivestar":"700+",
                                      "total_rev":"402",
                                      "avg_rev":"4.7",
                                      "player_escaped":"22K+",
                                      "phone":"+1 862-244-3062",
                                      "b_uid":"f44827aa62c544f58eb5510b38f95f3c",
                                      "coverimg":'/assets/mapcard/allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall-hero.jpg',
                                      "mall":"Rockaway Townsquare",
                                      "alt":'allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall',
                                      "email":"store112@allinadventures.com",
                                      "mgremail":"mgr112@allinadventures.com",
                                      "position": { lat: 40.90715628555328, lng: -74.55337978465941},
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
                                    "city":"Woodbridge",
                                    "publish_status":true,
                                    "city_include":"Our customers come from many surrounding cities, including Avenel, Colonia, Fords, Iselin, Carteret, Rahway, Perth Amboy, Metuchen, Linden, Clark, Roselle, South Plainfield, Cranford, Edison, Scotch Plains and many more!",
                                    "entry_guid":"Our store is in the lower level of the JCPenney & Boscov wing.",
                                    "slug":"woodbridge-nj",
                                    "address":"250 Woodbridge Center Dr",
                                    "zip":'07095',

                                    "fivestar":"200+",
                                    "total_rev":"387",
                                    "avg_rev":"4.5",
                                    "player_escaped":"14K+",
                                    "phone":"+1 732-351-2772",
                                    "b_uid":"01211af1da0c4ed3b90b346cfd6db1c8",
                                    "coverimg":'/assets/mapcard/allinadventures-escape-room-woodbridge-nj-woodbridge-mall-hero.jpg',
                                    "mall":"Woodbridge Center",
                                    "alt":'allinadventures-escape-room-woodbridge-nj-woodbridge-mall-hero',
                                    "email":"store128@allinadventures.com",
                                    "mgremail":"mgr128@allinadventures.com",
                                    "position": { lat: 40.55608042620422, lng: -74.2976153153406},  
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

                 
                    //========================================== 9 VIRGINIA
                    {
                        "id":9,
                        "state":"VA",
                        "state_name":"VIRGINIA",
                        "cities":[
                          {
                            "id":1,
                            "city":"Roanoke",
                            "publish_status":true,
                            "city_include":"Our customers come from many surrounding cities, including Blacksburg, Christiansburg, Salem and many more!",
                            "entry_guid":"We are inside the mall beside Sears and the food court.",
                            "slug":"roanoke-va",
                            "address":"4802 Valley View Blvd NW",
                            "zip":'24012',

                            "fivestar":"500+",
                            "total_rev":"768",
                            "avg_rev":"4.7",
                            "player_escaped":"19K+",
                            
                            "phone":"+1 540-920-2253",
                            "b_uid":"80da445abe054678b64f5c03def262f0",
                            "coverimg":'/assets/mapcard/allinadventures-escape-room-roanoke-va-valley-view-mall-hero.jpg',
                            "mall":"Valley View Mall",
                            "alt":'allinadventures-escape-room-roanoke-va-valley-view-mall-hero',
                            "email":"store129@allinadventures.com",
                            "mgremail":"mgr129@allinadventures.com",
                            "position": { lat:37.30350364111658, lng: -79.9631108},
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
                                "open":"12 pm",
                                "close":"6 pm"
              
                              }
                          ]
                        }
                                ]
                    },
                      //========================================== 9 VIRGINIA end
                      //========================================== 11 GEORGIA
                    {
                      "id":11,
                      "state":"GA",
                      "state_name":"GEORGIA",
                      "cities":[
                        {
                          "id":1,
                          "city":"Lawrenceville",
                          "publish_status":true,
                          "city_include":"Our customers come from many surrounding cities, including Marietta, Alpharetta, Kennesaw, Loganville, Snellville, Suwanee, Duluth, Lilburn, Sugar Hill, Buford, Norcross, Tucker, Winder, Redan, Doraville,Chamblee, Monroe and many more!",
                          "entry_guid":"Our store is directly across the Bass Pro Shop inside the mall.",
                          "slug":"lawrenceville-ga",
                          "address":"5900 Sugarloaf Pkwy",
                          "zip":'30043',
  
                          "fivestar":"2300+",
                          "total_rev":"2,695",
                          "avg_rev":"4.8",
                          "player_escaped":"24K+",
                          "phone":"+1 678-847-5002",
                          "b_uid":"5cce16b28a96404d898f5d66372a3acc",
                          "coverimg":'/assets/mapcard/allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall-hero.jpg',
                          "mall":"Sugarloaf Mills",
                          "alt":'allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall-hero',
                          "email":"store100@allinadventures.com",
                          "mgremail":"mgr100@allinadventures.com",
                          "position": { lat: 33.98048073987589, lng: -84.0831118},
                          "hours":[
                             
                            {
                              "day":"monday",
                              "open":"10 am",
                              "close":"8 pm"
            
                            },
                            {
                              "day":"tuesday",
                              "open":"10 am",
                              "close":"8 pm"
            
                            },
                            {
                              "day":"wednesday",
                              "open":"10 am",
                              "close":"8 pm"
            
                            },
                            {
                              "day":"thursday",
                              "open":"10 am",
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
                              "close":"7 pm"
            
                            }
                        ]
                      }
                       ]
                  },
                  //========================================== 11 ga end
                    //========================================== 10 OHIO
                    {
                        "id":10,
                        "state":"OH",
                        "state_name":"OHIO",
                        "cities":[
                          {
                            "id":1,
                            "city":"Columbus",
                            "publish_status":true,
                            "city_include":"Our customers come from many surrounding cities, including Bexley, Upper Arlington, Whitehall, Lincoln Village, Gahanna, Grove City, Blacklick Estates, Worthington, Hilliard, Reynoldsburg, Dublin, Westerville, Pickerington, Pataskala, Delaware and many more!",
                            "entry_guid":"We are located inside the mall near Macy's on the upper level.",
                            "slug":"columbus-oh",
                            "address":"1500 Polaris Pkwy",
                            "zip":'43240',

                            "fivestar":"1000+",
                            "total_rev":"1212",
                            "avg_rev":"4.8",
                            "player_escaped":"12K+",
                            
                            "phone":"+1 614-839-5858",
                            "b_uid":"6dae166134cf48e8b54ea03a3801acfe",
                            "coverimg":'/assets/mapcard/allinadventures-escape-room-columbus-oh-polaris-fashion-place-mall-hero.jpg',
                            "mall":" Polaris Fashion Place",
                            "alt":'allinadventures-escape-room-columbus-oh-polaris-fashion-place-mall-hero',
                            "email":"store147@allinadventures.com",
                            "mgremail":"mgr147@allinadventures.com",
                            "position": { lat: 40.145673407245866, lng: -82.98214343068119},
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
                          "publish_status":true,
                          "city_include":"Our customers come from many surrounding cities, including Willoughby, Eastlake, Painesville, Willowick, Wickliffe, Euclid, Richmond Heights, Mayfield Heights, Lyndhurst, South Euclid, Cleveland Heights, East Cleveland, University Heights, Beachwood, Shaker Heights and many ",
                          "entry_guid":"We are located inside the mall near Dick's Sporting Goods.",
                          "slug":"mentor-oh",
                          "address":"7850 Mentor Ave",
                          "zip":'44060',

                          "fivestar":"200+",
                          "total_rev":"259",
                          "avg_rev":"4.7",
                          "player_escaped":"2K+",
                          "phone":"+1 440-484-5373",
                          "b_uid":"19f20806ba7d4a839789712224251bf7",
                          "coverimg":'/assets/mapcard/allinadventures-escape-room-mentor-oh-great-lakes-mall-hero.jpg',
                          "mall":"Great Lakes Mall",
                          "alt":'allinadventures-escape-room-mentor-oh-great-lakes-mall',
                          "email":"store143@allinadventures.com",
                          "mgremail":"mgr143@allinadventures.com",
                          "position": { lat: 41.6560461813886641, lng: -81.36200461534058}, 
                          "hours":[
                            {
                              "day":"monday",
                              "open":"Closed",
                              "close":" "
            
                            },
                            {
                              "day":"tuesday",
                              "open":"Closed",
                              "close":" "
            
                            },
                            {
                              "day":"wednesday",
                              "open":"Closed",
                              "close":" "
            
                            },
                            {
                              "day":"thursday",
                              "open":"4 pm",
                              "close":"8 pm"
            
                            },
                            {   
                              "day":"friday",
                              "open":"4 pm",
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
                        "id":3,
                        "city":"Dayton",
                        "publish_status":true,
                        "city_include":"Our customers come from many surrounding cities, including Riverside, Kettering, West Carrollton City, Huber Heights, Trotwood, Beavercreek, Vandalia, Centerville, Miamisburg, Englewood, Fairborn, Clayton, Tipp City, Springboro, Xenia and many more!",
                        "entry_guid":"We are located inside the Dayton Mall near Space 300.",
                        "slug":"dayton-oh",
                        "address":"2700 Miamisburg Centerville Rd",
                        "zip":'45459',

                        "fivestar":"300+",
                        "total_rev":"415",
                        "avg_rev":"4.7",
                        "player_escaped":"2K+",
                        "phone":"+1 937-240-0913",
                        "b_uid":"961de1087405471191a519e4f6518111",
                        "coverimg":'/assets/mapcard/allinadventures-escape-room-dayton-oh-dayton-mall-hero.jpg',
                        "mall":"Dayton Mall",
                        "alt":'allinadventures-escape-room-dayton-oh-dayton-mall-hero',
                        "email":"store146@allinadventures.com",
                        "mgremail":"mgr146@allinadventures.com",
                        "position": { lat: 39.634435826032885, lng: -84.22006898465943},
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
                     //========================================== 10 OHIO end
                  

                ],
               
        }

      return data

};


  