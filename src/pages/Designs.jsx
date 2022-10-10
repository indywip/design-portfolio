import React from 'react';
import styled from 'styled-components';

const Designs = () => {
  return (
      <Wrapper>
        <Top>
            <Work>Other Designs</Work>  
            <Sub>Other UX and graphic designs I've worked on.</Sub>
        </Top>
      </Wrapper>
  );
}


export default Designs

const Wrapper = styled.div`
  margin-top: 40px;

  @media (max-width: 450px) {
    margin-top: 20px;
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