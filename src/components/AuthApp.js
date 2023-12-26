import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./SideBar";
import QRCode from "./QRCode";

export default function AuthApp() {
    const isMobile = useSelector((state) => state.isMobile);
    const isSideBarOpen = useSelector((state) => state.isSideBarOpen);

    return (
        <div>
            {!isMobile && isSideBarOpen ? <div style={{backgroundColor: "rgb(26, 26, 27, 0.4)"}} className="w-full flex fixed top-12 bottom-0">
                <div className="z-auto bg-white">
                    <SideBar isMobile={isMobile} isSideBarOpen={isSideBarOpen} />
                </div>
            </div> : null }
            {/* <div style={{backgroundColor: "rgb(26, 26, 27, 0.4)"}} className="w-full flex items-center justify-center fixed top-12 bottom-0">
                <QRCode />
            </div> */}
        </div>
    )
}