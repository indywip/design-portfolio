import React from 'react';
import styled from 'styled-components';

import UICards from '../components/UICards';
import GraphicCards from '../components/GraphicCards';

const Designs = () => {
  return (
      <Wrapper>
        <Top>
            <Work>Other Designs</Work>  
            <Sub>Other UX and graphic designs I've worked on.</Sub>
        </Top>
        <SubHead>UI Designs</SubHead>
        <UICards />
        <SubHead2>Graphic Designs</SubHead2>
        <GraphicCards />
      </Wrapper>
  );
}


export default Designs

const Wrapper = styled.div`
  margin-top: 40px;
  padding: 0px 130px;

  @media (max-width: 450px) {
    padding: 0px 20px;
    margin-top: 20px;
  }
`

const Top = styled.div`
  margin: auto;
  margin-bottom: 30px;

  @media (max-width: 450px) {
    margin-bottom: 20px;
    margin-left: 32px;
  }
`

const Sub = styled.h2`
  font-weight: 400;
  font-size: 20px;
  font-family: Outfit;
  color: white;
  width: 70%;
  line-height: 1.5;
  margin-top: -10px;

  @media (max-width: 450px) {
    font-size: 16px;
    width: 85%;
    margin-top: 20px;
    margin-right: 0px;
  }
`

const SubHead = styled.h2`
    font-weight: 600;
    font-size: 32px;
    font-family: Outfit;
    text-wrap: nowrap;
    color: white;
    letter-spacing: 2px;

    @media (max-width: 450px) {
    font-size: 21px;
    letter-spacing: 1px;
    margin-left: 32px;
    }
`

const SubHead2 = styled.h2`
    font-weight: 600;
    font-size: 32px;
    font-family: Outfit;
    text-wrap: nowrap;
    color: white;
    letter-spacing: 2px;

    @media (max-width: 450px) {
      font-size: 21px;
      margin-top: 40px;
      margin-left: 32px;
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

  @media (max-width: 450px) {
    font-size: 24px;
    letter-spacing: 1px;
    margin-top: 45px;
    margin-bottom: -14px;
  }
`