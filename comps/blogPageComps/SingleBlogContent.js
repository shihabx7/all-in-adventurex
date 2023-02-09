const SingleBlogContent=(props)=>{


    return(
        <div className="sbl-desc"  dangerouslySetInnerHTML={{ __html: props.blogdesc.join('') }}> 
              

                    
        </div>
    )
}

export default SingleBlogContent