import "../styles/App.css";
import { Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { setShowNotifi, showMenuBar, changeTheme } from "./state/Action";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import MenuBar from "./pages/MenuBar";
import SearchItems from "./pages/SearchItems";
import DropComment from "./pages/DropComment";
import CreatePost from "./pages/CreatePost";
import UserPosts from "./pages/UserPosts";
import NewChannel from "./pages/NewChannel";
import ChannelPage from "./pages/ChannelPage";
import Premium from "./pages/Premium";
import AllPosts from "./pages/AllPosts";
import Notification from "./pages/Notification";

function App() {
  const isMenu = useSelector((state) => state.isMenu);
  const searchTerm = useSelector((state) => state.searchTerm);
  const checkedTheme = useSelector((state) => state.checkedTheme);
  const openNotification = useSelector((state) => state.openNotification);
  const logginUserName = useSelector((state) => state.logginUserName);
  const msg = useSelector((state) => state.msg);
  const showMsg = useSelector((state) => state.showMsg);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const notifyRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      dispatch(showMenuBar(false));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutClick = (event) => {
    if (notifyRef.current && !notifyRef.current.contains(event.target)) {
      dispatch(setShowNotifi(false));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div ref={menuRef}>{isMenu && <MenuBar />}</div>
      <div ref={notifyRef}>{openNotification && <Notification />}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Home />} />
        <Route path={`/search`} element={<SearchItems />} />
        <Route path={`/r/:data/comments`} element={<DropComment />} />
        <Route path={`/submit`} element={<CreatePost />} />
        <Route path={`/user/:data/:id`} element={<UserPosts />} />
        <Route path={`/r/:post`} element={<NewChannel />} />
        <Route path={`/r/channel/:data`} element={<ChannelPage />} />
        <Route path={`/user/:data`} element={<AllPosts />} />
        <Route path={`/premium`} element={<Premium />} />
      </Routes>
      {showMsg && (
        <div className="w-full flex justify-center fixed bottom-3">
          <nav
            className={`${checkedTheme ? "bg-[#d7dadc]" : "bg-[#0079d3]"} p-3`}
          ></nav>
          <div
            className={`justify-between items-center px-6 py-2 flex gap-2 border ${
              checkedTheme ? "all" : "bg-white"
            }`}
          >
            <img
              src="https://www.svgrepo.com/show/452094/reddit.svg"
              className="w-9 h-9"
            ></img>
            <nav className="text-xs font-bold">{msg}</nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;