import "./App.css";
// 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
// components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 9 - search */}
          <Route path="/search" element={<SearchPage />} />
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* 7 - no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
