import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home'
import Error from './pages/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Header from './components/Header';
import './styles/styles.scss'
import FicheLogement from './pages/FicheLogement';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/a-propos' element={<About />} />
        <Route path='/logement/:id' element={<FicheLogement />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
