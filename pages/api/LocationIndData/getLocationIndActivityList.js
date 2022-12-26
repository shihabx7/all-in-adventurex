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
        if(ctname[0]=="n"){
            ctname[0]="n."
        }
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
    const locnameMod=(locname)=>{
        var spLoc=locname.split("-")
        if(spLoc[0]=="n"){
          spLoc[0]=spLoc[0]+"."
        }
        var st=spLoc[spLoc.length-1].toString()
        spLoc=spLoc.slice(0,-1)
        spLoc=spLoc.join(' ')
        
        var ret=spLoc+", "+st
        return ret
      }
    
      const getLocationSearchNameLw=(s)=>{
        var spLoc=s.split("-")
        if(spLoc[0]=="n." || spLoc[0]=="N."){
          spLoc[0]="North"
        }
        var st=spLoc[spLoc.length-1].toString()
        spLoc=spLoc.slice(0,-1)
        spLoc=spLoc.join(' ')

        var nsp=spLoc.split(' ')
        var x
        var appArr=['to','at','in','for','of','it','a','an']
        for(x=0;x<nsp.length;x++){

            var upc=nsp[x].charAt(0).toUpperCase()
            var nnsp=nsp[x].substring(0,0) + upc + nsp[x].substring(0+1)
            nsp[x]= nnsp
        }

        nsp=nsp.join(' ')
        
        var ret=nsp+" "+st.toUpperCase()
        return ret
     }
     const capCase=(str)=>{
        var capstr=str.split(' ')
        var x

        for(x=0;x<capstr.length;x++){
            if(capstr[x]!='usa'){
                var upc=capstr[x].charAt(0).toUpperCase()
            var nnsp=capstr[x].substring(0,0) + upc + capstr[x].substring(0+1)
            capstr[x]= nnsp
            }
            else{
                capstr[x]= capstr[x].toUpperCase()
            }
            
        }

        return capstr.join(' ')

     }
     const capMall=(mall)=>{
        var mallArr=mall.split(' ')
        var appArr=['to','at','in','for','of','it','a','an']
       
        var y
    
        for(y=0;y<mallArr.length;y++){
          if(!appArr.includes(mallArr[y]) && mallArr[y]!='USA'){
            if(mallArr[y]=='usa'){
              mallArr[y]==mallArr[y].toUpperCase()
            }
            var upc=mallArr[y].charAt(0).toUpperCase()
            var nnsp=mallArr[y].substring(0,0) + upc + mallArr[y].substring(0+1)
            
            mallArr[y]= nnsp
          }
          
            
        }
        var capmall=mallArr.join(' ')
    
       return capmall
       }
