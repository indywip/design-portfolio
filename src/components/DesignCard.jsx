import React from 'react';
import styled from 'styled-components';

const DesignCard = (props) => {

  return (
      <Wrapper color={props.color}>
          <Content>
              <Title>{props.title}</Title>
              <Desc>{props.desc}</Desc>
          </Content>
          <Image src={props.image} />
      </Wrapper>
  );
}

export default DesignCard

const Wrapper = styled.div`
  background: #272727;
  border: 1px solid gray;
  border-radius: 10px;
  width: 560px;
  height: 450px;
  overflow: hidden;
  justify-self: center;
  margin-bottom: 40px;
  transition-duration: 0.4s;

  @media (max-width: 450px) {
    width: 300px;
    height: 250px;
    margin-bottom: 0px;
  }
`

const Content = styled.div`
  padding: 0px 16px;
  `

const Title = styled.h2`
  font-size: 32px;
  font-family: Outfit;
  text-align: center;
  color: white;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  margin-top: 32px;

  @media (max-width: 450px) {
    font-size: 22px;
    margin-top: 28px;
  }
`

const Desc = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-family: Outfit;
  color: white;
  text-align: center;
  margin-bottom: 18px;

  @media (max-width: 450px) {
    font-size: 10px;
  }
`

const Image = styled.img`
  width: 560px;
  align-self: center;

  @media (max-width: 450px) {
    width: 300px;
  }
`

