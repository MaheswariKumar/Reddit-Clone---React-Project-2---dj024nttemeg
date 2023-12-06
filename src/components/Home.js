import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ViewCardOutlineIcon from "./icons/ViewCardOutlineIcon";
import CaretDownOutlineIcon from "./icons/CaretDownOutlineIcon";
import UpvoteOutlineIcon from "./icons/UpvoteOutlineIcon";
import DownvoteOutlineIcon from "./icons/DownvoteOutlineIcon";
import CommentOutlineIcon from "./icons/CommentOutlineIcon";
import ShareIOSOutlineIcon from "./icons/ShareIOSOutlineIcon";

export default function Home(){
    const [info, setInfo] = useState([]);

    async function getData(){
        const rs = await axios.get('https://academics.newtonschool.co/api/v1/reddit/post', {
            headers:  {
               'projectID': 'dj024nttemeg'
            }
        })

        console.log(rs.data);
    }
    useEffect(()=>{
        getData();
    }, [])

    return (
        <>
        <div className="p-1 flex justify-center w-full max-w-full">
            <div className="flex justify-center w-full max-w-2xl flex-col m-2 border-b border-gray-300">
                <div className="flex items-center pt-4 pb-4 justify-between gap-15 pb-9">
                    <button className="border p-2 pr-3 pl-3 rounded-full border-black text-sm font-semibold cursor-pointer">Create a Post</button>
                    <div className="flex items-center gap-1 hover:bg-gray-200 max-w-2xl rounded-full p-2 cursor-pointer">
                        <ViewCardOutlineIcon />
                        <CaretDownOutlineIcon />
                    </div>
                </div>
                <div className="cursor-pointer">
                    <div className="flex item-center justify-between pb-2 gap-15">
                        <div className="flex item-center justify-center gap-1">
                            <img className="rounded-full w-6 h-6" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/366.jpg" alt="Profile-Image"></img>
                            <nav className="text-xs font-medium text-gray-600 cursor-pointer">u/Carmen Shanahan</nav>
                        </div>
                        <div>
                            <button className="text-xs font-bold bg-blue-800 max-w-2xl rounded-full p-1 pl-2 pr-2 text-white cursor-pointer">Join</button>
                        </div>
                    </div>
                    <p className="text-sm pb-4">Been experimenting with some new recipes; who knew cooking could be so therapeutic? Does anyone have any movie or series recommendations? Just finished reading an incredible book; can't wait to share more about it. Took a long walk in the park today and felt truly rejuvenated. Caught the sunset today and it was a breathtaking sight.</p>
                    <div className="flex item-center pb-8 gap-5">
                        <div className="flex item-center justify-center gap-2 bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200">
                            <div className="hover:text-orange-500">
                                <UpvoteOutlineIcon />
                            </div>
                            <nav className="text-xs font-bold">12</nav>
                            <div className="hover:text-blue-500">
                                <DownvoteOutlineIcon />
                            </div>
                        </div>
                        <div className="flex item-center justify-center gap-2 bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200">
                            <CommentOutlineIcon />
                            <nav className="text-xs font-bold">12</nav>
                        </div>
                        <div className="flex item-center justify-center gap-2 bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200">
                            <ShareIOSOutlineIcon />
                            <nav className="text-xs font-bold">Share</nav>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}