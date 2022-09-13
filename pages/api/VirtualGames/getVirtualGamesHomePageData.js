
import { getTotal } from "../AllDataList/getTotal"
export const getVirtualGamesHomePageData=()=>{

    const VirtualGamesHomePageData={
        "locationlist":getTotal().locationlist,
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
                        "coverimageL":"/assets/location-hero-bg.jpg",
                        "coverimageM":"/assets/location-hero.jpg"
          },
          "virtual_game_list":[

            {
                "id":1,
                "game_name":"Madness",
                "game_desc":"Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
                "game_slug":"virtual-escape-rooms-madness",
                "game_cover_image":"/assets/event-cover-1.jpg",
                "game_type":"virtual",
                "max_player":"12",
                "min_player":"2",
                "duration":"60min",
                "age":"14+",
                "price":"46",
                "booking_link":"#"

            },
            {
                "id":2,
                "game_name":"Bomb",
                "game_desc":"Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
                "game_slug":"virtual-escape-rooms-bomb",
                "game_cover_image":"/assets/event-cover-1.jpg",
                "game_type":"virtual",
                "max_player":"12",
                "min_player":"2",
                "duration":"50min",
                "age":"14+",
                "price":"42",
                
                
            },
            {
                "id":3,
                "game_name":"Zombie Apocalypse",
                "game_desc":"Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
                "game_slug":"virtual-escape-rooms-zombie-apocalypse",
                "game_cover_image":"/assets/event-cover-1.jpg",
                "game_type":"virtual",
                "max_player":"12",
                "min_player":"2",
                "duration":"50min",
                "age":"14+",
                "price":"42",
                
                
            },
            {
                "id":4,
                "game_name":"Prison",
                "game_desc":"Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
                "game_slug":"virtual-escape-rooms-prison",
                "game_cover_image":"/assets/event-cover-1.jpg",
                "game_type":"virtual",
                "max_player":"12",
                "min_player":"2",
                "duration":"50min",
                "age":"14+",
                "price":"42",
                
                
            },
            {
                "id":5,
                "game_name":"Japan",
                "game_desc":"Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
                "game_slug":"virtual-escape-rooms-japan",
                "game_cover_image":"/assets/event-cover-1.jpg",
                "game_type":"virtual",
                "max_player":"12",
                "min_player":"2",
                "duration":"50min",
                "age":"14+",
                "price":"42",
                
                
            },
            {
                "id":6,
                "game_name":"Aztec",
                "game_desc":"Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
                "game_slug":"virtual-escape-rooms-aztec",
                "game_cover_image":"/assets/event-cover-1.jpg",
                "game_type":"virtual",
                "max_player":"12",
                "min_player":"2",
                "duration":"50min",
                "age":"14+",
                "price":"42",
                
                
            },
        ]
        
    }

    return VirtualGamesHomePageData
}