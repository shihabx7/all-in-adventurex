import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";


const BreadcumNew=(props)=>{
    const [breadcumLinks,setBreadcumLinks]=useState([])
    const [qLength,setQLength]=useState(0)
    const router = useRouter()

    useEffect(() => {
       
        const query=router.pathname.split('/')
        setBreadcumLinks(query)
        setQLength(query.length)

      }, []);

   
   const modState=(locslug)=>{
        var x=locslug.split("-")
        x[x.length-1]=x[x.length-1].toUpperCase()
        x=x.join(' ')
        return x

   }
   const getLabel=(slug)=>{
    var y=slug.split("-")
    y=y.join(' ')
    return y
   }
    

    const showLink=(link,index)=>{
        var label=link.split("-")
        var angle=true
        var showb=true
        var classname="text-[#6a6a6a] hover:text-red-700"

        if(index==0){
                label=""
                link=""
                angle=false
                showb=false
        }
             else if(index==1){
                
                label[label.length-1]= label[label.length-1].toUpperCase()
                label=label.join(' ')
                link="/locations/"+link
                
            }
            else if(index==qLength-1){
                
                
                label=label.join(' ')
                classname="text-[#222222]"
                angle=false
                
            }
            else{
                label=label.join(' ')
                
            }

            return(
                showb &&
                <Link href={link}>
                <a className={"capitalize flex items-center text-sm md:text-base lg:text-lg "+classname}>
                        {label} 
                        {
                            angle &&
                        <span className="bsep text-gold"><FiChevronRight/></span>
                            
                        }</a>
                </Link>
            )
    }


    return(
        <div className="new-brd max-w-7xl mx-auto px-2 md:px-4 flex items-center space-x-.5">
                {  !props.gameslug &&
                        breadcumLinks.map((blink,index)=>{
                            return(
                                <div key={index} className="flex items-center">{
                                    showLink(blink,index)
                                    }</div>
                            )
                        })
                }
                {
                    props.gameslug &&
                    
                        
                            <div className="flex items-center">
                            <Link  href={"/locations/"+props.locationslug}>
                                 <a className="capitalize flex items-center text-sm md:text-base lg:text-lg text-[#6a6a6a] hover:text-red-700">{modState(props.locationslug)}
                                    <span className="bsep text-gold"><FiChevronRight/></span>
                                 </a>
                                </Link>
                                <Link href={"/"+props.locationslug+"/"+props.pagetype} >
                                 <a className="capitalize flex items-center text-sm md:text-base lg:text-lg text-[#6a6a6a] hover:text-red-700">{props.pagetype}
                                    <span className="bsep text-gold"><FiChevronRight/></span>
                                 </a>
                                </Link>
                                <Link href={"/"+props.locationslug+"/"+props.pagetype+"/"+props.gameslug} >
                                 <a className="capitalize flex items-center text-sm md:text-base lg:text-lg text-[#222222]">{getLabel(props.gameslug)}
                                    
                                 </a>
                                </Link>
                            </div>
                     

                }

        </div>
        
    )

}

export default BreadcumNew