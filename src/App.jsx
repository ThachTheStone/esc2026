import React, { Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";

// 1. IMPORT TĨNH: Các Component luôn hiện trên mọi trang (Header, Footer)
import Navbar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

// 2. IMPORT ĐỘNG (LAZY LOAD): Chỉ tải code của trang khi người dùng chuyển tới trang đó
const Home = React.lazy(() => import("./pages/Home/Home.jsx"));
const About = React.lazy(() => import("./pages/About/About.jsx"));
const Season = React.lazy(() => import("./pages/Season/Season.jsx"));
const Contact = React.lazy(() => import("./pages/Contact/Contact.jsx"));
const CurrentSeason = React.lazy(() => import("./pages/Season/CurrentSeason/CurrentSeason.jsx"));

function App() {
  return (
    <div className="container">
      <Navbar />
      
      {/* 3. SUSPENSE: Hiển thị giao diện "Loading..." trong tích tắc chờ tải trang */}
      <Suspense fallback={
          <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#45BFFF', fontSize: '24px', fontFamily: 'Jost, sans-serif' }}>
              Loading...
          </div>
      }>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/season' element={<Season />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/currentSeason" element={<CurrentSeason />} />
        </Routes>
      </Suspense>
      
      <Footer />
    </div>
  );
}

export default App;
