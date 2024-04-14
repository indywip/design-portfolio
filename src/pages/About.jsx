import React from 'react';
import styled from 'styled-components';

import email from '../img/email.png';
import git from '../img/git.png';
import linkedin from '../img/linkedin_1.png';
import drib from '../img/dribbble.png';

const About = () => {
  return (
      <Wrapper>
          <IContent>
            <Image src="https://imgur.com/5THAHWD.jpg" />
            <Icons>
              <a href="https://www.linkedin.com/in/indirasowy" rel="noopener noreferrer" target="_blank"><Icon src={linkedin} /></a>
              <a href="https://dribbble.com/indysowy" rel="noopener noreferrer" target="_blank"><Icon src={drib} /></a>
              <a href="https://github.com/indywip" rel="noopener noreferrer" target="_blank"><Icon src={git} /></a>
              <a href="mailto:indira.sowy@gmail.com" rel="noopener noreferrer" target="_blank"><Icon src={email} /></a>
            </Icons>
          </IContent>
          <Content>
            <Center>
            <Header>Meet Indira Sowy</Header>
            <Sub>I am a product designer and developer based in Vancouver, currently a 
              second year studying under the Faculty of Arts at the University of British Columbia. 
              As someone who’s been doing design since high school, creation is a passion close to my heart. 
              I hope to use my skills to help develop the future of the tech industry.
              <br /><br />
              Feel free to reach out if you want to collaborate or just have a chat!</Sub>
            </Center>
          </Content>
      </Wrapper>
  );
}


export default About

const Wrapper = styled.div`
  display: flex;
  margin-top: 65px;
  align-items: top;

  @media (max-width: 768px) {
    margin-top: 38px;
    gap: 30px;
    flex-direction: column;
  }
`

const Image = styled.img`
  border-radius: 50%;
  width: 410px;

  @media (max-width: 1010px) {
    width: 350px;
  }

  @media (max-width: 450px) {
    width: 220px;
    align-self: center;
  }
`

const Center = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
    }
`

const Content = styled.div`
  flex: 50%;
  margin-left: -150px;

  @media (max-width: 1250px) {
    margin-left: -40px;
  }

  @media (max-width: 1010px) {
    flex: 60%;
    margin-left: 0px;
  }

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`

const IContent = styled.div`
  flex: 50%;
  margin-left: 220px;

  @media (max-width: 1100px) {
    margin-left: 100px;
  }


  @media (max-width: 1010px) {
    flex: 40%;
  }


  @media (max-width: 768px) {
    margin-left: 0px;
    align-self: center;
  }
`

const Header = styled.h1`
  font-weight: 700;
  font-size: 38px;
  font-family: Outfit;
  text-wrap: nowrap;
  color: white;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 24px;
    width: 80%;
    letter-spacing: 1px;
    text-align: center;
  }
`

const Sub = styled.h2`
  font-weight: 400;
  font-size: 20px;
  font-family: Outfit;
  color: white;
  width: 70%;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 80%;
    margin-right: 0px;
    text-align: center;
  }
`

const Icons = styled.div`
  display: flex;
  gap: 22px;
  margin-top: 28px;
  margin-left: 12%;

  @media (max-width: 450px) {
    margin-top: 18px;
    gap: 12px;
  }
`

const Icon = styled.img`
  width: 45px;

  @media (max-width: 450px) {
    width: 30px;
  }
`