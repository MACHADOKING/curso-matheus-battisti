import "./App.css";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
// components
import Navbar from "./components/Navbar";
// 1 - config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
