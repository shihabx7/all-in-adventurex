import Head from "next/head";
import Script from "next/script";

function makeJobSchema(jsonlddata) {
  // const desck = stripHTML(jsonlddata.description);
  return {
    // schema truncated for brevity
    "@context": "http://schema.org",
    "@type": "JobPosting",
    datePosted: jsonlddata.postedAt,
    description: jsonlddata.description,
    title: jsonlddata.title,
    image: jsonlddata.image,
    workHours: "Flexible",
    // validThrough: addDaysToDate(jsonlddata.postedAt, 60),
    hiringOrganization: {
      "@type": "Organization",
      name: jsonlddata.company.name,
      sameAs: jsonlddata.company.website || null,
      logo: jsonlddata.company.logo,
    },
  };
}

const Seofields = (props) => {
  const blogLDdata = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "14 Ways Json Can Improve Your SEO",
    alternativeHeadline: "and the women who love them",
    image: "http://example.com/image.jpg",
    award: "Best article ever written",
    editor: "John Doe",
    genre: "search engine optimization",
    keywords: "seo sales b2b",
    wordcount: "1120",
    publisher: "Book Publisher Inc",
    url: "http://www.example.com",
    datePublished: "2015-09-20",
    dateCreated: "2015-09-20",
    dateModified: "2015-09-20",
    description: "We love to do stuff to help people and stuff",
    articleBody:
      "You can paste your entire post in here, and yes it can get really really long.",
    author: {
      "@type": "Person",
      name: "Steve",
    },
  };
  const siteURL = "https://allinadventures.com";
  return (
    <Head>
      {/* website meta */}
      <title>
        {props.meta.title
          ? props.meta.title
          : "All In Adventures - Your Escape Room Destination"}
      </title>
      <meta
        name="description"
        content={
          props.meta.description
            ? props.meta.description
            : "All In Adventures, formerly Mystery Room, is a multi-location escape room, game show room, beat the seat, and axe throwing destination in the United States."
        }
      />
      <meta name="keywords" content={props.meta.keywords} />
      <meta name="author" content="All In Adventures" />
      <meta httpEquiv="content-language" content="en-us" />

      {props.meta.metaindex == false && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      {props.meta.metaindex == true && (
        <meta name="robots" content="index, follow" />
      )}
      {/* open graph data */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={
          props.meta.title
            ? props.meta.title
            : "All In Adventures - Your Escape Room Destination"
        }
      />
      <meta
        property="og:description"
        content={
          props.meta.description
            ? props.meta.description
            : "All In Adventures, formerly Mystery Room, is a multi-location escape room, game show room, beat the seat, and axe throwing destination in the United States."
        }
      />
      <meta
        property="og:url"
        content={props.meta.url ? siteURL + props.meta.url : siteURL}
      />
      <meta
        property="og:site_name"
        content={
          props.meta.title
            ? props.meta.title
            : "All In Adventures - Your Escape Room Destination"
        }
      />
      <meta property="og:image" content={siteURL + props.meta.metaimg} />
      <meta
        property="og:image:secure_url"
        content={siteURL + props.meta.metaimg}
      />

      {/**twitter meta */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content={
          props.meta.title
            ? props.meta.title
            : "All In Adventures - Your Escape Room Destination"
        }
      />
      <meta
        name="twitter:description"
        content={
          props.meta.description
            ? props.meta.description
            : "All In Adventures, formerly Mystery Room, is a multi-location escape room, game show room, beat the seat, and axe throwing destination in the United States."
        }
      />
      <meta name="twitter:image" content={siteURL + props.meta.metaimg} />

      <script
        key={`jobJSON-1`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogLDdata),
        }}
      />
    </Head>
  );
};

export default Seofields;
