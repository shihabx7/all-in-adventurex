import { getTotal } from "./AllDataList/getTotal"



export const getAboutUs=async()=>{

   const td=await getTotal()
    
    

    const aboutPageData={
        "locationlist":td.locationlist,
         "activitylistSlug":td.activitylistSlug,
          "eventlistSlug":td.eventlistSlug,
          "virtualgameListSlug":td.virtualgameSlug,
        "pagemeta":{
            
            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            
            "pagetitle":"ABOUT ALL IN ADVENTURES",
            "pagesubtitle":"Experience fun activities, escape rooms, game show rooms, beat the seat and axe throwing with locations throughout the U.S.",
           
            "coverimageL":"/assets/gn-desktop-hero/allinadventures-about-us-hero.jpg",
            "coverimageM":"/assets/gn-mobile-hero/allinadventures-about-us-hero.jpg",
            "totalLocations":getTotal().totalLocations,
        },
        "team_members":[
            {
                "id":1,
                "name":"John Reichel",
                "designation":"Founder/CEO",
                "img":"/assets/team-member/John-Reichel.png"
            },
            {
                "id":2,
                "name":"Chetan Patel",
                "designation":"President",
                "img":"/assets/team-member/Chetan-Patel.png"
            },
            {
                "id":3,
                "name":"Sara Reshoft",
                "designation":"Vice President of Planning and Facilities",
                "img":"/assets/team-member/Sara-Reshoft.png"
            },
            {
                "id":4,
                "name":"Jennifer Reichel",
                "designation":"Human Resources Specialist",
                "img":"/assets/team-member/Jen-Reichel.png"
            },
            {
                "id":5,
                "name":"Beth Palmer",
                "designation":"Director of Employee Development",
                "img":"/assets/team-member/Beth-Palmer.png"
            },
            {
                "id":6,
                "name":"John Reshoft",
                "designation":"Director of Construction and Facilities",
                "img":"/assets/team-member/John-Reshoft.png"
            },
            {
                "id":7,
                "name":"Brian Capps",
                "designation":"Director of Game Development",
                "img":"/assets/team-member/Brian-Capps.png"
            },
            {
                "id":8,
                "name":"Jordan Pursell",
                "designation":"Regional Manager",
                "img":"/assets/team-member/Jordan-Pursell.png"
            },
            {
                "id":9,
                "name":"Bruce Seide",
                "designation":"Regional Manager",
                "img":"/assets/team-member/Bruce-Seide.png"
            },
            {
                "id":10,
                "name":"Adam Spink",
                "designation":"Regional Manager",
                "img":"/assets/team-member/Adam-Spink.png"
            },

        ]
    }
    return aboutPageData

}


