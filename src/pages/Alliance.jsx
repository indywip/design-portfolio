import React from 'react';
import styled from 'styled-components';

import useWindowDimensions from "../hooks/GetWindowDimension";

const Alliance = () => {

    const width = useWindowDimensions().width;

    if (width > 768) {
        return (
            <Wrapper>
                <Header>Alliance</Header>
                <Center>
                    <Sub>A website to connect creative independents together to work on projects 
                    and grow their portfolios, done for a team hackathon.</Sub>
                    <Buttons>
                        <Button onClick={(e)=> {
                        window.open("https://docs.google.com/document/d/1-pDMA8o0ZLEFDdhfFm1sqTYjboQ4hK6c8XVKhLVoORY/edit?usp=sharing", '_blank')
                    }}>Case Study</Button>
                        <Button onClick={(e)=> {
                        window.open("https://www.figma.com/proto/Sp7VnMref02iDJf80vWUzl/swarmageddon?node-id=228%3A1209&scaling=min-zoom&page-id=228%3A799&starting-point-node-id=228%3A1209", '_blank')
                    }}>Prototype</Button>
                    </Buttons>
                    <Image1 src={`https://imgur.com/Ms91qYS.png`} />
                </Center>
                <OverviewT>OVERVIEW</OverviewT>
                <Overview>
                    <TextGroup>
                        <SubText>Duration</SubText>
                        <TextCenter>March 2022</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Roles</SubText>
                        <TextCenter>Discovery, User Research, Wireframing, UI Design, Prototyping</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Tools Used</SubText>
                        <TextCenter>Figma</TextCenter>
                    </TextGroup>
                </Overview>
                <Body>
                    <SubHead>THE PROBLEM</SubHead>
                    <Text>
                        For this hackathon, our team wanted to address a problem we noticed in the creative and tech industry. 
                        The tech industry is a growing community consisting of students, freelancers, and employees taking on 
                        different fields. A certain branch of the tech industry that exercises “creative independence” are 
                        those in Design, Engineering, and Product. In this branch, projects play a significant role in upping 
                        one’s portfolio. <br/><br/>However, when projects require collaborative work, tech aspirants, 
                        especially those who are new to the industry or field, may not know who to reach out to. This is 
                        because they have limited resources, knowledge, and no community to reach out to. <br/><br/>
                        There are three possible causes of this problem:
                        <ul>
                            <li>Tech aspirants are able to find a community</li> 
                            <li>They have limited resources</li>
                            <li>They have limited knowledge of certain aspects of the project they are working on</li>
                        </ul>
                        To solve this accessibility gap, platforms such as Discord servers, Twitch communities, Twitter spaces, 
                        and the like have created communities where aspiring creative independents can network and scout for 
                        collaborators and projects. However, based on the User Research conducted by our team, this method is 
                        tedious and remains a hit-or-miss as communities become overwhelming and saturated. Topping off this 
                        accessibility gap is also the difficulty of recruiting passionate and compatible collaborators who remain 
                        committed to the project. Not only is it a question of how to foster a sense of community, but also of 
                        how to better find collaborators for side projects.
                    </Text>
                    <SubHead>THE PROCESS</SubHead>
                    <Text style={{ marginTop: '-20px' }}>
                        <strong>Objectives</strong>
                        <ul>
                            <li>Discover the tools and platforms tech aspirants use to find collaborators for side projects</li>
                            <li>Uncover challenges tech aspirants face when scouting for collaborators</li>
                            <li>Understand the criteria tech aspirants have when scouting for collaborators</li>
                        </ul>
                        Our target users are creative independents who are looking for projects to work on AND to up their portfolio: 
                        <ul>
                            <li>Students</li>
                            <li>Career shifters</li>
                            <li>New graduates</li>
                        </ul>
                        For research, we had an initial survey of individuals in the industries of design, engineering, and product 
                        who were interested in working on projects. Participants were chosen were invited to an hour interview in 
                        an attempt to understand how collaboration is scouted by tech aspirants and the challenges they face.​ <br/><br/>
                        This was the criteria for choosing who to interview:
                        <ul>
                            <li>Aged 18 to 30+</li>
                            <li>Is currently interested in the field under “creative independence” (under our scope, this includes design, 
                            product, and engineering)</li>
                            <li>Have looked or are looking for collaborators in side projects</li>
                        </ul>
                        The research found that individuals struggled to get experience working on collaborative projects 
                        without having to apply for actual jobs. Moreover, they faced challenges looking for collaborators 
                        who were willing to work with them without some sort of compensation. We concluded that there are 
                        many individuals who want to collaborate, but don't know where to find like-minded people. <br/><br/>
                        <Center><Image5 src={`https://imgur.com/BZxBEe3.png`} /></Center><br/>
                        Thus, we validated the necessity to develop a new collaborative freelancer app. From this, we worked 
                        on crafting user personas based on our research. <br/><br/>
                        <Center><Image6 src={`https://imgur.com/Eftcs2I.png`} /></Center><br/>
                        <Center><Image6 src={`https://imgur.com/Fi66ZAx.png`} /></Center><br/>
                        From there, we created a user flow to map out the user journey. After, we constructed wirefames 
                        based on our map then converted them into high-fidelity UI designs on Figma. Finally, we were able 
                        to convert some of the screens into interactive and functional prototypes.<br/><br/>
                        <Center><Image2 src={`https://i.imgur.com/vJgdbsH.png`} /></Center><br/><br/>
                    </Text>
                    <SubHead style={{ marginTop: '28px' }}>THE SOLUTION</SubHead>
                    <Text>
                    We created a website that connects tech aspirants who exercise “creative independence” to one another 
                    for collaborative work on projects they can add to their experiences and portfolios.<br/><br/>
                    This website also aims to build a peer-to-peer network or a “creative independent” community that fosters 
                    creativity and innovation by allowing them to brainstorm various projects to work on together. Our main goal 
                    is to be the gateway for their career through upskilling and collaboration.<br/><br/>
                    More specifically, streamline this process by curating a feed of recommended collaborators and projects based on the 
                    user’s criteria. Users are able to build their profile and discern whether the collaborators and projects from our 
                    recommended list are what they are looking for through our in-website messaging channel. Moreover, to foster an 
                    uplifting community, users are able to share their questions, stories, and progress reports and to hop on fireside 
                    chats in our community feed.<br/><br/>
                    Deviating from your typical freelance tool, Alliance does not connect aspiring creative independents 
                    to client work. Given that these aspiring creative independents have limited experience and projects, landing 
                    a role in a monetized project is a slim chance. Instead, *Alliance* brings together like-minded individuals 
                    that share the same vision and passion to collaborate, so that they may find avenues to innovate, grow, and thrive.
                    Our idea prioritizes connecting tech aspirants to one another before the project; essentially a 
                    matching service. It provides suggestions on who to collaborate with rather than simply looking at roles.<br/><br/>
                    <strong>User Requirements</strong><br/>
                    As a creative independent and user of the platform, they can:
                    <ul>
                        <li>Indicate their expertise (design, product, and engineering)</li>
                        <li>Customize their profile to include their skills, past experience, and showcase the projects they've 
                            worked on</li>
                        <li>Upload a project idea in the discovery tab explaining what their project's goals are and what type 
                            of people they're looking to collaborate with</li>
                        <li>Discover projects posted by other users and reach out to collaborate on them</li>
                    </ul>
                    </Text>
                    <SubHead>FEATURES</SubHead>
                    <Group gap={"85px"}>
                        <Content>
                            <Text style={{ textAlign: 'right' }}>
                                Once you enter the website and click the "Get Started" button, it prompts a login screen which asks a 
                                series of questions to be added as information on your profile. <br/><br/>This includes what field 
                                you're in, your top interests based on your niche, your level of experience, your hard skills, and 
                                what kind of people you're looking for to collaborate on projects.
                            </Text>
                        </Content>
                        <Content>
                            <Image3 src={`https://imgur.com/YRcNCjy.png`} />
                        </Content>
                    </Group>
                    <Group gap={"0px"}>
                        <Content>
                            <Image4 src={`https://imgur.com/Z1fOL9E.png`} />
                        </Content>
                        <Content>
                            <Text>
                                After registering your account, you will be led to the Discovery page where you can explore various
                                types of projects posted by other users and see what you want to work on. You will also be able to add
                                suggested users based on your field of interest to reach out and collaborate with.
                            </Text>
                        </Content>
                    </Group>
                    <Group gap={"85px"}>
                        <Content>
                            <Text style={{ textAlign: 'right' }}>
                                Viewing the project page, you will be able to see details about the project including its general description,
                                what type of creative independent and skills they are looking for, images of the the current project/inspirations
                                for it, who posted the project, and an "Apply Now" button to reach out to the user.
                            </Text>
                        </Content>
                        <Content>
                            <Image7 src={`https://imgur.com/tJDXEL2.png`} />
                        </Content>
                    </Group>
                    <SubHead>TAKEAWAYS & IMPROVEMENTS</SubHead>
                    <Text>
                        Though our team was only given about 2 weeks to work on the project, we were able to consolidate our 
                        user research and convert wireframes into a high-fidelity prototype.<br/><br/>
                        Given more time, I would have completed designing all the screens that allow the user to display 
                        interest in working on a project and reach out to collaborate with other users. I would've added 
                        a chat feature allowing users that reach out to connect and chat with each other on the project 
                        they'll be working on. I would've also added a scheduling feature allowing users to schedule 
                        meetings with each other to discuss the project.
                    </Text>
                </Body>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <Header>Alliance</Header>
                <Center>
                    <Sub>A website to connect creative independents together to work on projects 
                    and grow their portfolios, done for a team hackathon.</Sub>
                    <Buttons>
                        <Button onClick={(e)=> {
                        window.open("https://docs.google.com/document/d/1-pDMA8o0ZLEFDdhfFm1sqTYjboQ4hK6c8XVKhLVoORY/edit?usp=sharing", '_blank')
                    }}>Case Study</Button>
                        <Button onClick={(e)=> {
                        window.open("https://www.figma.com/proto/Sp7VnMref02iDJf80vWUzl/swarmageddon?node-id=228%3A1209&scaling=min-zoom&page-id=228%3A799&starting-point-node-id=228%3A1209", '_blank')
                    }}>Prototype</Button>
                    </Buttons>
                    <Image1 src={`https://imgur.com/Ms91qYS.png`} />
                </Center>
                <OverviewT>OVERVIEW</OverviewT>
                <Overview>
                    <TextGroup>
                        <SubText>Duration</SubText>
                        <TextCenter>March 2022</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Roles</SubText>
                        <TextCenter>Discovery, User Research, Wireframing, UI Design, Prototyping</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Tools Used</SubText>
                        <TextCenter>Figma</TextCenter>
                    </TextGroup>
                </Overview>
                <Body>
                    <SubHead>THE PROBLEM</SubHead>
                    <Text>
                        For this hackathon, our team wanted to address a problem we noticed in the creative and tech industry. 
                        The tech industry is a growing community consisting of students, freelancers, and employees taking on 
                        different fields. A certain branch of the tech industry that exercises “creative independence” are 
                        those in Design, Engineering, and Product. In this branch, projects play a significant role in upping 
                        one’s portfolio. <br/><br/>However, when projects require collaborative work, tech aspirants, 
                        especially those who are new to the industry or field, may not know who to reach out to. This is 
                        because they have limited resources, knowledge, and no community to reach out to. <br/><br/>
                        There are three possible causes of this problem:
                        <ul>
                            <li>Tech aspirants are able to find a community</li> 
                            <li>They have limited resources</li>
                            <li>They have limited knowledge of certain aspects of the project they are working on</li>
                        </ul>
                        To solve this accessibility gap, platforms such as Discord servers, Twitch communities, Twitter spaces, 
                        and the like have created communities where aspiring creative independents can network and scout for 
                        collaborators and projects. However, based on the User Research conducted by our team, this method is 
                        tedious and remains a hit-or-miss as communities become overwhelming and saturated. Topping off this 
                        accessibility gap is also the difficulty of recruiting passionate and compatible collaborators who remain 
                        committed to the project. Not only is it a question of how to foster a sense of community, but also of 
                        how to better find collaborators for side projects.
                    </Text>
                    <SubHead>THE PROCESS</SubHead>
                    <Text style={{ marginTop: '-14px' }}>
                        <strong>Objectives</strong>
                        <ul>
                            <li>Discover the tools and platforms tech aspirants use to find collaborators for side projects</li>
                            <li>Uncover challenges tech aspirants face when scouting for collaborators</li>
                            <li>Understand the criteria tech aspirants have when scouting for collaborators</li>
                        </ul>
                        Our target users are creative independents who are looking for projects to work on AND to up their portfolio: 
                        <ul>
                            <li>Students</li>
                            <li>Career shifters</li>
                            <li>New graduates</li>
                        </ul>
                        For research, we had an initial survey of individuals in the industries of design, engineering, and product 
                        who were interested in working on projects. Participants were chosen were invited to an hour interview in 
                        an attempt to understand how collaboration is scouted by tech aspirants and the challenges they face.​ <br/><br/>
                        This was the criteria for choosing who to interview:
                        <ul>
                            <li>Aged 18 to 30+</li>
                            <li>Is currently interested in the field under “creative independence” (under our scope, this includes design, 
                            product, and engineering)</li>
                            <li>Have looked or are looking for collaborators in side projects</li>
                        </ul>
                        The research found that individuals struggled to get experience working on collaborative projects 
                        without having to apply for actual jobs. Moreover, they faced challenges looking for collaborators 
                        who were willing to work with them without some sort of compensation. We concluded that there are 
                        many individuals who want to collaborate, but don't know where to find like-minded people. <br/><br/>
                        <Center><Image5 src={`https://imgur.com/BZxBEe3.png`} /></Center><br/>
                        Thus, we validated the necessity to develop a new collaborative freelancer app. From this, we worked 
                        on crafting user personas based on our research. <br/><br/>
                        <Center><Image6 src={`https://imgur.com/Eftcs2I.png`} /></Center><br/>
                        <Center><Image6 src={`https://imgur.com/Fi66ZAx.png`} /></Center><br/>
                        From there, we created a user flow to map out the user journey. After, we constructed wirefames 
                        based on our map then converted them into high-fidelity UI designs on Figma. Finally, we were able 
                        to convert some of the screens into interactive and functional prototypes.<br/><br/>
                        <Center><Image2 src={`https://i.imgur.com/vJgdbsH.png`} /></Center><br/><br/>
                    </Text>
                    <SubHead style={{ marginTop: '28px' }}>THE SOLUTION</SubHead>
                    <Text>
                    We created a website that connects tech aspirants who exercise “creative independence” to one another 
                    for collaborative work on projects they can add to their experiences and portfolios.<br/><br/>
                    This website also aims to build a peer-to-peer network or a “creative independent” community that fosters 
                    creativity and innovation by allowing them to brainstorm various projects to work on together. Our main goal 
                    is to be the gateway for their career through upskilling and collaboration.<br/><br/>
                    More specifically, streamline this process by curating a feed of recommended collaborators and projects based on the 
                    user’s criteria. Users are able to build their profile and discern whether the collaborators and projects from our 
                    recommended list are what they are looking for through our in-website messaging channel. Moreover, to foster an 
                    uplifting community, users are able to share their questions, stories, and progress reports and to hop on fireside 
                    chats in our community feed.<br/><br/>
                    Deviating from your typical freelance tool, Alliance does not connect aspiring creative independents 
                    to client work. Given that these aspiring creative independents have limited experience and projects, landing 
                    a role in a monetized project is a slim chance. Instead, *Alliance* brings together like-minded individuals 
                    that share the same vision and passion to collaborate, so that they may find avenues to innovate, grow, and thrive.
                    Our idea prioritizes connecting tech aspirants to one another before the project; essentially a 
                    matching service. It provides suggestions on who to collaborate with rather than simply looking at roles.<br/><br/>
                    <strong>User Requirements</strong><br/>
                    As a creative independent and user of the platform, they can:
                    <ul>
                        <li>Indicate their expertise (design, product, and engineering)</li>
                        <li>Customize their profile to include their skills, past experience, and showcase the projects they've 
                            worked on</li>
                        <li>Upload a project idea in the discovery tab explaining what their project's goals are and what type 
                            of people they're looking to collaborate with</li>
                        <li>Discover projects posted by other users and reach out to collaborate on them</li>
                    </ul>
                    </Text>
                    <SubHead>FEATURES</SubHead>
                    <Text>
                        Once you enter the website and click the "Get Started" button, it prompts a login screen which asks a 
                        series of questions to be added as information on your profile. <br/><br/>This includes what field 
                        you're in, your top interests based on your niche, your level of experience, your hard skills, and 
                        what kind of people you're looking for to collaborate on projects.
                    </Text>
                    <Center><Image3 src={`https://imgur.com/YRcNCjy.png`} /></Center>
                    <Text>
                        After registering your account, you will be led to the Discovery page where you can explore various
                        types of projects posted by other users and see what you want to work on. You will also be able to add
                        suggested users based on your field of interest to reach out and collaborate with.
                    </Text>
                    <Center><Image4 src={`https://imgur.com/Z1fOL9E.png`} /></Center>
                    <Text>
                        Viewing the project page, you will be able to see details about the project including its general description,
                        what type of creative independent and skills they are looking for, images of the the current project/inspirations
                        for it, who posted the project, and an "Apply Now" button to reach out to the user.
                    </Text>
                    <Center><Image7 src={`https://imgur.com/tJDXEL2.png`} /></Center>
                    <SubHead>TAKEAWAYS & IMPROVEMENTS</SubHead>
                    <Text>
                        Though our team was only given about 2 weeks to work on the project, we were able to consolidate our 
                        user research and convert wireframes into a high-fidelity prototype.<br/><br/>
                        Given more time, I would have completed designing all the screens that allow the user to display 
                        interest in working on a project and reach out to collaborate with other users. I would've added 
                        a chat feature allowing users that reach out to connect and chat with each other on the project 
                        they'll be working on. I would've also added a scheduling feature allowing users to schedule 
                        meetings with each other to discuss the project.
                    </Text>
                </Body>
            </Wrapper>
        )
    }
}


export default Alliance

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
  margin-top: -70px;

  @media (max-width: 450px) {
    width: 500px;
    margin-top: -40px;
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

