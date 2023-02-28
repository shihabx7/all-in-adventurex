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
 


 const allRed=[...gnRed,...albanyRed,...buffaloRed,...middletownRed,...syracuseRed,...watertownRed]
module.exports = {
 

  async redirects() {
    return allRed
  },
}