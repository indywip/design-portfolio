import React from 'react';
import styled from 'styled-components';

import useWindowDimensions from "../hooks/GetWindowDimension";

const Entreprenher = () => {

    const width = useWindowDimensions().width;

    if (width > 768) {
        return (
            <Wrapper>
                <Header>entreprenHER</Header>
                <Center>
                    <Sub>
                        A web application to find and support local female-owned businesses in your area, 
                        done for a hackathon.
                    </Sub>
                    <Buttons>
                        <Button onClick={(e)=> {
                        window.open("https://devpost.com/software/herworld", '_blank')
                    }}>DevPost</Button>
                        <Button onClick={(e)=> {
                        window.open("https://www.figma.com/proto/xpC6wwYWiBmmVcUrj1UEwY/entreprenHER?page-id=0%3A1&node-id=3%3A51&viewport=75%2C396%2C0.07&scaling=min-zoom&starting-point-node-id=3%3A51", '_blank')
                    }}>Prototype</Button>
                    </Buttons>
                    <Image1 src={`https://imgur.com/OhKdsIh.png`} alt="mockup of the homepage design" />
                </Center>
                <OverviewT>OVERVIEW</OverviewT>
                <Overview>
                    <TextGroup>
                        <SubText>Duration</SubText>
                        <TextCenter>March 2022</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Roles</SubText>
                        <TextCenter>Discovery, User Research, UI Design, Prototyping, Coding</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Tools Used</SubText>
                        <TextCenter>Figma, HTML, CSS</TextCenter>
                    </TextGroup>
                </Overview>
                <Body>
                    <SubHead>THE PROBLEM</SubHead>
                    <Text>
                    Female-identifying entrepreneurs and business owners are very under-represented, with only 16% of 
                    Canadian small business owners being women. <br/><br/>
                    Through further research, I found that female businesses profit less compared to male businesses and 
                    tend to be less successful. Due to the lack of access and opportunities that women face, female-owned 
                    businesses tend to become relatively unpopular.
                    </Text>
                    <SubHead>THE PROCESS</SubHead>
                    <Text>
                    We had limited time to work on the project, so we first decided to focus on a social issue we wanted 
                    our product to tackle. We decided to address the issue of the lack of women in the business/entrepreneurship 
                    field. Through my research, I found that women tend to be underrepresented in the field because 1) they are 
                    demotivated to enter the field as it is male-dominated and 2) because it is male-dominated, the most 
                    popular/successful businesses tend to be owned by men. So, in order to address this, we came up with an idea 
                    for an e-commerce website that focused on female entrepreneurs, allowing the platform to give a spotlight 
                    on their business and promote the selling of their products.<br/><br/>
                    After deciding on the idea, I worked on creating a wireframe to identify the number of pages and how 
                    we wanted to arrange the content of each page. After this, I converted the wireframes into high-fidelity 
                    designs, and then into interactive prototypes.
                    </Text>
                    <SubHead style={{ marginTop: '28px' }}>THE SOLUTION</SubHead>
                    <Text>
                    To remedy the problem, our team created entreprenHER, a web application that aims to showcase the 16% 
                    and allow them to promote their talents and creativity through the platform.<br/><br/>
                    Female-identifying individuals can host their online stores on the platform which consumers can 
                    purchase from. Through this, users can directly support women entrepreneurs by buying their products.<br/><br/>
                    <strong>User Requirements</strong><br/>
                    As a female entrepreneur, you can:
                    <ul>
                        <li>Register your business on the website</li>
                        <li>Sell your products to earn profit</li>
                        <li>Post on the community tab as their business promoting their new products that 
                            users can view and interact with</li>
                    </ul>
                    As a customer or general user of the platform, you can:
                    <ul>
                        <li>Purchase products from any business or seller</li>
                        <li>Interact (like and comment) on posts made by businesses</li>
                        <li>Host and attend events hosted by women</li>
                    </ul>
                    </Text>
                    <SubHead>FEATURES</SubHead>
                    <Group gap={"85px"}>
                        <Content>
                            <Text style={{ textAlign: 'right' }}>
                                Once you enter the website and click the "Sign Up" button, it prompts a login screen allowing
                                you to sign up your business on the platform. It asks for your business name, the industry/category
                                your products fall under, and a password so you can log into the account.
                            </Text>
                        </Content>
                        <Content>
                            <Image3 src={`https://imgur.com/DUbtMto.png`} />
                        </Content>
                    </Group>
                    <Group gap={"0px"}>
                        <Content>
                            <Image4 src={`https://imgur.com/4DMiIfu.png`} />
                        </Content>
                        <Content>
                            <Text>
                                Alternatively, pressing the Discover button will lead to a page where you can view all the local
                                businesses and events in the area. It also allows you to filter the businesses by category, as well
                                as search for specific businesses by their name.
                            </Text>
                        </Content>
                    </Group>
                    <Group gap={"85px"}>
                        <Content>
                            <Text style={{ textAlign: 'right' }}>
                                Viewing the business page, you will be able to see details about the business, including its name and bio.
                                You can also view the products that the business is selling, a picture sample of the product, and its
                                respective price.
                            </Text>
                        </Content>
                        <Content>
                            <Image7 src={`https://imgur.com/sIzRYC7.png`} />
                        </Content>
                    </Group>
                    <Group gap={"0px"}>
                        <Content>
                            <Image4 src={`https://imgur.com/McRrPdy.png`} />
                        </Content>
                        <Content>
                            <Text>
                                Clicking on the "Posts" tab, you will be able to see all the posts the business has made. You are able to
                                interact with the posts, including liking and commenting, as well as see the other users who have interacted
                                with the post as well.
                            </Text>
                        </Content>
                    </Group>
                    <Group gap={"85px"}>
                        <Content>
                            <Text style={{ textAlign: 'right' }}>
                                Finally, clicking on the "Events" button in the navigation bar will lead you to a page that shows you all of the
                                local events being hosted by women or by the businesses in your area. It includes details like who is hosting the event,
                                when and what time the event will be hosted at, and a short description on what the event is about.
                            </Text>
                        </Content>
                        <Content>
                            <Image7 src={`https://imgur.com/zHn7dNM.png`} />
                        </Content>
                    </Group>
                    <SubHead>TAKEAWAYS & IMPROVEMENTS</SubHead>
                    <Text>
                        Although our team only had 36 hours to come up with a project idea and execute it, we were successful in 
                        building it and won a Major League Hacking sponsor prize from the hackathon, as well as awarded the UBC
                        Project Incubation Prize from its Computer Science Department.<br/><br/>
                        Given more time, I would have worked on creating mockups for the shopping cart and purchasing pages 
                        that would appear once you opt to purchase a product. I would have also worked on creating the events 
                        page that allows users to start their own events, as well as view and RSVP to other users' events.
                    </Text>
                </Body>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <Header>entreprenHER</Header>
                <Center>
                    <Sub>
                        A web application to find and support local female-owned businesses in your area, 
                        done for a hackathon.
                    </Sub>
                    <Buttons>
                        <Button onClick={(e)=> {
                        window.open("https://devpost.com/software/herworld", '_blank')
                    }}>DevPost</Button>
                        <Button onClick={(e)=> {
                        window.open("https://www.figma.com/proto/xpC6wwYWiBmmVcUrj1UEwY/entreprenHER?page-id=0%3A1&node-id=3%3A51&viewport=75%2C396%2C0.07&scaling=min-zoom&starting-point-node-id=3%3A51", '_blank')
                    }}>Prototype</Button>
                    </Buttons>
                    <Image1 src={`https://imgur.com/OhKdsIh.png`} />
                </Center>
                <OverviewT>OVERVIEW</OverviewT>
                <Overview>
                    <TextGroup>
                        <SubText>Duration</SubText>
                        <TextCenter>March 2022</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Roles</SubText>
                        <TextCenter>Discovery, User Research, UI Design, Prototyping, Coding</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Tools Used</SubText>
                        <TextCenter>Figma, HTML, CSS</TextCenter>
                    </TextGroup>
                </Overview>
                <Body>
                    <SubHead>THE PROBLEM</SubHead>
                    <Text>
                    Female-identifying entrepreneurs and business owners are very under-represented, with only 16% of 
                    Canadian small business owners being women. <br/><br/>
                    Through further research, we found that female businesses profit less compared to male businesses and 
                    tend to be less successful. Due to the lack of access and opportunities that women face, female-owned 
                    businesses tend to become relatively unpopular.
                    </Text>
                    <SubHead>THE PROCESS</SubHead>
                    <Text>
                    We had limited time to work on the project, so we first decided to focus on a social issue we wanted 
                    our product to tackle. We decided to address the issue of the lack of women in the business/entrepreneurship 
                    field. Through my research, I found that women tend to be underrepresented in the field because 1) they are 
                    demotivated to enter the field as it is male-dominated and 2) because it is male-dominated, the most 
                    popular/successful businesses tend to be owned by men. So, in order to address this, we came up with an idea 
                    for an e-commerce website that focused on female entrepreneurs, allowing the platform to give a spotlight 
                    on their business and promote the selling of their products.<br/><br/>
                    After deciding on the idea, I worked on creating a wireframe to identify the number of pages and how 
                    we wanted to arrange the content of each page. After this, I converted the wireframes into high-fidelity 
                    designs, and then into interactive prototypes.
                    </Text>
                    <SubHead style={{ marginTop: '28px' }}>THE SOLUTION</SubHead>
                    <Text>
                    To remedy the problem, our team created entreprenHER, a web application that aims to showcase the 16% 
                    and allow them to promote their talents and creativity through the platform.<br/><br/>
                    Female-identifying individuals can host their online stores on the platform which consumers can 
                    purchase from. Through this, users can directly support women entrepreneurs by buying their products.
                    <strong>User Requirements</strong><br/>
                    As a female entrepreneur, you can:
                    <ul>
                        <li>Register your business on the website</li>
                        <li>Sell your products to earn profit</li>
                        <li>Post on the community tab as their business promoting their new products that 
                            users can view and interact with</li>
                    </ul>
                    As a customer or general user of the platform, you can:
                    <ul>
                        <li>Purchase products from any business or seller</li>
                        <li>Interact (like and comment) on posts made by businesses</li>
                        <li>Host and attend events hosted by women</li>
                    </ul>
                    </Text>
                    <SubHead>FEATURES</SubHead>
                    <Text>
                        Once you enter the website and click the "Sign Up" button, it prompts a login screen allowing
                        you to sign up your business on the platform. It asks for your business name, the industry/category
                        your products fall under, and a password so you can log into the account.
                    </Text>
                    <Center><Image3 src={`https://imgur.com/DUbtMto.png`} /></Center>
                    <Text>
                        Alternatively, pressing the Discover button will lead to a page where you can view all the local
                        businesses and events in the area. It also allows you to filter the businesses by category, as well
                        as search for specific businesses by their name.
                    </Text>
                    <Center><Image4 src={`https://imgur.com/4DMiIfu.png`} /></Center>
                    <Text>
                        Viewing the business page, you will be able to see details about the business, including its name and bio.
                        You can also view the products that the business is selling, a picture sample of the product, and its
                        respective price.
                    </Text>
                    <Center><Image7 src={`https://imgur.com/sIzRYC7.png`} /></Center>
                    <Text>
                        Clicking on the "Posts" tab, you will be able to see all the posts the business has made. You are able to
                        interact with the posts, including liking and commenting, as well as see the other users who have interacted
                        with the post as well.
                    </Text>
                    <Center><Image4 src={`https://imgur.com/McRrPdy.png`} /></Center>
                    <Text>
                        Finally, clicking on the "Events" button in the navigation bar will lead you to a page that shows you all of the
                        local events being hosted by women or by the businesses in your area. It includes details like who is hosting the event,
                        when and what time the event will be hosted at, and a short description on what the event is about.
                    </Text>
                    <Center><Image7 src={`https://imgur.com/zHn7dNM.png`} /></Center>
                    <SubHead>TAKEAWAYS & IMPROVEMENTS</SubHead>
                    <Text>
                        Although our team only had 36 hours to come up with a project idea and execute it, we were successful in 
                        building it and won a Major League Hacking sponsor prize from the hackathon, as well as awarded the UBC
                        Project Incubation Prize from its Computer Science Department.<br/><br/>
                        Given more time, I would have worked on creating mockups for the shopping cart and purchasing pages 
                        that would appear once you opt to purchase a product. I would have also worked on creating the events 
                        page that allows users to start their own events, as well as view and RSVP to other users' events.
                    </Text>
                </Body>
            </Wrapper>
        )
    }
}


