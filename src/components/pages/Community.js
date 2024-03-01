import React from "react";
import { useState } from "react";

export default function Community({ showMax }) {
  const [seemore, setSeeMore] = useState(false);
  const [text, setText] = useState("See more");

  function handleSeeMore() {
    setSeeMore(!seemore);
    if (seemore) {
      setText("See more");
    } else {
      setText("See less");
    }
  }

  return (
    <>
      <div
        className={`side_bar sticky top-14 m-3 ml-7 mt-10 pl-2 max-h-96 bg-gray-50 ${
          showMax ? "w-72" : "w-80"
        }`}
      >
        <nav className="pb-5 pt-2 text-xs text-gray-600 font-semibold">
          POPULAR COMMUNITIES
        </nav>
        <div className="flex item-center justify-center flex-col gap-2 pl-2 pr-2">
          <div className="flex item-center gap-2 pl-2 pt-2 pr-14 pb-2 hover:bg-gray-200 cursor-pointer">
            <img
              className="rounded-full w-8 h-8"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg"
              alt="Profile Image"
            ></img>
            <div>
              <nav className="text-sm">u/Carmen Shanahan</nav>
              <nav className="text-xs text-gray-600">5,680,600 members</nav>
            </div>
          </div>
          <div className="flex item-center gap-2 pl-2 pt-2 pr-14 pb-2 hover:bg-gray-200 cursor-pointer">
            <img
              className="rounded-full w-8 h-8"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg"
              alt="Profile Image"
            ></img>
            <div>
              <nav className="text-sm">u/Carmen Shanahan</nav>
              <nav className="text-xs text-gray-600">5,680,600 members</nav>
            </div>
          </div>
          <div className="flex item-center gap-2 pl-2 pt-2 pr-14 pb-2 hover:bg-gray-200 cursor-pointer">
            <img
              className="rounded-full w-8 h-8"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg"
              alt="Profile Image"
            ></img>
            <div>
              <nav className="text-sm">u/Carmen Shanahan</nav>
              <nav className="text-xs text-gray-600">5,680,600 members</nav>
            </div>
          </div>
          <div className="flex item-center gap-2 pl-2 pt-2 pr-14 pb-2 hover:bg-gray-200 cursor-pointer">
            <img
              className="rounded-full w-8 h-8"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg"
              alt="Profile Image"
            ></img>
            <div>
              <nav className="text-sm">u/Carmen Shanahan</nav>
              <nav className="text-xs text-gray-600">5,680,600 members</nav>
            </div>
          </div>
          <div className="flex item-center gap-2 pl-2 pt-2 pr-14 pb-2 hover:bg-gray-200 cursor-pointer">
            <img
              className="rounded-full w-8 h-8"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg"
              alt="Profile Image"
            ></img>
            <div>
              <nav className="text-sm">u/Carmen Shanahan</nav>
              <nav className="text-xs text-gray-600">5,680,600 members</nav>
            </div>
          </div>
          {seemore && (
            <>
              <div className="flex item-center gap-2 pl-2 pt-2 pr-14 pb-2 hover:bg-gray-200 cursor-pointer">
                <img
                  className="rounded-full w-8 h-8"
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg"
                  alt="Profile Image"
                ></img>
                <div>
                  <nav className="text-sm">u/Carmen Shanahan</nav>
                  <nav className="text-xs text-gray-600">5,680,600 members</nav>
                </div>
              </div>

              <div className="flex item-center gap-2 pl-2 pt-2 pr-14 pb-2 hover:bg-gray-200 cursor-pointer">
                <img
                  className="rounded-full w-8 h-8"
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg"
                  alt="Profile Image"
                ></img>
                <div>
                  <nav className="text-sm">u/Carmen Shanahan</nav>
                  <nav className="text-xs text-gray-600">5,680,600 members</nav>
                </div>
              </div>

              <div className="flex item-center  gap-2 pl-2 pt-2 pr-14 pb-2 hover:bg-gray-200 cursor-pointer">
                <img
                  className="rounded-full w-8 h-8"
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg"
                  alt="Profile Image"
                ></img>
                <div>
                  <nav className="text-sm">u/Carmen Shanahan</nav>
                  <nav className="text-xs text-gray-600">5,680,600 members</nav>
                </div>
              </div>
              <div className="flex item-center gap-2 pl-2 pt-2 pr-14 pb-2 hover:bg-gray-200 cursor-pointer">
                <img
                  className="rounded-full w-8 h-8"
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg"
                  alt="Profile Image"
                ></img>
                <div>
                  <nav className="text-sm">u/Carmen Shanahan</nav>
                  <nav className="text-xs text-gray-600">5,680,600 members</nav>
                </div>
              </div>
              <div className="flex item-center gap-2 pl-2 pt-2 pr-14 pb-2 hover:bg-gray-200 cursor-pointer">
                <img
                  className="rounded-full w-8 h-8"
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg"
                  alt="Profile Image"
                ></img>
                <div>
                  <nav className="text-sm">u/Carmen Shanahan</nav>
                  <nav className="text-xs text-gray-600">5,680,600 members</nav>
                </div>
              </div>
              <div className="flex item-center gap-2 pl-2 pt-2 pr-14 pb-2 hover:bg-gray-200 cursor-pointer">
                <img
                  className="rounded-full w-8 h-8"
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg"
                  alt="Profile Image"
                ></img>
                <div>
                  <nav className="text-sm">u/Carmen Shanahan</nav>
                  <nav className="text-xs text-gray-600">5,680,600 members</nav>
                </div>
              </div>
            </>
          )}
        </div>
        <button
          onClick={handleSeeMore}
          className="text-xs font-medium rounded-full pt-2 p-2 hover:bg-gray-300"
        >
          {text}
        </button>
      </div>
    </>
  );
}