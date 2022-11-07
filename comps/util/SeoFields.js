import Head from "next/head";

const Seofields=(props)=>{

    return(
              <Head>
                
                 <title>{props.meta.title? props.meta.title:"All in adventure escape room"}</title>
                 <meta name="description" content={props.meta.description}/>
                 <meta name="keywords" content={props.meta.keywords}/>
                 <meta name="author" content={props.meta.author? props.meta.author:"SXG-41021"}/>
                 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                                 
 
                </Head>
    )
                            

}

export default Seofields