export default Entreprenher

const Wrapper = styled.div`
    margin-top: 40px;
`

const Body = styled.div`
    padding: 0px 180px;

    @media (max-width: 450px) {
        padding: 0px 20px;
    }
`

const Group = styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => props.gap};
    margin-top: 30px;

    @media (max-width: 450px) {
        flex-direction: column;
    }
`

const TextGroup = styled.div``

const Content = styled.div`
  flex: 50%;
`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Buttons = styled.div`
    display: flex;
    margin-bottom: 30px;
    gap: 28px;
`

const Button = styled.button`
    font-size: 20px;
    color: #FD987E;
    font-weight: 500;
    font-family: Outfit;
    background-color: transparent;
    border: 1px solid #FD987E;
    border-radius: 10px;
    padding: 10px 22px;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover {
        background: linear-gradient(90deg, rgba(253,152,126,1) 0%, rgba(242,135,219,1) 100%);
        color: white;
  }

  @media (max-width: 450px) {
        font-size: 16px;
  }
`

const Header = styled.h1`
  font-weight: 700;
  font-size: 38px;
  font-family: Outfit;
  text-wrap: nowrap;
  color: white;
  letter-spacing: 2px;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 24px;
    letter-spacing: 1px;
  }
`

const SubHead = styled.h2`
    font-weight: 600;
    font-size: 24px;
    font-family: Outfit;
    text-wrap: nowrap;
    color: white;
    letter-spacing: 2px;
    text-align: center;
    margin-top: 50px;

    @media (max-width: 450px) {
    font-size: 24px;
    letter-spacing: 1px;
    }
