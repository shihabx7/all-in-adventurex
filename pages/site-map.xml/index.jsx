import { getServerSideSitemapLegacy } from "next-sitemap";
import { getSiteMapXmlData } from "../api/getSitemapXMLData";

export async function getServerSideProps(ctx) {
  const fields = await getSiteMapXmlData();

  return getServerSideSitemapLegacy(ctx, fields);
}

// Default export to prevent Next.js errors
export default function Sitemap() {}
