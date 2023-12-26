import React from "react";
import { useState } from "react";
import HomeFillIcon from "./icons/HomeFillIcon";
import PopularOutlineIcon from "./icons/PopularOutlineIcon";
import CaretUpOutlineIcon from "./icons/CaretUpOutlineIcon";
import CaretDownBigOutlineIcon from "./icons/CaretDownBigOutlineIcon";
import CustomIcon from "./icons/CustomIcon";
import TopicActivismOutlineIcon from "./icons/TopicActivismOutlineIcon";
import HelpOutlineIcon from "./icons/HelpOutlineIcon";
import TopicReadingOutlineIcon from "./icons/TopicReadingOutlineIcon";
import TopicCareersOutlineIcon from "./icons/TopicCareersOutlineIcon";
import AuthorOutlineIcon from "./icons/AuthorOutlineIcon";
import CommunityOutlineIcon from "./icons/CommunityOutlineIcon";
import TopicHistoryOutlineIcon from "./icons/TopicHistoryOutlineIcon";
import TopicOutlineIcon from "./icons/TopicOutlineIcon";
import TopicEthicsOutlineIcon from "./icons/TopicEthicsOutlineIcon";
import TopicLawOutlineIcon from "./icons/TopicLawOutlineIcon";
import RulesOutlineIcon from "./icons/RulesOutlineIcon";


export default function SideBar({isMobile, isSideBarOpen}) {
  const [openRecent, setOpenRecent] = useState(false);
  const [openTopic, setOpenTopic] = useState(false);
  const [openResource, SetOpenResource] = useState(false);
  const [seemore, setSeeMore] = useState(false);
  const [text, setText] = useState("See more");

  function handleSeeMore(){
      setSeeMore(!seemore);
      if (seemore){
          setText("See more");
      }
      else {
          setText("See less");
      }

  }

  // border-r side_bar1 side sticky top-14 left-10 z-20 w-56 max-w-lg
  // border-r side_bar1 top-14 left-0 z-20 w-60 pl-4 max-w-lg fixed bg-white
    return (
        <>
            <div className={`${!isMobile && isSideBarOpen ? "border-r side_bar1 top-12 h-full left-0 w-60 pl-4 max-w-lg fixed bg-white" : "border-r side_bar1 side sticky top-14 left-10 w-56 max-w-lg"} }`}>
              <div className="flex flex-col justify-center pt-8 pr-4">
                <div className="border-b pb-2">
                <div className="flex justify-start gap-4 hover:bg-gray-100 p-3 rounded-sm cursor-pointer w-full">
              <HomeFillIcon />
              <nav className="text-sm">Home</nav>
            </div>
            <div className="flex gap-4 hover:bg-gray-100 p-3 rounded-sm cursor-pointer w-full">
              <PopularOutlineIcon />
              <nav className="text-sm">Popular</nav>
            </div>
                </div>
                <div className="border-b pb-3 pt-3">
                <div className="flex justify-between gap-4 hover:bg-gray-100 p-3 rounded-sm cursor-pointer w-full">
              <nav className="text-xs text-gray-600">RECENT</nav>
              <div onClick={()=> setOpenRecent(!openRecent)}>
              {openRecent ? <CaretUpOutlineIcon /> : <CaretDownBigOutlineIcon />}
              </div>
            </div>
            {openRecent &&               <div className="flex flex-col p-3">
                <nav className="text-sm">No Recents</nav>
              </div>}
                </div>
            <div className="border-b pb-3 pt-3">
            <div className="flex justify-between gap-4 hover:bg-gray-100 p-3 rounded-sm cursor-pointer w-full">
              <nav className="text-xs text-gray-600">TOPICS</nav>
              <div onClick={()=> setOpenTopic(!openTopic)}>
              {openTopic ? <CaretDownBigOutlineIcon /> : <CaretDownBigOutlineIcon />}  
              </div>
            </div>
            {openTopic &&               <div className="flex flex-col p-3">
                <nav className="text-sm">No Topics</nav>
              </div>}
            </div>
            <div className="pb-3 pt-3 ">
            <div className="flex justify-between gap-4 hover:bg-gray-100 p-3 rounded-sm cursor-pointer w-full">
              <nav className="text-xs text-gray-600">RESOURCES</nav>
              <div onClick={()=> SetOpenResource(!openResource)}>
              {openResource ? <CaretDownBigOutlineIcon /> : <CaretDownBigOutlineIcon />}
              </div>
            </div>
            {openResource &&               <div className="flex flex-col">
              <div className="flex flex-col p-3">
              <div className="flex justify-start items-center gap-3 pb-4 cursor-pointer">
                <CustomIcon />
                <nav className="text-sm">About Reddit</nav>
                </div>
                <div className="flex justify-start items-center gap-3 pb-4 pl-1 cursor-pointer">
                <TopicActivismOutlineIcon />
                <nav className="text-sm">Advertise</nav>
                </div>
                <div className="flex justify-start items-center gap-3 pb-4 pl-1 cursor-pointer">
                <HelpOutlineIcon />
                <nav className="text-sm">Help</nav>
                </div>
                <div className="flex justify-start items-center gap-3 pb-4 pl-1 cursor-pointer">
                <TopicReadingOutlineIcon />
                <nav className="text-sm">Blog</nav>
                </div>
                <div className="flex justify-start items-center gap-3 pb-4 pl-1 cursor-pointer">
                <TopicCareersOutlineIcon />
                <nav className="text-sm">Careers</nav>
                </div>
                <div className="flex justify-start items-center gap-3 pb-3 pl-1 cursor-pointer">
                <AuthorOutlineIcon />
                <nav className="text-sm">Press</nav>
                </div>
                </div>
                {seemore && <>
                  <div className="flex flex-col p-3 pt-4 border-t">
                <div className="flex justify-start items-center gap-3 pb-4 pl-1 cursor-pointer">
                <CommunityOutlineIcon />
                <nav className="text-sm">Communities</nav>
                </div>
                <div className="flex justify-start items-center gap-3 pb-4 pl-1 cursor-pointer">
                <TopicHistoryOutlineIcon />
                <nav className="text-sm">Best of Reddit</nav>
                </div>
                <div className="flex justify-start items-center gap-3 pb-3 pl-1 cursor-pointer">
                <TopicOutlineIcon />
                <nav className="text-sm">Topics</nav>
                </div>
                </div>
                <div className="flex flex-col p-3 pt-4 border-t">
                <div className="flex justify-start items-center gap-3 pb-4 pl-1 cursor-pointer">
                <TopicEthicsOutlineIcon />
                <nav className="text-sm">Content Policy</nav>
                </div>
                <div className="flex justify-start items-center gap-3 pb-4 pl-1 cursor-pointer">
                <TopicLawOutlineIcon />
                <nav className="text-sm">Privacy Policy</nav>
                </div>
                <div className="flex justify-start items-center gap-3 pb-4 pl-1 cursor-pointer">
                <RulesOutlineIcon />
                <nav className="text-sm">User Agreement</nav>
                </div>
                </div>
                </>}
                <div className="flex flex-col mr-24 pr-6 pb-3 mb-8">
                <button onClick={handleSeeMore} className="text-xs whitespace-nowrap font-medium rounded-full pt-2 p-2 hover:bg-gray-300">{text}</button>
              </div> 
              </div>}
            </div>
              </div>
              <p style={{color:"rgb(67, 67, 67)", fontSize: ".65rem"}} className="bg-white fixed bottom-1 pt-12 text-center">Reddit, Inc. © 2023. All rights reserved.</p>
          </div>
        </>
    )
}