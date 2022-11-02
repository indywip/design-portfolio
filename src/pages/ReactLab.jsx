import React from 'react';
import styled from 'styled-components';

import useWindowDimensions from "../hooks/GetWindowDimension";

const ReactLab = () => {

    const width = useWindowDimensions().width;

    if (width > 768) {
        return (
            <Wrapper>
                <Header>REACT Lab</Header>
                <Center>
                    <Sub>
                        A website displaying research projects by a university lab on transportation systems.
                    </Sub>
                    <Buttons>
                        <Button onClick={(e)=> {
                        window.open("https://drive.google.com/file/d/1qa4s4ptGd2ag9Fu98J0OTTLIL6RqCFhK/view?usp=sharing", '_blank')
                        }}>Document</Button>
                        <Button onClick={(e)=> {
                        window.open("https://www.figma.com/file/aCHzVouRgnNUvfulNnN5xH/REACT-Lab-Website?node-id=5%3A59", '_blank')
                        }}>Mockups</Button>
                        <Button onClick={(e)=> {
                        window.open("https://reactlab.civil.ubc.ca/", '_blank')
                        }}>Live Site</Button>
                    </Buttons>
                    <Image1 src={`https://imgur.com/P6xXm0q.png`} alt="mockup of the homepage design"/>
                </Center>
                <OverviewT>OVERVIEW</OverviewT>
                <Overview>
                    <TextGroup>
                        <SubText>Duration</SubText>
                        <TextCenter>July - August 2022</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Roles</SubText>
                        <TextCenter>Discovery, User Research, UI Design, Prototyping</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Tools Used</SubText>
                        <TextCenter>Figma</TextCenter>
                    </TextGroup>
                </Overview>
                <Body>
                    <SubHead>THE PROBLEM</SubHead>
                    <Text>
                    As a UX/UI Designer student at the UBC Faculty of Applied Science, I was tasked with redesigning the existing website 
                    of a laboratory under the faculty with a front-end developer. The lab is a research group at UBC that focuses on transportation 
                    systems. I needed to rediscover the website by evaluating its target audiences, and updating its UI design to make it coherent with other 
                    faculty websites. Moreover, I needed to make the lab’s research display on the website more accessible to provide a platform for 
                    the lab to showcase their research.
                    </Text>
                    <SubHead>THE PROCESS</SubHead>
                    <Text>
                    Before speaking to the client/lab director, I did an in-depth inventory audit of all the pages on the website and the content on each page
                    to understand the website’s structure. I also did a competitive analysis and comparison of other faculty websites to understand
                    what I should be basing my design off of. <br/><br/>
                    After this, I ideated on the website's discovery to identify necessary questions to ask the client. This was to identify their 
                    prioritization of target audiences to figure out how to arrange content on the site.<br/><br/>
                    <strong>Discovery questions:</strong>
                    <ul>
                        <li>Define website objectives
                            <ul>
                                <li>What are the goals of this website/what information do you mainly want to
                                display?</li>
                                <li>Who are the target audience/s for this website?
                                    <ul>
                                        <li>Rank audience priorities; who is the main audience?</li>
                                        <li>What information do you want each user group to get from the website?</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>Scope - what information do you want the users to see first when they visit the
                        website/most important information?</li>
                        <li>Evaluating the current website:
                            <ul>
                                <li>Who is currently working on your website? have they run into any issues?</li>
                                <li>Anything you want to change from the existing website/anything you want to add?</li>
                            </ul>
                        </li>
                    </ul>
                    The client identified two main client groups: the general public and prospective lab researchers. 
                    The general public would be interested in viewing the website to learn more about the lab's research projects
                    while prospective members would visit the website to gauge their interest in joining the lab, as well as view
                    the instructions to apply to the lab. <br/><br/>
                    After conducting the user research interview with the client to identify the website objectives and
                    product requirements, I created a sitemap to re-organize the website based on target audience prioritization.
                    I identified the scope of the website to mainly focus on revamping the homepage as well as the research projects 
                    page.<br/><br/>
                    In-depth page structure and action items:
                    <ul>
                        <li>Homepage
                            <ul>
                                <li>Revamp the homepage to make it more visually appealing and coherent with other faculty websites
                                    <ul>
                                        <li>Use widescreen hero component</li>
                                        <li>Change navbar design to flat colors</li>
                                    </ul>
                                </li>
                                <li>Add preview cards of publications/research projects which users can click on to
                                “learn more” and go to the individual research pages</li>
                                <li>Add a call to action to invite prospective students to apply for the lab; links
                                directly to the Prospective Students page</li>
                                <li>Add the lab logo to the footer</li>
                                <li> Estimated time: 6-8 hours</li>
                            </ul>
                        </li>
                        <li>People Page
                            <ul>
                                <li>Convert the People page into posts instead of using the old plugin; each post
                                    would be a card for each person
                                    <ul>
                                        <li>The card would contain name, position, brief bio, and contact details</li>
                                    </ul>
                                </li>
                                <li>Clicking on the person should link to their personal website/email</li>
                                <li>Add a mini navbar to the side/the top to sort between people, current students, and
                                former students</li>
                                <li>Add a search bar to search for a particular person</li>
                                <li>Estimated time: 8-10 hours</li>
                            </ul>
                        </li>
                        <li>Research Projects Page
                            <ul>
                                <li>Separate projects according to topic or area
                                    <ul>
                                        <li>Add the project areas under the navbar dropdown and include the subprojects
                                        under them so users can easily access them</li>
                                    </ul>
                                </li>
                                <li>Add tags to filter according to the topics and only show projects under the topic</li>
                                <li>Maybe add a mini navbar at the bottom so once users are done reading they can
                                check out the other projects without scrolling up</li>
                                <li>Estimated time: 8-9 hours</li>
                            </ul>
                        </li>
                        <li>Publications
                            <ul>
                                <li>Maybe make each entry of the publications into posts instead of a group of HTML
                                text
                                    <ul>
                                        <li>This may be useful if the client is planning to create more detailed summaries
                                        for each project</li>
                                    </ul>
                                </li>
                                <li>estimated time: 2-3 hours</li>
                            </ul>
                        </li>
                        <li>Overall change the fonts and style of each website page to match the other APSC
                        websites; convert to the new site block editor as well</li>
                        <li>Check feasibility of features with the developer:
                            <ul>
                                <li>Implementing the tags and sorting feature for projects</li>
                                <li>Adding the mini navbars to People and Research Project pages</li>
                                <li>Converting projects and publications into cards</li>
                                <li>Design suggestions above are all doable and properly visible on mobile</li>
                                <li>The process of converting to the new block editor</li>
                            </ul>
                        </li>
                    </ul>
                    After establishing the page structure, I began to work on low-fidelity designs for both the 
                    desktop and mobile screens, which I was able to convert into high-fidelity mockups.<br/><br/>
                    After creating high-fidelity mockups, I presented the design to the client and received approval.
                    From there, I handed off the screens to the front-end developer and oversaw the implementation of the
                    entire website, guiding the developer to ensure the design was implemented properly.
                    </Text>
                    <SubHead>FEATURES</SubHead>
                    <Group gap={"85px"}>
                        <Content>
                            <Text style={{ textAlign: 'right' }}>
                            On the homepage, there are various tabs and external links to navigate across the different pages,
                            including the research projects pages, publications, lab members, and a call to action for prospective
                            students who want to join the page.
                            </Text>
                        </Content>
                        <Content>
                            <Image3 src={`https://imgur.com/RnhqljC.png`} />
                        </Content>
                    </Group>
                    <Group gap={"0px"}>
                        <Content>
                            <Image4 src={`https://imgur.com/MAaeBjA.png`} />
                        </Content>
                        <Content>
                            <Text>
                                There is also a live news feed that displays the latest news and updates from the Applied faculty.
                            </Text>
                        </Content>
                    </Group>
                    <Group gap={"85px"}>
                        <Content>
                            <Text style={{ textAlign: 'right' }}>
                                On the Research Projects page, users can view various research project cards and click on them to see the
                                entire research. They can also view the projects by topic and filter by the tags on the sidebar.
                                These topics are also present in the sidebar dropdown for easy access. <br/><br/>
                                This is similar with the Publications page as well.
                            </Text>
                        </Content>
                        <Content>
                            <Image7 src={`https://imgur.com/5lAM83W.png`} />
                        </Content>
                    </Group>
                    <Group gap={"0px"}>
                        <Content>
                            <Image4 src={`https://imgur.com/Vq9epOE.png`} />
                        </Content>
                        <Content>
                            <Text>
                                Under the People tab, users can view the lab members, position titles, headshots, and bio. Clicking on their profile
                                will link to their contact information.
                            </Text>
                        </Content>
                    </Group>
                    <Group gap={"85px"}>
                        <Content>
                            <Text style={{ textAlign: 'right' }}>
                                Finally, the Prospective Students page outlines the requirements necessary to apply for the lab, as well as the items
                                needed to be submitted in the application. It includes a call to action to send in their application.
                            </Text>
                        </Content>
                        <Content>
                            <Image7 src={`https://imgur.com/QVw6SUJ.png`} />
                        </Content>
                    </Group>
                    <SubHead>TAKEAWAYS & IMPROVEMENTS</SubHead>
                    <Text>
                        This project was done under the supervision of my boss in the span of around 3 weeks. I was able to successfully collaborate
                        with the developer to fully implement my designs live and ensure that the website was fully functional. This led to a fulfilling
                        project and a happy client with high satisfaction. <br/><br/>
                        Given more time, I would've liked to develop proper user personas and user stories to better understand the user's needs and
                        requirements. I would've also liked to conduct user testing to ensure that the website was easy to use and navigate. 
                    </Text>
                </Body>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <Header>REACT Lab</Header>
                <Center>
                    <Sub>
                        A website displaying research projects by a university lab on transportation systems.
                    </Sub>
                    <Buttons>
                        <Button onClick={(e)=> {
                        window.open("https://drive.google.com/file/d/1qa4s4ptGd2ag9Fu98J0OTTLIL6RqCFhK/view?usp=sharing", '_blank')
                        }}>Document</Button>
                        <Button onClick={(e)=> {
                        window.open("https://www.figma.com/file/aCHzVouRgnNUvfulNnN5xH/REACT-Lab-Website?node-id=5%3A59", '_blank')
                        }}>Mockups</Button>
                        <Button onClick={(e)=> {
                        window.open("https://reactlab.civil.ubc.ca/", '_blank')
                        }}>Live Site</Button>
                    </Buttons>
                    <Image1 src={`https://imgur.com/P6xXm0q.png`} />
                </Center>
                <OverviewT>OVERVIEW</OverviewT>
                <Overview>
                    <TextGroup>
                        <SubText>Duration</SubText>
                        <TextCenter>July - August 2022</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Roles</SubText>
                        <TextCenter>Discovery, User Research, UI Design, Prototyping</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Tools Used</SubText>
                        <TextCenter>Figma</TextCenter>
                    </TextGroup>
                </Overview>
                <Body>
                    <SubHead>THE PROBLEM</SubHead>
                    <Text>
                    As a UX/UI Designer student at the UBC Faculty of Applied Science, I was tasked with redesigning the existing website 
                    of a laboratory under the faculty with a front-end developer. The lab is a research group at UBC that focuses on transportation 
                    systems. I needed to rediscover the website by evaluating its target audiences, and updating its UI design to make it coherent with other 
                    faculty websites. Moreover, I needed to make the lab’s research display on the website more accessible to provide a platform for 
                    the lab to showcase their research.
                    </Text>
                    <SubHead>THE PROCESS</SubHead>
                    <Text>
                    Before speaking to the client/lab director, I did an in-depth inventory audit of all the pages on the website and the content on each page
                    to understand the website’s structure. I also did a competitive analysis and comparison of other faculty websites to understand
                    what I should be basing my design off of. <br/><br/>
                    After this, I ideated on the website's discovery to identify necessary questions to ask the client. This was to identify their 
                    prioritization of target audiences to figure out how to arrange content on the site.<br/><br/>
                    <strong>Discovery questions:</strong>
                    <ul>
                        <li>Define website objectives
                            <ul>
                                <li>What are the goals of this website/what information do you mainly want to
                                display?</li>
                                <li>Who are the target audience/s for this website?
                                    <ul>
                                        <li>Rank audience priorities; who is the main audience?</li>
                                        <li>What information do you want each user group to get from the website?</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>Scope - what information do you want the users to see first when they visit the
                        website/most important information?</li>
                        <li>Evaluating the current website:
                            <ul>
                                <li>Who is currently working on your website? have they run into any issues?</li>
                                <li>Anything you want to change from the existing website/anything you want to add?</li>
                            </ul>
                        </li>
                    </ul>
                    The client identified two main client groups: the general public and prospective lab researchers. 
                    The general public would be interested in viewing the website to learn more about the lab's research projects
                    while prospective members would visit the website to gauge their interest in joining the lab, as well as view
                    the instructions to apply to the lab. <br/><br/>
                    After conducting the user research interview with the client to identify the website objectives and
                    product requirements, I created a sitemap to re-organize the website based on target audience prioritization.
                    I identified the scope of the website to mainly focus on revamping the homepage as well as the research projects 
                    page.<br/><br/>
                    In-depth page structure and action items:
                    <ul>
                        <li>Homepage
                            <ul>
                                <li>Revamp the homepage to make it more visually appealing and coherent with other faculty websites
                                    <ul>
                                        <li>Use widescreen hero component</li>
                                        <li>Change navbar design to flat colors</li>
                                    </ul>
                                </li>
                                <li>Add preview cards of publications/research projects which users can click on to
                                “learn more” and go to the individual research pages</li>
                                <li>Add a call to action to invite prospective students to apply for the lab; links
                                directly to the Prospective Students page</li>
                                <li>Add the lab logo to the footer</li>
                                <li> Estimated time: 6-8 hours</li>
                            </ul>
                        </li>
                        <li>People Page
                            <ul>
                                <li>Convert the People page into posts instead of using the old plugin; each post
                                    would be a card for each person
                                    <ul>
                                        <li>The card would contain name, position, brief bio, and contact details</li>
                                    </ul>
                                </li>
                                <li>Clicking on the person should link to their personal website/email</li>
                                <li>Add a mini navbar to the side/the top to sort between people, current students, and
                                former students</li>
                                <li>Add a search bar to search for a particular person</li>
                                <li>Estimated time: 8-10 hours</li>
                            </ul>
                        </li>
                        <li>Research Projects Page
                            <ul>
                                <li>Separate projects according to topic or area
                                    <ul>
                                        <li>Add the project areas under the navbar dropdown and include the subprojects
                                        under them so users can easily access them</li>
                                    </ul>
                                </li>
                                <li>Add tags to filter according to the topics and only show projects under the topic</li>
                                <li>Maybe add a mini navbar at the bottom so once users are done reading they can
                                check out the other projects without scrolling up</li>
                                <li>Estimated time: 8-9 hours</li>
                            </ul>
                        </li>
                        <li>Publications
                            <ul>
                                <li>Maybe make each entry of the publications into posts instead of a group of HTML
                                text
                                    <ul>
                                        <li>This may be useful if the client is planning to create more detailed summaries
                                        for each project</li>
                                    </ul>
                                </li>
                                <li>estimated time: 2-3 hours</li>
                            </ul>
                        </li>
                        <li>Overall change the fonts and style of each website page to match the other APSC
                        websites; convert to the new site block editor as well</li>
                        <li>Check feasibility of features with the developer:
                            <ul>
                                <li>Implementing the tags and sorting feature for projects</li>
                                <li>Adding the mini navbars to People and Research Project pages</li>
                                <li>Converting projects and publications into cards</li>
                                <li>Design suggestions above are all doable and properly visible on mobile</li>
                                <li>The process of converting to the new block editor</li>
                            </ul>
                        </li>
                    </ul>
                    After establishing the page structure, I began to work on low-fidelity designs for both the 
                    desktop and mobile screens, which I was able to convert into high-fidelity mockups.<br/><br/>
                    After creating high-fidelity mockups, I presented the design to the client and received approval.
                    From there, I handed off the screens to the front-end developer and oversaw the implementation of the
                    entire website, guiding the developer to ensure the design was implemented properly.
                    </Text>
                    <SubHead>FEATURES</SubHead>
                    <Text>
                    On the homepage, there are various tabs and external links to navigate across the different pages,
                    including the research projects pages, publications, lab members, and a call to action for prospective
                    students who want to join the page.
                    </Text>
                    <Center><Image3 src={`https://imgur.com/RnhqljC.png`} /></Center>
                    <Text>
                        There is also a live news feed that displays the latest news and updates from the Applied faculty.
                    </Text>
                    <Center><Image4 src={`https://imgur.com/MAaeBjA.png`} /></Center>
                    <Text>
                        On the Research Projects page, users can view various research project cards and click on them to see the
                        entire research. They can also view the projects by topic and filter by the tags on the sidebar.
                        These topics are also present in the sidebar dropdown for easy access. <br/><br/>
                        This is similar with the Publications page as well.
                    </Text>
                    <Center><Image7 src={`https://imgur.com/5lAM83W.png`} /></Center>
                    <Text>
                        Under the People tab, users can view the lab members, position titles, headshots, and bio. Clicking on their profile
                        will link to their contact information.
                    </Text>
                    <Center><Image4 src={`https://imgur.com/Vq9epOE.png`} /></Center>
                    <Text>
                        Finally, the Prospective Students page outlines the requirements necessary to apply for the lab, as well as the items
                        needed to be submitted in the application. It includes a call to action to send in their application.
                    </Text>
                    <Center><Image7 src={`https://imgur.com/QVw6SUJ.png`} /></Center>
                    <SubHead>TAKEAWAYS & IMPROVEMENTS</SubHead>
                    <Text>
                        This project was done under the supervision of my boss in the span of around 3 weeks. I was able to successfully collaborate
                        with the developer to fully implement my designs live and ensure that the website was fully functional. This led to a fulfilling
                        project and a happy client with high satisfaction. <br/><br/>
                        Given more time, I would've liked to develop proper user personas and user stories to better understand the user's needs and
                        requirements. I would've also liked to conduct user testing to ensure that the website was easy to use and navigate. 
                    </Text>
                </Body>
            </Wrapper>
        )
    }
}


export default ReactLab

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

    @media (max-width: 450px) {
        gap: 18px;
    }
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
  width: 600px;
  margin-bottom: 40px;
  margin-top: 20px;

  @media (max-width: 450px) {
    width: 420px;
    margin-top: 0px;
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

