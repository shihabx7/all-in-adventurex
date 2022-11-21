
import { useEffect, useState } from "react"
import { FiChevronDown, FiChevronUp,FiCheck} from "react-icons/fi";
const HintAns=(props)=>{
    
    const[showHint,setShowHint]=useState(null)
    const[showAns,setShowAns]=useState(null)
  
   const showhints=(id)=>{
        if(showHint!=id){
            setShowHint(id)
            setShowAns(null)
        }
        else{
            setShowHint(null)
        }
   }
   const showans=(id)=>{
    if(showAns!=id){
        setShowAns(id)
        setShowHint(null)
    }
    else{
        setShowAns(null)
    }
}
    return(

        <div className="blog-content relative " style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }} >
                <div className=" w-full absolute top-0 left-0">
                    <img className="w-full" src="/assets/game-home-or1.jpg"></img>
                 </div>
                 <div className="max-w-[1000px] mx-auto py-20 px-4 md:py-24 lg:py-28 relative z-10">
                        {
                            
                            props.hintlist.map((item,index)=>{
                                
                               

                                return(
                                    <div key={item.id} className="hint-box border-[1px] border-[#DAC89F] my-6 md:my-8 lg:my-12"> 
                                        <div className="hint-ques px-4 py-3 lg:px-6 lg:py-4 bg-[#F4E1B5]"><h3 className="text-[20px] lg:text-[24px] text-dark font-os font-medium"><span>{index+1}. </span>{item.ques}</h3></div>
                                        <div className="hints">
                                             {
                                                item.hint!="" &&
                                          
                                                <div onClick={() => showhints(item.id)} className="bg-[#FFF3D8] px-4 py-3 lg:px-6 lg:py-4 flex justify-between items-center border-b-[1px] border-[#DAC89F]">
                                                    <p className="text-[#464646] text-lg lg:text-xl">Hint</p> <p className="text-gold text-xl lg:text-3xl">{showHint==item.id? <FiChevronUp/>:<FiChevronDown/>}</p>
                                                </div>
                                                  }
                                                {
                                                    showHint==item.id &&
                                                    <div className="hint-text bg-[#E3D2AA] px-4 py-3 lg:px-6 lg:py-4 border-t-[1px] border-[#71541A]">
                                                        <p className="text-[#71541A] lg:text-lg flex  space-x-2"><span className="mt-1 "><FiCheck/></span> <span>{item.hint}</span></p>  
                                                  </div>
                                                }
                                                

                                        </div>
                                        <div className="hint-ans-box">
                                                <div onClick={() => showans(item.id)} className="bg-[#FFF3D8] px-4 py-3 lg:px-6 lg:py-4 flex justify-between items-center">
                                                    <p className="text-[#464646] text-lg lg:text-xl">Answer</p> <p className="text-gold text-xl lg:text-3xl">{showAns==item.id? <FiChevronUp/>:<FiChevronDown/>}</p>
                                                </div>
                                                {
                                                    showAns==item.id &&
                                                    <div className="hint-text bg-[#E3D2AA] px-4 py-3 lg:px-6 lg:py-4 border-t-[1px] border-[#71541A]">
                                                      <p className="text-[#71541A] lg:text-lg flex space-x-2"><span className="mt-1 "><FiCheck/></span> <span>{item.ans}</span></p>  
                                                 </div>
                                                }
                                                

                                        </div>

                                    </div>
                                )
                                
                            })
                        }
                
                 </div>

                 <div className=" w-full absolute bottom-0 left-0">
                    <img className="w-full" src="/assets/game-home-or2.jpg"></img>
                 </div>

            </div>
    )


}

export default HintAns