import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./SideBar";

export default function ChannelPage() {
  const isUserLoggedin = useSelector((state) => state.isUserLoggedin);
  const checkedTheme = useSelector((state) => state.checkedTheme);
  const isMobile = useSelector((state) => state.isMobile);
  const isSideBarOpen = useSelector((state) => state.isSideBarOpen);

  return (
    <div
      className={`${
        !isUserLoggedin ? "bg-white" : checkedTheme ? "bg-black" : "bg-gray-300"
      } py-1 pr-1 flex justify-between w-full max-w-full min-h-screen mt-12`}
    >
      {isMobile && isSideBarOpen && (
        <SideBar isMobile={isMobile} isSideBarOpen={isSideBarOpen} />
      )}
      <div className="flex items-center justify-center h-screen flex-1">
        <img
          src="https://www.svgrepo.com/show/452094/reddit.svg"
          alt="Reddit Logo"
          className="w-12 h-12 transition ease-in-out duration-300 animate-ping"
        />
      </div>
    </div>
  );
}