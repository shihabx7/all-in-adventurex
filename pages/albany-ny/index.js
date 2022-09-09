import React, { useEffect,useState } from "react";
import Router from 'next/router'

const locationPage=()=>{

    const [loaded,setLoaded] = useState(true)
    useEffect(() => {
       
        
            Router.replace('/locations/albany-ny')
          
        
      },[]);

    
    return ( 
        <p>
        
        </p> 
    )

}
export default locationPage