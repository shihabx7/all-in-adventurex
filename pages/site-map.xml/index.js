import { getServerSideSitemapLegacy } from "next-sitemap";

import { getSitemapXMLData } from "../api/getSitemapXMLData";

export async function getServerSideProps(ctx) {
  const fields = await getSitemapXMLData();

  return getServerSideSitemapLegacy(ctx, fields);
}

export default function Sitemap() {}
