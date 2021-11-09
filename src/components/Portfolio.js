import React from "react";
import {
   Image,
   Navbar,
   Container,
   Nav,
   NavDropdown,
   Form,
   FormControl,
   Button,
   ProgressBar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img11 from "../images/my1.png";
// import img12 from "../images/dev.jfif";
import img12 from "../images/n19.jpeg";
import img13 from "../images/n16.jpeg";
import img14 from "../images/my1.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
// import { Form, FormControl, Button, img11 } from "bootstrap";
class Portfolio extends React.Component {
   constructor() {
      super();
      this.state = {
         consoleText:
            (["Hello World.", "Console Text", "Made with Love."],
            "text",
            ["tomato", "rebeccapurple", "lightblue"]),
      };
   }

   // function([string1, string2],target id,[color1,color2])

   consoleText(words, id, colors) {
      if (colors === undefined) colors = ["#fff"];
      var visible = true;
      var con = document.getElementById("console");
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id);
      target.setAttribute("style", "color:" + colors[0]);
      window.setInterval(function () {
         if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function () {
               var usedColor = colors.shift();
               colors.push(usedColor);
               var usedWord = words.shift();
               words.push(usedWord);
               x = 1;
               target.setAttribute("style", "color:" + colors[0]);
               letterCount += x;
               waiting = false;
            }, 1000);
         } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
               x = -1;
               letterCount += x;
               waiting = false;
            }, 1000);
         } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
         }
      }, 120);
      window.setInterval(function () {
         if (visible === true) {
            con.className = "console-underscore hidden";
            visible = false;
         } else {
            con.className = "console-underscore";

            visible = true;
         }
      }, 400);
   }
   render() {
      return (
         <div className="wholePage">
            <div className="Portfolio">
               <div className="p1">
                  <>
                     <Navbar
                        bg="light"
                        variant="light"
                        style={{ color: "white" }}
                     >
                        <Container className="container1">
                           <Navbar.Brand></Navbar.Brand>
                           <Nav className="me-auto">
                              {/* <h5>NAGINA'S PORTFOLIO</h5> */}
                              <Nav.Link className="links">HOME</Nav.Link>
                              <Nav.Link className="links">ABOUT</Nav.Link>
                              <Nav.Link className="links">RESUME</Nav.Link>
                              <Nav.Link className="links">PROJECTS</Nav.Link>
                              <Nav.Link className="links">CONTACT</Nav.Link>
                           </Nav>
                        </Container>
                     </Navbar>
                  </>
               </div>
               <div className="p2">
                  <div class="console-container">
                     <span id="text">Hi, I am Aditi|</span>
                     <div class="console-underscore" id="console">
                        &#95;
                     </div>
                  </div>
                  {/* <Image className="img1" src={img11}></Image> */}
                  {/* <Image src={img12}></Image> */}
               </div>
               {/* <Image src={img13}></Image> */}
               {/* <Image src={img14}></Image> */}
            </div>
            <div className="imgAbout">
               <span className="imgSpan">
                  {" "}
                  <Image src={img14}></Image>
               </span>
               <div className="about">
                  <h2>About Me</h2>
                  <h5>
                     I am a fresher software engineer who loves programming and
                     mathematics in general. While I have a comprehensive
                     mechanical engineering background, my propensity has always
                     been towards software development, competitive programming
                     and problem solving. I am a thorough learner with an
                     intention of exploring different work positions. My
                     motivation which drives me the most is self-improvement.
                     You can check out some of my personal projects that I have
                     recently worked on. here .
                  </h5>
                  <h2>Contact Details</h2>
                  Nagina Sonti <br />
                  B-109/51 Mira Nagar
                  <br /> Near Kela devi Mandir,Dewas M.P.
                  <br />
                  <p id="mobileNo">
                     <BsFillTelephoneFill />
                     +916261337929
                  </p>
                  <a
                     id="gmail"
                     _ngcontent-qcq-c3=""
                     href="mailto:sontinagina11@gmail.com"
                  >
                     <IoMail />
                     sontinagina11@gmail.com{" "}
                  </a>
               </div>
            </div>
            <div className="EDUCATION">
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
                  <h2 className="blackColor">Data Engineering Intern</h2>
                  Design and implementation of data processing elements in a
                  data pipeline, Optimising algorithms for removing road blocks
                  in a data pipeline, Implementing a software/engine as a
                  Service, Automating testing for increasing efficiency of work
                  <h2 className="blackColor">Full Stack Developer Intern</h2>
                  Design, implementation and testing of RESTful APIs in ReactJS.{" "}
                  Design and implementation of responsive pages using
                  JavaScript, bootstrap and ReactJS Templates. Design and
                  implementation of a TCP/IP network architecture between
                  systems. Research and integration with third-party APIs.{" "}
                  Database design for storing data accumulated from different
                  APIs.
               </div>
            </div>{" "}
            <div className="Skills">
               <span className="leftSide">
                  <h2 className="e1">SKILLS</h2>
               </span>
               <span className="skillchild">
                  <span className="skillsDiv">
                     <div id="allB">
                        While learning, breadth-first search might do the
                        trick...But
                        <br />I believe the core algorithm that we must apply
                        while grasping <br />
                        an important skill is depth first search(weighted).
                     </div>
                     <div>
                        <>
                           <Button id="b1" variant="success">
                              Languages
                           </Button>{" "}
                           <Button id="AllB" variant="success">
                              Databases
                           </Button>
                           {"   "}
                           <Button id="AllB" variant="success">
                              Frameworks
                           </Button>{" "}
                           <Button id="AllB" variant="success">
                              Programming-Concepts
                           </Button>{" "}
                           <Button id="AllB" variant="success">
                              Other-Tools
                           </Button>{" "}
                        </>
                     </div>
                     <div className="progress1">
                        <h4>JAVA</h4>
                        <ProgressBar striped id="p1" variant="black" now={50} />
                        <h4>JavaScript</h4>
                        <ProgressBar striped id="p1" variant="black" now={50} />
                        <h4>C</h4>

                        <ProgressBar striped id="p1" variant="black" now={50} />
                        <h4>C++</h4>

                        <ProgressBar striped id="p1" variant="black" now={50} />

                        {/* <ProgressBar striped id="p1" variant="black" now={50} />
                        <ProgressBar striped id="p1" variant="black" now={50} /> */}
                        {/* <div className="p1"> */}
                        {/* <ProgressBar striped variant="black" now={35} key={1} /> */}
                        {/* <ProgressBar variant="light" now={100} key={2} />{" "} */}
                        {/* </div> */}
                     </div>
                  </span>
               </span>
            </div>
            <div className="ProjectsList">
               <div className="proj1">
                  <h3> CHECKOUT SOME OF MY PROJECTS</h3>
               </div>
            </div>
         </div>
      );
   }
}
export default Portfolio;
