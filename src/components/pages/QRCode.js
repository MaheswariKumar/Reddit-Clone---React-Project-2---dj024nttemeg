import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "../icons/CloseIcon";
import { openQR } from "../state/Action";

export default function QRCode() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center rounded bg-white mx-6 w-full max-w-[540px] h-auto px-4 py-6">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-bold text-[32px]">Get the Reddit app</h1>
          <div
            className="cursor-pointer rounded-full bg-gray-200 p-2 hover:bg-gray-300"
            onClick={() => dispatch(openQR())}
          >
            <CloseIcon />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center font-bold max-w-[12rem] py-4">
            <nav>Scan this QR code to download the app now</nav>
          </div>
          <img
            src="https://www.redditstatic.com/shreddit/assets/shreddit-qr-code.svg"
            srcset=""
            sizes=""
            alt="Shreddit QR Code"
          ></img>
        </div>
        <div className="flex flex-col gap-3 pb-2">
          <nav className="text-center py-2">
            Or check it out in the app stores
          </nav>
          <div className="flex gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.reddit.frontpage"
              target="_blank"
              className="cursor-pointer"
            >
              <img
                src="https://www.redditstatic.com/shreddit/assets/google-play.svg"
                srcset=""
                sizes=""
                alt="Get it on Google Play"
              ></img>
            </a>
            <a
              href="https://apps.apple.com/us/app/reddit/id1064216828"
              target="_blank"
              className="cursor-pointer"
            >
              <img
                src="https://www.redditstatic.com/shreddit/assets/app-store.svg"
                srcset=""
                sizes=""
                alt="Download on the App Store"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}