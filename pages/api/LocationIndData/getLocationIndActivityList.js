import LocActivity from "../../albany-ny/activities"
import { bookingList } from "./bookingList"
import { getLocationActivitySlugList } from "./getLocationActivitySlugList"
import { getLocationEventSlugList } from "./getLocationEventSlugList"
import { getTotal } from "../AllDataList/getTotal"
import { getLocTotal } from "../AllDataList/getLocTotal"

export const getLocationIndActivityList=(slug)=>{

    const locationName=()=>{
        var locname=slug.split("-").join(", ")
        return locname
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
const bookingAll=bookingList('',slug)
    
    const data={
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
          "pagedata": {
                       "pagetitle":"ALL ESCAPE ROOMS AND ADVENTURE ACTIVITIES IN "+cityName(slug),
                       "location_name":locationName(),
                       "locationslug":slug,
                       "mall":LocActivityData[slug].mall,
                       "pagesubtitle":"Play the top "+cityName(slug)+" escape rooms and other adventure games. For 50 minutes, experience fun-filled immersive entertainment with friends, family, kids or co-works. Escape normal life, and be the hero of the story!",
                       "totalLocations": getTotal().totalLocations,
                      "totalUniqueGames": getLocationActivitySlugList(slug).length,
                      "totalFiveStarReview": LocActivityData[slug].totalFiveStarReview,
                      "totalPlayerEscaped": LocActivityData[slug].totalPlayerEscaped,
                        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-all-game-page-hero.jpg",
                        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-all-game-page-hero--mobile.jpg",
                        "bookingall":{
                            "shortname":bookingAll.shortname
                        }
          },

          "activity_list":LocActivityData[slug].activity_list,
          "bookingdata":bookingAll,
          "activitylist":getLocationActivitySlugList(slug),
          "eventslist":getLocationEventSlugList(slug),
          "locationlist":getLocTotal(slug).locationlist,
    }
return data
   
}

const LocActivityData={
    //********************************************************************************************NY */
    //=========================================================albany-ny list
    "albany-ny":{
        "mall":"crossgate mall",
        "totalFiveStarReview": "4.5k",
        "totalPlayerEscaped": "11k+",
        "activity_list":[

            {
                "id":1,
                "activity_name":"Escape from Alcatraz",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                "activity_slug":"escape-from-alcatraz",
                "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                
                
            },
            {
                "id":2,
                "activity_name":"Treasure Island",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                "activity_slug":"treasure-island",
                "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                
            },
            {
                "id":3,
                "activity_name":"Zombie Apocalypse",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                "activity_slug":"zombie-apocalypse",
                "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                
            },
            {
                "id":4,
                "activity_name":"Sherlock's Library",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                "activity_slug":"sherlocks-library",
                "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
               
            },
            {
                "id":5,
                "activity_name":"Black Ops",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                "activity_slug":"black-ops",
                "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                
            },
            {
                "id":6,
                "activity_name":"Superhero's Adventure",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                "activity_slug":"superheros-adventure",
                "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                
            },
            {
                "id":7,
                "activity_name":"HOUDINI'S MAGIC CELL",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                "activity_slug":"houdinis-magic-cell",
                "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                
            },
            
            {
                "id":8,
                "activity_name":"Special Agent",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                "activity_slug":"special-agent",
                "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                
            },
            {
                "id":9,
                "activity_name":"HOLLYWOOD PREMIERE",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                "activity_slug":"hollywood-premiere",
                "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
               
            },
            
            

          ]
    },
        //=========================================================albany-ny list end
         //=========================================================Buffalo ny list
    "buffalo-ny":{
        "mall":"Walden Galleria",
        "totalFiveStarReview": "5.3k",
        "totalPlayerEscaped": "9k+",
        "activity_list":[

            {
                "id":1,
                "activity_name":"Escape from Alcatraz",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                "activity_slug":"escape-from-alcatraz",
                "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                
                
            },
            {
                "id":2,
                "activity_name":"Treasure Island",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                "activity_slug":"treasure-island",
                "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                
            },
            {
                "id":3,
                "activity_name":"Zombie Apocalypse",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                "activity_slug":"zombie-apocalypse",
                "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                
            },
            {
                "id":4,
                "activity_name":"Sherlock's Library",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                "activity_slug":"sherlocks-library",
                "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
               
            },
            {
                "id":5,
                "activity_name":"Black Ops",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                "activity_slug":"black-ops",
                "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                
            },
            {
                "id":6,
                "activity_name":"Superhero's Adventure",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                "activity_slug":"superheros-adventure",
                "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                
            },
            {
                "id":7,
                "activity_name":"HOUDINI'S MAGIC CELL",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                "activity_slug":"houdinis-magic-cell",
                "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                
            },
            
            {
                "id":8,
                "activity_name":"Special Agent",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                "activity_slug":"special-agent",
                "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                
            },
            {
                "id":9,
                "activity_name":"HOLLYWOOD PREMIERE",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                "activity_slug":"hollywood-premiere",
                "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
               
            },
            
            

          ]
    },
        //=========================================================albany-ny list end
        //=========================================================middletown-ny list
    "middletown-ny":{
        "mall":"Crystal Run Mall",
        "coverimageL":"/assets/location-hero-bg.jpg",
        "coverimageM":"/assets/location-hero.jpg",
        "totalFiveStarReview": "3.8k",
        "totalPlayerEscaped": "7k+",
        "activity_list":[

            {
                "id":1,
                "activity_name":"Escape from Alcatraz",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                "activity_slug":"escape-from-alcatraz",
                "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                
                
            },
            {
                "id":2,
                "activity_name":"Treasure Island",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                "activity_slug":"treasure-island",
                "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                
            },
            {
                "id":3,
                "activity_name":"Zombie Apocalypse",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                "activity_slug":"zombie-apocalypse",
                "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                
            },
            {
                "id":4,
                "activity_name":"Sherlock's Library",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                "activity_slug":"sherlocks-library",
                "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
               
            },
            {
                "id":5,
                "activity_name":"Black Ops",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                "activity_slug":"black-ops",
                "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                
            },
            {
                "id":6,
                "activity_name":"Superhero's Adventure",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                "activity_slug":"superheros-adventure",
                "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                
            },
            {
                "id":7,
                "activity_name":"HOUDINI'S MAGIC CELL",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                "activity_slug":"houdinis-magic-cell",
                "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                
            },
            
            {
                "id":8,
                "activity_name":"Special Agent",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                "activity_slug":"special-agent",
                "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                
            },
            {
                "id":9,
                "activity_name":"HOLLYWOOD PREMIERE",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                "activity_slug":"hollywood-premiere",
                "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
               
            },
            
            {
                "id":11,
                "activity_name":"Wizarding School ",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"4",
                "price":"39.95",
                "duration":"60",
                "activity_desc":"Lost in the Wizarding School, locked in the office and late for class - this is not the key to success. Find your way out of the office and get to class on time!",
                "activity_slug":"wizarding-school ",
                "activity_cover_image":"/assets/all-game-list/allinadventures-wizarding-school.jpg",
                
            },
            
            {
                "id":14,
                "activity_name":"Beat The Seat",
                "activity_type":"In person",
                "activity_category":"other",
                "age":"all Aage",
                "min_player":2,
                "max_player":8,
                "price":28,
                "duration":60,
                "activity_desc":"It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet. ",
                "activity_slug":"beat-the-seat",
                "activity_cover_image":"/assets/all-game-list/allinadventures-beat-the-seat.jpg",
                
            },

          ]
    },
        //=========================================================middletown-ny end
        //=========================================================syracuse-ny list
    "syracuse-ny":{
        "mall":"Destiny USA Mall",
        "coverimageL":"/assets/location-hero-bg.jpg",
        "coverimageM":"/assets/location-hero.jpg",
        "totalFiveStarReview": "6.9k",
        "totalPlayerEscaped": "12k+",
        
        "activity_list":[

            {
                "id":1,
                "activity_name":"Escape from Alcatraz",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                "activity_slug":"escape-from-alcatraz",
                "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                
                
            },
            {
                "id":2,
                "activity_name":"Treasure Island",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                "activity_slug":"treasure-island",
                "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                
            },
            {
                "id":3,
                "activity_name":"Zombie Apocalypse",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                "activity_slug":"zombie-apocalypse",
                "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                
            },
            {
                "id":4,
                "activity_name":"Sherlock's Library",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                "activity_slug":"sherlocks-library",
                "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
               
            },
            {
                "id":5,
                "activity_name":"Black Ops",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                "activity_slug":"black-ops",
                "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                
            },
            {
                "id":6,
                "activity_name":"Superhero's Adventure",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                "activity_slug":"superheros-adventure",
                "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                
            },
            {
                "id":7,
                "activity_name":"HOUDINI'S MAGIC CELL",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                "activity_slug":"houdinis-magic-cell",
                "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                
            },
            
            {
                "id":8,
                "activity_name":"Special Agent",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                "activity_slug":"special-agent",
                "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                
            },
            {
                "id":9,
                "activity_name":"HOLLYWOOD PREMIERE",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                "activity_slug":"hollywood-premiere",
                "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
               
            },
            {
                "id":12,
                "activity_name":"Locked in the Lift",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"4",
                "price":"29.89",
                "duration":"30",
                "activity_desc":"Welcome to the 40's! You are trapped in a luxurious lift meant only for the most exclusive VIPs. You must save yourself as it's better to not think about what will happen if you don't",
                "activity_slug":"locked-in-the-lift",
                "activity_cover_image":"/assets/all-game-list/allinadventures-locked-in-the-lift.jpg",
                
            },
            
            {
                "id":13,
                "activity_name":"MAGIC CASTLE",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"60",
                "activity_desc":"Welcome to the Magic Castle! Pass your entrance exam to prove you belong among the most prestigious wizards.",
                "activity_slug":"magic-castle",
                "activity_cover_image":"/assets/all-game-list/allinadventures-magic-castle.jpg",
                
            },
            
            {
                "id":14,
                "activity_name":"Beat The Seat",
                "activity_type":"In person",
                "activity_category":"other",
                "age":"all Aage",
                "min_player":2,
                "max_player":8,
                "price":28,
                "duration":60,
                "activity_desc":"It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet. ",
                "activity_slug":"beat-the-seat",
                "activity_cover_image":"/assets/all-game-list/allinadventures-beat-the-seat.jpg",
                
            },
          ]
    
    },
        //=========================================================syracuse-ny end
           //=========================================================syracuse-ny list
    "watertown-ny":{
        "mall":"Salmon Run Mall",
        "coverimageL":"/assets/location-hero-bg.jpg",
        "coverimageM":"/assets/location-hero.jpg",
        "totalFiveStarReview": "3.3k",
        "totalPlayerEscaped": "10k+",
        "activity_list":[

            {
                "id":1,
                "activity_name":"Escape from Alcatraz",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                "activity_slug":"escape-from-alcatraz",
                "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                
                
            },
            {
                "id":2,
                "activity_name":"Treasure Island",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                "activity_slug":"treasure-island",
                "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                
            },
            {
                "id":3,
                "activity_name":"Zombie Apocalypse",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                "activity_slug":"zombie-apocalypse",
                "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                
            },
            {
                "id":4,
                "activity_name":"Sherlock's Library",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                "activity_slug":"sherlocks-library",
                "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
               
            },
            {
                "id":5,
                "activity_name":"Black Ops",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                "activity_slug":"black-ops",
                "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                
            },
            {
                "id":6,
                "activity_name":"Superhero's Adventure",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                "activity_slug":"superheros-adventure",
                "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                
            },
            {
                "id":7,
                "activity_name":"HOUDINI'S MAGIC CELL",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                "activity_slug":"houdinis-magic-cell",
                "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                
            },
            
            {
                "id":8,
                "activity_name":"Special Agent",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                "activity_slug":"special-agent",
                "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                
            },
            {
                "id":9,
                "activity_name":"HOLLYWOOD PREMIERE",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                "activity_slug":"hollywood-premiere",
                "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
               
            },
            
            

          ]
    },
        //=========================================================watertown-ny end
           //=========================================================west-nyack-ny list
    "west-nyack-ny":{
            "mall":"Palisades Center Mall",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            "totalFiveStarReview": "2.9k",
            "totalPlayerEscaped": "4.8k+",
            "activity_list":[

                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                    "activity_slug":"treasure-island",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                    
                },
                {
                    "id":3,
                    "activity_name":"Zombie Apocalypse",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                    "activity_slug":"zombie-apocalypse",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                    
                },
                {
                    "id":4,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
                
                {
                    "id":6,
                    "activity_name":"Superhero's Adventure",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                
                {
                    "id":14,
                    "activity_name":"Beat The Seat",
                    "activity_type":"In person",
                    "activity_category":"other",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet. ",
                    "activity_slug":"beat-the-seat",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-beat-the-seat.jpg",
                    
                },
                {
                    "id":15,
                    "activity_name":"Game Show Room",
                    "activity_type":"In person",
                    "activity_category":"other",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Have you always dreamed of being a contestant on a TV game show? Well, dream no more because we've brought the game show experience to you!",
                    "activity_slug":"game-show-room",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-game-show-room.jpg",
                    
                },
              ]
        },
            //=========================================================west-nyack-ny end
            //=========================================================poughkeepsie-ny list
    "poughkeepsie-ny":{
        "mall":"AT Poughkeepsie Galleria Mall",
        "coverimageL":"/assets/location-hero-bg.jpg",
        "coverimageM":"/assets/location-hero.jpg",
        "totalFiveStarReview": "1.3k",
        "totalPlayerEscaped": "2.8k+",
        
        "activity_list":[

            {
                "id":1,
                "activity_name":"Escape from Alcatraz",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                "activity_slug":"escape-from-alcatraz",
                "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                
                
            },
            {
                "id":2,
                "activity_name":"Treasure Island",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                "activity_slug":"treasure-island",
                "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                
            },
            {
                "id":3,
                "activity_name":"Zombie Apocalypse",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                "activity_slug":"zombie-apocalypse",
                "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                
            },
            {
                "id":4,
                "activity_name":"Sherlock's Library",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                "activity_slug":"sherlocks-library",
                "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
               
            },
            {
                "id":5,
                "activity_name":"Black Ops",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                "activity_slug":"black-ops",
                "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                
            },
            {
                "id":6,
                "activity_name":"Superhero's Adventure",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"All age(6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                "activity_slug":"superheros-adventure",
                "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                
            },
            {
                "id":7,
                "activity_name":"HOUDINI'S MAGIC CELL",
                "activity_type":"In person",
                "activity_category":"escapegame",
                "age":"all Aage",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                "activity_slug":"houdinis-magic-cell",
                "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                
            },
            
            
            
            {
                "id":16,
                "activity_name":"Axe Throwing",
                "activity_type":"In person",
                "activity_category":"other",
                "age":"all Aage",
                "min_player":2,
                "max_player":8,
                "price":28,
                "duration":60,
                "activity_desc":"Having a bad day? Come and throw axes. It involves a competitor throwing an axe at a target, attempting to hit the bullseye as near as possible.",
                "activity_slug":"axe-throwing",
                "activity_cover_image":"/assets/all-game-list/allinadventures-axe-throwing.jpg",
                
            },

          ]
    },
        //=========================================================poughkeepsie-ny end
//********************************************************************************************NY END */
//********************************************************************************************NC */
           //=========================================================west-nyack-ny list
           "raleigh-nc":{
            "mall":"Triangle Town Centerl Mall",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            "totalFiveStarReview": "5.4k",
            "totalPlayerEscaped": "8.8k+",
            
            "activity_list":[

                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                    "activity_slug":"treasure-island",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                    
                },
                {
                    "id":3,
                    "activity_name":"Zombie Apocalypse",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                    "activity_slug":"zombie-apocalypse",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                    
                },
                {
                    "id":4,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
                {
                    "id":5,
                    "activity_name":"Black Ops",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                    "activity_slug":"black-ops",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                    
                },
                {
                    "id":6,
                    "activity_name":"Superhero's Adventure",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                
              ]
        },
            //=========================================================west-nyack-ny end
//********************************************************************************************NC END*/
//********************************************************************************************PA */
            //=========================================================bensalem-palist
           "bensalem-pa":{
            "mall":"Neshaminy Mall",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            "totalFiveStarReview": "7.3k",
            "totalPlayerEscaped": "9.8k+",
            
            "activity_list":[

                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                    "activity_slug":"treasure-island",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                    
                },
                {
                    "id":3,
                    "activity_name":"Zombie Apocalypse",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                    "activity_slug":"zombie-apocalypse",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                    
                },
                {
                    "id":4,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
                {
                    "id":5,
                    "activity_name":"Black Ops",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                    "activity_slug":"black-ops",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                    
                },
                {
                    "id":6,
                    "activity_name":"Superhero's Adventure",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                
                {
                    "id":8,
                    "activity_name":"Special Agent",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                    "activity_slug":"special-agent",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                    
                },
                {
                    "id":9,
                    "activity_name":"HOLLYWOOD PREMIERE",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                    "activity_slug":"hollywood-premiere",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                   
                },
              ]
        },
            //=========================================================bensalem-pa end
//********************************************************************************************PA END */
//********************************************************************************************MA */
            //=========================================================hadley-ma list
            "hadley-ma":{
                "mall":"Hampshire Mall",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "6.5k",
                 "totalPlayerEscaped": "12k+",
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
                    
        
                  ]
            },
                //=========================================================hadley-ma end
                //=========================================================holyoke-ma list
            "holyoke-ma":{
                "mall":"Holyoke Mall",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "4.6k",
                 "totalPlayerEscaped": "9.2k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                  
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
        
                  ]
            },
                //=========================================================holyoke-ma end
                //=========================================================kingston-ma list
            "kingston-ma":{
                "mall":"Kingston Collection Mall",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "5.6k",
                 "totalPlayerEscaped": "8.7k+",
                
                "activity_list":[
        
                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":10,
                        "price":30,
                        "duration":50,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":36,
                        "duration":50,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":36,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
                    {
                        "id":4,
                        "activity_name":"Lost in The Jungle",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"lost-in-the-jungle",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-lost-in-the-jungle.jpg",
                        
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Locked in the Lift",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"locked-in-the-lift",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-locked-in-the-lift.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    {
                        "id":8,
                        "activity_name":"MAGIC CASTLE",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"magic-castle",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-magic-castle.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    
                    {
                        "id":11,
                        "activity_name":"Special Agent",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
                    {
                        "id":12,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                        
                    },
                    {
                        "id":13,
                        "activity_name":"Wizarding School ",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"wizarding-school ",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-wizarding-school.jpg",
                       
                    },
                    {
                        "id":14,
                        "activity_name":"Beat The Seat",
                        "activity_type":"In person",
                        "activity_category":"other",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"beat-the-seat",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-wizarding-school.jpg",
                        
                    },
                    {
                        "id":15,
                        "activity_name":"Game Show Room",
                        "activity_type":"In person",
                        "activity_category":"other",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"game-show-room",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-wizarding-school.jpg",
                        
                    },
                    {
                        "id":16,
                        "activity_name":"Axe Throwing",
                        "activity_type":"In person",
                        "activity_category":"other",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"axe-throwing",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-wizarding-school.jpg",
                        
                    },
                    {
                        "id":17,
                        "activity_name":"Virtual Reality",
                        "activity_type":"In person",
                        "activity_category":"other",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                        "activity_slug":"virtual-reality",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-virtual-reality.jpg",
                       
                    },
                    
                    
                    
        
                  ]
            },
                //=========================================================kingston-ma end
                    //=========================================================n-attleborough-ma list
            "n-attleborough-ma":{
                "mall":"Emerald Square Mall",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "4.2k",
                "totalPlayerEscaped": "6.8k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
        
                  ]
            },
                //=========================================================n-attleborough-ma end
    //********************************************************************************************MA END */

    //********************************************************************************************CT */
            //=========================================================milford-ct list
            "milford-ct":{
                "mall":"Connecticut Post Mall",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "3.7k",
                "totalPlayerEscaped": "5.2k+",
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
                  ]
            },
            //=========================================================milford-ct list end
            //=========================================================manchester-ct list
            "manchester-ct":{
                "mall":"Buckland Hills Mall ",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "4.8k",
                "totalPlayerEscaped": "7.6.2k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
        
                  ]
            },
            //=========================================================manchester-ct list end
            //=========================================================manchester-ct list
            "waterbury-ct":{
                "mall":"Brass Mills Mall",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "6.8k",
                "totalPlayerEscaped": "9.6.2k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
                    
        
                  ]
            },
            //=========================================================manchester-ct list end
    //********************************************************************************************CT END*/
      //********************************************************************************************MD */
            //=========================================================bowie-md list
            "bowie-md":{
                "mall":"Bowie Town Center Mall",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "6.4k",
                "totalPlayerEscaped": "12.3k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
                    
                    
        
                  ]
            },
            //=========================================================bowie-md end
            //=========================================================white-marsh-md list
            "white-marsh-md":{
                "mall":"White Marsh Mall",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "4.8k",
                "totalPlayerEscaped": "11.7k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
        
                  ]
            },
            //=========================================================white-marsh-md end
    //********************************************************************************************MD END*/
     //********************************************************************************************NJ */
            //=========================================================east-brunswick-nj list
            "east-brunswick-nj":{
                "mall":"Brunswick Square Mall",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "2.7k",
                "totalPlayerEscaped": "5.3k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
                    
                    
                  
                  ]
            },
            //=========================================================east-brunswick-nj end
            //=========================================================rockaway-nj list
            "rockaway-nj":{
                "mall":"Rockaway Townsquare Mall",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "5.3k",
                "totalPlayerEscaped": "10k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
                    {
                        "id":15,
                        "activity_name":"Game Show Room",
                        "activity_type":"In person",
                        "activity_category":"other",
                        "age":"all Aage",
                        "min_player":2,
                        "max_player":8,
                        "price":28,
                        "duration":60,
                        "activity_desc":"Have you always dreamed of being a contestant on a TV game show? Well, dream no more because we've brought the game show experience to you!",
                        "activity_slug":"game-show-room",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-game-show-room.jpg",
                        
                    },
                  ]
            },
            //=========================================================rockaway-nj end
            //=========================================================woodbridge-nj list
            "woodbridge-nj":{
                "mall":"Woodbridge Mall",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "7.5k",
                "totalPlayerEscaped": "13k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"all Aage",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In person",
                        "activity_category":"escapegame",
                        "age":"All age(6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
        
                  ]
            },
            //=========================================================woodbridge-nj end
    //********************************************************************************************NJ END*/
    //********************************************************************************************TX */
        //=========================================================austin-tx list
        "austin-tx":{
            "mall":"crossgate mall",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            
            "activity_list":[
    
                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":10,
                    "price":30,
                    "duration":50,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":36,
                    "duration":50,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"treasure-island",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                    
                },
                {
                    "id":3,
                    "activity_name":"HOLLYWOOD PREMIERE",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":36,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"hollywood-premiere",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                   
                },
                {
                    "id":4,
                    "activity_name":"Lost in The Jungle",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"lost-in-the-jungle",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-lost-in-the-jungle.jpg",
                    
                },
                {
                    "id":5,
                    "activity_name":"Black Ops",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"black-ops",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                    
                },
                {
                    "id":6,
                    "activity_name":"Locked in the Lift",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"locked-in-the-lift",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-locked-in-the-lift.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                {
                    "id":8,
                    "activity_name":"MAGIC CASTLE",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"magic-castle",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-magic-castle.jpg",
                    
                },
                {
                    "id":9,
                    "activity_name":"Superhero's Adventure",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                
                {
                    "id":11,
                    "activity_name":"Special Agent",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"special-agent",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                    
                },
                {
                    "id":12,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                    
                },
                {
                    "id":13,
                    "activity_name":"Wizarding School ",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"wizarding-school ",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-wizarding-school.jpg",
                   
                },
                {
                    "id":14,
                    "activity_name":"Beat The Seat",
                    "activity_type":"In person",
                    "activity_category":"other",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"beat-the-seat",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-wizarding-school.jpg",
                    
                },
                {
                    "id":15,
                    "activity_name":"Game Show Room",
                    "activity_type":"In person",
                    "activity_category":"other",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"game-show-room",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-wizarding-school.jpg",
                    
                },
                {
                    "id":16,
                    "activity_name":"Axe Throwing",
                    "activity_type":"In person",
                    "activity_category":"other",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"axe-throwing",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-wizarding-school.jpg",
                    
                },
                {
                    "id":17,
                    "activity_name":"Virtual Reality",
                    "activity_type":"In person",
                    "activity_category":"other",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"Select the number of participants fill out the details. fill out the number of details.",
                    "activity_slug":"virtual-reality",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-virtual-reality.jpg",
                   
                },
                
                
                
    
              ]
        },
        //=========================================================austin-tx end
//********************************************************************************************TX END*/
//********************************************************************************************OH */
        //=========================================================columbus-oh list
        "columbus-oh":{
            "mall":"Polaris Fashion Place mall",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            "totalFiveStarReview": "3.5k",
                "totalPlayerEscaped": "8.2k+",
            
            "activity_list":[

                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                    "activity_slug":"treasure-island",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                    
                },
               
                {
                    "id":4,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
                {
                    "id":5,
                    "activity_name":"Black Ops",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                    "activity_slug":"black-ops",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                    
                },
                
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                
                
                
                
              
              ]
        },
        //=========================================================columbus-oh end
        //=========================================================mentor-oh list
        "mentor-oh":{
            "mall":"Great Lakes mall",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            "totalFiveStarReview": "4.2k",
                "totalPlayerEscaped": "10k+",
            
            "activity_list":[

                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                    "activity_slug":"treasure-island",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                    
                },
                {
                    "id":3,
                    "activity_name":"Zombie Apocalypse",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                    "activity_slug":"zombie-apocalypse",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                    
                },
                {
                    "id":4,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
                {
                    "id":5,
                    "activity_name":"Black Ops",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                    "activity_slug":"black-ops",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                    
                },
                {
                    "id":6,
                    "activity_name":"Superhero's Adventure",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                
                
                {
                    "id":9,
                    "activity_name":"HOLLYWOOD PREMIERE",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                    "activity_slug":"hollywood-premiere",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                   
                },
                
              
    
              ]
        },
        //=========================================================mentor-oh end
        //=========================================================dayton-oh  list
        "dayton-oh":{
            "mall":"Dayton Mall",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            "totalFiveStarReview": "4.8k",
                "totalPlayerEscaped": "12.7k+",
            
            "activity_list":[

                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                    "activity_slug":"treasure-island",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                    
                },
                {
                    "id":3,
                    "activity_name":"Zombie Apocalypse",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                    "activity_slug":"zombie-apocalypse",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                    
                },
                {
                    "id":4,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
                {
                    "id":5,
                    "activity_name":"Black Ops",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                    "activity_slug":"black-ops",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                    
                },
                {
                    "id":6,
                    "activity_name":"Superhero's Adventure",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                
                {
                    "id":8,
                    "activity_name":"Special Agent",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                    "activity_slug":"special-agent",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                    
                },
                
              ]
        },
        //=========================================================dayton-oh end
//********************************************************************************************OH END*/
//********************************************************************************************VA */
        //=========================================================roanoke-va list
        "roanoke-va":{
            "mall":"Valley View Mall ",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            "totalFiveStarReview": "4.7k",
                "totalPlayerEscaped": "11.4k+",
            
            "activity_list":[

                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                    "activity_slug":"treasure-island",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                    
                },
                {
                    "id":3,
                    "activity_name":"Zombie Apocalypse",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                    "activity_slug":"zombie-apocalypse",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                    
                },
                {
                    "id":4,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
                {
                    "id":5,
                    "activity_name":"Black Ops",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                    "activity_slug":"black-ops",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                    
                },
                {
                    "id":6,
                    "activity_name":"Superhero's Adventure",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                
                {
                    "id":8,
                    "activity_name":"Special Agent",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                    "activity_slug":"special-agent",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                    
                },
                {
                    "id":9,
                    "activity_name":"HOLLYWOOD PREMIERE",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                    "activity_slug":"hollywood-premiere",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                   
                },
    
              ]
        },
        //=========================================================roanoke-va end
//********************************************************************************************VA END*/
//********************************************************************************************GA */
        //=========================================================lawrenceville-ga list
        "lawrenceville-ga":{
            "mall":"Sugarloaf Mills Mall",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            "totalFiveStarReview": "3.8k",
            "totalPlayerEscaped": "9.4k+",
            "activity_list":[

                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                    "activity_slug":"treasure-island",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                    
                },
                {
                    "id":3,
                    "activity_name":"Zombie Apocalypse",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                    "activity_slug":"zombie-apocalypse",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                    
                },
                {
                    "id":4,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
                {
                    "id":5,
                    "activity_name":"Black Ops",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                    "activity_slug":"black-ops",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                    
                },
                {
                    "id":6,
                    "activity_name":"Superhero's Adventure",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All age(6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"all Aage",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                
               
                
                {
                    "id":14,
                    "activity_name":"Beat The Seat",
                    "activity_type":"In person",
                    "activity_category":"other",
                    "age":"all Aage",
                    "min_player":2,
                    "max_player":8,
                    "price":28,
                    "duration":60,
                    "activity_desc":"It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet. ",
                    "activity_slug":"beat-the-seat",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-beat-the-seat.jpg",
                    
                },
                
              ]
        },
        //=========================================================lawrenceville-ga end
//********************************************************************************************GA END*/

}