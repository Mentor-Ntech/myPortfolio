import React from "react";
import "./Experience.scss";
import { DiJavascript1 } from "react-icons/di";
import { SiSolidity } from "react-icons/si";


const Experience = () => {
  return (
    <section id="experience" className="exp">
      <div className="exp__skill">
        <div className="soft">
        <h2>Software Skills</h2>

        <div>
            <p>web development</p>
            <p>database management</p>
            <p>version control</p>
            <p>algorithm and data structure</p>
        </div>
        </div>

        <div className="lang">
            <h2>Languages</h2>

            <p> <DiJavascript1 /> Javascript</p>
            <p><SiSolidity /> Solidity</p>
        </div>

        <div className="p-skill">
            <h2>Personal Skills</h2>

            <p>Creativity &times; Team Work &times; Dedication</p>
        </div>
      </div>


      <div className="exp__experience">
        <div>
            <h2>Experience</h2>

            <div>
            <div className="wrapper">

                <div className="span"> 2023 till present</div>
                <p>CELO Africa DAO</p> 
                <small>Junior Dev.</small>
            </div>
            <div className="wrapper">

                <div className="span"> 2023 till present</div>
                <p>DLT Africa Academy</p> 
                <small>Team Lead</small>
            </div>

            </div>
        </div>

        <div>
            <h2>Education</h2>
                <p>BSc. in Agric (Lautech, Ogbomoso) </p>
        </div>
      </div>
      <div className="exp__stack">
        <div>
            <h2>What can I do?</h2>
            <p>database management &times; server side logic &times; <br/> UI design &times; blockchain development</p>
        </div>
        
        
      </div>
    </section>
  );
};

export default Experience;
