const Education=(props)=>{

    return(
        
        <div onLoad={ props.setFormName('Education')}>
            
            <div className="form-holedr"> 
                 {/*========================  contact form High School=======================*/}
                 <div className="form-edu-box bg-[#FFF7EA] p-4 md:p-6 mt-4"> 
                        <h3 className="text-xl font-medium"> High School</h3>
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Institution Name</p>
                                                <input 
                                                    type="text" 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                    placeholder="Name of your institution" 
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Dates Attended</p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                        placeholder="Dates Attended"
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                         </div>
                        </div>
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Graduated (Y/N)?</p>
                                                <select 
                                                    
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>
                                                            <option value="Yes">Yes</option>
                                                            <option value="Yes">No</option>
                                                    </select>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Degree/Area of Study</p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                        placeholder="Degree name"
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                         </div>
                        </div>
                </div>
                {/*======================== contact form High School end=======================*/}
                 {/*========================  contact College/University=======================*/}
                 <div className="form-edu-box bg-[#FFF7EA] p-4 md:p-6 mt-4"> 
                        <h3 className="text-xl font-medium"> College/University</h3>
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Institution Name</p>
                                                <input 
                                                    type="text" 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                    placeholder="Name of your institution" 
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Dates Attended</p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                        placeholder="Dates Attended"
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                         </div>
                        </div>
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Graduated (Y/N)?</p>
                                                <select 
                                                    
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>
                                                            <option value="Yes">Yes</option>
                                                            <option value="Yes">No</option>
                                                    </select>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Degree/Area of Study</p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                        placeholder="Degree name"
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                         </div>
                        </div>
                </div>
                {/*======================== contact form College/University end=======================*/}
                {/*========================  Other=======================*/}
                <div className="form-edu-box bg-[#FFF7EA] p-4 md:p-6 mt-4"> 
                        <h3 className="text-xl font-medium"> Other</h3>
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Institution Name</p>
                                                <input 
                                                    type="text" 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                    placeholder="Name of your institution" 
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Dates Attended</p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                        placeholder="Dates Attended"
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                         </div>
                        </div>
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Graduated (Y/N)?</p>
                                                <select 
                                                    
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>
                                                            <option value="Yes">Yes</option>
                                                            <option value="Yes">No</option>
                                                    </select>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Degree/Area of Study</p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                        placeholder="Degree name"
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                         </div>
                        </div>
                </div>
                {/*======================== Other end=======================*/}
               

            </div>
        </div>
    )

}

export default Education