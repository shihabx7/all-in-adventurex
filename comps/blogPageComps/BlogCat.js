import { useEffect, useState } from "react";
import { FiChevronRight,FiChevronLeft } from "react-icons/fi";


const  BlogCat=(props)=>{
const [catBoxWidth,setCatBoxWidth]=useState('0px')
const [showNav,setShowNav]=useState(false)

useEffect(()=>{
     const catItem=document.querySelectorAll(".bl-cat-item")
     
     const catTabWidth=document.querySelector("#blog-cat-box").offsetWidth
     var catWidth=0
     for (let i = 0; i < catItem.length; i++) {
        console.log('item-w'+i+":"+catItem[i].offsetWidth)
        catWidth=catWidth+catItem[i].offsetWidth+56
        console.log('total'+catWidth)
      }
    
      if(catWidth>catTabWidth){
        setShowNav(true)
        
      }
      setCatBoxWidth(catWidth+'px')
      
},[])

    

    return(
        <div className="blog-cat-container  pb-4">
            {
                showNav && 
                <div className="blog-cat-nav flex justify-end space-x-2 items-center"> 
                        <div className="blog-cat-prev cursor-pointer hover:bg-[#FFF3D8] hover:text-[#111111]  w-8 h-8 border border-[#464646] rounded-full text-[#464646] flex justify-center items-center"> <FiChevronLeft></FiChevronLeft></div>
                        <div className="blog-cat-next cursor-pointer hover:bg-[#FFF3D8] hover:text-[#111111]  w-8 h-8 border border-[#464646] rounded-full text-[#464646] flex justify-center items-center"> <FiChevronRight></FiChevronRight></div>
                 </div>
            }
           
            <div className="box flex items-center"> 
                <div className="all-blogs h-[44px]  my-2">
                    <a href="/blogs" className="block blog-cat-item bg-[#FFF3D8] px-4 md:px-6 lg:px-8 py-2 text-[#464646] font-medium">ALL</a>
                </div>
                <div id="blog-cat-box" className="all-blog-cat w-full h-[44px]  overflow-hidden relative">
                           
                                <div className="absolute top-0 left-0 z-20" style={{
                                    width:catBoxWidth
                                }}> 

                              
                                 {
                                    props.blogcat.map((item)=>{
                                                return(
                                                     
                                                         <a key={item.id}   href={"/blogs/"+item.slug} className="inline-block bl-cat-item blog-cat-item  bg-[#FFF3D8] px-4 md:px-6 py-2 text-[#464646]">{item.cat}</a>
                                                   
                                                )
                                    })
                                 }
                               </div>
                               <div className="absolute top-0 right-0 h-full w-[60px] z-30 bg-cat-shadow"> </div>
                    
                            
                </div>
            </div> 


        </div>
    )
}
export default  BlogCat