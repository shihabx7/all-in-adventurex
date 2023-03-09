import {useState } from "react"
const Education=({prevFormErr,education,setEducation,setFormErrFlag,prevEduErr})=>{

const [eduErr,setEduErr]=useState({
        hnameErr:false,
        hattendErr:false,
        hgradErr:false,
        hdegreeErr:false,
        cnameErr:false,
        cattendErr:false,
        cgradErr:false,
        cdegreeErr:false,
        otnameErr:false,
        otattendErr:false,
        otgradErr:false,
        otdegreeErr:false,
       
    })
    const escape=(htmlStr)=> {
        return htmlStr.replace(/&/g, "and")
              .replace(/</g, " ")
              .replace(/>/g, " ")
              //.replace(/(?:\r\n|\r|\n)/g, '<br>');
                     
     
     }
     // high school name validation
     const checkHschool=(e)=>{
        const hins=e.target.value.trim()
        
        const namePatt=/^[A-Za-z0-9 ]*$/   ///^[a-zA-Z ]*$/ /^[ A-Za-z0-9_@./#&+-]*$/
       
        if(hins.length>5 && hins.length<41){
            if(!namePatt.test(hins)){
                     setFormErrFlag(true)
                     setEduErr({...eduErr,hnameErr:true})
                    e.target.classList.remove("focus-green")
                    e.target.classList.add("focus-red")
                    
            }
            else{
                setFormErrFlag(false)
                setEduErr({...eduErr,hnameErr:false})
                setEducation({...education,highschool:{...education.highschool,insname:hins}})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
                    
            }
        }
       
        else{
          setFormErrFlag(true)
          setEduErr({...eduErr,hnameErr:true})
          setEducation({...education,highschool:{...education.highschool,insname:hins}})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
        }
         
           
     }
      // high school attend date validation
      const checkHschoolAttend=(e)=>{
        const hatd=e.target.value.trim()
        

        const atdPatt=/^[ A-Za-z0-9_,./-]*$/   ///^[a-zA-Z ]*$/ /^[ A-Za-z0-9_@./#&+-]*$/
        if(hatd.length>2 && hatd.length<31){
            if(!atdPatt.test(hatd)){
                     setFormErrFlag(true)
                     setEduErr({...eduErr,hattendErr:true})
                    e.target.classList.remove("focus-green")
                    e.target.classList.add("focus-red")
                    
            }
            else{
                setFormErrFlag(false)
                setEduErr({...eduErr,hattendErr:false})
                setEducation({...education,highschool:{...education.highschool,attendDate:hatd}})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
                    
            }
        }
       
        else{
          setFormErrFlag(true)
          setEduErr({...eduErr,hattendErr:true})
          setEducation({...education,highschool:{...education.highschool,attendDate:hatd}})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
        }
         

     }
     // high school graduated  validation
     const checkHschoolGraduated=(e)=>{
        const gard=e.target.value.trim()
        if(gard!=''){
        
      
            setFormErrFlag(false)
            setEduErr({...eduErr,hgradErr:false})
            setEducation({...education,highschool:{...education.highschool,isGraduated:gard}})
                e.target.classList.remove("focus-red")
                e.target.classList.add("focus-green")
                
        
    }
    else{
     
      setEducation({...education,highschool:{...education.highschool,isGraduated:gard}})
        e.target.classList.remove("focus-green")
       // e.target.classList.add("focus-red")
    }
         

     }
     // high school degree  validation
     const checkHschoolDegree=(e)=>{
        const deg=e.target.value.trim()
        //console.log(fname.length)

        const digPatt=/^[ A-Za-z0-9_,.-]*$/   
        if(deg.length>2 && deg.length<31){
            if(!digPatt.test(deg)){
                     setFormErrFlag(true)
                     setEduErr({...eduErr,hdegreeErr:true})
                    e.target.classList.remove("focus-green")
                    e.target.classList.add("focus-red")
                    
            }
            else{
                setFormErrFlag(false)
                setEduErr({...eduErr,hdegreeErr:false})
                setEducation({...education,highschool:{...education.highschool,degree:deg}})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
                    
            }
        }
      
        else{
          setFormErrFlag(true)
          setEduErr({...eduErr,hdegreeErr:true})
          setEducation({...education,highschool:{...education.highschool,degree:deg}})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
        }

     }
// college  name validation
const checkCollege=(e)=>{
    const clhins=e.target.value.trim()
    //console.log(fname.length)

   const clnamePatt=/^[A-Za-z0-9 ]*$/    ///^[a-zA-Z ]*$/ /^[ A-Za-z0-9_@./#&+-]*$/
    if(clhins.length>5 && clhins.length<41){
        if(!clnamePatt.test(clhins)){
                 setFormErrFlag(true)
                 setEduErr({...eduErr,cnameErr:true})
                e.target.classList.remove("focus-green")
                e.target.classList.add("focus-red")
                
        }
        else{
            setFormErrFlag(false)
            setEduErr({...eduErr,cnameErr:false})
            setEducation({...education,college:{...education.college,insname:clhins}})
                e.target.classList.remove("focus-red")
                e.target.classList.add("focus-green")
                
        }
    }
  
    else{
      setFormErrFlag(true)
      setEduErr({...eduErr,cnameErr:true})
      setEducation({...education,college:{...education.college,insname:clhins}})
        e.target.classList.remove("focus-green")
        e.target.classList.add("focus-red")
    }
     

 }
 // college attend date validation
 const checkCollegeAttend=(e)=>{
    const catd=e.target.value.trim()
    

    const catdPatt=/^[ A-Za-z0-9,./-]*$/  ///^[a-zA-Z ]*$/ /^[ A-Za-z0-9_@./#&+-]*$/
    if(catd.length>2 && catd.length<31){
        if(!catdPatt.test(catd)){
                 setFormErrFlag(true)
                 setEduErr({...eduErr,cattendErr:true})
                e.target.classList.remove("focus-green")
                e.target.classList.add("focus-red")
                
        }
        else{
            setFormErrFlag(false)
            setEduErr({...eduErr,cattendErr:false})
            setEducation({...education,college:{...education.college,attendDate:catd}})
                e.target.classList.remove("focus-red")
                e.target.classList.add("focus-green")
                
        }
    }
    
    else{
      setFormErrFlag(true)
      setEduErr({...eduErr,cattendErr:true})
      setEducation({...education,college:{...education.college,attendDate:catd}})
        e.target.classList.remove("focus-green")
        e.target.classList.add("focus-red")
    }
     

 }
 // college  graduated  validation
 const checkCollegeGraduated=(e)=>{
    const gard=e.target.value.trim()
    if(gard!=''){
        
      
            setFormErrFlag(false)
            setEduErr({...eduErr,cgradErr:false})
            setEducation({...education,college:{...education.college,isGraduated:gard}})
                e.target.classList.remove("focus-red")
                e.target.classList.add("focus-green")
                
        
    }
    else{
     
      setEducation({...education,college:{...education.college,isGraduated:gard}})
        e.target.classList.remove("focus-green")
       // e.target.classList.add("focus-red")
    }
     

 }
 // coolege  degree  validation
 const checkCollegeDegree=(e)=>{
    const deg=e.target.value.trim()
    //console.log(fname.length)

    const digPatt=/^[ A-Za-z0-9_,.-]*$/   
    if(deg.length>2 && deg.length<41){
        if(!digPatt.test(deg)){
                 setFormErrFlag(true)
                 setEduErr({...eduErr,cdegreeErr:true})
                e.target.classList.remove("focus-green")
                e.target.classList.add("focus-red")
                
        }
        else{
            setFormErrFlag(false)
            setEduErr({...eduErr,cdegreeErr:false})
            setEducation({...education,college:{...education.college,degree:deg}})
                e.target.classList.remove("focus-red")
                e.target.classList.add("focus-green")
                
        }
    }
    
    else{
      setFormErrFlag(true)
      setEduErr({...eduErr,cdegreeErr:true})
      setEducation({...education,college:{...education.college,degree:deg}})
        e.target.classList.remove("focus-green")
        e.target.classList.add("focus-red")
    }

 }

 // other  name validation
const checkOther=(e)=>{
    const hins=e.target.value.trim()
    //console.log(fname.length)

    const namePatt=/^[ A-Za-z0-9 ]*$/     ///^[a-zA-Z ]*$/ /^[ A-Za-z0-9_@./#&+-]*$/
    if(hins.length>5 && hins.length<41){
        if(!namePatt.test(hins)){
                 setFormErrFlag(true)
                 setEduErr({...eduErr,otnameErr:true})
                e.target.classList.remove("focus-green")
                e.target.classList.add("focus-red")
                
        }
        else{
            setFormErrFlag(false)
            setEduErr({...eduErr,otnameErr:false})
            setEducation({...education,other:{...education.other,insname:hins}})
                e.target.classList.remove("focus-red")
                e.target.classList.add("focus-green")
                
        }
    }
   
    else{
      setFormErrFlag(true)
      setEduErr({...eduErr,otnameErr:true})
      setEducation({...education,other:{...education.other,insname:hins}})
        e.target.classList.remove("focus-green")
        e.target.classList.add("focus-red")
    }
     

 }
 // other attend date validation
 const checkOtherAttend=(e)=>{
    const othatd=e.target.value.trim()
    

    const otatdPatt=/^[ A-Za-z0-9,./-]*$/  ///^[a-zA-Z ]*$/ /^[ A-Za-z0-9_@./#&+-]*$/
    if(othatd.length>2 && othatd.length<31){
        if(!otatdPatt.test(othatd)){
                 setFormErrFlag(true)
                 setEduErr({...eduErr,otattendErr:true})
                e.target.classList.remove("focus-green")
                e.target.classList.add("focus-red")
                
        }
        else{
            setFormErrFlag(false)
            setEduErr({...eduErr,otattendErr:false})
            setEducation({...education,other:{...education.other,attendDate:othatd}})
                e.target.classList.remove("focus-red")
                e.target.classList.add("focus-green")
                
        }
    }
   
    else{
      setFormErrFlag(true)
      setEduErr({...eduErr,otattendErr:true})
      setEducation({...education,other:{...education.other,attendDate:othatd}})
        e.target.classList.remove("focus-green")
        e.target.classList.add("focus-red")
    }
     

 }
 // other  graduated  validation
 const checkOtherGraduated=(e)=>{
    const gard=e.target.value.trim()
    if(gard!=''){
        
      
            setFormErrFlag(false)
            setEduErr({...eduErr,cgradErr:false})
            setEducation({...education,college:{...education.college,isGraduated:gard}})
                e.target.classList.remove("focus-red")
                e.target.classList.add("focus-green")
                
        
    }
    else{
     
      setEducation({...education,college:{...education.college,isGraduated:gard}})
        e.target.classList.remove("focus-green")
       // e.target.classList.add("focus-red")
    }
     

 }
 // other  degree  validation
 const checkOtherDegree=(e)=>{
    const deg=e.target.value.trim()
    //console.log(fname.length)

    const digPatt=/^[ A-Za-z0-9_,.-]*$/   
    if(deg.length>2 && deg.length<41){
        if(!digPatt.test(deg)){
                 setFormErrFlag(true)
                 setEduErr({...eduErr,cdegreeErr:true})
                e.target.classList.remove("focus-green")
                e.target.classList.add("focus-red")
                
        }
        else{
            setFormErrFlag(false)
            setEduErr({...eduErr,cdegreeErr:false})
            setEducation({...education,college:{...education.other,degree:deg}})
                e.target.classList.remove("focus-red")
                e.target.classList.add("focus-green")
                
        }
    }
    
    else{
      setFormErrFlag(true)
      setEduErr({...eduErr,cdegreeErr:true})
      setEducation({...education,college:{...education.other,degree:deg}})
        e.target.classList.remove("focus-green")
        e.target.classList.add("focus-red")
    }

 }
 

 

    return(
        
        <div>
            
            <div className="form-holedr"> 
                 {/*========================  contact form High School=======================*/}
                 <div className="form-edu-box bg-[#FFF7EA] p-4 md:p-6 mt-4"> 
                        <h3 className="text-xl font-medium"> High School</h3>
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                <div className="form-col w-full md:w-[49%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Institution Name</p>
                                                <input 
                                                    defaultValue={education.highschool.insname}
                                                    onChange={(e)=>checkHschool(e)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (education.highschool.insname.length>5? "focus-green ":"")+((prevEduErr.hschoolErr && education.highschool.insname=='')?"focus-red":"")}
                                                    type="text" 
                                                   
                                                    placeholder="Name of your institution" 
                                                    >

                                                    </input>
                                                    {
                                                            (eduErr.hnameErr && education.highschool.insname.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }
                                                   
                                                    {
                                                        ((prevEduErr.hschoolErr && education.highschool.insname=='') && !eduErr.hnameErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                                    
                                </div>
                                <div className="form-col w-full md:w-[49%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Dates Attended</p>
                                                <input  type="text"
                                                         defaultValue={education.highschool.attendDate}
                                                         onChange={(e)=>checkHschoolAttend(e)}
                                                         
                                                         className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (education.highschool.attendDate.length>6? "focus-green":"")+((prevEduErr.hschoolErr && education.highschool.attendDate=='')?"focus-red":"")}
                                                         >

                                                     </input>
                                                     {
                                                            (eduErr.hattendErr && education.highschool.attendDate!='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">invalid date</p>
                                                    }
                                                   {
                                                        ((prevEduErr.hschoolErr && education.highschool.attendDate=='') && !eduErr.hattendErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                                    
                                </div>
                        </div>
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                            <div className="form-col w-full md:w-[49%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Graduated (Y/N)?</p>
                                                <select 
                                                    defaultValue={education.highschool.isGraduated}
                                                    onChange={(e)=>checkHschoolGraduated(e)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (education.highschool.isGraduated.length>9? "focus-green":"")}
                                                    
                                                    >       <option value="">...</option>
                                                            <option value="Yes">Yes</option>
                                                            <option value="Yes">No</option>
                                                    </select>
                                                    {
                                                            (eduErr.hgradErr && education.highschool.isGraduated=='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Selcet if you are graduated from here or not</p>
                                                    }
                                                   
                                                    {
                                                        ((prevEduErr.hschoolErr && education.highschool.isGraduated=='') && !eduErr.hgradErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                             </div>
                             <div className="form-col w-full md:w-[49%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Degree/Area of Study</p>
                                                <input  type="text"
                                                        defaultValue={education.highschool.degree}
                                                        onChange={(e)=>checkHschoolDegree(e)}
                                                        className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (education.highschool.degree.length>2? "focus-green":"")}>

                                                     </input>
                                                     {
                                                            (eduErr.hdegreeErr && education.highschool.degree.length>2 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Invalid degree / area of study</p>
                                                    }
                                                   
                                                    {
                                                        ((prevEduErr.hschoolErr && education.highschool.degree=='') && !eduErr.hdegreeErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                             </div>
                        </div>
                </div>
                {/*======================== contact form High School end=======================*/}
                 {/*========================  contact College/University=======================*/}
                 <div className="form-edu-box bg-[#FFF7EA] p-4 md:p-6 mt-4"> 
                        <h3 className="text-xl font-medium"> College/University</h3>
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[49%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Institution Name</p>
                                                <input 
                                                    type="text" 
                                                    defaultValue={education.college.insname}
                                                    onChange={(e)=>checkCollege(e)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (education.college.insname.length>9? "focus-green":"")}
                                                    >

                                                    </input>
                                                    {
                                                            (eduErr.cnameErr && education.college.insname.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }
                                                   
                                                    {
                                                        ((prevEduErr.collegeErr && education.college.insname=='') && !eduErr.cnameErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                         </div>
                                         <div className="form-col w-full md:w-[49%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Dates Attended</p>
                                                <input  type="text"
                                                        defaultValue={education.college.attendDate}
                                                        onChange={(e)=>checkCollegeAttend(e)}
                                                        className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (education.college.attendDate.length>9? "focus-green":"")}>

                                                     </input>
                                                     {
                                                            (eduErr.cattendErr && education.college.attendDate!='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">invalid date</p>
                                                    }
                                                   
                                                    {
                                                        ((prevEduErr.collegeErr && education.college.attendDate=='') && !eduErr.cattendErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                         </div>
                        </div>
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                        <div className="form-col w-full md:w-[49%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Graduated (Y/N)?</p>
                                                <select 
                                                    defaultValue={education.college.isGraduated}
                                                    onChange={(e)=>checkCollegeGraduated(e)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (education.highschool.isGraduated.length>9? "focus-green":"")}
                                                    >        <option value="">...</option>
                                                            <option value="Yes">Yes</option>
                                                            <option value="Yes">No</option>
                                                    </select>
                                                    
                                                   
                                                    {
                                                        ((prevEduErr.collegeErr && education.college.isGraduated=='') && !eduErr.cgradErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                         </div>
                                         <div className="form-col w-full md:w-[49%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Degree/Area of Study</p>
                                                <input  type="text"
                                                        defaultValue={education.college.degree}
                                                        onChange={(e)=>checkCollegeDegree(e)}
                                                        className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (education.college.degree.length>2? "focus-green":"")}
                                                        >

                                                     </input>
                                                     {
                                                            (eduErr.cdegreeErr && education.college.degree.length!='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Invalid degree / area of study</p>
                                                    }
                                                   
                                                    {
                                                        ((prevEduErr.collegeErr && education.college.degree=='') && !eduErr.cdegreeErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                         </div>
                        </div>
                </div>
                {/*======================== contact form College/University end=======================*/}
                {/*========================  Other=======================*/}
                <div className="form-edu-box bg-[#FFF7EA] p-4 md:p-6 mt-4"> 
                        <h3 className="text-xl font-medium"> Other</h3>
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                         <div className="form-col w-full md:w-[49%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Institution Name</p>
                                                <input 
                                                    type="text" 
                                                    defaultValue={education.other.insname}
                                                    onChange={(e)=>checkOther(e)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (education.college.insname.length>5? "focus-green":"")}
                                                    >

                                                    </input>
                                                    {
                                                            (eduErr.otnameErr && education.other.insname.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }
                                                   
                                                    {
                                                        ((prevEduErr.otherErr && education.other.insname=='') && !eduErr.otnameErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                         </div>
                                         <div className="form-col w-full md:w-[49%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Dates Attended</p>
                                                <input  type="text"
                                                        defaultValue={education.other.attendDate}
                                                        onChange={(e)=>checkOtherAttend(e)}
                                                        className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (education.other.attendDate.length>7? "focus-green":"")}>

                                                     </input>
                                                     {
                                                            (eduErr.otattendErr && education.other.attendDate!='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">invalid date</p>
                                                    }
                                                   
                                                    {
                                                        ((prevEduErr.otherErr && education.college.attendDate=='') && !eduErr.otattendErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                         </div>
                        </div>
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                         <div className="form-col w-full md:w-[49%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Graduated (Y/N)?</p>
                                                <select 
                                                    defaultValue={education.other.isGraduated}
                                                    onChange={(e)=>checkOtherGraduated(e)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (education.other.isGraduated.length>0? "focus-green":"")}
                                                    >        <option value="">...</option>
                                                            <option value="Yes">Yes</option>
                                                            <option value="Yes">No</option>
                                                    </select>
                                                    
                                                   
                                                    {
                                                        ((prevEduErr.otherErr && education.other.isGraduated=='') && !eduErr.otgradErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                         </div>
                                         <div className="form-col w-full md:w-[49%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Degree/Area of Study</p>
                                                <input  type="text"
                                                        defaultValue={education.other.degree}
                                                        onChange={(e)=>checkOtherDegree(e)}
                                                        className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (education.other.degree.length>2? "focus-green":"")}
                                                        >

                                                     </input>
                                                     {
                                                            (eduErr.otdegreeErr && education.other.degree.length!='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Invalid degree / area of study</p>
                                                    }
                                                   
                                                    {
                                                        ((prevEduErr.otherErr && education.other.degree=='') && !eduErr.otdegreeErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                         </div>
                        </div>
                </div>
                {/*======================== Other end=======================*/}
                {/*========================  Other=======================*/}
                <div className="form-edu-box p-4 md:p-2 mt-4"> 
                       
                        {
                            prevEduErr.allErr &&
                            
                            <div className="all-error"> <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-sm md:text-lg">Fill at least one group of field </p></div>
                           
                        }
                       
                </div>
                {/*======================== Other end=======================*/}
               

            </div>
        </div>
    )

}

export default Education