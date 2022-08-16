import React from 'react';
import Stack from 'react-bootstrap/Stack';
import photoOfMe from "../../images/photoofme.jpg";

function About() {
    return (
        <Stack direction="horizontal" gap={3}>
        <img src={photoOfMe} alt="me" />
<div id="about">
    My name is Nadya and I am a beginning full stack developer. This site was created by me to show everybody who is interested all that I have learned during last six months. I have skills, ranging from HTML, CSS, JavaScript to MySQL, MongoDB, Express, Node and React. In this Portfolio you can find all my projects.
    </div>
    </Stack>
    );
  }
  
  export default About;