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
              (props.eventbooking && props.eventbooking.eventstatus==true) &&
              <button onClick={()=>bookGame(props.eventbooking)} className='w-full bg-red-600 hover:bg-red-700 py-2 px-2 block text-center text-white'>BOOK A PARTY</button>
            }
            {
              (props.eventbooking && props.eventbooking.eventstatus==false) &&
              <a href={"/"+props.locationslug+"/events#eventform"} className="bg-red-600 hover:bg-red-700 py-2 px-2 block text-center text-white">BOOK A PARTY</a>
            }

            {
              !props.eventbooking &&
              <a href={"/"+props.locationslug+"/events#eventform"} className="bg-red-600 hover:bg-red-700 py-2 px-2 block text-center text-white">BOOK EVENTS</a>
            }
               
          
               
           </div>
           <div className="w-[48%]">
               
           {
             
             (props.bookingall && (props.publish_status==undefined || props.publish_status==true)) &&
             <button onClick={()=>bookAll(props.bookingall)} className='w-full bg-red-600 hover:bg-red-700 py-2 px-2 block text-center text-white'>BOOK GAMES</button>

            }
             {
             
             (props.bookingall && props.publish_status==false) &&
             <button className='w-full bg-red-600 hover:bg-red-700 py-2 px-2 block text-center text-white'>COMING SOON</button>

            }
             {
          
          (props.bookinggame && (props.publish_status==undefined || props.publish_status==true)) &&
          <button onClick={()=>bookGame(props.bookinggame)} className='w-full bg-red-600 hover:bg-red-700 py-2 px-2 block text-center text-white'>{props.bookinggame.type=="gift"? "BUY GIFT CARDS":"BOOK THIS GAME"}</button>

         }
         {
          
          (props.bookinggame && props.publish_status==false) &&
          <button className='w-full bg-red-600 hover:bg-red-700 py-2 px-2 block text-center text-white'>{props.bookinggame.type=="gift"? "BUY GIFT CARDS":"BOOK THIS GAME"}</button>

         }
                  
              
           </div>
                      
           </div>           
</div>
    )
    
}

export default MoblieBook