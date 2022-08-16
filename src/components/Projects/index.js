import React from 'react';
import Project from './individualProject';
import {projectOne,projectTwo,projectThree,projectFour,projectFive,projectSix} from "./data.js"

function Projects() {
    return (
    <div id="projects">
    <Project {...projectOne}/>
    <Project {...projectTwo}/>
    <Project {...projectThree}/>
    <Project {...projectFour}/>
    <Project {...projectFive}/>
    <Project {...projectSix}/>
    </div>
    );
  }
  
  export default Projects;