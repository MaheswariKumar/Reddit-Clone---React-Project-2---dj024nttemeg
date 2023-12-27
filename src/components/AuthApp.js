import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "./Action";
import SideBar from "./SideBar";
import QRCode from "./QRCode";
import Login from "./Login";

export default function AuthApp() {
    const isMobile = useSelector((state) => state.isMobile);
    const isSideBarOpen = useSelector((state) => state.isSideBarOpen);
    const isQrOpen = useSelector((state) => state.isQrOpen);
    const dispatch = useDispatch();
    const backGroundDiv = useRef(null);

    const handleDiv = (e) => {
        if (e.target === backGroundDiv.current) {
           dispatch(setSideBar(false))
        }
    }

    return (
        <div>
            {!isMobile && isSideBarOpen ? <div ref={backGroundDiv} onClick={handleDiv} style={{backgroundColor: "rgb(26, 26, 27, 0.4)"}} className="w-full flex fixed top-12 bottom-0">
                <div className="z-auto bg-white">
                    <SideBar isMobile={isMobile} isSideBarOpen={isSideBarOpen} />
                </div>
            </div> : null }
            {isQrOpen &&  <div style={{backgroundColor: "rgb(26, 26, 27, 0.4)"}} className="w-full flex items-center justify-center fixed top-0 bottom-0">
                <QRCode />
            </div>}
            {/* <div style={{backgroundColor: "rgb(26, 26, 27, 0.4)"}} className="w-full flex items-center justify-center fixed top-0 bottom-0">
                <Login />
            </div> */}
        </div>
    )
}