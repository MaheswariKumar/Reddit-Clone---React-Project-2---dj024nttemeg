import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMobile } from "./Action";
import CustomLogo from "./icons/CustomLogo";
import MenuIcon from "./icons/MenuIcon";
import SearchIcon from "./icons/SearchIcon";
import QrCodeOutlineIcon from "./icons/QrCodeOutlineIcon";
import OverflowHorizontalOutlineIcon from "./icons/OverflowHorizontalOutlineIcon";


export default function NavBar(){
    const isMobile = useSelector((state) => state.isMobile);
    const dispatch = useDispatch();

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
        <div className="p-1 pb-2 pl-4 pr-7 flex items-center justify-between gap-4 border-b mr-4 ml-4 w-full bg-white fixed top-0 z-0">
          <div className="flex items-center gap-2 pr-4">
            <div>
              <MenuIcon />
            </div>
            <img
              src="https://www.svgrepo.com/show/452094/reddit.svg"
              className="w-9 h-9"
            ></img>
            {isMobile && <CustomLogo />}
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
          <div className="flex items-center gap-3">
            {isMobile && (
              <div className="flex items-center bg-gray-200 max-w-2xl rounded-full p-2 pl-3 pr-3 gap-2">
                <QrCodeOutlineIcon />
                <nav className="text-sm font-semibold whitespace-nowrap">
                  Get app
                </nav>
              </div>
            )}
            <div className="bg-D93A00 max-w-xl rounded-full p-3 gap-2">
              <nav className="text-sm font-semibold text-white whitespace-nowrap">
                Log In
              </nav>
            </div>
            <div>
              <OverflowHorizontalOutlineIcon />
            </div>
          </div>
        </div>
      </>
    );
}