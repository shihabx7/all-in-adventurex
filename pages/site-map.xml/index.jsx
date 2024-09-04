import { getServerSideSitemapLegacy } from "next-sitemap";
import { getSitemapXMLData } from "../api/getSitemapXMLData";

export async function getServerSideProps(ctx) {
  const fields = await getSitemapXMLData();

  return getServerSideSitemapLegacy(ctx, fields);
}

// Default export to prevent Next.js errors
export default function Sitemap() {}
