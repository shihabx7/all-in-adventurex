import Link from "next/link"
import { FaAngleDown,FaAngleRight,FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import React from 'react';
import { ImPlay3 } from "react-icons/im";


const SubMenu=()=>{

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
                                <Link href="/">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Home</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="/locations">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">All locations</span> 
                                     </a>
                                </Link>

                            </div>
                           {/*=========================================== Collapse menu 1========== */}
                            <div className="submenu-item"
                                onClick={() =>
                                    setopenMenu(
                                        openMenu === "1" ? "0":"1"
                                       
                                    )
                                  }
                            >
                                <Link href="#">
                                     <a className="flex items-center space-x-2 ">
                                        <span className="sub-link-txt"
                                        style={{
                                            borderBottom: openMenu==='1' ? "1px solid #FFEFCD":"1px solid transparent"
                                             }}
                                        >All in person escape rooms</span>
                                         <span className="text-gold">
                                         {openMenu==='1' ? <FaAngleUp/> : <FaAngleDown/>}
                                        </span>
                                        
                                     </a>
                                </Link>

                                <div className="submenu-dropdown py-2 ml-4 text-base"
                                style={{
                                    display: openMenu==='1' ?"block":"none"
                                   }}
                                > 
                                    <Link href="/activities/escape-from-alcatraz">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Escape From Alcatraz</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/treasure-island">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Treasure Island</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/superheros-adventure">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Superhero's Adventure</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/zombie-apocalypse">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub ">Zombie Apocalypse</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/special-agent">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Special Agent</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/hollywood-premiere">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Hollywood Premiere</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/sherlocks-library">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Sherlocks Library</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/houdinis-magic-cell">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Houdini's Magic Cell</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/black-ops">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Black Ops</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/lost-in-the-jungle">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Lost In The Jungle</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/wizarding-school">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Wizarding School</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/magic-castle">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Magic Castle</span>
                                             </a>
                                    </Link>

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
                                <Link href="#">
                                     <a className="flex items-center space-x-2">
                                        <span className="sub-link-txt"
                                        style={{
                                            borderBottom: openMenu==='3' ? "1px solid #FFEFCD":"1px solid transparent"
                                             }}
                                        >All other in person activities</span>
                                         <span className="text-gold">
                                         {openMenu==='3' ? <FaAngleUp/> : <FaAngleDown/>}
                                        </span>
                                        
                                     </a>
                                </Link>

                                <div className="submenu-dropdown py-2 ml-4 text-base"
                                style={{
                                    display: openMenu==='3' ?"block":"none"
                                   }}
                                > 
                                    <Link href="/activities/beat-the-seat">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Beat The Seat</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/game-show-room">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Game Show Room</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/axe-throwing">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Axe Throwing</span>
                                             </a>
                                    </Link>
                                    <Link href="/activities/virtual-reality">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Virtual Reality</span>
                                             </a>
                                    </Link>
                                    

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
                                <Link href="#">
                                     <a className="flex items-center space-x-2">
                                        <span className="sub-link-txt"
                                        style={{
                                            borderBottom: openMenu==='3' ? "1px solid #FFEFCD":"1px solid transparent"
                                             }}
                                        >Evesnts and parties</span>
                                         <span className="text-gold">
                                         {openMenu==='4' ? <FaAngleUp/> : <FaAngleDown/>}
                                        </span>
                                        
                                     </a>
                                </Link>

                                <div className="submenu-dropdown py-2 ml-4 text-base"
                                style={{
                                    display: openMenu==='4' ?"block":"none"
                                   }}
                                > 
                                    <Link href="0/events/team-building">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Team Building</span>
                                             </a>
                                    </Link>
                                    <Link href="/events/birthday-party">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Birthday Party</span>
                                             </a>
                                    </Link>
                                    <Link href="/events/family-events">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Family Events</span>
                                             </a>
                                    </Link>
                                    <Link href="/events/bachelor-party">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Bachelor Party</span>
                                             </a>
                                    </Link>
                                    <Link href="/events/bachelorette-party">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Bachelorette Party</span>
                                             </a>
                                    </Link>
                                    <Link href="/events/corporate-events">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Corporate Events</span>
                                             </a>
                                    </Link>
                                    <Link href="/events/school-events">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">School Events</span>
                                             </a>
                                    </Link>
                                    <Link href="/events/private-party">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Private Party</span>
                                             </a>
                                    </Link>
                                    <Link href="/events/reunion-party">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Reunion Party</span>
                                             </a>
                                    </Link>
                                    <Link href="/events/graduation-party">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Graduation Party</span>
                                             </a>
                                    </Link>
                                    

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
                                <Link href="#">
                                     <a className="flex items-center  space-x-2 ">
                                        <span className="sub-link-txt"
                                        style={{
                                            borderBottom: openMenu==='2' ? "1px solid #FFEFCD":"1px solid transparent"
                                             }}
                                        >All virtual escape rooms</span>
                                         <span className="text-gold">
                                         {openMenu==='2' ? <FaAngleUp/> : <FaAngleDown/>}
                                        </span>
                                        
                                     </a>
                                </Link>

                                <div className="submenu-dropdown py-2 ml-4 text-base"
                                style={{
                                    display: openMenu==='2' ?"block":"none"
                                   }}
                                > 
                                    <Link href="#">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Escape From Alcatraz</span>
                                             </a>
                                    </Link>
                                    <Link href="#">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Treasure Island</span>
                                             </a>
                                    </Link>
                                    <Link href="#">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Superhero's Adventure</span>
                                             </a>
                                    </Link>
                                    <Link href="#">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Zombie Apocalypse</span>
                                             </a>
                                    </Link>
                                    
                                </div>

                            </div>

                            {/*=========================================== Collapse menu 2 end========== */}
                            
                            <div className="submenu-item">
                                <Link href="/gift-cards">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Gift cards</span> 
                                     </a>
                                </Link>

                            </div>
                            
                            
                           

                    </div>


            </div>
{/*============submenu-item-static===========*/}
            <div className="px-6 md:px-16 "> 
            <div className="submenu-content text-light-gold md:text-lg"> 
                  <div className="submenu-item">
                                <Link href="/testimonials">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Testimonials</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="/gallery">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Customer gallery</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="#">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Pricing</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="#">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Deals and coupons</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="/faqs">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">FAQs</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="/about">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">About us</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="/careers">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Careers</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="#">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Waiver</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="/franchise">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Become a franchise owner</span> 
                                     </a>
                                </Link>

                            </div>
                           
                            
                            <div className="submenu-item">
                                <Link href="/corporate-contact">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Coorporate Contact</span> 
                                     </a>
                                </Link>

                            </div>

                    </div>
            </div>
{/*============submenu-item-static end===========*/}
        </div>
    );
}

export default SubMenu;