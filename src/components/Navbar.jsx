import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Wrapper>
        <Link to ="/"><Icon src={`https://imgur.com/lumigPG.png`} /></Link>
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
            <Button onClick={(e)=> {
                window.open("https://drive.google.com/file/d/1Yz3a32w-vpJIOlMj8kYbNKY3CWAAv_RY/view", '_blank')
            }}>Resume</Button>
        </Buttons>
    </Wrapper>
  );
}

export default Navbar

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 60px;
    margin-top: 24px;
    padding-right: 50px;
`

const Text = styled.h1`
    font-size: 22px;
    color: white;
    font-weight: 500;
    font-family: Outfit;
    display: inline-block;
    position: relative;

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
`

const Button = styled.button`
    font-size: 22px;
    color: #FD987E;
    font-weight: 500;
    font-family: Outfit;
    background-color: transparent;
    border: 1px solid #FD987E;
    border-radius: 10px;
    padding: 0px 22px;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover {
        background: linear-gradient(90deg, rgba(253,152,126,1) 0%, rgba(242,135,219,1) 100%);
        color: white;
  }
`

const Icon = styled.img`
    width: 80px;
    margin-left: 35px;
    margin-top: 24px;

    @media (max-width: 450px) {
        width: 60px;
    }
`