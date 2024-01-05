import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMobile, setSideBar, openQR, openLogin, showMenuBar } from "./Action";
import CustomLogo from "./icons/CustomLogo";
import MenuIcon from "./icons/MenuIcon";
import SearchIcon from "./icons/SearchIcon";
import QrCodeOutlineIcon from "./icons/QrCodeOutlineIcon";
import OverflowHorizontalOutlineIcon from "./icons/OverflowHorizontalOutlineIcon";
import CaretDownBigOutlineIcon from "./icons/CaretDownBigOutlineIcon";
import HomeFillIcon from "./icons/HomeFillIcon";
import PopularOutlineIcon from "./icons/PopularOutlineIcon";
import MoreIcon from "./icons/MoreIcon";
import CustomSpeakerIcon from "./icons/CustomSpeakerIcon";


export default function NavBar(){
    const isMobile = useSelector((state) => state.isMobile);
    const isSideBarOpen = useSelector((state) => state.isSideBarOpen);
    const isMenu = useSelector((state) => state.isMenu);
    const isUserLoggedin = useSelector((state) => state.isUserLoggedin);
    const dispatch = useDispatch();

    const menuRef = useRef(null);
  
    const handleDiv = (e) => {
        if (!menuRef.current.contains(e.target)) {
           dispatch(showMenuBar(false))
        }
    }
  
    useEffect(() => {
      document.addEventListener('click', handleDiv);
  
      return () => {
        document.removeEventListener('click', handleDiv);
      };
    }, []);


    useEffect(()=>{
        const handleReSize = () => {
            dispatch(setIsMobile(window.innerWidth>=1024, window.innerWidth>=768));
        }

        window.addEventListener("resize", handleReSize);

        return () => {
            window.removeEventListener("resize", handleReSize);
        }

    }, [])


    return (
      <>
        <div className="p-1 pb-2 pl-4 pr-7 flex items-center justify-between gap-4 border-b w-full bg-white fixed top-0 z-5">
          <div className="flex items-center gap-2 pr-4">
            {/* <div className="cursor-pointer" onClick={()=> dispatch(setSideBar(!isSideBarOpen))}>
              <MenuIcon />
            </div> */}
            <img
              src="https://www.svgrepo.com/show/452094/reddit.svg"
              className="w-9 h-9"
            ></img>
            {isMobile && <CustomLogo />}
            <div onClick={()=> dispatch(setSideBar(!isSideBarOpen))} className="flex justify-between items-center h-[45px] w-[260px] flex-1 hover:border cursor-pointer">
            <div className="flex justify-start gap-4 p-3 rounded-sm cursor-pointer w-full">
              <HomeFillIcon />
              <nav className="text-sm">Home</nav>
            </div>
            <div className="">
            <CaretDownBigOutlineIcon />
            </div>
            </div>
          </div>
          <div className="w-full flex items-center bg-gray-200 max-w-3xl rounded-full">
            <div className="pl-4">
              <SearchIcon />
            </div>
            <input
              placeholder="Search Reddit"
              className="bg-gray-200 p-2 rounded-full w-3/6 font-sans placeholder-gray-500"
            />
          </div>
          <div className="flex items-center gap-3" >
            {/* {isMobile && (
              <div onClick={()=> dispatch(openQR())} className="flex items-center bg-gray-200 hover:bg-gray-300 max-w-2xl rounded-full p-2 pl-3 pr-3 gap-2 cursor-pointer">
                <QrCodeOutlineIcon />
                <nav className="text-sm font-semibold whitespace-nowrap">
                  Get app
                </nav>
              </div>
            )}
            <div onClick={()=> dispatch(openLogin())} className="bg-D93A00 hover:bg-962900 max-w-xl rounded-full p-3 gap-2 cursor-pointer">
              <nav className="text-sm font-semibold text-white whitespace-nowrap">
                Log In
              </nav>
            </div>
            <div ref={menuRef} onClick={()=> dispatch(showMenuBar(!isMenu))}  className="cursor-pointer rounded-full hover:bg-gray-200 w-10 h-10 flex items-center justify-center">
              <OverflowHorizontalOutlineIcon />
            </div> */}
            <PopularOutlineIcon />
            <img width="25" height="25" src="https://img.icons8.com/ios/50/speech-bubble-with-dots--v1.png" alt="speech-bubble-with-dots--v1"/>
            <img width="25" height="25" src="https://img.icons8.com/fluency-systems-regular/48/appointment-reminders--v1.png" alt="appointment-reminders--v1"/>
            <img width="30" height="30" src="https://img.icons8.com/ios/50/plus-math--v1.png" alt="plus-math--v1"/>
            <CustomSpeakerIcon />
          </div>
        </div>
      </>
    );
}