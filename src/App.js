import React from 'react';

import ScrollToTop from './ScrollToTop.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Designs from './pages/Designs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Alliance from './pages/Alliance'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
            <Routes>
              <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='designs' element={<Designs />} />
                    <Route path ='alliance' element={<Alliance />} />
                </Route>
            </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
