
const StarRating=({rating})=>{
   const getRating=(rat)=>{
        var ratingNumber=Math.floor((rat/5)*100)
        if(ratingNumber>93 && ratingNumber<95){
            ratingNumber=ratingNumber-2
       }
       if(ratingNumber>95 && ratingNumber<99){
        ratingNumber=ratingNumber-3
   }
       // ratingNumber=Math.floor((ratingNumber/10))*10
        return ratingNumber+'%'
    }
return(
    <div className="stars-container">
        <div className="stars-outer">
             <div className="stars-inner" style={{width:getRating(rating)}}></div>
        </div>

    </div>
)
}

export default StarRating