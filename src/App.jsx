import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Info from './components/pages/Info';
import Screening from './components/pages/Screening';
import Book from './components/pages/Book';
import MediaPack from "./components/pages/MediaPack";
import Trailer from "./components/pages/Trailer";
import Gallery from "./components/pages/Gallery";
import Contact from './components/pages/Contact';
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import ScreeningForm from "./components/pages/ScreeningForm";
import Press from "./components/pages/Press";
import Podcasts from "./components/pages/Podcasts";
import Bonus from "./components/pages/Bonus";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/info" element={<Info/>} />
        <Route path="/screening" element={<Screening/>} />
        <Route path="/screening-form" element={<ScreeningForm/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/mediapack" element={<MediaPack/>} />
        <Route path="/trailer" element={<Trailer/>} />
        <Route path="/press" element={<Press/>} />
        <Route path="/podcasts" element={<Podcasts/>} />
        <Route path="/bonus" element={<Bonus/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      </Routes>
    </Router>
  );
}

export default App;
