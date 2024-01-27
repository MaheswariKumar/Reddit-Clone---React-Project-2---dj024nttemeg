import "../styles/App.css";
import { Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import {showMenuBar} from "./Action"
import NavBar from "./NavBar";
import Home from "./Home";
import MenuBar from "./MenuBar";
import SearchItems from "./SearchItems";
import DropComment from "./DropComment";
import CreatePost from "./CreatePost";

function App() {
  const isMenu = useSelector((state) => state.isMenu);
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch()
  const menuRef = useRef(null);

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

  return (
    <div className="App">
      <NavBar />
      <div ref={menuRef}>
        {isMenu && <MenuBar />}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/search`} element={<SearchItems />} />
        <Route path={`/r/:data/comments`} element={<DropComment />} />
        <Route path={`/submit`} element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
