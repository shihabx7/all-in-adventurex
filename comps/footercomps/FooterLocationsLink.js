import { FaAngleRight } from "react-icons/fa"

const FooterLocationsLink=(props)=>{

const getState=(slug)=>{
    var stArr=slug.split('-')
    var st=stArr[stArr.length-1].toUpperCase()
    return st
}
    return(
            <div className="footer-location-link-mess"> 

            
                   {/*========================================= footer location column 1================ */}
                   <div className='footer-loc-col-mess w-full md:w-auto'> 

                    {
                        props.locationlist.map((loc)=>{

                            return(
                                <div key={loc.id} className='footer-loc-col-box-mess mb-4'> 
                                        <div className='footer-loc-head'> 
                                  
                                              <h3 className='text-lg md:text-xl golden-text pb-1 border-b border-dark-gold inline-block font-bold'>{loc.state_name}</h3>
                                   
                                        </div>
                                        {
                                                loc.cities.map((item)=>{

                                                    return (
                                                        <div key={loc.id+item.id} className='footer-loc-link-box '> 
                                    
                                                                <a href={"/locations/"+item.slug} className='footer-link underline-offset-4 flex space-x-2 items-center my-2 text-sm lg:text-base'>{item.city}, {getState(item.slug)}<span><FaAngleRight/></span></a>
                                       
                                        
                                                          </div>
                                                    )

                                                })
                                        }
                                        
                                    
                               
                            </div>
                            )
                            


                        })
                    }
                            
  
                        </div>
                    {/*========================================= footer location column 1 end================ */}
                   
        </div>
    )

}

export default FooterLocationsLink