const appdata={
    "entities": [
        {
            "googlePlaceId": "ChIJuxg7Xc503okRxZ1LxvkZ8nA",
            "address": {
                "line1": "1 Crossgates Mall",
                "line2": "D212",
                "city": "Albany",
                "region": "NY",
                "postalCode": "12203",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Crossgates Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 42.651725,
                "longitude": -73.755093
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/albany-ny/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/albany-ny/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/albany-ny/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/2163224710622319",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 42.689446,
                "longitude": -73.850414
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "NY",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+15182408243",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/albany-ny/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 42.68943712811628,
                "longitude": -73.85038449570082
            },
            "yextRoutableCoordinate": {
                "latitude": 42.68806391985986,
                "longitude": -73.8522448804463
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "gwy23l",
                "id": "103",
                "timestamp": "2022-11-18T21:40:09",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJiz-TgebpwokRElXoiNqtbeE",
            "additionalHoursText": "We are OPEN on Easter Sunday!!!",
            "address": {
                "line1": "3681 Palisades Center Drive",
                "city": "West Nyack",
                "region": "NY",
                "postalCode": "10994",
                "countryCode": "US"
            },
            "description": "Our Escape the Mystery Room location in Palisades Center offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "21:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "19:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "Escape the Mystery Room",
            "cityCoordinate": {
                "latitude": 41.092089,
                "longitude": -73.972029
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/west-nyack-ny/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/west-nyack-ny/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/west-nyack-ny/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/Mz3RnbpMZKhXrfNlUfUtMVL1zuQp-4exX-1lni01qHc/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27912752_1600810536669612_5102673362505763482_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=8iJvfdaMZQ0AX-o7UA0&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9827594dc8c79d9c7c3714b71e946960&oe=5F6C4723"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/1367817029968965",
            "facebookParentPageId": "1436877276385787",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 41.0989831,
                "longitude": -73.9550745
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "NY",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+18452082919",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "APPLEPAY",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "SAMSUNGPAY",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/west-nyack-ny/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 41.0989831,
                "longitude": -73.9550745
            },
            "yextRoutableCoordinate": {
                "latitude": 41.098282264642215,
                "longitude": -73.95350880442874
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "xjmGWr",
                "id": "101",
                "timestamp": "2022-11-18T22:18:47",
                "labels": [
                    "107529"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJqTscPBa99YgRuujsmSJMn54",
            "landingPageUrl": "https://mysteryroom.com/locations/lawrenceville-ga/",
            "address": {
                "line1": "5900 Sugarloaf Parkway",
                "line2": "Unit 134",
                "city": "Lawrenceville",
                "region": "GA",
                "postalCode": "30043",
                "countryCode": "US"
            },
            "description": "Our Escape the Mystery Room location in Sugarloaf Mills Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "10:00",
                            "end": "21:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "10:00",
                            "end": "21:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "19:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "Escape the Mystery Room",
            "cityCoordinate": {
                "latitude": 33.950476,
                "longitude": -83.989802
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://mysteryroom.com/locations/lawrenceville-ga/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/lawrenceville-ga/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/lawrenceville-ga/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/B6TQn4ZVLg9eCj8oMFQK3e3_BVGoP-8og1RxC3XgsRU/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/s720x720/31250417_2024635911197369_4660992947360104448_o.jpg?_nc_cat=103&_nc_sid=dd9801&_nc_ohc=FfchbGAIvnIAX_Ott5M&_nc_ht=scontent-iad3-1.xx&tp=7&oh=f537a5d2f5ce49b7940019f9f1ab2809&oe=5F6C0922"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/1836793289981633",
            "facebookParentPageId": "1436877276385787",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 33.9811233,
                "longitude": -84.079501
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "GA",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+16788475002",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "ANDROIDPAY",
                "APPLEPAY",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/lawrenceville-ga/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 33.98110773097599,
                "longitude": -84.0795412331352
            },
            "yextRoutableCoordinate": {
                "latitude": 33.986077253575,
                "longitude": -84.0802541866196
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "MNMqO8",
                "id": "100",
                "timestamp": "2022-11-18T22:19:29",
                "labels": [
                    "107529"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJy_lMjV-75IkRvfGB0RHQtIs",
            "address": {
                "line1": "1 Kingston Collection Way",
                "line2": "Unit B106",
                "city": "Kingston",
                "region": "MA",
                "postalCode": "02364",
                "countryCode": "US"
            },
            "description": "Our Escape the Mystery Room location in Kingston Collection offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "isClosed": true
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "13:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "sunday": {
                    "isClosed": true
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "Escape the Mystery Room",
            "cityCoordinate": {
                "latitude": 41.979405,
                "longitude": -70.744813
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/kingston-ma/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/kingston-ma/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/kingston-ma/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/srfKMb1hnEJ5VGX_2ACm3zAJBUqBZVeISnokpudat38/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27788269_189101441691561_6738497821469257125_o.jpg?_nc_cat=109&_nc_sid=dd9801&_nc_ohc=MQajrD8TXQwAX-BqosO&_nc_ht=scontent-iad3-1.xx&tp=7&oh=8aa77ac481437675f24cee124eb2f331&oe=5F690684"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/104204020181304",
            "facebookParentPageId": "1436877276385787",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 41.96917667,
                "longitude": -70.71633867
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "MA",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+17812364933",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/kingston-ma/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 41.96918065846988,
                "longitude": -70.71630380128282
            },
            "yextRoutableCoordinate": {
                "latitude": 41.96943294782545,
                "longitude": -70.71367777141592
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "kDz2wk",
                "id": "102",
                "timestamp": "2022-11-18T22:19:53",
                "labels": [
                    "107529"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJaVKs53bMRIYRUVHDCxSD1D4",
            "additionalHoursText": "Location permanently CLOSED",
            "address": {
                "line1": "3220 Feathergrass Court",
                "line2": "#128",
                "city": "Austin",
                "region": "TX",
                "postalCode": "78758",
                "countryCode": "US"
            },
            "description": "This location is permanently CLOSED-\n\nOur Escape the Mystery Room location in The Domain offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "isClosed": true
                },
                "tuesday": {
                    "isClosed": true
                },
                "wednesday": {
                    "isClosed": true
                },
                "thursday": {
                    "isClosed": true
                },
                "friday": {
                    "isClosed": true
                },
                "saturday": {
                    "isClosed": true
                },
                "sunday": {
                    "isClosed": true
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "Escape the Mystery Room- CLOSED",
            "cityCoordinate": {
                "latitude": 30.268735,
                "longitude": -97.745209
            },
            "closed": true,
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/austin-tx/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/austin-tx/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/austin-tx/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/IRHmjN4P9zYGzGTpuoy0yv2mIa4QwqSc1oaaxn_v_Dk/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27797917_572747046418851_5735531982918040998_o.jpg?_nc_cat=101&_nc_sid=dd9801&_nc_ohc=C5YSzeqaLDgAX80YbWj&_nc_ht=scontent-iad3-1.xx&tp=7&oh=6f400e5be52b2b146a76a1f20fc29179&oe=5F6C3F60"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/443142082712682",
            "facebookParentPageId": "1436877276385787",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Location CLOSED",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 30.3955929,
                "longitude": -97.72749739999999
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "TX",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+15122566623",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/Chicago",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 30.39555704002525,
                "longitude": -97.72752019877662
            },
            "yextRoutableCoordinate": {
                "latitude": 30.39584849712277,
                "longitude": -97.72840485939452
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "QjWq5G",
                "id": "104",
                "timestamp": "2022-09-25T20:00:38",
                "labels": [
                    "107529"
                ],
                "folderId": "cLOSED",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-06:00"
        },
        {
            "googlePlaceId": "ChIJTchRFyzy2YkRPPLmOXKooyo",
            "address": {
                "line1": "9090 Destiny USA Dr",
                "line2": "K201",
                "city": "Syracuse",
                "region": "NY",
                "postalCode": "13204",
                "countryCode": "US"
            },
            "description": "Our Escape the Mystery Room location in the Destiny Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "Escape the Mystery Room",
            "cityCoordinate": {
                "latitude": 43.050831,
                "longitude": -76.147375
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/syracuse-ny/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/syracuse-ny/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/syracuse-ny/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/LVgkxlzzvnCNplhTEOtYszvzJlDGCHYVVT59Evrfko0/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27788592_1838273296246181_8854177053135530017_o.jpg?_nc_cat=104&_nc_sid=dd9801&_nc_ohc=yfTNQsVOdT4AX_-79A2&_nc_ht=scontent-iad3-1.xx&tp=7&oh=d44709fbc3cfd07bca1138ce856b0a6d&oe=5F6C29B8"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/643241725871481",
            "facebookParentPageId": "1436877276385787",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 43.069073,
                "longitude": -76.172646
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "NY",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+13154235000",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "ANDROIDPAY",
                "APPLEPAY",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/syracuse-ny/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 43.06908965731516,
                "longitude": -76.17258967361067
            },
            "yextRoutableCoordinate": {
                "latitude": 43.07224107274272,
                "longitude": -76.17142737747062
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "7DqRm8",
                "id": "107",
                "timestamp": "2022-11-18T22:20:19",
                "labels": [
                    "107529"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJK0nCOylu2IkRxxYIjtbUQqQ",
            "address": {
                "line1": "21182 Salmon Run Mall Loop W.",
                "line2": "Suite D",
                "city": "Watertown",
                "region": "NY",
                "postalCode": "13601",
                "countryCode": "US"
            },
            "description": "Our Escape the Mystery Room location in Salmon Run mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "Escape the Mystery Room",
            "cityCoordinate": {
                "latitude": 43.975084,
                "longitude": -75.911056
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/watertown-ny/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/watertown-ny/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/watertown-ny/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/FrTNlqoC_93qqJ4JHZybjyiyvoelHzJkMjeYIcHi4jc/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27748050_1012422252229343_9071742158341356407_o.jpg?_nc_cat=104&_nc_sid=dd9801&_nc_ohc=KyqdHxzorEEAX99YWbl&_nc_ht=scontent-iad3-1.xx&tp=7&oh=71f6616bef8c363e625a07dc5a983479&oe=5F6BE128"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/854527834685453",
            "facebookParentPageId": "1436877276385787",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 43.9774268,
                "longitude": -75.9526377
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "NY",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+13159658010",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/watertown-ny/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 43.97814204222318,
                "longitude": -75.9533939774241
            },
            "yextRoutableCoordinate": {
                "latitude": 43.97707760863782,
                "longitude": -75.951349954372
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "W95aNq",
                "id": "106",
                "timestamp": "2022-11-18T22:20:43",
                "labels": [
                    "107529"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJiamJ670M04kRnATe_FP3GpM",
            "address": {
                "line1": "1 Walden Galleria",
                "line2": "108B",
                "city": "Buffalo",
                "region": "NY",
                "postalCode": "14225",
                "countryCode": "US"
            },
            "description": "Our Escape the Mystery Room location in the Walden Gallerial offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "18:00"
                        }
                    ],
                    "isClosed": false
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "Escape the Mystery Room",
            "cityCoordinate": {
                "latitude": 42.886875,
                "longitude": -78.877875
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/buffalo-ny/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/buffalo-ny/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/buffalo-ny/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/5D2lqyjEAa1rD3fR50C0OzGSQRFq2vJhbgIwNo-Pn2Y/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/30425029_2121027884785966_4009923592812052483_o.jpg?_nc_cat=103&_nc_sid=dd9801&_nc_ohc=OGXn6rBGamAAX-3iYWc&_nc_ht=scontent-iad3-1.xx&tp=7&oh=ba19a8fd56318ae762deaaf5da983873&oe=5F6BABA0"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/1945324769022946",
            "facebookParentPageId": "1436877276385787",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 42.913563,
                "longitude": -78.76258
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "NY",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+17162160404",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "APPLEPAY",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "SAMSUNGPAY",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/buffalo-ny/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 42.913573687915765,
                "longitude": -78.76274269660895
            },
            "yextRoutableCoordinate": {
                "latitude": 42.91635296852918,
                "longitude": -78.76263013959571
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "ymRbW9",
                "id": "108",
                "timestamp": "2022-11-18T22:21:17",
                "labels": [
                    "107529"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJvbQVehktw4kR_5WQJyhK8gI",
            "address": {
                "line1": "1 Galleria Drive",
                "line2": "Suite 211",
                "city": "Middletown",
                "region": "NY",
                "postalCode": "10941",
                "countryCode": "US"
            },
            "description": "Our Escape the Mystery Room location in the Galleria at Crystal Run offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "19:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "19:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "19:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "Escape the Mystery Room",
            "cityCoordinate": {
                "latitude": 41.448414,
                "longitude": -74.42581
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/middletown-ny/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/middletown-ny/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/middletown-ny/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/LVgkxlzzvnCNplhTEOtYszvzJlDGCHYVVT59Evrfko0/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27788592_1838273296246181_8854177053135530017_o.jpg?_nc_cat=104&_nc_sid=dd9801&_nc_ohc=yfTNQsVOdT4AX_-79A2&_nc_ht=scontent-iad3-1.xx&tp=7&oh=d44709fbc3cfd07bca1138ce856b0a6d&oe=5F6C29B8"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/596168740579213",
            "facebookParentPageId": "1436877276385787",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 41.4522163,
                "longitude": -74.3693251
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "NY",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+18452029010",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "APPLEPAY",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "SAMSUNGPAY",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/middletown-ny/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 41.452229006575095,
                "longitude": -74.36860595827537
            },
            "yextRoutableCoordinate": {
                "latitude": 41.451001821651495,
                "longitude": -74.36930245524057
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "GNBqav",
                "id": "105",
                "timestamp": "2022-11-18T22:22:46",
                "labels": [
                    "107529"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJYUelFVd06IkRQ25xbocqD2g",
            "address": {
                "line1": "1201 Boston Post Rd.",
                "line2": "Suite 1220",
                "city": "Milford",
                "region": "CT",
                "postalCode": "06460",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Connecticut Post Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "10:00",
                            "end": "21:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 41.343773,
                "longitude": -72.951273
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/milford-ct/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/milford-ct/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/milford-ct/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/156046991682277",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 41.2359938,
                "longitude": -73.0355424
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "CT",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+12032901916",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/milford-ct/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 41.23599279148809,
                "longitude": -73.03555849325409
            },
            "yextRoutableCoordinate": {
                "latitude": 41.237149946331535,
                "longitude": -73.0377377391736
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "JNEq99",
                "id": "109",
                "timestamp": "2022-11-18T21:41:30",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJhcaorIln5IkR5Vr3jcfYytk",
            "address": {
                "line1": "999 South Washington Street",
                "line2": "W213",
                "city": "North Attleborough",
                "region": "MA",
                "postalCode": "02760",
                "countryCode": "US"
            },
            "description": "Our Escape the Mystery Room location in the Emerald Square Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "Escape the Mystery Room",
            "cityCoordinate": {
                "latitude": 41.98072052001953,
                "longitude": -71.33296203613281
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/n-attleborough-ma/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/n-attleborough-ma/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/n-attleborough-ma/",
                "linkType": "OTHER"
            },
            "facebookOverrideCity": "North Attleboro",
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/sy-JSvG5_PB5mcliAWm4wxeD7fMnfoJ7iz9qLyqtBdw/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27798055_1965396353491752_4762501978084168663_o.jpg?_nc_cat=106&_nc_sid=dd9801&_nc_ohc=gXkaQXSe1ZIAX-T577B&_nc_ht=scontent-iad3-1.xx&tp=7&oh=90717f64ede5ec05447f320ed6028ee4&oe=5F6A596E"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/1585445804820144",
            "facebookParentPageId": "1436877276385787",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 41.946373,
                "longitude": -71.350058
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "MA",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+15086953100",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/n-attleborough-ma/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 41.94633609343829,
                "longitude": -71.35002581349183
            },
            "yextRoutableCoordinate": {
                "latitude": 41.944201163448156,
                "longitude": -71.34803561101555
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "rqdGo3",
                "id": "110",
                "timestamp": "2022-11-18T22:23:19",
                "labels": [
                    "107529"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJb66XXJLR5okRXo6wmC6sZck",
            "address": {
                "line1": "367 Russell St.",
                "line2": "A07",
                "city": "Hadley",
                "region": "MA",
                "postalCode": "01035",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Hampshire Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "12:30",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 42.356804,
                "longitude": -72.576613
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/hadley-ma/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/hadley-ma/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/hadley-ma/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/1844342659161054",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 42.356339,
                "longitude": -72.54771
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "MA",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+14138259777",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/hadley-ma/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 42.356324938962466,
                "longitude": -72.54771533353215
            },
            "yextRoutableCoordinate": {
                "latitude": 42.359247633215624,
                "longitude": -72.54767109670935
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "zkRDGE",
                "id": "113",
                "timestamp": "2022-11-18T21:42:18",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJjxDceFgKw4kRgSVDKaDW5PQ",
            "address": {
                "line1": "301 Mount Hope Ave",
                "line2": "Suite 1001c",
                "city": "Rockaway",
                "region": "NJ",
                "postalCode": "07866",
                "countryCode": "US"
            },
            "description": "Our Escape the Mystery Room location in the Rockaway Town Square Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "21:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "21:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "Escape the Mystery Room",
            "cityCoordinate": {
                "latitude": 40.960111,
                "longitude": -74.501551
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/rockaway-nj/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/rockaway-nj/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/rockaway-nj/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/L9k3qM_pkUnUhG2QROW1cVGhCdBFTKcksSnjlU7wzsQ/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27747623_1460565027374575_4496043370295639727_o.jpg?_nc_cat=103&_nc_sid=dd9801&_nc_ohc=VxkFdw21R6YAX_BFiO5&_nc_ht=scontent-iad3-1.xx&tp=7&oh=375bf05d0acae358c08de224e0dfab3e&oe=5F6959E2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/1200035066760907",
            "facebookParentPageId": "1436877276385787",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 40.9070752,
                "longitude": -74.5534227
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "NJ",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+18622035394",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/rockaway-nj/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 40.9070336436146,
                "longitude": -74.55347902638931
            },
            "yextRoutableCoordinate": {
                "latitude": 40.90655242031158,
                "longitude": -74.54685623100671
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "5P8RkP",
                "id": "112",
                "timestamp": "2022-11-18T22:24:02",
                "labels": [
                    "107529"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJMdHbxZ_e5okR8-xIADT8zS8",
            "address": {
                "line1": "50 Holyoke Street",
                "line2": "F292",
                "city": "Holyoke",
                "region": "MA",
                "postalCode": "01040",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Holyoke Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "12:30",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 42.214367,
                "longitude": -72.636802
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/holyoke-ma/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/holyoke-ma/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/holyoke-ma/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/449555162089106",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 42.167404,
                "longitude": -72.641577
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "MA",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+14132009777",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/holyoke-ma/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 42.167403005991254,
                "longitude": -72.64159711656761
            },
            "yextRoutableCoordinate": {
                "latitude": 42.167796403157205,
                "longitude": -72.63975120715297
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "PO7qjb",
                "id": "114",
                "timestamp": "2022-11-18T22:01:33",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJr2ltJz0IyIkRGQ5TWpCKWLw",
            "address": {
                "line1": "8200 Perry Hall Blvd.",
                "city": "Baltimore",
                "region": "MD",
                "postalCode": "21236",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in White Marsh Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 39.29058074951172,
                "longitude": -76.60926055908203
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/white-marsh-md/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/white-marsh-md/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/white-marsh-md/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/1554153291325534",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 39.374934,
                "longitude": -76.467573
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "MD",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+14104415955",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/white-marsh-md/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 39.37491808869516,
                "longitude": -76.46762262086678
            },
            "yextRoutableCoordinate": {
                "latitude": 39.374824634452224,
                "longitude": -76.47252692238766
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "jbr2jy",
                "id": "118",
                "timestamp": "2022-11-18T22:02:59",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJm_1kTpU_z4kR1Ikn-lVTOYU",
            "address": {
                "line1": "1 Susquehanna Mall Dr.",
                "line2": "Space A13",
                "city": "Selinsgrove",
                "region": "PA",
                "postalCode": "17870",
                "countryCode": "US"
            },
            "description": "This location is CLOSED- Our All In Adventures location in Susquehanna Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "isClosed": true
                },
                "tuesday": {
                    "isClosed": true
                },
                "wednesday": {
                    "isClosed": true
                },
                "thursday": {
                    "isClosed": true
                },
                "friday": {
                    "isClosed": true
                },
                "saturday": {
                    "isClosed": true
                },
                "sunday": {
                    "isClosed": true
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms- CLOSED",
            "cityCoordinate": {
                "latitude": 40.825914,
                "longitude": -76.857577
            },
            "closed": true,
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/selinsgrove-pa/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/selinsgrove-pa/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/selinsgrove-pa/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/1252778694849798",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 40.8244628,
                "longitude": -76.8493481
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "PA",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+15702155766",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/selinsgrove-pa/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 40.8244597554942,
                "longitude": -76.84937358098564
            },
            "yextRoutableCoordinate": {
                "latitude": 40.82369603128891,
                "longitude": -76.84745505087886
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "25wm7o",
                "id": "119",
                "timestamp": "2022-08-02T14:41:45",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJVyUFvNq1wokRB-OcgLFxIhM",
            "address": {
                "line1": "650 Lee Blvd Space",
                "line2": "Space F9",
                "city": "Yorktown Heights",
                "region": "NY",
                "postalCode": "10598",
                "countryCode": "US"
            },
            "description": "This location has been permanently CLOSED",
            "hours": {
                "monday": {
                    "isClosed": true
                },
                "tuesday": {
                    "isClosed": true
                },
                "wednesday": {
                    "isClosed": true
                },
                "thursday": {
                    "isClosed": true
                },
                "friday": {
                    "isClosed": true
                },
                "saturday": {
                    "isClosed": true
                },
                "sunday": {
                    "isClosed": true
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms- CLOSED",
            "cityCoordinate": {
                "latitude": 41.287329,
                "longitude": -73.790284
            },
            "closed": true,
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/yorktown-heights-ny/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/yorktown-heights-ny/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/yorktown-heights-ny/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/1887375208251189",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 41.3286166,
                "longitude": -73.8077192
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "NY",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+19142661555",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/yorktown-heights-ny/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 41.32858538046579,
                "longitude": -73.80780637179296
            },
            "yextRoutableCoordinate": {
                "latitude": 41.327164625614735,
                "longitude": -73.80868810273479
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "XybqNr",
                "id": "120",
                "timestamp": "2022-08-02T14:46:18",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJA0sLQb5X5okRxqbdxH7ECo0",
            "address": {
                "line1": "194 Buckland Hills Dr.",
                "line2": "Space 2002",
                "city": "Manchester",
                "region": "CT",
                "postalCode": "06042",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Buckland Hills Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "21:00"
                        }
                    ],
                    "isClosed": false
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "18:00"
                        }
                    ],
                    "isClosed": false
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 41.76856994628906,
                "longitude": -72.52066040039062
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/manchester-ct/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/manchester-ct/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/manchester-ct/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/1162849023820038",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Check out our new LIVE VIRTUAL Escape Room",
                "url": "http://www.virtualmysteryroom.com"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/OpiVKJ1uknVwk-mV6WyoT3m7jkIrvczglOocncVKBHQ/1430x757.png",
                        "width": 1430,
                        "height": 757,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/OpiVKJ1uknVwk-mV6WyoT3m7jkIrvczglOocncVKBHQ/619x327.png",
                                "width": 619,
                                "height": 327
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/OpiVKJ1uknVwk-mV6WyoT3m7jkIrvczglOocncVKBHQ/600x317.png",
                                "width": 600,
                                "height": 317
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/OpiVKJ1uknVwk-mV6WyoT3m7jkIrvczglOocncVKBHQ/196x103.png",
                                "width": 196,
                                "height": 103
                            }
                        ]
                    },
                    "description": "Virtual Escape Room"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/nLvllFANaKClOhAiihEgqWl5I0OuJczzyrSe_gAjI8M/1428x751.png",
                        "width": 1428,
                        "height": 751,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/nLvllFANaKClOhAiihEgqWl5I0OuJczzyrSe_gAjI8M/619x325.png",
                                "width": 619,
                                "height": 325
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/nLvllFANaKClOhAiihEgqWl5I0OuJczzyrSe_gAjI8M/600x315.png",
                                "width": 600,
                                "height": 315
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/nLvllFANaKClOhAiihEgqWl5I0OuJczzyrSe_gAjI8M/196x103.png",
                                "width": 196,
                                "height": 103
                            }
                        ]
                    },
                    "description": "Virtual Escape Room"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/XB1fDfUff9eafUEHlbFnvSn8GuXtScM4CKjUx2rfG9s/1429x755.png",
                        "width": 1429,
                        "height": 755,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/XB1fDfUff9eafUEHlbFnvSn8GuXtScM4CKjUx2rfG9s/619x327.png",
                                "width": 619,
                                "height": 327
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/XB1fDfUff9eafUEHlbFnvSn8GuXtScM4CKjUx2rfG9s/600x317.png",
                                "width": 600,
                                "height": 317
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/XB1fDfUff9eafUEHlbFnvSn8GuXtScM4CKjUx2rfG9s/195x103.png",
                                "width": 195,
                                "height": 103
                            }
                        ]
                    },
                    "description": "Virtual Escape Room"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/fIcxw47LJsEZD0mFtOKPmgKZctWpuSHdx0Uv6rCodMU/1430x749.png",
                        "width": 1430,
                        "height": 749,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/fIcxw47LJsEZD0mFtOKPmgKZctWpuSHdx0Uv6rCodMU/619x324.png",
                                "width": 619,
                                "height": 324
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/fIcxw47LJsEZD0mFtOKPmgKZctWpuSHdx0Uv6rCodMU/600x314.png",
                                "width": 600,
                                "height": 314
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/fIcxw47LJsEZD0mFtOKPmgKZctWpuSHdx0Uv6rCodMU/196x102.png",
                                "width": 196,
                                "height": 102
                            }
                        ]
                    },
                    "description": "Virtual Escape Room"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 41.80721630000001,
                "longitude": -72.5460392
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "alternateText": "Black Ops Room",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "CT",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+18604143606",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/manchester-ct/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 41.80717731369149,
                "longitude": -72.5460016490738
            },
            "yextRoutableCoordinate": {
                "latitude": 41.80956322552176,
                "longitude": -72.54767638388569
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "Z40oMm",
                "id": "121",
                "timestamp": "2022-11-18T22:04:37",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJ9YSANOJZrIkRMjidQFrtx7Q",
            "address": {
                "line1": "5959 Triangle Town Blvd",
                "line2": "Space EU 2113",
                "city": "Raleigh",
                "region": "NC",
                "postalCode": "27616",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Triangle Town Center offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "21:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "10:00",
                            "end": "21:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 35.779748,
                "longitude": -78.643414
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/raleigh-nc/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/raleigh-nc/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/raleigh-nc/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/426808511036782",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 35.86662,
                "longitude": -78.575704
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "NC",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+19192055008",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "APPLEPAY",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "SAMSUNGPAY",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/raleigh-nc/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 35.866576140959545,
                "longitude": -78.57594446696649
            },
            "yextRoutableCoordinate": {
                "latitude": 35.86688247313381,
                "longitude": -78.57165472054596
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "o4R2l3",
                "id": "123",
                "timestamp": "2022-11-18T22:05:32",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJU_yohohjYIgRQ353AOblzLE",
            "address": {
                "line1": "2100 Hamilton Pl Blvd",
                "line2": "Suite 274",
                "city": "Chattanooga",
                "region": "TN",
                "postalCode": "37421",
                "countryCode": "US"
            },
            "description": "This location has been permanently CLOSED",
            "hours": {
                "monday": {
                    "isClosed": true
                },
                "tuesday": {
                    "isClosed": true
                },
                "wednesday": {
                    "isClosed": true
                },
                "thursday": {
                    "isClosed": true
                },
                "friday": {
                    "isClosed": true
                },
                "saturday": {
                    "isClosed": true
                },
                "sunday": {
                    "isClosed": true
                },
                "reopenDate": "2025-01-01"
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms - CLOSED",
            "cityCoordinate": {
                "latitude": 35.063642,
                "longitude": -85.254824
            },
            "closed": true,
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "linkType": "OTHER",
                "link": "https://allinadventures.com"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "linkType": "OTHER",
                "link": "https://allinadventures.com"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 35.0384592,
                "longitude": -85.1542558
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "TN",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+14233770066",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 35.0385162986797,
                "longitude": -85.15424104785042
            },
            "yextRoutableCoordinate": {
                "latitude": 35.03946175468946,
                "longitude": -85.15566245705364
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "9A9y2G",
                "id": "124",
                "timestamp": "2021-11-29T14:05:47",
                "labels": [
                    "107528"
                ],
                "folderId": "cLOSED",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJJ_JfmKXZxIkRhUi7DDZ2neA",
            "address": {
                "line1": "100 Viewmont Mall",
                "line2": "Space #840",
                "city": "Scranton",
                "region": "PA",
                "postalCode": "18508",
                "countryCode": "US"
            },
            "description": "This location has been permanently CLOSED",
            "hours": {
                "monday": {
                    "isClosed": true
                },
                "tuesday": {
                    "isClosed": true
                },
                "wednesday": {
                    "isClosed": true
                },
                "thursday": {
                    "isClosed": true
                },
                "friday": {
                    "isClosed": true
                },
                "saturday": {
                    "isClosed": true
                },
                "sunday": {
                    "isClosed": true
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms - CLOSED",
            "cityCoordinate": {
                "latitude": 41.406516,
                "longitude": -75.665241
            },
            "closed": true,
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "linkType": "OTHER",
                "link": "https://allinadventures.com"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "linkType": "OTHER",
                "link": "https://allinadventures.com"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 41.458685,
                "longitude": -75.654927
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "PA",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+15702187994",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 41.45867596220244,
                "longitude": -75.65506915707779
            },
            "yextRoutableCoordinate": {
                "latitude": 41.45823066547371,
                "longitude": -75.65212130788512
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "pVRaPr",
                "id": "126",
                "timestamp": "2022-01-01T11:38:31",
                "labels": [
                    "107528"
                ],
                "folderId": "cLOSED",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJIZWcZM61w4kRYU_SAUi3Ay0",
            "address": {
                "line1": "250 Woodbridge Center Dr",
                "line2": "Suite 2285",
                "city": "Woodbridge",
                "region": "NJ",
                "postalCode": "07095",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Woodbridge Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "13:00",
                            "end": "21:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "21:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 40.553254,
                "longitude": -74.288023
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/woodbridge-nj/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/woodbridge-nj/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/woodbridge-nj/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/1585713318107465",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 40.55594860000001,
                "longitude": -74.3015106
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "NJ",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+17323512772",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/woodbridge-nj/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 40.55654109876437,
                "longitude": -74.29912710336488
            },
            "yextRoutableCoordinate": {
                "latitude": 40.55517902766143,
                "longitude": -74.30190135048323
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "NOkqrq",
                "id": "128",
                "timestamp": "2022-11-18T22:06:09",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJQdz7XocOTYgRR9n2TUfP6pY",
            "address": {
                "line1": "4802 Valley View Blvd NW",
                "line2": "Space LD 150",
                "city": "Roanoke",
                "region": "VA",
                "postalCode": "24012",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Valley View Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "21:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 37.272621,
                "longitude": -79.94239
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/roanoke-va/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/roanoke-va/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/roanoke-va/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/307779829666508",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 37.303988,
                "longitude": -79.964004
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "VA",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+15409202253",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "APPLEPAY",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "SAMSUNGPAY",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/roanoke-va/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 37.30391866079544,
                "longitude": -79.96398924785042
            },
            "yextRoutableCoordinate": {
                "latitude": 37.3038420037988,
                "longitude": -79.95970698899012
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "OxQd5B",
                "id": "129",
                "timestamp": "2022-11-18T22:07:24",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJ9-utS69SwYkR9IMNi45tMxg",
            "address": {
                "line1": "707 Neshaminy Mall",
                "line2": "Space 672",
                "city": "Bensalem",
                "region": "PA",
                "postalCode": "19020",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Neshaminy Mall offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "19:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "19:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "19:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "19:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 40.125609,
                "longitude": -74.994262
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/bensalem-pa/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/bensalem-pa/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/bensalem-pa/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/117721788822334",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 40.1385979,
                "longitude": -74.9541101
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "PA",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+12672271101",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/bensalem-pa/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 40.13851293043452,
                "longitude": -74.95414362761267
            },
            "yextRoutableCoordinate": {
                "latitude": 40.136725710338794,
                "longitude": -74.95212892355677
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "vkRda9",
                "id": "130",
                "timestamp": "2022-11-18T22:08:27",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJxVO1lRvB54kRYRUavfqhLbI",
            "address": {
                "line1": "495 Union St",
                "line2": "Suite 1158",
                "city": "Waterbury",
                "region": "CT",
                "postalCode": "06706",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Brass Mills Center offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "15:00",
                            "end": "19:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "15:00",
                            "end": "19:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "15:00",
                            "end": "19:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "15:00",
                            "end": "19:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "15:00",
                            "end": "20:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "13:00",
                            "end": "20:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "13:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 41.5559,
                "longitude": -73.0408
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/waterbury-ct/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/waterbury-ct/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/waterbury-ct/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/514151148972188",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 41.54798600000001,
                "longitude": -73.0242586
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "CT",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+12033034414",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/waterbury-ct/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 41.54804521728704,
                "longitude": -73.0241177840267
            },
            "yextRoutableCoordinate": {
                "latitude": 41.5481796877628,
                "longitude": -73.02681184569128
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "LNxqod",
                "id": "133",
                "timestamp": "2022-11-18T22:10:29",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJuSMjXuyxU4gRN35G49h630M",
            "address": {
                "line1": "3320 Silas Creek Pkwy",
                "line2": "Suite GL 3332",
                "city": "Winston-Salem",
                "region": "NC",
                "postalCode": "27103",
                "countryCode": "US"
            },
            "description": "This location has been permanently CLOSED",
            "hours": {
                "monday": {
                    "isClosed": true
                },
                "tuesday": {
                    "isClosed": true
                },
                "wednesday": {
                    "isClosed": true
                },
                "thursday": {
                    "isClosed": true
                },
                "friday": {
                    "isClosed": true
                },
                "saturday": {
                    "isClosed": true
                },
                "sunday": {
                    "isClosed": true
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms- CLOSED",
            "cityCoordinate": {
                "latitude": 36.0996208190918,
                "longitude": -80.2410888671875
            },
            "closed": true,
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/winstonsalem-nc/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/winstonsalem-nc/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/winstonsalem-nc/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/398040847369311",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Location Closed",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 36.069589,
                "longitude": -80.300516
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "NC",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+13363900191",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 36.06960964513768,
                "longitude": -80.30050258895493
            },
            "yextRoutableCoordinate": {
                "latitude": 36.07380259300266,
                "longitude": -80.2987584494374
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "Rqyz9P",
                "id": "142",
                "timestamp": "2022-08-02T14:42:52",
                "labels": [
                    "107528"
                ],
                "folderId": "cLOSED",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJ74dN09upMYgR8KynGTnv73A",
            "address": {
                "line1": "7850 Mentor Avenue",
                "line2": "Space 1050A",
                "city": "Mentor",
                "region": "OH",
                "postalCode": "44060",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Great Lakes Malloffers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "16:00",
                            "end": "20:00"
                        }
                    ],
                    "isClosed": false
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "16:00",
                            "end": "20:00"
                        }
                    ],
                    "isClosed": false
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "16:00",
                            "end": "20:00"
                        }
                    ],
                    "isClosed": false
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "16:00",
                            "end": "20:00"
                        }
                    ],
                    "isClosed": false
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "16:00",
                            "end": "20:00"
                        }
                    ],
                    "isClosed": false
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ],
                    "isClosed": false
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "18:00"
                        }
                    ],
                    "isClosed": false
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 41.688085,
                "longitude": -81.339272
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/mentor-oh/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/mentor-oh/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/mentor-oh/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/110925873741218",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 41.65580569999999,
                "longitude": -81.3619617
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "OH",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+14404845373",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/mentor-oh/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 41.65577363574638,
                "longitude": -81.3615472987072
            },
            "yextRoutableCoordinate": {
                "latitude": 41.65973125680884,
                "longitude": -81.36527826008769
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "80jynN",
                "id": "143",
                "timestamp": "2022-11-18T22:11:20",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJ0SjAzBPH5YgRHz4kyXrkEK8",
            "address": {
                "line1": "1910 Wells Rd",
                "line2": "Suite C-30",
                "city": "Orange Park",
                "region": "FL",
                "postalCode": "32073",
                "countryCode": "US"
            },
            "description": "This location is permanently CLOSED",
            "hours": {
                "monday": {
                    "isClosed": true
                },
                "tuesday": {
                    "isClosed": true
                },
                "wednesday": {
                    "isClosed": true
                },
                "thursday": {
                    "isClosed": true
                },
                "friday": {
                    "isClosed": true
                },
                "saturday": {
                    "isClosed": true
                },
                "sunday": {
                    "isClosed": true
                },
                "reopenDate": "2025-01-01"
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms - CLOSED",
            "cityCoordinate": {
                "latitude": 30.170385,
                "longitude": -81.706373
            },
            "closed": true,
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "linkType": "OTHER",
                "link": "https://allinadventures.com"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "linkType": "OTHER",
                "link": "https://allinadventures.com"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/GJAbuoxwavuyuCnypckwoUZmKoyMJP-O9PgQafSf0DE/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/s720x720/80846487_173546310714894_8527286047241928704_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=aRNaszEYXmsAX8sTecJ&_nc_ht=scontent-iad3-1.xx&tp=7&oh=6d489b54b88a2544b202ba2b024bcaec&oe=5F69617B"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 30.1831879,
                "longitude": -81.73878909999999
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "FL",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+19045926511",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 30.183113706005432,
                "longitude": -81.7388078754631
            },
            "yextRoutableCoordinate": {
                "latitude": 30.186823853650637,
                "longitude": -81.73780307523813
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "mlR3Pg",
                "id": "144",
                "timestamp": "2021-11-29T14:06:51",
                "labels": [
                    "107528"
                ],
                "folderId": "cLOSED",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJ-RClFGPrt4kRH4oXN7sDbIg",
            "address": {
                "line1": "15421 Emerald Way",
                "city": "Bowie",
                "region": "MD",
                "postalCode": "20716",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Bowie Town Center offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "14:00",
                            "end": "21:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "14:00",
                            "end": "21:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "14:00",
                            "end": "21:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "14:00",
                            "end": "21:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "21:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "21:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 38.953101,
                "longitude": -76.743111
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/bowie-md/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/bowie-md/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/bowie-md/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/767908066960158",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 38.9441723,
                "longitude": -76.7363695
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "MD",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+12402456911",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/bowie-md/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 38.944156654161034,
                "longitude": -76.73644460185241
            },
            "yextRoutableCoordinate": {
                "latitude": 38.942561705481445,
                "longitude": -76.73702501397315
            },
            "yextWalkableCoordinate": {
                "latitude": 38.94403718676642,
                "longitude": -76.73642900425227
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "q2RGm8",
                "id": "145",
                "timestamp": "2022-11-18T22:12:58",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJuzAuEJHPw4kRtUbwFGpfJvs",
            "additionalHoursText": "We are OPEN on MLK Day!!!",
            "address": {
                "line1": "755 - NJ-18",
                "line2": "Space 544",
                "city": "East Brunswick",
                "region": "NJ",
                "postalCode": "08816",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Brunswick Square offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "14:00",
                            "end": "20:00"
                        }
                    ]
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "14:00",
                            "end": "20:00"
                        }
                    ]
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "14:00",
                            "end": "20:00"
                        }
                    ]
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "14:00",
                            "end": "20:00"
                        }
                    ]
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "14:00",
                            "end": "20:00"
                        }
                    ]
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "20:00"
                        }
                    ]
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "18:00"
                        }
                    ]
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 40.427697,
                "longitude": -74.421695
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/east-brunswick-nj/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/east-brunswick-nj/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/east-brunswick-nj/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/116076876427074",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 40.42391910000001,
                "longitude": -74.38250359999999
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "NJ",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+17322017285",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/east-brunswick-nj/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 40.42395645933606,
                "longitude": -74.382745844977
            },
            "yextRoutableCoordinate": {
                "latitude": 40.42466909136341,
                "longitude": -74.38001097862175
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "wjRNyR",
                "id": "148",
                "timestamp": "2022-11-18T22:13:45",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "googlePlaceId": "ChIJMfvp3Dr1OIgRWZ9B-_69coY",
            "address": {
                "line1": "1500 Polaris Pkwy",
                "line2": "Space 2252",
                "city": "Columbus",
                "region": "OH",
                "postalCode": "43240",
                "countryCode": "US"
            },
            "description": "Our All In Adventures location in Polaris Fashion Place offers our guests the chance to become real-life detectives during an interactive and engaging escape room experience. With 50 minutes on the clock, you must find clues, solve puzzles, and decipher hidden codes to escape the themed room of your choice.",
            "hours": {
                "monday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ],
                    "isClosed": false
                },
                "tuesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ],
                    "isClosed": false
                },
                "wednesday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ],
                    "isClosed": false
                },
                "thursday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ],
                    "isClosed": false
                },
                "friday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ],
                    "isClosed": false
                },
                "saturday": {
                    "openIntervals": [
                        {
                            "start": "11:00",
                            "end": "20:00"
                        }
                    ],
                    "isClosed": false
                },
                "sunday": {
                    "openIntervals": [
                        {
                            "start": "12:00",
                            "end": "18:00"
                        }
                    ],
                    "isClosed": false
                }
            },
            "logo": {
                "image": {
                    "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                    "width": 3600,
                    "height": 3600,
                    "thumbnails": [
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/1900x1900.png",
                            "width": 1900,
                            "height": 1900
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/150x150.png",
                            "width": 150,
                            "height": 150
                        },
                        {
                            "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/94x94.png",
                            "width": 94,
                            "height": 94
                        }
                    ]
                }
            },
            "name": "All In Adventures Escape Rooms",
            "cityCoordinate": {
                "latitude": 39.962208,
                "longitude": -83.000676
            },
            "c_activeInAnswers": true,
            "c_baseURL": "https://allinadventures.com/locations/columbus-oh/",
            "c_bingUTM": "?utm_medium=yext&utm_source=bing",
            "c_extendedNetworkUTM": "?utm_medium=yext&utm_source=extnet",
            "c_facebookUTM": "?utm_medium=yext&utm_source=fb",
            "c_googleUTM": "?utm_medium=yext&utm_source=gmb",
            "c_primaryCTA": {
                "label": "Book Now",
                "link": "https://allinadventures.com/locations/columbus-oh/",
                "linkType": "OTHER"
            },
            "c_secondaryCTA": {
                "label": "Get VIP Rewards",
                "link": "https://allinadventures.com/locations/columbus-oh/",
                "linkType": "OTHER"
            },
            "facebookCoverPhoto": {
                "url": "http://a.mktgcdn.com/p/cpT9GXTKgP-Htba5CrfPgpJW2DbA3TNAui7STBIbxJY/720x405.jpg",
                "width": 720,
                "height": 405,
                "sourceUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s720x720/27709682_389958524787201_574282996089815415_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=oqVghMWqRhIAX-_mQOU&_nc_ht=scontent-iad3-1.xx&tp=7&oh=9aa5efab0ae7683f3a7c16dc8a970a83&oe=5F693FC2"
            },
            "facebookCallToAction": {
                "type": "BOOK_NOW",
                "value": "[[c_facebookURL]]"
            },
            "facebookPageUrl": "https://www.facebook.com/103789121087921",
            "facebookParentPageId": "295783580871363",
            "facebookProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/YBe3TUlq31jWvgplfzjtDHFGMVDBaaNz_qz9V2uPeEc/3600x3600.png",
                "width": 3600,
                "height": 3600
            },
            "featuredMessage": {
                "description": "Book Now",
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]"
            },
            "photoGallery": [
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/2048x895.png",
                        "width": 2048,
                        "height": 895,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/1900x830.png",
                                "width": 1900,
                                "height": 830
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/619x270.png",
                                "width": 619,
                                "height": 270
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/600x262.png",
                                "width": 600,
                                "height": 262
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/2C35NLYh7Z-00YLly3Wm2kQnr8fhH7ENqwxh_FlBHGs/196x85.png",
                                "width": 196,
                                "height": 85
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/2048x1365.png",
                        "width": 2048,
                        "height": 1365,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/1900x1266.png",
                                "width": 1900,
                                "height": 1266
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/619x412.png",
                                "width": 619,
                                "height": 412
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/600x399.png",
                                "width": 600,
                                "height": 399
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/YPz1gBfM9tk6yV5o4FprCtmkqxEorEocjUVWJ80nJNg/196x130.png",
                                "width": 196,
                                "height": 130
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/2048x1190.png",
                        "width": 2048,
                        "height": 1190,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/1900x1104.png",
                                "width": 1900,
                                "height": 1104
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/619x359.png",
                                "width": 619,
                                "height": 359
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/600x348.png",
                                "width": 600,
                                "height": 348
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/qHqTcgsBpWeFJAdOSeqw6L2R6Ka0uXItTOe5pl94VXg/196x113.png",
                                "width": 196,
                                "height": 113
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/2048x1491.png",
                        "width": 2048,
                        "height": 1491,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/1900x1383.png",
                                "width": 1900,
                                "height": 1383
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/619x450.png",
                                "width": 619,
                                "height": 450
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/600x436.png",
                                "width": 600,
                                "height": 436
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/p0JimMmoqKfCv_3y8ykgaXShtYx20IdltedNlu_Rif8/196x142.png",
                                "width": 196,
                                "height": 142
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                },
                {
                    "image": {
                        "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/2048x1244.png",
                        "width": 2048,
                        "height": 1244,
                        "thumbnails": [
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/1900x1154.png",
                                "width": 1900,
                                "height": 1154
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/619x375.png",
                                "width": 619,
                                "height": 375
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/600x364.png",
                                "width": 600,
                                "height": 364
                            },
                            {
                                "url": "https://a.mktgcdn.com/p/38xWe3xvT07Q7gU9uYXvqu_3P5VaCdgDBxMstZ92FtU/196x119.png",
                                "width": 196,
                                "height": 119
                            }
                        ]
                    },
                    "description": "Corporate Team building"
                }
            ],
            "geocodedCoordinate": {
                "latitude": 40.14562420000001,
                "longitude": -82.98205759999999
            },
            "googleAccountId": "115834545120610152276",
            "googleCoverPhoto": {
                "url": "https://a.mktgcdn.com/p/zJPvymQ7LxGzRyuIffknRMNx0Otcf0BRVnH__fJSN2c/1200x800.png",
                "width": 1200,
                "height": 800
            },
            "googleProfilePhoto": {
                "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/3600x3600.png",
                "width": 3600,
                "height": 3600,
                "thumbnails": [
                    {
                        "url": "https://a.mktgcdn.com/p/aFUJlspgCPIvKo4Ei8hPVZd2X8icj16Y5COvmdh1B2g/500x500.png",
                        "width": 500,
                        "height": 500
                    }
                ]
            },
            "instagramHandle": "all_in_adventures",
            "isoRegionCode": "OH",
            "keywords": [
                "Escape Room",
                "Team Building",
                "Parties",
                "Zombie Apocalypse",
                "Escape From Alcatraz",
                "Treasure Island Escape Room",
                "Black Ops Escape Room",
                "Family Fun",
                "Birthday",
                "Fun Activity",
                "Celebrations",
                "Kid Friendly",
                "Holiday Party"
            ],
            "mainPhone": "+16148395858",
            "paymentOptions": [
                "AMERICANEXPRESS",
                "ANDROIDPAY",
                "APPLEPAY",
                "DISCOVER",
                "MASTERCARD",
                "PAYPAL",
                "VISA"
            ],
            "reservationUrl": {
                "url": "[[c_baseURL]][[c_extendedNetworkUTM]]",
                "displayUrl": "[[c_baseURL]]",
                "preferDisplayUrl": true
            },
            "services": [
                "Zombie Apocalypse Escape Room",
                "Escape From Alcatraz Escape Room",
                "Treasure Island Escape Room",
                "Black Ops Escape Room"
            ],
            "timezone": "America/New_York",
            "twitterHandle": "AllinAdventure",
            "websiteUrl": {
                "url": "https://mysteryroom.com/locations/columbus-oh/",
                "preferDisplayUrl": false
            },
            "yextDisplayCoordinate": {
                "latitude": 40.145526822092386,
                "longitude": -82.98203882453689
            },
            "yextRoutableCoordinate": {
                "latitude": 40.14151165712781,
                "longitude": -82.98044863522156
            },
            "videos": [
                {
                    "video": {
                        "url": "http://www.youtube.com/watch?v=WW48_UQbrWE"
                    }
                }
            ],
            "meta": {
                "accountId": "",
                "uid": "djQq3M",
                "id": "147",
                "timestamp": "2022-11-18T22:14:35",
                "labels": [
                    "107528"
                ],
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "location"
            },
            "categoryIds": [
                "1506365",
                "1259075"
            ],
            "timeZoneUtcOffset": "-05:00"
        },
        {
            "answer": "Absolutely not. All In Adventures escape rooms are activities for your mind and not your muscles. Opening locks and boxes is about the extent of your physical activity. That is another reason why it is such a great team-building activity.",
            "question": "Is it physically challenging?",
            "name": "Is it physically challenging?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Watch video",
                "link": "allinadventures.com",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "pVRawO",
                "id": "FAQ-3",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "Yes all our locations and rooms are accessible.",
            "question": "Is it wheelchair accessible?",
            "name": "Is it wheelchair accessible?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Choose a location",
                "link": "https://allinadventures.com/location/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "NOkqdW",
                "id": "FAQ-4",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "No, detectives of all ages are welcome. We have a variety of levels of difficulty, making it fun for all ages. Detectives 13 and under must be accompanied by an adult.",
            "question": "Is there a minimum age requirement?",
            "name": "Is there a minimum age requirement?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Choose a location",
                "link": "https://allinadventures.com/location/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "OxQdZ7",
                "id": "FAQ-5",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "No, our rooms and games are designed to be fun for all ages. We do not have any flashing lights, loud sounds, or live characters in our rooms. In addition, we offer an open-air plan so folks with claustrophobia or anxiety can also enjoy our escape room experience without any worry.",
            "question": "Is it scary?",
            "name": "Is it scary?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Watch video",
                "link": "allinadventures.com",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "vkRdN0",
                "id": "FAQ-2",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "An Escape Room is your chance to be a real-life detective. You and your team are in a room for 50 minutes, and you must find clues, solve puzzles, and decipher hidden codes to escape one of our many themed rooms.",
            "question": "What is an Escape Room?",
            "name": "What is an Escape Room?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Watch video",
                "linkType": "URL",
                "link": "https://www.youtube.com/watch?v=WW48_UQbrWE#action=share"
            },
            "meta": {
                "accountId": "",
                "uid": "LNxq3B",
                "id": "FAQ-1",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "Yes, we offer a variety of Corporate Team Building and Party Packages.",
            "question": "Can you accommodate large groups?",
            "name": "Can you accommodate large groups?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Submission Form",
                "linkType": "OTHER",
                "link": "https://allinadventures.com/corporate-events/"
            },
            "meta": {
                "accountId": "",
                "uid": "Rqyzjg",
                "id": "FAQ-7",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "Reservations are highly recommended as our rooms get filled up quickly during busy times.",
            "question": "Do I need to make reservations?",
            "name": "Do I need to make reservations?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Choose a location",
                "link": "https://allinadventures.com/location/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "80jyrP",
                "id": "FAQ-6",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "Food and drink packages are available with special events, and guests are permitted to bring their own store-bought or commercially prepared foods with the rental of the party room. Please contact us for more information.",
            "question": "Can I bring outside food and/or drinks?",
            "name": "Can I bring outside food and/or drinks?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "More Info",
                "link": "https://allinadventures.com/parties/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "mlR32D",
                "id": "FAQ-8",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "Please arrive 15 minutes prior to your scheduled reservation time. This will ensure you have ample time to check in and read our rules.",
            "question": "When should I arrive?",
            "name": "When should I arrive?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Choose a location",
                "link": "https://allinadventures.com/location/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "q2RGV7",
                "id": "FAQ-9",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "Your time starts at the reserved time. If you arrive past that, you will still have the same ending time.  We have to respect the reservations of the others who have booked with us as well. Please make sure to allow plenty of time for travel and parking so we can start your group on time.",
            "question": "What if I am late for my reservation?",
            "name": "What if I am late for my reservation?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Choose a location",
                "link": "https://allinadventures.com/location/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "wjRNQM",
                "id": "FAQ-10",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "Navigate to the Gallery on our website and choose a location to find and download your photos.",
            "question": "How do I get my pictures of our group after we finish our experience?",
            "name": "How do I get my pictures of our group after we finish our experience?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Photo Gallery",
                "link": "https://allinadventures.com/gallery/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "djQqxD",
                "id": "FAQ-12",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "The standard cost is $26/person (plus tax and fees in those states that it applies) for one escape room experience. We do provide a discount for full-room bookings. Children 6 and under are free with a paying adult.",
            "question": "How much does it cost?",
            "name": "How much does it cost?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Choose a location",
                "link": "https://allinadventures.com/location/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "aAx8vM",
                "id": "FAQ-13",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "Our escape room difficulty levels range from 1 – 3, where 1 is the easiest and 3 is the most difficult. Success rate ranges are as follows:\n\nLevel 1 – 50% to 60% Level 2 – 35% to 45% Level 3 – 30% to 40%\n\nEach themed room will have the basic challenge as well as a Master level. We utilize an auto-continue structure, which means that the starting point for each game is the challenge level indicated. Once solved, you can escape and record your time for the room and you can continue on and try completing the Master level if you choose.",
            "question": "What do the difficulty levels mean?",
            "name": "What do the difficulty levels mean?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Choose a location",
                "link": "https://allinadventures.com/location/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "6blnwP",
                "id": "FAQ-14",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "There are no refunds or cancellations.  If you contact us 48 hours prior to your reservation time, we will do our best to reschedule your reservation.",
            "question": "What is the cancellation policy?",
            "name": "What is the cancellation policy?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Choose a location",
                "link": "https://allinadventures.com/location/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "nwRGBg",
                "id": "FAQ-11",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "We would recommend any Level 1 room to start with. In some cases, for fast learners, a Level 2 room would work too.",
            "question": "What rooms(s) would you recommend for beginners or someone who has never been to an escape room before?",
            "name": "What rooms(s) would you recommend for beginners or someone who has never been to an escape room before?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Choose a location",
                "link": "https://allinadventures.com/location/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "3Pja6g",
                "id": "FAQ-15",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "For children under the age of 12, we would recommend starting with any Level 1 room. Superhero’s Adventure is very popular and great for kids. Treasure Island is great for families.",
            "question": "What rooms(s) would you recommend for children?",
            "name": "What rooms(s) would you recommend for children?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Choose a location",
                "link": "https://allinadventures.com/location/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "l05owQ",
                "id": "FAQ-16",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "Yes most of our locations have now reopened with weekend hours.  Please check the location page for specific hours of operation for a particular location.",
            "question": "Are you open?",
            "name": "Are you open?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Choose a location",
                "link": "https://allinadventures.com/location/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "bvM2BR",
                "id": "FAQ-17",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "We follow all State and Local mandated guidelines and at this time most locations require customers to wear masks.",
            "question": "Do we have to wear a face mask?",
            "name": "Do we have to wear a face mask?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Choose a location",
                "link": "https://allinadventures.com/location/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "DoDyMV",
                "id": "FAQ-18",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        },
        {
            "answer": "Yes we do sell gift vouchers.  Please select a location first.",
            "question": "Do you offer gift vouchers?",
            "name": "Do you offer gift vouchers?",
            "c_activeInAnswers": true,
            "c_primaryCTA": {
                "label": "Choose a location",
                "link": "https://allinadventures.com/location/",
                "linkType": "OTHER"
            },
            "meta": {
                "accountId": "",
                "uid": "AMRJkD",
                "id": "FAQ-19",
                "timestamp": "2021-05-26T00:25:39",
                "folderId": "0",
                "language": "en",
                "countryCode": "US",
                "entityType": "faq"
            }
        }
    ],
}
        

       