`

const OverviewT = styled.h2`
    font-weight: 600;
    font-size: 24px;
    font-family: Outfit;
    text-wrap: nowrap;
    color: white;
    letter-spacing: 2px;
    text-align: center;

    @media (max-width: 450px) {
    font-size: 24px;
    letter-spacing: 1px;
    }
`

const Sub = styled.h2`
  font-weight: 500;
  font-size: 20px;
  font-family: Outfit;
  color: white;
  line-height: 1.5;
  text-align: center;
  width: 60%;
  margin-top: -16px;
  margin-bottom: 30px;

  @media (max-width: 450px) {
    font-size: 16px;
    margin-right: 0px;
    width: 85%;
  }
`

const Text = styled.h2`
  font-weight: 500;
  font-size: 20px;
  font-family: Outfit;
  color: white;
  line-height: 1.5;

  @media (max-width: 450px) {
    font-size: 16px;
  }
`

const TextCenter = styled.h2`
  font-weight: 500;
  font-size: 20px;
  font-family: Outfit;
  color: white;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 16px;
    margin-top: -10px;
  }
`

const Image1 = styled.img`
  width: 800px;
  margin-top: -40px;

  @media (max-width: 450px) {
    width: 500px;
    margin-top: -20px;
  }
`

const Image2 = styled.img`
  width: 800px;
  border-radius: 10px;

  @media (max-width: 450px) {
    width: 320px;
  }
`

const Image3 = styled.img`
    width: 420px;
    border-radius: 10px;

    @media (max-width: 450px) {
        width: 300px;
    }
`

const Image4 = styled.img`
    width: 450px; 
    border-radius: 10px;

    @media (max-width: 450px) {
        width: 300px;
    }
`

const Image5 = styled.img`
    width: 800px;
    border-radius: 10px;

    @media (max-width: 450px) {
        width: 320px;
    }
`

const Image6 = styled.img`
    width: 700px;
    border-radius: 10px;

    @media (max-width: 450px) {
        width: 310px;
    }
`

const Image7 = styled.img`
    width: 450px;
    border-radius: 10px;

    @media (max-width: 450px) {
        width: 320px;
    }
`

const Overview = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: -20px;

    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
        padding: 0px 20px;
    }
`

const SubText = styled.h3`
    font-weight: 600;
    font-size: 20px;
    font-family: Outfit;
    color: white;
    line-height: 1.5;
    text-align: center;

    @media (max-width: 450px) {
        font-size: 16px;
    }
`

