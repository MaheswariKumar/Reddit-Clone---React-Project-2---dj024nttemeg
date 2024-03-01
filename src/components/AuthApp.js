import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "./state/Action";
import SideBar from "./pages/SideBar";
import QRCode from "./pages/QRCode";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserName from "./pages/UserName";
import CreateCommunity from "./pages/CreateCommunity";

export default function AuthApp() {
  const isMobile = useSelector((state) => state.isMobile);
  const isSideBarOpen = useSelector((state) => state.isSideBarOpen);
  const isQrOpen = useSelector((state) => state.isQrOpen);
  const isLogin = useSelector((state) => state.isLogin);
  const isSignUp = useSelector((state) => state.isSignUp);
  const isUserName = useSelector((state) => state.isUserName);
  const showCommunity = useSelector((state) => state.showCommunity);
  const dispatch = useDispatch();
  const backGroundDiv = useRef(null);

  const handleDiv = (e) => {
    if (e.target === backGroundDiv.current) {
      dispatch(setSideBar(false));
    }
  };

  return (
    <div>
      {!isMobile && isSideBarOpen ? (
        <div
          ref={backGroundDiv}
          onClick={handleDiv}
          style={{ backgroundColor: "rgb(26, 26, 27, 0.4)" }}
          className="w-full flex fixed top-12 bottom-0"
        >
          <div className="z-auto bg-white">
            <SideBar isMobile={isMobile} isSideBarOpen={isSideBarOpen} />
          </div>
        </div>
      ) : null}
      {isQrOpen && (
        <div
          style={{ backgroundColor: "rgb(26, 26, 27, 0.4)" }}
          className="w-full flex items-center justify-center fixed top-0 bottom-0"
        >
          <QRCode />
        </div>
      )}
      {isLogin && (
        <div
          style={{ backgroundColor: "rgb(26, 26, 27, 0.4)" }}
          className="w-full flex items-center justify-center fixed top-0 bottom-0"
        >
          <Login />
        </div>
      )}
      {isSignUp && (
        <div
          style={{ backgroundColor: "rgb(26, 26, 27, 0.4)" }}
          className="w-full flex items-center justify-center fixed top-0 bottom-0"
        >
          <SignUp />
        </div>
      )}
      {isUserName && (
        <div
          style={{ backgroundColor: "rgb(26, 26, 27, 0.4)" }}
          className="w-full flex items-center justify-center fixed top-0 bottom-0"
        >
          <UserName />
        </div>
      )}
      {showCommunity && (
        <div
          style={{ backgroundColor: "rgb(26, 26, 27, 0.4)" }}
          className="w-full flex items-center justify-center fixed top-0 bottom-0"
        >
          <CreateCommunity />
        </div>
      )}
    </div>
  );
}