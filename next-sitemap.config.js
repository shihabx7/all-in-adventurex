const WEBURL = process.env.SITE_URL || "https://allinadventures.com";

// add your private routes here
const excludePath = [
  "/thank-you*",
  "/404*",
  "/locations/404*",
  "/sitemap.xml*",
  "/auth*",
  "/site-map.xml",
  "/static-sitemap.xml*",
];

// Save crawling budget by not fetching SSG meta files
const NEXT_SSG_FILES = [
  "/*.json$",
  "/*_buildManifest.js$",
  "/*_middlewareManifest.js$",
  "/*_ssgManifest.js$",
  "/*.js$",
];

/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: WEBURL,
  generateRobotsTxt: true,
  sitemapSize: 4000,
  changefreq: "daily",
  priority: 0.7,
  exclude: excludePath,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: NEXT_SSG_FILES,
      },
    ],
    //additionalSitemaps: [WEBURL + "/sitemap-0.xml", WEBURL + "/sitemap.xml"],
  },
  //sitemapBaseFileName: "sitemap.xml",
};

/*
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: excludePath,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
  outDir: "./public", // Output directory
  sitemapFilename: "sitemap.xml", // Custom sitemap filename
};
*/
