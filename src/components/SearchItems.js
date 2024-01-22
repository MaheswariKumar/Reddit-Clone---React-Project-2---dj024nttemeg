import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UpvoteOutlineIcon from "./icons/UpvoteOutlineIcon";
import DownvoteOutlineIcon from "./icons/DownvoteOutlineIcon";
import CommentOutlineIcon from "./icons/CommentOutlineIcon";
import PostPpl from "./PostPpl";
import Comments from "./Comments";

export default function SearchItems() {
    const isUserLoggedin = useSelector((state) => state.isUserLoggedin);
    const checkedTheme = useSelector((state) => state.checkedTheme);
    const isMobile = useSelector((state) => state.isMobile);
    const [post, setpost] = useState(true)
    const [cmt, setCmt] = useState(false)
    const [comuty, setComuty] = useState(false)
    const [ppl, setPpl] = useState(false)

    function handlePost() {
        setpost(true)
        setCmt(false)
        setComuty(false)
        setPpl(false)
    }

    function handleCmt() {
        setpost(false)
        setCmt(true)
        setComuty(false)
        setPpl(false)
    }

    function handleComuty() {
        setpost(false)
        setCmt(false)
        setComuty(true)
        setPpl(false)
    }

    function handlePpl() {
        setpost(false)
        setCmt(false)
        setComuty(false)
        setPpl(true)
    }
    return (
        <>
        <div className={`${!isUserLoggedin ? "bg-white" : (checkedTheme ? "bg-black" : "bg-gray-300")} py-1 pr-1 flex justify-between w-full max-w-full min-h-screen mt-12`}>
            <div className="flex justify-center w-full mt-5">
                <div className={`flex w-full max-w-[41rem] flex-col m-2`}>
                    <div className={`flex h-10 items-center gap-6 px-2 rounded opacity-100 mb-6`}>
                        <nav onClick={handlePost} className={`font-bold cursor-pointer rounded-full text-base px-4 py-2  ${post && !checkedTheme ? "bg-[#f6f7f8] hover:bg-gray-200" : !post && !checkedTheme ? "hover:bg-gray-200" : !post && checkedTheme ? "hover:bg-[#1A1A1B] text-[#d7dadc]" : "bg-[#1A1A1B] text-[#d7dadc]"}`}>Posts</nav>
                        <nav onClick={handleCmt} className={`font-bold cursor-pointer rounded-full text-base px-4 py-2 ${cmt && !checkedTheme ? "bg-[#f6f7f8] hover:bg-gray-200" : !cmt && !checkedTheme ? "hover:bg-gray-200" : !cmt && checkedTheme ? "hover:bg-[#1A1A1B] text-[#d7dadc]" : "bg-[#1A1A1B] text-[#d7dadc]"}`}>Comments</nav>
                        <nav onClick={handleComuty} className={`font-bold cursor-pointer rounded-full text-base px-4 py-2 ${comuty && !checkedTheme ? "bg-[#f6f7f8] hover:bg-gray-200" : !comuty && !checkedTheme ? "hover:bg-gray-200" : !comuty && checkedTheme ? "hover:bg-[#1A1A1B] text-[#d7dadc]" : "bg-[#1A1A1B] text-[#d7dadc]"}`}>Communities</nav>
                        <nav onClick={handlePpl} className={`font-bold cursor-pointer rounded-full text-base px-4 py-2 ${ppl && !checkedTheme ? "bg-[#f6f7f8] hover:bg-gray-200" : !ppl && !checkedTheme ? "hover:bg-gray-200" : !ppl && checkedTheme ? "hover:bg-[#1A1A1B] text-[#d7dadc]" : "bg-[#1A1A1B] text-[#d7dadc]"}`}>People</nav>
                    </div>
                    {/* <div className={`mt-4 flex justify-between items-center gap-3 px-2 rounded ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}> */}
            {post && <div className={`flex h-auto gap-3 pl-2 rounded ${checkedTheme ? "border border-[#343536]" : "border bg-white"}`}>
              <div className={`flex flex-col items-center pt-2 ${checkedTheme ? "bg-black text-white" : null } `}>
                <div className="hover:text-orange-500 text-gray-500 cursor-pointer">
                  <UpvoteOutlineIcon height="20" width="20"/>
                </div>
                <nav className="text-sm font-bold">8</nav>
                <div className="hover:text-blue-500 text-gray-500 cursor-pointer">
                  <DownvoteOutlineIcon height="20" width="20" />
                </div>
              </div>
              <div className={`flex flex-col px-3 pt-2 pb-1 gap-3 ${checkedTheme ? "all" : null}`}>
                <div className="flex items-center gap-2">
                  <img className="rounded-full w-6 h-6" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/164.jpg" alt="Prof_Img"></img>
                  <nav className="text-xs font-semibold hover:underline cursor-pointer">r/Tom</nav>
                  <div className="text-gray-500 text-xs pl-2 flex gap-1">
                    <nav >Posted by</nav>
                    <nav className="hover:underline cursor-pointer">u/Tom</nav>
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                {/* <div className={`rounded-lg`}> */}
                  <img className="w-32 h-32" src="https://loremflickr.com/640/480?lock=1357718694658048" alt="Image"></img>
                {/* </div> */}
                <p>Been experimenting with some new recipes; who knew cooking could be so therapeutic? Feeling grateful for the wonderful friends and family I have. Can you believe how fast this year is going? Caught the sunset today and it was a breathtaking sight. Just finished reading an incredible book; can't wait to share more about it. What a beautiful day it is outside!</p>
                </div>
                <div className="flex">
                <div className={`flex text-gray-500 item-center justify-center gap-2 p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200 "}`}>
                  <CommentOutlineIcon />
                  <nav className="text-xs font-bold">8 Comments</nav>
                </div>
                <div className={`flex item-center justify-center gap-2 p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200 "}`}>
                  <img width="20" height="20" src="https://img.icons8.com/small/16/737373/forward-arrow.png" alt="forward-arrow"/>
                  <nav className="text-xs text-gray-500 font-bold">Share</nav>
                </div>
              </div>
              </div>
            </div> }
            {cmt && <Comments />}
            {/* </div> */}
            
                </div>
                {isMobile && post && <PostPpl />}
            </div>
                   </div>
        </>
    )
}