const bookingAll=bookingList('',slug)
    
    const data={
        "pagemeta":{

                "title":"All Escape Rooms in "+getLocationSearchNameLw(slug)+" - All In Adventures at "+capMall(LocActivityData[slug].mall),
                "description":"All In Adventures, formerly Mystery Room, run live escape rooms and other games in "+getLocationSearchNameLw(slug)+". Choose from many escape rooms at "+LocActivityData[slug].mall+" location.",
                "keywords":"all games albany, all games "+getLocationSearchNameLw(slug).toLowerCase()+", all escape rooms "+getLocationSearchNameLw(slug).toLowerCase()+", all escape games "+getLocationSearchNameLw(slug).toLowerCase()+", all games crossgates mall, all games "+LocActivityData[slug].mall.toLowerCase()+", all escape rooms "+LocActivityData[slug].mall.toLowerCase()+", all escape games "+LocActivityData[slug].mall.toLowerCase()+", all in adventures all games "+LocActivityData[slug].mall.toLowerCase()+" "+getLocationSearchNameLw(slug).toLowerCase()+", mystery room all games "+LocActivityData[slug].mall.toLowerCase()+" "+getLocationSearchNameLw(slug).toLowerCase(),
                "url":"/"+slug+"/activities",
                "metaindex":true,
                "metaimg":"/assets/all-game-mobile-hero/allinadventures-all-game-page-hero--mobile.jpg"
          },
           
          "pagedata": {
                       "pagetitle":"ALL ESCAPE ROOMS AND ADVENTURE ACTIVITIES IN "+locnameMod(slug),
                       "location_name":locnameMod(slug),
                       "locationslug":slug,
                       "mall":LocActivityData[slug].mall,
                       "publish_status":getLocTotal(slug).publish_status,
                       "pagesubtitle":"Play the top "+cityName(slug)+" escape rooms and other adventure games. For 50-60 minutes, experience fun-filled interactive entertainment with friends, family, kids or co-works. Escape normal life, and be the hero of the story!",
                       "totalLocations": getTotal().totalLocations,
                      "totalUniqueGames": getLocationActivitySlugList(slug).length,
                      "totalFiveStarReview": getLocTotal(slug).locTotalReview,
                      "totalPlayerEscaped": getLocTotal(slug).locToalPlayerEscape,
                        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-all-game-page-hero.jpg",
                        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-all-game-page-hero--mobile.jpg",
                        "bookingall":{
                            "shortname":bookingAll.shortname
                        },
                        "eventbooking":{

                            "shortname":bookingAll.shortname,
                               "item" :bookingAll["party-package"].item,
                               "flow" :bookingAll["party-package"].flow,
                               "eventstatus":bookingAll["party-package"].eventstatus,
                             },
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
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                "activity_slug":"escape-from-alcatraz",
                "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                
                
            },
            {
                "id":2,
                "activity_name":"Treasure Island",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
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
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
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
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
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
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
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
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                "activity_slug":"superheros-adventure",
                "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                
            },
            {
                "id":7,
                "activity_name":"HOUDINI'S MAGIC CELL",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                "activity_slug":"houdinis-magic-cell",
                "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                
            },
            
            {
                "id":8,
                "activity_name":"Special Agent",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                "activity_slug":"special-agent",
                "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                
            },
            {
                "id":9,
                "activity_name":"HOLLYWOOD PREMIERE",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"6",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
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
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                "activity_slug":"escape-from-alcatraz",
                "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                
                
            },
            {
                "id":2,
                "activity_name":"Treasure Island",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                "activity_slug":"treasure-island",
                "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                
            },
            {
                "id":3,
                "activity_name":"Zombie Apocalypse",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                "activity_slug":"zombie-apocalypse",
                "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                
            },
            {
                "id":4,
                "activity_name":"Sherlock's Library",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                "activity_slug":"sherlocks-library",
                "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
               
            },
            {
                "id":5,
                "activity_name":"Black Ops",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                "activity_slug":"black-ops",
                "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                
            },
            {
                "id":6,
                "activity_name":"Superhero's Adventure",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                "activity_slug":"superheros-adventure",
                "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                
            },
            {
                "id":7,
                "activity_name":"HOUDINI'S MAGIC CELL",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"12",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                "activity_slug":"houdinis-magic-cell",
                "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                
            },
            
            {
                "id":8,
                "activity_name":"Special Agent",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                "activity_slug":"special-agent",
                "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                
            },
            {
                "id":9,
                "activity_name":"HOLLYWOOD PREMIERE",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                "activity_slug":"hollywood-premiere",
                "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
               
            }

          ]
    },
        //=========================================================albany-ny list end
        //=========================================================middletown-ny list
    "middletown-ny":{
        "mall":"Galleria at Crystal Run",
        "coverimageL":"/assets/location-hero-bg.jpg",
        "coverimageM":"/assets/location-hero.jpg",
        "totalFiveStarReview": "3.8k",
        "totalPlayerEscaped": "7k+",
        "activity_list":[

            {
                "id":1,
                "activity_name":"Escape from Alcatraz",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"12",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                "activity_slug":"escape-from-alcatraz",
                "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                
                
            },
            {
                "id":2,
                "activity_name":"Treasure Island",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"12",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                "activity_slug":"treasure-island",
                "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                
            },
            {
                "id":3,
                "activity_name":"Zombie Apocalypse",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"12",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                "activity_slug":"zombie-apocalypse",
                "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                
            },
            {
                "id":4,
                "activity_name":"Sherlock's Library",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"12",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                "activity_slug":"sherlocks-library",
                "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
               
            },
            {
                "id":5,
                "activity_name":"Black Ops",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"12",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                "activity_slug":"black-ops",
                "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                
            },
            {
                "id":6,
                "activity_name":"Superhero's Adventure",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"12",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                "activity_slug":"superheros-adventure",
                "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                
            },
            {
                "id":7,
                "activity_name":"HOUDINI'S MAGIC CELL",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"12",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                "activity_slug":"houdinis-magic-cell",
                "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                
            },
            
            {
                "id":8,
                "activity_name":"Special Agent",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"12",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                "activity_slug":"special-agent",
                "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                
            },
            {
                "id":9,
                "activity_name":"HOLLYWOOD PREMIERE",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"12",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                "activity_slug":"hollywood-premiere",
                "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
               
            },
            {
                "id":11,
                "activity_name":"Wizarding School ",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"4",
                "price":"39.95",
                "duration":"60",
                "activity_desc":"Your Potions lesson will begin in 60 minutes and you have gotten locked in the headmaster's office! You must put on your thinking cap and find a way to get out in time…",
                "activity_slug":"wizarding-school ",
                "activity_cover_image":"/assets/all-game-list/allinadventures-wizarding-school.jpg",
                
            },
            
            
            {
                "id":14,
                "activity_name":"Beat The Seat",
                "activity_type":"In-person",
                "activity_category":"other",
                "age":"All Ages (6+)",
                "min_player":"1",
                "max_player":"1",
                "price":"5",
                "duration":"2",
                "activity_desc":"It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet. ",
                "activity_slug":"beat-the-seat",
                "activity_cover_image":"/assets/all-game-list/allinadventures-beat-the-seat.jpg",
                
            },
          ]
    },
        //=========================================================middletown-ny end
        //=========================================================syracuse-ny list
    "syracuse-ny":{
        "mall":"Destiny USA",
        "coverimageL":"/assets/location-hero-bg.jpg",
        "coverimageM":"/assets/location-hero.jpg",
        "totalFiveStarReview": "6.9k",
        "totalPlayerEscaped": "12k+",
        
        "activity_list":[

            {
                "id":1,
                "activity_name":"Escape from Alcatraz",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                "activity_slug":"escape-from-alcatraz",
                "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                
                
            },
            {
                "id":2,
                "activity_name":"Treasure Island",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
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
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"12",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                "activity_slug":"zombie-apocalypse",
                "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                
            },
            {
                "id":4,
                "activity_name":"Sherlock's Library",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
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
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
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
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                "activity_slug":"superheros-adventure",
                "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                
            },
            {
                "id":7,
                "activity_name":"HOUDINI'S MAGIC CELL",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                "activity_slug":"houdinis-magic-cell",
                "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                
            },
            
            {
                "id":8,
                "activity_name":"Special Agent",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                "activity_slug":"special-agent",
                "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                
            },
            {
                "id":9,
                "activity_name":"HOLLYWOOD PREMIERE",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                "activity_slug":"hollywood-premiere",
                "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
               
            },
            {
                "id":12,
                "activity_name":"Locked in the Lift",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"4",
                "price":"29.89",
                "duration":"30",
                "activity_desc":"Welcome to the 40's! You are trapped in a luxurious lift meant only for the most exclusive VIPs. See if you can piece together how to get things running again.",
                "activity_slug":"locked-in-the-lift",
                "activity_cover_image":"/assets/all-game-list/allinadventures-locked-in-the-lift.jpg",
                
            },
            
            {
                "id":13,
                "activity_name":"MAGIC CASTLE",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"4",
                "price":"29.89",
                "duration":"60",
                "activity_desc":"Welcome to the Magic Castle! Pass your entrance exam to prove you belong among the most prestigious wizards. Test your wits, courage, loyalty, and cunning.",
                "activity_slug":"magic-castle",
                "activity_cover_image":"/assets/all-game-list/allinadventures-magic-castle.jpg",
                
            },
            
            {
                "id":14,
                "activity_name":"Beat The Seat",
                "activity_type":"In-person",
                "activity_category":"other",
                "age":"All Ages (6+)",
                "min_player":"1",
                "max_player":"1",
                "price":"5",
                "duration":"2",
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
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                "activity_slug":"escape-from-alcatraz",
                "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                
                
            },
            {
                "id":2,
                "activity_name":"Treasure Island",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
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
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
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
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                "activity_slug":"sherlocks-library",
                "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
               
            },
            {
                "id":5,
                "activity_name":"Black Ops",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                "activity_slug":"black-ops",
                "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                
            },
            {
                "id":6,
                "activity_name":"Superhero's Adventure",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                "activity_slug":"superheros-adventure",
                "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                
            },
            {
                "id":7,
                "activity_name":"HOUDINI'S MAGIC CELL",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"10",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                "activity_slug":"houdinis-magic-cell",
                "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                
            },
            
            {
                "id":8,
                "activity_name":"Special Agent",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                "activity_slug":"special-agent",
                "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                
            },
            {
                "id":9,
                "activity_name":"HOLLYWOOD PREMIERE",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                "activity_slug":"hollywood-premiere",
                "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
               
            },
            
            

          ]
    },
        //=========================================================watertown-ny end
           //=========================================================west-nyack-ny list
    "west-nyack-ny":{
            "mall":"Palisades Center",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            "totalFiveStarReview": "2.9k",
            "totalPlayerEscaped": "4.8k+",
            "activity_list":[

                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"12",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"6",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                    "activity_slug":"zombie-apocalypse",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                    
                },
                {
                    "id":4,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"6",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
               
                {
                    "id":6,
                    "activity_name":"Superhero's Adventure",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"12",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":14,
                    "activity_name":"Beat The Seat",
                    "activity_type":"In-person",
                    "activity_category":"other",
                    "age":"All Ages (6+)",
                    "min_player":"1",
                    "max_player":"1",
                    "price":"5",
                    "duration":"2",
                    "activity_desc":"It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet. ",
                    "activity_slug":"beat-the-seat",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-beat-the-seat.jpg",
                    
                },
                {
                    "id":15,
                    "activity_name":"Game Show Room",
                    "activity_type":"In-person",
                    "activity_category":"other",
                    "age":"All Ages (6+)",
                    "min_player":4,
                    "max_player":8,
                    "price":33,
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
        "mall":"Poughkeepsie Galleria",
        "coverimageL":"/assets/location-hero-bg.jpg",
        "coverimageM":"/assets/location-hero.jpg",
        "totalFiveStarReview": "1.3k",
        "totalPlayerEscaped": "2.8k+",
        
        "activity_list":[

            {
                "id":1,
                "activity_name":"Escape from Alcatraz",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                "activity_slug":"escape-from-alcatraz",
                "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                
                
            },
            {
                "id":2,
                "activity_name":"Treasure Island",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                "activity_slug":"treasure-island",
                "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                
            },
            {
                "id":3,
                "activity_name":"Zombie Apocalypse",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                "activity_slug":"zombie-apocalypse",
                "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                
            },
            {
                "id":4,
                "activity_name":"Sherlock's Library",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                "activity_slug":"sherlocks-library",
                "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
               
            },
            {
                "id":5,
                "activity_name":"Black Ops",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                "activity_slug":"black-ops",
                "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                
            },
            {
                "id":6,
                "activity_name":"Superhero's Adventure",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"8",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                "activity_slug":"superheros-adventure",
                "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                
            },
            {
                "id":7,
                "activity_name":"HOUDINI'S MAGIC CELL",
                "activity_type":"In-person",
                "activity_category":"escapegame",
                "age":"All Ages (6+)",
                "min_player":"2",
                "max_player":"4",
                "price":"29.89",
                "duration":"50",
                "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                "activity_slug":"houdinis-magic-cell",
                "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                
            },
           
            {
                "id":16,
                "activity_name":"Axe Throwing",
                "activity_type":"In-person",
                "activity_category":"other",
                "age":"All Ages (13+)",
                "groupcat":"Per Lane",
                "min_player":"2",
                "max_player":"4",
                "price":"29.89",
                "duration":"60",
                "activity_desc":"Having a bad day? Don't worry! We have an awesome way to burn off that negativity and get you back to your stress-free fun self! Come throw some axes at our exciting interactive targets with your friends and family!",
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
            "mall":"Triangle Town Centerl",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            "totalFiveStarReview": "5.4k",
            "totalPlayerEscaped": "8.8k+",
            
            "activity_list":[

                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"8",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"6",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                    "activity_slug":"treasure-island",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                    
                },
                {
                    "id":3,
                    "activity_name":"Zombie Apocalypse",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"6",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                    "activity_slug":"zombie-apocalypse",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                    
                },
                {
                    "id":4,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"6",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
                {
                    "id":5,
                    "activity_name":"Black Ops",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"6",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                
                {
                    "id":8,
                    "activity_name":"Special Agent",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"6",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                    "activity_slug":"special-agent",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                    
                },
                {
                    "id":9,
                    "activity_name":"HOLLYWOOD PREMIERE",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"6",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
                    
                   
                    
                    
                    
        
                  ]
            },
                //=========================================================holyoke-ma end
                //=========================================================kingston-ma list
            "kingston-ma":{
                "mall":"Kingston Collection",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "5.6k",
                 "totalPlayerEscaped": "8.7k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
                    
                    
                   
                    {
                        "id":10,
                        "activity_name":"Lost in The Jungle",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"4",
                        "price":"39.95",
                        "duration":"60",
                        "activity_desc":"Having heard the mysterious sound of drums coming from the roof, you and your friends decided to check it out. Drawn by the beat, you find yourself trapped in the game!",
                        "activity_slug":"lost-in-the-jungle",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-lost-in-the-jungle.jpg",
                        
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
                    
                    
        
                  ]
            },
            //=========================================================milford-ct list end
            //=========================================================manchester-ct list
            "manchester-ct":{
                "mall":"The Shoppes at Buckland Hills",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "4.8k",
                "totalPlayerEscaped": "7.6.2k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
                  ]
            },
            //=========================================================manchester-ct list end
            //=========================================================manchester-ct list
            "waterbury-ct":{
                "mall":"Brass Mills Center",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "6.8k",
                "totalPlayerEscaped": "9.6.2k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
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
                "mall":"Bowie Town Center",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "6.4k",
                "totalPlayerEscaped": "12.3k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },]
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
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
                "mall":"Brunswick Square",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "2.7k",
                "totalPlayerEscaped": "5.3k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
                    
                  ]
            },
            //=========================================================east-brunswick-nj end
            //=========================================================rockaway-nj list
            "rockaway-nj":{
                "mall":"Rockaway Townsquare",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "5.3k",
                "totalPlayerEscaped": "10k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"12",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                        "activity_slug":"sherlocks-library",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                       
                    },
                    {
                        "id":5,
                        "activity_name":"Black Ops",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                        "activity_slug":"black-ops",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                        
                    },
                    {
                        "id":6,
                        "activity_name":"Superhero's Adventure",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"4",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
                    
                    {
                        "id":15,
                        "activity_name":"Game Show Room",
                        "activity_type":"In-person",
                        "activity_category":"other",
                        "age":"All Ages (6+)",
                        "min_player":4,
                        "max_player":8,
                        "price":33,
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
                "mall":"Woodbridge Center",
                "coverimageL":"/assets/location-hero-bg.jpg",
                "coverimageM":"/assets/location-hero.jpg",
                "totalFiveStarReview": "7.5k",
                "totalPlayerEscaped": "13k+",
                
                "activity_list":[

                    {
                        "id":1,
                        "activity_name":"Escape from Alcatraz",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                        "activity_slug":"escape-from-alcatraz",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                        
                        
                    },
                    {
                        "id":2,
                        "activity_name":"Treasure Island",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"12",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                        "activity_slug":"treasure-island",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                        
                    },
                    {
                        "id":3,
                        "activity_name":"Zombie Apocalypse",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                        "activity_slug":"zombie-apocalypse",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                        
                    },
                    {
                        "id":4,
                        "activity_name":"Sherlock's Library",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
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
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"10",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                        "activity_slug":"superheros-adventure",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                        
                    },
                    {
                        "id":7,
                        "activity_name":"HOUDINI'S MAGIC CELL",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                        "activity_slug":"houdinis-magic-cell",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                        
                    },
                    
                    {
                        "id":8,
                        "activity_name":"Special Agent",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"6",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                        "activity_slug":"special-agent",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                        
                    },
                    {
                        "id":9,
                        "activity_name":"HOLLYWOOD PREMIERE",
                        "activity_type":"In-person",
                        "activity_category":"escapegame",
                        "age":"All Ages (6+)",
                        "min_player":"2",
                        "max_player":"8",
                        "price":"29.89",
                        "duration":"50",
                        "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                        "activity_slug":"hollywood-premiere",
                        "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                       
                    },
                  ]
            },
            //=========================================================woodbridge-nj end
    //********************************************************************************************NJ END*/
    //********************************************************************************************TX */
        //=========================================================austin-tx list
        /*"austin-tx":{
            "mall":"crossgate mall",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            
            "activity_list":[

                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                
                {
                    "id":8,
                    "activity_name":"Special Agent",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                    "activity_slug":"special-agent",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                    
                },
                {
                    "id":9,
                    "activity_name":"HOLLYWOOD PREMIERE",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                    "activity_slug":"hollywood-premiere",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                   
                },
              ]
        }, */
        //=========================================================austin-tx end
//********************************************************************************************TX END*/
//********************************************************************************************OH */
        //=========================================================columbus-oh list
        "columbus-oh":{
            "mall":"Polaris Fashion Place",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            "totalFiveStarReview": "3.5k",
                "totalPlayerEscaped": "8.2k+",
            
            "activity_list":[

                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"8",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
                {
                    "id":5,
                    "activity_name":"Black Ops",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"8",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                    "activity_slug":"black-ops",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                    
                },
                
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"6",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"8",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"8",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                    "activity_slug":"treasure-island",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                    
                },
                
                {
                    "id":4,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"8",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
                {
                    "id":5,
                    "activity_name":"Black Ops",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"8",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                    "activity_slug":"black-ops",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                    
                },
              
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"8",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                {
                    "id":9,
                    "activity_name":"HOLLYWOOD PREMIERE",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                
                {
                    "id":8,
                    "activity_name":"Special Agent",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at the maximum security prison, Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                
                {
                    "id":8,
                    "activity_name":"Special Agent",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                    "activity_slug":"special-agent",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                    
                },
                {
                    "id":9,
                    "activity_name":"HOLLYWOOD PREMIERE",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
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
            "mall":"Sugarloaf Mills",
            "coverimageL":"/assets/location-hero-bg.jpg",
            "coverimageM":"/assets/location-hero.jpg",
            "totalFiveStarReview": "3.8k",
            "totalPlayerEscaped": "9.4k+",
            "activity_list":[

                
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
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
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"8",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                    "activity_slug":"zombie-apocalypse",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                    
                },
                {
                    "id":8,
                    "activity_name":"Special Agent",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"8",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
                    "activity_slug":"special-agent",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                    
                },
                {
                    "id":4,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"6",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
                {
                    "id":5,
                    "activity_name":"Black Ops",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"6",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                    "activity_slug":"black-ops",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                    
                },
                {
                    "id":6,
                    "activity_name":"Superhero's Adventure",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In-person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"8",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                {
                    "id":14,
                    "activity_name":"Beat The Seat",
                    "activity_type":"In-person",
                    "activity_category":"other",
                    "age":"All Ages (6+)",
                    "min_player":"1",
                    "max_player":"1",
                    "price":"5",
                    "duration":2,
                    "activity_desc":"It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet. ",
                    "activity_slug":"beat-the-seat",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-beat-the-seat.jpg",
                    
                },
    
              ]
        },
        //=========================================================lawrenceville-ga end
//********************************************************************************************GA END*/

}