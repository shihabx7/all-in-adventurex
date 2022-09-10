import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const LocationHomeRedirect=()=>{
    const router=useRouter()
    const path=router.pathname.split('/')
    console.log(path[1])

    const [isLoaded,setIsLoaded]=useState(false)

    useEffect(() => {
        router.push('/locations/'+path[1])
      }, [isLoaded])

      return(
        <div onLoad={()=>setIsLoaded(true)}>

        </div>
      )



}

export default LocationHomeRedirect