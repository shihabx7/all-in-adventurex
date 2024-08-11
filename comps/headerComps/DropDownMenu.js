import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import React from "react";

import EscapeGameDropDown from "./EscapeGameDropDown";
import OtherGameDropDown from "./OtherGameDropDown";
import EventDropDown from "./EventDropDown";

import StaticSubmenu from "./StaticSubmenu";

const DropDownMenu = (props) => {
  const [openMenu, setopenMenu] = useState("1");

  return (
    <div className="flex submenu-pattern flex-col md:flex-row  md:justify-between pb-[190px] pt-4 md:pb-12 md:pt-10 overflow-scroll md:overflow-hidden h-screen md:h-auto ">
      <div className="px-6 md:px-16 border-r border-dark-coffee">
        <div className="submenu-content text-light-gold md:text-lg">
          {/*=======================home Page */}
          <div className="submenu-item">
            {props.locationSlug ? (
              <a
                href={"/locations/" + props.locationSlug}
                className="flex items-center"
              >
                <span className="sub-link-txt">Home</span>
              </a>
            ) : (
              <a href="/" className="flex items-center">
                <span className="sub-link-txt">Home</span>
              </a>
            )}
          </div>
          {/*=======================location's list Page */}
          <div className="submenu-item ffy">
            <a href="/find-your-photo" className="flex items-center">
              <span className="sub-link-txt">Find Your Photo</span>
            </a>
          </div>
          <div className="submenu-item">
            <a href="/locations" className="flex items-center">
              <span className="sub-link-txt">Locations</span>
            </a>
          </div>
          {/*=======================location's Gift card Page */}
          {props.locationSlug ? (
            <div className="my-2">
              <a
                href={"/" + props.locationSlug + "/gift-cards"}
                className=" inline-block bg-[#FFF9EB] p-1 text-[#4A2F03] hover:bg-[#F4E9D1]  hover:text-red-600 rounded"
              >
                <div className="p-1 flex space-x-2 items-center rounded border border-dashed border-[#A78849]">
                  <p className="text-lg leading-[1]">Gift Cards</p>
                  <div className="w-[20px]">
                    <img
                      className="w-full"
                      src="/assets/gift-images/hero/gift-card-icon-for-title.svg"
                    ></img>
                  </div>
                </div>
              </a>
            </div>
          ) : (
            <div className="my-2">
              <a
                href={"/gift-cards"}
                className=" inline-block bg-[#FFF9EB] p-1 text-[#4A2F03] hover:bg-[#F4E9D1]  hover:text-red-600 rounded"
              >
                <div className="p-1 flex space-x-2 items-center rounded border border-dashed border-[#A78849]">
                  <p className="text-lg leading-[1]">Gift Cards</p>
                  <div className="w-[20px]">
                    <img
                      className="w-full"
                      src="/assets/gift-images/hero/gift-card-icon-for-title.svg"
                    ></img>
                  </div>
                </div>
              </a>
            </div>
          )}
          {/*=======================location's store Page */}
          {props.locationSlug ? (
            <div className="submenu-item">
              <a
                href={"/" + props.locationSlug + "/contact-store"}
                className="flex items-center"
              >
                <span className="sub-link-txt">Contact Store</span>
              </a>
            </div>
          ) : (
            <></>
          )}
          {/*=========================================== Collapse menu escape Game List========== */}
          <div
            className="submenu-item"
            onClick={() => setopenMenu(openMenu === "1" ? "0" : "1")}
          >
            <p className="cursor-pointer flex items-center space-x-2 ">
              <span
                className="sub-link-txt"
                style={{
                  borderBottom:
                    openMenu === "1"
                      ? "1px solid #FFEFCD"
                      : "1px solid transparent",
                }}
              >
                Escape Rooms
              </span>
              <span className="text-gold">
                {openMenu === "1" ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </p>

            <div
              className="submenu-dropdown py-2 ml-4 text-base"
              style={{
                display: openMenu === "1" ? "block" : "none",
              }}
            >
              {props.locationSlug ? (
                <EscapeGameDropDown
                  locationSlug={props.locationSlug}
                  escapeGameSlugList={props.escapeGameSlugList}
                />
              ) : (
                <EscapeGameDropDown
                  escapeGameSlugList={props.escapeGameSlugList}
                />
              )}
            </div>
          </div>
          {/*=========================================== Collapse menu escape Game List end========== */}

          {/*===========================================  Collapse menu Other game List========== */}
          {props.otherGameSlugList.length > 0 ? (
            <div
              className="submenu-item"
              onClick={() => setopenMenu(openMenu === "3" ? "0" : "3")}
            >
              <p className="cursor-pointer flex items-center space-x-2">
                <span
                  className="sub-link-txt"
                  style={{
                    borderBottom:
                      openMenu === "3"
                        ? "1px solid #FFEFCD"
                        : "1px solid transparent",
                  }}
                >
                  Other Games
                </span>
                <span className="text-gold">
                  {openMenu === "3" ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </p>

              <div
                className="submenu-dropdown py-2 ml-4 text-base"
                style={{
                  display: openMenu === "3" ? "block" : "none",
                }}
              >
                {props.locationSlug ? (
                  <OtherGameDropDown
                    locationSlug={props.locationSlug}
                    otherGameSlugList={props.otherGameSlugList}
                  />
                ) : (
                  <OtherGameDropDown
                    otherGameSlugList={props.otherGameSlugList}
                  />
                )}
              </div>
            </div>
          ) : (
            <></>
          )}

          {/*=========================================== Collapse menu Other game List end========== */}
          {/*=========================================== Collapse menu  event List========== */}

          <div
            className="submenu-item"
            onClick={() => setopenMenu(openMenu === "4" ? "0" : "4")}
          >
            <p className="cursor-pointer flex items-center space-x-2">
              <span
                className="sub-link-txt"
                style={{
                  borderBottom:
                    openMenu === "3"
                      ? "1px solid #FFEFCD"
                      : "1px solid transparent",
                }}
              >
                Events and Parties
              </span>
              <span className="text-gold">
                {openMenu === "4" ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </p>

            <div
              className="submenu-dropdown py-2 ml-4 text-base"
              style={{
                display: openMenu === "4" ? "block" : "none",
              }}
            >
              {props.locationSlug ? (
                <EventDropDown
                  locationSlug={props.locationSlug}
                  eventSlugList={props.eventSlugList}
                />
              ) : (
                <EventDropDown eventSlugList={props.eventSlugList} />
              )}
            </div>
          </div>
          {/*===========================Collapse menu  event List end--------------------*/}
        </div>
      </div>
      {/*=====================================================submenu-item-static=============================*/}
      <div className="px-6 md:px-16 ">
        <StaticSubmenu />
      </div>
      {/*============submenu-item-static end===========*/}
    </div>
  );
};

export default DropDownMenu;
