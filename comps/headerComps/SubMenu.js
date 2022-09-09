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


const SubMenu=(props)=>{

    const [openMenu, setopenMenu] = useState('1');
    
    return(

        <div className="flex flex-col md:flex-row submenu-box justify-between py-8 md:py-12 overflow-y-scroll max-h-screen md:max-h-auto" style={
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
                                        <span className="sub-link-txt">All locations</span> 
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
                                        >All in person escape rooms</span>
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
                                       !props.locationslug &&
                                       <EscapeGameSubmenu/>
                                    }
                                       
                                             
                                </div>

                            </div>
                            {/*=========================================== Collapse menu 1 end========== */}

                           
                             {/*=========================================== Collapse menu 3========== */}

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
                                        >All other in person activities</span>
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
                                       !props.locationslug &&
                                       <OhterGameSubmenu/>
                                    }
                                  
                                    

                                </div>

                            </div>

                            {/*=========================================== Collapse menu 3 end========== */}
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
                                        >Events and parties</span>
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
                                       !props.locationslug &&
                                       <EventSubmenu/>
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
                                        >All virtual escape rooms</span>
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
                            
                            
                            {
                              props.locationslug &&

                              <div className="submenu-item">
                               
                                  <a href={"/"+props.locationslug+"/gift-cards"} className="flex items-center">
                                        <span className="sub-link-txt">Gift cards</span> 
                                    </a>
                        

                              </div>
                            }
                            
                            {
                              !props.locationslug &&

                              <div className="submenu-item">
                                <Link href="/gift-cards">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Gift cards</span> 
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