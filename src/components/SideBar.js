import React from "react";
import HomeFillIcon from "./icons/HomeFillIcon";
import PopularOutlineIcon from "./icons/PopularOutlineIcon";
import CaretUpOutlineIcon from "./icons/CaretUpOutlineIcon";
import CaretDownBigOutlineIcon from "./icons/CaretDownBigOutlineIcon";
// top-20 left-10 fixed  w-52 

export default function SideBar() {
    return (
        <>
            <div className="border-r z-10 w-56 mr-16">
              <div className="flex flex-col justify-center pt-8 pr-4">
                <div className="border-b">
                <div className="flex justify-start gap-4 hover:bg-gray-100 p-2 cursor-pointer w-full">
              <HomeFillIcon />
              <nav className="text-sm">Home</nav>
            </div>
            <div className="flex gap-4 hover:bg-gray-100 p-2 cursor-pointer w-full">
              <PopularOutlineIcon />
              <nav className="text-sm">Popular</nav>
            </div>
                </div>
            <div className="flex gap-4 hover:bg-gray-100 p-2 cursor-pointer w-full">
              <nav className="text-xs">RECENT</nav>
              <CaretDownBigOutlineIcon />
            </div>
            <div className="flex gap-4 hover:bg-gray-100 p-2 cursor-pointer w-full">
              <nav className="text-xs">TOPICS</nav>
              <CaretDownBigOutlineIcon />
            </div>
            <div className="flex gap-4 hover:bg-gray-100 p-2 cursor-pointer w-full">
              <nav className="text-xs">RESOURCES</nav>
              <CaretDownBigOutlineIcon />
            </div>
              </div>
          </div>
        </>
    )
}