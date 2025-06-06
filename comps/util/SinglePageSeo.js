import Head from "next/head";

const SinglePageSeo = (props) => {
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
      {props.meta.metaRobot && (
        <meta name="robots" content={props.meta.metaRobot} />
      )}

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
            : "All In Adventures (formerly Mystery Room) is now more than an escape room place. Come join us to experience more entertaining activities."
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

      {props.loadFlodesk && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(w, d, t, h, s, n) {
    w.FlodeskObject = n;
    var fn = function() {
      (w[n].q = w[n].q || []).push(arguments);
    };
    w[n] = w[n] || fn;
    var f = d.getElementsByTagName(t)[0];
    var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
    var sm = d.createElement(t);
    sm.async = true;
    sm.type = 'module';
    sm.src = h + s + '.mjs' + v;
    f.parentNode.insertBefore(sm, f);
    var sn = d.createElement(t);
    sn.async = true;
    sn.noModule = true;
    sn.src = h + s + '.js' + v;
    f.parentNode.insertBefore(sn, f);
  })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');`,
          }}
        />
      )}
    </Head>
  );
};

export default SinglePageSeo;
