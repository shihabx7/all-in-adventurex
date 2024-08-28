import Head from "next/head";
import Script from "next/script";

const PageSeo = (props) => {
  const siteURL = "https://allinadventures.com";
  const imageURL = "https://cdn.allinadventures.com";
  return (
    <Head>
      {/* website meta */}
      <title>{props.meta.title}</title>
      {props.meta.canonicalURL ? (
        <link rel="canonical" href={props.meta.canonicalURL} />
      ) : (
        <link rel="canonical" href="https://allinadventures.com/" />
      )}
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

      {!props.meta.metaRobot ? (
        <meta name="robots" content="index, follow" />
      ) : (
        <meta name="robots" content={props.meta.metaRobot} />
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
        content={props.meta.url ? props.meta.url : siteURL}
      />
      <meta
        property="og:site_name"
        content={
          props.meta.title
            ? props.meta.title
            : "All In Adventures - Your Escape Room Destination"
        }
      />
      <meta property="og:image" content={props.meta.metaimg} />
      <meta property="og:image:secure_url" content={props.meta.metaimg} />

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
          props.meta.twitterMeta.description
            ? props.meta.twitterMeta.description
            : "AllinAdventures escape room blog"
        }
      />
      <meta name="twitter:image" content={props.meta.twitterMeta.imageUrl} />
      {props.meta.structuredData ? (
        <script
          key={`jobJSON-1`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(props.meta.structuredData),
          }}
        />
      ) : (
        ""
      )}
    </Head>
  );
};

export default PageSeo;
