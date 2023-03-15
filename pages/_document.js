
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head > 
      <link rel="icon" href="/favicon.ico" />
      {/*---- Google Tag Manager --*/}
    
   {/*========== End Google Tag Manager site_key 6LeGcqojAAAAAHqqKpiboRzFO77ptYT2QUi1dwi8=======*/}
      </Head>
      <body className='pagebody'>
        {/*---- Google Tag Manager  (noscript) --*/}
      
          {/*---- Google Tag Manager  (noscript)  --*/}
        <Main />
        <NextScript />
        
      </body>
    </Html>
  )
}