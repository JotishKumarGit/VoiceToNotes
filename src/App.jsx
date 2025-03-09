import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Section from './pages/Section';
import TryIt from './components/TryIt';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tryit' element={<TryIt />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default App;
