import {useState } from "react"

const Availability=({prevFormErr,availability,setAvailability,setFormErrFlag})=>{

    const [avlErr,setAvlErr]=useState({
        careerObjectiveErr:false,
        avlStartDateErr:false,
        avlToWorkErr:false,
        howLongStayErr:false,
        sundayErr1:false,
        sundayErr2:false,
        mondayErr1:false,
        mondayErr2:false,
        tuesdayErr1:false,
        tuesdayErr2:false,
        wednesdayErr1:false,
        wednesdayErr2:false,
        thursdayErr1:false,
        thursdayErr2:false,
        fridayErr1:false,
        fridayErr2:false,
        saturdayErr1:false,
        saturdayErr2:false,
       
    })
    const escape=(htmlStr)=> {
        return htmlStr.replace(/&/g, "and")
              .replace(/</g, " ")
              .replace(/>/g, " ")
              .replace(/(?:\r\n|\r|\n)/g, '<br>');
                     
     
     }
    // ========================================================career obj validation=================

const checkCareerObj=(e)=>{

    const cob=escape(e.target.value.trim())
    
    if(cob.length>9 && cob.length<181){
            
        setFormErrFlag(false)
          setAvlErr({...avlErr,careerObjectiveErr:false})
          setAvailability({...availability,careerObjective:cob})
              
              e.target.classList.remove("focus-red")
              e.target.classList.add("focus-green")
      
  }
  else{
    setFormErrFlag(true)
    setAvlErr({...avlErr,careerObjectiveErr:true})
    setAvailability({...availability,careerObjective:cob})
      e.target.classList.remove("focus-green")
      e.target.classList.add("focus-red")
      
  }
}
 // ========================================================Availability Start Date obj validation=================
 
const checkAvlStartDate=(e)=>{

    const stdate=e.target.value.toString()
    const date = new Date();
    const indate=new Date(stdate)

    if(date<indate){
        setFormErrFlag(false)
          setAvlErr({...avlErr,avlStartDateErr:false})
          setAvailability({...availability,avlStartDate:stdate})
              
              e.target.classList.remove("focus-red")
              e.target.classList.add("focus-green")
       
    }
    else{
        setFormErrFlag(true)
        setAvlErr({...avlErr,avlStartDateErr:true})
        //setAvailability({...availability,avlStartDate:stdate})
          e.target.classList.remove("focus-green")
          e.target.classList.add("focus-red")
        
    }
    
    
}
// ========================================================Check those you will be available validation=================
 
const checkAvltowork=(e,ckey)=>{

    const check=e.target.checked
    const checkval=ckey
if(check){
    setFormErrFlag(false)
    setAvlErr({...avlErr,avlToWorkErr:false})
         if(checkval=='tg'){
             setAvailability({...availability,avlToWork:{...availability.avlToWork,tg:true}})
         }
         if(checkval=='cmp'){
             setAvailability({...availability,avlToWork:{...availability.avlToWork,cmp:true}})
         }
         if(checkval=='cmo'){
             setAvailability({...availability,avlToWork:{...availability.avlToWork,cmo:true}})
         } 
         if(checkval=='none'){
            setAvailability({...availability,avlToWork:{...availability.avlToWork,none:true}})
        } 
    }
    else{
       
        if(checkval=='tg'){
            setAvailability({...availability,avlToWork:{...availability.avlToWork,tg:false}})
            if( availability.avlToWork.cmp==false && availability.avlToWork.cmo==false){
                setFormErrFlag(true)
                setAvlErr({...avlErr,avlToWorkErr:true})
            }
        }
        if(checkval=='cmp'){
            setAvailability({...availability,avlToWork:{...availability.avlToWork,cmp:false}})
            if(availability.avlToWork.tg==false &&  availability.avlToWork.cmo==false){
                setFormErrFlag(true)
                setAvlErr({...avlErr,avlToWorkErr:true})
            }
        }
        if(checkval=='cmo'){
            setAvailability({...availability,avlToWork:{...availability.avlToWork,cmo:false}})
            if(availability.avlToWork.tg==false && availability.avlToWork.cmp==false ){
                setFormErrFlag(true)
                setAvlErr({...avlErr,avlToWorkErr:true})
            }

        } 
        if(checkval=='none'){
            setAvailability({...availability,avlToWork:{...availability.avlToWork,none:false}})
            if(availability.avlToWork.tg==false && availability.avlToWork.cmp==false ){
                setFormErrFlag(true)
                setAvlErr({...avlErr,avlToWorkErr:true})
            }

        } 
        

    
    }
    //console.log(avlErr.avlToWorkErr)
    
}
// ========================================================Check those you will be available validation=================
 
const checkStartTime=(e,day)=>{

    const checkTime=e.target.value
    const checkDay=day.toLowerCase()
    const dayerr=checkDay+'Err1'

   if(checkTime!=''){
    setFormErrFlag(false)
    setAvlErr({...avlErr,[dayerr]:false})
    setAvailability({...availability,[checkDay]:{...availability[checkDay],start:checkTime}})
    e.target.classList.remove("focus-red")
    e.target.classList.add("focus-green")
   }
   else{
    setFormErrFlag(true)
    setAvlErr({...avlErr,[dayerr]:true})
    setAvailability({...availability,[checkDay]:{...availability[checkDay],start:checkTime}})
    e.target.classList.remove("focus-green")
    e.target.classList.add("focus-red")
   }
   
    //console.log(checkDay)
   // console.log(availability[checkDay])
   // console.log(availability)
    
}
const checkCloseTime=(e,day)=>{

    const checkcTime=e.target.value
    const checkcDay=day.toLowerCase()

    const dayerr=checkcDay+'Err2'

    if(checkcTime!=''){
     setFormErrFlag(false)
     setAvlErr({...avlErr,[dayerr]:false})
     setAvailability({...availability,[checkcDay]:{...availability[checkcDay],close:checkcTime}})
     e.target.classList.remove("focus-red")
     e.target.classList.add("focus-green")
    }
    else{
     setFormErrFlag(true)
     setAvlErr({...avlErr,[dayerr]:true})
     setAvailability({...availability,[checkcDay]:{...availability[checkcDay],close:checkcTime}})
     e.target.classList.remove("focus-green")
     e.target.classList.add("focus-red")
    }
   
   //setAvailability({...availability,[checkcDay]:{...availability[checkcDay],close:checkcTime}})
   // console.log(checkcDay)
   // console.log(availability[checkcDay])
   // console.log(availability)
    
}
// ========================================================If offered a job validation=================
 
const checkOfferjob=(e)=>{

    const hlt=escape(e.target.value.trim())
    
    if(hlt.length>9 && hlt.length<121){
            
        setFormErrFlag(false)
          setAvlErr({...avlErr,howLongStayErr:false})
          setAvailability({...availability,howLongStay:hlt})
              
              e.target.classList.remove("focus-red")
              e.target.classList.add("focus-green")
      
  }
  else{
    setFormErrFlag(true)
    setAvlErr({...avlErr,howLongStayErr:true})
    setAvailability({...availability,howLongStay:hlt})
      e.target.classList.remove("focus-green")
      e.target.classList.add("focus-red")
      
  }
    
}
    return(
        <div >
            
            <div className="form-holedr mt-4"> 
                      {/*========================   career objective=======================*/}
                         <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-2 md:my-4">
                                <div className="form-col w-full ">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What is your immediate career objective? *</p>
                                                
                                                    <textarea 
                                                    defaultValue={availability.careerObjective}
                                                    onChange={(e)=>checkCareerObj(e)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-white focus:ring-transparent "+ (availability.careerObjective.length>9? "focus-green":"")}
                                                    placeholder="Your career objective" 
                                                   >

                                                    </textarea>
                                                    {
                                                        (avlErr.careerObjectiveErr && availability.careerObjective.length>0) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Min 10 and Max 180 character allowed </p>
                                                    }
                                                    {
                                                        (avlErr.careerObjectiveErr && availability.careerObjective.length==0) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty. </p>
                                                    }
                                                     {
                                                        ((prevFormErr && availability.careerObjective=='') && !avlErr.careerObjectiveErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty.</p>
                                                    }
                                         </div>
                                        
                        </div>
                {/*======================== career objective end=======================*/}
                 {/*========================  contact form Availability Start Date*+ available to work*=======================*/}
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                         <div className="form-col w-full md:w-[42%]">
                                            <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Availability Start Date *</p>
                                            <input 
                                                    type="date" 
                                                    defaultValue={availability.avlStartDate}
                                                    onChange={(e)=>checkAvlStartDate(e)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-white focus:ring-transparent "+ (availability.avlStartDate.length>0? "focus-green":"")}
                                                   />
                                                {
                                                        (avlErr.avlStartDateErr && availability.avlStartDate.length>0) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Invalid date. Select date at least one day after current date</p>
                                                    }
                                                    {
                                                        (avlErr.avlStartDateErr && availability.avlStartDate.length==0) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select availability start date.</p>
                                                    }
                                                     {
                                                        ((prevFormErr && availability.avlStartDate=='') && !avlErr.avlStartDateErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select availability start date.</p>
                                                    }
                                            </div>
                                         <div className="form-col w-full md:w-[54%] mt-2 md:mt-0">
                                             <p className=" mb-2 md:mb-1 lg:text-lg evevt-input-label text-[#111111]  ">Check those you will be available to work: *</p>
                                                <div className="form-check flex flex-col md:flex-row md:items-center space-x-0 space-y-2 md:space-y-0 w-full justify-start flex-wrap">
                                                        <div className="flex items-center  space-x-2 md:w-[48%] ">
                                                        <input type="checkbox"
                                                        onChange={(e)=>checkAvltowork(e,'tg')}
                                                        checked={availability.avlToWork.tg==true? "checked":''}
                                                          id="tq"/>
                                                        <label htmlFor="tq" className="text-[#464646]">Thanksgiving (week of)</label> 
                                                        </div>

                                                        <div className="flex items-center space-x-2 md:w-[48%] ">
                                                        <input type="checkbox"
                                                        onChange={(e)=>checkAvltowork(e,'cmp')}
                                                        checked={availability.avlToWork.cmp==true? "checked":''}
                                                         id="cwp"/>
                                                         <label htmlFor="cwp" className="text-[#464646]">Christmas (week prior)</label> 
                                                        </div>

                                                        

                                                        <div className="flex items-center space-x-2 md:w-[48%] md:pt-1 ">
                                                        <input type="checkbox"
                                                        onChange={(e)=>checkAvltowork(e,'cmo')}
                                                        checked={availability.avlToWork.cmo==true? "checked":''}
                                                        value='cmo'
                                                         id="cwo"/>
                                                         <label htmlFor="cwo" className="text-[#464646]">Christmas (week of)</label> 
                                                        </div>

                                                        <div className="flex items-center space-x-2 md:w-[48%] md:pt-1 ">
                                                        <input type="checkbox"
                                                        onChange={(e)=>checkAvltowork(e,'none')}
                                                        checked={availability.avlToWork.none==true? "checked":''}
                                                        value='none'
                                                         id="cwo"/>
                                                         <label htmlFor="none" className="text-[#464646]">None</label> 
                                                        </div>

                                                        
                                                </div>
                                             
                                                     {
                                                        avlErr.avlToWorkErr &&  
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Check at least one option</p>
                                                    }
                                                     {
                                                        (prevFormErr && ((!availability.avlToWork.tg && !availability.avlToWork.cmp) && !availability.avlToWork.cmo)) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Check at least one option</p>
                                                    }
                                         </div>
                        </div>
                {/*======================== contact form Availability Start Date*+ available to work* end=======================*/}
                {/*========================  Please indicate hours you're available to work during both day and evening (i.e. 9am - close; 6pm-10pm; or Any)*=======================*/}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full bg-[#FFF9EC] p-4 md:py-8 md:px-6 my-2 md:my-4">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Please indicate hours you're available to work during both day and evening *</p>
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#565656]">(i.e. Start - Close; 9 am-12 pm; or Any)</p>
                                                    {/*======================== sunday=======================*/}
                                                    <div className="avl-work-week sunday"> 
                                                            <div className="avl-row flex  justify-between  space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl mt-[6px] md:mt-[6px]"><p>Sunday :</p></div>
                                                                    <div className="flex justify-between w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select 
                                                                             defaultValue={availability.sunday.start}
                                                                             onChange={(e)=>checkStartTime(e,'sunday')}
                                                                              className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.sunday.start!=''? 'focus-green':'')+((prevFormErr==true && availability.sunday.start=='')? 'focus-red':'')+((avlErr.sundayErr1 && availability.sunday.start=='')? 'focus-red':'')} >
                                                                                            <option value="">Start time</option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                            {
                                                                                 (avlErr.sundayErr1 && availability.sunday.start=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.sunday.start=='') && !avlErr.sundayErr1) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                        </div>
                                                                        <div> 
                                                                            <div className="mt-[16px] md:mt-[20px] w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        </div>
                                                                        
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select 
                                                                             defaultValue={availability.sunday.close}
                                                                             onChange={(e)=>checkCloseTime(e,'sunday')}
                                                                             className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.sunday.close!=''? 'focus-green':'')+((prevFormErr==true && availability.sunday.close=='')? 'focus-red':'')+((avlErr.sundayErr2 && availability.sunday.close=='')? 'focus-red':'')} >
                                                                                          <option value="">Close time  </option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                            {
                                                                                 (avlErr.sundayErr2 && availability.sunday.close=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.sunday.close=='') && !avlErr.sundayErr2) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== sunday end=======================*/}
                                                     {/*======================== monday=======================*/}
                                                     <div className="avl-work-week monday"> 
                                                            <div className="avl-row flex  justify-between space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl mt-[6px] md:mt-[6px]"><p>Monday :</p></div>
                                                                    <div className="flex justify-between w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select 
                                                                              defaultValue={availability.monday.start}
                                                                              onChange={(e)=>checkStartTime(e,'monday')}
                                                                              className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.monday.start!=''? 'focus-green':'')+((prevFormErr==true && availability.monday.start=='')? 'focus-red':'')+((avlErr.mondayErr1 && availability.monday.start=='')? 'focus-red':'')} >
                                                                                            <option value="">Start time</option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                            {
                                                                                 (avlErr.mondayErr1 && availability.monday.start=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.monday.start=='') && !avlErr.mondayErr1) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                        </div>
                                                                        <div> 
                                                                            <div className="mt-[16px] md:mt-[20px] w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        </div>
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select
                                                                             defaultValue={availability.monday.close}
                                                                             onChange={(e)=>checkCloseTime(e,'monday')}
                                                                             className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.monday.close!=''? 'focus-green':'')+((prevFormErr==true && availability.monday.close=='')? 'focus-red':'')+((avlErr.mondayErr2 && availability.monday.close=='')? 'focus-red':'')} >
                                                                                          <option value="">Close time</option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                            {
                                                                                 (avlErr.mondayErr2 && availability.monday.close=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.monday.close=='') && !avlErr.mondayErr2) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== monday end=======================*/}
                                                     {/*======================== Tuesday=======================*/}
                                                     <div className="avl-work-week tuesday"> 
                                                            <div className="avl-row flex  justify-between  space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl mt-[6px] md:mt-[6px]"><p>Tuesday :</p></div>
                                                                    <div className="flex justify-between w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select 
                                                                              defaultValue={availability.tuesday.start}
                                                                              onChange={(e)=>checkStartTime(e,'tuesday')}
                                                                              className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.tuesday.start!=''? 'focus-green':'')+((prevFormErr==true && availability.tuesday.start=='')? 'focus-red':'')+((avlErr.tuesdayErr1 && availability.tuesday.start=='')? 'focus-red':'')} >
                                                                                            <option value="">Start time</option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                            {
                                                                                 (avlErr.tuesdayErr1 && availability.tuesday.start=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.tuesday.start=='') && !avlErr.tuesdayErr1) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                        </div>
                                                                        <div> 
                                                                            <div className="mt-[16px] md:mt-[20px] w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        </div>
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select 
                                                                             defaultValue={availability.tuesday.close}
                                                                             onChange={(e)=>checkCloseTime(e,'tuesday')}
                                                                             className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.tuesday.close!=''? 'focus-green':'')+((prevFormErr==true && availability.tuesday.close=='')? 'focus-red':'')+((avlErr.tuesdayErr2 && availability.tuesday.close=='')? 'focus-red':'')} >
                                                                                          <option value="">Close time</option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                            {
                                                                                 (avlErr.tuesdayErr2 && availability.tuesday.close=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.tuesday.close=='') && !avlErr.tuesdayErr2) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== Tuesday end=======================*/}
                                                     {/*======================== Wednesday=======================*/}
                                                    <div className="avl-work-week wednesday"> 
                                                            <div className="avl-row flex  justify-between space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl mt-[6px] md:mt-[6px]"><p>Wednesday :</p></div>
                                                                    <div className="flex justify-between w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select 
                                                                             defaultValue={availability.wednesday.start}
                                                                             onChange={(e)=>checkStartTime(e,'wednesday')}
                                                                             className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.wednesday.start!=''? 'focus-green':'')+((prevFormErr==true && availability.wednesday.start=='')? 'focus-red':'')+((avlErr.wednesdayErr1 && availability.wednesday.start=='')? 'focus-red':'')} >
                                                                                            <option value="">Start time</option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                            {
                                                                                 (avlErr.wednesdayErr1 && availability.wednesday.start=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.wednesday.start=='') && !avlErr.wednesdayErr1) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                        </div>
                                                                        <div> 
                                                                            <div className="mt-[16px] md:mt-[20px] w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        </div>
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select 
                                                                             defaultValue={availability.wednesday.close}
                                                                             onChange={(e)=>checkCloseTime(e,'wednesday')}
                                                                             className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.wednesday.close!=''? 'focus-green':'')+((prevFormErr==true && availability.wednesday.close=='')? 'focus-red':'')+((avlErr.wednesdayErr2 && availability.wednesday.close=='')? 'focus-red':'')} >
                                                                                          <option value="">Close time</option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                            {
                                                                                 (avlErr.wednesdayErr2 && availability.wednesday.close=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.wednesday.close=='') && !avlErr.wednesdayErr2) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== Wednesday end=======================*/}
                                                     {/*======================== Thursday=======================*/}
                                                     <div className="avl-work-week thursday"> 
                                                            <div className="avl-row flex  justify-between space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl mt-[6px] md:mt-[6px]"><p>Thursday :</p></div>
                                                                    <div className="flex justify-between w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select
                                                                             defaultValue={availability.thursday.start}
                                                                             onChange={(e)=>checkStartTime(e,'thursday')}
                                                                             className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.thursday.start!=''? 'focus-green':'')+((prevFormErr==true && availability.thursday.start=='')? 'focus-red':'')+((avlErr.thursdayErr1 && availability.thursday.start=='')? 'focus-red':'')} >
                                                                                            <option value="">Start Time</option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                            {
                                                                                 (avlErr.thursdayErr1 && availability.thursday.start=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.thursday.start=='') && !avlErr.thursdayErr1) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                        </div>
                                                                        <div> 
                                                                            <div className="mt-[16px] md:mt-[20px] w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        </div>
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select 
                                                                             defaultValue={availability.thursday.close}
                                                                             onChange={(e)=>checkCloseTime(e,'thursday')}
                                                                             className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.thursday.close!=''? 'focus-green':'')+((prevFormErr==true && availability.thursday.close=='')? 'focus-red':'')+((avlErr.thursdayErr2 && availability.thursday.close=='')? 'focus-red':'')} >
                                                                                          <option value="">Close time</option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                            {
                                                                                 (avlErr.thursdayErr2 && availability.thursday.close=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.thursday.close=='') && !avlErr.thursdayErr2) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== Thursday end=======================*/}
                                                     {/*======================== Friday=======================*/}
                                                     <div className="avl-work-week friday"> 
                                                            <div className="avl-row flex  justify-between space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl mt-[6px] md:mt-[6px]"><p>Friday :</p></div>
                                                                    <div className="flex justify-between w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select 
                                                                              defaultValue={availability.friday.start}
                                                                              onChange={(e)=>checkStartTime(e,'friday')}
                                                                              className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.friday.start!=''? 'focus-green':'')+((prevFormErr==true && availability.friday.start=='')? 'focus-red':'')+((avlErr.fridayErr1 && availability.friday.start=='')? 'focus-red':'')} >
                                                                                            <option value="">Start time</option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                            {
                                                                                 (avlErr.fridayErr1 && availability.friday.start=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.friday.start=='') && !avlErr.fridayErr1) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                        </div>
                                                                        <div> 
                                                                            <div className="mt-[16px] md:mt-[20px] w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        </div>
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select 
                                                                             defaultValue={availability.friday.close}
                                                                             onChange={(e)=>checkCloseTime(e,'friday')}
                                                                             className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.friday.close!=''? 'focus-green':'')+((prevFormErr==true && availability.friday.close=='')? 'focus-red':'')+((avlErr.fridayErr2 && availability.friday.close=='')? 'focus-red':'')} >
                                                                                          <option value="">Close time</option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                            {
                                                                                 (avlErr.fridayErr2 && availability.friday.close=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.friday.close=='') && !avlErr.fridayErr2) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== Friday end=======================*/}
                                                     {/*======================== Saturday=======================*/}
                                                     <div className="avl-work-week saturday"> 
                                                            <div className="avl-row flex  justify-between space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl mt-[6px] md:mt-[6px]"><p>Saturday :</p></div>
                                                                    <div className="flex justify-between w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select 
                                                                              defaultValue={availability.saturday.start}
                                                                              onChange={(e)=>checkStartTime(e,'saturday')}
                                                                              className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.saturday.start!=''? 'focus-green':'')+((prevFormErr==true && availability.saturday.start=='')? 'focus-red':'')+((avlErr.saturdayErr1 && availability.saturday.start=='')? 'focus-red':'')} >
                                                                                            <option value="">Start time</option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                            {
                                                                                 (avlErr.saturdayErr1 && availability.saturday.start=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.saturday.start=='') && !avlErr.saturdayErr1) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select start time.</p>
                                                                             }
                                                                        </div>
                                                                        <div> 
                                                                            <div className="mt-[16px] md:mt-[20px] w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        </div>
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select
                                                                             defaultValue={availability.saturday.close}
                                                                             onChange={(e)=>checkCloseTime(e,'saturday')}
                                                                             className={"text-xs md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent "+(availability.saturday.close!=''? 'focus-green':'')+((prevFormErr==true && availability.saturday.close=='')? 'focus-red':'')+((avlErr.saturdayErr2 && availability.saturday.close=='')? 'focus-red':'')} >
                                                                                          <option value="">Close time</option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                            {
                                                                                 (avlErr.saturdayErr2 && availability.saturday.close=='') &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                              {
                                                                                 ((prevFormErr && availability.saturday.close=='') && !avlErr.saturdayErr2) &&
                                                                                 <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select close time.</p>
                                                                             }
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== Saturday end=======================*/}

                                                <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">email *</p>
                                         </div>
                                         
                </div>
                {/*======================== Please indicate hours you're available to work during both day and evening (i.e. 9am - close; 6pm-10pm; or Any)* end=======================*/}
              
                {/*========================  If offered a job, =======================*/}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full ">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">If offered a job, how long do you plan to stay? *</p>
                                                
                                                    <textarea
                                                    defaultValue={availability.howLongStay}
                                                    onChange={(e)=>checkOfferjob(e)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-white focus:ring-transparent "+ (availability.howLongStay.length>9? "focus-green":"")}
                                                    
                                                   >

                                                    </textarea>
                                                    {
                                                        (avlErr.howLongStayErr && availability.howLongStay.length>0) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Min 10 and Max 120 character allowed </p>
                                                    }
                                                    {
                                                        (avlErr.howLongStayErr && availability.howLongStay.length==0) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty. </p>
                                                    }
                                                     {
                                                        ((prevFormErr && availability.howLongStay=='') && !avlErr.howLongStayErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty.</p>
                                                    }
                                         </div>
                                         
                </div>
                {/*======================== contact form If offered a job, end=======================*/}
                

            </div>
        </div>
    )

}

export default Availability