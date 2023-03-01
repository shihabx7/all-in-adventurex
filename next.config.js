/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}
const prm=false

// =========================================genarel redirect
const gnRed=[
  {
    source: '/franchising',
     destination: '/franchise',
     permanent: prm,
   },
   {
     source: '/gift-card',
      destination: '/gift-cards',
      permanent: prm,
    },
   {
     source: '/location',
      destination: '/locations',
      permanent: prm,
    },
   {
     source: '/parties',
      destination: '/events',
      permanent: prm,
    },
    {
     source: '/corporate-events',
      destination: '/corporate-events',
      permanent: prm,
    },
    {
     source: '/promotions',
      destination: '/deals-coupons',
      permanent: prm,
    },
    {
     source: '/faq',
      destination: '/faqs',
      permanent: prm,
    },
    {
     source: '/contact',
      destination: '/corporate-contact',
      permanent: prm,
    },

  ]
  // =========================================genarel redirect end
  // =========================================-------------Albany NY 
const albanyRed=[

{
  source: '/locations/albany-ny/events',
   destination: '/albany-ny/events',
   permanent: prm,
 },
 {
  source: '/rooms/category/albany-ny',
   destination: '/albany-ny/activities',
   permanent: prm,
 },
 {
  source: '/rooms/treasure-island-albany-ny',
   destination: '/albany-ny/activities/treasure-island',
   permanent: prm,
 },
 {
  source: '/rooms/superheros-adventure-albany-ny-old',
   destination: '/albany-ny/activities/superheros-adventure',
   permanent: prm,
 },
 {
  source: '/rooms/treasure-island-albany-ny',
   destination: '/albany-ny/activities/treasure-island',
   permanent: prm,
 },
 {
  source: '/rooms/superheros-adventure-albany-ny-old',
   destination: '/albany-ny/activities/superheros-adventure',
   permanent: prm,
 },
 {
  source: '/rooms/zombie-apocalypse-albany-ny',
   destination: '/albany-ny/activities/zombie-apocalypse',
   permanent: prm,
 },
 {
  source: '/rooms/special-agent-albany-ny',
   destination: '/albany-ny/activities/special-agent',
   permanent: prm,
 },
 {
  source: '/rooms/hollywood-premiere-albany-ny',
   destination: '/albany-ny/activities/hollywood-premiere',
   permanent: prm,
 },
 {
  source: '/rooms/sherlocks-library-albany-ny',
   destination: '/albany-ny/activities/sherlocks-library',
   permanent: prm,
 },
 {
  source: '/rooms/houdinis-magic-cell-albany-ny',
   destination: '/albany-ny/activities/houdinis-magic-cell',
   permanent: prm,
 },
 {
  source: '/rooms/black-ops-albany-ny',
   destination: '/albany-ny/activities/black-ops',
   permanent: prm,
 },
 {
  source: '/rooms/escape-from-alcatraz-albany-ny',
   destination: '/albany-ny/activities/escape-from-alcatraz',
   permanent: prm,
 },
 

]
 // =========================================-------------Albany NY  end
 // =========================================-------------buffalo-ny NY 
 const buffaloRed=[

  {
    source: '/locations/buffalo-ny/events',
     destination: '/buffalo-ny/events',
     permanent: prm,
   },
   {
    source: '/rooms/category/buffalo-ny',
     destination: '/buffalo-ny/activities',
     permanent: prm,
   },
   {
    source: '/rooms/virtualreality-buffalo-ny',
     destination: '/virtual-games',
     permanent: prm,
   },
   {
    source: '/rooms/treasure-island-buffalo-ny',
     destination: '/buffalo-ny/activities/treasure-island',
     permanent: prm,
   },
   {
    source: '/rooms/superheros-adventure-buffalo-ny',
     destination: '/buffalo-ny/activities/superheros-adventure',
     permanent: prm,
   },
   {
    source: '/rooms/treasure-island-buffalo-ny',
     destination: '/buffalo-ny/activities/treasure-island',
     permanent: prm,
   },
   {
    source: '/rooms/superheros-adventure-buffalo-ny',
     destination: '/buffalo-ny/activities/superheros-adventure',
     permanent: prm,
   },
   {
    source: '/rooms/zombie-apocalypse-buffalo-ny',
     destination: '/buffalo-ny/activities/zombie-apocalypse',
     permanent: prm,
   },
   {
    source: '/rooms/special-agent-buffalo-ny',
     destination: '/buffalo-ny/activities/special-agent',
     permanent: prm,
   },
   {
    source: '/rooms/hollywood-premiere-buffalo-ny',
     destination: '/buffalo-ny/activities/hollywood-premiere',
     permanent: prm,
   },
   {
    source: '/rooms/sherlocks-library-buffalo-ny',
     destination: '/buffalo-ny/activities/sherlocks-library',
     permanent: prm,
   },
   {
    source: '/rooms/houdinis-magic-cell-buffalo-ny',
     destination: '/buffalo-ny/activities/houdinis-magic-cell',
     permanent: prm,
   },
   {
    source: '/rooms/black-ops-buffalo-ny',
     destination: '/buffalo-ny/activities/black-ops',
     permanent: prm,
   },
   {
    source: '/rooms/escape-from-alcatraz-buffalo-ny',
     destination: '/buffalo-ny/activities/escape-from-alcatraz',
     permanent: prm,
   },
   
  
  ]
   // =========================================-------------buffalo-ny NY  end
   // =========================================-------------middletown-ny NY 
   const middletownRed=[

    {
      source: '/locations/middletown-ny/events',
       destination: '/middletown-ny/events',
       permanent: prm,
     },
     {
      source: '/rooms/category/middletown-ny',
       destination: '/middletown-ny/activities',
       permanent: prm,
     },
     {
      source: '/rooms/virtualreality-middletown-ny',
       destination: '/virtual-games',
       permanent: prm,
     },
     {
      source: '/rooms/treasure-island-middletown-ny',
       destination: '/middletown-ny/activities/treasure-island',
       permanent: prm,
     },
     {
      source: '/rooms/superheros-adventure-middletown-ny-old',
       destination: '/middletown-ny/activities/superheros-adventure',
       permanent: prm,
     },
     {
      source: '/rooms/treasure-island-middletown-ny',
       destination: '/middletown-ny/activities/treasure-island',
       permanent: prm,
     },
     {
      source: '/rooms/wizarding-school-middletown-ny',
       destination: '/middletown-ny/activities/wizarding-school',
       permanent: prm,
     },
     {
      source: '/rooms/beat-the-seat-middletown-ny',
       destination: '/middletown-ny/activities/beat-the-seat',
       permanent: prm,
     },
     {
      source: '/rooms/zombie-apocalypse-middletown-ny',
       destination: '/middletown-ny/activities/zombie-apocalypse',
       permanent: prm,
     },
     {
      source: '/rooms/special-agent-middletown-ny',
       destination: '/middletown-ny/activities/special-agent',
       permanent: prm,
     },
     {
      source: '/rooms/hollywood-premiere-middletown-ny',
       destination: '/middletown-ny/activities/hollywood-premiere',
       permanent: prm,
     },
     {
      source: '/rooms/sherlocks-library-middletown-ny',
       destination: '/middletown-ny/activities/sherlocks-library',
       permanent: prm,
     },
     {
      source: '/rooms/houdinis-magic-cell-middletown-ny',
       destination: '/middletown-ny/activities/houdinis-magic-cell',
       permanent: prm,
     },
     {
      source: '/rooms/black-ops-middletown-ny',
       destination: '/middletown-ny/activities/black-ops',
       permanent: prm,
     },
     {
      source: '/rooms/escape-from-alcatraz-middletown-ny',
       destination: '/middletown-ny/activities/escape-from-alcatraz',
       permanent: prm,
     },
     
    
    ]
  
     // =========================================-------------syracuse-ny NY 
     const syracuseRed=[

      {
        source: '/locations/syracuse-ny/events',
         destination: '/syracuse-ny/events',
         permanent: prm,
       },
       {
        source: '/rooms/category/syracuse-ny',
         destination: '/syracuse-ny/activities',
         permanent: prm,
       },
       
       {
        source: '/rooms/beat-the-seat-syracuse-ny',
         destination: '/syracuse-ny/activities/beat-the-seat',
         permanent: prm,
       },
       {
        source: '/rooms/locked-in-the-lift-syracuse-ny',
         destination: '/syracuse-ny/activities/locked-in-the-lift',
         permanent: prm,
       },
       {
        source: '/rooms/magic-castle-syracuse-ny',
         destination: '/syracuse-ny/activities/magic-castle',
         permanent: prm,
       },
       
       {
        source: '/rooms/treasure-island-syracuse-ny',
         destination: '/syracuse-ny/activities/treasure-island',
         permanent: prm,
       },
       {
        source: '/rooms/superheros-adventure-syracuse-ny',
         destination: '/syracuse-ny/activities/superheros-adventure',
         permanent: prm,
       },
       {
        source: '/rooms/treasure-island-syracuse-ny',
         destination: '/syracuse-ny/activities/treasure-island',
         permanent: prm,
       },
       {
        source: '/rooms/superheros-adventure-syracuse-ny',
         destination: '/syracuse-ny/activities/superheros-adventure',
         permanent: prm,
       },
       {
        source: '/rooms/zombie-apocalypse-syracuse-ny',
         destination: '/syracuse-ny/activities/zombie-apocalypse',
         permanent: prm,
       },
       {
        source: '/rooms/special-agent-syracuse-ny',
         destination: '/syracuse-ny/activities/special-agent',
         permanent: prm,
       },
       {
        source: '/rooms/hollywood-premiere-syracuse-ny',
         destination: '/syracuse-ny/activities/hollywood-premiere',
         permanent: prm,
       },
       {
        source: '/rooms/sherlocks-library-syracuse-ny',
         destination: '/syracuse-ny/activities/sherlocks-library',
         permanent: prm,
       },
       {
        source: '/rooms/houdinis-magic-cell-syracuse-ny',
         destination: '/syracuse-ny/activities/houdinis-magic-cell',
         permanent: prm,
       },
       {
        source: '/rooms/black-ops-syracuse-ny',
         destination: '/syracuse-ny/activities/black-ops',
         permanent: prm,
       },
       {
        source: '/rooms/escape-from-alcatraz-syracuse-ny',
         destination: '/syracuse-ny/activities/escape-from-alcatraz',
         permanent: prm,
       },
       
      
      ]
   // =========================================-------------syracuse-ny NY  end
   
    // =========================================-------------watertown-ny NY 
    const watertownRed=[

      {
        source: '/locations/watertown-ny/events',
         destination: '/watertown-ny/events',
         permanent: prm,
       },
       {
        source: '/rooms/category/watertown-ny',
         destination: '/watertown-ny/activities',
         permanent: prm,
       },
       {
        source: '/rooms/virtualreality-watertown-ny',
         destination: '/virtual-games',
         permanent: prm,
       },
       {
        source: '/rooms/treasure-island-watertown-ny',
         destination: '/watertown-ny/activities/treasure-island',
         permanent: prm,
       },
       {
        source: '/rooms/superheros-adventure-watertown-ny',
         destination: '/watertown-ny/activities/superheros-adventure',
         permanent: prm,
       },
      
      
       {
        source: '/rooms/zombie-apocalypse-watertown-ny',
         destination: '/watertown-ny/activities/zombie-apocalypse',
         permanent: prm,
       },
       {
        source: '/rooms/special-agent-watertown-ny',
         destination: '/watertown-ny/activities/special-agent',
         permanent: prm,
       },
       {
        source: '/rooms/hollywood-premiere-watertown-ny',
         destination: '/watertown-ny/activities/hollywood-premiere',
         permanent: prm,
       },
       {
        source: '/rooms/sherlocks-library-watertown-ny',
         destination: '/watertown-ny/activities/sherlocks-library',
         permanent: prm,
       },
       {
        source: '/rooms/houdinis-magic-cell-watertown-ny',
         destination: '/watertown-ny/activities/houdinis-magic-cell',
         permanent: prm,
       },
       {
        source: '/rooms/black-ops-watertown-ny',
         destination: '/watertown-ny/activities/black-ops',
         permanent: prm,
       },
       {
        source: '/rooms/escape-from-alcatraz-watertown-ny',
         destination: '/watertown-ny/activities/escape-from-alcatraz',
         permanent: prm,
       },
       
      
      ]
   // =========================================-------------watertown-ny  end
   // =========================================-------------west-nyack-ny NY 
   const westnykRed=[

    {
      source: '/locations/west-nyack-ny/events',
       destination: '/west-nyack-ny/events',
       permanent: prm,
     },
     {
      source: '/rooms/category/west-nyack-ny',
       destination: '/west-nyack-ny/activities',
       permanent: prm,
     },
     
     {
      source: '/rooms/game-show-room-west-nyack-ny',
       destination: '/west-nyack-ny/activities/game-show-room',
       permanent: prm,
     },
   
     {
      source: '/rooms/beat-the-seat-west-nyack-ny',
       destination: '/west-nyack-ny/activities/beat-the-seat',
       permanent: prm,
     },
     {
      source: '/rooms/treasure-island-west-nyack-ny',
       destination: '/west-nyack-ny/activities/treasure-island',
       permanent: prm,
     },
     {
      source: '/rooms/superheros-adventure-west-nyack-ny',
       destination: '/west-nyack-ny/activities/superheros-adventure',
       permanent: prm,
     },
     {
      source: '/rooms/zombie-apocalypse-west-nyack-ny',
       destination: '/west-nyack-ny/activities/zombie-apocalypse',
       permanent: prm,
     },
     
     
     {
      source: '/rooms/sherlocks-library-west-nyack-ny',
       destination: '/west-nyack-ny/activities/sherlocks-library',
       permanent: prm,
     },
     
     
     {
      source: '/rooms/escape-from-alcatraz-west-nyack-ny',
       destination: '/west-nyack-ny/activities/escape-from-alcatraz',
       permanent: prm,
     },
     
    
    ]
     // =========================================-------------west-nyack-ny  end
       // =========================================-------------raleigh-nc NY 
    const raleighRed=[

      {
        source: '/locations/raleigh-nc/events',
         destination: '/raleigh-nc/events',
         permanent: prm,
       },
       {
        source: '/rooms/category/raleigh-nc',
         destination: '/raleigh-nc/activities',
         permanent: prm,
       },
       
       
       {
        source: '/rooms/treasure-island-raleigh-nc',
         destination: '/raleigh-nc/activities/treasure-island',
         permanent: prm,
       },
       {
        source: '/rooms/superheros-adventure-raleigh-nc',
         destination: '/raleigh-nc/activities/superheros-adventure',
         permanent: prm,
       },
      
      
       {
        source: '/rooms/zombie-apocalypse-raleigh-nc',
         destination: '/raleigh-nc/activities/zombie-apocalypse',
         permanent: prm,
       },
      
       {
        source: '/rooms/sherlocks-library-raleigh-nc',
         destination: '/raleigh-nc/activities/sherlocks-library',
         permanent: prm,
       },
       {
        source: '/rooms/houdinis-magic-cell-raleigh-nc',
         destination: '/raleigh-nc/activities/houdinis-magic-cell',
         permanent: prm,
       },
       {
        source: '/rooms/black-ops-raleigh-nc',
         destination: '/raleigh-nc/activities/black-ops',
         permanent: prm,
       },
       {
        source: '/rooms/escape-from-alcatraz-raleigh-nc',
         destination: '/raleigh-nc/activities/escape-from-alcatraz',
         permanent: prm,
       },
       
      
      ]
   // =========================================-------------raleigh-nc  end
      // =========================================-------------bensalem-pa PA 
      const bensalemRed=[

        {
          source: '/locations/bensalem-pa/events',
           destination: '/bensalem-pa/events',
           permanent: prm,
         },
         {
          source: '/rooms/category/bensalem-pa',
           destination: '/bensalem-pa/activities',
           permanent: prm,
         },
         
         {
          source: '/rooms/treasure-island-bensalem-pa',
           destination: '/bensalem-pa/activities/treasure-island',
           permanent: prm,
         },
         {
          source: '/rooms/superheros-adventure-bensalem-pa',
           destination: '/bensalem-pa/activities/superheros-adventure',
           permanent: prm,
         },
        
        
         {
          source: '/rooms/zombie-apocalypse-bensalem-pa',
           destination: '/bensalem-pa/activities/zombie-apocalypse',
           permanent: prm,
         },
         {
          source: '/rooms/special-agent-bensalem-pa',
           destination: '/bensalem-pa/activities/special-agent',
           permanent: prm,
         },
         {
          source: '/rooms/hollywood-premiere-bensalem-pa',
           destination: '/bensalem-pa/activities/hollywood-premiere',
           permanent: prm,
         },
         {
          source: '/rooms/sherlocks-library-bensalem-pa',
           destination: '/bensalem-pa/activities/sherlocks-library',
           permanent: prm,
         },
         {
          source: '/rooms/houdinis-magic-cell-bensalem-pa',
           destination: '/bensalem-pa/activities/houdinis-magic-cell',
           permanent: prm,
         },
         {
          source: '/rooms/black-ops-bensalem-pa',
           destination: '/bensalem-pa/activities/black-ops',
           permanent: prm,
         },
         {
          source: '/rooms/escape-from-alcatraz-bensalem-pa',
           destination: '/bensalem-pa/activities/escape-from-alcatraz',
           permanent: prm,
         },
         
        
        ]
     // =========================================-------------bensalem-pa  PA
        // =========================================-------------hadley-ma MA 
    const hadleyRed=[

      {
        source: '/locations/hadley-ma/events',
         destination: '/hadley-ma/events',
         permanent: prm,
       },
       {
        source: '/rooms/category/hadley-ma',
         destination: '/hadley-ma/activities',
         permanent: prm,
       },
       
       {
        source: '/rooms/treasure-island-hadley',
         destination: '/hadley-ma/activities/treasure-island',
         permanent: prm,
       },
       {
        source: '/rooms/superheros-adventure-hadley',
         destination: '/hadley-ma/activities/superheros-adventure',
         permanent: prm,
       },
      
      
       {
        source: '/rooms/zombie-apocalypse-hadley',
         destination: '/hadley-ma/activities/zombie-apocalypse',
         permanent: prm,
       },
       {
        source: '/rooms/special-agent-hadley',
         destination: '/hadley-ma/activities/special-agent',
         permanent: prm,
       },
       {
        source: '/rooms/hollywood-premiere-hadley',
         destination: '/hadley-ma/activities/hollywood-premiere',
         permanent: prm,
       },
       {
        source: '/rooms/sherlocks-library-hadley',
         destination: '/hadley-ma/activities/sherlocks-library',
         permanent: prm,
       },
       {
        source: '/rooms/houdinis-magic-cell-hadley',
         destination: '/hadley-ma/activities/houdinis-magic-cell',
         permanent: prm,
       },
       {
        source: '/rooms/black-ops-hadley',
         destination: '/hadley-ma/activities/black-ops',
         permanent: prm,
       },
       {
        source: '/rooms/escape-from-alcatraz-hadley',
         destination: '/hadley-ma/activities/escape-from-alcatraz',
         permanent: prm,
       },
       
      
      ]
   // =========================================-------------hadley-ma  end
      // =========================================-------------holyoke-ma MA 
      const holyokeRed=[

        {
          source: '/locations/holyoke-ma/events',
           destination: '/holyoke-ma/events',
           permanent: prm,
         },
         {
          source: '/rooms/category/holyoke-ma',
           destination: '/holyoke-ma/activities',
           permanent: prm,
         },
         
         {
          source: '/rooms/treasure-island-holyoke',
           destination: '/holyoke-ma/activities/treasure-island',
           permanent: prm,
         },
         {
          source: '/rooms/superheros-adventure-holyoke',
           destination: '/holyoke-ma/activities/superheros-adventure',
           permanent: prm,
         },
        
        
         {
          source: '/rooms/zombie-apocalypse-holyoke',
           destination: '/holyoke-ma/activities/zombie-apocalypse',
           permanent: prm,
         },
         {
          source: '/rooms/special-agent-holyoke',
           destination: '/holyoke-ma/activities/special-agent',
           permanent: prm,
         },
         {
          source: '/rooms/hollywood-premiere-holyoke',
           destination: '/holyoke-ma/activities/hollywood-premiere',
           permanent: prm,
         },
         {
          source: '/rooms/sherlocks-library-holyoke',
           destination: '/holyoke-ma/activities/sherlocks-library',
           permanent: prm,
         },
         {
          source: '/rooms/houdinis-magic-cell-holyoke',
           destination: '/holyoke-ma/activities/houdinis-magic-cell',
           permanent: prm,
         },
         {
          source: '/rooms/black-ops-holyoke',
           destination: '/holyoke-ma/activities/black-ops',
           permanent: prm,
         },
         {
          source: '/rooms/escape-from-alcatraz-holyoke',
           destination: '/holyoke-ma/activities/escape-from-alcatraz',
           permanent: prm,
         },
         
        
        ]
     // =========================================-------------holyoke-ma  end
     // =========================================-------------kingston-ma MA 
     const kingstonRed=[

      {
        source: '/locations/kingston-ma/events',
         destination: '/kingston-ma/events',
         permanent: prm,
       },
       {
        source: '/rooms/category/kingston-ma',
         destination: '/kingston-ma/activities',
         permanent: prm,
       },
       
       {
        source: '/rooms/treasure-island-kingston-ma',
         destination: '/kingston-ma/activities/treasure-island',
         permanent: prm,
       },
       {
        source: '/rooms/superheros-adventure-kingston-ma',
         destination: '/kingston-ma/activities/superheros-adventure',
         permanent: prm,
       },
      
      
       {
        source: '/rooms/zombie-apocalypse-kingston-ma',
         destination: '/kingston-ma/activities/zombie-apocalypse',
         permanent: prm,
       },
       {
        source: '/rooms/lost-in-the-jungle-kingston-ma',
         destination: '/kingston-ma/activities/lost-in-the-jungle',
         permanent: prm,
       },
       {
        source: '/rooms/hollywood-premiere-kingston-ma',
         destination: '/kingston-ma/activities/hollywood-premiere',
         permanent: prm,
       },
       {
        source: '/rooms/sherlocks-library-kingston-ma',
         destination: '/kingston-ma/activities/sherlocks-library',
         permanent: prm,
       },
       {
        source: '/rooms/houdinis-magic-cell-kingston-ma',
         destination: '/kingston-ma/activities/houdinis-magic-cell',
         permanent: prm,
       },
       {
        source: '/rooms/black-ops-kingston-ma',
         destination: '/kingston-ma/activities/black-ops',
         permanent: prm,
       },
       {
        source: '/rooms/escape-from-alcatraz-kingston-ma',
         destination: '/kingston-ma/activities/escape-from-alcatraz',
         permanent: prm,
       },
       
      
      ]
   // =========================================-------------kingston-ma  MA
    

 const allRed=[...gnRed,...albanyRed,...buffaloRed,...middletownRed,...syracuseRed,...watertownRed,
                ...westnykRed,...raleighRed,...bensalemRed,...holyokeRed,...hadleyRed,...kingstonRed]
module.exports = {
 

  async redirects() {
    return allRed
  },
}