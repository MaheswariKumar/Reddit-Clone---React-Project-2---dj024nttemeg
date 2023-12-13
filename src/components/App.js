import "../styles/App.css";
import { Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
