import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function PostPpl() {
    const checkedTheme = useSelector((state) => state.checkedTheme);

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

    return (
        <>
                <div className={`flex w-full max-w-[20rem] flex-col m-2 mt-[4.5rem]`}>
            <div className={`cursor-pointer flex flex-col rounded py-2 gap-3 ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                <nav className="font-semibold px-3">Communities</nav>
                <div className="flex justify-between px-3">
                    <div className="flex gap-2">
                        <img className="rounded-full w-10 h-10" src="https://styles.redditmedia.com/t5_2qytk/styles/communityIcon_01rnlwe7gjy31.jpg?format=pjpg&s=1215c719432cc997d1d1b3413b9ae23f1e709a78"></img>
                        <div className="flex flex-col">
                            <nav className="text-xs font-bold hover:underline">r/bees</nav>
                            <nav className="text-xs text-[#7c7c7c]">10.9k Members</nav>
                        </div>
                    </div>
                    <button className={`font-bold  px-4  rounded-full ${checkedTheme ? "bg-[#343536]" : "bg-[#f6f7f8] hover:bg-[#e9f5fd] text-[#0079d3]"}`}>Join</button>
                </div>
                <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} my-0.5`}></nav>
                <div className="flex justify-between px-3">
                    <div className="flex gap-2">
                        <img className="rounded-full w-10 h-10" src="https://styles.redditmedia.com/t5_2qtzm/styles/communityIcon_ebvwwcyvkqu51.png"></img>
                        <div className="flex flex-col">
                            <nav className="text-xs font-bold hover:underline">r/bees</nav>
                            <nav className="text-xs text-[#7c7c7c]">58.9k Members</nav>
                        </div>
                    </div>
                    <button className={`font-bold  px-4  rounded-full ${checkedTheme ? "bg-[#343536]" : "bg-[#f6f7f8] hover:bg-[#e9f5fd] text-[#0079d3]"}`}>Join</button>
                </div>
                <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} my-0.5`}></nav>
                <div className="flex justify-between px-3">
                    <div className="flex gap-2">
                        <img className="rounded-full w-10 h-10" src="https://styles.redditmedia.com/t5_2rjli/styles/communityIcon_woz69bbppdzb1.png"></img>
                        <div className="flex flex-col">
                            <nav className="text-xs font-bold hover:underline">r/teenagers</nav>
                            <nav className="text-xs text-[#7c7c7c]">3.0 Members</nav>
                        </div>
                    </div>
                    <button className={`font-bold  px-4  rounded-full ${checkedTheme ? "bg-[#343536]" : "bg-[#f6f7f8] hover:bg-[#e9f5fd] text-[#0079d3]"}`}>Join</button>
                </div>
                <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} my-0.5`}></nav>
                <div className="flex justify-between px-3">
                    <div className="flex gap-2">
                        <img className="rounded-full w-10 h-10" src="https://styles.redditmedia.com/t5_2qjpg/styles/communityIcon_psv46hffiq9c1.jpeg?format=pjpg&s=78ee8bcb2baf2f19a9cf90561618adbef15c595f"></img>
                        <div className="flex flex-col">
                            <nav className="text-xs font-bold hover:underline">r/memes</nav>
                            <nav className="text-xs text-[#7c7c7c]">10.9k Members</nav>
                        </div>
                    </div>
                    <button className={`font-bold  px-4  rounded-full ${checkedTheme ? "bg-[#343536]" : "bg-[#f6f7f8] hover:bg-[#e9f5fd] text-[#0079d3]"}`}>Join</button>
                </div>
                <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} my-0.5`}></nav>
                <div className="flex justify-between px-3">
                    <div className="flex gap-2">
                        <img className="rounded-full w-10 h-10" src="https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png"></img>
                        <div className="flex flex-col">
                            <nav className="text-xs font-bold hover:underline">r/funny</nav>
                            <nav className="text-xs text-[#7c7c7c]">10.9k Members</nav>
                        </div>
                    </div>
                    <button className={`font-bold  px-4  rounded-full ${checkedTheme ? "bg-[#343536]" : "bg-[#f6f7f8] hover:bg-[#e9f5fd] text-[#0079d3]"}`}>Join</button>
                </div>
                <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} my-0.5`}></nav>
                <nav className="text-sm text-[#0079d3] font-semibold pl-4 pb-3">See more communities</nav>
            </div>
            <div className={`mt-4 cursor-pointer flex flex-col rounded py-2 gap-3 ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                <nav className="font-semibold px-3">People</nav>
                <div className="flex justify-between px-3">
                    <div className="flex gap-2">
                        <img className="rounded-full w-10 h-10" src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"></img>
                        <div className="flex flex-col">
                            <nav className="text-xs font-bold hover:underline">u/bee</nav>
                            <nav className="text-xs text-[#7c7c7c]">1.9k Karma</nav>
                        </div>
                    </div>
                    <button className={`font-bold  px-4  rounded-full ${checkedTheme ? "bg-[#343536]" : "bg-[#f6f7f8] hover:bg-[#e9f5fd] text-[#0079d3]"}`}>Follow</button>
                </div>
                <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} my-0.5`}></nav>
                <div className="flex justify-between px-3">
                    <div className="flex gap-2">
                        <img className="rounded-full w-10 h-10" src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"></img>
                        <div className="flex flex-col">
                            <nav className="text-xs font-bold hover:underline">u/jai</nav>
                            <nav className="text-xs text-[#7c7c7c]">5.9k Karma</nav>
                        </div>
                    </div>
                    <button className={`font-bold  px-4  rounded-full ${checkedTheme ? "bg-[#343536]" : "bg-[#f6f7f8] hover:bg-[#e9f5fd] text-[#0079d3]"}`}>Follow</button>
                </div>
                <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} my-0.5`}></nav>
                <div className="flex justify-between px-3">
                    <div className="flex gap-2">
                        <img className="rounded-full w-10 h-10" src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"></img>
                        <div className="flex flex-col">
                            <nav className="text-xs font-bold hover:underline">u/girl</nav>
                            <nav className="text-xs text-[#7c7c7c]">3.0 Karma</nav>
                        </div>
                    </div>
                    <button className={`font-bold  px-4  rounded-full ${checkedTheme ? "bg-[#343536]" : "bg-[#f6f7f8] hover:bg-[#e9f5fd] text-[#0079d3]"}`}>Follow</button>
                </div>
                <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} my-0.5`}></nav>
                <div className="flex justify-between px-3">
                    <div className="flex gap-2">
                        <img className="rounded-full w-10 h-10" src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"></img>
                        <div className="flex flex-col">
                            <nav className="text-xs font-bold hover:underline">u/hello</nav>
                            <nav className="text-xs text-[#7c7c7c]">11.5k Karma</nav>
                        </div>
                    </div>
                    <button className={`font-bold  px-4  rounded-full ${checkedTheme ? "bg-[#343536]" : "bg-[#f6f7f8] hover:bg-[#e9f5fd] text-[#0079d3]"}`}>Follow</button>
                </div>
                <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} my-0.5`}></nav>
                <div className="flex justify-between px-3">
                    <div className="flex gap-2">
                        <img className="rounded-full w-10 h-10" src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png"></img>
                        <div className="flex flex-col">
                            <nav className="text-xs font-bold hover:underline">u/newton</nav>
                            <nav className="text-xs text-[#7c7c7c]">10.9k Karma</nav>
                        </div>
                    </div>
                    <button className={`font-bold  px-4  rounded-full ${checkedTheme ? "bg-[#343536]" : "bg-[#f6f7f8] hover:bg-[#e9f5fd] text-[#0079d3]"}`}>Follow</button>
                </div>
            </div>
            <button onClick={scrollToTop} className={`rounded-full mt-10 mx-24 px-4 p-1 ${checkedTheme ? "text-[#1A1A1B] bg-[#d7dadc]" : "bg-[#0079d3] text-white"} font-semibold`}>Back to Top</button>
            </div>
        </>
    )
}