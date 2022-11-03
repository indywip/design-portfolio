import React from 'react';
import styled from 'styled-components';

import ScrollToTop from './hooks/ScrollToTop.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useWindowDimensions from './hooks/GetWindowDimension.js';

import Home from './pages/Home'
import About from './pages/About'
import Designs from './pages/Designs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Alliance from './pages/Alliance'
import Entreprenher from './pages/Entreprenher'
import OnlyProfs from './pages/OnlyProfs'
import ReactLab from './pages/ReactLab'
import Notion from './pages/Notion'

function App() {

  const width = useWindowDimensions().width;

  if (width > 768) {
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
                      <Route path='notion' element={<Notion />} />
                      <Route path='entreprenher' element={<Entreprenher />} />
                      <Route path='onlyprofs' element={<OnlyProfs />} />
                      <Route path='reactlab' element={<ReactLab />} />
                  </Route>
              </Routes>
        <Footer />
      </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Top>
          <Icon src={`https://imgur.com/lumigPG.png`} />
          <Navbar />
        </Top>
              <Routes>
                <Route path='/'>
                      <Route index element={<Home />} />
                      <Route path='about' element={<About />} />
                      <Route path='designs' element={<Designs />} />
                      <Route path='alliance' element={<Alliance />} />
                      <Route path='notion' element={<Notion />} />
                      <Route path='entreprenher' element={<Entreprenher />} />
                      <Route path='onlyprofs' element={<OnlyProfs />} />
                      <Route path='reactlab' element={<ReactLab />} />
                  </Route>
              </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;

const Icon = styled.img`
    width: 80px;
    margin-left: 35px;
    margin-top: 24px;

    @media (max-width: 450px) {
        width: 60px;
        margin-top: 18px;
        margin-left: 20px;
    }
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`