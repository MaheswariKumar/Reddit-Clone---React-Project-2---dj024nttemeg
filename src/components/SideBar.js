import React from "react";
import HomeFillIcon from "./icons/HomeFillIcon";
import PopularOutlineIcon from "./icons/PopularOutlineIcon";
import CaretUpOutlineIcon from "./icons/CaretUpOutlineIcon";
import CaretDownBigOutlineIcon from "./icons/CaretDownBigOutlineIcon";

export default function SideBar() {
    return (
        <>
            <div className="top-20 left-10 fixed w-56 border-r">
            <div className="flex gap-4 hover:bg-gray-100 bg-gray-300 cursor-pointer w-full">
              <HomeFillIcon />
              <nav>Home</nav>
            </div>
            <div className="flex">
              <PopularOutlineIcon />
              <nav>Popular</nav>
            </div>
            <div className="flex">
              <nav>RECENT</nav>
              <CaretDownBigOutlineIcon />
            </div>
            <div className="flex">
              <nav>TOPICS</nav>
              <CaretDownBigOutlineIcon />
            </div>
            <div className="flex">
              <nav>RESOURCES</nav>
              <CaretDownBigOutlineIcon />
            </div>
          </div>
        </>
    )
}