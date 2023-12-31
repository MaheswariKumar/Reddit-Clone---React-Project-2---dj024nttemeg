import React from "react";
import LogoutIcon from "./icons/LogoutIcon";
import ConversionIcon from "./icons/ConversionIcon";
import MarketplaceOutlineIcon from "./icons/MarketplaceOutlineIcon";

export default function MenuBar() {
    return (
        <div className="fixed top-14 right-4 h-auto z-50 shadow sm w-64 py-4 bg-white">
            <div className="pl-6 flex items-center justify-start gap-4 hover:bg-gray-100 cursor-pointer h-11 text-sm">
                <LogoutIcon style={{ height: '20px', width: '20px'}} />
                <nav>Log In / Sign Up</nav>
            </div>
            <div className="pl-6 flex items-center justify-start gap-4 hover:bg-gray-100 cursor-pointer h-11 text-sm">
                <ConversionIcon style={{ height: '20px', width: '20px'}} />
                <nav>Advertise on Reddit</nav>
            </div>
            <div className="pl-6 flex items-center justify-start gap-4 hover:bg-gray-100 cursor-pointer h-11 text-sm">
                <MarketplaceOutlineIcon style={{ height: '20px', width: '20px'}} />
                <nav>Shop Collectible Avatars</nav>
            </div>
        </div>
    )
}