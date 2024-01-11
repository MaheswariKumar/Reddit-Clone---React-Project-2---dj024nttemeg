import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CommunityPage() {
    const checkedTheme = useSelector((state) => state.checkedTheme);

    return (
        <>
        <div className={`flex w-full max-w-[20rem] flex-col m-2`}>
            <div className={`flex flex-col rounded px-3 py-2 gap-3 ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                <div className="flex items-center justify-start gap-1">
                    <div className="w-10 h-10">
                        <img src="https://i.redd.it/veuemg4c8q171.jpg"></img>
                    </div>
                    <div className="flex flex-col">
                        <nav className="text-xs font-semibold">Reddit Premium</nav>
                        <nav className="text-xs text-gray-500">The best Reddit experience</nav>
                    </div>
                </div>
                <button className="rounded-full p-1 bg-[#ff4500] text-white font-semibold">Try Now</button>
            </div>
            <div className={`mt-4 flex flex-col rounded ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                <img src="https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png"></img>
                <div className="flex items-center gap-3 pl-3 pb-5">
                    <div className="h-8 w-10 pt-0 relative top-[-16px]">
                        <img src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png"></img>
                    </div>
                    <div className="pt-5">
                        <nav className="text-center font-semibold">Home</nav>
                    </div>
                </div>
                <div className="text-sm px-1 pb-2">
                    <nav>Your personal Reddit frontpage. Come here to check in with your favorite communities.</nav>
                </div>
                <div className="px-2">
                    <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} my-3`}></nav>
                </div>
                <button className="rounded-full mb-3 mx-3 p-1 bg-[#0079d3] text-white font-semibold">Create Post</button>
                <button className="rounded-full mb-3 mx-3 p-1 border border-[#0079d3] text-[#0079d3] font-semibold">Create Community</button>
            </div>
            <div className={`mt-4 flex p-2 pl-4 pr-3 flex-col rounded ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                <div className="flex text-xs gap-12 p-1">
                    <nav>User Agreement</nav>
                    <nav>Content Policy</nav>
                </div>
                <div className="flex text-xs gap-16 p-1 h-10">
                    <nav>Privacy Policy</nav>
                    <div>
                        <nav className="break-words">Moderator Code Of Conduct</nav>
                    </div>
                </div>
                <div className="flex text-xs gap-6 p-1">
                    <nav>English</nav>
                    <nav>Deutsch</nav>
                </div>
                <div className="flex text-xs gap-6 p-1">
                    <nav>Français</nav>
                    <nav>Español</nav>
                </div>
                <div className="flex text-xs gap-6 p-1">
                    <nav>Italiano</nav>
                    <nav>Português</nav>
                </div>
                <nav>Reddit, Inc. © 2024. All rights reserved.</nav>
            </div>
        </div>
        </>
    )
}