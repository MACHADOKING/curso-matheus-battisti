import "./App.css";
// 1 - config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
// components
import Navbar from "./components/Navbar";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 7 - no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
