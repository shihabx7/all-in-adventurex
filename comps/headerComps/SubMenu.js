import Link from "next/link"
import { FaAngleDown,FaAngleRight,FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import React from 'react';
import { ImPlay3 } from "react-icons/im";


const SubMenu=()=>{

    const [openMenu, setopenMenu] = useState('1');
    return(

        <div className="flex flex-col md:flex-row submenu-box justify-between py-8 md:py-12"> 
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
                                <Link href="#">
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
                                    <Link href="#">
                                             <a className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Special Agent</span>
                                             </a>
                                    </Link>

                                </div>

                            </div>
                            {/*=========================================== Collapse menu 1 end========== */}

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
                                    

                                </div>

                            </div>

                            {/*=========================================== Collapse menu 3 end========== */}
                            <div className="submenu-item">
                                <Link href="#">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Events and parties</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="#">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Team building</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="#">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Gift cards</span> 
                                     </a>
                                </Link>

                            </div>
                           

                    </div>


            </div>

            <div className="px-6 md:px-16 "> 
            <div className="submenu-content text-light-gold md:text-lg"> 
                            <div className="submenu-item">
                                <Link href="#">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Testimonials</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="#">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Customer galleries</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="#">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Players leaderboard</span> 
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
                                <Link href="#">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Frequently asked questions</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="#">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">What is allinadventures</span> 
                                     </a>
                                </Link>

                            </div>
                            <div className="submenu-item">
                                <Link href="#">
                                     <a className="flex items-center">
                                        <span className="sub-link-txt">Contact us</span> 
                                     </a>
                                </Link>

                            </div>

                    </div>
            </div>

        </div>
    );
}

export default SubMenu;