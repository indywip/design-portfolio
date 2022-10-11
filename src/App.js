import React from 'react';

import ScrollToTop from './hooks/ScrollToTop.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Designs from './pages/Designs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Alliance from './pages/Alliance'
import Entreprenher from './pages/Entreprenher';
import OnlyProfs from './pages/OnlyProfs';
import ReactLab from './pages/ReactLab';

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
                    <Route path='alliance' element={<Alliance />} />
                    <Route path='entreprenher' element={<Entreprenher />} />
                    <Route path='onlyprofs' element={<OnlyProfs />} />
                    <Route path='reactlab' element={<ReactLab />} />
                </Route>
            </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
