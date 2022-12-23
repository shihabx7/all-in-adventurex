export const bookingList=(activityslug,locationslug)=>{

    
    
    if(activityslug==''){
        const bookingall=blist[locationslug]
          
        return bookingall
    }
    const bookingdata={

        "shortname":blist[locationslug].shortname,
        "item":blist[locationslug][activityslug].item,
        "flow":blist[locationslug][activityslug].flow,
        "type":blist[locationslug][activityslug].type? blist[locationslug][activityslug].type:"games",
    }
   
    return bookingdata

}

const blist={
    //**************** NY ******* */
              //===================================albany-ny===========
 "albany-ny":{
        "shortname":"mysteryroom-albany",

        "escape-from-alcatraz":{
            "item":"44609",
            "flow":"17838"
        },
        "treasure-island":{
            "item":"44603",
            "flow":"17838"
        },
        "superheros-adventure":{
            "item":"44606",
            "flow":"17838"
        },
        "zombie-apocalypse":{
            "item":"44608",
            "flow":"17838"
        },
        "special-agent":{
            "item":"44602",
            "flow":"17838"
        },
        "hollywood-premiere":{
            "item":"44605",
            "flow":"17838"
        },
        "sherlocks-library":{
            "item":"44607",
            "flow":"17838"
        },
        "houdinis-magic-cell":{
            "item":"44601",
            "flow":"17838"
        },
        "black-ops":{
            "item":"44604",
            "flow":"17838"
        },
        
        "gift-card":{ "type":"gift",
            "item":"360203",
            "flow":"no"
        },
        "gift-addon":{
            "item":"349134",
            "flow":"667679"
        },
        "gift-holiday":{
            "item":"70113",
            "flow":"no"
        },
        "party-package":{
            "item":"44613",
            "flow":"no",
            "eventstatus":true,
        }
      
              },
              //===================================albany-ny end===========
              //===================================buffalo-ny===========
 "buffalo-ny":{
        "shortname":"mysteryroom-buffalo",

        "escape-from-alcatraz":{
            "item":"44871",
            "flow":"17840"
        },
        "treasure-island":{
            "item":"44874",
            "flow":"17840"
        },
        "superheros-adventure":{
            "item":"44879",
            "flow":"17840"
        },
        "zombie-apocalypse":{
            "item":"44877",
            "flow":"17840"
        },
        "special-agent":{
            "item":"44876",
            "flow":"17840"
        },
        "hollywood-premiere":{
            "item":"44872",
            "flow":"17840"
        },
        "sherlocks-library":{
            "item":"44878",
            "flow":"17840"
        },
        "houdinis-magic-cell":{
            "item":"44875",
            "flow":"17840"
        },
        "black-ops":{
            "item":"44873",
            "flow":"17840"
        },
       
        "gift-card":{ "type":"gift",
            "item":"360206",
            "flow":"no"
        },
        "gift-addon":{
            "item":"349134",
            "flow":"667679"
        },
        "gift-holiday":{
            "item":"70113",
            "flow":"no"
        },
        "party-package":{
            "item":"44880",
            "flow":"no",
            "eventstatus":false,
        }
      
      
              },
              //===================================buffalo-ny end===========
              //===================================middletown-ny===========
 "middletown-ny":{
                "shortname":"mysteryroom-middletown",
        
                "escape-from-alcatraz":{
                    "item":"44759",
                    "flow":"17844"
                },
                "treasure-island":{
                    "item":"44761",
                    "flow":"17844"
                },
                "superheros-adventure":{
                    "item":"44763",
                    "flow":"17844"
                },
                "zombie-apocalypse":{
                    "item":"44762",
                    "flow":"17844"
                },
                "special-agent":{
                    "item":"44766",
                    "flow":"17844"
                },
                "hollywood-premiere":{
                    "item":"44760",
                    "flow":"17844"
                },
                "sherlocks-library":{
                    "item":"44758",
                    "flow":"17844"
                },
                "houdinis-magic-cell":{
                    "item":"44764",
                    "flow":"17844"
                },
                "black-ops":{
                    "item":"44198",
                    "flow":"44765"
                },
                
               
                "wizarding-school":{
                    "item":"332492",
                    "flow":"17844"
                },

                "beat-the-seat":{
                    "item":"325647",
                    "flow":"17844"
                },
                
                "gift-card":{ "type":"gift",
                    "item":"360208",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"44769",
                    "flow":"no",
                    "eventstatus":true,
                }
              
              
                },
                //===================================middletown-ny end===========
                 //===================================syracuse-ny===========
"syracuse-ny":{
                "shortname":"mysteryroom-syracuse",
        
                "escape-from-alcatraz":{
                    "item":"44853",
                    "flow":"17847"
                },
                "treasure-island":{
                    "item":"44852",
                    "flow":"17847"
                },
                "superheros-adventure":{
                    "item":"44854",
                    "flow":"17847"
                },
                "zombie-apocalypse":{
                    "item":"44859",
                    "flow":"17847"
                },
                "special-agent":{
                    "item":"44857",
                    "flow":"17847"
                },
                "hollywood-premiere":{
                    "item":"44856",
                    "flow":"17847"
                },
                "sherlocks-library":{
                    "item":"44855",
                    "flow":"17847"
                },
                "houdinis-magic-cell":{
                    "item":"44860",
                    "flow":"17847"
                },
                "black-ops":{
                    "item":"44851",
                    "flow":"17847"
                },
                
                "locked-in-the-lift":{
                    "item":"332718",
                    "flow":"17847"
                },
                
                "beat-the-seat":{
                    "item":"318399",
                    "flow":"17839"
                },
                "magic-castle":{
                    "item":"333635",
                    "flow":"17847"
                },
                "gift-card":{ "type":"gift",
                    "item":"360211",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"44861",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                },
                //===================================syracuse-ny end===========
                 //===================================watertown-ny===========
"watertown-ny":{
                "shortname":"mysteryroom-watertown",
        
                "escape-from-alcatraz":{
                    "item":"44796",
                    "flow":"17848"
                },
                "treasure-island":{
                    "item":"44794",
                    "flow":"17848"
                },
                "superheros-adventure":{
                    "item":"44788",
                    "flow":"17848"
                },
                "zombie-apocalypse":{
                    "item":"44791",
                    "flow":"17848"
                },
                "special-agent":{
                    "item":"44797",
                    "flow":"17848"
                },
                "hollywood-premiere":{
                    "item":"44789",
                    "flow":"17848"
                },
                "sherlocks-library":{
                    "item":"44793",
                    "flow":"17848"
                },
                "houdinis-magic-cell":{
                    "item":"44792",
                    "flow":"17848"
                },
                "black-ops":{
                    "item":"44795",
                    "flow":"17848"
                },
               
                "gift-card":{ "type":"gift",
                    "item":"360212",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"44799",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                },
                //===================================watertown-ny end===========
                 //===================================west-nyack-ny===========
"west-nyack-ny":{
                "shortname":"mysteryroom-westnyack",
        
                "escape-from-alcatraz":{
                    "item":"44539",
                    "flow":"17849"
                },
                "treasure-island":{
                    "item":"44544",
                    "flow":"17849"
                },
                "superheros-adventure":{
                    "item":"44540",
                    "flow":"17849"
                },
                "zombie-apocalypse":{
                    "item":"44542",
                    "flow":"17849"
                },
                
                "sherlocks-library":{
                    "item":"44537",
                    "flow":"17849"
                },
                "game-show-room":{
                    "item":"277259",
                    "flow":"17839"
                },
                
                "beat-the-seat":{
                    "item":"290998",
                    "flow":"17839"
                },
                
                "gift-card":{ "type":"gift",
                    "item":"360213",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"17839",
                    "flow":"no",
                    "eventstatus":false,
                }
              
                },
                //===================================west-nyack-ny end===========
                //===================================poughkeepsie-ny===========
"poughkeepsie-ny":{
                "shortname":"allinadventures-poughkeepsie",
        
                "escape-from-alcatraz":{
                    "item":"224037",
                    "flow":"365583"
                },
                "treasure-island":{
                    "item":"224032",
                    "flow":"365583"
                },
                "superheros-adventure":{
                    "item":"224038",
                    "flow":"365583"
                },
                "zombie-apocalypse":{
                    "item":"224071",
                    "flow":"365583"
                },
               
                "sherlocks-library":{
                    "item":"224063",
                    "flow":"365583"
                },
                "houdinis-magic-cell":{
                    "item":"224057",
                    "flow":"365583"
                },
                "black-ops":{
                    "item":"224006",
                    "flow":"365583"
                },
               
                "axe-throwing":{
                    "item":"44198",
                    "flow":"365583"
                },
               
                "gift-card":{ 
                    "type":"gift",
                    "item":"360256",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"426690",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                },
                //===================================poughkeepsie-ny end===========
            
                    
     //****************-------------------------------------------------------------- NY end ******* */
      //**************** --------------------------------------------------------NC ******* */
              //===================================raleigh-nc===========
"raleigh-nc":{
                "shortname":"allinadventures-raleigh",
        
                "escape-from-alcatraz":{
                    "item":"53870",
                    "flow":"16807"
                },
                "treasure-island":{
                    "item":"53868",
                    "flow":"16807"
                },
                "superheros-adventure":{
                    "item":"53873",
                    "flow":"16807"
                },
                "zombie-apocalypse":{
                    "item":"53892",
                    "flow":"16807"
                },
                
            
                "sherlocks-library":{
                    "item":"53879",
                    "flow":"16807"
                },
                "houdinis-magic-cell":{
                    "item":"307829",
                    "flow":"16807"
                },
                "black-ops":{
                    "item":"53865",
                    "flow":"16807"
                },
                
                "gift-card":{ "type":"gift",
                    "item":"360258",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"53895",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================raleigh-nc end===========   
                            
        //****************-------------------------------------------------------------- NC end ******* */
         //**************** --------------------------------------------------------PA ******* */
              //===================================bensalem-pa===========
"bensalem-pa":{
                "shortname":"allinadventures-bensalem",
        
                "escape-from-alcatraz":{
                    "item":"54868",
                    "flow":"19822"
                },
                "treasure-island":{
                    "item":"54859",
                    "flow":"19822"
                },
                "superheros-adventure":{
                    "item":"54870",
                    "flow":"19822"
                },
                "zombie-apocalypse":{
                    "item":"54904",
                    "flow":"19822"
                },
                "special-agent":{
                    "item":"54886",
                    "flow":"19822"
                },
                "hollywood-premiere":{
                    "item":"54884",
                    "flow":"19822"
                },
                "sherlocks-library":{
                    "item":"54877",
                    "flow":"19822"
                },
                "houdinis-magic-cell":{
                    "item":"54873",
                    "flow":"19822"
                },
                "black-ops":{
                    "item":"54852",
                    "flow":"19822"
                },
               
                "gift-card":{ "type":"gift",
                    "item":"360247",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"54906",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================raleigh-nc end===========   
                            
        //****************-------------------------------------------------------------- PA end ******* */
        //**************** --------------------------------------------------------MA ******* */
              //===================================hadley-ma===========
"hadley-ma":{
                "shortname":"allinadventures-hadley",
        
                "escape-from-alcatraz":{
                    "item":"49949",
                    "flow":"15424"
                },
                "treasure-island":{
                    "item":"49947",
                    "flow":"15424"
                },
                "superheros-adventure":{
                    "item":"49952",
                    "flow":"15424"
                },
                "zombie-apocalypse":{
                    "item":"49964",
                    "flow":"15424"
                },
                "special-agent":{
                    "item":"49962",
                    "flow":"15424"
                },
                "hollywood-premiere":{
                    "item":"49960",
                    "flow":"15424"
                },
                "sherlocks-library":{
                    "item":"49959",
                    "flow":"15424"
                },
                "houdinis-magic-cell":{
                    "item":"49954",
                    "flow":"15424"
                },
                "black-ops":{
                    "item":"49937",
                    "flow":"15424"
                },
                
                "gift-card":{ "type":"gift",
                    "item":"360214",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"50101",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================hadley-ma===========  
             //===================================holyoke-ma===========
"holyoke-ma":{
                "shortname":"allinadventures-holyoke",
        
                "escape-from-alcatraz":{
                    "item":"51210",
                    "flow":"15419"
                },
                "treasure-island":{
                    "item":"51203",
                    "flow":"15419"
                },
                "superheros-adventure":{
                    "item":"51211",
                    "flow":"15419"
                },
                "hollywood-premiere":{
                    "item":"51221",
                    "flow":"15419"
                },
                "sherlocks-library":{
                    "item":"51218",
                    "flow":"15419"
                },
                "houdinis-magic-cell":{
                    "item":"51215",
                    "flow":"15419"
                },
                "black-ops":{
                    "item":"53492",
                    "flow":"15419"
                },
                
                "gift-card":{ "type":"gift",
                    "item":"360215",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"51224",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================holyoke-ma===========   
             //===================================kingston-ma===========
"kingston-ma":{
                "shortname":"mysteryroom-kingston",
        
                "escape-from-alcatraz":{
                    "item":"44587",
                    "flow":"17841"
                },
                "treasure-island":{
                    "item":"44588",
                    "flow":"17841"
                },
                "superheros-adventure":{
                    "item":"44589",
                    "flow":"17841"
                },
                "zombie-apocalypse":{
                    "item":"44581",
                    "flow":"17841"
                },
                
                "hollywood-premiere":{
                    "item":"44582",
                    "flow":"17841"
                },
                "sherlocks-library":{
                    "item":"44584",
                    "flow":"17841"
                },
                "houdinis-magic-cell":{
                    "item":"44586",
                    "flow":"17841"
                },
                "black-ops":{
                    "item":"44585",
                    "flow":"17841"
                },
                "lost-in-the-jungle":{
                    "item":"332716",
                    "flow":"17841"
                },
                
                "gift-card":{ "type":"gift",
                    "item":"360207",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"44592",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================kingston-ma=========== 
             //===================================n-attleborough-ma===========
"n-attleborough-ma":{
                "shortname":"mysteryroom-attleboro",
        
                "escape-from-alcatraz":{
                    "item":"44779",
                    "flow":"17846"
                },
                "treasure-island":{
                    "item":"44785",
                    "flow":"17846"
                },
                "superheros-adventure":{
                    "item":"44780",
                    "flow":"17846"
                },
                "zombie-apocalypse":{
                    "item":"44786",
                    "flow":"17846"
                },
                "special-agent":{
                    "item":"44782",
                    "flow":"17846"
                },
                "hollywood-premiere":{
                    "item":"44781",
                    "flow":"17846"
                },
                "sherlocks-library":{
                    "item":"44198",
                    "flow":"17846"
                },
                "houdinis-magic-cell":{
                    "item":"44784",
                    "flow":"17846"
                },
                "black-ops":{
                    "item":"44787",
                    "flow":"17846"
                },
                
                "gift-card":{ "type":"gift",
                    "item":"360205",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"48113",
                    "flow":"no",
                    "eventstatus":true,
                }
             },
             //===================================n-attleborough-ma=========== 
        //****************-------------------------------------------------------------- MA end ******* */
        //****************-------------------------------------------------------------- Tx end ******* */
             //===================================austin-tx===========
             "austin-tx":{
                "shortname":"mysteryroom-austin",
        
                "escape-from-alcatraz":{
                    "item":"44198",
                    "flow":"17839"
                },
                "treasure-island":{
                    "item":"44198",
                    "flow":"17839"
                },
                "superheros-adventure":{
                    "item":"44198",
                    "flow":"17839"
                },
                "zombie-apocalypse":{
                    "item":"44198",
                    "flow":"17839"
                },
                "special-agent":{
                    "item":"44198",
                    "flow":"17839"
                },
                "hollywood-premiere":{
                    "item":"44198",
                    "flow":"17839"
                },
                "sherlocks-library":{
                    "item":"44198",
                    "flow":"17839"
                },
                "houdinis-magic-cell":{
                    "item":"44198",
                    "flow":"17839"
                },
                "black-ops":{
                    "item":"44198",
                    "flow":"17839"
                },
                "lost-in-the-jungle":{
                    "item":"44198",
                    "flow":"17839"
                },
                "virtual-reality":{
                    "item":"44198",
                    "flow":"17839"
                },
                "wizarding-school":{
                    "item":"44198",
                    "flow":"17839"
                },
                "locked-in-the-lift":{
                    "item":"44198",
                    "flow":"17839"
                },
                "game-show-room":{
                    "item":"44198",
                    "flow":"17839"
                },
                "axe-throwing":{
                    "item":"44198",
                    "flow":"17839"
                },
                "beat-the-seat":{
                    "item":"44198",
                    "flow":"17839"
                },
                "magic-castle":{
                    "item":"44198",
                    "flow":"17839"
                },
                "gift-card":{ "type":"gift",
                    "item":"360204",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"17839",
                    "flow":"no"
                }
              
                      },
             //===================================n-attleborough-ma=========== 

                            
        //****************-------------------------------------------------------------- Tx end ******* */
        //****************-------------------------------------------------------------- CT end ******* */
             //===================================milford-ct===========
             "milford-ct":{
                "shortname":"mysteryroom-milford",
        
                "escape-from-alcatraz":{
                    "item":"44820",
                    "flow":"2018"
                },
                "treasure-island":{
                    "item":"44827",
                    "flow":"2018"
                },
                
                "zombie-apocalypse":{
                    "item":"44828",
                    "flow":"2018"
                },
                
                "hollywood-premiere":{
                    "item":"44823",
                    "flow":"2018"
                },
                "sherlocks-library":{
                    "item":"44825",
                    "flow":"2018"
                },
                "houdinis-magic-cell":{
                    "item":"44826",
                    "flow":"2018"
                },
                "black-ops":{
                    "item":"44829",
                    "flow":"2018"
                },
                
                "gift-card":{ "type":"gift",
                    "item":"360209",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"44849",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================milford-ct=========== 
             //===================================manchester-ct===========
             "manchester-ct":{
                "shortname":"allinadventures-manchester",
        
                "escape-from-alcatraz":{
                    "item":"54562",
                    "flow":"1750"
                },
                "treasure-island":{
                    "item":"54561",
                    "flow":"1750"
                },
                "superheros-adventure":{
                    "item":"54563",
                    "flow":"1750"
                },
                "zombie-apocalypse":{
                    "item":"54570",
                    "flow":"1750"
                },
                "special-agent":{
                    "item":"54568",
                    "flow":"1750"
                },
                "hollywood-premiere":{
                    "item":"54566",
                    "flow":"1750"
                },
                "sherlocks-library":{
                    "item":"54565",
                    "flow":"1750"
                },
                "houdinis-magic-cell":{
                    "item":"54564",
                    "flow":"1750"
                },
                "black-ops":{
                    "item":"54560",
                    "flow":"1750"
                },
                "gift-card":{ "type":"gift",
                    "item":"360244",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"54571",
                    "flow":"no",
                    "eventstatus":true,
                }
            },
             //===================================manchester-ct========== 
             //===================================waterbury-ct===========
             "waterbury-ct":{
                "shortname":"allinadventures-waterbury",
        
                "escape-from-alcatraz":{
                    "item":"54883",
                    "flow":"751"
                },
                "treasure-island":{
                    "item":"54882",
                    "flow":"751"
                },
                "superheros-adventure":{
                    "item":"54885",
                    "flow":"751"
                },
                "zombie-apocalypse":{
                    "item":"54885",
                    "flow":"751"
                },
                "special-agent":{
                    "item":"54903",
                    "flow":"751"
                },
                "hollywood-premiere":{
                    "item":"54890",
                    "flow":"751"
                },
                "sherlocks-library":{
                    "item":"54888",
                    "flow":"751"
                },
                "houdinis-magic-cell":{
                    "item":"54887",
                    "flow":"751"
                },
                "black-ops":{
                    "item":"54878",
                    "flow":"751"
                },
               
                "gift-card":{ "type":"gift",
                    "item":"360245",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"54908",
                    "flow":"no",
                    "eventstatus":true,
                }
             },
             //===================================waterbury-ct========== 
 //****************-------------------------------------------------------------- CT end ******* */
  //****************-------------------------------------------------------------- NJ  ******* */

             //===================================rockaway-nj===========
             "woodbridge-nj":{
                "shortname":"allinadventures-woodbridge",
        
                "escape-from-alcatraz":{
                    "item":"55030",
                    "flow":"16814"
                },
                "treasure-island":{
                    "item":"55026",
                    "flow":"16814"
                },
                "superheros-adventure":{
                    "item":"55032",
                    "flow":"16814"
                },
                "zombie-apocalypse":{
                    "item":"55162",
                    "flow":"16814"
                },
                "special-agent":{
                    "item":"55043",
                    "flow":"16814"
                },
                "hollywood-premiere":{
                    "item":"55041",
                    "flow":"16814"
                },
                "sherlocks-library":{
                    "item":"55037",
                    "flow":"16814"
                },
                "houdinis-magic-cell":{
                    "item":"55035",
                    "flow":"16814"
                },
                "black-ops":{
                    "item":"55023",
                    "flow":"16814"
                },
               
                "gift-card":{ "type":"gift",
                    "item":"360249",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"55163",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================rockaway-nj========== 
              //===================================east-brunswick-nj==========
              "rockaway-nj":{
                "shortname":"mysteryroom-rockaway",
        
                "escape-from-alcatraz":{
                    "item":"44839",
                    "flow":"17098"
                },
                "treasure-island":{
                    "item":"44838",
                    "flow":"17098"
                },
                "superheros-adventure":{
                    "item":"44840",
                    "flow":"17098"
                },
                "zombie-apocalypse":{
                    "item":"44843",
                    "flow":"17098"
                },
                
                "hollywood-premiere":{
                    "item":"44842",
                    "flow":"17098"
                },
                "sherlocks-library":{
                    "item":"44841",
                    "flow":"17098"
                },
                "houdinis-magic-cell":{
                    "item":"44844",
                    "flow":"17098"
                },
                "black-ops":{
                    "item":"44836",
                    "flow":"17098"
                },
                
                "game-show-room":{
                    "item":"294163",
                    "flow":"17098"
                },
                
                "gift-card":{ "type":"gift",
                    "item":"360210",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"47198",
                    "flow":"no",
                    "eventstatus":true,
                }
              
             },
             //===================================east-brunswick-nj========== 
              //===================================woodbridge-nj==========
              "east-brunswick-nj":{
                "shortname":"allinadventures-east-brunswick-nj",
        
                "escape-from-alcatraz":{
                    "item":"177623",
                    "flow":"29545"
                },
                "treasure-island":{
                    "item":"177622",
                    "flow":"29545"
                },
                "superheros-adventure":{
                    "item":"177624",
                    "flow":"29545"
                },
               
                
                "hollywood-premiere":{
                    "item":"177628",
                    "flow":"29545"
                },
                "sherlocks-library":{
                    "item":"177627",
                    "flow":"29545"
                },
                "houdinis-magic-cell":{
                    "item":"177625",
                    "flow":"29545"
                },
                "black-ops":{
                    "item":"177603",
                    "flow":"29545"
                },
                
                "gift-card":{ "type":"gift",
                    "item":"360251",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"177619",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================waterbury-ct========== 

                            
        //****************-------------------------------------------------------------- NJ end ******* */
        //****************-------------------------------------------------------------- MD  ******* */

             //===================================bowie-md===========
             "bowie-md":{
                "shortname":"allinadventures-bowie",
        
                "escape-from-alcatraz":{
                    "item":"104494",
                    "flow":"17839"
                },
                "treasure-island":{
                    "item":"104493",
                    "flow":"29227"
                },
                "superheros-adventure":{
                    "item":"104495",
                    "flow":"29227"
                },
                "zombie-apocalypse":{
                    "item":"44198",
                    "flow":"29227"
                },
                "special-agent":{
                    "item":"44198",
                    "flow":"29227"
                },
                
                "sherlocks-library":{
                    "item":"104497",
                    "flow":"29227"
                },
                "houdinis-magic-cell":{
                    "item":"104496",
                    "flow":"29227"
                },
                "black-ops":{
                    "item":"104491",
                    "flow":"29227"
                },
                
                "gift-card":{ "type":"gift",
                    "item":"360250",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"104527",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================bowie-md========== 
              //===================================white-marsh-md==========
              "white-marsh-md":{
                "shortname":"allinadventures-whitemarsh",
        
                "escape-from-alcatraz":{
                    "item":"53750",
                    "flow":"14683"
                },
                "treasure-island":{
                    "item":"53747",
                    "flow":"14683"
                },
                "superheros-adventure":{
                    "item":"53755",
                    "flow":"14683"
                },
                "zombie-apocalypse":{
                    "item":"53772",
                    "flow":"14683"
                },
                "special-agent":{
                    "item":"53766",
                    "flow":"14683"
                },
                "hollywood-premiere":{
                    "item":"53763",
                    "flow":"14683"
                },
                "sherlocks-library":{
                    "item":"53760",
                    "flow":"14683"
                },
                "houdinis-magic-cell":{
                    "item":"53756",
                    "flow":"14683"
                },
                "black-ops":{
                    "item":"53743",
                    "flow":"14683"
                },
                
                "gift-card":{ "type":"gift",
                    "item":"360217",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"17839",
                    "flow":"no",
                    "eventstatus":false,
                }
              
                      },
             //===================================white-marsh-md========== 
    //****************-------------------------------------------------------------- VA end ******* */
              //===================================roanoke-va==========
              "roanoke-va":{
                "shortname":"allinadventures-roanoke",
        
                "escape-from-alcatraz":{
                    "item":"54385",
                    "flow":"5835"
                },
                "treasure-island":{
                    "item":"54384",
                    "flow":"17839"
                },
                "superheros-adventure":{
                    "item":"54388",
                    "flow":"5835"
                },
                "zombie-apocalypse":{
                    "item":"54396",
                    "flow":"5835"
                },
                "special-agent":{
                    "item":"54392",
                    "flow":"5835"
                },
                "hollywood-premiere":{
                    "item":"54391",
                    "flow":"5835"
                },
                "sherlocks-library":{
                    "item":"54390",
                    "flow":"5835"
                },
                "houdinis-magic-cell":{
                    "item":"54389",
                    "flow":"5835"
                },
                "black-ops":{
                    "item":"54383",
                    "flow":"5835"
                },
               
                "gift-card":{ "type":"gift",
                    "item":"360257",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"54397",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================roanoke-va========== 

                            
        //****************-------------------------------------------------------------- VA end ******* */
        //****************-------------------------------------------------------------- GA end ******* */
              //===================================lawrenceville-ga==========
              "lawrenceville-ga":{
                "shortname":"mysteryroom-lawrenceville",
        
                "special-agent":{
                    "item":"415147",
                    "flow":"17843"
                },
                "treasure-island":{
                    "item":"370146",
                    "flow":"17843"
                },
                "superheros-adventure":{
                    "item":"44729",
                    "flow":"17843"
                },
                "zombie-apocalypse":{
                    "item":"44727",
                    "flow":"17843"
                },
               
                "sherlocks-library":{
                    "item":"44728",
                    "flow":"17843"
                },
                "houdinis-magic-cell":{
                    "item":"44730",
                    "flow":"17843"
                },
                "black-ops":{
                    "item":"44724",
                    "flow":"17843"
                },
               
                "beat-the-seat":{
                    "item":"315932",
                    "flow":"17843"
                },
                
                
                "gift-card":{ "type":"gift",
                    "item":"357804",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"44742",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================lawrenceville-ga========== 

                            
        //****************-------------------------------------------------------------- VA end ******* */
         //****************-------------------------------------------------------------- OH end ******* */
              //===================================columbus-oh==========
              "columbus-oh":{
                "shortname":"allinadventures-columbus-oh",
        
                "escape-from-alcatraz":{
                    "item":"55169",
                    "flow":"16809"
                },
                "treasure-island":{
                    "item":"55168",
                    "flow":"16809"
                },
                
                
                "sherlocks-library":{
                    "item":"55172",
                    "flow":"16809"
                },
                "houdinis-magic-cell":{
                    "item":"55171",
                    "flow":"16809"
                },
                "black-ops":{
                    "item":"55166",
                    "flow":"16809"
                },
               
                "gift-card":{ "type":"gift",
                    "item":"360253",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"55177",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================columbus-oh========== 
             //===================================mentor-oh==========
             "mentor-oh":{
                "shortname":"allinadventures-mentor",
        
                "escape-from-alcatraz":{
                    "item":"53871",
                    "flow":"16802"
                },
                "treasure-island":{
                    "item":"53867",
                    "flow":"16802"
                },
                "superheros-adventure":{
                    "item":"44198",
                    "flow":"16802"
                },
                "zombie-apocalypse":{
                    "item":"44198",
                    "flow":"16802"
                },
                
                "hollywood-premiere":{
                    "item":"53882",
                    "flow":"16802"
                },
                "sherlocks-library":{
                    "item":"53878",
                    "flow":"16802"
                },
                "houdinis-magic-cell":{
                    "item":"53875",
                    "flow":"16802"
                },
                "black-ops":{
                    "item":"53864",
                    "flow":"16802"
                },
                
                "gift-card":{ "type":"gift",
                    "item":"360254",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"53894",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================mentor-oh========== 
             //===================================dayton-oh==========
             "dayton-oh":{
                "shortname":"allinadventures-dayton",
        
                "escape-from-alcatraz":{
                    "item":"55209",
                    "flow":"7366"
                },
                "treasure-island":{
                    "item":"55207",
                    "flow":"7366"
                },
                "superheros-adventure":{
                    "item":"55210",
                    "flow":"7366"
                },
                "zombie-apocalypse":{
                    "item":"55218",
                    "flow":"7366"
                },
                "special-agent":{
                    "item":"55216",
                    "flow":"7366"
                },
                
                "sherlocks-library":{
                    "item":"55213",
                    "flow":"7366"
                },
                "houdinis-magic-cell":{
                    "item":"55211",
                    "flow":"7366"
                },
                "black-ops":{
                    "item":"55206",
                    "flow":"7366"
                },
               
                "gift-card":{ "type":"gift",
                    "item":"360255",
                    "flow":"no"
                },
                "gift-addon":{
                    "item":"349134",
                    "flow":"667679"
                },
                "gift-holiday":{
                    "item":"70113",
                    "flow":"no"
                },
                "party-package":{
                    "item":"55219",
                    "flow":"no",
                    "eventstatus":true,
                }
              
                      },
             //===================================dayton-oh========== 

                            
        //****************-------------------------------------------------------------- OH end ******* */
    
}