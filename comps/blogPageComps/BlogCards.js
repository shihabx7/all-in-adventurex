

const BlogCards=(props)=>{
    const getBlogExp=(txt)=>{
        var ret=txt 
        if(ret.length>140){
            ret=ret.substring(0, 140)+"..."
        }
        return ret
    }

    return(
       
            <>
            
            {
                props.blogdata.map((blogitem)=>{

                    return(
                        <div key={blogitem.id} className="bl-item bg-[#FFF3D8] flex flex-col">
                            <div className="bl-card-head">
                                <div className="bl-ft-img">
                                    <a className="block w-full" href={"/blog/"+blogitem.slug}>
                                        <img className="w-full" src={blogitem.ftimg}></img>
                                    </a>
                                 </div> 
                                 <div className="bl-auth flex items-center px-3 md:px-4 lg:px-6 pt-3 pb-1 text-[#818181] text-[12px] md:text-[14px] "> 
                                    <div className="bl-item-auth-img mr-2 md:mr-4"><img className="max-w-[32px] md:max-w-[36px]" src={blogitem.authimg}></img> </div>
                                    <div className="bl-item-auth">by {blogitem.authname}</div>
                                    <div className="mx-1 w-[3px] h-[3px] rounded-full bg-[#818181]"></div>
                                    <div>{blogitem.lastupdate}</div>
                                 </div>

                         </div>
                         <div className="bl-card-content px-3 md:px-4 lg:px-6 pt-0 md:pt-0 pb-4 md:pb-6 h-full flex flex-col justify-between space-y-4">
                            <div className="bl-content-up">
                                    <div className="blog-item-cat flex items-center pb-2">
                                          {
                                            blogitem.blogcategory.map((cat,index)=>{
                                                    return(
                                                        <div key={cat.id} className=" flex items-center"> 
                                                            <a className="text-[#CA9342] font-medium text-[14px] md:text-[16px]" href={"/blog/"+cat.slug}>{cat.name}</a>
                                                            {
                                                                index<blogitem.blogcategory.length-1 &&
                                                                <div className="mx-1 w-[3px] h-[3px] rounded-full bg-[#CA9342]"></div>
                                                            }
                                                        </div>
                                                    )
                                            })
                                          }  
                                    </div>
                                    <div className="bl-title mb-2">
                                        <a href={"/blog/"+blogitem.slug} className="text-[#4E4D4B]"> 
                                              <h2 className="text-[20px] md:text-[24px] font-medium font-os capitalize">{blogitem.title}</h2>
                                        </a>
                                    </div>
                                    <div className="bl-exp"> 
                                            <p className="lg:text-lg text-[#4E4E4E]"> 
                                             {
                                                 getBlogExp(blogitem.blogdesc)
                                             }
                                         </p>
                                    </div>
                            </div>
                            <div className="bl-read-btn">
                                <a href={"/blog/"+ blogitem.slug} className="inline-block px-8 py-2 bg-red-600 hover:bg-red-700 rounded-full text-white md:text-lg">Continue Reading </a>
                            </div>
                         </div>
                           

                    </div>
                    )

                })
            }
                  
                
                  </>
        
    )
}

export default BlogCards;