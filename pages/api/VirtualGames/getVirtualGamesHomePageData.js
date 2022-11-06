
import { getTotal } from "../AllDataList/getTotal"
export const getVirtualGamesHomePageData=()=>{

    const VirtualGamesHomePageData={
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
                        
                        
                        "pagetitle":"All Virtual Escape Games",
                        "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today.",
                        "totalLocations": getTotal().totalLocations,
                        "totalUniqueGames": getTotal().uniqueGames,
                        "totalFiveStarReview": getTotal().totalReview,
                        "totalPlayerEscaped": getTotal().toalPlayerEscape,
                        "coverimageL":"/assets/all-game-desktop-hero/All-virutal-Game-Page-Hero-Image.jpg",
                        "coverimageM":"/assets/all-game-mobile-hero/All-virutal-Game-Page-Hero-Image-mobile.jpg"
          },
          "virtual_game_list":[

            {
                "id":1,
                "game_name":"Madness",
                "game_desc":"Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor. Once famed for his psychiatric breakthroughs, he grew distrustful of those around him, and gradually withdrew from society",
                "game_slug":"virtual-escape-rooms-madness",
                "game_cover_image":"/assets/all-game-list/allinadventures-virtual-escape-room-madness.jpg",
                "game_type":"virtual",
                "max_player":"6",
                "min_player":"2",
                "duration":"30",
                "age":"All Age (6+)",
                "price":"147",
                "booking_link":"#"

            },
            {
                "id":2,
                "game_name":"Bomb",
                "game_desc":"The dire threat of a cold war nuclear holocaust is slowly deescalating. Both East and West have agreed to back down. The world can breathe again. But then, without warning, a rogue agent has deserted and taken a thermonuclear warhead with him.",
                "game_slug":"virtual-escape-rooms-bomb",
                "game_cover_image":"/assets/all-game-list/allinadventures-virtual-escape-room-bomb.jpg",
                "game_type":"virtual",
                "max_player":"6",
                "min_player":"2",
                "duration":"30",
                "age":"All Age (6+)",
                "price":"147",
                
                
            },
            {
                "id":3,
                "game_name":"Zombie Apocalypse",
                "game_desc":"The test tube containing a clear blue liquid virus accidentally slipped from the hand of the lab assistant and fell to the floor, shattering into thousands of pieces. Seconds later, the alarm sounds as the laboratory goes into automatic lock-down.",
                "game_slug":"virtual-escape-rooms-zombie-apocalypse",
                "game_cover_image":"/assets/all-game-list/allinadventures-virtual-escape-room-zombie-apocalypse.jpg",
                "game_type":"virtual",
                "max_player":"6",
                "min_player":"2",
                "duration":"30",
                "age":"All Age (6+)",
                "price":"147",
                
                
            },
            {
                "id":4,
                "game_name":"Prison",
                "game_desc":"A strong shove in the back and you're pushed into a tiny prison cell. The cold iron door clangs shut. You hear yourself pleading that this has all been a terrible mistake. You haven't done anything wrong. You've been set up to take the fall for someone else. You've been framed. But all your pleas fall on deaf ears.",
                "game_slug":"virtual-escape-rooms-prison",
                "game_cover_image":"/assets/all-game-list/allinadventures-virtual-escape-room-prison.jpg",
                "game_type":"virtual",
                "max_player":"6",
                "min_player":"2",
                "duration":"30",
                "age":"All Age (6+)",
                "price":"147",
                
                
            },
            {
                "id":5,
                "game_name":"Japan",
                "game_desc":"We find ourselves transported back to feudal Japan in the twelfth century at the house of a Kamakura shogun. As usual the house is full of Samurai who act as guards. The daimyo are visiting and have bought not only their own Samurai, but also the dreaded Ninja spies.",
                "game_slug":"virtual-escape-rooms-japan",
                "game_cover_image":"/assets/all-game-list/allinadventures-virtual-escape-room-japan.jpg",
                "game_type":"virtual",
                "max_player":"6",
                "min_player":"2",
                "duration":"30",
                "age":"All Age (6+)",
                "price":"147",
                
                
            },
            {
                "id":6,
                "game_name":"Aztec",
                "game_desc":"The year is 1519 and you find yourself in the jungle near the Mexican capital city of Tenochtitlan, as a Spanish conquistador. You have already have heard the natives speak of the treasure of the Lost City of Gold. There the Emperor Tlatoani Montezuma has hidden jewels from his palace of Axayacati.",
                "game_slug":"virtual-escape-rooms-aztec",
                "game_cover_image":"/assets/all-game-list/allinadventures-virtual-escape-room-aztec.jpg",
                "game_type":"virtual",
                "max_player":"6",
                "min_player":"2",
                "duration":"30",
                "age":"All Age (6+)",
                "price":"147",
                
                
            },
        ]
        
    }

    return VirtualGamesHomePageData
}