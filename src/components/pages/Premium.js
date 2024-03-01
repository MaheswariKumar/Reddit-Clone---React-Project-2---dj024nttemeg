import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

export default function Premium() {
  const checkedTheme = useSelector((state) => state.checkedTheme);
  const isMobile = useSelector((state) => state.isMobile);
  const isSideBarOpen = useSelector((state) => state.isSideBarOpen);
  const isUserLoggedin = useSelector((state) => state.isUserLoggedin);

  return (
    <>
      <div
        className={`${
          !isUserLoggedin ? "bg-white" : checkedTheme ? "bg-black" : "white"
        } py-1 pr-1 flex justify-between w-full min-h-[100vh] max-w-full mt-12`}
      >
        {isMobile && isSideBarOpen && (
          <SideBar isMobile={isMobile} isSideBarOpen={isSideBarOpen} />
        )}
        <div className="flex flex-col w-full">
          <div
            className="h-[80vh] w-full bg-cover flex items-center bg-no-repeat"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 50%), url("https://www.redditstatic.com/desktop2x/img/gold/premium-marketing/premiumHero.jpg")',
            }}
          >
            <div className="flex w-full flex-col justify-start gap-3 max-w-[640px] pl-12">
              <img
                className="h-auto max-w-[558px] w-full"
                src="https://www.redditstatic.com/desktop2x/img/reddit_premium_landing.png"
              ></img>
              <p className="font-bold text-2xl text-white w-full">
                Help support Reddit and get VIP treatment and exclusive access.
              </p>
              <div className="flex gap-2 w-full pre-buttons">
                <button
                  className={`rounded-full mb-3 py-2 px-16 border-2 border-white text-white font-bold`}
                >
                  $5.99/Month
                </button>
                <button
                  className={`rounded-full mb-3 py-2 px-14 bg-[#ff4500] text-white font-bold`}
                >
                  $49.99/Year
                  <button className="ml-1 bg-white p-1 rounded-full text-[#ff4500] text-xs">
                    Save 30%
                  </button>
                </button>
              </div>
              <nav className="w-full text-[#818384] text-xs">
                Subscriptions automatically renew
              </nav>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center h-auto gap-6 mt-6">
            <h1
              className={`font-bold text-3xl text-center ${
                checkedTheme ? "text-[#d7dadc]" : ""
              }`}
            >
              Join Reddit Premium Today
            </h1>
            <div className="flex w-full flex-wrap justify-center gap-5">
              <div
                className={`flex gap-2 flex-col justify-center items-center w-[180px] py-2 ${
                  checkedTheme ? "all" : "bg-[#f6f7f8]"
                } rounded`}
              >
                <img
                  className="w-14 h-14"
                  src="https://www.redditstatic.com/desktop2x/img/gold/premium-marketing/benefits-icons/premium-ad-free.png"
                ></img>
                <nav className="text-xs font-bold">Ad-free Browsing</nav>
                <nav className="text-[#818384] text-xs text-center">
                  Enjoy redditing without interruptions from ads
                </nav>
              </div>
              <div
                className={`flex gap-2 flex-col justify-center items-center w-[180px] py-2 ${
                  checkedTheme ? "all" : "bg-[#f6f7f8]"
                } rounded`}
              >
                <img
                  className="w-14 h-14"
                  src="https://www.redditstatic.com/desktop2x/img/gold/premium-marketing/benefits-icons/premium-avatars.png"
                ></img>
                <nav className="text-xs font-bold">Exclusive Avatar Gear</nav>
                <nav className="text-[#818384] text-xs text-center">
                  Outfit your avatar with the best gear and accessories
                </nav>
              </div>
              <div
                className={`flex gap-2 flex-col justify-center items-center w-[180px] py-2 ${
                  checkedTheme ? "all" : "bg-[#f6f7f8]"
                } rounded`}
              >
                <img
                  className="w-14 h-14"
                  src="https://www.redditstatic.com/desktop2x/img/gold/premium-marketing/benefits-icons/premium-lounge.png"
                ></img>
                <nav className="text-xs font-bold">Members Lounge</nav>
                <nav className="text-[#818384] text-xs text-center">
                  Discover all the illuminati secrets in r/lounge
                </nav>
              </div>
              <div
                className={`flex gap-2 flex-col justify-center items-center w-[180px] py-2 ${
                  checkedTheme ? "all" : "bg-[#f6f7f8]"
                } rounded`}
              >
                <img
                  className="w-14 h-14"
                  src="https://www.redditstatic.com/desktop2x/img/gold/premium-marketing/benefits-icons/premium-app-icons.png"
                ></img>
                <nav className="text-xs font-bold">Custom App Icons*</nav>
                <nav className="text-[#818384] text-xs text-center">
                  Change your app icon to something more your style
                </nav>
              </div>
            </div>
            <div className="flex justify-center gap-2 w-full pre-buttons">
              <button
                className={`rounded-full mb-3 py-2 px-16 border-2 border-[#ff4500] text-[#ff4500] font-bold`}
              >
                $5.99/Month
              </button>
              <button
                className={`rounded-full mb-3 py-2 px-14 bg-[#ff4500] text-white font-bold`}
              >
                $49.99/Year
                <button className="ml-1 bg-white p-1 rounded-full text-[#ff4500] text-xs">
                  Save 30%
                </button>
              </button>
            </div>
            <nav className="w-full text-[#818384] text-xs text-center">
              Subscriptions automatically renew
            </nav>
            <nav className="w-full text-[#818384] text-xs text-center">
              * Custom app icons are only available through a paid Reddit
              Premium subscription.
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}