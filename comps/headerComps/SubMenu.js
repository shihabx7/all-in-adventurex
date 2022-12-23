import Link from "next/link"
import { FaAngleDown,FaAngleRight,FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import React from 'react';
import { ImPlay3 } from "react-icons/im";
import VirtualSubmenu from "./VirtualSubmenu";
import EscapeGameSubmenu from "./EscapeGameSubmenu";
import OhterGameSubmenu from "./OhterGameSubmenu";
import EventSubmenu from "./EventSubmenu";
import StaticSubmenu from "./StaticSubmenu";

const otherCheck=(aclist)=>{
       
    var res=false
    
    aclist.map((activity)=>{
            if(activity.category=="other"){
                res=true 
            }
    })
    return res
  }


const SubMenu=(props)=>{

    const [openMenu, setopenMenu] = useState('1');

    

      const othergame=otherCheck(props.activitylist)

   

    
    
    return(

        <div className="flex flex-col md:flex-row submenu-box md:justify-between pb-[170px] pt-4 md:pb-12 md:pt-10 overflow-scroll md:overflow-hidden h-screen md:h-auto " style={
            {
              backgroundImage : "url(/assets/submenu-bg.png),linear-gradient(#111111,#111111)",
            }
           }> 
            <div className="px-6 md:px-16 border-r border-dark-coffee"> 
                    <div className="submenu-content text-light-gold md:text-lg"> 
                            <div className="submenu-item">
                               
                               {
                                 props.locationslug &&
                                 <a href={"/locations/"+props.locationslug} className="flex items-center">
                                        <span className="sub-link-txt">Home</span> 
                                  </a>
                               }
                               {
                                 !props.locationslug &&
                                 <a href="/" className="flex items-center">
                                        <span className="sub-link-txt">Home</span> 
                                 </a>
                               }
                                     
                                

                            </div>
                            <div className="submenu-item">
                               
                                     <a href="/locations" className="flex items-center">
                                        <span className="sub-link-txt">Locations</span> 
                                     </a>
                               

                            </div>
                            {
                              props.locationslug &&

                              <div className="submenu-item">
                               
                                  <a href={"/"+props.locationslug+"/contact-store"} className="flex items-center">
                                        <span className="sub-link-txt">Contact Store</span> 
                                    </a>
                        

                              </div>
                            }
                           {/*=========================================== Collapse menu 1========== */}
                            <div className="submenu-item"
                                onClick={() =>
                                    setopenMenu(
                                        openMenu === "1" ? "0":"1"
                                       
                                    )
                                  }
                            >
                               
                                     <p className="cursor-pointer flex items-center space-x-2 ">
                                        <span className="sub-link-txt"
                                        style={{
                                            borderBottom: openMenu==='1' ? "1px solid #FFEFCD":"1px solid transparent"
                                             }}
                                        >In-Person Escape Rooms</span>
                                         <span className="text-gold">
                                         {openMenu==='1' ? <FaAngleUp/> : <FaAngleDown/>}
                                        </span>
                                        
                                     </p>
                              

                                <div className="submenu-dropdown py-2 ml-4 text-base"
                                style={{
                                    display: openMenu==='1' ?"block":"none"
                                   }}
                                > 
                                    {
                                       props.locationslug &&
                                       <EscapeGameSubmenu locationslug={props.locationslug} 
                                                         activitylist={props.activitylist}/>
                                    }
                                    {
                                      (!props.locationslug && props.activitylist) &&
                                       <EscapeGameSubmenu activitylist={props.activitylist}/>
                                       
                                    }
                                    {
                                      (!props.locationslug && !props.activitylist) &&
                                       <EscapeGameSubmenu />
                                    }
                                       
                                             
                                </div>

                            </div>
                            {/*=========================================== Collapse menu 1 end========== */}

                           
                             {/*=========================================== all other Collapse menu 3========== */}
                                {
                                  othergame &&
                                    <div className="submenu-item"
                                            onClick={() =>
                                                  setopenMenu(
                                                       openMenu === "3" ? "0":"3"
                                       
                                                      )
                                              }
                                          >
                                
                                     <p className="cursor-pointer flex items-center space-x-2">
                                        <span className="sub-link-txt"
                                        style={{
                                            borderBottom: openMenu==='3' ? "1px solid #FFEFCD":"1px solid transparent"
                                             }}
                                        >Other In-Person Activities</span>
                                         <span className="text-gold">
                                         {openMenu==='3' ? <FaAngleUp/> : <FaAngleDown/>}
                                        </span>
                                        
                                     </p>
                               

                                <div className="submenu-dropdown py-2 ml-4 text-base"
                                style={{
                                    display: openMenu==='3' ?"block":"none"
                                   }}
                                > 
                                {
                                       props.locationslug &&
                                       <OhterGameSubmenu locationslug={props.locationslug}
                                                          activitylist={props.activitylist}
                                       />
                                    }
                                    {
                                       (!props.locationslug && props.activitylist) &&
                                       <OhterGameSubmenu activitylist={props.activitylist}
                                       />
                                    }
                                    {
                                       (!props.locationslug && !props.activitylist) &&
                                       <OhterGameSubmenu/>
                                    }
                                  
                                    

                                </div>

                            </div>

                                }
                             

                            {/*=========================================== all other  Collapse menu 3 end========== */}
                             {/*=========================================== Collapse menu 4========== */}

                             <div className="submenu-item"
                                onClick={() =>
                                    setopenMenu(
                                        openMenu === "4" ? "0":"4"
                                       
                                    )
                                  }
                            >
                                
                                     <p className="cursor-pointer flex items-center space-x-2">
                                        <span className="sub-link-txt"
                                        style={{
                                            borderBottom: openMenu==='3' ? "1px solid #FFEFCD":"1px solid transparent"
                                             }}
                                        >Events and Parties</span>
                                         <span className="text-gold">
                                         {openMenu==='4' ? <FaAngleUp/> : <FaAngleDown/>}
                                        </span>
                                        
                                     </p>
                                

                                <div className="submenu-dropdown py-2 ml-4 text-base"
                                style={{
                                    display: openMenu==='4' ?"block":"none"
                                   }}
                                > 
                                {
                                       props.locationslug &&
                                       <EventSubmenu locationslug={props.locationslug}
                                                       eventlist={props.eventlist}
                                       />
                                    }
                                    {
                                       (!props.locationslug && props.eventlist) &&
                                       <EventSubmenu eventlist={props.eventlist}/>
                                    }
                                {
                                       (!props.locationslug && !props.eventlist) &&
                                       <EventSubmenu />
                                    }
                                    

                                </div>

                            </div>
                            {/*===========================submenu-item 4 end--------------------*/}
                             {/*=========================================== Collapse menu 2========== */}

                             <div className="submenu-item"
                                onClick={() =>
                                    setopenMenu(
                                        openMenu === "2" ? "0":"2"
                                       
                                    )
                                  }
                            >
                                
                                     <p className="cursor-pointer flex items-center  space-x-2 ">
                                        <span className="sub-link-txt"
                                        style={{
                                            borderBottom: openMenu==='2' ? "1px solid #FFEFCD":"1px solid transparent"
                                             }}
                                        >Virtual Escape Rooms</span>
                                         <span className="text-gold">
                                         {openMenu==='2' ? <FaAngleUp/> : <FaAngleDown/>}
                                        </span>
                                        
                                     </p>
                              

                                <div className="submenu-dropdown py-2 ml-4 text-base"
                                style={{
                                    display: openMenu==='2' ?"block":"none"
                                   }}
                                > 
                                   <VirtualSubmenu/>
                                    
                                </div>

                            </div>

                            {/*=========================================== Collapse menu 2 end========== */}
                            <div className="submenu-item">
                               
                                  <a href="/virtual-games/virtual-game-show-room" className="flex items-center">
                                        <span className="sub-link-txt">Virtual Game Show Room</span> 
                                    </a>
                        

                              </div>
                              
                                    
                            
                            {
                              props.locationslug &&

                              <div className="submenu-item">
                               
                                  <a href={"/"+props.locationslug+"/gift-cards"} className="flex items-center">
                                        <span className="sub-link-txt">Gift Cards</span> 
                                    </a>
                        

                              </div>
                            }
                            
                            {
                              !props.locationslug &&

                              <div className="submenu-item">
                                <Link href="/gift-cards">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Gift Cards</span> 
                                     </a>
                                </Link>

                            </div>
                            }
                            
                           

                    </div>


            </div>
{/*=====================================================submenu-item-static=============================*/}
            <div className="px-6 md:px-16 "> 
                        <StaticSubmenu/>
            </div>
{/*============submenu-item-static end===========*/}
        </div>
    );
}

export default SubMenu;