import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Notification() {
  const checkedTheme = useSelector((state) => state.checkedTheme);

  return (
    <>
      <div
        className={`${
          checkedTheme ? "all" : null
        } rounded side_bar2 fixed top-14 right-80 z-50 shadow sm w-80 py-4 bg-white overscroll-auto`}
      >
        <nav className="pl-2 pb-10 font-semibold">Notifications</nav>
        <div className="flex flex-col justify-center items-center gap-3">
          <img
            className="h-32 w-24"
            src="https://www.redditstatic.com/desktop2x/img/wrappedreddit/default_avatar.png"
          ></img>
          <nav className="text-sm font-semibold text-center">
            You don’t have any activity yet
          </nav>
          <nav className="text-sm w-60 text-center">
            That’s ok, maybe you just need the right inspiration. Try posting a
            popular community for discussion.
          </nav>
        </div>
      </div>
    </>
  );
}