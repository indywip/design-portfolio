import React from 'react';
import styled from 'styled-components';

import useWindowDimensions from "../hooks/GetWindowDimension";

const Alliance = () => {

    const width = useWindowDimensions().width;

    if (width > 768) {
        return (
            <Wrapper>
                <Header>Notion For PMs</Header>
                <Center>
                    <Sub>A repurposed Notion for a new market segment: the Product Management/agile market. Done for a 
                        PM Fellowship at university.
                    </Sub>
                    <Buttons>
                        <Button onClick={(e)=> {
                            window.open("https://docs.google.com/document/d/1-pDMA8o0ZLEFDdhfFm1sqTYjboQ4hK6c8XVKhLVoORY/edit?usp=sharing", '_blank')
                        }}>Case Study</Button>
                        <Button onClick={(e)=> {
                            window.open("https://www.figma.com/proto/erApMBQ0RXzor8rLUfIqwN/Custom-Notion-page-elements-(Community)?page-id=1%3A2&node-id=1%3A41&viewport=567%2C248%2C0.23&scaling=min-zoom&starting-point-node-id=1%3A41", '_blank')
                        }}>Prototype</Button>
                    </Buttons>
                    <Image1 src={`https://i.imgur.com/QvEctLa.png`} alt="mockup of the homepage design"/>
                </Center>
                <OverviewT>OVERVIEW</OverviewT>
                <Overview>
                    <TextGroup>
                        <SubText>Duration</SubText>
                        <TextCenter>October-November 2022</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Roles</SubText>
                        <TextCenter>Discovery, User and Market Research, Competitive Analysis, UI Design, Prototyping</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Tools Used</SubText>
                        <TextCenter>Figma</TextCenter>
                    </TextGroup>
                </Overview>
                <Body>
                    <SubHead>THE PROBLEM</SubHead>
                    <Text>
                        For this project, the goal was to re-purpose an existing product for a new market segment. I decided to work on
                        Notion, a project management, note-taking tool aimed at helping users collaborate and increase productivity. When
                        thinking about the market segment I wanted to target, I realized that there Notion was a popular app being used in
                        the product design/management and agile market due to versatility and features like Kanban boards, but lacked some of 
                        the aspects that are necessary to build products.<br/><br/>
                        Notion lacks any whiteboard or freeform feature that allows PMs to sketch out roadmaps, ideate on user designs, or 
                        create user journeys or flows. Despite majority of their product research being hosted on their Notion workspace, they 
                        are forced to rely on external third-party tools like Miro or Figma. This shows that Notion is potentially losing out on
                        capitalizing on the market segment that they are already a part of, or even gaining new potential users.
                    </Text>
                    <SubHead>THE PROCESS</SubHead>
                    <Text style={{ marginTop: '-20px' }}>
                        <strong style={{ fontSize: '22px'}}>1) Understanding Notion</strong><br/><br/>
                        To investigate more into Notion's relationship with the PM market, I conducted research in order to understand their company
                        goals and targets, as well as answer key questions.<br/><br/>
                        <i>What do you think the company's vision is for its product?</i><br/>
                        Notion’s mission is to make toolmaking ubiquitous, allowing all users regardless of profession and location to feel empowered 
                        to customize the software they use every day to their exact needs. It aims to increase user productivity by blending their 
                        workflows into an all-in-one workspace. It wants to be versatile in its many features, being able to use various components 
                        while remaining completely customizable.<br/><br/>
                        <i>What do you think the product's current goal/trajectory is?</i><br/>
                        Notion’s current goal/trajectory is to continue expanding its product features (ex. template library) to appeal to a larger 
                        audience, instead of students and project management professionals. To do this, Notion is integrating third-party tools on the 
                        platform, developing more customizable templates, and allowing users to host templates on a webpage.<br/><br/>
                        <i>What is the value that the product provides for its current segment(s)/market(s)?</i><br/>
                        Notion is designed to help individuals and members of a company or organization to coordinate deadlines, objectives, and assignments 
                        for the sake of efficiency and productivity.<br/><br/>
                        <strong>Current Revenue Model/Stream:</strong><br/>
                        Notion is a SaaS that uses a freemium business model and earns money from subscriptions, mostly from team/enterprise subscriptions 
                        that are commonly used in the workplace. Most of their basic functionalities are free but more advanced features are placed behind a 
                        subscription paywall. Personal Pro accounts cost $5 per month, Team plans cost $10 per member per month, and Enterprise plans cost 
                        $25 per member per month. This is all it has revealed regarding its revenue model as it is a private company that has not released 
                        much information to the public.<br/><br/>
                        <strong style={{ fontSize: '22px'}}>2) Discovering New Markets</strong><br/><br/>
                        <strong>Potential Markets/Segments:</strong>
                        <ul>
                        <li>Product managers/developers and other technical professions </li>
                        <li>Agile workplace environments</li>
                        <li>Graphic and product designers</li>
                        </ul>
                        <strong>Market Opportunity Analysis: </strong><br/>
                        The market we want to disrupt is our product developers and workplaces that follow the agile sprint methodology. These usually 
                        contain users that want to build out product roadmaps and use whiteboards to collaborate with others while mapping out their sprints.
                        <br/><br/>
                        <strong>Opportunities: </strong>
                        <ul>
                            <li>The all-in-one application will lead to market share dominance</li>
                            <li>Eliminate the need to use multiple tools (ex. Figma, Miro, etc.), improving efficiency</li>
                            <li>Eliminate extra costs needed to subscribe to multiple platforms</li>
                        </ul>
                        <strong>Customers:</strong>
                        <ul>
                            <li>Want to use modern, efficient software to support their work projects</li>
                            <li>Want to use the least number of softwares as possible, want an all-in-one platform that includes all features</li>
                            <li>Need specific templates or tools such as ERD Diagram Mapping tools, customer journey mapping tools, freeform whiteboard 
                                spaces, digital sticky notes, etc. </li>
                        </ul>
                        <strong>External/Internal Factors:</strong>
                        <ul>
                        <li><i>Social</i> - Positive trends in digital transformation and using software  to increase productivity, collaboration, and organization</li>
                        <li><i>Technological</i> - Positive trends for online collaborations, hybrid/remote working models, and innovations in the tech industry</li>
                        <li><i>Environmental</i> - More environmentally conscious in terms of saving paper since they can now whiteboard digitally</li>
                        <li><i>Economic</i> - Economic downturns such as recessions, leading to tech industry layoffs</li>
                        <li><i>Political</i> - N/A</li>
                        </ul>
                        <strong>Key Competitors:</strong>
                        <ul>
                            <li>Miro</li>
                            <li>Milanote</li>
                            <li>Asana</li>
                            <li>Evernote</li>
                            <li>Atlassian (Jira and Confluence)</li>
                            <li>Obsidian</li>
                        </ul>
                        <strong style={{ fontSize: '22px'}}>3) Setting Objectives & Metrics (OKRs)</strong><br/><br/>
                        <strong>Objective (O):</strong><br/>
                        Increase the market share of the workspace collaboration software market from 75.38% in 2022 to 80-85% by 2025. 
                        <br/><br/>
                        <strong>Key Results (KRs): </strong>
                        <ul>
                        <li>Increase the number of new customers in the targeted customer segment by 10% YoY</li>
                        <li>Increase the number of paid subscriptions to team/enterprise plans to access this feature by 20%</li>
                        <li>Expand the geographical reach of Notion, increasing presence in countries and regions where Notion is less 
                            known and used </li>
                        <li>Increase the diversity of companies/organizations that use Notion</li>
                        </ul>
                        <strong style={{ fontSize: '22px'}}>4) Competitive Landscape: Direct/Indirect Analysis</strong><br/><br/>
                        From the key competitors I identifed, I came up with a feature analysis to see how Notion compares to its competitors,
                        both direct and indirect.<br/><br/>
                        <Comp>
                            <tr>
                                <HeadCell>Competitor</HeadCell>
                                <HeadCell>Category</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Milanote</Cell>
                                <Cell>Indirect</Cell>
                                <Cell>A popular project management app with a visual focus. Includes whiteboard and drag-and-drop features</Cell>
                            </tr>
                            <tr>
                                <Cell>Miro</Cell>
                                <Cell>Indirect</Cell>
                                <Cell>Popular online project collaboration app and whiteboard platform. Includes several app integration options </Cell>
                            </tr>
                            <tr>
                                <Cell>Evernote</Cell>
                                <Cell>Direct</Cell>
                                <Cell>Note-taking and task management application for teams and individuals allowing users to work everywhere (includes offline sync options)</Cell>
                            </tr>
                            <tr>
                                <Cell>Obsidian</Cell>
                                <Cell>Direct</Cell>
                                <Cell>Notetaking app that relies on markdown files. Has a graph feature and custom CSS feature</Cell>
                            </tr>
                            <tr>
                                <Cell>Atlassian</Cell>
                                <Cell>Direct</Cell>
                                <Cell>2 apps used for project management with a focus on agile development. Includes collaboration features and a Kanban framework</Cell>
                            </tr>
                            <tr>
                                <Cell>Asana</Cell>
                                <Cell>Direct</Cell>
                                <Cell>Work and project management team collaboration platform. Includes list features which can be converted into timeline work maps and boards</Cell>
                            </tr>
                        </Comp><br/><br/>
                        <Center><strong style={{ fontSize: '22px'}}>Milanote</strong></Center>
                        <Comp>
                            <tr>
                                <HeadCell>Product Feature</HeadCell>
                                <HeadCell>Similar/Unique</HeadCell>
                                <HeadCell>Strength/Weakness</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Whiteboards</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Allows for a visual whiteboard with a drag-and-drop to include different elements; can be used to create roadmaps </Cell>
                            </tr>
                            <tr>
                                <Cell>Drawing tools</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Freely able to draw and add shapes to a whiteboard</Cell>
                            </tr>
                            <tr>
                                <Cell>Documentation</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Cannot create documents with notes; you can only add individual sticky notes to an existing board</Cell>
                            </tr>
                            <tr>
                                <Cell>To-do list</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>You can only add individual to-do lists to an existing board; no ability to create a Kanban board</Cell>
                            </tr>
                        </Comp><br/><br/>
                        <Center><strong style={{ fontSize: '22px'}}>Miro</strong></Center>
                        <Comp>
                            <tr>
                                <HeadCell>Product Feature</HeadCell>
                                <HeadCell>Similar/Unique</HeadCell>
                                <HeadCell>Strength/Weakness</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Whiteboards</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Allows various drag-and-drop elements to draw out roadmaps and graphs</Cell>
                            </tr>
                            <tr>
                                <Cell>Integration</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Lacks sufficient integration with a wider ecosystem for external third-party apps</Cell>
                            </tr>
                            <tr>
                                <Cell>Documentation</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Cannot create big text documents for information storing</Cell>
                            </tr>
                            <tr>
                                <Cell>Collaboration</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Allows for remote, live video chatting or audio calling when teams are working on a board together</Cell>
                            </tr>
                        </Comp><br/>
                        <Center><strong style={{ fontSize: '22px'}}>Evernote</strong></Center>
                        <Comp>
                            <tr>
                                <HeadCell>Product Feature</HeadCell>
                                <HeadCell>Similar/Unique</HeadCell>
                                <HeadCell>Strength/Weakness</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Documentation</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Has a web clipper feature that allows users to clip web pages, articles, or PDFs and save them directly to an Evernote page</Cell>
                            </tr>
                            <tr>
                                <Cell>Kanban boards</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Lacks a customizable kanban board to add tasks and view to-do lists</Cell>
                            </tr>
                            <tr>
                                <Cell>Audio notes</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Allows users to record and save audio notes directly onto the app</Cell>
                            </tr>
                            <tr>
                                <Cell>Storage</Cell>
                                <Cell>Similar</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Less storage capacity to upload files</Cell>
                            </tr>
                        </Comp><br/>
                        <Center><strong style={{ fontSize: '22px'}}>Obsidian</strong></Center>
                        <Comp>
                            <tr>
                                <HeadCell>Product Feature</HeadCell>
                                <HeadCell>Similar/Unique</HeadCell>
                                <HeadCell>Strength/Weakness</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Documentation</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Utilizes markdown language which allows for more customized document formatting</Cell>
                            </tr>
                            <tr>
                                <Cell>Syncing</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Stores files locally instead of the cloud, so is not available to sync across devices</Cell>
                            </tr>
                            <tr>
                                <Cell>Graphs</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Has an interactive knowledge graph structure that connects your notes with bi-directional linking, allowing users to view their ideas visually</Cell>
                            </tr>
                            <tr>
                                <Cell>Collaboration</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Does not allow native collaboration which is a detriment to business teams</Cell>
                            </tr>
                        </Comp><br/>
                        <Center><strong style={{ fontSize: '22px'}}>Atlassian</strong></Center>
                        <Comp>
                            <tr>
                                <HeadCell>Product Feature</HeadCell>
                                <HeadCell>Similar/Unique</HeadCell>
                                <HeadCell>Strength/Weakness</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Kanban boards</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Allows you to make boards based on sprints and close them after a sprint is done</Cell>
                            </tr>
                            <tr>
                                <Cell>Integrations</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Offers more third-party integrations with external apps and plugins</Cell>
                            </tr>
                            <tr>
                                <Cell>Documentation</Cell>
                                <Cell>Similar</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Because the app is more focused on being a documentation tool, there is less options to add different kinds of components and less flexibility</Cell>
                            </tr>
                            <tr>
                                <Cell>Announcements</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>For team spaces, Atlassian allows team leaders to post announcement banners to pop up on all members' screens</Cell>
                            </tr>
                        </Comp><br/>
                        <Center><strong style={{ fontSize: '22px'}}>Asana</strong></Center>
                        <Comp>
                            <tr>
                                <HeadCell>Product Feature</HeadCell>
                                <HeadCell>Similar/Unique</HeadCell>
                                <HeadCell>Strength/Weakness</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Information infrastructure</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Relies more on external third-party integrations with Google Drive and Microsoft 365 to store files and documents</Cell>
                            </tr>
                            <tr>
                                <Cell>Collaboration</Cell>
                                <Cell>Similar</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Does not allow for real-time collaboration and edits between multiple members</Cell>
                            </tr>
                            <tr>
                                <Cell>Features</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Simple and more limited in terms of features, components, and configuration options</Cell>
                            </tr>
                            <tr>
                                <Cell>User interface</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>More user-friendly interface and less cluttered with information, making it less overwhelming</Cell>
                            </tr>
                        </Comp><br/>
                        <strong>Charting the Features</strong><br/><br/>
                        <Center><Image5 src={`https://i.imgur.com/9QhK5Zp.png`} /></Center><br/>
                        <strong style={{ fontSize: '22px'}}>5) PESTEL Analysis:</strong><br/><br/>
                        <strong>Political</strong>
                        <ul>
                            <li>The Canadian government is looking to strengthen privacy protection and trust in the digital economy by introducing new laws to protect its citizens 
                                in 2022 and beyond.</li>
                            <li>Tightening privacy laws can impact data privacy rules in Notion and the corporate data management process as Notion collects user data from individuals 
                                and corporations using the software. </li>
                        </ul>
                        <strong>Economic</strong>
                        <ul>
                            <li>The predicted recession may impact the demand for our product as more tech companies experience hiring freezes, staffing cuts, and layoffs. </li>
                            <li>The high inflation rates may impact the company’s decision to invest in R & D and innovation for new products such as Notion for PM, which 
                                will require additional capital and support.</li>
                        </ul>
                        <strong>Social</strong>
                        <ul>
                            <li>More companies are looking to streamline their digital operations in light of the “new normal”, where many employees are spending a part of 
                                their time working from home and are adopting a “hybrid” work format. This increases the need to develop and/or improve tools to support remote 
                                cross-team collaboration.</li>
                            <li>Many professionals prefer to host all operations on the fewest number of platforms needed for the project, and want to avoid having to have 
                                multiple programs or products open at once. Too many platforms decrease productivity and efficiency. </li>
                            <li>The tech industry is a rapidly growing market, attracting many to roles in technology due to its flexibility, lucrative pay, and innovative 
                                nature of the work environment. The increase in talent also increases the demand for technological tools to support their work. </li>
                        </ul>
                        <strong>Technological</strong>
                        <ul>
                            <li>The U.S. Tech Industry is expected to grow by 6.7% in 2022. This increases the awareness and demand for technology across multiple markets, 
                                including task management/project management software solutions such as Notion.</li>
                            <li>Digital Transformation has been a trending topic in the corporate world, with many companies adopting more digital solutions to improve 
                                efficiency and modernize their operations. Digital Transformation requires companies to use tech as a solution to automate and support 
                                manual operations, thus, increasing the demand for new products that support this.</li>
                        </ul>
                        <strong>Legal</strong>
                        <ul>
                            <li>As a SaaS company, Notion must be compliant with the respective countries’ Privacy Acts and laws. These acts regulate how commercial companies 
                                either automatically collect and process personal data, or manually collect personal data. Therefore, it is important to ensure that Notion 
                                for PM follows the respective laws.</li>
                            <li>In Canada, companies must follow PIPEDA, a Canadian law relating to data privacy.</li>
                            <li>The U.S equivalent of PIPEDA is HIPAA.</li>
                            <li>Intellectual property (IP) is one of the most valuable assets of SaaS companies like Notion. For this new product, Notion for PM it is important 
                                to file patents and obtain copyright registration to protect its unique idea.</li>
                        </ul>
                        <strong style={{ fontSize: '22px'}}>6) Market Sizing (North America):</strong>
                        <ul>
                            <li>The average cost for a PM software plan is $16.88 per month per user</li>
                            <li>The average user will use 5 tools (5*16.88 = $84.40/user)</li>
                        </ul>
                        <strong>The Total Addressable Market (TAM)</strong><br/>
                        There are 7.3 million people employed by the tech industry in the US.<br/><br/>
                        <strong>Serviceable Addressable Market (SAM)</strong><br/>
                        Our main target market for Notion for PM will be (1) PMs, (2) UX Designers, and (3) PMMs, as all of the following roles are involved in PM.
                        <ul>
                            <li>A 2022 consensus concluded that there are:
                                <ul>
                                    <li>41,370 product managers (PMs)</li>
                                    <li>10,178 user experience designers</li>
                                    <li>44,124 product marketing managers (PMMs)</li>
                                </ul>
                            </li>
                            <li>Total: <strong>95,672</strong></li>
                            <li>95, 672 * 84.4 = $8,074,716.80 Annual</li>
                            <li>600 companies reportedly use Notion.</li>
                            <li>The proposed goal is to increase the number of tech companies that interact with Notion to 1000. </li>
                            <li>Assuming a company will have on average: 
                                <ul>
                                    <li>6 PMs</li>
                                    <li>10 UX Designers</li>
                                    <li>9 PMMs</li>
                                    <li>Total: 25 users/company</li>
                                    <li>Total Cost for PM Software per company: $2,110</li>
                                </ul>
                            </li>
                            <li>1,000 companies * $2110 annual PM Software spend = <strong>$2.11M/year</strong></li>
                        </ul>
                        <strong>Service Attainable Market (SOM)</strong>
                        <ul>
                            <li>Aim to achieve an 80% user retention rate</li>
                            <li>$2.11M * 0.8 = <strong>$1.69M/year</strong></li>
                        </ul>
                        <strong style={{ fontSize: '22px'}}>7) User Personas:</strong><br/><br/>
                        After identifying my target market and the main stakeholders involved, I created 2 user personas,
                        a company Product Manager and an independent UX Designer, to better understand our target audience 
                        and their needs.<br/><br/>
                        <Center><Image6 src={`https://i.imgur.com/0vKC6MF.png`} /></Center><br/>
                        <Center><Image6 src={`https://i.imgur.com/1W1Splo.png`} /></Center><br/>
                    </Text>
                    <SubHead style={{ marginTop: '28px' }}>THE SOLUTION</SubHead>
                    <Text>
                    <strong style={{ fontSize: '22px'}}>1) Strategy:</strong><br/><br/>
                    <strong>Solution Ideation</strong>
                    <ul>
                        <li>Disrupt the PM/agile market by including product and mapping-focused features on Notion</li>
                        <li>Add a freeform whiteboard component onto Notion that users can add anywhere; users will be able 
                            to interact with this component, add items like text/shapes, and draw on the whiteboard</li>
                        <li>Multiple users on one workspace will be able to collaborate live on the whiteboard and see 
                            changes/new items being added in real-time</li>
                        <li>Allow users to freely draw/add shapes anywhere on their workspace and include drawing tools 
                            in the navigation bar</li>
                        <li>Allow users to add digital sticky notes anywhere on their workspace and add text to them</li>
                    </ul>
                    <strong>Feature Prioritization</strong><br/><br/>
                    <Center><Image5 src={`https://i.imgur.com/9i5SjnU.png`} /></Center><br/>
                    <strong>Value Proposition</strong><br/>
                    Adding product journey-focused features like whiteboard components and creative tools will allow us to
                    achieve market dominance in the PM industry, and gain profit from adding new lucrative features to Notion's 
                    existing subscription models.<br/><br/>
                    <strong style={{ fontSize: '22px'}}>2) Go To Market:</strong><br/><br/>
                    <strong>Pricing and Sales Strategy</strong><br/>
                    2 main versions: Lite and Professional
                    <ol>
                        <li>Freemium (Lite Version)
                            <ul>
                                <li>The free “Lite” version of the product is suitable for small teams, independent product designers, 
                                    early-stage start-ups, and student groups.</li>
                                <li>Limited # of 5 collaborators/users</li>
                                <li>Access a select # of basic frameworks, templates, and PM/PMM/UX Designer Tools (Ex. Kanban Board, 
                                    Project Timeline, Product Tracking template, etc.)</li>
                                <li>Excludes Premium features only available for paid subscribers in Notion for PM Professional</li>
                                <li>May include ads</li>
                                <li>Basic Package FREE of cost</li>
                            </ul>
                        </li>
                        <li>Professional (Full, Paid Version) 
                            <ul>
                                <li>The professional “Premium” version of the product is suitable for private and public companies, 
                                    more prominent start-ups, classrooms/educational settings, and cross-functional teams.</li> 
                                <li>Unlimited # of collaborators/users</li>
                                <li>Access to all frameworks with the option to tailor each tool for the company or team subscribing 
                                    to the premium product</li>
                                <li>Include full whiteboard component feature with multiple tools and drawing items</li>
                                <li>Access On-demand, 24/7 Live Support</li>
                                <li>Premium Package Priced at $15/month, per user </li>
                            </ul>
                        </li>
                    </ol>
                    Notion’s Technical Sales Team will contact and market this product to companies—primarily in the software and technology 
                    space, start-ups, and educational institutions that teach courses about PM/PMM/UX, schools, and student groups that focus 
                    on technology and its related disciplines. This will help create awareness of this new product. Existing users of Notion 
                    will also receive emails and updates about the new product and will be provided an incentive to subscribe to it, including 
                    a 30-day free trial.<br/><br/>
                    <strong>Marketing Strategy</strong><br/>
                    <ol>
                        <li>Corporate Events and Conferences
                            <ul>
                                <li>Notion will introduce this product at  “Block by Block” 2023, Notion’s annual virtual conference that attracts 
                                    professionals working in the tech and software industries around the world. </li>
                                <li>Notion will also introduce and introduce this product at other tech conferences that Notion sponsors. </li>
                            </ul>
                        </li>
                        <li>Collaborations with Influencers and Content Creators (Ex. Youtube, Tiktok, Instagram)
                            <ul>
                                <li>Many content creators, primarily young professionals, create videos detailing their lives working in the tech 
                                    industry. For example, there are many videos titled “How to Break Into PM”, or “Day in the Life as a UI/UX Designer”. 
                                    Notion will sponsor these content creators to bring awareness of the product to a larger audience and receive feedback 
                                    from real users in the industry. </li>
                            </ul>
                        </li>
                        <li>Partnerships with Educational Platforms for PM (Ex. Product School, Exponent)
                            <ul>
                                <li>Organizations such as Product School and Exponent offer educational material, study tools, and courses for aspiring 
                                    PMs and PMMs. Notion can partner with companies offering PM training to market their product, and be the first platform 
                                    new users are exposed to. This will build brand loyalty and help Notion establish itself in the productivity management 
                                    market with a focus on PM.</li>
                                <li>List companies offering PM Training Material or Courses: 
                                    <ul>
                                        <li>Exponent</li>
                                        <li>Product School</li>
                                        <li>Product Alliance</li>
                                        <li>BrainStation</li>
                                        <li>Pragmatic Institute</li>
                                        <li>Coursera</li>
                                        <li>Universities (Ex. UBC Sauder Continuing Education, Harvard Extention School, etc.)</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <strong>Metrics</strong>
                    <ul>
                        <li>Sales Efficiency</li>
                        <li>Market Share in the Productivity Management Software Industry</li>
                        <li>Customer Acquisition Cost (CAC)</li>
                        <li>Annual Recurring Revenue (ARR)</li>
                        <li>Monthly Recurring Revenue (MRR)</li>
                        <li>Net Promoter Score (NPS)</li>
                        <li>Churn Rate</li>
                        <li>Customer Retention Rate</li>
                        <li>New users (WoW / MoM / YoY)</li>
                    </ul>
                    <strong style={{ fontSize: '22px'}}>3) Design:</strong><br/><br/>
                    <strong>User Requirements</strong><br/>
                    As user of the platform subscribed to the Professional plan, they can:
                    <ul>
                        <li>Add a new whiteboard component, listed among all the other Notion components when you press the "+" button</li>
                        <li>Once users add the whiteboard component, it will be embedded in their workspace and they are free to move and 
                            resize it just like any other embedded element, as well as view its preview</li>
                        <li>They can go full-screen mode on the whiteboard where they will be able to freely edit and add elements to the 
                            board</li>
                        <li>They can interact with the tools bar at the bottom, where they will be able to add text, shapes, arrows, 
                            sticky notes, and draw, as well as add comments to other collaborators' edits</li>
                        <li>Then can see other workspace users who are currently on the board and watch them edit the board in real-time</li>
                    </ul>
                    </Text>
                    <SubHead>FEATURES</SubHead>
                    <Group gap={"85px"}>
                        <Content>
                            <Text style={{ textAlign: 'right' }}>
                                On your workspace, you can click on the "+" button to go through all of the available components you can add to your
                                workspace. Clicking on the whiteboard component will allow you to add it to the space and view a preview of its content.
                                You will be able to resize and move it around just like any other embedded content.
                            </Text>
                        </Content>
                        <Content>
                            <Image3 src={`https://i.imgur.com/ZWpRQLN.png`} />
                        </Content>
                    </Group>
                    <Group gap={"0px"}>
                        <Content>
                            <Image4 src={`https://i.imgur.com/2nXdoL2.png`} />
                        </Content>
                        <Content>
                            <Text>
                                On the top right, you can click on the full-screen mode in order to access the tool bar at the bottom and edit its current 
                                content. You will be able to add, edit, and delete elements as specified, as well as draw freely on the board.
                            </Text>
                        </Content>
                    </Group>
                    <Group gap={"85px"}>
                        <Content>
                            <Text style={{ textAlign: 'right' }}>
                                When collaborating with other users on the workspace, they can go on the board and you can quickly see who is currently on the board 
                                in the top right. You will also be able to watch them make edits live from their cursor.
                            </Text>
                        </Content>
                        <Content>
                            <Image7 src={`https://i.imgur.com/WKmGc1c.png`} />
                        </Content>
                    </Group>
                    <SubHead>TAKEAWAYS & IMPROVEMENTS</SubHead>
                    <Text>
                        <strong>Risks</strong><br/>
                        Possible risks of the solution and how I might mitigate them:
                        <ol>
                            <li>Customer Loyalty to Competitors <br/>
                            Professionals who are already accustomed to a certain software may not want to suddenly switch to Notion for PM for their work. 
                            Adopting a new work process and platform will require training and time, and not everyone will be willing to invest the time 
                            and resources into it. Therefore, implementing new software will need to be done gradually which will lead to more time 
                            required for the product to demonstrate profitability. </li>
                            <li>Data Transfer <br/>
                            Data from previous work/projects will need to be transferred to Notion for PM. If Notion for PM does not integrate other software 
                            into their own, a seamless data transfer process will need to be created for teams to not lose any previous work. </li>
                            <li>Excessive Number of Features <br/>
                            Existing users have expressed that one of the downsides of Notion is that sometimes users are overwhelmed with the number of 
                            features the platform offers. Therefore, it is important for the team developing Notion for PM to perform the required feature 
                            prioritization steps to mitigate this risk.</li>
                            <li>Copyright <br/>
                            Certain frameworks or tools used in PM/PMM/UX design may be independently developed by other companies. To avoid copyright claims, 
                            Notion must be cautious in the tools they include in Notion for PM and purchase user rights if they choose to outsource.</li>
                        </ol>
                        <strong>Next Steps</strong><br/>
                        There may be some copyright issues when creating Notion’s version of PM software, especially if frameworks are independently developed by 
                        competitors. Notion will need to possibly purchase rights to use its tools on its own platform, which will lengthen the time needed to 
                        release the product and incur additional costs. An alternate solution for this risk would be to acquire smaller companies that develop 
                        PM tools and frameworks. Therefore, it is important to perform the necessary due diligence before entering a new market and introducing a 
                        plan for a new product. <br/><br/>
                        It is also important to conduct user-testing consultations with a pilot of this new product with PMs/PMMs/ UX 
                        Designers before releasing it to the public. If we had more time, we would conduct interviews with professionals in the industry to get 
                        a better sense of their preferences and pain points to better tailor Notion for PM’s product offerings.<br/><br/>
                        <strong>Learnings</strong><br/>
                        Attempting to disrupt an existing market is challenging, and a company that is successful in one market may not necessarily be in another. 
                        Therefore, it is important to evaluate the current market landscape using the PESTEL analysis framework to access whether or not the product 
                        will be profitable, or if the timing of the release is appropriate. Many external variables can also affect the success of a new product 
                        launch, which is why PMs and stakeholders need to make informed decisions and business manage risk.
                    </Text>
                </Body>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <Header>Notion For PMs</Header>
                <Center>
                    <Sub>A repurposed Notion for a new market segment: the Product Management/agile market. Done for a 
                        PM Fellowship at university.
                    </Sub>
                    <Buttons>
                        <Button onClick={(e)=> {
                            window.open("https://docs.google.com/document/d/1-pDMA8o0ZLEFDdhfFm1sqTYjboQ4hK6c8XVKhLVoORY/edit?usp=sharing", '_blank')
                        }}>Case Study</Button>
                        <Button onClick={(e)=> {
                            window.open("https://www.figma.com/proto/erApMBQ0RXzor8rLUfIqwN/Custom-Notion-page-elements-(Community)?page-id=1%3A2&node-id=1%3A41&viewport=567%2C248%2C0.23&scaling=min-zoom&starting-point-node-id=1%3A41", '_blank')
                        }}>Prototype</Button>
                    </Buttons>
                    <Image1 src={`https://i.imgur.com/QvEctLa.png`} alt="mockup of the homepage design"/>
                </Center>
                <OverviewT>OVERVIEW</OverviewT>
                <Overview>
                    <TextGroup>
                        <SubText>Duration</SubText>
                        <TextCenter>October-November 2022</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Roles</SubText>
                        <TextCenter>Discovery, User and Market Research, Competitive Analysis, UI Design, Prototyping</TextCenter>
                    </TextGroup>
                    <TextGroup>
                        <SubText>Tools Used</SubText>
                        <TextCenter>Figma</TextCenter>
                    </TextGroup>
                </Overview>
                <Body>
                    <SubHead>THE PROBLEM</SubHead>
                    <Text>
                        For this project, the goal was to re-purpose an existing product for a new market segment. I decided to work on
                        Notion, a project management, note-taking tool aimed at helping users collaborate and increase productivity. When
                        thinking about the market segment I wanted to target, I realized that there Notion was a popular app being used in
                        the product design/management and agile market due to versatility and features like Kanban boards, but lacked some of 
                        the aspects that are necessary to build products.<br/><br/>
                        Notion lacks any whiteboard or freeform feature that allows PMs to sketch out roadmaps, ideate on user designs, or 
                        create user journeys or flows. Despite majority of their product research being hosted on their Notion workspace, they 
                        are forced to rely on external third-party tools like Miro or Figma. This shows that Notion is potentially losing out on
                        capitalizing on the market segment that they are already a part of, or even gaining new potential users.
                    </Text>
                    <SubHead>THE PROCESS</SubHead>
                    <Text>
                        <strong style={{ fontSize: '22px'}}>1) Understanding Notion</strong><br/><br/>
                        To investigate more into Notion's relationship with the PM market, I conducted research in order to understand their company
                        goals and targets, as well as answer key questions.<br/><br/>
                        <i>What do you think the company's vision is for its product?</i><br/>
                        Notion’s mission is to make toolmaking ubiquitous, allowing all users regardless of profession and location to feel empowered 
                        to customize the software they use every day to their exact needs. It aims to increase user productivity by blending their 
                        workflows into an all-in-one workspace. It wants to be versatile in its many features, being able to use various components 
                        while remaining completely customizable.<br/><br/>
                        <i>What do you think the product's current goal/trajectory is?</i><br/>
                        Notion’s current goal/trajectory is to continue expanding its product features (ex. template library) to appeal to a larger 
                        audience, instead of students and project management professionals. To do this, Notion is integrating third-party tools on the 
                        platform, developing more customizable templates, and allowing users to host templates on a webpage.<br/><br/>
                        <i>What is the value that the product provides for its current segment(s)/market(s)?</i><br/>
                        Notion is designed to help individuals and members of a company or organization to coordinate deadlines, objectives, and assignments 
                        for the sake of efficiency and productivity.<br/><br/>
                        <strong>Current Revenue Model/Stream:</strong><br/>
                        Notion is a SaaS that uses a freemium business model and earns money from subscriptions, mostly from team/enterprise subscriptions 
                        that are commonly used in the workplace. Most of their basic functionalities are free but more advanced features are placed behind a 
                        subscription paywall. Personal Pro accounts cost $5 per month, Team plans cost $10 per member per month, and Enterprise plans cost 
                        $25 per member per month. This is all it has revealed regarding its revenue model as it is a private company that has not released 
                        much information to the public.<br/><br/>
                        <strong style={{ fontSize: '22px'}}>2) Discovering New Markets</strong><br/><br/>
                        <strong>Potential Markets/Segments:</strong>
                        <ul>
                        <li>Product managers/developers and other technical professions </li>
                        <li>Agile workplace environments</li>
                        <li>Graphic and product designers</li>
                        </ul>
                        <strong>Market Opportunity Analysis: </strong><br/>
                        The market we want to disrupt is our product developers and workplaces that follow the agile sprint methodology. These usually 
                        contain users that want to build out product roadmaps and use whiteboards to collaborate with others while mapping out their sprints.
                        <br/><br/>
                        <strong>Opportunities: </strong>
                        <ul>
                            <li>The all-in-one application will lead to market share dominance</li>
                            <li>Eliminate the need to use multiple tools (ex. Figma, Miro, etc.), improving efficiency</li>
                            <li>Eliminate extra costs needed to subscribe to multiple platforms</li>
                        </ul>
                        <strong>Customers:</strong>
                        <ul>
                            <li>Want to use modern, efficient software to support their work projects</li>
                            <li>Want to use the least number of softwares as possible, want an all-in-one platform that includes all features</li>
                            <li>Need specific templates or tools such as ERD Diagram Mapping tools, customer journey mapping tools, freeform whiteboard 
                                spaces, digital sticky notes, etc. </li>
                        </ul>
                        <strong>External/Internal Factors:</strong>
                        <ul>
                        <li><i>Social</i> - Positive trends in digital transformation and using software  to increase productivity, collaboration, and organization</li>
                        <li><i>Technological</i> - Positive trends for online collaborations, hybrid/remote working models, and innovations in the tech industry</li>
                        <li><i>Environmental</i> - More environmentally conscious in terms of saving paper since they can now whiteboard digitally</li>
                        <li><i>Economic</i> - Economic downturns such as recessions, leading to tech industry layoffs</li>
                        <li><i>Political</i> - N/A</li>
                        </ul>
                        <strong>Key Competitors:</strong>
                        <ul>
                            <li>Miro</li>
                            <li>Milanote</li>
                            <li>Asana</li>
                            <li>Evernote</li>
                            <li>Atlassian (Jira and Confluence)</li>
                            <li>Obsidian</li>
                        </ul>
                        <strong style={{ fontSize: '22px'}}>3) Setting Objectives & Metrics (OKRs)</strong><br/><br/>
                        <strong>Objective (O):</strong><br/>
                        Increase the market share of the workspace collaboration software market from 75.38% in 2022 to 80-85% by 2025. 
                        <br/><br/>
                        <strong>Key Results (KRs): </strong>
                        <ul>
                        <li>Increase the number of new customers in the targeted customer segment by 10% YoY</li>
                        <li>Increase the number of paid subscriptions to team/enterprise plans to access this feature by 20%</li>
                        <li>Expand the geographical reach of Notion, increasing presence in countries and regions where Notion is less 
                            known and used </li>
                        <li>Increase the diversity of companies/organizations that use Notion</li>
                        </ul>
                        <strong style={{ fontSize: '22px'}}>4) Competitive Landscape: Direct/Indirect Analysis</strong><br/><br/>
                        From the key competitors I identifed, I came up with a feature analysis to see how Notion compares to its competitors,
                        both direct and indirect.<br/><br/>
                        <Comp>
                            <tr>
                                <HeadCell>Competitor</HeadCell>
                                <HeadCell>Category</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Milanote</Cell>
                                <Cell>Indirect</Cell>
                                <Cell>A popular project management app with a visual focus. Includes whiteboard and drag-and-drop features</Cell>
                            </tr>
                            <tr>
                                <Cell>Miro</Cell>
                                <Cell>Indirect</Cell>
                                <Cell>Popular online project collaboration app and whiteboard platform. Includes several app integration options </Cell>
                            </tr>
                            <tr>
                                <Cell>Evernote</Cell>
                                <Cell>Direct</Cell>
                                <Cell>Note-taking and task management application for teams and individuals allowing users to work everywhere (includes offline sync options)</Cell>
                            </tr>
                            <tr>
                                <Cell>Obsidian</Cell>
                                <Cell>Direct</Cell>
                                <Cell>Notetaking app that relies on markdown files. Has a graph feature and custom CSS feature</Cell>
                            </tr>
                            <tr>
                                <Cell>Atlassian</Cell>
                                <Cell>Direct</Cell>
                                <Cell>2 apps used for project management with a focus on agile development. Includes collaboration features and a Kanban framework</Cell>
                            </tr>
                            <tr>
                                <Cell>Asana</Cell>
                                <Cell>Direct</Cell>
                                <Cell>Work and project management team collaboration platform. Includes list features which can be converted into timeline work maps and boards</Cell>
                            </tr>
                        </Comp><br/><br/>
                        <Center><strong style={{ fontSize: '22px'}}>Milanote</strong></Center>
                        <Comp>
                            <tr>
                                <HeadCell>Product Feature</HeadCell>
                                <HeadCell>Similar/ Unique</HeadCell>
                                <HeadCell>Strength/ Weakness</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Whiteboards</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Allows for a visual whiteboard with a drag-and-drop to include different elements; can be used to create roadmaps </Cell>
                            </tr>
                            <tr>
                                <Cell>Drawing tools</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Freely able to draw and add shapes to a whiteboard</Cell>
                            </tr>
                            <tr>
                                <Cell>Documentation</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Cannot create documents with notes; you can only add individual sticky notes to an existing board</Cell>
                            </tr>
                            <tr>
                                <Cell>To-do list</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>You can only add individual to-do lists to an existing board; no ability to create a Kanban board</Cell>
                            </tr>
                        </Comp><br/><br/>
                        <Center><strong style={{ fontSize: '22px'}}>Miro</strong></Center>
                        <Comp>
                            <tr>
                                <HeadCell>Product Feature</HeadCell>
                                <HeadCell>Similar/ Unique</HeadCell>
                                <HeadCell>Strength/ Weakness</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Whiteboards</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Allows various drag-and-drop elements to draw out roadmaps and graphs</Cell>
                            </tr>
                            <tr>
                                <Cell>Integration</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Lacks sufficient integration with a wider ecosystem for external third-party apps</Cell>
                            </tr>
                            <tr>
                                <Cell>Documentation</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Cannot create big text documents for information storing</Cell>
                            </tr>
                            <tr>
                                <Cell>Collaboration</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Allows for remote, live video chatting or audio calling when teams are working on a board together</Cell>
                            </tr>
                        </Comp><br/>
                        <Center><strong style={{ fontSize: '22px'}}>Evernote</strong></Center>
                        <Comp>
                            <tr>
                                <HeadCell>Product Feature</HeadCell>
                                <HeadCell>Similar/ Unique</HeadCell>
                                <HeadCell>Strength/ Weakness</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Documentation</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Has a web clipper feature that allows users to clip web pages, articles, or PDFs and save them directly to an Evernote page</Cell>
                            </tr>
                            <tr>
                                <Cell>Kanban boards</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Lacks a customizable kanban board to add tasks and view to-do lists</Cell>
                            </tr>
                            <tr>
                                <Cell>Audio notes</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Allows users to record and save audio notes directly onto the app</Cell>
                            </tr>
                            <tr>
                                <Cell>Storage</Cell>
                                <Cell>Similar</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Less storage capacity to upload files</Cell>
                            </tr>
                        </Comp><br/>
                        <Center><strong style={{ fontSize: '22px'}}>Obsidian</strong></Center>
                        <Comp>
                            <tr>
                                <HeadCell>Product Feature</HeadCell>
                                <HeadCell>Similar/ Unique</HeadCell>
                                <HeadCell>Strength/ Weakness</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Documentation</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Utilizes markdown language which allows for more customized document formatting</Cell>
                            </tr>
                            <tr>
                                <Cell>Syncing</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Stores files locally instead of the cloud, so is not available to sync across devices</Cell>
                            </tr>
                            <tr>
                                <Cell>Graphs</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Has an interactive knowledge graph structure that connects your notes with bi-directional linking, allowing users to view their ideas visually</Cell>
                            </tr>
                            <tr>
                                <Cell>Collaboration</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Does not allow native collaboration which is a detriment to business teams</Cell>
                            </tr>
                        </Comp><br/>
                        <Center><strong style={{ fontSize: '22px'}}>Atlassian</strong></Center>
                        <Comp>
                            <tr>
                                <HeadCell>Product Feature</HeadCell>
                                <HeadCell>Similar/ Unique</HeadCell>
                                <HeadCell>Strength/ Weakness</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Kanban boards</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Allows you to make boards based on sprints and close them after a sprint is done</Cell>
                            </tr>
                            <tr>
                                <Cell>Integrations</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>Offers more third-party integrations with external apps and plugins</Cell>
                            </tr>
                            <tr>
                                <Cell>Documentation</Cell>
                                <Cell>Similar</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Because the app is more focused on being a documentation tool, there is less options to add different kinds of components and less flexibility</Cell>
                            </tr>
                            <tr>
                                <Cell>Announcements</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>For team spaces, Atlassian allows team leaders to post announcement banners to pop up on all members' screens</Cell>
                            </tr>
                        </Comp><br/>
                        <Center><strong style={{ fontSize: '22px'}}>Asana</strong></Center>
                        <Comp>
                            <tr>
                                <HeadCell>Product Feature</HeadCell>
                                <HeadCell>Similar/ Unique</HeadCell>
                                <HeadCell>Strength/ Weakness</HeadCell>
                                <HeadCell>Notes</HeadCell>
                            </tr>
                            <tr>
                                <Cell>Information infrastructure</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Relies more on external third-party integrations with Google Drive and Microsoft 365 to store files and documents</Cell>
                            </tr>
                            <tr>
                                <Cell>Collaboration</Cell>
                                <Cell>Similar</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Does not allow for real-time collaboration and edits between multiple members</Cell>
                            </tr>
                            <tr>
                                <Cell>Features</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Weakness</Cell>
                                <Cell>Simple and more limited in terms of features, components, and configuration options</Cell>
                            </tr>
                            <tr>
                                <Cell>User interface</Cell>
                                <Cell>Unique</Cell>
                                <Cell>Strength</Cell>
                                <Cell>More user-friendly interface and less cluttered with information, making it less overwhelming</Cell>
                            </tr>
                        </Comp><br/>
                        <strong>Charting the Features</strong><br/><br/>
                        <Center><Image5 src={`https://i.imgur.com/9QhK5Zp.png`} /></Center><br/>
                        <strong style={{ fontSize: '22px'}}>5) PESTEL Analysis:</strong><br/><br/>
                        <strong>Political</strong>
                        <ul>
                            <li>The Canadian government is looking to strengthen privacy protection and trust in the digital economy by introducing new laws to protect its citizens 
                                in 2022 and beyond.</li>
                            <li>Tightening privacy laws can impact data privacy rules in Notion and the corporate data management process as Notion collects user data from individuals 
                                and corporations using the software. </li>
                        </ul>
                        <strong>Economic</strong>
                        <ul>
                            <li>The predicted recession may impact the demand for our product as more tech companies experience hiring freezes, staffing cuts, and layoffs. </li>
                            <li>The high inflation rates may impact the company’s decision to invest in R & D and innovation for new products such as Notion for PM, which 
                                will require additional capital and support.</li>
                        </ul>
                        <strong>Social</strong>
                        <ul>
                            <li>More companies are looking to streamline their digital operations in light of the “new normal”, where many employees are spending a part of 
                                their time working from home and are adopting a “hybrid” work format. This increases the need to develop and/or improve tools to support remote 
                                cross-team collaboration.</li>
                            <li>Many professionals prefer to host all operations on the fewest number of platforms needed for the project, and want to avoid having to have 
                                multiple programs or products open at once. Too many platforms decrease productivity and efficiency. </li>
                            <li>The tech industry is a rapidly growing market, attracting many to roles in technology due to its flexibility, lucrative pay, and innovative 
                                nature of the work environment. The increase in talent also increases the demand for technological tools to support their work. </li>
                        </ul>
                        <strong>Technological</strong>
                        <ul>
                            <li>The U.S. Tech Industry is expected to grow by 6.7% in 2022. This increases the awareness and demand for technology across multiple markets, 
                                including task management/project management software solutions such as Notion.</li>
                            <li>Digital Transformation has been a trending topic in the corporate world, with many companies adopting more digital solutions to improve 
                                efficiency and modernize their operations. Digital Transformation requires companies to use tech as a solution to automate and support 
                                manual operations, thus, increasing the demand for new products that support this.</li>
                        </ul>
                        <strong>Legal</strong>
                        <ul>
                            <li>As a SaaS company, Notion must be compliant with the respective countries’ Privacy Acts and laws. These acts regulate how commercial companies 
                                either automatically collect and process personal data, or manually collect personal data. Therefore, it is important to ensure that Notion 
                                for PM follows the respective laws.</li>
                            <li>In Canada, companies must follow PIPEDA, a Canadian law relating to data privacy.</li>
                            <li>The U.S equivalent of PIPEDA is HIPAA.</li>
                            <li>Intellectual property (IP) is one of the most valuable assets of SaaS companies like Notion. For this new product, Notion for PM it is important 
                                to file patents and obtain copyright registration to protect its unique idea.</li>
                        </ul>
                        <strong style={{ fontSize: '22px'}}>6) Market Sizing (North America):</strong>
                        <ul>
                            <li>The average cost for a PM software plan is $16.88 per month per user</li>
                            <li>The average user will use 5 tools (5*16.88 = $84.40/user)</li>
                        </ul>
                        <strong>The Total Addressable Market (TAM)</strong><br/>
                        There are 7.3 million people employed by the tech industry in the US.<br/><br/>
                        <strong>Serviceable Addressable Market (SAM)</strong><br/>
                        Our main target market for Notion for PM will be (1) PMs, (2) UX Designers, and (3) PMMs, as all of the following roles are involved in PM.
                        <ul>
                            <li>A 2022 consensus concluded that there are:
                                <ul>
                                    <li>41,370 product managers (PMs)</li>
                                    <li>10,178 user experience designers</li>
                                    <li>44,124 product marketing managers (PMMs)</li>
                                </ul>
                            </li>
                            <li>Total: <strong>95,672</strong></li>
                            <li>95, 672 * 84.4 = $8,074,716.80 Annual</li>
                            <li>600 companies reportedly use Notion.</li>
                            <li>The proposed goal is to increase the number of tech companies that interact with Notion to 1000. </li>
                            <li>Assuming a company will have on average: 
                                <ul>
                                    <li>6 PMs</li>
                                    <li>10 UX Designers</li>
                                    <li>9 PMMs</li>
                                    <li>Total: 25 users/company</li>
                                    <li>Total Cost for PM Software per company: $2,110</li>
                                </ul>
                            </li>
                            <li>1,000 companies * $2110 annual PM Software spend = <strong>$2.11M/year</strong></li>
                        </ul>
                        <strong>Service Attainable Market (SOM)</strong>
                        <ul>
                            <li>Aim to achieve an 80% user retention rate</li>
                            <li>$2.11M * 0.8 = <strong>$1.69M/year</strong></li>
                        </ul>
                        <strong style={{ fontSize: '22px'}}>7) User Personas:</strong><br/><br/>
                        After identifying my target market and the main stakeholders involved, I created 2 user personas,
                        a company Product Manager and an independent UX Designer, to better understand our target audience 
                        and their needs.<br/><br/>
                        <Center><Image6 src={`https://i.imgur.com/0vKC6MF.png`} /></Center><br/>
                        <Center><Image6 src={`https://i.imgur.com/1W1Splo.png`} /></Center><br/>
                    </Text>
                    <SubHead style={{ marginTop: '28px' }}>THE SOLUTION</SubHead>
                    <Text>
                    <strong style={{ fontSize: '22px'}}>1) Strategy:</strong><br/><br/>
                    <strong>Solution Ideation</strong>
                    <ul>
                        <li>Disrupt the PM/agile market by including product and mapping-focused features on Notion</li>
                        <li>Add a freeform whiteboard component onto Notion that users can add anywhere; users will be able 
                            to interact with this component, add items like text/shapes, and draw on the whiteboard</li>
                        <li>Multiple users on one workspace will be able to collaborate live on the whiteboard and see 
                            changes/new items being added in real-time</li>
                        <li>Allow users to freely draw/add shapes anywhere on their workspace and include drawing tools 
                            in the navigation bar</li>
                        <li>Allow users to add digital sticky notes anywhere on their workspace and add text to them</li>
                    </ul>
                    <strong>Feature Prioritization</strong><br/><br/>
                    <Center><Image5 src={`https://i.imgur.com/9i5SjnU.png`} /></Center><br/>
                    <strong>Value Proposition</strong><br/>
                    Adding product journey-focused features like whiteboard components and creative tools will allow us to
                    achieve market dominance in the PM industry, and gain profit from adding new lucrative features to Notion's 
                    existing subscription models.<br/><br/>
                    <strong style={{ fontSize: '22px'}}>2) Go To Market:</strong><br/><br/>
                    <strong>Pricing and Sales Strategy</strong><br/>
                    2 main versions: Lite and Professional
                    <ol>
                        <li>Freemium (Lite Version)
                            <ul>
                                <li>The free “Lite” version of the product is suitable for small teams, independent product designers, 
                                    early-stage start-ups, and student groups.</li>
                                <li>Limited # of 5 collaborators/users</li>
                                <li>Access a select # of basic frameworks, templates, and PM/PMM/UX Designer Tools (Ex. Kanban Board, 
                                    Project Timeline, Product Tracking template, etc.)</li>
                                <li>Excludes Premium features only available for paid subscribers in Notion for PM Professional</li>
                                <li>May include ads</li>
                                <li>Basic Package FREE of cost</li>
                            </ul>
                        </li>
                        <li>Professional (Full, Paid Version) 
                            <ul>
                                <li>The professional “Premium” version of the product is suitable for private and public companies, 
                                    more prominent start-ups, classrooms/educational settings, and cross-functional teams.</li> 
                                <li>Unlimited # of collaborators/users</li>
                                <li>Access to all frameworks with the option to tailor each tool for the company or team subscribing 
                                    to the premium product</li>
                                <li>Include full whiteboard component feature with multiple tools and drawing items</li>
                                <li>Access On-demand, 24/7 Live Support</li>
                                <li>Premium Package Priced at $15/month, per user </li>
                            </ul>
                        </li>
                    </ol>
                    Notion’s Technical Sales Team will contact and market this product to companies—primarily in the software and technology 
                    space, start-ups, and educational institutions that teach courses about PM/PMM/UX, schools, and student groups that focus 
                    on technology and its related disciplines. This will help create awareness of this new product. Existing users of Notion 
                    will also receive emails and updates about the new product and will be provided an incentive to subscribe to it, including 
                    a 30-day free trial.<br/><br/>
                    <strong>Marketing Strategy</strong><br/>
                    <ol>
                        <li>Corporate Events and Conferences
                            <ul>
                                <li>Notion will introduce this product at  “Block by Block” 2023, Notion’s annual virtual conference that attracts 
                                    professionals working in the tech and software industries around the world. </li>
                                <li>Notion will also introduce and introduce this product at other tech conferences that Notion sponsors. </li>
                            </ul>
                        </li>
                        <li>Collaborations with Influencers and Content Creators (Ex. Youtube, Tiktok, Instagram)
                            <ul>
                                <li>Many content creators, primarily young professionals, create videos detailing their lives working in the tech 
                                    industry. For example, there are many videos titled “How to Break Into PM”, or “Day in the Life as a UI/UX Designer”. 
                                    Notion will sponsor these content creators to bring awareness of the product to a larger audience and receive feedback 
                                    from real users in the industry. </li>
                            </ul>
                        </li>
                        <li>Partnerships with Educational Platforms for PM (Ex. Product School, Exponent)
                            <ul>
                                <li>Organizations such as Product School and Exponent offer educational material, study tools, and courses for aspiring 
                                    PMs and PMMs. Notion can partner with companies offering PM training to market their product, and be the first platform 
                                    new users are exposed to. This will build brand loyalty and help Notion establish itself in the productivity management 
                                    market with a focus on PM.</li>
                                <li>List companies offering PM Training Material or Courses: 
                                    <ul>
                                        <li>Exponent</li>
                                        <li>Product School</li>
                                        <li>Product Alliance</li>
                                        <li>BrainStation</li>
                                        <li>Pragmatic Institute</li>
                                        <li>Coursera</li>
                                        <li>Universities (Ex. UBC Sauder Continuing Education, Harvard Extention School, etc.)</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <strong>Metrics</strong>
                    <ul>
                        <li>Sales Efficiency</li>
                        <li>Market Share in the Productivity Management Software Industry</li>
                        <li>Customer Acquisition Cost (CAC)</li>
                        <li>Annual Recurring Revenue (ARR)</li>
                        <li>Monthly Recurring Revenue (MRR)</li>
                        <li>Net Promoter Score (NPS)</li>
                        <li>Churn Rate</li>
                        <li>Customer Retention Rate</li>
                        <li>New users (WoW / MoM / YoY)</li>
                    </ul>
                    <strong style={{ fontSize: '22px'}}>3) Design:</strong><br/><br/>
                    <strong>User Requirements</strong><br/>
                    As user of the platform subscribed to the Professional plan, they can:
                    <ul>
                        <li>Add a new whiteboard component, listed among all the other Notion components when you press the "+" button</li>
                        <li>Once users add the whiteboard component, it will be embedded in their workspace and they are free to move and 
                            resize it just like any other embedded element, as well as view its preview</li>
                        <li>They can go full-screen mode on the whiteboard where they will be able to freely edit and add elements to the 
                            board</li>
                        <li>They can interact with the tools bar at the bottom, where they will be able to add text, shapes, arrows, 
                            sticky notes, and draw, as well as add comments to other collaborators' edits</li>
                        <li>Then can see other workspace users who are currently on the board and watch them edit the board in real-time</li>
                    </ul>
                    </Text>
                    <SubHead>FEATURES</SubHead>
                        <Text>
                            On your workspace, you can click on the "+" button to go through all of the available components you can add to your
                            workspace. Clicking on the whiteboard component will allow you to add it to the space and view a preview of its content.
                            You will be able to resize and move it around just like any other embedded content.
                        </Text>
                        <Image3 src={`https://i.imgur.com/ZWpRQLN.png`} />
                        <Text>
                            On the top right, you can click on the full-screen mode in order to access the tool bar at the bottom and edit its current 
                            content. You will be able to add, edit, and delete elements as specified, as well as draw freely on the board.
                        </Text>
                        <Image4 src={`https://i.imgur.com/2nXdoL2.png`} />
                        <Text>
                                When collaborating with other users on the workspace, they can go on the board and you can quickly see who is currently on the board 
                                in the top right. You will also be able to watch them make edits live from their cursor.
                        </Text>
                        <Image7 src={`https://i.imgur.com/WKmGc1c.png`} />
                    <SubHead>TAKEAWAYS & IMPROVEMENTS</SubHead>
                    <Text>
                    <strong>Risks</strong><br/>
                        Possible risks of the solution and how I might mitigate them:
                        <ol>
                            <li>Customer Loyalty to Competitors <br/>
                            Professionals who are already accustomed to a certain software may not want to suddenly switch to Notion for PM for their work. 
                            Adopting a new work process and platform will require training and time, and not everyone will be willing to invest the time 
                            and resources into it. Therefore, implementing new software will need to be done gradually which will lead to more time 
                            required for the product to demonstrate profitability. </li>
                            <li>Data Transfer <br/>
                            Data from previous work/projects will need to be transferred to Notion for PM. If Notion for PM does not integrate other software 
                            into their own, a seamless data transfer process will need to be created for teams to not lose any previous work. </li>
                            <li>Excessive Number of Features <br/>
                            Existing users have expressed that one of the downsides of Notion is that sometimes users are overwhelmed with the number of 
                            features the platform offers. Therefore, it is important for the team developing Notion for PM to perform the required feature 
                            prioritization steps to mitigate this risk.</li>
                            <li>Copyright <br/>
                            Certain frameworks or tools used in PM/PMM/UX design may be independently developed by other companies. To avoid copyright claims, 
                            Notion must be cautious in the tools they include in Notion for PM and purchase user rights if they choose to outsource.</li>
                        </ol>
                        <strong>Next Steps</strong><br/>
                        There may be some copyright issues when creating Notion’s version of PM software, especially if frameworks are independently developed by 
                        competitors. Notion will need to possibly purchase rights to use its tools on its own platform, which will lengthen the time needed to 
                        release the product and incur additional costs. An alternate solution for this risk would be to acquire smaller companies that develop 
                        PM tools and frameworks. Therefore, it is important to perform the necessary due diligence before entering a new market and introducing a 
                        plan for a new product. <br/><br/>
                        It is also important to conduct user-testing consultations with a pilot of this new product with PMs/PMMs/ UX 
                        Designers before releasing it to the public. If we had more time, we would conduct interviews with professionals in the industry to get 
                        a better sense of their preferences and pain points to better tailor Notion for PM’s product offerings.<br/><br/>
                        <strong>Learnings</strong><br/>
                        Attempting to disrupt an existing market is challenging, and a company that is successful in one market may not necessarily be in another. 
                        Therefore, it is important to evaluate the current market landscape using the PESTEL analysis framework to access whether or not the product 
                        will be profitable, or if the timing of the release is appropriate. <br/><br/>Many external variables can also affect the success of a new product 
                        launch, which is why PMs and stakeholders need to make informed decisions and business manage risk.
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

const Comp = styled.table`
    font-family: Outfit;
    border-collapse: collapse;
    width: 100%;
`

const Cell = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 10px;
    font-family: Outfit;
`

const HeadCell = styled.th`
    border: 1px solid #dddddd;
    text-align: center;
    padding: 10px;
    font-family: Outfit;
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
  width: 620px;

  @media (max-width: 450px) {
    width: 350px;
  }
`

const Image3 = styled.img`
    width: 470px;
    border-radius: 10px;

    @media (max-width: 450px) {
        width: 300px;
    }
`

const Image4 = styled.img`
    width: 470px; 
    border-radius: 10px;

    @media (max-width: 450px) {
        width: 300px;
    }
`

const Image5 = styled.img`
    width: 650px;
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
    width: 470px;
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

