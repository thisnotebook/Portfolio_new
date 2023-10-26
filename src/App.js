import { useState, useEffect } from 'react';
import './App.css';
import collageLogo from './assets/logo.png';
import schoolLogo from './assets/school_logo.png';
import vscode from './assets/vscode.png';
function App() {

  const [baricon, setbaricon] = useState(1);
  const [iconClass, setIconClass] = useState("fa-solid fa-bars");
  const [dropdownclass, setDropdownclass] = useState("drop-down-menu")
  const [skillbutton, setSkillbutton] = useState(0);
  const [skillicon, setSkillicon] = useState("fa-solid fa-chevron-down")
  const [skillbtnclass, setSkillbtnclass] = useState("skill-icon")


  const handleDropDownIcon = () => {
    // setbaricon((prevBaricon) => (prevBaricon === 1 ? 0 : 1)); 
    setbaricon(baricon === 1 ? 0 : 1);
    setIconClass(baricon === 0 ? "fa-solid fa-bars" : "fa-solid fa-xmark");
    setDropdownclass(baricon === 0 ? "drop-down-menu" : "drop-down-menu open");
    console.log(baricon, dropdownclass, iconClass);
  }

  const handleSkillicon = () => {
    setSkillbutton(skillbutton === 1 ? 0 : 1);
    setSkillicon(skillbutton === 1 ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up");
    setSkillbtnclass(skillbutton === 1 ? "skill-icon" : "skill-icon skill-open")
  }


  return (
    <div className="App">
      <div class="wrapper">
        <header>
          <div className="navbar">
            <div className="logo"><a href="#">
              <span> <em> &lt; </em> </span>
              <span> My_Portfolio </span>
              <span> <em> /&gt; </em> </span>
            </a></div>
            <ul className="links">

              <li><a className="headings" href="#Skills">Skills</a></li>
              <li><a className="headings" href="#Projects">Projects</a></li>
              <li><a className="headings" href="#Education">Education</a></li>
              <li><a className="headings" href="#Contacts">Contacts</a></li>
            </ul>
            {/* <a href="#" class="action_btn">Get Started</a> */}
            <div onClick={handleDropDownIcon} class="toggle-btn">

              <i className={iconClass}></i>
            </div>
          </div>


          {/* drop down menu*/}
          <div className={dropdownclass}>   {/* drop-down-menu */}
            <ul>
              {/* lass --->  toggled-menu */}
              <li><a href="#Skills"> Skills </a></li>
              <li><a href="#Projects"> Projects</a></li>
              <li><a href="#Education"> Education </a></li>
              <li><a href="#Contacts"> Contacts</a></li>
            </ul>
          </div>


        </header>






        <div class="content">
          <main >
            <div id="home" className="container-home">

              <div class="Intro" >
                <h4>Hi, I'm</h4>
                <h1 class="greeting" > Lucky Verma <span>👋</span></h1>
                <p >A passionate Front End Software Developer 🚀
                  having an experience of building Web and Mobile applications
                  with JavaScript / Reactjs / Nodejs / React Native
                  and some other cool libraries and frameworks.</p>
                <div>
                  <a href="https://drive.google.com/file/d/1oGe5xuBDCjIyGqcGJ-uM5X9OSqY3Q3BT/view?usp=sharing" target='_blank'>  <button class="resume-btn"><h3>Resume</h3></button></a>
                  <a href="#Contacts"> <button class="resume-btn"  ><h3>Contacts</h3></button></a>
                </div>

                {/* // and < /> me transition lagna h */}
              </div>
            </div>









            {/*           skill          */}
            <>
              <div id="Skills" class=" sec-container" >

                <div class="skill-text">
                  <h2>Skills</h2>
                  {/* <button onClick={handleSkillicon} > <i class={skillicon}></i>  </button> */}
                </div>

                <div class={skillbtnclass} id="skilldropdown">

                  {/* <div class="skilldropdown-part2"> */}
                  <h3>I work with the following technologies and tools:</h3>
                  <div>
                    <ul class="dev-icons">
                      <li class="software-skill-inline" name="html-5">
                        <i class="fa-brands fa-html5"></i>
                        <p>HTML-5</p>
                      </li>
                      <li class="software-skill-inline" name="css">
                        <i class="fa-brands fa-css3-alt"></i>
                        <p>css3</p>
                      </li>
                      <li class="software-skill-inline" name="javascript">
                        <i class="fa-brands fa-square-js"></i>
                        <p>JavaScript</p>
                      </li>
                      <li class="software-skill-inline" name="react">
                        <i class="fa-brands fa-react"></i>
                        <p>React</p>
                      </li>
                      <li class="software-skill-inline" name="bootstrap">
                        <i class="fa-brands fa-bootstrap"></i>
                        <p>Bootstrap</p>
                      </li>
                      <li class="software-skill-inline" name="nodejs">
                        <i class="fa-brands fa-node"></i>
                        <p>Nodejs</p>
                      </li>
                      <li class="software-skill-inline" name="github">
                        <i class="fa-brands fa-github"></i>
                        <p>Github</p>
                      </li>
                      <li class="software-skill-inline" name="git">
                        <i class="fa-brands fa-git-alt"></i>
                        <p>Git</p>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </>







            {/* project section */}
            <>
              <div id="Projects" className=" sec-container">
                <h2 class="project-heading"> Projects</h2>

                <div className="project-inner-container">

                  <div className="project-grid">
                    <a href="https://github.com/thisnotebook/My-Editor" target='_blank'>      <h2 class="project-heading2"><i class="fa-solid fa-laptop-code"></i> My_editor</h2> </a>
                    <p>•Online code editor, Codepen Clone <br />
                      •Testing and showcasing user-created HTML, CSS, and JavaScript code snippets
                    </p>
                    <p style={{ marginTop: 5 }}><i class="fa-solid fa-circle" style={{ color: "aqua" }} ></i> Reactjs </p>
                  </div>

                  <div className="project-grid">
                    <a href="https://github.com/thisnotebook/weatherWebApp" target='_blank'> <h2 class="project-heading2"><i class="fa-solid fa-cloud-bolt" ></i> Weather-Wise</h2></a>
                    <p>•Website with real-time weather reports.<br />
                      •Worldwide location & up-to-the-minute weather info.<br />
                      •Temperature, Humidity, wind speed, & more
                    </p>
                    <p style={{ marginTop: 5 }}><i class="fa-solid fa-circle " style={{ color: "yellow" }} ></i> JavaScript </p>
                  </div>

                  <div className="project-grid">
                    <a href="https://github.com/thisnotebook/To_do_list" target='_blank'><h2 class="project-heading2"><i class="fa-solid fa-list-check"></i> To_do_list</h2></a>
                    <p>•Task management<br />
                      •User-friendly interfaces, task prioritization, interactive functionality & optimizing
                      user productivity.
                    </p>
                    <p style={{ marginTop: 5 }}>  <i className="fa-solid fa-circle" style={{ color: "aqua" }}></i> Reactjs  </p>
                  </div>

                  <div className="project-grid">
                    <a href="https://github.com/thisnotebook/passwordGenerator" target='_blank'><h2 class="project-heading2"><i class="fa-solid fa-lock"></i> Password-Generator Tool</h2></a>
                    <p>•Online tool that allows users to generate highly secure passwords tailored<br />
                      •Customizable options for uppercase lowercase , special characters, and numeric values<br />
                      •It provides a password strength analysis

                    </p>
                    <p style={{ marginTop: 5 }}>  <i className="fa-solid fa-circle" style={{ color: "yellow" }}></i> JavaScript  </p>
                  </div>

                </div>

                <p style={{ color: "white", fontSize: "12px", paddingLeft: "5px" }}>for more project please refer Github</p>


              </div>
            </>







            {/* Education section */}
            <>
              <div id="Education" className="sec-container ">
                <h2>Education</h2>
                <ul>
                  <li className="education-list">
                    <img src={collageLogo} alt="NIT Jalandhar" class="img-edu" />
                    <h3>Dr BR Ambedkar National Institute of Technology, Jalandhar</h3>
                    <h4>B.Tech in Electronic & Communication Engineering <br />
                      December 2021 - May 2025 <br />
                      CGPA - 7.75
                    </h4>
                  </li>
                  <li className="education-list">
                    <img src={schoolLogo} alt="RPVV" class="img-edu" />
                    <h3>Rajkiya Pratibha Vikas Vidhalaya A-6 Paschim Vihar 110063</h3>
                    <h4>11th & 12th Science(PCM)<br />
                      APRIL 2018 - MARCH 2020 <br />
                      Marks Percentage - 92.2%
                    </h4>
                  </li>
                </ul>
              </div>
            </>



            <>

              <div id="Contacts" className="sec-container contact-container" >
                <h2>Reach Out to me!</h2>
                <div>

                  <h4 style={{ color: "gray" }}>Whether you have a project in mind or simply
                    want to drop a friendly hello, feel free to reach
                    out. My inbox eagerly awaits your message!</h4>

                  <div class="location" style={{ marginTop: "10px" }}>

                    <i class="fa-solid fa-location-dot" ></i>  New Delhi, India
                  </div>
                  <div className='contact-icon'>

                    <li>  <a className='contact-icon' href="https://www.linkedin.com/in/lucky-verma-109921228/" target='_blank'> <i class="fa-brands fa-linkedin" style={{ fontSize: "50px" }}></i> </a></li>
                    <li>  <a className='contact-icon' href="mailto:aadyant001001@gmail.com" target='_blank'><i class="fa-solid fa-envelope" style={{ fontSize: "50px" }}></i> </a></li>
                    <li>   <a className='contact-icon' href="https://github.com/thisnotebook" target='_blank'> <i class="fa-brands fa-github" style={{ fontSize: "50px" }}></i> </a></li>

                  </div>


                </div>

              </div>
              <div className='lowest'>
                <h3>Made with ❤️ by Lucky Verma</h3>
              </div>
            </>





          </main>

        </div>


      </div>



    </div>
  );
}

export default App;
