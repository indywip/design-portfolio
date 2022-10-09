import React from 'react';
import styled from 'styled-components';

import Cards from '../components/Cards';

const Home = () => {
  return (
      <Wrapper>
        <Top>
          <Header>Hi, I'm Indy!</Header>
          <Sub>A product <span style ={{ fontWeight: 600, color: '#FD987E' }}>designer</span>, <span style ={{ fontWeight: 600, color: '#76DAFA' }}>developer</span>, 
          and <span style ={{ fontWeight: 600, color: "#F287DB" }}>manager</span> based in Vancouver who designs & codes websites to solve problems and create an impact.</Sub>
          <Work>Work</Work>
        </Top>
        <Cards />
      </Wrapper>
  );
}

export default Home

const Wrapper = styled.div`
  margin-top: 120px;

  @media (max-width: 450px) {
    margin-top: 60px;
  }
`

const Top = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 70px;

  @media (max-width: 450px) {
    margin-bottom: 60px;
  }
`

const Header = styled.h1`
  font-weight: 700;
  font-size: 38px;
  font-family: Outfit;
  text-wrap: nowrap;
  color: white;
  letter-spacing: 2px;

  @media (max-width: 450px) {
    font-size: 24px;
    letter-spacing: 1px;
  }
`

const Work = styled.h1`
  font-weight: 700;
  font-size: 38px;
  font-family: Outfit;
  text-wrap: nowrap;
  color: white;
  letter-spacing: 2px;
  width: 80%; 
  text-decoration: underline;
  text-decoration-color: #FD987E;
  margin-top: 85px;
  

  @media (max-width: 450px) {
    font-size: 24px;
    letter-spacing: 1px;
    margin-top: 45px;
    margin-bottom: -14px;
  }
`

const Sub = styled.h2`
  font-weight: 400;
  font-size: 20px;
  font-family: Outfit;
  color: white;
  width: 70%;
  line-height: 1.5;

  @media (max-width: 450px) {
    font-size: 16px;
    width: 85%;
    margin-right: 0px;
  }
`
