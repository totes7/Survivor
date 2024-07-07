import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Media from './components/pages/Media';
import Screening from './components/pages/Screening';
import Book from './components/pages/Book';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/media" element={<Media/>} />
        <Route path="/screening" element={<Screening/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
