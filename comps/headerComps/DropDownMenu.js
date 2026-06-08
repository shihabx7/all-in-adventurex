import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import React from "react";

import EscapeGameDropDown from "./EscapeGameDropDown";
import OtherGameDropDown from "./OtherGameDropDown";
import EventDropDown from "./EventDropDown";

import StaticSubmenu from "./StaticSubmenu";
import { eventMenuSlugListV2 } from "../../lib/v2/formate/eventPageDataFormaterV2";

const DropDownMenu = (props) => {
  const [openMenu, setopenMenu] = useState("1");
  const [openEventMenu, setopenEventMenu] = useState(true);
  const eventSluglistV2 = eventMenuSlugListV2();

  return (
    <div className="flex submenu-pattern flex-col md:flex-row  md:justify-between pb-[190px] pt-4 md:pb-12 md:pt-10 overflow-scroll md:overflow-hidden h-screen md:h-auto ">
      <div className="px-6 md:px-12 border-r border-dark-coffee">
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
                    openMenu === "1"
                      ? "1px solid #FFEFCD"
                      : "1px solid transparent",
                }}
              >
                Parties and Events
              </span>
              <span className="text-gold">
                {/*openMenu === "4" ? <FaAngleUp /> : <FaAngleDown />*/}
                <FaAngleDown />
              </span>
            </p>

            <div className="submenu-dropdown py-2 ml-4 text-base">
              {props.locationSlug ? (
                <EventDropDown
                  locationSlug={props.locationSlug}
                  eventSlugList={eventSluglistV2}
                />
              ) : (
                <EventDropDown eventSlugList={eventSluglistV2} />
              )}
            </div>
          </div>
          {/*===========================Collapse menu  event List end--------------------*/}
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

          {/*============================ Collapse menu Other game List end========== */}
          {/*==================================================================Toymaker's Workshop========== */}

          {/*=========================================== Mobile Mystery ========== */}
          {props.hasMobileEscapeRoom ? (
            <div className="submenu-item">
              <a
                href={
                  "/" + props.locationSlug + "/activities/mobile-escape-room"
                }
                className="flex items-center"
              >
                <span className="sub-link-txt">Mobile Mystery</span>
              </a>
            </div>
          ) : (
            <div className="submenu-item">
              <a href={"/mobile-escape-room"} className="flex items-center">
                <span className="sub-link-txt">Mobile Mystery</span>
              </a>
            </div>
          )}
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
