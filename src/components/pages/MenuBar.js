import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  showStatus,
  changeTheme,
  isLoggedIn,
  showMenuBar,
  setAuthorName,
  setLoginUserName,
  setMsg,
  setShowMsg,
  setCommunity,
  setNavOpt,
  openLogin,
} from "../state/Action";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut } from "../firebase";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LogoutIcon from "../icons/LogoutIcon";
import ConversionIcon from "../icons/ConversionIcon";
import MarketplaceOutlineIcon from "../icons/MarketplaceOutlineIcon";
import { IOSSwitch } from "../icons/IOSSwitch";
import MyCustomIcon from "../icons/MyCustomIcon";
import CommunityOutlineIcon from "../icons/CommunityOutlineIcon";
import TopicActivismOutlineIcon from "../icons/TopicActivismOutlineIcon";
import HelpOutlineIcon from "../icons/HelpOutlineIcon";
import CaretUpOutlineIcon from "../icons/CaretUpOutlineIcon";
import CaretDownOutlineIcon from "../icons/CaretDownOutlineIcon";

export default function MenuBar() {
  const isUserLoggedin = useSelector((state) => state.isUserLoggedin);
  const isMenu = useSelector((state) => state.isMenu);
  const dispatch = useDispatch();
  const checkedStatus = useSelector((state) => state.checkedStatus);
  const checkedTheme = useSelector((state) => state.checkedTheme);
  const userId = useSelector((state) => state.userId);
  const logginUserName = useSelector((state) => state.logginUserName);
  const theme = createTheme();
  const [openMore, setOpenMore] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    dispatch(isLoggedIn());
    dispatch(showMenuBar(!isMenu));
    navigate("/");
  };

  const showMessageWithTimeout = (message, timeout = 1000) => {
    dispatch(setMsg(message));
    dispatch(setShowMsg(true));
    setTimeout(() => {
      dispatch(setShowMsg(false));
    }, timeout);
  };

  function handleProfile() {
    navigate(`/user/${userId}`);
    dispatch(setAuthorName(logginUserName));
    dispatch(showMenuBar(!isMenu));
    dispatch(
      setNavOpt(
        <img
          className="h-8 w-8"
          src="https://i.redd.it/snoovatar/avatars/a23dbde1-4832-4cc6-b528-8e3637c03984-headshot.png"
        ></img>,
        `u/${logginUserName}`
      )
    );
  }

  function handlePremium() {
    navigate("/premium");
    dispatch(showMenuBar(!isMenu));
    dispatch(
      setNavOpt(
        <img
          width="23"
          height="23"
          src="https://img.icons8.com/ios-filled/50/737373/us-dollar-circled--v1.png"
          alt="us-dollar-circled--v1"
        />,
        "Premium"
      )
    );
  }

  function handleLoginPage() {
    if (!isUserLoggedin) {
      dispatch(openLogin());
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div
        className={`${
          checkedTheme ? "all" : null
        } rounded side_bar2 fixed top-14 right-4 z-50 shadow sm w-64 py-4 bg-white overscroll-auto`}
      >
        {isUserLoggedin ? (
          <>
            <div className="flex gap-3 pl-4">
              <MyCustomIcon style={{ color: "gray" }} />
              <nav className="text-gray-500">My Stuff</nav>
            </div>
            <div
              className={`pl-14 flex gap-8 items-center justify-start font-semibold ${
                checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100 "
              } cursor-pointer h-11 text-sm`}
            >
              <nav>Online Status</nav>
              <IOSSwitch
                checked={checkedStatus}
                onChange={() => dispatch(showStatus())}
              />
            </div>
            <nav
              onClick={handleProfile}
              className={`pl-14 flex items-center justify-start font-semibold ${
                checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100 "
              } cursor-pointer h-11 text-sm"`}
            >
              Profile
            </nav>
            <nav
              onClick={() => showMessageWithTimeout("Feature Coming Soon")}
              className={`pl-14 flex items-center justify-start font-semibold ${
                checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100 "
              } cursor-pointer h-11 text-sm"`}
            >
              Style Avatar
            </nav>
            <nav
              className={`pl-14 flex items-center justify-start font-semibold ${
                checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100 "
              } cursor-pointer h-11 text-sm"`}
            >
              User
            </nav>
            <nav
              className={`${
                checkedTheme ? "border-[#343536] border" : "border"
              } my-3`}
            ></nav>
            <div className="flex gap-3 pl-4">
              {!checkedTheme ? (
                <img
                  width="26"
                  height="26"
                  src="https://img.icons8.com/carbon-copy/100/ophthalmology.png"
                  alt="ophthalmology"
                />
              ) : (
                <img
                  width="26"
                  height="26"
                  src="https://img.icons8.com/ios/50/FFFFFF/eye-checked.png"
                  alt="eye-checked"
                />
              )}
              <nav className="text-gray-500">View Options</nav>
            </div>
            <div
              className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100 "
              } cursor-pointer h-11 text-sm`}
            >
              <nav>Dark Mode</nav>
              <IOSSwitch
                checked={checkedTheme}
                onChange={() => {
                  dispatch(changeTheme(!checkedTheme)),
                    localStorage.setItem("theme", checkedTheme);
                }}
              />
            </div>
            <nav
              className={`${
                checkedTheme ? "border-[#343536] border" : "border"
              } my-3`}
            ></nav>
            <div
              onClick={() => dispatch(setCommunity())}
              className={`flex justify-start items-center gap-5 pl-4 cursor-pointer ${
                checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
              } h-10`}
            >
              <CommunityOutlineIcon />
              <nav className="text-sm font-semibold">Create a Commmnunity</nav>
            </div>
            <div
              onClick={() => showMessageWithTimeout("Feature Coming Soon")}
              className={`flex justify-start items-center gap-5 pl-4 cursor-pointer ${
                checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
              } h-10`}
            >
              <TopicActivismOutlineIcon />
              <nav className="text-sm font-semibold">Advertise on Reddit</nav>
            </div>
            <div
              onClick={handlePremium}
              className={`flex justify-start items-center gap-5 pl-4 cursor-pointer ${
                checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
              } h-10`}
            >
              {checkedTheme ? (
                <img
                  width="23"
                  height="23"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/us-dollar-circled--v1.png"
                  alt="us-dollar-circled--v1"
                />
              ) : (
                <img
                  width="23"
                  height="23"
                  src="https://img.icons8.com/ios-filled/50/737373/us-dollar-circled--v1.png"
                  alt="us-dollar-circled--v1"
                />
              )}
              <nav className="text-sm font-semibold">Premium</nav>
            </div>
            <div
              onClick={() =>
                showMessageWithTimeout("Team Reddit will Contact You")
              }
              className={`flex justify-start items-center gap-5 pl-4 cursor-pointer ${
                checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
              } h-10`}
            >
              <HelpOutlineIcon />
              <nav className="text-sm font-semibold">Help Center</nav>
            </div>
            <div
              onClick={() => setOpenMore(!openMore)}
              className={`flex justify-between items-center gap-4 pl-4 pr-12 ${
                checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
              }  cursor-pointer h-10`}
            >
              <div className="flex gap-5">
                {checkedTheme ? (
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/external-febrian-hidayat-basic-outline-febrian-hidayat/24/FFFFFF/external-information-ui-essential-febrian-hidayat-basic-outline-febrian-hidayat.png"
                    alt="external-information-ui-essential-febrian-hidayat-basic-outline-febrian-hidayat"
                  />
                ) : (
                  <img
                    width="23"
                    height="23"
                    src="https://img.icons8.com/ios/50/info--v1.png"
                    alt="info--v1"
                  />
                )}
                <nav className="text-sm font-semibold">More</nav>
              </div>
              {openMore ? <CaretUpOutlineIcon /> : <CaretDownOutlineIcon />}
            </div>
            {openMore && (
              <>
                <div
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <a
                    href="https://apps.apple.com/in/app/reddit/id1064216828"
                    target="_blank"
                  >
                    Reddit iOS
                  </a>
                </div>
                <div
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.reddit.frontpage"
                    target="_blank"
                  >
                    Reddit Android
                  </a>
                </div>
                <div
                  onClick={() =>
                    showMessageWithTimeout(
                      "We're currently working on building the page"
                    )
                  }
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <nav>Rereddit</nav>
                </div>
                <div
                  onClick={() =>
                    showMessageWithTimeout(
                      "We're currently working on building the page"
                    )
                  }
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <nav>Best Communities</nav>
                </div>
                <div
                  onClick={() =>
                    showMessageWithTimeout(
                      "We're currently working on building the page"
                    )
                  }
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <nav>Communities</nav>
                </div>
                <div
                  onClick={() =>
                    showMessageWithTimeout(
                      "We're currently working on building the page"
                    )
                  }
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <nav>About Reddit</nav>
                </div>
                <div
                  onClick={() =>
                    showMessageWithTimeout(
                      "We're currently working on building the page"
                    )
                  }
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <nav>Blog</nav>
                </div>
                <div
                  onClick={() =>
                    showMessageWithTimeout(
                      "We're currently working on building the page"
                    )
                  }
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <nav>Careers</nav>
                </div>
                <div
                  onClick={() =>
                    showMessageWithTimeout(
                      "We're currently working on building the page"
                    )
                  }
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <nav>Press</nav>
                </div>
                <div
                  onClick={() =>
                    showMessageWithTimeout(
                      "We're currently working on building the page"
                    )
                  }
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <nav>Visit Old Reddit</nav>
                </div>
              </>
            )}
            <div
              onClick={() => setOpenTerms(!openTerms)}
              className={`flex justify-between items-center gap-4 pl-4 pr-10 ${
                checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
              }  cursor-pointer h-10`}
            >
              <div className="flex gap-5">
                {checkedTheme ? (
                  <img
                    width="23"
                    height="23"
                    src="https://img.icons8.com/ios/50/FFFFFF/terms-and-conditions.png"
                    alt="terms-and-conditions"
                  />
                ) : (
                  <img
                    width="23"
                    height="23"
                    src="https://img.icons8.com/ios/50/terms-and-conditions.png"
                    alt="terms-and-conditions"
                  />
                )}
                <nav className="text-sm font-semibold">Terms & Policies</nav>
              </div>
              {openTerms ? <CaretUpOutlineIcon /> : <CaretDownOutlineIcon />}
            </div>
            {openTerms && (
              <>
                <div
                  onClick={() =>
                    showMessageWithTimeout(
                      "We're currently working on building the page"
                    )
                  }
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <nav>User Agreement</nav>
                </div>
                <div
                  onClick={() =>
                    showMessageWithTimeout(
                      "We're currently working on building the page"
                    )
                  }
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <nav>Privacy Policy</nav>
                </div>
                <div
                  onClick={() =>
                    showMessageWithTimeout(
                      "We're currently working on building the page"
                    )
                  }
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <nav>Content Policy</nav>
                </div>
                <div
                  onClick={() =>
                    showMessageWithTimeout(
                      "We're currently working on building the page"
                    )
                  }
                  className={`pl-14 flex gap-12 items-center justify-start font-semibold ${
                    checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
                  } cursor-pointer h-11 text-sm`}
                >
                  <nav>Moderator Code of Conduct</nav>
                </div>
              </>
            )}
            <div
              onClick={handleLogout}
              className={`flex justify-start items-center gap-5 pl-4 cursor-pointer ${
                checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-100"
              } h-10`}
            >
              {checkedTheme ? (
                <img
                  width="21"
                  height="21"
                  src="https://img.icons8.com/windows/32/FFFFFF/exit.png"
                  alt="exit"
                />
              ) : (
                <img
                  width="21"
                  height="21"
                  src="https://img.icons8.com/ios/50/exit--v1.png"
                  alt="exit--v1"
                />
              )}
              <nav className="text-sm font-semibold">Log Out</nav>
            </div>
            <p
              style={{ color: "rgb(67, 67, 67)", fontSize: "0.825rem" }}
              className="pt-2 pl-4 text-sm"
            >
              Reddit, Inc. © 2024. All rights reserved.
            </p>
          </>
        ) : (
          <>
            <div
              onClick={handleLoginPage}
              className="pl-6 flex items-center justify-start gap-4 hover:bg-gray-100 cursor-pointer h-11 text-sm"
            >
              <LogoutIcon style={{ height: "20px", width: "20px" }} />
              <nav>Log In / Sign Up</nav>
            </div>
            <div
              onClick={handleLoginPage}
              className="pl-6 flex items-center justify-start gap-4 hover:bg-gray-100 cursor-pointer h-11 text-sm"
            >
              <ConversionIcon style={{ height: "20px", width: "20px" }} />
              <nav>Advertise on Reddit</nav>
            </div>
            <div
              onClick={handleLoginPage}
              className="pl-6 flex items-center justify-start gap-4 hover:bg-gray-100 cursor-pointer h-11 text-sm"
            >
              <MarketplaceOutlineIcon
                style={{ height: "20px", width: "20px" }}
              />
              <nav>Shop Collectible Avatars</nav>
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}