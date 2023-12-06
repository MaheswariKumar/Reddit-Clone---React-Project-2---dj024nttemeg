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
    const [limit, setLimit] = useState(10);

    async function getData(){
        const rs = await axios.get(`https://academics.newtonschool.co/api/v1/reddit/post?limit=${limit}`, {
            headers:  {
               'projectID': 'dj024nttemeg'
            }
        })
        setInfo(rs.data.data); 
    }

    useEffect(()=>{
        if (limit <= 100) {
            getData();
        }
    }, [limit])

    useEffect(()=>{
        const handleScroll = () => {
            if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
                setLimit((l) => l + 10 );
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, [])

    return (
      <>
        <div className="p-1 mt-12 flex justify-center w-full max-w-full">
          <div className="flex justify-center w-full max-w-2xl flex-col m-2">
            <div className="flex items-center pt-4 pb-4 justify-between gap-15 pb-7">
              <button className="border p-2 pr-3 pl-3 rounded-full border-black text-sm font-semibold cursor-pointer">
                Create a Post
              </button>
              <div className="flex items-center gap-1 hover:bg-gray-200 max-w-2xl rounded-full p-2 cursor-pointer">
                <ViewCardOutlineIcon />
                <CaretDownOutlineIcon />
              </div>
            </div>
            {info.map((data, idx) => (
              <div
                className="cursor-pointer m-2 border-b border-gray-300 pt-2 hover:bg-gray-200 p-2 rounded-lg"
                key={idx}
              >
                <div className="flex item-center justify-between pb-2 gap-15">
                  <div className="flex item-center justify-center gap-1">
                    <img
                      className="rounded-full w-6 h-6"
                      src={data.author.profileImage}
                      alt="Profile-Image"
                    ></img>
                    <nav className="text-xs font-medium text-gray-600 cursor-pointer">
                      u/{data.author.name}
                    </nav>
                  </div>
                  <div>
                    <button className="text-xs font-bold bg-blue-800 max-w-2xl rounded-full p-1 pl-2 pr-2 text-white cursor-pointer">
                      Join
                    </button>
                  </div>
                </div>
                <p className="text-sm pb-4">{data.content}</p>
                <div className="flex item-center pb-5 gap-5">
                  <div className="flex item-center justify-center gap-2 bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200">
                    <div className="hover:text-orange-500">
                      <UpvoteOutlineIcon />
                    </div>
                    <nav className="text-xs font-bold">{data.likeCount}</nav>
                    <div className="hover:text-blue-500">
                      <DownvoteOutlineIcon />
                    </div>
                  </div>
                  <div className="flex item-center justify-center gap-2 bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200">
                    <CommentOutlineIcon />
                    <nav className="text-xs font-bold">{data.commentCount}</nav>
                  </div>
                  <div className="flex item-center justify-center gap-2 bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200">
                    <ShareIOSOutlineIcon />
                    <nav className="text-xs font-bold">Share</nav>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-3 ml-7 mt-10 pl-2">
            <nav className="pb-3">POPULAR COMMUNITIES</nav>
            <div className="flex item-center justify-center">
              <div className="flex item-center justify-around gap-7">
                <img
                  className="rounded-full w-8 h-8"
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/366.jpg"
                  alt="Profile Image"
                ></img>
                <div>
                  <nav className="text-xs">u/Carmen Shanahan</nav>
                  <nav className="text-xs">5,680,600 members</nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}