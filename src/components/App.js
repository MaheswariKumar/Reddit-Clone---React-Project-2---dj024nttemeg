import "../styles/App.css";
import { Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import MenuBar from "./MenuBar";

function App() {
  const isMenu = useSelector((state) => state.isMenu);

  return (
    <div className="App">
      <NavBar />
      {isMenu && <MenuBar />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
