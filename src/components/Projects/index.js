import React from 'react';
import Project from './individualProject';
import {projectOne} from "./data.js"

function Projects() {
    return (
    <div id="projects">
    <Project {...projectOne}/>
    {/* <Project {...projectTwo}/> */}

    </div>
    );
  }
  
  export default Projects;