import React from 'react';
import styled from 'styled-components';

import useWindowDimensions from "../hooks/GetWindowDimension";

const OnlyProfs = () => {

    const width = useWindowDimensions().width;

    if (width > 768) {
        return (
            <Wrapper>
                <Header>onlyProfs</Header>
                <Center>
                    <Sub>
                        A platform for professors to earn passive income by uploading lecture materials and resources for 
                        students to freely access, done for a team hackathon.
                    </Sub>
                    <Buttons>
                        <Button onClick={(e)=> {
                        window.open("https://docs.google.com/document/d/1K1uUe6-pH2iws3Y_Kbv95YS0S4bGMFSq/edit?usp=sharing&ouid=101432396922735016332&rtpof=true&sd=true", '_blank')
                    }}>Project Specification</Button>
                        <Button onClick={(e)=> {
                        window.open("https://www.figma.com/proto/MXWxac4Q43397uaSghZyHb/onlyProfs?page-id=0%3A1&node-id=2%3A5&viewport=204%2C119%2C0.09&scaling=min-zoom&starting-point-node-id=102%3A1311&show-proto-sidebar=1", '_blank')
                    }}>Prototype</Button>
                    </Buttons>
                    <Image1 src={`https://imgur.com/H3z8OHK.png`} />
                </Center>
                <OverviewT>OVERVIEW</OverviewT>
                <Overview>
                    <TextGroup>
                        <SubText>Duration</SubText>
                        <TextCenter>January 2022</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Roles</SubText>
                        <TextCenter>Discovery, User Research, UI Design, Prototyping, Coding</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Tools Used</SubText>
                        <TextCenter>Figma, React, Firebase</TextCenter>
                    </TextGroup>
                </Overview>
                <Body>
                    <SubHead>THE PROBLEM</SubHead>
                    <Text>
                    The problem our team identified stems from the fact that university/high school students are too 
                    limited in their range of learning; they only obtain direct education from a certain teacher for 
                    a certain subject. What if the student would like to gain extra practice and knowledge to supplement 
                    their learning, or to find other courses taught by such an instructor? They want extra resources 
                    for their school classes, however, most prime sources are behind a paywall.<br/><br/>
                    On the other hand, for instructors, and universities, funding, and salaries have long been a pain point. 
                    Professors want to grow a platform to share their knowledge as teachers but have no incentive to give out 
                    their knowledge for free. 
                    </Text>
                    <SubHead>THE PROCESS</SubHead>
                    <Text>
                    We developed a problem statement:<br/>
                    <strong>WHO</strong> are our users?
                    <ul>
                        <li>Professors / Instructors / Educational Content Creators</li>
                        <li>Students (may be from high school up to the graduate level)</li>
                    </ul>
                    <strong>WHAT</strong> is the problem?
                    <ul>
                        <li>Professors want to grow a platform to share their knowledge and make extra passive income
                        from sharing their teaching</li>
                        <li>Students want extra resources for their school classes, but most sources are locked behind a paywall</li>
                    </ul>
                    <strong>WHY</strong> do we have this problem?
                    <ul>
                        <li>Because some teachers suck, or students need more resources and practice or a different form of 
                        explanation. Most educational content is also locked behind paywalls that students are unwilling to breach.</li>
                        </ul>
                    <strong>HOW</strong> can we help?
                    <ul>
                        <li>Provide a platform/community to connect professors with students</li>
                        <li>Professors can earn passive income through their content</li>
                        <li>Students can access free additional learning resources</li>
                    </ul>
                    After consolidating our problem statement and research, we developed a user flow which I turned into high-fidelity
                    mockups on Figma, then moved to coding the front-end of the website.
                    </Text>
                    <SubHead style={{ marginTop: '28px' }}>THE SOLUTION</SubHead>
                    <Text>
                    Our solution was to create a platform to connect students and professors. Our platform aims to 
                    help professors share the knowledge and content that they create, whether it be lectures, 
                    assignments (with solutions), or their research, and provide easy access for students to learn 
                    from those materials free of charge.<br/><br/>
                    Professors can upload materials and be able to earn based on the number of views or clicks 
                    they receive from their uploaded content. Meanwhile, students can access additional learning 
                    resources, completely, free of charge, from a range of their preferred instructors, along with 
                    accessing the other courses they have taught.<br/><br/>
                    The site would primarily make income off user clicks (Google advertisements), or make use of subscription
                    services like Coil. Students would also be notified if their subscribed professors have posted new 
                    educational content.
                    Working and developed examples of how we differ:
                    <ul>
                        <li>There are many existing platforms that offer similar content relative to what we are offering, 
                        e.g. Coursera/Udemy, Youtube, and Superprof.</li>
                        <li>We differ from Coursera/Udemy in that the lectures instructors upload need not be condensed 
                        into one instructive course, they’re able to upload individualized videos (and let students view 
                        such videos) based on the topic/subject that they are teaching, so our platform offers more flexibility.</li>
                        <li>We differ from Youtube in that our platform is streamlined for education, and drops the pretense of 
                        Youtube algorithms; this comes in that we will never “recommend” distracting videos to the students 
                        based on their history, and that all content offered will be free, professional, and educational. </li>
                        <li>And of course, unlike Superprof, which offers paid tutor services, we provide all of our materials 
                        asynchronously and completely for free. This really steps in on many college/university students’ 
                        lack of willingness to pay for non-essential expenses, which in theory would give our site higher 
                        popularity.</li>
                    </ul>
                    <strong>User Requirements</strong><br/>
                    As a professor, you can:
                    <ul>
                        <li>Upload your university credentials and information (verify with your university email)</li>
                        <li>Upload course content, including videos and other educational resources like readings or
                        lecture slides</li>
                        <li>Upload assignments with answer keys students can download</li>
                        <li>Earn profit based on the number of views and likes you get and advertisements</li>
                    </ul>
                    As a general instructor/educational content creator, you can:
                    <ul>
                        <li>Upload credentials and information, pending review to prevent troll users</li>
                        <li>Upload course content, including videos and other educational resources like readings or
                        lecture slides</li>
                        <li>Earn profit based on the number of views and likes you get and advertisements</li>
                    </ul>
                    As a student, you can:
                    <ul>
                        <li>Search for specific topics and watch/download educational resources on their chosen topic</li>
                        <li>Search for specific instructors/professors to learn from</li>
                        <li>Receive notifications once an instructor they're subscribed to uploads</li>
                        <li>Bookmark/save course modules/videos to be viewed later</li>
                        <li>View instructor profiles to see all the content they've uploaded, as well as access links 
                        to their other social medias</li>
                    </ul>
                    </Text>
                    <SubHead>FEATURES</SubHead>
                    <Group gap={"85px"}>
                        <Content>
                            <Text style={{ textAlign: 'right' }}>
                                Once you enter the website and click the "Sign Up" button, it prompts a login screen allowing
                                you to sign up either an student or instructor/professor. Signing up as a instructor will need 
                                the application to verify your credentials, then will allow you to upload course content while 
                                students can view the content.
                            </Text>
                        </Content>
                        <Content>
                            <Image3 src={`https://imgur.com/7cpURTE.png `} />
                        </Content>
                    </Group>
                    <Group gap={"0px"}>
                        <Content>
                            <Image4 src={`https://imgur.com/yL1XYa5.png`} />
                        </Content>
                        <Content>
                            <Text>
                                If logged in as an instructor, you will be permitted to upload course content. This includes
                                being able to upload a lecture video, as well as other educational resources like readings and
                                assignments. You can then add a video title and description of the uploaded content.
                            </Text>
                        </Content>
                    </Group>
                    <Group gap={"85px"}>
                        <Content>
                            <Text style={{ textAlign: 'right' }}>
                                You will also be able to edit your public profile. Your profile will display the university you teach
                                at, as well as your achievements on the platform. You can add a bio as well as links to your other social 
                                media. You can also view all your previously uploaded videos and edit them.
                            </Text>
                        </Content>
                        <Content>
                            <Image7 src={`https://imgur.com/kHt4dht.png`} />
                        </Content>
                    </Group>
                    <Group gap={"0px"}>
                        <Content>
                            <Image7 src={`https://imgur.com/obl4xL2.png`} />
                        </Content>
                        <Content>
                            <Text>
                                Alternatively, clicking the "Learn Now" button or signing up as a student will lead you to the
                                explore page. Here, you can search for specific topics, instructors, and professors working at
                                certain universities. Under the Topics tab, you can see various educational topics and the most
                                popular course videos under that topic. 
                            </Text>
                        </Content>
                    </Group>
                    <Group gap={"85px"}>
                        <Content>
                            <Text style={{ textAlign: 'right' }}>
                                Clicking on the "Universities" tab, you will be able to see the most popular professors who have
                                uploaded their content on the platform. This is useful especially if you are looking for particular
                                instructors who teach at your university.
                            </Text>
                        </Content>
                        <Content>
                            <Image4 src={`https://imgur.com/JdRVlSs.png`} />
                        </Content>
                    </Group>
                    <Group gap={"0px"}>
                        <Content>
                            <Image7 src={`https://imgur.com/NkMMLyw.png`} />
                        </Content>
                        <Content>
                            <Text>
                                Clicking on a video will allow you to watch the video, as well as view and download any additional 
                                resources attached by the instructor to the video. You will also be able to see the profile of the 
                                uploader, as well as read and write your own reviews on the video.
                            </Text>
                        </Content>
                    </Group>
                    <SubHead>TAKEAWAYS & IMPROVEMENTS</SubHead>
                    <Text>
                    In just 24 hours, our team was able to come up with hi-fidelity designs and a prototype based on user journeys 
                    and requirements. We were also able to code up a live demo showcasing the application's main functionality using 
                    React and hosted it on Google Firebase. <br/><br/>
                    Given more time, I would have worked on developing the frontend interface more on the live demo given that the current 
                    site wasn't able to be developed to look exactly like the prototypes I designed. I also would have wanted to design
                    the notifications users would received once a creator they subscribed to posts new content.
                    </Text>
                </Body>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <Header>onlyProfs</Header>
                <Center>
                    <Sub>
                        A platform for professors to earn passive income by uploading lecture materials and resources for 
                        students to freely access, done for a team hackathon.
                    </Sub>
                    <Buttons>
                        <Button onClick={(e)=> {
                        window.open("https://docs.google.com/document/d/1K1uUe6-pH2iws3Y_Kbv95YS0S4bGMFSq/edit?usp=sharing&ouid=101432396922735016332&rtpof=true&sd=true", '_blank')
                    }}>Project Specification</Button>
                        <Button onClick={(e)=> {
                        window.open("https://www.figma.com/proto/MXWxac4Q43397uaSghZyHb/onlyProfs?page-id=0%3A1&node-id=2%3A5&viewport=204%2C119%2C0.09&scaling=min-zoom&starting-point-node-id=102%3A1311&show-proto-sidebar=1", '_blank')
                    }}>Prototype</Button>
                    </Buttons>
                    <Image1 src={`https://imgur.com/H3z8OHK.png`} />
                </Center>
                <OverviewT>OVERVIEW</OverviewT>
                <Overview>
                    <TextGroup>
                        <SubText>Duration</SubText>
                        <TextCenter>January 2022</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Roles</SubText>
                        <TextCenter>Discovery, User Research, UI Design, Prototyping, Coding</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Tools Used</SubText>
                        <TextCenter>Figma, React, Firebase</TextCenter>
                    </TextGroup>
                </Overview>
                <Body>
                    <SubHead>THE PROBLEM</SubHead>
                    <Text>
                    The problem our team identified stems from the fact that university/high school students are too 
                    limited in their range of learning; they only obtain direct education from a certain teacher for 
                    a certain subject. What if the student would like to gain extra practice and knowledge to supplement 
                    their learning, or to find other courses taught by such an instructor? They want extra resources 
                    for their school classes, however, most prime sources are behind a paywall.<br/><br/>
                    On the other hand, for instructors, and universities, funding, and salaries have long been a pain point. 
                    Professors want to grow a platform to share their knowledge as teachers but have no incentive to give out 
                    their knowledge for free. 
                    </Text>
                    <SubHead>THE PROCESS</SubHead>
                    <Text>
                    We developed a problem statement:<br/>
                    <strong>WHO</strong> are our users?
                    <ul>
                        <li>Professors / Instructors / Educational Content Creators</li>
                        <li>Students (may be from high school up to the graduate level)</li>
                    </ul>
                    <strong>WHAT</strong> is the problem?
                    <ul>
                        <li>Professors want to grow a platform to share their knowledge and make extra passive income
                        from sharing their teaching</li>
                        <li>Students want extra resources for their school classes, but most sources are locked behind a paywall</li>
                    </ul>
                    <strong>WHY</strong> do we have this problem?
                    <ul>
                        <li>Because some teachers suck, or students need more resources and practice or a different form of 
                        explanation. Most educational content is also locked behind paywalls that students are unwilling to breach.</li>
                        </ul>
                    <strong>HOW</strong> can we help?
                    <ul>
                        <li>Provide a platform/community to connect professors with students</li>
                        <li>Professors can earn passive income through their content</li>
                        <li>Students can access free additional learning resources</li>
                    </ul>
                    After consolidating our problem statement and research, we developed a user flow which I turned into high-fidelity
                    mockups on Figma, then moved to coding the front-end of the website.
                    </Text>
                    <SubHead style={{ marginTop: '28px' }}>THE SOLUTION</SubHead>
                    <Text>
                    Our solution was to create a platform to connect students and professors. Our platform aims to 
                    help professors share the knowledge and content that they create, whether it be lectures, 
                    assignments (with solutions), or their research, and provide easy access for students to learn 
                    from those materials free of charge.<br/><br/>
                    Professors can upload materials and be able to earn based on the number of views or clicks 
                    they receive from their uploaded content. Meanwhile, students can access additional learning 
                    resources, completely, free of charge, from a range of their preferred instructors, along with 
                    accessing the other courses they have taught.<br/><br/>
                    The site would primarily make income off user clicks (Google advertisements), or make use of subscription
                    services like Coil. Students would also be notified if their subscribed professors have posted new 
                    educational content.
                    Working and developed examples of how we differ:
                    <ul>
                        <li>There are many existing platforms that offer similar content relative to what we are offering, 
                        e.g. Coursera/Udemy, Youtube, and Superprof.</li>
                        <li>We differ from Coursera/Udemy in that the lectures instructors upload need not be condensed 
                        into one instructive course, they’re able to upload individualized videos (and let students view 
                        such videos) based on the topic/subject that they are teaching, so our platform offers more flexibility.</li>
                        <li>We differ from Youtube in that our platform is streamlined for education, and drops the pretense of 
                        Youtube algorithms; this comes in that we will never “recommend” distracting videos to the students 
                        based on their history, and that all content offered will be free, professional, and educational. </li>
                        <li>And of course, unlike Superprof, which offers paid tutor services, we provide all of our materials 
                        asynchronously and completely for free. This really steps in on many college/university students’ 
                        lack of willingness to pay for non-essential expenses, which in theory would give our site higher 
                        popularity.</li>
                    </ul>
                    <strong>User Requirements</strong><br/>
                    As a professor, you can:
                    <ul>
                        <li>Upload your university credentials and information (verify with your university email)</li>
                        <li>Upload course content, including videos and other educational resources like readings or
                        lecture slides</li>
                        <li>Upload assignments with answer keys students can download</li>
                        <li>Earn profit based on the number of views and likes you get and advertisements</li>
                    </ul>
                    As a general instructor/educational content creator, you can:
                    <ul>
                        <li>Upload credentials and information, pending review to prevent troll users</li>
                        <li>Upload course content, including videos and other educational resources like readings or
                        lecture slides</li>
                        <li>Earn profit based on the number of views and likes you get and advertisements</li>
                    </ul>
                    As a student, you can:
                    <ul>
                        <li>Search for specific topics and watch/download educational resources on their chosen topic</li>
                        <li>Search for specific instructors/professors to learn from</li>
                        <li>Receive notifications once an instructor they're subscribed to uploads</li>
                        <li>Bookmark/save course modules/videos to be viewed later</li>
                        <li>View instructor profiles to see all the content they've uploaded, as well as access links 
                        to their other social medias</li>
                    </ul>
                    </Text>
                    <SubHead>FEATURES</SubHead>
                    <Text>
                        Once you enter the website and click the "Sign Up" button, it prompts a login screen allowing
                        you to sign up either an student or instructor/professor. Signing up as a instructor will need 
                        the application to verify your credentials, then will allow you to upload course content while 
                        students can view the content.
                    </Text>
                    <Center><Image3 src={`https://imgur.com/7cpURTE.png `} /></Center>
                    <Text>
                        If logged in as an instructor, you will be permitted to upload course content. This includes
                        being able to upload a lecture video, as well as other educational resources like readings and
                        assignments. You can then add a video title and description of the uploaded content.
                    </Text>
                    <Center><Image4 src={`https://imgur.com/yL1XYa5.png`} /></Center>
                    <Text>
                        You will also be able to edit your public profile. Your profile will display the university you teach
                        at, as well as your achievements on the platform. You can add a bio as well as links to your other social 
                        media. You can also view all your previously uploaded videos and edit them.
                    </Text>
                    <Center><Image7 src={`https://imgur.com/kHt4dht.png`} /></Center>
                    <Text>
                        Alternatively, clicking the "Learn Now" button or signing up as a student will lead you to the
                        explore page. Here, you can search for specific topics, instructors, and professors working at
                        certain universities. Under the Topics tab, you can see various educational topics and the most
                        popular course videos under that topic. 
                    </Text>
                    <Center><Image7 src={`https://imgur.com/obl4xL2.png`} /></Center>
                    <Text>
                        Clicking on the "Universities" tab, you will be able to see the most popular professors who have
                        uploaded their content on the platform. This is useful especially if you are looking for particular
                        instructors who teach at your university.
                    </Text>
                    <Center><Image4 src={`https://imgur.com/JdRVlSs.png`} /></Center>
                    <Text>
                        Clicking on a video will allow you to watch the video, as well as view and download any additional 
                        resources attached by the instructor to the video. You will also be able to see the profile of the 
                        uploader, as well as read and write your own reviews on the video.
                    </Text>
                    <Center><Image7 src={`https://imgur.com/NkMMLyw.png`} /></Center>
                    <SubHead>TAKEAWAYS & IMPROVEMENTS</SubHead>
                    <Text>
                    In just 24 hours, our team was able to come up with hi-fidelity designs and a prototype based on user journeys 
                    and requirements. We were also able to code up a live demo showcasing the application's main functionality using 
                    React and hosted it on Google Firebase. <br/><br/>
                    Given more time, I would have worked on developing the frontend interface more on the live demo given that the current 
                    site wasn't able to be developed to look exactly like the prototypes I designed. I also would have wanted to design
                    the notifications users would received once a creator they subscribed to posts new content.
                    </Text>
                </Body>
            </Wrapper>
        )
    }
}


export default OnlyProfs

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
    width: 400px; 
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
    width: 400px;
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

