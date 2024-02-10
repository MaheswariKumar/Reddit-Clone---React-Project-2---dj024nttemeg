import React, { useState } from "react";
import CloseIcon from "./icons/CloseIcon";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCommunity } from "./Action";
import WorldFillIcon from "./icons/WorldFillIcon";
import ViewsOutlineIcon from "./icons/ViewsOutlineIcon";
import LockOutlineIcon from "./icons/LockOutlineIcon";



export default function CreateCommunity() {
    const checkedTheme = useSelector((state) => state.checkedTheme);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [available, setAvailable] = useState(false);
    const [channelname, setChannelName] = useState("");
    const [namelen, setNameLen] = useState(21);
    let [len, setLen] = useState(0);

    const handleChannelName = (e) => {
      const inputText = e.target.value;
      setChannelName(inputText);
      
      if (inputText.length > len) {
        if (namelen > 0) {
          setNameLen((prevLen) => prevLen - 1);
        }
      } else if (inputText.length < len) {
        if (namelen < 21) {
          setNameLen((prevLen) => prevLen + 1);
        }
      }
      
      setLen(inputText.length);
      
      if (channelname.length >= 4){
        setAvailable(true);
      }
      else {
        setAvailable(false)
      }
    }

    function handleCreation() {
      navigate(`/r/post`)
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);
      dispatch(setCommunity())
    }

    
    return (
      <div
        className={`flex flex-col gap-2 items-cente rounded bg-white mx-6 w-full max-w-[540px] h-auto pt-2 ${
          checkedTheme ? "all border-[#343536] border" : "border"
        }`}
      >
        <div className={`flex justify-between items-center w-full pt-1 px-4 `}>
          <nav className="text-sm font-bold">Create a Community</nav>
          <div
            onClick={() => dispatch(setCommunity())}
            className={`cursor-pointer flex items-center rounded-full  p-2 ${
              checkedTheme
                ? "hover:bg-[#272729]"
                : "hover:bg-gray-300 bg-gray-200"
            }`}
          >
            <CloseIcon style={{ height: "16px", width: "16px" }} />
          </div>
        </div>
        <div className="w-full">
          <nav
            className={`mx-4 ${
              checkedTheme ? "border-[#343536] border" : "border"
            }`}
          ></nav>
        </div>
        <div className="flex flex-col px-4 pt-1">
          <nav className="text-sm font-bold">Name</nav>
          <nav className="text-xs text-gray-500">
            Community names including capitalization cannot be changed
          </nav>
        </div>
        <div className={`flex items-center gap-1 pt-3 mt-3 pb-2 h-11 mx-4 outline-1 ${
              checkedTheme ? "border-[#343536] border all" : "border"
            }`}>
          <span className="pl-1">r/</span>
          <input
            type="text"
            className={`h-7 rounded w-full outline-0`}
            onChange={(e)=> handleChannelName(e)}
          ></input>
        </div>
        <div className="mx-4 flex justify-between">
          <nav className="text-xs font-semibold text-gray-500">{namelen} characters remaining</nav>
          {available && <nav className="text-[#46d160] font-semibold text-xs">✔ Channel name Available.</nav>}
        </div>
        <div className="mt-2 flex flex-col gap-2 px-4 pb-7">
          <nav className="text-sm font-bold">Community type</nav>
          <div className="flex gap-1 items-center">
            <input className="custom-radio" type="radio" name="communityType"></input>
            <WorldFillIcon style={{ height: "16px", width: "16px" }} />
            <nav className="text-sm font-bold">Public</nav>
            <nav className="text-xs text-gray-500">
              Anyone can view, post, and comment to this community
            </nav>
          </div>
          <div className="flex gap-1 items-center">
          <input className="custom-radio" type="radio" name="communityType"></input>
            <ViewsOutlineIcon style={{ height: "16px", width: "16px" }} />
            <nav className="text-sm font-bold">Restricted</nav>
            <nav className="text-xs text-gray-500">
              Anyone can view, but only approved users can contribute
            </nav>
          </div>
          <div className="flex gap-1 items-center">
            <input className="custom-radio" type="radio" name="communityType"></input>
            <LockOutlineIcon style={{ height: "16px", width: "16px" }} />
            <nav className="text-sm font-bold">Private</nav>
            <nav className="text-xs text-gray-500">
              Only approved users can view and submit to this community
            </nav>
          </div>
        </div>
        <div className="flex flex-col px-4 pb-3">
          <nav className="text-sm font-bold">Adult content</nav>
          <div className="flex gap-1">
            <input type="checkbox"></input>
            <nav className="text-xs font-semibold">18+ years old community</nav>
          </div>
        </div>
        <div
          className={`flex gap-3 px-4 pt-3 pr-2 items-center justify-end ${
            checkedTheme ? "text-[#d7dadc] bg-[#272729]" : "bg-[#f6f7f8]"
          }`}
        >
          <button
            className={`rounded-full mb-3 p-2 ${
              checkedTheme
                ? "border border-[#d7dadc] text-[#d7dadc]"
                : "border border-[#0079d3] text-[#0079d3]"
            } font-semibold`}
          >
            Cancel
          </button>
          <button
            className={`rounded-full mb-3 p-2 ${
              checkedTheme
                ? "text-[#1A1A1B] bg-[#d7dadc]"
                : "bg-[#0079d3] text-white"
            } font-semibold`}
            onClick={handleCreation}
          >
            Create Community
          </button>
        </div>
      </div>
    );
}