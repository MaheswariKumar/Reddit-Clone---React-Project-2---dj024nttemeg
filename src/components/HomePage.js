import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ViewCardOutlineIcon from "./icons/ViewCardOutlineIcon";
import ViewClassicFillIcon from "./icons/ViewClassicFillIcon";
import ViewCardFillIcon from "./icons/ViewCardFillIcon";
import ViewClassicOutlineIcon from "./icons/ViewClassicOutlineIcon";
import CaretDownOutlineIcon from "./icons/CaretDownOutlineIcon";
import { changeTheme } from "./Action";

export default function HomePage({state, StateDisptch, handleResize, dropdownMaxPosition, dropdownPosition}) {
    const checkedTheme = useSelector((state) => state.checkedTheme);
    const checkedStatus = useSelector((state) => state.checkedStatus);
    const isTab = useSelector((state) => state.isTab);

    return (
        <>
        <div className={`flex w-full max-w-[40rem] flex-col m-2`}>
            <div className={`flex h-14 items-center gap-3 px-2 rounded-lg ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                <div className="cursor-pointer">
                    <div className="w-12 h-12">
                        <img src="https://i.redd.it/snoovatar/avatars/a23dbde1-4832-4cc6-b528-8e3637c03984-headshot.png" alt="Prof_Img"></img>
                    </div>
                    {checkedStatus && <nav className="w-4 h-4 rounded-full bg-[#46d160] relative left-6 bottom-3 border-inherit border-2"></nav>}
                </div>
                <div className={`w-full flex items-center ${checkedTheme ? "bg-[#272729]" : "bg-gray-100"} max-w-2xl mt-0.5`}>
                    <input className={`${checkedTheme ? "bg-[#272729]" : "bg-gray-100"} indent-4 p-2 rounded-full w-3/6 font-sans placeholder-gray-500`} type="text" placeholder="Create Post"></input>
                </div>              
                <div className={`${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-300"} h-8 w-10 rounded-lg flex items-center justify-center cursor-pointer`}>
                    <img width="23" height="23" src="https://img.icons8.com/external-basicons-line-edtgraphics/50/737373/external-Picture-images-basicons-line-edtgraphics.png" alt="external-Picture-images-basicons-line-edtgraphics"/>
                </div>
                <div className={`${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-300"} h-8 w-10 rounded-lg flex items-center justify-center cursor-pointer`}>
                    <img width="25" height="25" src="https://img.icons8.com/sf-regular-filled/48/737373/link.png" alt="link"/>
                </div>
            </div>  
            <div className={`mt-4 h-14 flex justify-between items-center gap-3 px-2 rounded-lg ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                <div className="flex items-center gap-3 px-1">
                    <div className={`flex items-center gap-2 p-1 px-2 rounded-full cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-300"}`}>
                        <img width="24" height="24" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/737373/external-rocket-transportation-tanah-basah-basic-outline-tanah-basah.png" alt="external-rocket-transportation-tanah-basah-basic-outline-tanah-basah"/>
                        <nav>Best</nav>
                    </div>
                    <div className={`flex items-center gap-2 p-1 px-2 rounded-full cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-300"}`}>
                        <img width="24" height="24" src="https://img.icons8.com/sf-regular/48/737373/fire-element.png" alt="fire-element"/>
                        <nav>Hot</nav>
                    </div>
                    <div className={`flex items-center gap-2 p-1 px-2 rounded-full cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-300"}`}>
                        <img width="28" height="24" src="https://img.icons8.com/parakeet-line/48/737373/new.png" alt="new"/>
                        <nav>New</nav>
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
        </div>
        </>
    )
}