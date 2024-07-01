import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavTabs from './components/NavTabs';

function App() {
  return (
    <Router>
      <NavTabs />
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;
