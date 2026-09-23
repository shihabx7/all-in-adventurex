import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/*---- ========================Google Tag Manager================ --*/}

        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){"use strict";function l(e){for(var t=e,r=0,n=document.cookie.split(";");r<n.length;r++){var o=n[r].split("=");if(o[0].trim()===t)return o[1]}}function s(e){return localStorage.getItem(e)}function u(e){return window[e]}function A(e,t){e=document.querySelector(e);return t?null==e?void 0:e.getAttribute(t):null==e?void 0:e.textContent}var e=window,t=document,r="script",n="dataLayer",o="https://aiasst.allinadventures.com",a="https://load.aiasst.allinadventures.com",i="5fusolfms",c="dqca1ir=GglbKzs%2BWDJBVS40ViBTEE5fSF1JFxtbEgEKBQESERAWAxIZHRYGSBACCw%3D%3D",g="cookie",v="_ga_KZM041H4LF",E="",d=!1;try{var d=!!g&&(m=navigator.userAgent,!!(m=new RegExp("Version/([0-9._]+)(.*Mobile)?.*Safari.*").exec(m)))&&16.4<=parseFloat(m[1]),f="stapeUserId"===g,I=d&&!f?function(e,t,r){void 0===t&&(t="");var n={cookie:l,localStorage:s,jsVariable:u,cssSelector:A},t=Array.isArray(t)?t:[t];if(e&&n[e])for(var o=n[e],a=0,i=t;a<i.length;a++){var c=i[a],c=r?o(c,r):o(c);if(c)return c}else console.warn("invalid uid source",e)}(g,v,E):void 0;d=d&&(!!I||f)}catch(e){console.error(e)}var m=e,g=(m[n]=m[n]||[],m[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"}),t.getElementsByTagName(r)[0]),v=I?"&bi="+encodeURIComponent(I):"",E=t.createElement(r),f=(d&&(i=8<i.length?i.replace(/([a-z]{8}$)/,"kp$1"):"kp"+i),!d&&a?a:o);E.async=!0,E.src=f+"/"+i+".js?"+c+v,null!=(e=g.parentNode)&&e.insertBefore(E,g)}();`,
          }}
        />
        {/*==============
          <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T28HX9S');`,
          }}
        />
        
        
        */}
        {/*---- faceboo ver code--*/}
        <meta
          name="facebook-domain-verification"
          content="x99i4pkiqz0qmrmgkfrtsxtm3vljha"
        />
        {/*========== End Google Tag Manager site_key 6LeGcqojAAAAAHqqKpiboRzFO77ptYT2QUi1dwi8=======*/}
        <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      </Head>
      <body className="pagebody max-w-screen">
        {/*---- Google Tag Manager  (noscript) 
          <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T28HX9S"
            height="0" width="0" style="display:none;visibility:hidden"/>`,
          }}
        />
        
        --*/}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://load.aiasst.allinadventures.com/ns.html?id=GTM-T28HX9S" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/*---- Google Tag Manager  (noscript)  --*/}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
