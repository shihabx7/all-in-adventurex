import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/*---- Google Tag Manager --*/}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T28HX9S');`,
          }}
        />

        {/*========== End Google Tag Manager site_key 6LeGcqojAAAAAHqqKpiboRzFO77ptYT2QUi1dwi8=======*/}
      </Head>
      <body className="pagebody">
        {/*---- Google Tag Manager  (noscript) --*/}

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T28HX9S"
            height="0" width="0" style="display:none;visibility:hidden"/>`,
          }}
        />
        {/*---- Google Tag Manager  (noscript)  --*/}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
