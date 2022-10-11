import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const MobileNav = ({ open }) => {
        return (
            <Wrapper open={open}>
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
                        window.open("https://drive.google.com/file/d/1lTrEJMTBtLsN8D1H2SfaQ0mL1kzE_cdM/view?usp=sharing", '_blank')
                    }}>Resume</Button>
                </Buttons>
            </Wrapper>
        )
}

export default MobileNav

const Wrapper = styled.div`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        align-items: center;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        position: fixed;
        transition: transform 0.3s ease-in-out;
        top: 0;
        right: 0;
        height: 100vh;
        width: 150px;
        padding-left: 40px;
        padding-top: 3.5rem;
        background-color: #151516;
        border-left: 1px solid gray;
        align-items: center;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 20px;
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
    text-align: center;

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
    padding: 8px 22px;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover {
        background: linear-gradient(90deg, rgba(253,152,126,1) 0%, rgba(242,135,219,1) 100%);
        color: white;
  }
`
