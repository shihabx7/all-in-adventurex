import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const LocationHomeRedirect=()=>{
    const router=useRouter()

    const [isLoaded,setIsLoaded]=useState(false)

    useEffect(() => {
        router.push('/locations/albany-ny')
      }, [isLoaded])

      return(
        <div onLoad={()=>setIsLoaded(true)}>

        </div>
      )



}

export default LocationHomeRedirect