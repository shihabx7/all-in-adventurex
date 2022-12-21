import Head from "next/head";

const Seofields=(props)=>{

    const siteURL="https://allinadventures.com"
    return(
              <Head>
                {/* website meta */}
                 <title>{props.meta.title? props.meta.title:"All In Adventures - Your Escape Room Destination"}</title>
                 <meta name="description" content={props.meta.description? props.meta.description:"All In Adventures, formerly Mystery Room, is a multi-location escape room, game show room, beat the seat, and axe throwing destination in the United States."}/>
                 <meta name="keywords" content={props.meta.keywords}/>
                 <meta name="author" content="All In Adventures"/>
                 <meta http-equiv="content-language" content="en-us"/>
                 
                {
                    props.meta.metaindex==false &&
                    <meta name="robots" content="noindex, nofollow"/>
                }
                {
                    props.meta.metaindex==true &&
                    <meta name="robots" content="index, follow"/>
                }
                 {/* open graph data */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.meta.title? props.meta.title:"All In Adventures - Your Escape Room Destination"} />
                <meta property="og:description" content={props.meta.description? props.meta.description:"All In Adventures, formerly Mystery Room, is a multi-location escape room, game show room, beat the seat, and axe throwing destination in the United States."} />
                <meta property="og:url" content={props.meta.url? siteURL+props.meta.url:siteURL} />
                <meta property="og:site_name" content={props.meta.title? props.meta.title:"All In Adventures - Your Escape Room Destination"} />
                <meta property="og:image" content={siteURL+props.meta.metaimg} />
                <meta property="og:image:secure_url" content={siteURL+props.meta.metaimg} />

                {/**twitter meta */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={props.meta.title? props.meta.title:"All In Adventures - Your Escape Room Destination"} />
                <meta name="twitter:description" content={props.meta.description? props.meta.description:"All In Adventures, formerly Mystery Room, is a multi-location escape room, game show room, beat the seat, and axe throwing destination in the United States."} />
                <meta name="twitter:image" content={siteURL+props.meta.metaimg} />
                                 
 
                </Head>
    )
                            

}

export default Seofields