import React from 'react';

function Resume() {
    return (
<div>
    <h1>Resume</h1>
    <h3>Download my <a href={require(`./Resume.docx`)}>resume</a></h3>
    <ul>Front-end Proficiencies:
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
    </ul>
    <ul>Back-end Proficiencies:
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
    </ul>
</div>
    );
  }
  
  export default Resume;