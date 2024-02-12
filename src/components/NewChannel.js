import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeTheme, setID } from "./Action";
import ViewCardOutlineIcon from "./icons/ViewCardOutlineIcon";
import ViewClassicFillIcon from "./icons/ViewClassicFillIcon";
import ViewCardFillIcon from "./icons/ViewCardFillIcon";
import ViewClassicOutlineIcon from "./icons/ViewClassicOutlineIcon";
import CaretDownOutlineIcon from "./icons/CaretDownOutlineIcon";
import SideBar from "./SideBar";

export default function NewChannel() {
    const checkedTheme = useSelector((state) => state.checkedTheme);
    const isTab = useSelector((state) => state.isTab);
    const isMobile = useSelector((state) => state.isMobile);
    const isSideBarOpen = useSelector((state) => state.isSideBarOpen);
    const isUserLoggedin = useSelector((state) => state.isUserLoggedin);
    const postTime = useSelector((state) => state.postTime);
    const [best, setBest] = useState(true)
    const [hot, setHot] = useState(false)
    const [newopt, setNewOpt] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getId = useSelector((state) => state.getId);
    const createdChannelName = useSelector((state) => state.createdChannelName);
    const [isLoading, setIsLoading] = useState(true);
    const showDate = useSelector((state) => state.showDate);
    const date = new Date(showDate);
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short', 
      day: '2-digit', 
      year: 'numeric'
    });
    const [dropdownPosition, setDropdownPosition] = useState({
        top: "120px",
        left: "1000px",
      });
      const [dropdownMaxPosition, setDropdownMaxPosition] = useState({
        top: "120px",
        left: "975px",
      });

      const handleResize = () => {
        const rect = document
          .getElementById("dropdown-button")
          ?.getBoundingClientRect();
        if (rect) {
          setDropdownPosition({
            top: `${rect.bottom + 7}px`,
            left: `${rect.left - 35}px`,
          });
          setDropdownMaxPosition({
            top: `${rect.bottom + 7}px`,
            left: `${rect.left - 35}px`,
          });
        }
      };

      const IntialState = {
        showDropDown: false,
        showMin: true,
        showMax: false,
        isLoading: true,
      };
    
      function StateReducer(state, action) {
        switch (action.type) {
          case "showoption":
            return {
              ...state,
              showDropDown: !state.showDropDown,
            };
    
          case "showminoption":
            return {
              ...state,
              showMin: true,
              showMax: false,
              showDropDown: false,
            };
    
          case "showmaxoption":
            return {
              ...state,
              showMax: true,
              showMin: false,
              showDropDown: false,
            };
    
          case "loaded":
            return {
              ...state,
              isLoading: false,
            };
    
          default:
            return state;
        }
      }
    
      const [state, StateDisptch] = useReducer(StateReducer, IntialState);

    function handleBest() {
      setBest(true)
      setHot(false)
      setNewOpt(false)
    }

    function handleHot() {
      setBest(false)
      setHot(true)
      setNewOpt(false)
    }

    function handleNew() {
      setBest(false)
      setHot(false)
      setNewOpt(true)
    }

    function handlePost() {
      navigate("/submit")
    }

    // const handleComment = (data, id) => {
    //   dispatch(setID(id))
    //   navigate(`/r/${data}/comments`);
    // };

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

    useEffect(()=> {
      console.log(createdChannelName)
      console.log(getId)
    }, [])
    
      const handleDelete = async () => {
        try {
          const response = await fetch(`https://academics.newtonschool.co/api/v1/reddit/channel/${getId}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmY4ZWI0Yjk5NzNhZDlkYTg0YTBiYSIsImlhdCI6MTcwNzA1MjgwNCwiZXhwIjoxNzM4NTg4ODA0fQ.IrP0kNt3UaHKqg4QXG7EpypG7K6BggcrzDyn3b46OaM`,
              'projectID': 'dj024nttemeg',
            },
  
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          if (response.status === 204) {
            console.log('Post deleted successfully');
            navigate("/")
          }
      
          const data = await response.json();
  
          console.log(data);
        } catch (error) {
          console.error('Error in handleDeletePost:', error);
        }
      
      };

      // 65c9991882c9aea523e1764e

    return (
        <>
        <div className={`${!isUserLoggedin ? "bg-white" : (checkedTheme ? "bg-black" : "bg-gray-300")} py-1 pr-1 flex justify-between w-full min-h-[100vh] max-w-full ${state.isLoading ? null : "mt-12"}`}>
          {isMobile && isSideBarOpen  && <SideBar isMobile={isMobile} isSideBarOpen={isSideBarOpen} />}
          <div className="flex flex-col w-full">
          <div className="w-full bg-[#0079d3] h-32"></div>
        <div className={`w-full h-28 flex flex-col justify-around ${checkedTheme ? "all" : "bg-white "}`}>
            <div className="flex gap-4 pl-8 ">
                <nav className="bg-white relative top-[-15px] border rounded-full w-20 h-20"></nav>
                <div className="flex flex-col pt-2">
                    <h1 className="text-3xl font-bold">{createdChannelName}</h1>
                    <nav className="font-semibold text-sm">r/{createdChannelName}</nav>
                </div>
                <button onClick={handleDelete} className={`h-8 mt-3 rounded-full px-4 p-1 ${checkedTheme ? "text-[#1A1A1B] bg-[#d7dadc]" : "bg-[#0079d3] text-white"} font-semibold`}>Delete</button>
            </div>
            <div className="pl-6">
                <nav style={{textDecorationColor: "blue", textUnderlineOffset: "0.4rem"}} className="font-semibold underline">Posts</nav>
            </div>
        </div>
          <div className="flex justify-center w-full mt-4">
        <div className={`flex w-full ${state.showMax ? "max-w-[52rem]" : "max-w-[40rem]"} flex-col m-2`}>
            <div className={`flex h-14 items-center gap-3 px-2 rounded ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                <div className="cursor-pointer">
                    <div className="w-12 h-12">
                        <img src="https://i.redd.it/snoovatar/avatars/a23dbde1-4832-4cc6-b528-8e3637c03984-headshot.png" alt="Prof_Img"></img>
                    </div>
                    {/* {checkedStatus && <nav className="w-4 h-4 rounded-full bg-[#46d160] relative left-6 bottom-3 border-inherit border-2"></nav>} */}
                </div>
                <div onClick={handlePost} className={`w-full flex items-center ${checkedTheme ? "bg-[#272729]" : "bg-gray-100"} max-w-2xl mt-0.5`}>
                    <input className={`${checkedTheme ? "bg-[#272729]" : "bg-gray-100"} outline-0 indent-4 p-2 rounded-full w-3/6 font-sans placeholder-gray-500`} type="text" placeholder="Create Post"></input>
                </div>              
                <div className={`${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-300"} h-8 w-10 rounded-lg flex items-center justify-center cursor-pointer`}>
                    <img width="23" height="23" src="https://img.icons8.com/external-basicons-line-edtgraphics/50/737373/external-Picture-images-basicons-line-edtgraphics.png" alt="external-Picture-images-basicons-line-edtgraphics"/>
                </div>
                <div className={`${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-300"} h-8 w-10 rounded-lg flex items-center justify-center cursor-pointer`}>
                    <img width="25" height="25" src="https://img.icons8.com/sf-regular-filled/48/737373/link.png" alt="link"/>
                </div>
            </div>  
            <div className={`mt-4 h-14 flex justify-between items-center gap-3 px-2 rounded ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                <div className="flex items-center gap-3 px-1">
                    <div onClick={handleBest} className={`${best && checkedTheme ? "bg-[#272729]" : !best && checkedTheme ? null : best && !checkedTheme ? "bg-gray-100" : null} flex items-center gap-2 p-1 px-2 rounded-full cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200"}`}>
                        <img width="24" height="24" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/737373/external-rocket-transportation-tanah-basah-basic-outline-tanah-basah.png" alt="external-rocket-transportation-tanah-basah-basic-outline-tanah-basah"/>
                        <nav className="font-semibold">Best</nav>
                    </div>
                    <div onClick={handleHot} className={`${hot && checkedTheme ? "bg-[#272729]" : !hot && checkedTheme ? null : hot && !checkedTheme ? "bg-gray-100" : null} flex items-center gap-2 p-1 px-2 rounded-full cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200"}`}>
                        <img width="24" height="24" src="https://img.icons8.com/sf-regular/48/737373/fire-element.png" alt="fire-element"/>
                        <nav className="font-semibold">Hot</nav>
                    </div>
                    <div onClick={handleNew} className={`${newopt && checkedTheme ? "bg-[#272729]" : !newopt && checkedTheme ? null : newopt && !checkedTheme ? "bg-gray-100" : null} flex items-center gap-2 p-1 px-2 rounded-full cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200"}`}>
                        <img width="28" height="24" src="https://img.icons8.com/parakeet-line/48/737373/new.png" alt="new"/>
                        <nav className="font-semibold">New</nav>
                    </div>
                </div>
                <>
                {isTab && (
                <div
                  onClick={() => {StateDisptch({ type: "showoption" }), handleResize()}}
                  id="dropdown-button"
                  className={`flex items-center gap-1 max-w-2xl rounded-full p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" :(
                    state.showDropDown ? "bg-gray-300" : "hover:bg-gray-200"
                )}`}
                >
                  {state.showMin ? (
                    <ViewCardOutlineIcon />
                  ) : (
                    <ViewClassicOutlineIcon />
                  )}
                  <CaretDownOutlineIcon />
                </div>
              )}
              {isTab && state.showDropDown && (
                <>
                  <div
                    style={
                      state.showMax ? dropdownMaxPosition : dropdownPosition
                    }
                    className={`z-10 fixed shadow ${checkedTheme ? "all" : "bg-white"} w-32 rounded-sm`}
                  >
                    <nav className="p-3 pl-4 pb-2">View</nav>
                    <div>
                      <div
                        onClick={() => StateDisptch({ type: "showminoption" })}
                        className={`flex items-center gap-2 p-2 pl-6 h-12 cursor-pointer ${
                            checkedTheme && state.showMin
                              ? "bg-[#272729]"
                              : checkedTheme
                              ? "hover:bg-[#272729]"
                              : state.showMin
                              ? "bg-gray-300"
                              : "hover:bg-gray-200"
                          }`}
                      >
                        {state.showMin ? (
                          <ViewCardFillIcon />
                        ) : (
                          <ViewCardOutlineIcon />
                        )}
                        <nav>Card</nav>
                      </div>
                      <div
                        onClick={() => StateDisptch({ type: "showmaxoption" })}
                        className={`flex items-center gap-2 p-2 pl-6 h-12 cursor-pointer ${
                            checkedTheme && state.showMax
                              ? "bg-[#272729]"
                              : checkedTheme
                              ? "hover:bg-[#272729]"
                              : state.showMax
                              ? "bg-gray-300"
                              : "hover:bg-gray-200"
                          }`}
                      >
                        {state.showMax ? (
                          <ViewClassicFillIcon />
                        ) : (
                          <ViewClassicOutlineIcon />
                        )}
                        <nav>Classic</nav>
                      </div>
                    </div>
                  </div>
                </>
              )}
                </>
            </div> 
        <nav className="font-semibold text-gray-500 flex items-center justify-center pt-8">r/Post hasn't made any posts yet!!!</nav>
        </div>
        {isMobile && 
        <>
        <div className={`flex w-full max-w-[20rem] flex-col m-2`}>
        <div className={`h-14 flex items-center  ${checkedTheme ? "text-[#1A1A1B] bg-[#d7dadc]" : "bg-[#0079d3] text-white"} font-semibold`}>
                <nav className="pl-3">About Community</nav>
            </div>
            <div className={`flex flex-col rounded px-3 py-2 gap-3 ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
              <div className="flex gap-1 items-center">
                <img width="24" height="24" src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/737373/external-website-advertising-icongeek26-outline-icongeek26.png" alt="external-website-advertising-icongeek26-outline-icongeek26"/>
                <nav className="text-gray-400 text-sm font-semibold">Created on {formattedDate}</nav>
              </div>
            <div className={`flex justify-between py-3 ${checkedTheme ? "border-y border-[#343536]" : "border-y"}`}>
                <div>
                    <nav className="text-sm font-bold">1.9M</nav>
                    <nav className="text-gray-400 text-sm">Members</nav>
                </div>
                <div className="flex flex-col">
                    <nav className="text-sm font-bold">3.1K</nav>
                    <div className="flex gap-1 items-center">
                        <nav className="w-3 h-3 rounded-full bg-[#46d160] border-inherit border-2"></nav>
                        <nav className="text-gray-400 text-sm">Online</nav>
                    </div>
                </div>
                <div>
                    <nav className="text-sm font-bold">Top 1%</nav>
                    <nav className="text-gray-400 text-sm">Ranked by 2k</nav>
                </div>
                </div>
                <div className="flex flex-col items-center justify-start gap-2">
                    <div className="flex items-center">
                    <div className="w-14 h-14">
                        <img src="https://i.redd.it/snoovatar/avatars/a23dbde1-4832-4cc6-b528-8e3637c03984-headshot.png"></img>
                    </div>
                    <div className="flex flex-col">
                        <nav className="text-xs font-semibold">Nandi</nav>
                        <nav className="text-gray-400 text-sm">u/nandi</nav>
                    </div>
                    </div>
                    <div className="flex justify-between gap-3">
                    <div className="flex items-center gap-1">
                            <img className="h-4 w-4 rounded-full" src="https://styles.redditmedia.com/t5_2qhhz/styles/communityIcon_6wrax3ocfar41.png"></img>
                            <nav className="text-gray-400 text-sm">1 Karma</nav>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="h-4 w-4 rounded-full" src="https://www.drawhipo.com/wp-content/uploads/2023/04/Birthday-Color-1-Birthday-Cake.png"></img>
                            <nav className="text-gray-400 text-sm">Jan 5 2024</nav>
                        </div>
                    </div>
                </div>
                <button className="rounded-full p-1 bg-[#ff4500] text-white font-semibold mb-3">New Post</button>
            </div>
            <button onClick={scrollToTop} className={`rounded-full mt-10 mx-24 fixed bottom-2 px-4 p-1 ${checkedTheme ? "text-[#1A1A1B] bg-[#d7dadc]" : "bg-[#0079d3] text-white"} font-semibold`}>Back to Top</button>
        </div>
        </>}
        </div>
        </div>
        </div>
        </>
    )
}