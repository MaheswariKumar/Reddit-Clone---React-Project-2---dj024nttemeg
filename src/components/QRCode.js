import React from "react";
import CloseIcon from "./icons/CloseIcon";

export default function QRCode() {
    return (
        <>
        <div className="flex flex-col gap-3 items-center justify-center bg-white w-full max-w-lg h-auto">
            <div className="flex justify-between">
                <h1 className="font-bold text-3xl">Get the Reddit app</h1>
                <CloseIcon />
            </div>
            <div className="flex flex-col justify-center w-48">
                <nav className="break-all">Scan this QR code to download the app now</nav>
                <img src="https://www.redditstatic.com/shreddit/assets/shreddit-qr-code.svg" srcset="" sizes="" alt="Shreddit QR Code"></img>
            </div>
            <div className="flex flex-col gap-3">
                <nav>Or check it out in the app stores</nav>
                <div className="flex">
                    <img src="https://www.redditstatic.com/shreddit/assets/google-play.svg" srcset="" sizes="" alt="Get it on Google Play"></img>
                    <img src="https://www.redditstatic.com/shreddit/assets/app-store.svg" srcset="" sizes="" alt="Download on the App Store"></img>
                </div>
            </div>
        </div>
        </>
    )
}