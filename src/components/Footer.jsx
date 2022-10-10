import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import email from '../img/email.png';
import git from '../img/git.png';
import linkedin from '../img/linkedin_1.png';
import drib from '../img/dribbble.png';

const Footer = () => {
  return (
    <Wrapper>
      <Link to ="/"><Logo src={`https://imgur.com/UZdRnbP.png`} /></Link>
      <Buttons>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Text>Work</Text>
            </Link>
            <Link to="/designs" style={{ textDecoration: "none" }}>
                <Text>Designs</Text>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
                <Text>About</Text>
            </Link>
            <Text onClick={(e)=> {
                window.open("https://drive.google.com/file/d/1Yz3a32w-vpJIOlMj8kYbNKY3CWAAv_RY/view", '_blank')
            }}>Resume</Text>
        </Buttons>
        <Icons>
          <a href="https://www.linkedin.com/in/indirasowy" rel="noopener noreferrer" target="_blank"><Icon src={linkedin} /></a>
          <a href="https://dribbble.com/indysowy" rel="noopener noreferrer" target="_blank"><Icon src={drib} /></a>
          <a href="https://github.com/indywip" rel="noopener noreferrer" target="_blank"><Icon src={git} /></a>
          <a href="mailto:indira.sowy@gmail.com" rel="noopener noreferrer" target="_blank"><Icon src={email} /></a>
        </Icons>
        <SmallText>Copyright © Indy Sowy 2022</SmallText>
    </Wrapper>
  );
}

export default Footer

const Wrapper = styled.div`
  margin: 32px 0px;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const SmallText = styled.p`
  font-size: 16px;
  font-family: Outfit;
  color: white;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`

const Logo = styled.img`
    width: 120px;
    @media (max-width: 450px) {
        width: 100px;
    }
`

const Text = styled.h1`
    font-size: 18px;
    color: white;
    font-weight: 500;
    font-family: Outfit;
    display: inline-block;
    position: relative;
    cursor: pointer;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3.5px;
        bottom: 0;
        left: 0;
        background-color: #FD987E;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    @media (max-width: 450px) {
        font-size: 16px;
    }
`

const Buttons = styled.div`
    display: flex;
    gap: 20px;
`

const Icons = styled.div`
  display: flex;
  gap: 22px;

  @media (max-width: 450px) {
    gap: 12px;
  }
`

const Icon = styled.img`
  filter: invert(1);
  width: 30px;
`