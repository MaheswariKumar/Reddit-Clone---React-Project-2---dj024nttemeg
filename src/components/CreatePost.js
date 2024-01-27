import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./SideBar";

export default function CreatePost() {
    const isUserLoggedin = useSelector((state) => state.isUserLoggedin);
    const checkedTheme = useSelector((state) => state.checkedTheme);
    const isMobile = useSelector((state) => state.isMobile);
    const isSideBarOpen = useSelector((state) => state.isSideBarOpen);
    

    return (
        <div className={`${!isUserLoggedin ? "bg-white" : (checkedTheme ? "bg-black" : "bg-gray-300")} py-1 pr-1 flex justify-between w-full max-w-full min-h-screen mt-12`}>
        {isMobile && isSideBarOpen  && <SideBar isMobile={isMobile} isSideBarOpen={isSideBarOpen} />}
            <div className="flex justify-center w-full mt-5">
                <div className={`flex w-full max-w-[41rem] flex-col m-2`}>
                    <div className="flex justify-between items-center px-2">
                        <nav className="text-lg font-semibold">Create a post</nav>
                        <nav className="text-xs font-semibold text-[#0079d3]">DRAFTS</nav>
                    </div>
                    <nav className="border mt-3"></nav>
                    <div className="flex justify-start mt-4">
                        <div className="flex gap-1 items-center bg-white py-1 px-3 pr-44 rounded">
                            <img className="h-8 w-8" src="https://i.redd.it/snoovatar/avatars/a23dbde1-4832-4cc6-b528-8e3637c03984-headshot.png"></img>
                            <nav className="text-sm font-normal">Nandi</nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}