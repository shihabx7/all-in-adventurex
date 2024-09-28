/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};
const prm = false;

// =========================================genarel redirect
const gnRed = [
  {
    source: "/virtual-games/virtual-game-show-room",
    destination: "/activities/locked-in-the-lift",
    permanent: prm,
  },
  {
    source: "/mystery-room-rebranding",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/blog/category",
    destination: "/blog",
    permanent: prm,
  },
  {
    source: "/covid-19",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/rewards-program",
    destination: "/deals-coupons",
    permanent: prm,
  },
  {
    source: "/west-nyack-ny/activities/axe-throwing",
    destination: "/west-nyack-ny/activities",
    permanent: prm,
  },

  {
    source: "/activities/magic-castle",
    destination: "/activities",
    permanent: prm,
  },
  {
    source: "/franchising",
    destination: "/franchise",
    permanent: prm,
  },
  {
    source: "/terms-of-service",
    destination: "/terms-of-services",
    permanent: prm,
  },
  {
    source: "/locations/austin-tx/events",
    destination: "/events",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-austin-tx",
    destination: "/",
    permanent: prm,
  },

  {
    source: "/gift-card",
    destination: "/gift-cards",
    permanent: prm,
  },
  {
    source: "/location",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/parties",
    destination: "/events",
    permanent: prm,
  },
  {
    source: "/corporate-events",
    destination: "/events/corporate-events",
    permanent: prm,
  },
  {
    source: "/promotions",
    destination: "/deals-coupons",
    permanent: prm,
  },
  {
    source: "/faq",
    destination: "/faqs",
    permanent: prm,
  },
  {
    source: "/contact",
    destination: "/corporate-contact",
    permanent: prm,
  },
  {
    source: "/careers/associates",
    destination: "/careers/associate",
    permanent: prm,
  },
];
// =========================================genarel redirect end
// =========================================-------------Albany NY
const albanyRed = [
  {
    source: "/locations/albany-ny/events",
    destination: "/albany-ny/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/albany-ny",
    destination: "/albany-ny/activities",
    permanent: prm,
  },
  {
    source: "/rooms/treasure-island-albany-ny",
    destination: "/albany-ny/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-albany-ny-old",
    destination: "/albany-ny/activities/superheros-adventure",
    permanent: prm,
  },
  {
    source: "/rooms/treasure-island-albany-ny",
    destination: "/albany-ny/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-albany-ny-old",
    destination: "/albany-ny/activities/superheros-adventure",
    permanent: prm,
  },
  {
    source: "/rooms/zombie-apocalypse-albany-ny",
    destination: "/albany-ny/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-albany-ny",
    destination: "/albany-ny/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-albany-ny",
    destination: "/albany-ny/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-albany-ny",
    destination: "/albany-ny/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-albany-ny",
    destination: "/albany-ny/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-albany-ny",
    destination: "/albany-ny/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-albany-ny",
    destination: "/albany-ny/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------Albany NY  end
// =========================================-------------buffalo-ny NY
const buffaloRed = [
  {
    source: "/locations/buffalo-ny",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/buffalo-ny/activities",
    destination: "/activities",
    permanent: prm,
  },
  {
    source: "/buffalo-ny/events",
    destination: "/events",
    permanent: prm,
  },
  {
    source: "/locations/buffalo-ny/events",
    destination: "/buffalo-ny/events",
    permanent: prm,
  },
  {
    source: "/buffalo-ny/gift-cards",
    destination: "/buffalo-ny",
    permanent: false,
  },

  {
    source: "/rooms/category/buffalo-ny",
    destination: "/buffalo-ny/activities",
    permanent: prm,
  },
  {
    source: "/rooms/virtualreality-buffalo-ny",
    destination: "/virtual-games",
    permanent: prm,
  },
  {
    source: "/rooms/treasure-island-buffalo-ny",
    destination: "/buffalo-ny/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-buffalo-ny",
    destination: "/buffalo-ny/activities/superheros-adventure",
    permanent: prm,
  },
  {
    source: "/rooms/treasure-island-buffalo-ny",
    destination: "/buffalo-ny/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-buffalo-ny",
    destination: "/buffalo-ny/activities/superheros-adventure",
    permanent: prm,
  },
  {
    source: "/rooms/zombie-apocalypse-buffalo-ny",
    destination: "/buffalo-ny/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-buffalo-ny",
    destination: "/buffalo-ny/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-buffalo-ny",
    destination: "/buffalo-ny/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-buffalo-ny",
    destination: "/buffalo-ny/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-buffalo-ny",
    destination: "/buffalo-ny/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-buffalo-ny",
    destination: "/buffalo-ny/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-buffalo-ny",
    destination: "/buffalo-ny/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------buffalo-ny NY  end
// =========================================-------------middletown-ny NY
const middletownRed = [
  {
    source: "/locations/middletown-ny/events",
    destination: "/middletown-ny/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/middletown-ny",
    destination: "/middletown-ny/activities",
    permanent: prm,
  },
  {
    source: "/rooms/virtualreality-middletown-ny",
    destination: "/virtual-games",
    permanent: prm,
  },
  {
    source: "/rooms/treasure-island-middletown-ny",
    destination: "/middletown-ny/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-middletown-ny-old",
    destination: "/middletown-ny/activities/superheros-adventure",
    permanent: prm,
  },
  {
    source: "/rooms/treasure-island-middletown-ny",
    destination: "/middletown-ny/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/wizarding-school-middletown-ny",
    destination: "/middletown-ny/activities/wizarding-school",
    permanent: prm,
  },
  {
    source: "/rooms/beat-the-seat-middletown-ny",
    destination: "/middletown-ny/activities/beat-the-seat",
    permanent: prm,
  },
  {
    source: "/rooms/zombie-apocalypse-middletown-ny",
    destination: "/middletown-ny/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-middletown-ny",
    destination: "/middletown-ny/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-middletown-ny",
    destination: "/middletown-ny/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-middletown-ny",
    destination: "/middletown-ny/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-middletown-ny",
    destination: "/middletown-ny/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-middletown-ny",
    destination: "/middletown-ny/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-middletown-ny",
    destination: "/middletown-ny/activities/escape-from-alcatraz",
    permanent: prm,
  },
];

// =========================================-------------syracuse-ny NY
const syracuseRed = [
  {
    source: "/locations/syracuse-ny/events",
    destination: "/syracuse-ny/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/syracuse-ny",
    destination: "/syracuse-ny/activities",
    permanent: prm,
  },

  {
    source: "/rooms/beat-the-seat-syracuse-ny",
    destination: "/syracuse-ny/activities/beat-the-seat",
    permanent: prm,
  },
  {
    source: "/rooms/locked-in-the-lift-syracuse-ny",
    destination: "/syracuse-ny/activities",
    permanent: prm,
  },
  {
    source: "/syracuse-ny/activities/locked-in-the-lift",
    destination: "/syracuse-ny/activities",
    permanent: prm,
  },
  {
    source: "/syracuse-ny/activities/magic-castle",
    destination: "/syracuse-ny/activities/",
    permanent: prm,
  },
  {
    source: "/rooms/magic-castle-syracuse-ny",
    destination: "/syracuse-ny/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-syracuse-ny",
    destination: "/syracuse-ny/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-syracuse-ny",
    destination: "/syracuse-ny/activities/superheros-adventure",
    permanent: prm,
  },
  {
    source: "/rooms/treasure-island-syracuse-ny",
    destination: "/syracuse-ny/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-syracuse-ny",
    destination: "/syracuse-ny/activities/superheros-adventure",
    permanent: prm,
  },
  {
    source: "/rooms/zombie-apocalypse-syracuse-ny",
    destination: "/syracuse-ny/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-syracuse-ny",
    destination: "/syracuse-ny/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-syracuse-ny",
    destination: "/syracuse-ny/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-syracuse-ny",
    destination: "/syracuse-ny/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-syracuse-ny",
    destination: "/syracuse-ny/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-syracuse-ny",
    destination: "/syracuse-ny/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-syracuse-ny",
    destination: "/syracuse-ny/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------syracuse-ny NY  end

// =========================================-------------watertown-ny NY
const watertownRed = [
  {
    source: "/locations/watertown-ny/events",
    destination: "/watertown-ny/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/watertown-ny",
    destination: "/watertown-ny/activities",
    permanent: prm,
  },
  {
    source: "/rooms/virtualreality-watertown-ny",
    destination: "/virtual-games",
    permanent: prm,
  },
  {
    source: "/rooms/treasure-island-watertown-ny",
    destination: "/watertown-ny/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-watertown-ny",
    destination: "/watertown-ny/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-watertown-ny",
    destination: "/watertown-ny/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-watertown-ny",
    destination: "/watertown-ny/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-watertown-ny",
    destination: "/watertown-ny/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-watertown-ny",
    destination: "/watertown-ny/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-watertown-ny",
    destination: "/watertown-ny/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-watertown-ny",
    destination: "/watertown-ny/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-watertown-ny",
    destination: "/watertown-ny/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------watertown-ny  end
// =========================================-------------west-nyack-ny NY
const westnykRed = [
  {
    source: "/locations/west-nyack-ny/events",
    destination: "/west-nyack-ny/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/west-nyack-ny",
    destination: "/west-nyack-ny/activities",
    permanent: prm,
  },

  {
    source: "/rooms/game-show-room-west-nyack-ny",
    destination: "/west-nyack-ny/activities/game-show-room",
    permanent: prm,
  },

  {
    source: "/rooms/beat-the-seat-west-nyack-ny",
    destination: "/west-nyack-ny/activities/beat-the-seat",
    permanent: prm,
  },
  {
    source: "/rooms/treasure-island-west-nyack-ny",
    destination: "/west-nyack-ny/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-west-nyack-ny",
    destination: "/west-nyack-ny/activities/superheros-adventure",
    permanent: prm,
  },
  {
    source: "/rooms/zombie-apocalypse-west-nyack-ny",
    destination: "/west-nyack-ny/activities/zombie-apocalypse",
    permanent: prm,
  },

  {
    source: "/rooms/sherlocks-library-west-nyack-ny",
    destination: "/west-nyack-ny/activities/sherlocks-library",
    permanent: prm,
  },

  {
    source: "/rooms/escape-from-alcatraz-west-nyack-ny",
    destination: "/west-nyack-ny/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------west-nyack-ny  end
// =========================================-------------raleigh-nc NY
const raleighRed = [
  {
    source: "/locations/raleigh-nc/events",
    destination: "/raleigh-nc/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/raleigh-nc",
    destination: "/raleigh-nc/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-raleigh-nc",
    destination: "/raleigh-nc/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-raleigh-nc",
    destination: "/raleigh-nc/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-raleigh-nc",
    destination: "/raleigh-nc/activities/zombie-apocalypse",
    permanent: prm,
  },

  {
    source: "/rooms/sherlocks-library-raleigh-nc",
    destination: "/raleigh-nc/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-raleigh-nc",
    destination: "/raleigh-nc/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-raleigh-nc",
    destination: "/raleigh-nc/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-raleigh-nc",
    destination: "/raleigh-nc/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------raleigh-nc  end
// =========================================-------------bensalem-pa PA
const bensalemRed = [
  {
    source: "/locations/bensalem-pa/events",
    destination: "/bensalem-pa/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/bensalem-pa",
    destination: "/bensalem-pa/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-bensalem-pa",
    destination: "/bensalem-pa/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-bensalem-pa",
    destination: "/bensalem-pa/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-bensalem-pa",
    destination: "/bensalem-pa/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-bensalem-pa",
    destination: "/bensalem-pa/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-bensalem-pa",
    destination: "/bensalem-pa/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-bensalem-pa",
    destination: "/bensalem-pa/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-bensalem-pa",
    destination: "/bensalem-pa/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-bensalem-pa",
    destination: "/bensalem-pa/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-bensalem-pa",
    destination: "/bensalem-pa/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------bensalem-pa  PA
// =========================================-------------hadley-ma MA
const hadleyRed = [
  {
    source: "/locations/hadley-ma/events",
    destination: "/hadley-ma/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/hadley-ma",
    destination: "/hadley-ma/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-hadley",
    destination: "/hadley-ma/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-hadley",
    destination: "/hadley-ma/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-hadley",
    destination: "/hadley-ma/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-hadley",
    destination: "/hadley-ma/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-hadley",
    destination: "/hadley-ma/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-hadley",
    destination: "/hadley-ma/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-hadley",
    destination: "/hadley-ma/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-hadley",
    destination: "/hadley-ma/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-hadley",
    destination: "/hadley-ma/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------hadley-ma  end
// =========================================-------------holyoke-ma MA
const holyokeRed = [
  {
    source: "/locations/holyoke-ma/events",
    destination: "/holyoke-ma/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/holyoke-ma",
    destination: "/holyoke-ma/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-holyoke",
    destination: "/holyoke-ma/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-holyoke",
    destination: "/holyoke-ma/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-holyoke",
    destination: "/holyoke-ma/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-holyoke",
    destination: "/holyoke-ma/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-holyoke",
    destination: "/holyoke-ma/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-holyoke",
    destination: "/holyoke-ma/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-holyoke",
    destination: "/holyoke-ma/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-holyoke",
    destination: "/holyoke-ma/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-holyoke",
    destination: "/holyoke-ma/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------holyoke-ma  end
// =========================================-------------kingston-ma MA
const kingstonRed = [
  {
    source: "/locations/kingston-ma/events",
    destination: "/kingston-ma/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/kingston-ma",
    destination: "/kingston-ma/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-kingston-ma",
    destination: "/kingston-ma/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-kingston-ma",
    destination: "/kingston-ma/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-kingston-ma",
    destination: "/kingston-ma/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/lost-in-the-jungle-kingston-ma",
    destination: "/kingston-ma/activities/lost-in-the-jungle",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-kingston-ma",
    destination: "/kingston-ma/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-kingston-ma",
    destination: "/kingston-ma/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-kingston-ma",
    destination: "/kingston-ma/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-kingston-ma",
    destination: "/kingston-ma/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-kingston-ma",
    destination: "/kingston-ma/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------kingston-ma  MA
// =========================================-------------n-attleborough-ma MA
const nAttleboroughRed = [
  {
    source: "/locations/n-attleborough-ma/events",
    destination: "/n-attleborough-ma/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/n-attleborough-ma",
    destination: "/n-attleborough-ma/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-n-attleborough-ma",
    destination: "/n-attleborough-ma/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-n-attleborough-ma",
    destination: "/n-attleborough-ma/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-n-attleborough-ma",
    destination: "/n-attleborough-ma/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-n-attleborough-ma",
    destination: "/n-attleborough-ma/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-n-attleborough-ma",
    destination: "/n-attleborough-ma/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-n-attleborough-ma",
    destination: "/n-attleborough-ma/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-n-attleborough-ma",
    destination: "/n-attleborough-ma/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-n-attleborough-ma",
    destination: "/n-attleborough-ma/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-n-attleborough-ma",
    destination: "/n-attleborough-ma/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------n-attleborough-ma  MA
// =========================================-------------milford-ct CT
const milfordRed = [
  {
    source: "/milford-ct/activities/houdinis-magic-cell",
    destination: "/milford-ct/activities",
    permanent: prm,
  },
  {
    source: "/locations/milford-ct/events",
    destination: "/milford-ct/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/milford-ct",
    destination: "/milford-ct/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-milford-ct",
    destination: "/milford-ct/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-milford-ct",
    destination: "/milford-ct/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-milford-ct",
    destination: "/milford-ct/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-milford-ct",
    destination: "/milford-ct/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-milford-ct",
    destination: "/milford-ct/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-milford-ct",
    destination: "/milford-ct/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-milford-ct",
    destination: "/milford-ct/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-milford-ct",
    destination: "/milford-ct/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-milford-ct",
    destination: "/milford-ct/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------milford-ct  CT
// =========================================-------------manchester-ct CT
const manchesterRed = [
  {
    source: "/locations/manchester-ct/events",
    destination: "/manchester-ct/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/manchester-ct",
    destination: "/manchester-ct/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-manchester-ct",
    destination: "/manchester-ct/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-manchester-ct",
    destination: "/manchester-ct/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-manchester-ct",
    destination: "/manchester-ct/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-manchester-ct",
    destination: "/manchester-ct/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-manchester-ct",
    destination: "/manchester-ct/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-manchester-ct",
    destination: "/manchester-ct/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-manchester-ct",
    destination: "/manchester-ct/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-manchester-ct",
    destination: "/manchester-ct/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-manchester-ct",
    destination: "/manchester-ct/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------manchester-ct  CT
// =========================================-------------waterbury-ct CT
const waterburyRed = [
  {
    source: "/locations/waterbury-ct/events",
    destination: "/waterbury-ct/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/waterbury-ct",
    destination: "/waterbury-ct/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-waterbury-ct",
    destination: "/waterbury-ct/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-waterbury-ct",
    destination: "/waterbury-ct/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-waterbury-ct",
    destination: "/waterbury-ct/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-waterbury-ct",
    destination: "/waterbury-ct/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-waterbury-ct",
    destination: "/waterbury-ct/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-waterbury-ct",
    destination: "/waterbury-ct/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-waterbury-ct",
    destination: "/waterbury-ct/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-waterbury-ct",
    destination: "/waterbury-ct/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-waterbury-ct",
    destination: "/waterbury-ct/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------waterbury-ct  CT
// =========================================-------------east-brunswick-nj NJ
const eastBrunswickRed = [
  {
    source: "/locations/east-brunswick-nj",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/east-brunswick-nj/gift-cards",
    destination: "/gift-cards",
    permanent: prm,
  },
  {
    source: "/east-brunswick-nj/contact-store",
    destination: "/corporate-contact",
    permanent: prm,
  },
  {
    source: "/east-brunswick-nj/activities",
    destination: "/activities",
    permanent: prm,
  },

  {
    source: "/east-brunswick-nj/events",
    destination: "/events",
    permanent: prm,
  },
  {
    source: "/east-brunswick-nj/activities/:slug*",
    destination: "/activities/:slug*",
    permanent: prm,
  },

  {
    source: "/east-brunswick-nj/events/:slug*",
    destination: "/events/:slug*",
    permanent: prm,
  },
  {
    source: "/locations/east-brunswick-nj/events",
    destination: "/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/east-brunswick-nj",
    destination: "/east-brunswick-nj/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-east-brunswick-nj",
    destination: "/east-brunswick-nj/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-east-brunswick-nj",
    destination: "/east-brunswick-nj/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-east-brunswick-nj",
    destination: "/east-brunswick-nj/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-east-brunswick-nj",
    destination: "/east-brunswick-nj/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-east-brunswick-nj",
    destination: "/east-brunswick-nj/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-east-brunswick-nj",
    destination: "/east-brunswick-nj/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-east-brunswick-nj",
    destination: "/east-brunswick-nj/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-east-brunswick-nj",
    destination: "/east-brunswick-nj/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-east-brunswick-nj",
    destination: "/east-brunswick-nj/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------east-brunswick-nj  NJ
// =========================================-------------rockaway-nj NJ
const rockawayRed = [
  {
    source: "/locations/rockaway-nj/events",
    destination: "/rockaway-nj/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/rockaway-nj",
    destination: "/rockaway-nj/activities",
    permanent: prm,
  },

  {
    source: "/locations/rockaway-nj/rockaway-events",
    destination: "/rockaway-nj/events",
    permanent: prm,
  },
  {
    source: "/rooms/game-show-room-rockaway-nj",
    destination: "/rockaway-nj/activities/game-show-room",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-rockaway-nj",
    destination: "/rockaway-nj/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-rockaway-nj",
    destination: "/rockaway-nj/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-rockaway-nj",
    destination: "/rockaway-nj/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-rockaway-nj",
    destination: "/rockaway-nj/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-rockaway-nj",
    destination: "/rockaway-nj/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-rockaway-nj",
    destination: "/rockaway-nj/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-rockaway-nj",
    destination: "/rockaway-nj/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-rockaway-nj",
    destination: "/rockaway-nj/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-rockaway-nj",
    destination: "/rockaway-nj/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------rockaway-nj  NJ
// =========================================-------------woodbridge-nj NJ
const woodbridgeRed = [
  {
    source: "/locations/woodbridge-nj/events",
    destination: "/woodbridge-nj/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/woodbridge-nj",
    destination: "/woodbridge-nj/activities",
    permanent: prm,
  },

  {
    source: "/locations/woodbridge-nj/woodbridge-events",
    destination: "/woodbridge-nj/events",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-woodbridge-nj",
    destination: "/woodbridge-nj/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-woodbridge-nj",
    destination: "/woodbridge-nj/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-woodbridge-nj",
    destination: "/woodbridge-nj/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-woodbridge-nj",
    destination: "/woodbridge-nj/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-woodbridge-nj",
    destination: "/woodbridge-nj/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-woodbridge-nj",
    destination: "/woodbridge-nj/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-woodbridge-nj",
    destination: "/woodbridge-nj/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-woodbridge-nj",
    destination: "/woodbridge-nj/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-woodbridge-nj",
    destination: "/woodbridge-nj/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------woodbridge-nj  NJ
// =========================================-------------bowie-md MD
const bowieRed = [
  {
    source: "/locations/bowie-md/events",
    destination: "/bowie-md/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/bowie-md",
    destination: "/bowie-md/activities",
    permanent: prm,
  },

  {
    source: "/rooms/game-show-room-bowie-md",
    destination: "/bowie-md/activities/game-show-room",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-bowie-md",
    destination: "/bowie-md/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-bowie-md",
    destination: "/bowie-md/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-bowie-md",
    destination: "/bowie-md/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-bowie-md",
    destination: "/bowie-md/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-bowie-md",
    destination: "/bowie-md/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-bowie-md",
    destination: "/bowie-md/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-bowie-md",
    destination: "/bowie-md/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-bowie-md",
    destination: "/bowie-md/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-bowie-md",
    destination: "/bowie-md/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------bowie-md  MD
// =========================================-------------white-marsh-md MD
const whitemarshRed = [
  {
    source: "/locations/white-marsh-md/events",
    destination: "/white-marsh-md/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/white-marsh-md",
    destination: "/white-marsh-md/activities",
    permanent: prm,
  },

  {
    source: "/locations/white-marsh-md/white-marsh-events",
    destination: "/white-marsh-md/events",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-white-marsh",
    destination: "/white-marsh-md/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-white-marsh",
    destination: "/white-marsh-md/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-white-marsh",
    destination: "/white-marsh-md/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-white-marsh",
    destination: "/white-marsh-md/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-white-marsh",
    destination: "/white-marsh-md/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-white-marsh",
    destination: "/white-marsh-md/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-white-marsh",
    destination: "/white-marsh-md/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-white-marsh",
    destination: "/white-marsh-md/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-white-marsh",
    destination: "/white-marsh-md/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------white-marsh-md  MD
// =========================================-------------roanoke-va VA
const roanokeRed = [
  {
    source: "/locations/roanoke-va/events",
    destination: "/roanoke-va/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/roanoke-va",
    destination: "/roanoke-va/activities",
    permanent: prm,
  },

  {
    source: "/rooms/game-show-room-roanoke-va",
    destination: "/roanoke-va/activities/game-show-room",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-roanoke-va",
    destination: "/roanoke-va/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-roanoke-va",
    destination: "/roanoke-va/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-roanoke-va",
    destination: "/roanoke-va/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-roanoke-va",
    destination: "/roanoke-va/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-roanoke-va",
    destination: "/roanoke-va/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-roanoke-va",
    destination: "/roanoke-va/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-roanoke-va",
    destination: "/roanoke-va/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-roanoke-va",
    destination: "/roanoke-va/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-roanoke-va",
    destination: "/roanoke-va/activities/escape-from-alcatraz",
    permanent: prm,
  },
];
// =========================================-------------roanoke-va  VA
// =========================================-------------lawrenceville-ga GA
const lawrencevilleRed = [
  {
    source: "/locations/lawrenceville-ga/events",
    destination: "/lawrenceville-ga/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/lawrenceville-ga",
    destination: "/lawrenceville-ga/activities",
    permanent: prm,
  },

  {
    source: "/rooms/game-show-room-lawrenceville-ga",
    destination: "/lawrenceville-ga/activities/game-show-room",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-lawrenceville-ga",
    destination: "/lawrenceville-ga/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-lawrenceville-ga",
    destination: "/lawrenceville-ga/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-lawrenceville-ga",
    destination: "/lawrenceville-ga/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-lawrenceville-ga",
    destination: "/lawrenceville-ga/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-lawrenceville-ga",
    destination: "/lawrenceville-ga/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-lawrenceville-ga",
    destination: "/lawrenceville-ga/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-lawrenceville-ga",
    destination: "/lawrenceville-ga/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-lawrenceville-ga",
    destination: "/lawrenceville-ga/activities/black-ops",
    permanent: prm,
  },
  {
    source: "/rooms/beat-the-seat-lawrenceville-ga",
    destination: "/lawrenceville-ga/activities/beat-the-seat",
    permanent: prm,
  },
];
// =========================================-------------lawrenceville-ga  GA
// =========================================-------------columbus-oh Oh
const columbusRed = [
  {
    source: "/columbus-oh/activities/houdinis-magic-cell",
    destination: "/lawrenceville-ga/activities",
    permanent: prm,
  },
  {
    source: "/locations/columbus-oh/events",
    destination: "/columbus-oh/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/columbus-oh",
    destination: "/columbus-oh/activities",
    permanent: prm,
  },

  {
    source: "/rooms/beat-the-bomb-columbus-oh",
    destination: "/locations/columbus-oh",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-columbus-oh",
    destination: "/columbus-oh/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-columbus-oh",
    destination: "/columbus-oh/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-columbus-oh",
    destination: "/columbus-oh/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-columbus-oh",
    destination: "/columbus-oh/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-columbus-oh",
    destination: "/columbus-oh/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-columbus-oh",
    destination: "/columbus-oh/activities/escape-from-alcatraz",
    permanent: prm,
  },

  {
    source: "/rooms/sherlocks-library-columbus-oh",
    destination: "/columbus-oh/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-columbus-oh",
    destination: "/columbus-oh/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-columbus-oh",
    destination: "/columbus-oh/activities/black-ops",
    permanent: prm,
  },
];
// =========================================-------------columbus-oh  Oh
// =========================================-------------dayton-oh Oh
const daytonRed = [
  {
    source: "/locations/dayton-oh/events",
    destination: "/dayton-oh/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/dayton-oh",
    destination: "/dayton-oh/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-dayton-oh",
    destination: "/dayton-oh/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-dayton-oh",
    destination: "/dayton-oh/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-dayton-oh",
    destination: "/dayton-oh/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-dayton-oh",
    destination: "/dayton-oh/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-dayton-oh",
    destination: "/dayton-oh/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-dayton-oh",
    destination: "/dayton-oh/activities/escape-from-alcatraz",
    permanent: prm,
  },

  {
    source: "/rooms/sherlocks-library-dayton-oh",
    destination: "/dayton-oh/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-dayton-oh",
    destination: "/dayton-oh/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-dayton-oh",
    destination: "/dayton-oh/activities/black-ops",
    permanent: prm,
  },
];
// =========================================-------------dayton-oh  Oh
// =========================================-------------mentor-oh Oh
const mentorRed = [
  {
    source: "/locations/mentor-oh/events",
    destination: "/mentor-oh/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/mentor-oh",
    destination: "/mentor-oh/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-mentor-oh",
    destination: "/mentor-oh/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-mentor-oh",
    destination: "/mentor-oh/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-mentor-oh",
    destination: "/mentor-oh/activities",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-mentor-oh",
    destination: "/mentor-oh/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-mentor-oh",
    destination: "/mentor-oh/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-mentor-oh",
    destination: "/mentor-oh/activities/escape-from-alcatraz",
    permanent: prm,
  },

  {
    source: "/rooms/sherlocks-library-mentor-oh",
    destination: "/mentor-oh/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-mentor-oh",
    destination: "/mentor-oh/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-mentor-oh",
    destination: "/mentor-oh/activities/black-ops",
    permanent: prm,
  },
];
// =========================================-------------mentor-oh  Oh
// =========================================------------poughkeepsieRed  ny
const poughkeepsieRed = [
  {
    source: "/locations/poughkeepsie-ny/events",
    destination: "/poughkeepsie-ny/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/poughkeepsie-ny",
    destination: "/poughkeepsie-ny/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-poughkeepsie-ny",
    destination: "/poughkeepsie-ny/activities/treasure-island",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-poughkeepsie-ny",
    destination: "/poughkeepsie-ny/activities/superheros-adventure",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-poughkeepsie-ny",
    destination: "/poughkeepsie-ny/activities/zombie-apocalypse",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-poughkeepsie-ny",
    destination: "/poughkeepsie-ny/activities/special-agent",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-poughkeepsie-ny",
    destination: "/poughkeepsie-ny/activities/hollywood-premiere",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-poughkeepsie-ny",
    destination: "/poughkeepsie-ny/activities/escape-from-alcatraz",
    permanent: prm,
  },

  {
    source: "/rooms/sherlocks-library-poughkeepsie-ny",
    destination: "/poughkeepsie-ny/activities/sherlocks-library",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-poughkeepsie-ny",
    destination: "/poughkeepsie-ny/activities/houdinis-magic-cell",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-poughkeepsie-ny",
    destination: "/poughkeepsie-ny/activities/black-ops",
    permanent: prm,
  },
];
// =========================================------------poughkeepsieRed  ny
// =========================================------------austin  tx
const austinRed = [
  {
    source: "/locations/austin-tx/events",
    destination: "/events",
    permanent: prm,
  },
  {
    source: "/rooms/category/austin-tx",
    destination: "/activities",
    permanent: prm,
  },

  {
    source: "/rooms/treasure-island-austin-tx",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-austin-tx",
    destination: "/",
    permanent: prm,
  },

  {
    source: "/rooms/zombie-apocalypse-austin-tx",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-austin-tx",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-austin-tx",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-austin-tx",
    destination: "/",
    permanent: prm,
  },

  {
    source: "/rooms/sherlocks-library-austin-tx",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-austin-tx",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-austin-tx",
    destination: "/",
    permanent: prm,
  },
];
// =========================================------------austin  tx
// =========================================------------common
const commonRed = [
  {
    source: "/2017/08",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/offline",
    destination: "/",
    permanent: prm,
  },

  {
    source: "/rooms/category",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2018/02",
    destination: "/",
    permanent: prm,
  },

  {
    source: "/2017/page/120",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/page/104",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/10/29",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/category/monroeville-pa",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/12/12",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/page/123",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/09/16",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/09/20",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/galleries/page/100",
    destination: "/gallery",
    permanent: prm,
  },
  {
    source: "/category/florence-sc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/category/aurora-il",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/category/spartanburg-sc",
    destination: "/locations",
    permanent: prm,
  },

  {
    source: "/category/florence-ky",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/locations/columbus-ga",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/category/scranton-pa",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/locations/winstonsalem-nc",
    destination: "/locations",
    permanent: prm,
  },

  {
    source: "/rooms/escape-from-alcatraz-winston-salem-nc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/treasure-island-winston-salem-nc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-winston-salem-nc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/zombie-apocalypse-winston-salem-nc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-winston-salem-nc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-winston-salem-nc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-winston-salem-nc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-winston-salem-nc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/locations/selinsgrove-pa",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-winston-salem-nc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-winston-salem-nc",
    destination: "/locations",
    permanent: prm,
  },
  //===========================selinsgrove
  {
    source: "/category/selinsgrove-pa/page/11",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/09/18/september-17th-2017-selinsgrove-pa",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-selinsgrove",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/treasure-island-selinsgrove",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-selinsgrove",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/zombie-apocalypse-selinsgrove",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-selinsgrove",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-selinsgrove",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-selinsgrove",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-selinsgrove",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-selinsgrove",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-selinsgrove",
    destination: "/locations",
    permanent: prm,
  },
  // ================================york town
  {
    source: "/locations/yorktown-heights-ny",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-yorktown-heights-ny",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/treasure-island-yorktown-heights-ny",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/superheros-adventure-yorktown-heights-ny",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/escape-from-alcatraz-room-2-yorktown-heights-ny",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/zombie-apocalypse-yorktown-heights-ny",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/special-agent-yorktown-heights-ny",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/hollywood-premiere-yorktown-heights-ny",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/sherlocks-library-yorktown-heights-ny",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/houdinis-magic-cell-yorktown-heights-ny",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/black-ops-yorktown-heights-ny",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/category/asheville-nc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/category/tuscaloosa-al",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2018/02/07",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/11/20",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/12/23",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/09/21",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/10/02",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/08/page/3",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/12/04/12317-aurora",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/09/29/092917-aurora",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/11/29/112817-aurora",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/11/29/112817-aurora",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/11/08/11717-aurora",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/rooms/beat-the-seat-scranton-pa",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/09/04/september-4-2017",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/09/24/september-24-2017",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/10/08/october-7th-2017",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/12/30/december-29-2017",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2018/01/16/january-15-2018",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/11/25/112017-112417-waterbury",
    destination: "/locations/waterbury-ct",
    permanent: prm,
  },

  {
    source: "/2017/07/29/july-29-2017",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/10/23/october-22-2017",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/09/22/september-21st-2017",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/12/23/december-23-selinsgrove",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/11/19/111917-asheville-nc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/10/08/octpber-8th-2017",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2018/01/09/december-12-2017",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/10/12/october-112017-florencesc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2018/01/08/january-8-2018",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/07/25/july-25-2017-holyoke",
    destination: "/locations/holyoke-ma",
    permanent: prm,
  },
  {
    source: "/2018/01/09/jan-8th-2018-asheville",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/12/18/december-17-2017-2",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/11/12/november-12-2017-roanoke",
    destination: "/locations/roanoke-va",
    permanent: prm,
  },
  {
    source: "/2017/10/10/october-10th-2017-hadley",
    destination: "/locations/hadley-ma",
    permanent: prm,
  },
  {
    source: "/2017/07/27/may-12-2017-hadley",
    destination: "/locations/hadley-ma",
    permanent: prm,
  },
  {
    source: "/2017/09/21/september-21st-2017-hadley",
    destination: "/locations/hadley-ma",
    permanent: prm,
  },
  {
    source: "/2017/09/29/september-28th-2017-hadley",
    destination: "/locations/hadley-ma",
    permanent: prm,
  },
  {
    source: "/2017/09/23/september-23rd-2017-hadley",
    destination: "/locations/hadley-ma",
    permanent: prm,
  },
  {
    source: "/2017/09/03/september-3-2017-hadley",
    destination: "/locations/hadley-ma",
    permanent: prm,
  },
  {
    source: "/2017/08/22/august-21-2017-selinsgrove",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/11/06/november-6-2017-manchester",
    destination: "/locations/manchester-ct",
    permanent: prm,
  },
  {
    source: "/2017/12/18/waterbury-12-17-17",
    destination: "/locations/waterbury-ct",
    permanent: prm,
  },
  {
    source: "/2018/01/03/waterbury-1-2-18",
    destination: "/locations/waterbury-ct",
    permanent: prm,
  },
  {
    source: "/2017/12/23/december-22-2017-waterbury",
    destination: "/locations/waterbury-ct",
    permanent: prm,
  },
  {
    source: "/2017/12/09/december-9-2017-holyoke",
    destination: "/locations/holyoke-ma",
    permanent: prm,
  },
  {
    source: "/2017/07/31/july-30-2017-hadley",
    destination: "/locations/hadley-ma",
    permanent: prm,
  },
  {
    source: "/2017/12/24/december-24-2017-chattanooga",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2018/01/10/january-10-2018-holyoke",
    destination: "/locations/holyoke-ma",
    permanent: prm,
  },
  {
    source: "/2017/11/18/november-18-2017-roanoke",
    destination: "/locations/roanoke-va",
    permanent: prm,
  },
  {
    source: "/2017/10/23/selinsgrove-october-23-2017",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/07/27/june-11-2017-hadley",
    destination: "/locations/hadley-ma",
    permanent: prm,
  },
  {
    source: "/2017/10/22/october-222017-florence-sc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/10/22/october-22-2017-manchester",
    destination: "/locations/manchester-ct",
    permanent: prm,
  },
  {
    source: "/2017/12/15/december-15-2017-waterbury",
    destination: "/locations/waterbury-ct",
    permanent: prm,
  },
  {
    source: "/2017/11/08/november-8-2017-chattanooga",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/08/31/august-31-2017-hadley",
    destination: "/locations/hadley-ma",
    permanent: prm,
  },
  {
    source: "/2017/08/12/august-11-2017-florence",
    destination: "/",
    permanent: prm,
  },
  {
    source: "/2017/08/14/august-13-2917-holyoke",
    destination: "/locations/holyoke-ma",
    permanent: prm,
  },
  {
    source: "/2017/12/31/december-31-2017-hadley",
    destination: "/locations/hadley-ma",
    permanent: prm,
  },
  {
    source: "/2017/10/25/october-25-2017-hadley-ma",
    destination: "/locations/hadley-ma",
    permanent: prm,
  },
  {
    source: "/2018/01/09/florence-ky-1-8-18",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2018/01/01/january-1-2017-spartanburg-sc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/12/20/december-20-2017-waterbury-ct",
    destination: "/locations/waterbury-ct",
    permanent: prm,
  },
  {
    source: "/2018/01/02/january-1-2018-waterbury-ct",
    destination: "/locations/waterbury-ct",
    permanent: prm,
  },
  {
    source: "/2017/12/24/waterbury-ct-12-24-17",
    destination: "/locations/waterbury-ct",
    permanent: prm,
  },
  {
    source: "/2017/12/29/december-28-2017-bensalem-pa",
    destination: "/locations/bensalem-pa",
    permanent: prm,
  },
  {
    source: "/2017/12/09/december-8-2017white-marsh",
    destination: "/locations/white-marsh-md",
    permanent: prm,
  },
  {
    source: "/2017/12/29/december-28-2017-white-marsh",
    destination: "/locations/white-marsh-md",
    permanent: prm,
  },
  {
    source: "/2017/09/15/september-15-2017-white-marsh",
    destination: "/locations/white-marsh-md",
    permanent: prm,
  },
  {
    source: "/2017/11/11/november-11-2017-white-marsh",
    destination: "/locations/white-marsh-md",
    permanent: prm,
  },
  {
    source: "/2017/09/19/september-19th-2017-white-marsh",
    destination: "/locations/white-marsh-md",
    permanent: prm,
  },
  {
    source: "/2018/01/09/december-19-2017-scranton-pa",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/12/21/florence-ky-12-20-17",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2018/01/02/january-1-2018-bensalem-pa",
    destination: "/locations/bensalem-pa",
    permanent: prm,
  },
  {
    source: "/2017/12/20/december-19-2017-waterbury-ct",
    destination: "/locations/waterbury-ct",
    permanent: prm,
  },
  {
    source: "/2017/10/08/october-8-2017-white-marsh-md",
    destination: "/locations/white-marsh-md",
    permanent: prm,
  },
  {
    source: "/2017/11/25/november-25-2017-white-marsh-md",
    destination: "/locations/white-marsh-md",
    permanent: prm,
  },
  {
    source: "/2017/12/15/december-11-14-2017-florence-sc",
    destination: "/locations",
    permanent: prm,
  },
  {
    source: "/2017/09/12/september-8-2017-white-marsh-2",
    destination: "/locations/white-marsh-md",
    permanent: prm,
  },
  {
    source: "/2017/11/25/november-25-2017-white-marsh-2",
    destination: "/locations/white-marsh-md",
    permanent: prm,
  },
  {
    source: "/2017/11/09/november-9-2017-white-marsh-md",
    destination: "/locations/white-marsh-md",
    permanent: prm,
  },
  // ========================================evs
  {
    source: "/locations/winstonsalem-nc/events",
    destination: "/events",
    permanent: prm,
  },
  {
    source: "/locations/selinsgrove-pa/events",
    destination: "/events",
    permanent: prm,
  },
  {
    source: "/locations/yorktown-heights-ny/events",
    destination: "/events",
    permanent: prm,
  },
  {
    source: "/locations/scranton-pa/events",
    destination: "/events",
    permanent: prm,
  },
];
// =========================================-------------Common
const wwwToHttps = [
  {
    source: "/:path*",
    has: [{ type: "host", value: "www.allinadventures.com" }],
    destination: "https://allinadventures.com/:path*",
    permanent: false,
  },
];

const allRed = [
  ...wwwToHttps,
  ...gnRed,
  ...albanyRed,
  ...buffaloRed,
  ...middletownRed,
  ...syracuseRed,
  ...watertownRed,
  ...westnykRed,
  ...raleighRed,
  ...bensalemRed,
  ...holyokeRed,
  ...hadleyRed,
  ...kingstonRed,
  ...nAttleboroughRed,
  ...milfordRed,
  ...manchesterRed,
  ...waterburyRed,
  ...eastBrunswickRed,
  ...rockawayRed,
  ...woodbridgeRed,
  ...bowieRed,
  ...whitemarshRed,
  ...roanokeRed,
  ...lawrencevilleRed,
  ...columbusRed,
  ...daytonRed,
  ...mentorRed,
  ...poughkeepsieRed,
  ...austinRed,
  ...commonRed,
];

module.exports = {
  async redirects() {
    return allRed;
  },

  presets: ["next/babel"],
  images: {
    domains: ["cdn.allinadventures.com"],
  },
};
