import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./SideBar";
import CustomPlusIcon from "./icons/CustomPlusIcon";

export default function CreatePost() {
    const isUserLoggedin = useSelector((state) => state.isUserLoggedin);
    const checkedTheme = useSelector((state) => state.checkedTheme);
    const isMobile = useSelector((state) => state.isMobile);
    const isSideBarOpen = useSelector((state) => state.isSideBarOpen);
    

    return (
        <div className={`${!isUserLoggedin ? "bg-white" : (checkedTheme ? "bg-black" : "bg-gray-300")} py-1 pr-1 flex justify-between w-full max-w-full min-h-screen mt-12`}>
        {isMobile && isSideBarOpen  && <SideBar isMobile={isMobile} isSideBarOpen={isSideBarOpen} />}
            <div className="flex justify-center w-full mt-5">
                <div className={`flex w-full max-w-[45rem] flex-col m-2`}>
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
                    <div className={`rounded mt-3 ${checkedTheme ? "all" : "bg-white"}`}>
                        <div className="flex justify-evenly border-b h-14 mb-5">
                            <div className={`flex gap-2 items-center justify-center text-sm font-bold ${checkedTheme ? "all" : "text-[#0079d3]"}`}>
                                {/* <img width="25" height="25" src="https://img.icons8.com/ios/50/737373/add-list.png" alt="add-list"/>  */}
                                <img width="25" height="25" src="https://img.icons8.com/ios/50/228BE6/add-list.png" alt="add-list"/>                               
                                <nav>Post</nav>
                            </div>
                            <nav className="border"></nav>
                            <div className={`flex gap-2 items-center justify-center  text-sm font-bold ${checkedTheme ? "all" : "text-[#0079d3]"}`}>
                                {/* <img width="25" height="25" src="https://img.icons8.com/external-basicons-line-edtgraphics/50/737373/external-Picture-images-basicons-line-edtgraphics.png"></img> */}
                                <img width="25" height="25" src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/228BE6/external-image-interface-anggara-basic-outline-anggara-putra-2.png" alt="external-image-interface-anggara-basic-outline-anggara-putra-2"/>
                                <nav>Image</nav>
                            </div>
                            <nav className="border"></nav>
                            <div className={`flex gap-2 items-center justify-center   text-sm font-bold ${checkedTheme ? "all" : "text-[#0079d3]"}`}>
                                {/* <img width="25" height="25" src="https://img.icons8.com/sf-regular-filled/48/737373/link.png"></img> */}
                                <img width="25" height="25" src="https://img.icons8.com/sf-regular-filled/48/228BE6/link.png" alt="link"/>
                                <nav>Link</nav>
                            </div>
                            <nav className="border"></nav>
                            <div className={`flex gap-2 items-center justify-center  text-sm font-bold ${checkedTheme ? "all" : "text-[#0079d3]"}`}>
                                {/* <img width="25" height="25" src="https://img.icons8.com/dotty/80/737373/form.png" alt="form"/> */}
                                <img width="25" height="25" src="https://img.icons8.com/dotty/80/228BE6/form.png" alt="form"/>
                                <nav>Poll</nav>
                            </div>
                        </div>
                        <div className="border mx-3 mb-3 p-1.5">
                            <input type="text" placeholder="Title" className="indent-2"></input>
                        </div>
                        <div className="h-40 mx-3 mb-5 border">
                            <input placeholder="Text" className="indent-3"></input>
                        </div>
                        <div className="flex justify-start gap-3 pl-2 mb-4">
                            <div className="flex gap-2 rounded-full border items-center justify-center p-2 px-4">
                                <CustomPlusIcon />
                                <nav>OC</nav>
                            </div>
                            <div className="flex gap-2 rounded-full border items-center justify-center p-2 px-4">
                                <CustomPlusIcon />
                                <nav>Spoiler</nav>
                            </div>
                            <div className="flex gap-2 rounded-full border items-center justify-center p-2 px-4">
                                <CustomPlusIcon />
                                <nav>NSFW</nav>
                            </div>
                            <div className="flex gap-2 rounded-full border items-center justify-center p-2 px-4">
                                <CustomPlusIcon />
                                <nav>Flair</nav>
                            </div>
                        </div>
                        <nav className="border mb-4 mx-3"></nav>
                        <div className="flex justify-end pr-2 mb-4 pr-3 gap-2">
                            <nav className="border px-4 rounded-full p-1">Save Draft</nav>
                            <nav className="border px-4 rounded-full p-1">Post</nav>
                        </div>
                        <nav className="border"></nav>
                        <div className="flex flex-col pt-4 pl-2 gap-2 pb-5 bg-[#f6f7f8]">
                            <div className="flex gap-1">
                                <input type="checkbox"></input>
                                <nav className="text-sm font-bold">Send me post reply notifications</nav>
                            </div>
                            <div className="flex gap-1">
                                <nav className="text-sm font-bold text-[#0079d3]">Connect accounts to share your post</nav>
                                <img width="20" height="18" src="https://img.icons8.com/ios/50/info--v1.png" alt="info--v1"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col gap-4 w-full max-w-[20rem] flex-col m-2 mb-5 mt-8`}>
                    <div className={`flex flex-col rounded pb-3 ${checkedTheme ? "all" : "bg-white"}`}>
                        <div className="flex items-center pt-3 pl-2 p-1">
                            <img className="w-10 h-10" src="https://i.redd.it/snoovatar/avatars/a23dbde1-4832-4cc6-b528-8e3637c03984-headshot.png" alt="Prof_Img"></img>
                            <nav className="font-semibold">Posting to Reddit</nav>
                        </div>
                        <nav className="border mx-3"></nav>
                        <nav className="p-2 pl-5 text-sm font-semibold">1.Remember the human</nav>
                        <nav className="border mx-3"></nav>
                        <nav className="p-2 pl-5 text-sm font-semibold">2.Behave like you would in real life</nav>
                        <nav className="border mx-3"></nav>
                        <nav className="p-2 pl-5 text-sm font-semibold">3.Look for the original source of content</nav>
                        <nav className="border mx-3"></nav>
                        <nav className="p-2 pl-5 text-sm font-semibold">4.Search for duplicates before posting</nav>
                        <nav className="border mx-3"></nav>
                        <nav className="p-2 pl-5 text-sm font-semibold">5.Read the community’s rules</nav>
                        <nav className="border mx-3"></nav>
                    </div>
                    <div className="flex">
                        <nav className="text-xs font-bold text-[#7c7c7c]">Please be mindful of reddit's <a href="https://www.redditinc.com/policies/content-policy" className="text-[#0079d3]">content policy</a> and practice <a className="cursor-pointer text-[#0079d3]">good reddiquette.</a></nav>
                    </div>
                </div>
            </div>
        </div>
    )
}