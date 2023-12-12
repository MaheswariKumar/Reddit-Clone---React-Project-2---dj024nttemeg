import React from "react";
import axios from "axios";
import { useState, useEffect, useReducer } from "react";
import ViewCardOutlineIcon from "./icons/ViewCardOutlineIcon";
import CaretDownOutlineIcon from "./icons/CaretDownOutlineIcon";
import UpvoteOutlineIcon from "./icons/UpvoteOutlineIcon";
import DownvoteOutlineIcon from "./icons/DownvoteOutlineIcon";
import CommentOutlineIcon from "./icons/CommentOutlineIcon";
import ShareIOSOutlineIcon from "./icons/ShareIOSOutlineIcon";
import Community from "./Community";
import ViewClassicFillIcon from "./icons/ViewClassicFillIcon";
import ViewCardFillIcon from "./icons/ViewCardFillIcon";
import ViewClassicOutlineIcon from "./icons/ViewClassicOutlineIcon";

export default function Home(){
    const [info, setInfo] = useState([]);
    const [limit, setLimit] = useState(10);

    const IntialState = {
      showDropDown : false,
      showMin : true,
      showMax : false,
    }

    function StateReducer(state, action){
      switch(action.type) {
        case "showoption" :
          return {
            ...state,
            showDropDown : !state.showDropDown
          }

        case "showminoption" :
          return {
            ...state,
            showMin : true,
            showMax : false,
            showDropDown : false
          }

          case "showmaxoption" :
            return {
              ...state,
              showMax : true,
              showMin : false,
              showDropDown : false
            }

        default:
          return state
      }
    }

    const [state, StateDisptch] = useReducer(StateReducer, IntialState);
    

    async function getData(){
        const rs = await axios.get(`https://academics.newtonschool.co/api/v1/reddit/post?limit=${limit}`, {
            headers:  {
               'projectID': 'dj024nttemeg'
            }
        })
        setInfo(rs.data.data); 
        console.log(rs.data.data);
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
          <div className={`flex justify-center w-full flex-col m-2 ${state.showMax ? "max-w-5xl" : "max-w-2xl"}`}>
            <div className="flex items-center pt-4 pb-4 justify-between gap-15 pb-7">
              <button className="border p-2 pr-3 pl-3 rounded-full border-black text-sm font-semibold cursor-pointer">
                Create a Post
              </button>
              <div onClick={()=> StateDisptch({type:"showoption"})} className={`flex items-center gap-1 max-w-2xl rounded-full p-2 cursor-pointer ${state.showDropDown ? "bg-gray-300" : "hover:bg-gray-200"}`}>
                {state.showMin ? <ViewCardOutlineIcon /> : <ViewClassicOutlineIcon /> }
                <CaretDownOutlineIcon />
              </div>
            </div>
            {state.showDropDown && <>
            <div className={`z-10 fixed top-[7.5rem] shadow bg-white w-1/12 rounded-sm ${state.showMin ? "right-[35.5rem]" : "right-[25rem]"}`}>
                <nav className="p-3 pl-4 pb-2">View</nav>
                <div>
                  <div onClick={()=> StateDisptch({type:"showminoption"})} className={`flex items-center gap-2 p-2 pl-6 h-12 cursor-pointer ${state.showMin ? "bg-gray-200" : "hover:bg-gray-100"}`}>
                    {state.showMin ? <ViewCardFillIcon /> : <ViewCardOutlineIcon /> }
                    <nav>Card</nav>
                  </div> 
                  <div onClick={()=> StateDisptch({type:"showmaxoption"})} className={`flex items-center gap-2 p-2 pl-6 h-12 cursor-pointer ${state.showMax ? "bg-gray-200" : "hover:bg-gray-100"}`}>
                    {state.showMax ? <ViewClassicFillIcon /> : <ViewClassicOutlineIcon /> }
                    <nav>Classic</nav>
                  </div>
                </div>
              </div>
          </>}
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
          <Community />
        </div>
      </>
    );
}