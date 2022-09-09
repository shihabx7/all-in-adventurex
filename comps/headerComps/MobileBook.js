const MoblieBook=(props)=>{
    const bookAll=(bookingData)=>{
        FH.open({
          shortname: bookingData.shortname,
          fallback: 'simple', 
          fullItems: 'yes', 
         // flow:  bookingData.flow, 
          view: 'items'
        });
      }
      const bookGame=(bookingData)=>{
        FH.open({
          shortname: bookingData.shortname,
          fallback: 'simple', 
          fullItems: 'yes', 
         flow:  bookingData.flow, 
          view: {item:bookingData.item}
        });
      }

    return(
        <div id="hbtn" className="header-book-btn-container  w-full  bg-coffee  lg:hidden z-50">
        <div className="max-w-7xl mx-auto flex justify-between"> 
           <div className="w-[48%]">
               
               {
             
                props.bookingall &&
                <button onClick={()=>bookAll(props.bookingall)} className='w-full bg-red-600 hover:bg-red-700 py-2 px-2 block text-center text-white'>BOOK GAMES</button>

               }
                {
             
             props.bookinggame &&
             <button onClick={()=>bookGame(props.bookinggame)} className='w-full bg-red-600 hover:bg-red-700 py-2 px-2 block text-center text-white'>BOOK GAMES</button>

            }
                   
               
           </div>
           <div className="w-[48%]">
               
                    <a href={"/"+props.locationslug+"/events#eventform"} className="bg-red-600 hover:bg-red-700 py-2 px-2 block text-center text-white">BOOK  EVENT</a>
              
           </div>
                      
           </div>           
</div>
    )
    
}

export default MoblieBook