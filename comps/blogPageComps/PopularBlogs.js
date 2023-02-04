
import BlogCards from "./BlogCards"

const PopularBlogs=(props)=>{
    
    

    return(
        <div className='bl-arc-row pb-16'>
            
            <div className="blog-cat-title">
                <h3 className="font-medium font-os text-xl md:text-2xl text-[#4E4D4B] uppercase">Most Popular</h3>

            </div>
            <div className="bl-card-box mt-4 grid sm:grid-cols-2 gap-y-4 gap-x-0 sm:gap-4 md:gap-6 lg:gap-10"> 
                <BlogCards blogdata={props.blogdata}/>
             </div>
        </div>
    )
}

export default PopularBlogs;