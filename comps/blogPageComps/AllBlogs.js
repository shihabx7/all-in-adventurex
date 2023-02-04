import { useState } from "react";
import { FiChevronUp,FiChevronDown } from "react-icons/fi";
import BlogCards from "./BlogCards"

const AllBlogs=(props)=>{

    const [currentPage,stCurrentPage]=useState(0)
    const [nextPage,setNextPage]=useState(1)

   
    const  showMore=(pageno)=>{

    }

    return(
        <div className='bl-arc-row pb-16'>
            
            <div className="blog-cat-title">
                <h3 className="font-medium font-os text-xl md:text-2xl text-[#4E4D4B] uppercase">ALL</h3>

            </div>
            <div className="all-bl-card-box mt-4 grid sm:grid-cols-2 gap-y-4 gap-x-0 sm:gap-4 md:gap-6 lg:gap-10"> 
                <BlogCards blogdata={props.blogdata}/>
               
             </div>
             <div className="show-more-blog flex justify-center mt-8"> 
                        <button className="flex space-x-1 text-red-600 hover:text-700 font-medium text-lg lg:text-xl items-center" onClick={showMore(nextPage)}>Load more<FiChevronDown/></button>
             </div>
        </div>
    )
}

export default AllBlogs;