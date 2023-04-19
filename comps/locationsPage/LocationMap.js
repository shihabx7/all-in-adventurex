
import { useState,useEffect } from "react";


const LocationMap=(props)=>{
    const centerLat=props.position.lat
    const centerLng=props.position.lng

    const place_id=props.place_id
    console.log(place_id)

const buildFrame=()=>{
    const mapkey="AIzaSyBS0vGJ-Mr17vG4KvmX3VvC_JNI8isALq0"
    const mapurl="https://www.google.com/maps/embed/v1/place?key="+mapkey+"&center="+centerLat+","+centerLng+"&zoom=16"+"&q=place_id:"+place_id
    console.log(mapurl)
    return mapurl
}
   

    
    return(
        <div className="w-full h-full"> 
        <iframe width="100%" height="100%"  loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
               src={buildFrame()}>
        </iframe>
        </div>
    )
}

export default LocationMap