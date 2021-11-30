import React from "react";
import {
   Image,
   Navbar,
   Container,
   Nav,
   Form,
   Button,
   ProgressBar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";

// import img11 from "../images/my1.png";
// import img12 from "../images/dev.jfif";
// import img12 from "../images/n19.jpeg";
import img13 from "../images/my1.png";
import img14 from "../images/my11.jpg";
import img15 from "../images/MentorHomePage.PNG";
import img16 from "../images/tinyurl.PNG";
import img17 from "../images/lyricsapp.PNG";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
// import { Form, FormControl, Button, img11 } from "bootstrap";
class Portfolio extends React.Component {
   constructor() {
      super();
      this.state = {
         skills: "programming-languages",
      };
   }

   render() {
      return (
         <div className="wholePage">
            <div id="home" className="Portfolio">
               <div className="navDiv">
                  <Navbar
                     className="navbar navbar-default navbar-fixed-top"
                     border="none"
                     bg="warning"
                     variant="light"
                     style={{ color: "rgb(255, 123, 1)" }}
                  >
                     <Container className="container1">
                        <Navbar.Brand style={{ color: "rgb(255,255,255)" }}>
                           NAGINA'S PORTFOLIO
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                           <Nav className="me-auto">
                              <Link
                                 activeClass="active"
                                 className="links"
                                 to="home"
                                 spy={true}
                                 smooth={true}
                                 duration={-500}
                                 delay={0}
                                 spyThrottle={0}
                              >
                                 HOME
                              </Link>
                              <Link
                                 duration={-500}
                                 delay={0}
                                 className="links"
                                 to="about"
                                 spy={true}
                                 smooth={true}
                              >
                                 ABOUT{" "}
                              </Link>
                              <Link
                                 className="links"
                                 to="resume"
                                 spy={true}
                                 smooth={true}
                                 duration={-500}
                                 delay={0}
                              >
                                 RESUME
                              </Link>
                              <Link
                                 className="links"
                                 to="projects"
                                 spy={true}
                                 smooth={true}
                                 duration={-500}
                                 delay={0}
                              >
                                 PROJECTS
                              </Link>
                              <Link
                                 className="links"
                                 to="contact"
                                 spy={true}
                                 smooth={true}
                                 duration={-500}
                                 delay={0}
                              >
                                 CONTACT
                              </Link>
                           </Nav>
                        </Navbar.Collapse>
                     </Container>
                  </Navbar>
               </div>
               <div className="box">
                  <>
                     <div className="p2">
                        <span className="imgSpan1">
                           {" "}
                           <Image
                              src={img14}
                              style={{
                                 width: 210,
                                 height: 210,
                                 borderRadius: 300 / 2,
                              }}
                           ></Image>
                        </span>
                        <div className="console-container">
                           <span id="text">Hi, I am Nagina </span>
                           <div className="console-underscore" id="console">
                              &#95;
                           </div>
                        </div>
                        <div id="dev-content">
                           I'm a Full Stack Developer with a passion for solving
                           real world problems with Programming.
                           <br /> And I believe i'm a developer who always wants
                           create something new
                           <br /> Let's start scrolling and learn more about me
                        </div>
                        {/* <Image className="img1" src={img11}></Image> */}
                        {/* <Image src={img12}></Image> */}
                     </div>
                  </>
                  {/* <Image src={img13}></Image> */}
                  {/* <Image src={img14}></Image> */}
               </div>
            </div>
            <div className="imgAbout">
               <span className="imgSpan">
                  {" "}
                  <Image
                     src={img13}
                     // style={{
                     //    width: 250,
                     //    height: 260,
                     //    borderRadius: 400 / 2,
                     // }}
                  ></Image>
               </span>
               <div id="about" className="aboutClass">
                  <h2>About Me</h2>I am a fresher Full stack Developer who loves
                  programming and creating projects on ReactJS. While I have a
                  comprehensive Computer Science background in B.C.A, my
                  propensity has always been towards software development,
                  programming and problem solving. I am a thorough learner with
                  an intention of exploring different work positions. My
                  motivation which drives me the most is self-improvement. You
                  can check out some of my personal projects that I have
                  recently worked on.
                  <Link
                     // className="links"
                     to="projects"
                     spy={true}
                     smooth={true}
                     duration={-500}
                     delay={0}
                     id="here"
                     onMouseOver="arrow"
                  >
                     here
                  </Link>
                  .<h2>Contact Details</h2>
                  Nagina Sonti <br />
                  B-109/51 Mira Nagar
                  <br /> robot city, A-11/02,Dewas M.P.
                  <br />
                  <p id="mobileNo">
                     <BsFillTelephoneFill />
                     +916261337929
                  </p>
                  <IoMail />{" "}
                  <a
                     id="gmail"
                     _ngcontent-qcq-c3=""
                     href="mailto:sontinagina11@gmail.com"
                  >
                     sontinagina11@gmail.com
                  </a>
               </div>
            </div>
            <div id="resume" className="EDUCATION">
               <div className="leftSide">
                  <h2 className="e1">EDUCATION</h2>
               </div>
               <div id="edu1">
                  <h3 className="blackColor">
                     Bachelor of Computer Application
                  </h3>
                  Vikram University Ujjain •August 2016-December 2019
                  <br />
                  <h2 className="blackColor">10th</h2> Higher Secondary School,
                  Bawai •April 2012-March 2013
                  <br />
                  <h2 className="blackColor"> 12th </h2>Higher Secondary School,
                  Bawai •April 2014-March 2015
               </div>
            </div>
            <div className="Work">
               <div className="leftSide">
                  <h2 className="e1">INTERNSHIP</h2>
               </div>
               <div id="work1">
                  {/* <h2 className="blackColor">Projects </h2>
                  Design and implementation of data processing elements in a
                  data pipeline, Optimising algorithms for removing road blocks
                  in a data pipeline, Implementing a software/engine as a
                  Service, Automating testing for increasing efficiency of work */}
                  <h2 className="blackColor">Full Stack Developer Intern</h2>
                  Full Stack Web Development Bootcamp Newton School:- Full Stack
                  Web Development along with Problem Solving. Technical Stack
                  learned: Node JS, React JS, Express JS, Mongo DB, HTML, CSS,
                  JavaScript, and Bootstrap. Participated in various Coding
                  contests organized by the platform. Worked on various projects
                  like To-do-list, Pro-Mentor-Techs, Calculator,URLs
                  Shortener,Songs Lyrics App. Created various games like
                  Tic-Tac-Toe, Kill-Monster.
               </div>
            </div>{" "}
            <div className="Skills">
               <span className="leftSide">
                  <h2 className="e1">SKILLS</h2>
               </span>
               <span className="skillchild">
                  <span className="skillsDiv">
                     <div id="allB">
                        “Perfection is achieved not when there is nothing more
                        to add,
                        <br />
                        but rather when there is nothing more to take away.” – I
                        believe “Simplicity is the soul of efficiency.” –<br />
                     </div>
                     <div>
                        <>
                           <Button
                              id="b1"
                              variant="success"
                              onClick={() =>
                                 this.setState({
                                    skills: "programming-languages",
                                 })
                              }
                           >
                              Languages
                           </Button>{" "}
                           <Button
                              id="AllB"
                              variant="success"
                              onClick={() =>
                                 this.setState({
                                    skills: "databases",
                                 })
                              }
                           >
                              Databases
                           </Button>
                           {"   "}
                           <Button
                              id="AllB"
                              variant="success"
                              onClick={() =>
                                 this.setState({
                                    skills: "frameworks",
                                 })
                              }
                           >
                              Frameworks
                           </Button>{" "}
                           <Button
                              id="AllB"
                              variant="success"
                              onClick={() =>
                                 this.setState({
                                    skills: "programming-concepts",
                                 })
                              }
                           >
                              Programming-Concepts
                           </Button>{" "}
                           <Button
                              id="AllB"
                              variant="success"
                              onClick={() =>
                                 this.setState({
                                    skills: "other-tools",
                                 })
                              }
                           >
                              Other-Tools
                           </Button>{" "}
                        </>
                     </div>
                     <div className="progress1">
                        {this.state.skills === "programming-languages" ? (
                           <div>
                              <h4>JAVA</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={90}
                              />
                              <h4>JavaScript</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={90}
                              />
                              <h4>C</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={80}
                              />
                              <h4>C++</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={75}
                              />
                              <h4>SQL</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={50}
                              />
                           </div>
                        ) : null}
                        {/** Databases */}
                        {this.state.skills === "databases" ? (
                           <div>
                              <h4>MongoDB</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={70}
                              />
                              <h4>MYSQL</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={60}
                              />
                           </div>
                        ) : null}
                        {/**FrameWorks */}
                        {this.state.skills === "frameworks" ? (
                           <div>
                              <h4>ReactJS</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={80}
                              />
                              <h4>ExpressJS</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={60}
                              />
                           </div>
                        ) : null}
                        {/**programming concepts */}
                        {this.state.skills === "programming-concepts" ? (
                           <div>
                              <h4> Data Structure & Algorithms</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={80}
                              />
                              <h4>Full Stack Development</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={80}
                              />
                              <h4>Problem Solving</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={65}
                              />
                           </div>
                        ) : null}
                        {/**other tools */}
                        {this.state.skills === "other-tools" ? (
                           <div>
                              <h4>Html</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={90}
                              />
                              <h4>CSS </h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={90}
                              />
                              <h4>NodeJS</h4>
                              <ProgressBar
                                 striped={true}
                                 id="p1"
                                 variant="black"
                                 now={80}
                              />
                           </div>
                        ) : null}
                     </div>
                  </span>
               </span>
            </div>
            <div id="projects" className="ProjectsList">
               <div className="projectHead">
                  <Button variant="success">
                     {" "}
                     <h3> CHECKOUT SOME OF MY PROJECTS</h3>
                  </Button>
               </div>
               <div className="projectsDiv">
                  <div className="one-project">
                     <div className="project1">
                        {" "}
                        <Image className="project-img" src={img15}></Image>{" "}
                     </div>
                     <div className="project2">
                        <h3>Pro-Mentor-Techs</h3>
                        <p>
                           <ul>
                              <li>
                                 Pro-Mentor-Techs is a web application that is
                                 used for becoming a mentor and finding a
                                 mentor.
                              </li>
                              <li>
                                 {" "}
                                 Features: Registration Form, Progress Tracking,
                                 Find A Mentor, Become A Mentor. Quick Updates
                                 and better Reliability were provided.
                              </li>
                              <li>
                                 {" "}
                                 Role: Full Stack | Tech Stack: Node JS, React
                                 JS Express JS, MongoDB, Mongoose,
                                 React-Bootstrap.
                              </li>
                              <li>
                                 {" "}
                                 This is an online plateform for Mentors and
                                 Students where user can register as a
                                 Mentee/Mentor for multiple courses ,can | join
                                 1-1 sessions and | also Mentor can create
                                 multiple courses .
                              </li>
                           </ul>
                        </p>
                     </div>
                  </div>
                  <div className="one-project">
                     <div className="project1">
                        {" "}
                        <Image className="project-img" src={img16}></Image>{" "}
                     </div>
                     <div className="project2">
                        <h3>Tiny URLs</h3>
                        <p>
                           <ul>
                              <li>
                                 Tiny URLs is a website used for generating tiny
                                 URLs from long URLs.
                              </li>
                              <li>
                                 Features: generate small URL, click count,
                                 custom URL.
                              </li>
                              <li>
                                 Role: Developer | Tech Stack: Node JS, React JS
                                 Express JS, MongoDB, Mongoose, React-Bootstrap.
                              </li>
                              <li>
                                 This is a web application which is create short
                                 URLs . Here User give long URLs of any website
                                 and It creates Tiny URLs and then User can copy
                                 that Tiny URLs and also directly can go on
                                 onClick of URLs button.
                              </li>
                           </ul>{" "}
                        </p>
                     </div>
                  </div>
                  <div className="one-project">
                     <div className="project1">
                        {" "}
                        <Image className="project-img" src={img17}></Image>{" "}
                     </div>
                     <div className="project2">
                        <h3>Songs Lyrics App</h3>
                        <p>
                           <ul>
                              <li>
                                 Songs Lyrics App is a website used for
                                 searching lyrics of songs.
                              </li>
                              <li>
                                 Features: Searching lyrics By song Name,Singer
                                 name, Song Artist name.
                              </li>
                              <li>
                                 Role: Developer | Tech Stack: Node JS, React JS
                                 Express JS, React-Bootstrap.
                              </li>
                              <li>
                                 This is a web Application Where user can search
                                 lyrics for any type of songs and | When click
                                 on the song name it opens a lyrics page of that
                                 song.
                              </li>
                           </ul>{" "}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div id="contact" className="whole-footer-page">
               <div className="foo-text">
                  Want to get in touch? Leave a message
               </div>
               <div className="internal-footer-pages">
                  <div className="footer-form">
                     <Form>
                        <Form.Group
                           className="mb-3"
                           controlId="exampleForm.ControlInput1"
                        >
                           <Form.Label style={{ color: "white" }}>
                              Name
                           </Form.Label>
                           <Form.Control
                              id="input-bars"
                              size="lg"
                              // type="text"
                              placeholder="name"
                              type="reset"
                           />
                        </Form.Group>
                        <Form.Group
                           className="mb-3"
                           controlId="exampleForm.ControlInput1"
                        >
                           <Form.Label style={{ color: "white" }}>
                              Email address
                           </Form.Label>
                           <Form.Control
                              size="lg"
                              id="input-bars"
                              type="email"
                              placeholder="name@example.com"
                           />
                        </Form.Group>
                        <Form.Group
                           className="mb-3"
                           controlId="exampleForm.ControlInput1"
                        >
                           <Form.Label style={{ color: "white" }}>
                              Subject
                           </Form.Label>
                           <Form.Control
                              size="lg"
                              id="input-bars"
                              type="text"
                              placeholder="subject"
                              rows={3}
                           />
                        </Form.Group>
                        <Form.Group
                           className="mb-3"
                           controlId="exampleForm.ControlTextarea1"
                        >
                           <Form.Label style={{ color: "white" }}>
                              Example textarea
                           </Form.Label>
                           <Form.Control
                              id="form-text-area"
                              as="textarea"
                              rows={3}
                           />
                        </Form.Group>{" "}
                        <Button
                           variant="success"
                           size="lg"
                           onClick={this.sendthru}
                        >
                           Submit Message
                        </Button>
                     </Form>
                  </div>
                  <div className="contactDetail">
                     <h2>Contact Details</h2>
                     Nagina Sonti <br />
                     B-109/51 Mira Nagar
                     <br /> Near Kela devi Mandir,Dewas M.P.
                     <br />
                     <p id="mobileNo">
                        <BsFillTelephoneFill />
                        +916261337929
                     </p>
                     <IoMail />{" "}
                     <a
                        id="gmail"
                        _ngcontent-qcq-c3=""
                        href="mailto:sontinagina11@gmail.com"
                     >
                        sontinagina11@gmail.com
                     </a>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
export default Portfolio;
