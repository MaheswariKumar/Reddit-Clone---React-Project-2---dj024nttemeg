import "../styles/App.css";
import { Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
      {/* <SideBar /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
